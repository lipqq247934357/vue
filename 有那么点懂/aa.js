var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
};


function baseCompile(template,
                     options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
        optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    }
}

/**
 *
 * @param template  模板
 * @param options  配置选项
 * @returns {{ast, render, staticRenderFns}}
 */

function compile(template,
                 options) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
    };

    if (options) {
        // merge custom modules
        if (options.modules) {
            finalOptions.modules =
                (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
            finalOptions.directives = extend(
                Object.create(baseOptions.directives || null),
                options.directives
            );
        }
        // copy other options
        for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
                finalOptions[key] = options[key];
            }
        }
    }

    var compiled = baseCompile(template, finalOptions);
    {
        errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled
}


function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    /**
     * template：字符串模板
     * options：配置选项
     * vm:vm
     */

    return function compileToFunctions(template,
                                       options,
                                       vm) {
        options = extend({}, options);
        var warn$$1 = options.warn || warn;
        delete options.warn;

        /* istanbul ignore if */
        {
            // detect possible CSP restriction
            try {
                new Function('return 1');
            } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                    warn$$1(
                        'It seems you are using the standalone build of Vue.js in an ' +
                        'environment with Content Security Policy that prohibits unsafe-eval. ' +
                        'The template compiler cannot work in this environment. Consider ' +
                        'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                        'templates into render functions.'
                    );
                }
            }
        }

        // check cache
        var key = options.delimiters
            ? String(options.delimiters) + template
            : template;
        if (cache[key]) {
            return cache[key]
        }

        // compile
        var compiled = compile(template, options);

        // check compilation errors/tips
        {
            if (compiled.errors && compiled.errors.length) {
                warn$$1(
                    "Error compiling template:\n\n" + template + "\n\n" +
                    compiled.errors.map(function (e) {
                        return ("- " + e);
                    }).join('\n') + '\n',
                    vm
                );
            }
            if (compiled.tips && compiled.tips.length) {
                compiled.tips.forEach(function (msg) {
                    return tip(msg, vm);
                });
            }
        }

        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
            return createFunction(code, fnGenErrors)
        });

        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn$$1(
                    "Failed to generate render function:\n\n" +
                    fnGenErrors.map(function (ref) {
                        var err = ref.err;
                        var code = ref.code;

                        return ((err.toString()) + " in\n\n" + code + "\n");
                    }).join('\n'),
                    vm
                );
            }
        }

        return (cache[key] = res)
    }
}
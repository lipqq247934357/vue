var bailRE = /[^\w.$]/;

function parsePath(path) {
    if (bailRE.test(path)) {
        return
    }
    var segments = path.split('.');
    return function (obj) {
        for (var i = 0; i < segments.length; i++) {
            if (!obj) {
                return
            }
            obj = obj[segments[i]];
        }
        return obj
    }
}

var c  =  parsePath('aa.bb.cc');
console.log(c({aa:'xx',bb:'xx',cc: 'xx'}));
/**
 * 这个文档主要是辅助学习vue源码
 *
 *
 *  Line4767 附近是Vue使用的开始处
 *
 */


/**
 * 关于代码的整体逻辑
 *  1.首先执行一些基本的函数声明，很多会用到的函数，还有一些判断（浏览器类型，是否原生支持某些特性）
 *  2.然后对Vue原型进行扩展
 *      (1)initMixin(Vue);   给Vue原型增加初始化方法 Vue._init
 *      (2)stateMixin(Vue);
 *          给Vue原型增加$data,$props方法，设置get，set，同时set都是不能更改的
 *          给Vue原型增加$set,$del,$watch
 *      (3)eventsMixin(Vue);
 *          给Vue原型增加$on,$off,$once,$emit,
 *      (4)lifecycleMixin(Vue);
 *          给Vue原型增加_update,$forceUpdate,$destory
 *      (5)renderMixin(Vue);
 *          给Vue原型增加了一系列的名称简写方法（方法：installRenderHelpers）
 *          给Vue原型增加了$nextTick，_render方法
 *   3.然后是初始化全局API
 *      (1)给Vues增加config属性，并且是只读的
 *      (2)给Vue增加set,delete,nextTick方法
 *      (3)给Vue的config属性初始化资源类型值
 *      (4)给Vue增加内置组件 components,filter,directives等
 *      (5)给Vue增加use方法，这个方法主要是安装插件用的
 *      (6)给Vue增加mixin方法，这个方法主要是合并属性用的
 *      (7)TODO 给Vue增加extend方法，具体什么意思还不是很清楚
 *      (8)TODO Create asset registration methods.
 *   4.然后是根据不同的环境执行不同的方法，最终返回Vue function
 *   5.执行 let vm = new Vue(options);  P4794
 *   6.执行init方法   P4647
 *      (1)设置_uid，_isVue
 *      (2)设置$options,它的值是合并new的时候传过来的options和Vue的options值
 *      (3)initLifecycle
 *      (4)initEvents
 *      (5)initRender
 *      (6)执行beforeCreated
 *      (7)TODO 处理$options.inject,不知道啥意思
 *      (8)initState
 *          <1>initProps
 *          <2>initMethods
 *          <3>initData
 *          <4>initComputed
 *          <5>initWatch
 *      (9)initProvide
 *      (10)执行created
 *    7.执行挂载的业务逻辑  P11073
 *       (1)通过判断获取模板
 *       (2)将模板进行编译 compileToFunctions
 *          关于模板编译的原理：首先有个基础编译函数baseCompile，然后还有个基本的编译配置baseOptions，
 *          在compile这个方法传入被编译的模板和选项，将选项和基础选项合并，将模板和最终选项传入baseCompile
 *          进行编译，返回ast，将ast放入renderFun中返回render函数
 *       (3)执行挂载方法  p2824
 *       (4)执行beforeMount
 *       (5)执行vm._update
 *       (6)执行mounted
 *       ()
 *       ()
 *       ()
 *
 *        学了一半，发现有es6版本，转头学es6版本了，这个版本先暂时留着，然后这些知识都是有用的，毕竟知识语法有那么一丢丢差异
 *
 *
 */

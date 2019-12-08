//参考github地址：  https://github.com/answershuto/learnVue
/**
 * 响应式系统的基本原理
 * vue.js使用的是es5的Object.defineProperty
 * 文档的核心思路是：
 * 1.有个方法渲染视图 cb
 * 2.有个方法将对象的所有属性增加get，set响应
 * 3.确定是哪个参数需要被传入进来
 */
// 渲染视图
function cb() {
    console.log('渲染视图');
}

// 给对象属性增加get，set
function react(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val;
        },
        set: function (newVal) {
            if (newVal === val) return;
            cb();
        }
    })
}

//给那个对象增加属性检测
function obser(obj) {
    if (!obj || (typeof obj !== "object")) {
        return;
    }
    Object.keys(obj).forEach((keys) => {
        react(obj, keys, obj[keys]);
    })
}


//封装Vue 创建一个类，对传入的对象执行响应式代码操作
class Vue {
    constructor(options) {
        this._data = options;
        obser(this._data)
    }
}

//执行操作逻辑
let v = new Vue({a: 2, name: 'lipeng'});
v._data.name = 'shuaige';
//参考github地址：  https://github.com/answershuto/learnVue
/**
 * 响应式系统的基本原理
 * vue.js使用的是es5的Object.defineProperty
 * 文档的核心思路是：
 * 1.有个方法渲染视图 cb
 * 2.有个方法将对象的所有属性增加get，set响应
 * 3.确定是哪个参数需要被传入进来
 *
 * 第二步：增加对数据的依赖收集追踪
 *
 *什么叫收集依赖：
 *  如果数据有变动，并且需要更新dom，执行操作，保证在这个闭环之内正确执行。
 *
 *  原理：
 *  1.在第一次render页面的时候，会执行object属性的get方法，这个点收集依赖
 *  2.在数据更新之后，收集的依赖对所有被依赖的dom进行操作
 *
 */


//给哪个对象增加属性检测
function obser(obj) {
    if (!obj || (typeof obj !== "object")) {
        return;
    }
    Object.keys(obj).forEach((keys) => {
        react(obj, keys, obj[keys]);
    })
}

// 给对象属性增加get，set
function react(obj, key, val) {

    let dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.addSub(Dep.target);
            return val;
        },
        set: function (newVal) {
            if (newVal === val) return;
            dep.notify();
        }
    })
}


//数据依赖存储
class Dep {
    constructor() {
        this.subs = [];
    };

    addSub(sub) {
        this.subs.push(sub);
    }

    notify() {
        this.subs.forEach((item) => {
            item.update();
        })
    }
}


// 更新视图
class Watcher {
    constructor() {
        Dep.target = this;
    }

    update() {
        console.log('视图更新了！');
    }
}

//
class Vue {
    constructor(data) {
        this._data = data;
        obser(this._data);
        new Watcher();
        console.log('render', this._data.test);
    }
}

let obj = {test: 'aa'};
let v = new Vue(obj);
obj.test = 'cc';
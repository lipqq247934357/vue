/**
 * 实现虚拟dom下的vnode节点
 *
 * 1.虚拟dom就是一棵javascript对象组成功的树结构，可以通过映射反映到真实环境中。
 *
 * 2.这一章参考react的实现原理，无非是采用js语法描述dom结构。
 *
 *
 */

class VNode {
    constructor(tag, data, children, text, elm) {
        // 当前节点的标签名
        this.tag = tag;
        // 当前节点的一些数据信息
        this.data = data;
        // 当前节点的子节点，是一个数组
        this.children = children;
        // 当前节点的文本
        this.text = text;
        // 当前节点对应的真实dom节点
        this.elm = elm;
    }
}

/**
 <template>
    <span class="demo" v-show="isShow">
        This is a span.
    </span>
 </template>
 */

// 将以上的代码用javascript标识就是：








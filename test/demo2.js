var app = new Vue({
    el:"#app",
    data:{topics:topics,
    idx:0,
    array:new Array()},
    methods:{
        next:function(){
            this.idx = this.idx+1;
        },prev:function(){
         this.idx = this.idx-1;
        }
    }
});

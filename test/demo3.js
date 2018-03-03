var child = {template: '<div>A custom component!</div>'};

var vue = new Vue({
    el: "#app",
    components:{
        'my-component':child
    }
});

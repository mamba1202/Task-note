var list = [
    {
        title: "吃饭打豆豆",
        isChecked: false //状态为false，为不选中  任务未完成
    },
    {
        title: "妙味课堂",
        isChecked: true   //状态为true，为选中    任务完成
    }
];

new Vue({
    el: '.main',
    data: {
        list: list,
        todo: '',
    },
    methods: {
        addTodo(data, ev) {   //添加任务--如要传参过来，事件处理对象要手动传递过来$event
            console.log(ev)
            //向list中添加一项任务
            //事件处理函数中的this指向是，当前这个根实例
            //if(ev.keyCode==13){
            this.list.push({
                //title: ev.target.value  --尽量不操作DOM
                title: this.todo,
                isChecked: false,
            })
            //}
        },
        deleteTodo(todo) { //删除任务
            var index = this.list.indexOf(todo)
            this.list.splice(index, 1)
        }
    }
})
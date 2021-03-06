var list = [
    {
        title: "吃饭睡觉打豆豆",
        isChecked: false //状态为false，为不选中  任务未完成
    },
    {
        title: "凯尔特人",
        isChecked: true   //状态为true，为选中    任务完成
    }
];

new Vue({
    el: '.main',
    data: {
        list: list,
        todo: '',
        edtorTodos: '',   //记录正在编辑的数据
        beforeTitle: '', //记录正在编辑的数据的title
    },
    computed:{
        noCheckeLength:function(){
            return this.list.filter(function(item){
                return !item.isChecked
            }).length
        }
    },
    methods: {
        addTodo(ev) {   //添加任务--如要传参过来，事件处理对象要手动传递过来$event
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
        },
        edtorTodo(todo) { //编辑任务
            //编辑任务的时候，记录一下编辑这条任务的title，为了在取消编辑的时候重新给之前title
            this.beforeTitle = todo.title,
                this.edtorTodos = todo
        },
        edtorTodoed(todo) {  //编辑任务成功
            this.edtorTodos = ''
        },
        cancelTodo(todo) {  //取消编辑任务
            todo.title = this.beforeTitle
            //让div显示出来，input隐藏
            this.edtorTodos = ''
            this.beforeTitle = ''
        }
    },
    directives: {
        "foucs": {
            update(el, binding) {
                if (binding.value) {
                    el.focus()
                }
            }
        }
    }
})
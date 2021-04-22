console.log('Vue', Vue); // Verifica Vue



const app = new Vue({
    el: '#app',

    data: {
        todos:[
            {
                text: 'Decidere cosa inserire',
                completed: false,
            },
            {
                text: 'Capire come inserire la data e l \' ora attuale',
                completed: false,
            },
        ],

        newTodo:'',
    },

    methods: {

        // Function per aggiungere un elemento alla lista
        addTodo(){
            // console.log('add new item');

            if(this.newTodo !== ''){
                this.todos.push({
                    text: this.newTodo,
                    completed: false
                });

            // Reset dell'input dopo averlo inserito
            this.newTodo = '';

            // Focus
            this.$refs.todoInput.focus(); // Per far tornare il focus all'unput dopo averlo inserito
            }
        },
    }
});
    
    
    

    



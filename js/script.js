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
        editTodo: {
            visibility: false,
            text:'',
            index: null,
        }
    },

    methods: {

        // Function per aggiungere un elemento alla lista
        addTodo(){
            // console.log('add new item');

            // Verifico inserimento di testo
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

        // Function per rimuovere elemento dalla lista tramite la 'X'
        removeTodo(index){
            console.log(index)
            this.todos.splice(index, 1); // Prendo posizione ed elimino 1 elemento


            // Eventualmente per ripristinare elemento dalla lista cancellato 
    
            // const deleted = this.todos.splice(index, 1)[0];
            // console.log(deleted);
        },

        // Function per lo status di Update 
        updateStatus(index){
            this.todos[index].completed = ! this.todos[index].completed
        },

        // Function per mostrare l'edit 
        showEdit(index){
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
            this.$refs.todoUp.focus();

        },

        // Function per modificare l'input dell'edit

        updateTodo(){
            console.log(this.editTodo);
            this.todos[this.editTodo.index].text = this.editTodo.text;
            this.closeEdit();

        },

        // Function per chiudere l'edit 
        closeEdit(){
            
            this.editTodo.visibility = false;
            this.editTodo.text = '';
            this.editTodo.index = null;

        }

    }
});
    
    
    

    



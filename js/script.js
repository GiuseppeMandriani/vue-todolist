console.log('Vue', Vue); // Verifica Vue



const app = new Vue({
    el: '#app',

    data: {
        images: [                   // Array delle immagini
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
        indexImages: 0,
        intervalId: 0,
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
        },

        orario:{
            ora: 'ciao',
            minuti:''
        }
    },

    mounted(){                  // MEtodo scatenato da solo, in un momento di vita dell'appilcazine
        this.startLoop()                                // Creato quando viene generata l'istanza Vue
        this.showDate()
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

        },

        // Next Img Functions
        nextImg(){
            // console.log('click');
            // this.indexImages += 1;     // Aumento valore per cambiare img

            // Condizione per tornare all'indice 0

            // A)

            // if(this.indexImages > (this.images.length - 1)){
            //     this.indexImages = 0;
            // };

            // B) Operatore ternario

            this.indexImages = (this.indexImages == (this.images.length - 1)) ? 0 : this.indexImages + 1;

        },

        // Funzione per far partire il loop
        startLoop(){
            this.intervalId = setInterval(() =>{
                this.nextImg();
            }, 2000);

        }, 

        //Funzione per orario attuale
        showDate(){
            this.orario = new Date();
            this.orario.ora = this.orario.getHours()
            this.orario.minuti = this.orario.getMinutes()



        }

    }
});
    
    
    

    



export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');

    }

    setValues(todo){
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;


    }

    onClick(callback){
        this.btn.onclick = () => {
            if (title.value === "" || description.value === "") {
                this.alert.show("Title and description and required");
                return;
              }
              $('#modal').modal('toggle')
          }

          callback();
    }
}
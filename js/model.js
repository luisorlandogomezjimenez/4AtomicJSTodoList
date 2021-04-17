export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.current = 1;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    const todo = {
      id: this.current++,
      title,
      description,
      completed: false,
    };
    
    this.todos.push(todo);
    console.log(this.todos);

    return {...todo}
  }

  removeTodo(id){
      const index = this.todos.findIndex((todo) => todo.id === id);
      
  }
}

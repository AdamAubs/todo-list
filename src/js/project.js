import { Todo } from "./todo.js";

export class Project {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(title) {
    this.todoList = this.todoList.filter((todo) => todo.title !== title);
  }

  listTodos() {
    return this.todoList.map((todo) =>
      todo.todo ? todo.todo.title : todo.title
    );
  }

  //   getIncompleteTodos() {
  //     return this.todoList.filter((todo) => !todo.completed);
  //   }

  

}

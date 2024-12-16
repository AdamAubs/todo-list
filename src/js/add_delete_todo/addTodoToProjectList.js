import { Todo } from "../todo";
export function addTodoToProjectList(todo, contentDiv) {
  // Prints a Todo for the project
  // Create a new todo list container
  const todoItem = document.createElement("div");
  todoItem.classList.add("project-card");
  const todoTitle = document.createElement("h3");

  // Add the description
  const todoDescription = document.createElement("p");

  // Add the date
  const todoDueDate = document.createElement("p");

  // Add the priority
  const todoPriority = document.createElement("p");

  // Add the notes
  const todoNotes = document.createElement("p");

  // Add the completed
  const todoCompleted = document.createElement("checkbox");

  // Regular todo or time/count todo
  if (todo instanceof Todo) {
    todoTitle.textContent = `${todo.title}`;
    todoDescription.textContent = `${todo.description}`;
    todoDueDate.textContent = `${todo.dueDate}`;
    todoPriority.textContent = `${todo.priority}`;
    todoNotes.textContent = `${todo.notes}`;
    todoCompleted.textContent = `${todo.completed}`;
  } else {
    todoTitle.textContent = `${todo.todo.title}`;
    todoDescription.textContent = `${todo.todo.description}`;
    todoDueDate.textContent = `${todo.todo.dueDate}`;
    todoPriority.textContent = `${todo.todo.priority}`;
    todoNotes.textContent = `${todo.todo.notes}`;
    todoCompleted.textContent = `${todo.todo.completed}`;
  }

  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDescription);
  todoItem.appendChild(todoDueDate);
  todoItem.appendChild(todoPriority);
  todoItem.appendChild(todoNotes);
  todoItem.appendChild(todoCompleted);

  contentDiv.appendChild(todoItem);
}

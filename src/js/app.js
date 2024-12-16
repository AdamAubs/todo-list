import { Project } from "./project";
import { CounterTodo, TimedTodo, Todo } from "./todo";

// Stack to store all the projects
const stack = [];

// Create project 1
const myProject = new Project("Project 1");

const regularTodo = new Todo(
  "todo title1",
  "todo description1",
  "todo date1",
  "todo priority1",
  "Todo notes1"
);

const timedTodo = new TimedTodo(
  "TimedTodo title1",
  "TimedTodo description1",
  "High1",
  20
);

const counterTodo = new CounterTodo(
  "CountTodo title1",
  "CountTodo description1",
  "Low1",
  8
);

// // Add todos to the project 1
myProject.addTodo(regularTodo);
myProject.addTodo(timedTodo);
myProject.addTodo(counterTodo);
console.log(myProject.listTodos());

// Create another project

const myProject2 = new Project("Project 2");

const regularTodo2 = new Todo(
  "todo title2",
  "todo description2",
  "todo date2",
  "todo priority2",
  "Todo notes2"
);

const timedTodo2 = new TimedTodo(
  "TimedTodo title2",
  "TimedTodo description 2",
  "High2",
  20
);

const counterTodo2 = new CounterTodo(
  "CountTodo title2",
  "CountTodo description2",
  "Low2",
  8
);

// // Add todos to the project 2
myProject2.addTodo(regularTodo2);
myProject2.addTodo(timedTodo2);
myProject2.addTodo(counterTodo2);
console.log(myProject2.listTodos());

stack.push(myProject);
stack.push(myProject2);
console.log(stack);

// // Use specific behavior
// timedTodo.startTimer();
// counterTodo.incrementTask();
// counterTodo.incrementTask();

// console.log(myProject.listTodos());

// export default function loadInitialPage() {
//   // Get the div to add the content to
//   const content = document.getElementById("content");

//   // Get the div to add projects to
//   const projectList = document.getElementById("projectList");

//   // for (project in myProject) {
//   //   const projectDiv = document.createElement("div");
//   // }

// }

export default function loadInitialPage() {
  // stack.forEach((project, index) => {
  //   console.log(project);
  //   const projectDiv = document.ge;
  // });
  renderProjectList();
}

function renderProjectList() {
  // Get projectList div to dynamically add to
  const projectListDiv = document.querySelector(".projectList");
  const addProjectBtn = document.querySelector(".addProjectBtn");

  projectListDiv.innerHTML = ""; // Clear existing projects
  stack.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-item");
    projectDiv.dataset.index = index; // Store the index for identification

    // Add project title
    const projectTitle = document.createElement("span");
    projectTitle.textContent = project.title;

    // Add event listener to open project
    projectTitle.addEventListener("click", () => {
      openProject(index);
    });

    // Create a delete button to delete a project
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add event listener to the delete button
    deleteBtn.addEventListener("click", () => {
      deleteProject(index);
    });

    // Append title and button to the project div
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(deleteBtn);
    projectListDiv.appendChild(projectDiv);
  });
}

function openProject(index) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Create and append the projects title
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `${stack.at(index).title}`;
  console.log(`Adding ${stack.at(index).title} to content`);
  contentDiv.appendChild(projectTitle);

  let projectList = stack.at(index).todoList;
  projectList.forEach((todo, index) => {
    // Create a new todo list container
    const todoItem = document.createElement("div");

    // Add the title
    const todoTitle = document.createElement("h4");
    todoTitle.textContent = `${todo.title}`;

    // Add the description
    const todoDescription = document.createElement("p");
    todoDescription.textContent = `${todo.description}`;

    // Add the date
    const todoDate = document.createElement("p");
    todoDate.textContent = `${todo.dueDate}`;

    // Add the priority
    const todoPriority = document.createElement("h4");
    todoPriority.textContent = `${todo.priority}`;

    // Add the notes
    const todoNotes = document.createElement("p");
    todoNotes.textContent = `${todo.notes}`;

    // Add the completed
    const todoCompleted = document.createElement("checkbox");
    todoCompleted.textContent = `${todo.completed}`;

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoDate);
    todoItem.appendChild(todoPriority);
    todoItem.appendChild(todoNotes);
    todoItem.appendChild(todoCompleted);

    contentDiv.appendChild(todoItem);
  });

  const todoDate = document.createElement("date");
  const todoPriority = document.createElement("p");
  const todoNote = document.createElement("p");
}

function addProject(title) {
  stack.push(title);
  renderProjectList();
}

function deleteProject(index) {
  stack.splice(index, 1); // Remove project at index
  renderProjectList();
}

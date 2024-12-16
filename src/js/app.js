import { Project } from "./project";
import { CounterTodo, TimedTodo, Todo } from "./todo";

// projectListArr to store all the projects
const projectListArr = [];

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

projectListArr.push(myProject);
projectListArr.push(myProject2);
console.log(projectListArr);

// // Use specific behavior
// timedTodo.startTimer();
// counterTodo.incrementTask();
// counterTodo.incrementTask();

// console.log(myProject.listTodos());

export default function loadInitialPage() {
  // projectListArr.forEach((project, index) => {
  //   console.log(project);
  //   const projectDiv = document.ge;
  // });
  renderProjectList();
}

// Side bar project list
function renderProjectList() {
  // Get projectList div to dynamically add to
  const projectListDiv = document.querySelector(".projectList");
  const addProjectBtn = document.querySelector(".addProjectBtn");

  projectListDiv.innerHTML = ""; // Clear existing projects

  // For each of the projects in the projectListArr
  projectListArr.forEach((project, index) => {
    console.log(project);

    // Create a new project div for the current project
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-item");
    projectDiv.dataset.index = index; // Store the index for identification

    // Add the projects title
    const projectTitle = document.createElement("span");
    projectTitle.textContent = project.title;

    // Add event listener to open project in the content div
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

  addProjectBtn.addEventListener("click", () => {
    addProjectToList(projectListDiv);
  });
}

function addProjectToList(projectListDiv, index) {
  // Clear the current content
  projectListDiv.innerHTML = "";

  // Create a form dynamically
  const form = document.createElement("form");
  form.classList.add("new-project-form");

  // Add a title input
  const titleInput = createFormInput("Title", "text");
  form.appendChild(titleInput);

  // Add a date input
  const dateInput = createFormInput("Date", "date");
  form.appendChild(dateInput);

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Project";
  submitButton.type = "submit";
  form.appendChild(submitButton);

  // Add event listener to the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the values from the form inputs
    const title = titleInput.querySelector("input").value;
    const date = dateInput.querySelector("input").value;

    // Create a new Todo instance
    const newProject = new Project(title, date);

    // Add the new project to the list
    projectListArr.push(newProject);

    // Reopen the project to show the updated todo list
    renderProjectList();
  });

  // Append the form to the projectListDiv
  projectListDiv.appendChild(form);
}

// Prints a Todo for the project
function printTodo(todo, contentDiv) {
  // Create a new todo list container
  const todoItem = document.createElement("div");
  const todoTitle = document.createElement("h4");

  // Add the description
  const todoDescription = document.createElement("p");

  // Add the date
  const todoDueDate = document.createElement("p");

  // Add the priority
  const todoPriority = document.createElement("h4");

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

// Prints the projects todo list title
function printProjectTitle(contentDiv, index) {
  // Create and append the projects title
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `${projectListArr.at(index).title}`;
  console.log(`Adding ${projectListArr.at(index).title} to content`);
  contentDiv.appendChild(projectTitle);
}

// Opens the projects todo list in content div
function openProject(index) {
  // Get the content div element
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear the current project

  // Print the projects title
  printProjectTitle(contentDiv, index);

  // Get the opened projects todo list
  let projectList = projectListArr.at(index).todoList;
  // Print each todo in the projects todo list
  for (let i = 0; i < projectList.length; ++i) {
    console.log(projectList.at(i));
    printTodo(projectList.at(i), contentDiv);
  }

  // Add a button to add a new todo to the project
  const addTodoBtn = document.createElement("div");
  addTodoBtn.classList.add("add-todo-btn");
  addTodoBtn.textContent = "Add A Todo To the Todo List";
  contentDiv.appendChild(addTodoBtn);

  addTodoBtn.addEventListener("click", () => {
    addTodoToProject(contentDiv, index);
  });
}

// Adds a todo to the current project
function addTodoToProject(contentDiv, index) {
  // Clear the current content
  contentDiv.innerHTML = "";

  // Create a form dynamically
  const form = document.createElement("form");
  form.classList.add("todo-form");

  // Add a title input
  const titleInput = createFormInput("Title", "text");
  form.appendChild(titleInput);

  // Add a description input
  const descriptionInput = createFormInput("Description", "text");
  form.appendChild(descriptionInput);

  // Add a due date input
  const dueDateInput = createFormInput("Due Date", "date");
  form.appendChild(dueDateInput);

  // Add a priority input
  const priorityInput = createFormInput("Priority", "text");
  form.appendChild(priorityInput);

  // Add a notes input
  const notesInput = createFormInput("Notes", "textarea");
  form.appendChild(notesInput);

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Add Todo";
  submitButton.type = "submit";
  form.appendChild(submitButton);

  // Add event listener to the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the values from the form inputs
    const title = titleInput.querySelector("input").value;
    const description = descriptionInput.querySelector("input").value;
    const dueDate = dueDateInput.querySelector("input").value;
    const priority = priorityInput.querySelector("input").value;
    const notes = notesInput.querySelector("textarea").value;

    // Create a new Todo instance
    const newTodo = new Todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      false
    );

    // Get the project index from the currently displayed project
    // const currentProjectIndex = parseInt(contentDiv.dataset.currentProject, 10);
    const currentProject = projectListArr[index];

    // Add the new Todo to the project
    currentProject.addTodo(newTodo);

    // Reopen the project to show the updated todo list
    openProject(index);
  });

  // Append the form to the content div
  contentDiv.appendChild(form);
}

// Helper function to create form input fields
function createFormInput(labelText, type) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const label = document.createElement("label");
  label.textContent = labelText;
  formGroup.appendChild(label);

  let input;
  if (type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = type;
  }

  formGroup.appendChild(input);

  return formGroup;
}

function addProject(title) {
  projectListArr.push(title);
  renderProjectList();
}

function deleteProject(index) {
  projectListArr.splice(index, 1); // Remove project at index
  renderProjectList();
}

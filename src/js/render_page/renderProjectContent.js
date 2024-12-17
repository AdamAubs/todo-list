import { projectListArr } from "../app";
import { addTodoToProjectList } from "../add_delete_todo/addTodoToProjectList";
import { createFormInput } from "../form_input_helper/createFormInput";
import { Todo, TimedTodo, CounterTodo } from "../todo";

// Prints the projects todo list title
function printProjectTitle(contentDiv, index) {
  // Create and append the projects title
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `${projectListArr.at(index).title}`;
  console.log(`Adding ${projectListArr.at(index).title} to content`);
  contentDiv.appendChild(projectTitle);
}

export function renderProjectContent(index) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear the current project

  // Update the browser history state
  history.pushState({ projectIndex: index }, "", `?project=${index}`);

  // Print the project's title
  printProjectTitle(contentDiv, index);

  // Get the opened project's todo list
  let projectList = projectListArr[index].todoList;

  // Print each todo in the project's todo list
  for (let i = 0; i < projectList.length; ++i) {
    addTodoToProjectList(projectList[i], contentDiv, index, i);
  }

  // Add a button to add a new todo to the project
  const addTodoBtn = document.createElement("div");
  addTodoBtn.classList.add("add-todo-btn");
  addTodoBtn.textContent = "Add A Todo To the Todo List";
  contentDiv.appendChild(addTodoBtn);

  addTodoBtn.addEventListener("click", () => {
    typeOfTodo(contentDiv, index);
  });
}

function typeOfTodo(contentDiv, index) {
  contentDiv.innerHTML = "";
  // Add a button to add a new todo to the project
  const addRegularTodoBtn = document.createElement("div");
  addRegularTodoBtn.classList.add("add-todo-btn");
  addRegularTodoBtn.textContent = "Add A Regular Todo To the Todo List";
  contentDiv.appendChild(addRegularTodoBtn);

  // Add a button to add a new todo to the project
  const addTimedTodoBtn = document.createElement("div");
  addTimedTodoBtn.classList.add("add-todo-btn");
  addTimedTodoBtn.textContent = "Add A Timed Todo To the Todo List";
  contentDiv.appendChild(addTimedTodoBtn);

  // Add a button to add a new todo to the project
  const addCountTodoBtn = document.createElement("div");
  addCountTodoBtn.classList.add("add-todo-btn");
  addCountTodoBtn.textContent = "Add A Count Todo To the Todo List";
  contentDiv.appendChild(addCountTodoBtn);

  addRegularTodoBtn.addEventListener("click", () => {
    addTodoToProject(contentDiv, index);
  });

  addTimedTodoBtn.addEventListener("click", () => {
    addTimeTodoToProject(contentDiv, index);
  });

  addCountTodoBtn.addEventListener("click", () => {
    addCounterTodoToProject(contentDiv, index);
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
    renderProjectContent(index);
  });

  // Append the form to the content div
  contentDiv.appendChild(form);
}

// Adds a todo to the current project
function addTimeTodoToProject(contentDiv, index) {
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

  // Add a priority input
  const priorityInput = createFormInput("Priority", "text");
  form.appendChild(priorityInput);

  // Add a priority input
  const startTimeInput = createFormInput("Timer Start Time", "number");
  form.appendChild(startTimeInput);

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
    const priority = priorityInput.querySelector("input").value;
    const duration = startTimeInput.querySelector("input").value;

    // Create a new Todo instance
    const newTimeTodo = new TimedTodo(title, description, priority, duration);

    // Get the project index from the currently displayed project
    // const currentProjectIndex = parseInt(contentDiv.dataset.currentProject, 10);
    const currentProject = projectListArr[index];

    // Add the new Todo to the project
    currentProject.addTodo(newTimeTodo);

    // Reopen the project to show the updated todo list
    renderProjectContent(index);
  });

  // Append the form to the content div
  contentDiv.appendChild(form);
}

// Adds a COunter todo to the current project
function addCounterTodoToProject(contentDiv, index) {
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

  // Add a priority input
  const priorityInput = createFormInput("Priority", "text");
  form.appendChild(priorityInput);

  // Add a priority input
  const maxCountInput = createFormInput("Max Count", "number");
  form.appendChild(maxCountInput);

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
    const priority = priorityInput.querySelector("input").value;
    const maxCount = maxCountInput.querySelector("input").value;

    // Create a new Todo instance
    const newCounterTodo = new CounterTodo(
      title,
      description,
      priority,
      maxCount
    );

    // Get the project index from the currently displayed project
    // const currentProjectIndex = parseInt(contentDiv.dataset.currentProject, 10);
    const currentProject = projectListArr[index];

    // Add the new Todo to the project
    currentProject.addTodo(newCounterTodo);

    // Reopen the project to show the updated todo list
    renderProjectContent(index);
  });

  // Append the form to the content div
  contentDiv.appendChild(form);
}

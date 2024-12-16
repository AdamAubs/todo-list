import { projectListArr } from "../app";
import { addTodoToProjectList } from "../add_delete_todo/addTodoToProjectList";
import { createFormInput } from "../form_input_helper/createFormInput";
import { Todo } from "../todo";

// Prints the projects todo list title
function printProjectTitle(contentDiv, index) {
  // Create and append the projects title
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = `${projectListArr.at(index).title}`;
  console.log(`Adding ${projectListArr.at(index).title} to content`);
  contentDiv.appendChild(projectTitle);
}

// Opens the projects todo list in content div
export function renderProjectContent(index) {
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
    addTodoToProjectList(projectList.at(i), contentDiv);
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
    renderProjectContent(index);
  });

  // Append the form to the content div
  contentDiv.appendChild(form);
}

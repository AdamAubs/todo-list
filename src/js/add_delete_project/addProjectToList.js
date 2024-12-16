import { Project } from "../project";
import { projectListArr } from "../app";
import { renderProjectList } from "../render_page/renderProjectList";
import { createFormInput } from "../form_input_helper/createFormInput";

export function addProjectToList(projectListDiv, index) {
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

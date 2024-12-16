import { renderProjectContent } from "./renderProjectContent";
import { projectListArr } from "../app";
import { deleteProject } from "../add_delete_project/deleteProject";
import { addProjectToList } from "../add_delete_project/addProjectToList";

// Side bar project list
export function renderProjectList() {
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
      renderProjectContent(index);
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

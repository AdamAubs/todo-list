import { renderProjectContent } from "./renderProjectContent";
import { projectListArr } from "../app";
import { deleteProject } from "../add_delete_project/deleteProject";
import { addProjectToList } from "../add_delete_project/addProjectToList";

// Side bar project list
export function renderProjectList() {
  const projectListDiv = document.querySelector(".projectList");
  const addProjectBtn = document.querySelector(".addProjectBtn");

  let isAddingProject = false; // Track toggle state

  // Function to render the project items
  function renderProjects() {
    projectListDiv.innerHTML = ""; // Clear existing projects
    projectListArr.forEach((project, index) => {
      // Create a new project div for the current project
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-item");
      projectDiv.dataset.index = index; // Store the index for identification

      // Add the project's title
      const projectTitle = document.createElement("span");
      projectTitle.textContent = project.title;

      // Add event listener to open project in the content div
      projectTitle.addEventListener("click", () => {
        renderProjectContent(index);
        // Add state to the browser's history stack
        history.pushState({ projectIndex: index }, "", `#project-${index}`);
      });

      // Create a delete button to delete a project
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      // Add event listener to the delete button
      deleteBtn.addEventListener("click", () => {
        deleteProject(index);
        renderProjects(); // Re-render after deletion
        history.pushState(null, "", ""); // Update the state after deleting
      });

      // Append title and button to the project div
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(deleteBtn);
      projectListDiv.appendChild(projectDiv);
    });
  }

  // Initially render the project list
  renderProjects();

  // Add event listener to the addProjectBtn with toggle logic
  addProjectBtn.addEventListener("click", () => {
    if (!isAddingProject) {
      // State: Adding a project
      addProjectToList(projectListDiv);
      isAddingProject = true;
      history.pushState({ adding: true }, "", "#add-project");
    } else {
      // State: Showing project list again
      renderProjects();
      isAddingProject = false;
      history.pushState({ adding: false }, "", "");
    }
  });

  // Listen to browser navigation (popstate event)
  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.projectIndex !== undefined) {
      renderProjectContent(event.state.projectIndex);
    } else if (event.state && event.state.adding) {
      addProjectToList(projectListDiv);
    } else {
      renderProjects();
    }
  });
}

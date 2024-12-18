import { projectListArr } from "../app";
import { renderProjectList } from "../render_page/renderProjectList";
import { renderProjectContent } from "../render_page/renderProjectContent";

export function deleteProject(index) {
  projectListArr.splice(index, 1); // Remove project at index
  renderProjectList();
  // Open the project one before the project that was deleted
  if (projectListArr.length === 0) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    return;
  } else {
    renderProjectContent(projectListArr.length - 1);
  }
}

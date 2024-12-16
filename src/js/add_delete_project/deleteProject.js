import { projectListArr } from "../app";
import { renderProjectList } from "../render_page/renderProjectList";

export function deleteProject(index) {
  projectListArr.splice(index, 1); // Remove project at index
  renderProjectList();
}

import { Project } from "./project";
import { CounterTodo, TimedTodo, Todo } from "./todo";
import {
  sampleProject1,
  sampleProject2,
} from "./initial_project_sample/deafultOutput";
import { renderProjectList } from "./render_page/renderProjectList";
import { renderProjectContent } from "./render_page/renderProjectContent";
import response from "./localStorage/localStorageCheck";

// projectListArr to store all the projects
export const projectListArr = [];
// Adds sample todos to list
projectListArr.push(sampleProject1);
projectListArr.push(sampleProject2);
console.log(projectListArr);

// Check if the browser supports localStorage
console.log(response);
export default function loadInitialPage() {
  renderProjectList();
  if (projectListArr.length !== 0) {
    renderProjectContent(0); // Render the first projects content
  }
}

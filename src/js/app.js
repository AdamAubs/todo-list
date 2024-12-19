import { Project } from "./project";
import { CounterTodo, TimedTodo, Todo } from "./todo";
import {
  sampleProject1,
  sampleProject2,
} from "./initial_project_sample/deafultOutput";
import { renderProjectList } from "./render_page/renderProjectList";
import { renderProjectContent } from "./render_page/renderProjectContent";
import response from "./localStorage/localStorageCheck";

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./localStorage/localStorageHelper";

// projectListArr to store all the projects
// export const projectListArr = [];
export const projectListArr = loadFromLocalStorage();

// Adds sample todos to list
// projectListArr.push(sampleProject1);
// projectListArr.push(sampleProject2);

saveToLocalStorage(projectListArr);
console.log(projectListArr);

// Check if the browser supports localStorage
console.log(response);
export default function loadInitialPage() {
  renderProjectList();
  if (projectListArr.length !== 0) {
    renderProjectContent(0); // Render the first projects content
  }
}

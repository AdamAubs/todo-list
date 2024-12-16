import { Project } from "./project";
import { CounterTodo, TimedTodo, Todo } from "./todo";
import {
  sampleProject1,
  sampleProject2,
} from "./initial_project_sample/deafultOutput";
import { renderProjectList } from "./render_page/renderProjectList";

// projectListArr to store all the projects
export const projectListArr = [];
// Adds sample todos to list
projectListArr.push(sampleProject1);
projectListArr.push(sampleProject2);
console.log(projectListArr);

export default function loadInitialPage() {
  renderProjectList();
}

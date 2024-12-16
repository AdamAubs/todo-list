import { Project } from "../project";
import { Todo, TimedTodo, CounterTodo } from "../todo";

// Create project 1
const myProject = new Project("Project 1");

const regularTodo = new Todo(
  "todo title1",
  "todo description1",
  "todo date1",
  "todo priority1",
  "Todo notes1"
);

const timedTodo = new TimedTodo(
  "TimedTodo title1",
  "TimedTodo description1",
  "High1",
  20
);

const counterTodo = new CounterTodo(
  "CountTodo title1",
  "CountTodo description1",
  "Low1",
  8
);

// // Add todos to the project 1
myProject.addTodo(regularTodo);
myProject.addTodo(timedTodo);
myProject.addTodo(counterTodo);
console.log(myProject.listTodos());

// Create another project

const myProject2 = new Project("Project 2");

const regularTodo2 = new Todo(
  "todo title2",
  "todo description2",
  "todo date2",
  "todo priority2",
  "Todo notes2"
);

const timedTodo2 = new TimedTodo(
  "TimedTodo title2",
  "TimedTodo description 2",
  "High2",
  20
);

const counterTodo2 = new CounterTodo(
  "CountTodo title2",
  "CountTodo description2",
  "Low2",
  8
);

// // Add todos to the project 2
myProject2.addTodo(regularTodo2);
myProject2.addTodo(timedTodo2);
myProject2.addTodo(counterTodo2);
console.log(myProject2.listTodos());

export const sampleProject1 = myProject;
export const sampleProject2 = myProject2;

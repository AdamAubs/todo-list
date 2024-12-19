import { Project } from "../project.js";
import { Todo, TimedTodo, CounterTodo } from "../todo";

const STORAGE_KEY = "projectListData";

export function saveToLocalStorage(projectListArr) {
  const serializedData = JSON.stringify(
    projectListArr.map((project) => ({
      title: project.title,
      date: project.date,
      todoList: project.todoList.map((todo) => {
        if (todo instanceof TimedTodo) {
          return {
            type: "TimedTodo",
            uuid: todo.todo.uuid,
            title: todo.todo.title,
            description: todo.todo.description,
            priority: todo.todo.priority,
            duration: todo.timedBehavior.duration,
            remainingSeconds: todo.timedBehavior.remainingSeconds, // Save state
          };
        } else if (todo instanceof CounterTodo) {
          return {
            type: "CounterTodo",
            uuid: todo.todo.uuid,
            title: todo.todo.description,
            priority: todo.todo.priority,
            maxCount: todo.counterBehavior.maxCount,
          };
        } else {
          return {
            type: "Todo",
            uuid: todo.uuid,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            notes: todo.notes,
          };
        }
      }),
    }))
  );

  localStorage.setItem(STORAGE_KEY, serializedData);
}

export function loadFromLocalStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (!serializedData) return [];

  const parsedData = JSON.parse(serializedData);
  return parsedData.map((project) => {
    const todos = project.todoList.map((todo) => {
      if (todo.type === "TimedTodo") {
        const timedTodo = new TimedTodo(
          todo.title,
          todo.description,
          todo.priority,
          todo.duration
        );
        timedTodo.todo.uuid = todo.uuid; // Reapply the UUID
        timedTodo.timedBehavior.remainingSeconds =
          todo.remainingSeconds || timedTodo.timedBehavior.remainingSeconds;
        return timedTodo;
      } else if (todo.type === "CounterTodo") {
        return new CounterTodo(
          todo.title,
          todo.description,
          todo.priority,
          todo.maxCount
        );
      } else {
        const regularTodo = new Todo(
          todo.title,
          todo.description,
          null,
          todo.priority,
          todo.notes
        );
        regularTodo.uuid = todo.uuid;
        return regularTodo;
      }
    });

    const rehydratedProject = new Project(project.title, project.date);
    todos.forEach((todo) => rehydratedProject.addTodo(todo));
    return rehydratedProject;
  });
}

export const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};

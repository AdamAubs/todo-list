import { CounterTodo, TimedTodo, Todo } from "../todo";
import { renderProjectContent } from "../render_page/renderProjectContent";
import { projectListArr } from "../app";
import { format } from "date-fns";

export function addTodoToProjectList(
  todo,
  contentDiv,
  projectIndex,
  todoIndex
) {
  // Prints a Todo for the project
  // Create a new todo list container
  const todoItemDiv = document.createElement("div");
  todoItemDiv.classList.add("project-card");

  // Create a delete button for the todo
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("deleteTodoBtn");
  deleteTodoBtn.textContent = "✕";

  // Attach a data attribute for the todo index
  deleteTodoBtn.dataset.todoIndex = todoIndex;

  todoItemDiv.appendChild(deleteTodoBtn);

  // Add common elements for all todos
  const todoTitle = document.createElement("h3");
  const todoDescription = document.createElement("p");
  const todoPriority = document.createElement("p");

  // Populate common fields
  todoTitle.textContent = `Title: ${todo.title || todo.todo.title}`;
  todoDescription.textContent = `Description: ${
    todo.description || todo.todo.description
  }`;
  // Set the todos background to match its chosen priority
  const priorityColor =
    (todo.priority || todo.todo?.priority || "").trim() || "gray";

  // Set the priority text
  let priorityText = "";
  if (priorityColor === "#BFE799") {
    priorityText = "Low";
  } else if (priorityColor === "#F3F087") {
    priorityText = "Medium";
  } else {
    priorityText = "High";
  }

  todoPriority.textContent = `Priority: ${priorityText}`;
  todoItemDiv.style.backgroundColor = `${priorityColor}`;

  // Append the Title, description, DueDate and priority to the todo
  todoItemDiv.appendChild(todoTitle);
  todoItemDiv.appendChild(todoDescription);

  // Add a regular todo, time or count todo
  if (todo instanceof Todo) {
    addRegularTodo(todo, todoItemDiv);
  } else if (todo instanceof TimedTodo) {
    addTimedTodo(todo, todoItemDiv);
  } else if (todo instanceof CounterTodo) {
    addCounterTodo(todo, todoItemDiv);
  }

  todoItemDiv.appendChild(todoPriority);

  contentDiv.appendChild(todoItemDiv);

  // Add event listener for delete
  deleteTodoBtn.addEventListener("click", () => {
    deleteTodoFromProject(projectIndex, todoIndex);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString); // Convert to Date object
  if (isNaN(date)) return "No due date";

  return format(date, "EEE, MMM, dd, yyyy"); //e.g "Mon, Jan 01, 2024"
}

// Adds regular todo to the todoItemDiv
function addRegularTodo(todo, todoItemDiv) {
  const todoNotes = document.createElement("textarea");
  const todoDueDate = document.createElement("p");

  // format the due date
  const formattedDate = formatDate(todo.dueDate);
  todoDueDate.textContent = `Due: ${formattedDate}`;

  todoItemDiv.appendChild(todoDueDate);
  todoItemDiv.appendChild(todoNotes);
}

// Adds Timed todo to the todoItemDiv
function addTimedTodo(todo, todoItemDiv) {
  const timerDiv = document.createElement("div");
  const timerDisplay = document.createElement("div");
  const startTimerBtn = document.createElement("button");
  const stopTimerBtn = document.createElement("button");
  const resetTimerBtn = document.createElement("button");

  resetTimerBtn.classList.add("reset-timer-btn");
  timerDiv.classList.add("timerDiv");
  timerDisplay.classList.add("timer-display");
  startTimerBtn.classList.add("start-timer-btn");
  stopTimerBtn.classList.add("stop-timer-btn");

  resetTimerBtn.textContent = "Reset";
  timerDisplay.textContent = `Time Left: ${todo.getInitialTime()}`;
  startTimerBtn.textContent = "Start Timer";
  stopTimerBtn.textContent = "Stop Timer";

  startTimerBtn.addEventListener("click", () => {
    todo.startTimer((timeLeft) => {
      timerDisplay.textContent = `Time left: ${timeLeft}`;
    });
  });

  stopTimerBtn.addEventListener("click", () => {
    todo.stopTimer();
    // timerDisplay.textContent = "Timer Stopped";
  });

  resetTimerBtn.addEventListener("click", () => {
    todo.resetTimer((resetTime) => {
      // This is your updateUI function
      timerDisplay.textContent = `Time Left: ${resetTime}`;
    });
  });

  timerDiv.appendChild(resetTimerBtn);
  timerDiv.appendChild(timerDisplay);
  timerDiv.appendChild(startTimerBtn);
  timerDiv.appendChild(stopTimerBtn);

  todoItemDiv.appendChild(timerDiv);
}

// Adds counter todo to the todoItemDiv
function addCounterTodo(todo, todoItemDiv) {
  const stackDiv = document.createElement("div");
  const stackDisplay = document.createElement("div");
  const incrementButton = document.createElement("button");
  const removeButton = document.createElement("button");
  const countInstructions = document.createElement("p");
  const progressContainerDiv = document.createElement("div");
  const progressBarDiv = document.createElement("div");

  progressBarDiv.classList.add("progress-bar");
  progressContainerDiv.classList.add("progress-container");
  stackDiv.classList.add("stackDiv");
  stackDisplay.classList.add("stack-display");
  incrementButton.classList.add("increment-btn");
  removeButton.classList.add("remove-btn");
  countInstructions.classList.add("countInstructions");

  stackDisplay.textContent = `${todo.counterBehavior.stack.join(", ")}`;
  incrementButton.textContent = "Add";
  removeButton.textContent = "Remove";

  console.log(todo.counterBehavior.stack.empty);

  progressContainerDiv.appendChild(progressBarDiv);
  stackDiv.appendChild(progressContainerDiv);

  let progress = 0;
  const maxCount = todo.getMaxHeight();

  // Initial progress update
  const initialCount = todo.counterBehavior.stack.length;
  progress = (initialCount / maxCount) * 100;
  progressBarDiv.style.width = `${progress}%`;

  incrementButton.addEventListener("click", () => {
    todo.incrementTask(); // Increment the counter
    stackDisplay.textContent = `${todo.counterBehavior.stack.join(", ")}`;

    // Calculate progress dynamically based on the current stack size
    const currentCount = todo.counterBehavior.stack.length;
    progress = Math.min((currentCount / maxCount) * 100, 100); // Ensure it caps at 100%

    // document.querySelector(".progress-bar").style.width = `${progress}%`;
    // Update progress bar width for this specific todo item
    progressBarDiv.style.width = `${progress}%`;
  });

  removeButton.addEventListener("click", () => {
    todo.removeTask();
    stackDisplay.textContent = `${todo.counterBehavior.stack.join(", ")}`;
    // Calculate progress dynamically based on the current stack size
    const currentCount = todo.counterBehavior.stack.length;
    progress = Math.max((currentCount / maxCount) * 100, 0); // Ensure it doesn't go below 0%

    // Update progress bar width for this specific todo item
    progressBarDiv.style.width = `${progress}%`;
  });

  countInstructions.textContent = `Count to reach is: ${todo.getMaxHeight()}`;

  stackDiv.appendChild(stackDisplay);
  stackDiv.appendChild(incrementButton);
  stackDiv.appendChild(removeButton);

  todoItemDiv.appendChild(stackDiv);
  todoItemDiv.appendChild(countInstructions);
}

// Functionality to delete a todo from the project
function deleteTodoFromProject(projectIndex, todoIndex) {
  // Access the current project's todo list
  const currentProject = projectListArr[projectIndex];

  // Remove the targeted todo using splice
  currentProject.todoList.splice(todoIndex, 1);

  console.log(
    `Deleted todo at index ${todoIndex} from project ${projectIndex}`
  );

  // Re-render the project content to reflect the updated list
  renderProjectContent(projectIndex);
}

import { CounterTodo, TimedTodo, Todo } from "../todo";
import { renderProjectContent } from "../render_page/renderProjectContent";
import { projectListArr } from "../app";

export function addTodoToProjectList(
  todo,
  contentDiv,
  projectIndex,
  todoIndex
) {
  // Prints a Todo for the project
  // Create a new todo list container
  const todoItem = document.createElement("div");
  todoItem.classList.add("project-card");

  // Create a delete button for the todo
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("deleteTodoBtn");
  deleteTodoBtn.textContent = "✕";

  // Attach a data attribute for the todo index
  deleteTodoBtn.dataset.todoIndex = todoIndex;

  todoItem.appendChild(deleteTodoBtn);

  // Add common elements for all todos
  const todoTitle = document.createElement("h3");
  const todoDescription = document.createElement("p");
  const todoDueDate = document.createElement("p");
  const todoPriority = document.createElement("p");
  const todoNotes = document.createElement("p");

  const todoCompleted = document.createElement("p");

  // Populate common fields
  todoTitle.textContent = `Title: ${todo.title || todo.todo.title}`;
  todoDescription.textContent = `Description: ${
    todo.description || todo.todo.description
  }`;
  todoPriority.textContent = `Priority: ${todo.priority || todo.todo.priority}`;

  // Regular todo or time/count todo
  if (todo instanceof Todo) {
    todoTitle.textContent = `${todo.title}`;
    todoDescription.textContent = `${todo.description}`;
    todoDueDate.textContent = `${todo.dueDate}`;
    todoPriority.textContent = `${todo.priority}`;
    todoNotes.textContent = `${todo.notes}`;
    todoCompleted.textContent = `${todo.completed}`;
  } else if (todo instanceof TimedTodo) {
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

    todoItem.appendChild(timerDiv);
  } else if (todo instanceof CounterTodo) {
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

    incrementButton.addEventListener("click", () => {
      todo.incrementTask(); // Increment the counter
      stackDisplay.textContent = `${todo.counterBehavior.stack.join(", ")}`;

      // Calculate progress dynamically based on the current stack size
      const currentCount = todo.counterBehavior.stack.length;
      progress = Math.min((currentCount / maxCount) * 100, 100); // Ensure it caps at 100%

      document.querySelector(".progress-bar").style.width = `${progress}%`;
    });

    removeButton.addEventListener("click", () => {
      todo.removeTask();
      stackDisplay.textContent = `${todo.counterBehavior.stack.join(", ")}`;
      // Calculate progress dynamically based on the current stack size
      const currentCount = todo.counterBehavior.stack.length;
      progress = Math.max((currentCount / maxCount) * 100, 0); // Ensure it doesn't go below 0%
      document.querySelector(".progress-bar").style.width = `${progress}%`;
    });

    countInstructions.textContent = `Count to reach is: ${todo.getMaxHeight()}`;

    stackDiv.appendChild(stackDisplay);
    stackDiv.appendChild(incrementButton);
    stackDiv.appendChild(removeButton);

    todoItem.appendChild(stackDiv);
    todoItem.appendChild(countInstructions);
  }

  // Check if it's a TimedTodo

  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDescription);
  todoItem.appendChild(todoDueDate);
  todoItem.appendChild(todoPriority);
  todoItem.appendChild(todoNotes);
  // todoItem.appendChild(todoCompleted);

  contentDiv.appendChild(todoItem);

  // Add event listener for delete
  deleteTodoBtn.addEventListener("click", () => {
    deleteTodoFromProject(projectIndex, todoIndex);
  });
}

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

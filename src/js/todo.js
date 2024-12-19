//
import {
  addSeconds,
  addMinutes,
  differenceInSeconds,
  format,
  intervalToDuration,
} from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { savePeriodicUpdate } from "./localStorage/localStorageHelper";

export class Todo {
  constructor(
    title = "",
    description = "",
    dueDate = "",
    priority = "",
    notes = ""
  ) {
    this.uuid = uuidv4(); // Generate a unique indetifier
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // "green", "yellow", or "red"
    this.notes = notes;
    this.completed = false;
  }

  markAsComplete() {
    this.completed = true;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }
}

class TimedBehavior {
  constructor(duration) {
    this.duration = duration; // in minutes
    this.startTime = null; // The initial start time
    this.endTime = null; // The end time of the timer
    this.intervalId = null; // Timer interval ID
    this.remainingSeconds = duration * 60; // Remaining time in seconds
    this.isPaused = false; // To track if the timer is paused
  }

  get title() {
    return this.todo?.title || "No Title";
  }

  // Start or Resume the Timer
  startTimer(callback, saveDataCallback) {
    if (this.intervalId) return; // Prevent multiple intervals from being created

    if (!this.isPaused) {
      // Fresh start: Set total duration
      this.startTime = new Date();
      this.endTime = addSeconds(this.startTime, this.remainingSeconds);
    } else {
      // Resuming from pause: Calculate new endTime
      this.startTime = new Date();
      this.endTime = addSeconds(this.startTime, this.remainingSeconds);
      this.isPaused = false; // Reset the pause flag
    }

    // Start interval to update timer
    this.intervalId = setInterval(() => {
      const now = new Date();
      this.remainingSeconds = differenceInSeconds(this.endTime, now);

      if (this.remainingSeconds <= 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.remainingSeconds = 0;
        callback("Timer Complete!");
      } else {
        const remainingTime = intervalToDuration({
          start: now,
          end: this.endTime,
        });
        callback(this.formatRemainingTime(remainingTime));
      }
    }, 100);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isPaused = true; // Mark the timer as paused
    }
  }

  resetTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPaused = false;
    this.remainingSeconds = this.duration * 60; // Reset to the original duration

    // Calculate the remaining time in hours, minutes, and seconds
    const remainingDuration = {
      hours: Math.floor(this.remainingSeconds / 3600),
      minutes: Math.floor((this.remainingSeconds % 3600) / 60),
      seconds: this.remainingSeconds % 60,
    };

    // Return the formatted time
    return this.formatRemainingTime(remainingDuration); // Return the formatted time
  }

  formatRemainingTime(duration) {
    const { hours, minutes, seconds } = duration;
    return `${hours || 0}h ${minutes || 0}m ${seconds || 0}s`;
  }
}

class CounterBehavior {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.count = 0;
    this.stack = []; // Stack to hold completed tasks
  }

  get title() {
    return this.todo.title;
  }

  increment() {
    if (this.count < this.maxCount) {
      this.stack.push(`${this.count + 1}`);
      this.count++;
      console.log(`Task ${this.count} added to the stack.`);
    } else {
      console.log("Max count reached!");
    }
  }

  popTask() {
    if (this.stack.length > 0) {
      const task = this.stack.pop();
      this.count--;
      console.log(`Task removed: ${task}`);
    } else {
      console.log("Stack is empty.");
    }
  }

  showStack() {
    console.log("Current Stack:", this.stack);
  }
}

export class TimedTodo {
  constructor(title, description, priority, duration) {
    this.todo = new Todo(title, description, null, priority, "");
    this.timedBehavior = new TimedBehavior(duration);
  }

  saveData() {
    console.log("Saving data: ", {
      title: this.todo.title,
      remainingSeconds: this.timedBehavior.remainingSeconds,
    });
  }

  // Get the formatted initial time
  getInitialTime() {
    const hours = Math.floor(this.timedBehavior.remainingSeconds / 3600);
    const minutes = Math.floor(
      (this.timedBehavior.remainingSeconds % 3600) / 60
    );
    const remainingSeconds = this.timedBehavior.remainingSeconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }

  startTimer(updateUI) {
    this.timedBehavior.startTimer(
      (timeLeft) => {
        updateUI(timeLeft); // Pass the remaining time to the UI
      },
      () => this.saveData() // Save data callback
    );
  }

  stopTimer() {
    this.timedBehavior.stopTimer();
  }

  resetTimer(updateUI) {
    console.log("resetting timer...");
    const resetTime = this.timedBehavior.resetTimer();
    updateUI(resetTime);
  }
}

export class CounterTodo {
  constructor(title, description, priority, maxCount) {
    this.todo = new Todo(title, description, null, priority, "");
    this.counterBehavior = new CounterBehavior(maxCount);
  }

  getMaxHeight() {
    return this.counterBehavior.maxCount;
  }

  incrementTask() {
    this.counterBehavior.increment();
  }

  removeTask() {
    this.counterBehavior.popTask();
  }

  showStack() {
    this.counterBehavior.showStack();
  }
}

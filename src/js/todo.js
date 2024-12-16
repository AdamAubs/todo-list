export class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
    this.duration = duration;
    this.startTime = null;
  }

  get title() {
    return this.todo.title;
  }

  startTimer() {
    this.startTime = new Date();
    console.log(`Timer started for ${this.duration} minutes.`);
  }
}

class CounterBehavior {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.count = 0;
  }

  get title() {
    return this.todo.title;
  }

  increment() {
    if (this.count < this.maxCount) {
      this.count++;
      console.log(`Count: ${this.count}`);
    } else {
      console.log("Max count reached!");
    }
  }
}

export class TimedTodo {
  constructor(title, description, priority, duration) {
    this.todo = new Todo(title, description, priority);
    this.timedBehavior = new TimedBehavior(duration);
  }

  startTimer() {
    this.timedBehavior.startTimer();
  }
}

export class CounterTodo {
  constructor(title, description, priority, maxCount) {
    this.todo = new Todo(title, description, priority);
    this.counterBehavior = new CounterBehavior(maxCount);
  }

  incrementTask() {
    this.counterBehavior.increment();
  }
}

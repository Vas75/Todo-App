export class Todo {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate; //getter/setter here, use date-fns?
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
  }
}

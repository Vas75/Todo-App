export class Todo {
  constructor(title, dueDate, priority, description, index) {
    this.title = title;
    this.dueDate = dueDate; //getter/setter here, use date-fns?
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
    this.index = index;
  }
}

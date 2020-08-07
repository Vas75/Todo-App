export class Todo {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate; //getter/setter here, use date-fns?
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
  }
  updateTodo(newTitle, newDueDate, newPriority, newDescription) {
    this.title = newTitle ? newTitle : this.title;
    this.dueDate = newDueDate ? newDueDate : this.dueDate;
    this.priority = newPriority ? newPriority : this.priority;
    this.description = newDescription ? newDescription : this.description;
  }
}

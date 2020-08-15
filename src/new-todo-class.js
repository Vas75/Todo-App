export class Todo {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
  }

  //below cannot be a setter, error setters should have 1 parameter.
  updateTodo(newTitle, newDueDate, newPriority, newDescription) {
    this.title = newTitle ? newTitle : this.title;
    this.dueDate = newDueDate ? newDueDate : this.dueDate;
    this.priority = newPriority ? newPriority : this.priority;
    this.description = newDescription ? newDescription : this.description;
  }

  get dueDateText() {
    if (this.dueDate) {
      const parsedDateArr = this.parseDate(this.dueDate);
      const whenDue = new Date(...parsedDateArr);
      return `${format(whenDue, "MMM do, yyyy")}`;
    } else {
      return "No due date.";
    }
  }
  //needed to format date from datepicker, so new Date, and date-fns return correct date.
  parseDate(date) {
    return date.split("-").map((part, index) => {
      if (index === 1) {
        return part - 1;
      }
      return parseInt(part);
    });
  }
}

import { format } from "date-fns";

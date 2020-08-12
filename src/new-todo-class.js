export class Todo {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate; //getter/setter here, use date-fns?
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
      return `due: ${formatDistanceToNow(whenDue, { addSuffix: true })}`;
    } else {
      return "No due date.";
    }
  }

  parseDate(date) {
    return date.split("-").map((part, index) => {
      if (index === 1) {
        return part - 1;
      }
      return parseInt(part);
    });
  }
}

import { formatDistanceToNow } from "date-fns";

/*
Date picker has the date, date is return from my function and assigned to instance, setter to put date in milliseconds? This is 
retrieved to render to dom. Getter get the milliseconds, passes it date-fns to format to a string of date, and getter returns
that to be rendered? When user submit new todo, inside of getFormData() we grab datepicker value as unix timestamp, if not 
included, value is nan, else milliseconds place on instance, what to do if nan? Handle by the getter? If nan, return some text?
With setter? think I need to import date-fns here?
*/

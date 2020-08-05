//called on page load, and when new project added
function loadAllProjects() {
  clearContainer(projectsContainer);

  Projects.forEach((project, index) => {
    const projectTitle = project.title;
    const isSelected = project.selected;
    renderSingleProject(projectTitle, isSelected, index);
  });
}

function renderSingleProject(projectName, isSelected, index) {
  const projectDiv = makeProjectDiv(projectName, index);

  const classes = isSelected
    ? ["projects-div", "selected-project"]
    : ["projects-div"];

  projectDiv.classList.add(...classes);
  projectsContainer.appendChild(projectDiv);
}

function makeProjectDiv(title, index) {
  const div = document.createElement("div");
  div.id = index;
  div.textContent = title;
  return div;
}

function renderAllTodos(todosArr) {
  clearContainer(todosContainer);

  todosArr.forEach((todo, index) => {
    const { title, dueDate, description, isComplete } = todo;

    const todoDiv = makeTodoDiv(title, isComplete);
    todoDiv.innerHTML = getTodoInnerHTML(
      title,
      dueDate,
      description,
      isComplete,
      index
    );

    todosContainer.appendChild(todoDiv);
  });
}

function makeTodoDiv(todoTitle, isComplete) {
  const div = document.createElement("div");
  div.setAttribute("data-todo-title", `${todoTitle}`);

  if (isComplete) div.classList.add("todo-complete");

  return div;
}

function getTodoInnerHTML(title, dueDate, description, isComplete, index) {
  //bottom nested div hidden default, show on click of upper nested div

  return `  
            <div class="todo todo-upper"> 
              <button type="button" class="todo-delete-btn">delete</button>
              ${title}, 
              due: ${dueDate}
              <label for="checkBox-${index}">
                completed
                <input type="checkbox" class="todo-checkbox" id="checkBox-${index}" ${
    isComplete ? "checked" : ""
  }> 
              </label> 
            </div>
            <div class="todo todo-description-hidden">
              ${description} <button type="button" class="todo-edit-btn" title="Click to edit todo.">edit todo</button>
            </div>            
          `;
}

//clears project/todos container of html (rendered projects/todos)
function clearContainer(container) {
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
}

import { Projects, projectsContainer, todosContainer } from "./index.js";
export { loadAllProjects, renderAllTodos };

//add styles to todo element on click, no default, so dont have to worry about style on page load
//need to attach eventlistener(1 or more) to todo html, event delegation? Need to listen for click on upper todo, to show
//lower part, and change of checkbox in upper todo, which styles todo as completed or not(change compl prop on obj too), and need to add delete btn to upper
//todo, have to listene for that click too, need to add btn to lower todo that brings up modal/form to edit todo.

//added logic that changes completed prop on instance when checkbox clicked, then depending on isComplete styleing changed
//, box checked or unchecked depending on th property

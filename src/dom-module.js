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
    const todoTitle = todo.title;

    const todoDiv = makeTodoDiv(todoTitle);
    todoDiv.innerHTML = getTodoInnerHTML(todo, index);

    todosContainer.appendChild(todoDiv);
  });
}

function makeTodoDiv(todoTitle) {
  const div = document.createElement("div");
  div.setAttribute("data-todo-title", `${todoTitle}`);

  return div;
}

//pick up below//////////////////////////////////////////////////////////////////////////////////////////
function getTodoInnerHTML(todoInstance, index) {
  const { title, dueDate, description, isComplete } = todoInstance;
  //bottom nested div hidden default, show on click of upper nested div

  return `  
            <div class="todo todo-upper"> 
              <button type="button" class="todo-delete-btn">delete</button>
              ${title}, 
              due: ${dueDate}
              <label for="checkBox-${index}">
                completed
                <input type="checkbox" class="todo-checkbox" id="checkBox-${index}"> 
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
//remember, im updating todo objs on the array, when I update by form, how do I then get that data on the todo obj? I have a funct
//that gets array, data attribute on the outer div of todo with title, so match title of todo obj.

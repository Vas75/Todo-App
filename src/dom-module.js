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

  function makeDeleteBtn(index) {
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-index", `${index}`);
    deleteBtn.setAttribute("type", "button");
    deleteBtn.textContent = "delete project";
    return deleteBtn;
  }

  div.appendChild(makeDeleteBtn(index));
  return div;
}

function getSelectedProjectTitle() {
  return Projects.reduce((title, project) => {
    return (title = project.selected ? project.title : title);
  }, "");
}

function displayProjectTitle(title) {
  projectTitleHeading.textContent = title;
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
              ${title} (Due: ${dueDate}.)
              <label for="checkBox-${index}">
                completed
                <input type="checkbox" class="todo-checkbox" id="checkBox-${index}" ${
    isComplete ? "checked" : ""
  }> 
              </label> 
            </div>
            <div class="todo todo-description-hidden">
              <p>${description}</p> <button type="button" class="todo-edit-btn" title="Click to edit todo.">edit todo</button>
            </div>            
          `;
}

//retrieve form data for creating/updating todos
function getFormData(formEl) {
  return [...formEl].reduce((data, formEl) => {
    const tag = formEl.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
      return (data = [...data, formEl.value]);
    }
    return data;
  }, []);
}

function showTodoDescription(containerDiv) {
  containerDiv.classList.toggle("todo-description-show");
}

function toggleEditModal() {
  const hasShowClass = editModal.classList.contains("show");

  if (hasShowClass) {
    editModal.classList.remove("show");
    return;
  }
  editModal.classList.add("show");
}

function updateFormDataAttribute(tudoTitle) {
  editTodoForm.setAttribute("data-title", `${tudoTitle}`);
}

//clears project/todos container of html (rendered projects/todos)
function clearContainer(container) {
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
}

import {
  Projects,
  projectsContainer,
  projectTitleHeading,
  todosContainer,
  editModal,
  editTodoForm,
} from "./index.js";

export {
  loadAllProjects,
  renderAllTodos,
  getFormData,
  toggleEditModal,
  showTodoDescription,
  updateFormDataAttribute,
  getSelectedProjectTitle,
  displayProjectTitle,
};

//add styles to todo element on click, no default, so dont have to worry about style on page load
//need to attach eventlistener(1 or more) to todo html, event delegation? Need to listen for click on upper todo, to show
//lower part, and change of checkbox in upper todo, which styles todo as completed or not(change compl prop on obj too), and need to add delete btn to upper
//todo, have to listene for that click too, need to add btn to lower todo that brings up modal/form to edit todo.

//added logic that changes completed prop on instance when checkbox clicked, then depending on isComplete styleing changed
//, box checked or unchecked depending on th property

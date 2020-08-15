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
    ? ["projects-div", "clickable", "selected-project"]
    : ["projects-div", "clickable"];

  projectDiv.classList.add(...classes);
  projectDiv.setAttribute("title", "Click to see this projects todos.");
  projectsContainer.appendChild(projectDiv);
}

function makeProjectDiv(title, index) {
  const div = document.createElement("div");
  div.id = index;
  div.textContent = title;

  function makeDeleteBtn(index) {
    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("data-index", `${index}`);
    deleteBtn.setAttribute("title", "Click to delete this project.");
    deleteBtn.classList.add(...["far", "fa-trash-alt", "fa-2x"]);
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

//obj destructing used here
function renderAllTodos(todosArr) {
  clearContainer(todosContainer);

  todosArr.forEach((todo, index) => {
    const { title, description, isComplete, priority } = todo;
    const dueDateText = todo.dueDateText;

    const todoDiv = makeTodoDiv(title, isComplete);
    todoDiv.innerHTML = getTodoInnerHTML(
      title,
      dueDateText,
      description,
      isComplete,
      index,
      priority
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

function getTodoInnerHTML(
  title,
  dueDateText,
  description,
  isComplete,
  index,
  priority
) {
  //bottom nested div hidden default, show on click of upper nested div

  const priorityClass =
    priority === "high"
      ? "todo-high-priority"
      : priority === "medium"
      ? "todo-medium-priority"
      : "todo-low-priority";

  const isChecked = isComplete ? "checked" : "";

  return `  
            <div class="todo todo-upper clickable ${priorityClass}" title="Click to expand."> 
              <i class="far fa-trash-alt fa-2x todo-delete-btn" title="Delete todo."></i>
              ${title} (${dueDateText})
              <label for="checkBox-${index}">
              <i class="far fa-check-circle fa-2x todo-checkbox ${isChecked}" id="checkBox-${index}" title="Click to mark done."></i>
              </label> 
            </div>
            <div class="todo todo-description-hidden">
              <p class="todo-inner-text">${description}</p>
              <i class="far fa-edit fa-2x todo-edit-btn" title="Click to edit todo."></i>
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

const projectsContainer = document.getElementById("projects-container");
const addProjectBtn = document.getElementById("add-project-btn");
const projectInput = document.getElementById("add-project-input");
const todosContainer = document.getElementById("todos-container");
const addTodoForm = document.getElementById("add-todo-form");
const editModal = document.getElementById("edit-modal");
const editTodoForm = document.getElementById("edit-todo-form");

//below Project will get localstorage if present or general obj, general on first page load"
//the general project may need to be dynamic, wont have any getter/setter if not instance of Project.
//wont have methods of class instances either!!!!!!! Currently no methods on Project class.
let Projects = [
  // {
  //   title: "general",
  //   todos: [
  //     /*todo instances go here */
  //   ],
  //   selected: true,
  // },
];

//handles process of adding new projects
function addNewProjectObj(projectTitle) {
  const project = getProjectObj(projectTitle);
  Projects.push(project);
  //passing index of last obj, makes selected, so added prj will be selected, select styles added to it, and removed from other.
  handleProjectSelection(Projects.length - 1);
}

//handles selection of specific project/additon of new project,
function handleProjectSelection(id) {
  changeSelectedProject(id);
  //called to rerender all projects after addition of  new Project instance
  loadAllProjects();
  //load selected projects todos
  renderAllTodos(getSelectedProjectsTodos());
}
//start here, got to work out steps for the deletion of a project
function handleProjectDeletion(dataSetValue) {
  const parsedNum = parseInt(dataSetValue);
  Projects = getFilteredProjects(parsedNum);

  //needed to check if Projects array is empty, if so makes default prj,
  if (Projects.length < 1) {
    addNewProjectObj("General Todos");
  }
  //called here so on deletion of project, selected proj defaults to first proj at index 0.
  changeSelectedProject(0);

  loadAllProjects();
  renderAllTodos(getSelectedProjectsTodos());
}

function getProjectObj(projectName) {
  const projectInstance = new Project(projectName);
  return projectInstance;
}

function changeSelectedProject(id) {
  Projects.forEach((project, index) => {
    project.selected = parseInt(id) === index;
  });
}
//needed to get array of todos living on selected project instance
function getSelectedProjectsTodos() {
  for (let project of Projects) {
    if (project.selected) {
      return project.todos;
    }
  }
}

function getFilteredProjects(num) {
  return Projects.filter((_, index) => {
    return !(num === index);
  });
}

function handleNewTodo(e) {
  const formDataArr = getFormData(e.target);
  const todoTitle = formDataArr[0];
  if (isTodoUnique(todoTitle)) {
    const todoInstance = new Todo(...formDataArr);
    const currTodoArr = getSelectedProjectsTodos();
    currTodoArr.push(todoInstance);
    renderAllTodos(currTodoArr);
  }
}

//handles various events on DOM todo elements
function handleTodoEvents(targetEl) {
  const todoTitle = targetEl.closest("div[data-todo-title]").dataset.todoTitle;

  if (targetEl.classList.contains("todo-upper")) {
    showTodoDescription(targetEl.nextElementSibling);
  } else if (targetEl.classList.contains("todo-edit-btn")) {
    //below needed to associate edit form with current todo
    updateFormDataAttribute(todoTitle);
    toggleEditModal();
  } else if (targetEl.classList.contains("todo-checkbox")) {
    toggleIsCompleteOnTodoInstance(todoTitle);
    renderAllTodos(getSelectedProjectsTodos());
  } else if (targetEl.classList.contains("todo-delete-btn")) {
    deleteTodoInstance(todoTitle);
    renderAllTodos(getSelectedProjectsTodos());
  }
}
//how do i get the correct todos inst, my code doest have title here of todo here! On click of todo element, give inst a
//prop value of selected = true? so much work there, but dont have another idea yet.
function handleTodoEdit(e) {
  const editForm = e.target;
  const editData = getFormData(editForm);
  const formDataSetValue = editForm.dataset.title;
  //todoInstance ref to active todo obj//
  const todoInstance = getActiveTodoObj(formDataSetValue);
  //invoking method on Todo instance
  todoInstance.updateTodo(...editData);
  renderAllTodos(getSelectedProjectsTodos());
}

function deleteTodoInstance(todoTitle) {
  const currTodos = getSelectedProjectsTodos();

  currTodos.forEach((todo, index) => {
    if (todo.title === todoTitle) {
      currTodos.splice(index, 1);
    }
  });
}
//needed to change value of todo property on user check mark
function toggleIsCompleteOnTodoInstance(todoTitle) {
  const currTodos = getSelectedProjectsTodos();

  currTodos.forEach((todo) => {
    if (todo.title === todoTitle) {
      todo.isComplete = !todo.isComplete;
    }
  });
}

function getActiveTodoObj(formDatasetValue) {
  const currTodos = getSelectedProjectsTodos();

  for (let todoObj of currTodos) {
    if (todoObj.title === formDatasetValue) {
      return todoObj;
    }
  }
}

function isTodoUnique(newTodoTitle) {
  const currTodos = getSelectedProjectsTodos();
  //if todo already exists with title, returns false
  return !currTodos.some((todo) => {
    return todo.title === newTodoTitle;
  });
}

/////eventlisteners///////
addProjectBtn.addEventListener("click", () => {
  if (projectInput.value) {
    addNewProjectObj(projectInput.value);
  }
});

projectsContainer.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("projects-div")) {
    handleProjectSelection(el.id);
  } else if (el.tagName === "BUTTON") {
    handleProjectDeletion(el.dataset.index);
  }
});

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoTitle = e.target.querySelector("#todo-title").value;

  if (todoTitle) {
    handleNewTodo(e);
  }
  e.target.reset();
});

//using event delegation, listening for various events in todo
todosContainer.addEventListener("click", (e) => {
  if (!(e.target.id === "todos-container")) {
    handleTodoEvents(e.target);
  }
});

editTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleTodoEdit(e);
  toggleEditModal();
  editTodoForm.reset();
});

//below closes edit form on click of cancel btn
editTodoForm.querySelector("#cancel").addEventListener("click", () => {
  toggleEditModal();
  editTodoForm.reset();
});

//below iife run on page load, if no projects, creates default one, if one in local storage, iife does nothing.
(function () {
  if (Projects.length < 1) {
    addNewProjectObj("General Todos");
  }
})();
loadAllProjects();
renderAllTodos(getSelectedProjectsTodos());

import {
  loadAllProjects,
  renderAllTodos,
  getFormData,
  toggleEditModal,
  showTodoDescription,
  updateFormDataAttribute,
} from "./dom-module.js";
import { Project } from "./new-project-class.js";
import { Todo } from "./new-todo-class.js";

export { Projects, projectsContainer, todosContainer, editModal, editTodoForm };

/**
 * Want to find way make new projects selected on creation, get styled as such, selected=true, get and display its todos.
 * Tricky.
 *
 * Im able to grab selected projects todos array and add todos to array with the form. May come up with functs to render the todos
 * to the browser. A lot more to go, but making slow progress.
 *
 *
 * handle updating todo by deleting the todo obj and making another todo inst, and assgining it to the index of prev?
 *No, didnt do this, trying to grab the todo inst and update it, but need some kind of selecte/active prop on it,
 dont have the title of the todo in the update code, sheeeesh, this will take forever.
 * handler taking care of complex steps, each helper does very specific task, call follow functions in handler,
 * trying to keep knowledge of objects in specific functions, passing needed data from the objects.
 */

/**
 * Should i have handler functions call functions, and they return values, then call next function in a looping pattern?
 * Im going to rememeber this, maybe a step in the right direction.
 */

/**
 * Note: could have created a function that looped through array of project obj, and then looped through object,
 * then looped through array of todos, may have been useful.
 */

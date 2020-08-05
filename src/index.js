const projectsContainer = document.getElementById("projects-container");
const projectInput = document.getElementById("add-project-input");
const todosContainer = document.getElementById("todos-container");
const addTodoForm = document.getElementById("add-todo-form");

//below Project will get localstorage if present or general obj, general on first page load"
//the general project may need to be dynamic, wont have any getter/setter if not instance of Project.
const Projects = [
  {
    title: "general",
    todos: [
      /*todo instances go here */
    ],
    selected: true,
  },
];

//handles process of adding new projects
function addNewProjectObj(projectTitle) {
  const project = getProjectObj(projectTitle);
  Projects.push(project);
  //passing index of last obj, makes selected, so new prj will be selected, select styles added to it, and removed from other.
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

function handleNewTodo(e) {
  const formDataArr = getFormData(e.target);
  const todoInstance = new Todo(...formDataArr);

  const currArr = getSelectedProjectsTodos();
  currArr.push(todoInstance);
  renderAllTodos(currArr);
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

function handleTodoEvents(targetEl) {
  //needed to get index of data attr. of containing div, index matches index of project instance
  const todoTitle = targetEl.closest("div[data-todo-title]").dataset.todoTitle;

  if (targetEl.classList.contains("todo-upper")) {
    targetEl.nextElementSibling.classList.toggle("todo-description-show");
  } else if (targetEl.classList.contains("todo-edit-btn")) {
    console.log("edit button was clicked");
  } else if (targetEl.classList.contains("todo-checkbox")) {
    console.log("checkbox was changed");
  } else if (targetEl.classList.contains("todo-delete-btn")) {
    deleteTodoInstance(todoTitle);
  }
}

function deleteTodoInstance(todoTitle) {
  let currTodos = getSelectedProjectsTodos();

  currTodos.forEach((todo, index) => {
    if (todo.title === todoTitle) {
      currTodos.splice(index, 1);
    }
  });

  renderAllTodos(currTodos);
  /*could not assign new array to let currTodos, you ass new array to variable, not to area in memory where the
    original array is, was not changing the objects on the original array, used splice to mutate the array in place,
    this way, currTodos is still a reference to the original array.
    currTodos = currTodos.filter((todo) => {
    return todoTitle !== todo.title;
   });*/
}

/////eventlisteners///////
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
  if (projectInput.value) {
    addNewProjectObj(projectInput.value);
  }
});

projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects-div")) {
    const id = e.target.id;
    handleProjectSelection(id);
  }
});

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.querySelector("#todo-title").value) {
    handleNewTodo(e);
  }
  e.target.reset();
});

//using event delegation
todosContainer.addEventListener("click", (e) => {
  const el = e.target;
  handleTodoEvents(el);
});

loadAllProjects();
renderAllTodos(getSelectedProjectsTodos());

import { loadAllProjects, renderAllTodos } from "./dom-module.js";
import { Project } from "./new-project-class.js";
import { Todo } from "./new-todo-class.js";
export { Projects, projectsContainer, todosContainer };

/**
 * Want to find way make new projects selected on creation, get styled as such, selected=true, get and display its todos.
 * Tricky.
 *
 * Im able to grab selected projects todos array and add todos to array with the form. May come up with functs to render the todos
 * to the browser. A lot more to go, but making slow progress.
 *
 *
 * handle updating todo by deleting the todo obj and making another todo inst, and assgining it to the index of prev?
 */

const projectsContainer = document.getElementById("projects-container");
const projectInput = document.getElementById("add-project-input");
const addTodoForm = document.getElementById("add-todo-form");

//below Project will get localstorage if present or general obj, general on first page load"
const Projects = [
  {
    title: "general",
    todos: [],
    selected: true,
  },
];

//reference to project todos currently working with, defaults to first Project on array, changes on project dom click
let currentTodosArray = Projects[0].todos;

//below too may still go in dom-mod? called on page load, and when new project added
function loadAllProjects() {
  clearProjectsContainer();

  Projects.forEach((project, index) => {
    const projectTitle = project.title;
    const isSelected = project.selected;
    renderSingleProject(projectTitle, isSelected, index);
  });
}

//handles process of adding new projects
function addNewProjectObj(projectTitle) {
  const project = getProjectObj(projectTitle);
  Projects.push(project);
  renderSingleProject(project.title, project.selected, Projects.length - 1);
}

//handles selection of specific project
function handleProjectSelection(id) {
  changeSelectedProject(id);
  //called to rerender all projects after addition of  new Project instance
  loadAllProjects();
  loadTodos(id);
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
//needed to get array of todos on selected project obj
function getProjectTodos() {
  for (let project of Projects) {
    if (project.selected) {
      return project.todos;
    }
  }
}

//invoked on selection of project//pick up here, what am I using this for??????????????????????
function loadTodos(id) {
  const todosArr = getProjectTodos();
  console.log(todosArr);
}

function handleNewTodo(e) {
  const formDataArr = getFormData(e.target);
  const todoInstance = new Todo(...formDataArr);
  putTodoOnArr(todoInstance);
}
//loop through projects, place todo on arrof selected proj
function putTodoOnArr(todoInstance) {
  for (let project of Projects) {
    if (project.selected === true) {
      project.todos.push(todoInstance);
      console.log(Projects);
      return;
    }
  }
}

function getFormData(formEl) {
  return [...formEl].reduce((data, formEl) => {
    const tag = formEl.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
      return (data = [...data, formEl.value]);
    }
    return data;
  }, []);
}

//eventlisteners//
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
  handleNewTodo(e);
});

loadAllProjects();

//todo: Need funt to load/render all todos for selected project, how will it be set up?

import { renderSingleProject, clearProjectsContainer } from "./dom-module.js";
import { Project } from "./new-project-class.js";
import { Todo } from "./new-todo-class.js";
export { Projects, projectsContainer };

/**
 * Want to find way make new projects selected on creation, get styled as such, selected=true, get and display its todos
 *
 * Im able to grab selected projects todos array and add todos to array with the form. May come up with functs to render the todos
 * to the browser. A lot more to go, but making slow progress.
 *
 */

const projectsContainer = document.getElementById("projects-container");
const projectInput = document.getElementById("add-project-input");

//below Project will get localstorage if present or general obj, general on first page load"
const Projects = [
  { title: "general", todos: ["I can grab proj arrays"], selected: true },
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
function addNewProject(projectTitle) {
  const project = getProjectObj(projectTitle);
  Projects.push(project);

  renderSingleProject(project.title, project.selected, Projects.length - 1);
}

//handles selection of specific project
function handleProjectSelection(id) {
  const todosArr = getProjectTodos(id);
  changeSelectedProject(id);
  loadAllProjects();
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
function getProjectTodos(id) {
  return Projects.reduce((acc, cur, index) => {
    return (acc = parseInt(id) === index ? cur.todos : acc);
  }, []);
}

//eventlisteners//
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
  if (projectInput.value) {
    addNewProject(projectInput.value);
  }
});

projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects-div")) {
    const id = e.target.id;
    handleProjectSelection(id);
  }
});

loadAllProjects();

//todo: Need funt to load/render all todos for selected project

import { renderSingleProject, clearProjectsContainer } from "./dom-module.js";
import { Project } from "./new-project-class.js";
export { Projects, projectsContainer };

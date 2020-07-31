const projectsContainer = document.getElementById("projects-container");
const projectInput = document.getElementById("add-project-input");

//below Project will get localstorage if present or general obj, general on first page load"
const Projects = [{ title: "general", todos: [] }];

//reference to project todos currently working with, defaults to first Project on array, changes on project dom click
let currentTodosArray = Projects[0].todos;

//handles process of adding new projects
function handleNewProject(projectName) {
  const newProjectInstance = getProjectObj(projectName);
  Projects.push(newProjectInstance);

  renderSingleProject(projectName, Projects.length - 1);
}

//handles selection of specific project
function handleProjectSelection(id) {
  styleProjectDivs(id);
}

function getProjectObj(projectName) {
  const projectInstance = new Project(projectName);
  return projectInstance;
}

//eventlisteners//
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
  if (projectInput.value) {
    handleNewProject(projectInput.value);
  }
});

projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects-div")) {
    const id = e.target.id;
    handleProjectSelection(id);
  }
});

renderProjects();
//todo: need to invoke to render currently selected todos. Why id I write this?

import {
  renderProjects,
  renderSingleProject,
  clearProjectsContainer,
  styleProjectDivs,
} from "./dom-module.js";
import { Project } from "./new-project-class.js";
export { Projects, projectsContainer };

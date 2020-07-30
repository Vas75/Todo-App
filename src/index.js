const projectsContainer = document.getElementById("projects-container");
let Projects = [{ title: "general", todos: [] }];

//handles process of adding new project
function handleNewProject() {
  const projectInput = document.getElementById("add-project-input").value;
  const newProjectInstance = getProjectObj(projectInput);
  Projects = [...Projects, newProjectInstance];

  clearProjectsContainer();
  renderProjects();
}

function getProjectObj(projectInput) {
  const projectInstance = new Project(projectInput);
  return projectInstance;
}

//eventlisteners//
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", handleNewProject);

projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects-div")) {
    const id = e.target.id;
    console.log(id);
  }
});

renderProjects();

import { renderProjects, clearProjectsContainer } from "./dom-module.js";
import { Project } from "./new-project-class.js";
export { Projects, projectsContainer };

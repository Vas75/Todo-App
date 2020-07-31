function renderProjects() {
  //projectsContainer.innerHTML = ""; this cant work from here, because modules in strict?
  Projects.forEach((project, index) => {
    const { title } = project;
    const projectDiv = makeProjectDiv(title, index);
    projectsContainer.appendChild(projectDiv);
  });
}

function renderSingleProject(projectName, index) {
  const projectDiv = makeProjectDiv(projectName, index);
  projectsContainer.appendChild(projectDiv);
}

function makeProjectDiv(title, index) {
  const div = document.createElement("div");
  div.classList.add("projects-div");
  div.id = index;
  div.textContent = title;
  return div;
}

//needed to clear projects before rerendering with new project
function clearProjectsContainer() {
  while (projectsContainer.firstElementChild) {
    projectsContainer.removeChild(projectsContainer.firstElementChild);
  }
}

//applys styles to selected project div, removes from others
function styleProjectDivs(id) {
  const nodes = projectsContainer.querySelectorAll("div");

  nodes.forEach((node, index) => {
    const parsedID = parseInt(id);
    if (parsedID === index) {
      node.classList.add("selected-project");
    } else {
      node.classList.remove("selected-project");
    }
  }); //this is not working dont know why! Answer: I was comparing string to number type.
}

import { Projects, projectsContainer } from "./index.js";
export {
  renderProjects,
  makeProjectDiv,
  clearProjectsContainer,
  styleProjectDivs,
  renderSingleProject,
};

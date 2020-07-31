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

//not used at moment, but could come in handy later, keep...for now.
function clearProjectsContainer() {
  while (projectsContainer.firstElementChild) {
    projectsContainer.removeChild(projectsContainer.firstElementChild);
  }
}

import { Projects, projectsContainer } from "./index.js";
export { makeProjectDiv, clearProjectsContainer, renderSingleProject };

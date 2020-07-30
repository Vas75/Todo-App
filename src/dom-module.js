function renderProjects() {
  //projectsContainer.innerHTML = ""; this cant work from here, because modules in strict?
  Projects.forEach((project, index) => {
    const { title } = project;
    const projectDiv = makeProjectDiv(title, index);
    projectsContainer.appendChild(projectDiv);
  });
}

function makeProjectDiv(title, index) {
  const div = document.createElement("div");
  //make projects-div class
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

export { renderProjects, makeProjectDiv, clearProjectsContainer };
import { Projects, projectsContainer } from "./index.js";

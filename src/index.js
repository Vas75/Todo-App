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
      {
        title: "dummy todo",
        dueDate: "12/18/1975",
        priority: "high",
        description: "Just dummy todo.",
      },
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

function getFormData(formEl) {
  return [...formEl].reduce((data, formEl) => {
    const tag = formEl.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
      return (data = [...data, formEl.value]);
    }
    return data;
  }, []);
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
  handleNewTodo(e);
  e.target.reset();
});

todosContainer.addEventListener("click", (e) => {});

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
 */

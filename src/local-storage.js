function getProjectsIfStored(key) {
  let stored = JSON.parse(localStorage.getItem(`${key}`));

  if (stored && stored.length > 0) {
    const fixed = stored.map(fixPrototypeChain);
    return fixed;
  }
  return [];
}

function storeProjectsArr(key) {
  localStorage.setItem(`${key}`, JSON.stringify(Projects));
}

//parsed prj obj gets proto of Project class, each parsed todo obj gets proto of Todo class
function fixPrototypeChain(project) {
  Object.setPrototypeOf(project, Project.prototype);

  project.todos.forEach((todo) => {
    //this works, but considered slow, poor choice for changing proto of obj on fly, usually used during creation of the obj
    //this is only needed when page first loads to reestablish inheritance from the classes.
    Object.setPrototypeOf(todo, Todo.prototype);
  });
  return project;
}

import { Projects } from "./index.js";
import { Todo } from "./new-todo-class.js";
import { Project } from "./new-project-class.js";
export { getProjectsIfStored, storeProjectsArr };

//need to use reviver on each obj to make part of class again?

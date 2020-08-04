/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-module.js":
/*!***************************!*\
  !*** ./src/dom-module.js ***!
  \***************************/
/*! exports provided: loadAllProjects, renderAllTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAllProjects\", function() { return loadAllProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAllTodos\", function() { return renderAllTodos; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n//called on page load, and when new project added\nfunction loadAllProjects() {\n  clearContainer(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"]);\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"Projects\"].forEach((project, index) => {\n    const projectTitle = project.title;\n    const isSelected = project.selected;\n    renderSingleProject(projectTitle, isSelected, index);\n  });\n}\n\nfunction renderSingleProject(projectName, isSelected, index) {\n  const projectDiv = makeProjectDiv(projectName, index);\n\n  const classes = isSelected\n    ? [\"projects-div\", \"selected-project\"]\n    : [\"projects-div\"];\n\n  projectDiv.classList.add(...classes);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].appendChild(projectDiv);\n}\n\nfunction makeProjectDiv(title, index) {\n  const div = document.createElement(\"div\");\n  div.id = index;\n  div.textContent = title;\n  return div;\n}\n\nfunction renderAllTodos(todosArr) {\n  clearContainer(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"todosContainer\"]);\n\n  todosArr.forEach((todo, index) => {\n    const todoDiv = makeTodoDiv(index);\n    todoDiv.innerHTML = getTodoHTML(todo, index);\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"todosContainer\"].appendChild(todoDiv);\n  });\n}\n//pick up below//////////////////////////////////////////////////////////////////////////////////////////\nfunction getTodoHTML(todoInstance, index) {\n  const { title, dueDate, description, isComplete } = todoInstance;\n  //bottom nested div hidden default, show on click of upper nested div\n\n  return `  \n            <div id=\"todo-upper-${index}\">\n              <label for=\"checkBox-${index}\">\n                completed\n                <input type=\"checkbox\" id=\"checkBox-${index}\"> \n              </label>  \n              <h2>${title}</h2>\n              <p>${dueDate}</p>\n            </div>\n            \n            <div class=\"todo-description-hidden\" id=\"todo-description-${index}\">\n              <p>${description}</p>\n              <button type=\"button\" id=\"${title}-${index}\" title=\"Click to edit todo.\">edit todo</button>\n            </div>            \n          `;\n}\n\nfunction makeTodoDiv(index) {\n  const div = document.createElement(\"div\");\n  div.id = `todo-${index}`;\n  return div;\n}\n\n//clears project/todos container of html (rendered projects/todos)\nfunction clearContainer(container) {\n  while (container.firstElementChild) {\n    container.removeChild(container.firstElementChild);\n  }\n}\n\n\n\n\n//add styles to todo element on click, no default, so dont have to worry about style on page load\n//need to attach eventlistener(1 or more) to todo html, event delegation? Need to listen for click on upper todo, to show\n//lower part, and change of checkbox in upper todo, which styles todo as completed or not(change compl prop on obj too), and need to add delete btn to upper\n//todo, have to listene for that click too, need to add btn to lower todo that brings up modal/form to edit todo.\n//remember, im updating todo objs on the array, when I update by form, how do I then get that data on the todo obj? I have a funct\n//that gets array, but how do i indentify the todo obj that needs to be changed, id? data attribute.\n\n\n//# sourceURL=webpack:///./src/dom-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Projects, projectsContainer, todosContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Projects\", function() { return Projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsContainer\", function() { return projectsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todosContainer\", function() { return todosContainer; });\n/* harmony import */ var _dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-module.js */ \"./src/dom-module.js\");\n/* harmony import */ var _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-class.js */ \"./src/new-project-class.js\");\n/* harmony import */ var _new_todo_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-todo-class.js */ \"./src/new-todo-class.js\");\nconst projectsContainer = document.getElementById(\"projects-container\");\nconst projectInput = document.getElementById(\"add-project-input\");\nconst todosContainer = document.getElementById(\"todos-container\");\nconst addTodoForm = document.getElementById(\"add-todo-form\");\n\n//below Project will get localstorage if present or general obj, general on first page load\"\n//the general project may need to be dynamic, wont have any getter/setter if not instance of Project.\nconst Projects = [\n  {\n    title: \"general\",\n    todos: [\n      {\n        title: \"dummy todo\",\n        dueDate: \"12/18/1975\",\n        priority: \"high\",\n        description: \"Just dummy todo.\",\n      },\n    ],\n    selected: true,\n  },\n];\n\n//handles process of adding new projects\nfunction addNewProjectObj(projectTitle) {\n  const project = getProjectObj(projectTitle);\n  Projects.push(project);\n  //passing index of last obj, makes selected, so new prj will be selected, select styles added to it, and removed from other.\n  handleProjectSelection(Projects.length - 1);\n}\n\n//handles selection of specific project/additon of new project,\nfunction handleProjectSelection(id) {\n  changeSelectedProject(id);\n  //called to rerender all projects after addition of  new Project instance\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"loadAllProjects\"])();\n  //load selected projects todos\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n}\n\nfunction getProjectObj(projectName) {\n  const projectInstance = new _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projectName);\n  return projectInstance;\n}\n\nfunction changeSelectedProject(id) {\n  Projects.forEach((project, index) => {\n    project.selected = parseInt(id) === index;\n  });\n}\n//needed to get array of todos living on selected project instance\nfunction getSelectedProjectsTodos() {\n  for (let project of Projects) {\n    if (project.selected) {\n      return project.todos;\n    }\n  }\n}\n\nfunction handleNewTodo(e) {\n  const formDataArr = getFormData(e.target);\n  const todoInstance = new _new_todo_class_js__WEBPACK_IMPORTED_MODULE_2__[\"Todo\"](...formDataArr);\n\n  const currArr = getSelectedProjectsTodos();\n  currArr.push(todoInstance);\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(currArr);\n}\n\nfunction getFormData(formEl) {\n  return [...formEl].reduce((data, formEl) => {\n    const tag = formEl.tagName;\n    if (tag === \"INPUT\" || tag === \"SELECT\" || tag === \"TEXTAREA\") {\n      return (data = [...data, formEl.value]);\n    }\n    return data;\n  }, []);\n}\n\n/////eventlisteners///////\nconst addProjectBtn = document.getElementById(\"add-project-btn\");\naddProjectBtn.addEventListener(\"click\", () => {\n  if (projectInput.value) {\n    addNewProjectObj(projectInput.value);\n  }\n});\n\nprojectsContainer.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"projects-div\")) {\n    const id = e.target.id;\n    handleProjectSelection(id);\n  }\n});\n\naddTodoForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  handleNewTodo(e);\n  e.target.reset();\n});\n\ntodosContainer.addEventListener(\"click\", (e) => {});\n\nObject(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"loadAllProjects\"])();\nObject(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n\n\n\n\n\n\n/**\n * Want to find way make new projects selected on creation, get styled as such, selected=true, get and display its todos.\n * Tricky.\n *\n * Im able to grab selected projects todos array and add todos to array with the form. May come up with functs to render the todos\n * to the browser. A lot more to go, but making slow progress.\n *\n */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/new-project-class.js":
/*!**********************************!*\
  !*** ./src/new-project-class.js ***!
  \**********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.selected = false;\n    this.todos = [];\n  }\n}\n\n\n//# sourceURL=webpack:///./src/new-project-class.js?");

/***/ }),

/***/ "./src/new-todo-class.js":
/*!*******************************!*\
  !*** ./src/new-todo-class.js ***!
  \*******************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nclass Todo {\n  constructor(title, dueDate, priority, description, index) {\n    this.title = title;\n    this.dueDate = dueDate; //getter/setter here, use date-fns?\n    this.priority = priority;\n    this.description = description;\n    this.isComplete = false;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/new-todo-class.js?");

/***/ })

/******/ });
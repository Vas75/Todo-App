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
/*! exports provided: makeProjectDiv, clearProjectsContainer, renderSingleProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeProjectDiv\", function() { return makeProjectDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectsContainer\", function() { return clearProjectsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSingleProject\", function() { return renderSingleProject; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\nfunction renderSingleProject(projectName, isSelected, index) {\n  const projectDiv = makeProjectDiv(projectName, index);\n\n  const classes = isSelected\n    ? [\"projects-div\", \"selected-project\"]\n    : [\"projects-div\"];\n\n  projectDiv.classList.add(...classes);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].appendChild(projectDiv);\n}\n\nfunction makeProjectDiv(title, index) {\n  const div = document.createElement(\"div\");\n  div.id = index;\n  div.textContent = title;\n  return div;\n}\n\n//not used at moment, but could come in handy later, keep...for now.\nfunction clearProjectsContainer() {\n  while (_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].firstElementChild) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].firstElementChild);\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/dom-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Projects, projectsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Projects\", function() { return Projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsContainer\", function() { return projectsContainer; });\n/* harmony import */ var _dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-module.js */ \"./src/dom-module.js\");\n/* harmony import */ var _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-class.js */ \"./src/new-project-class.js\");\nconst projectsContainer = document.getElementById(\"projects-container\");\nconst projectInput = document.getElementById(\"add-project-input\");\n\n//below Project will get localstorage if present or general obj, general on first page load\"\nconst Projects = [\n  { title: \"general\", todos: [\"I can grab proj arrays\"], selected: true },\n];\n\n//reference to project todos currently working with, defaults to first Project on array, changes on project dom click\nlet currentTodosArray = Projects[0].todos;\n\n//below too may still go in dom-mod? called on page load, and when new project added\nfunction loadAllProjects() {\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"clearProjectsContainer\"])();\n\n  Projects.forEach((project, index) => {\n    const projectTitle = project.title;\n    const isSelected = project.selected;\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSingleProject\"])(projectTitle, isSelected, index);\n  });\n}\n\n//handles process of adding new projects\nfunction addNewProject(projectTitle) {\n  const project = getProjectObj(projectTitle);\n  Projects.push(project);\n\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSingleProject\"])(project.title, project.selected, Projects.length - 1);\n}\n\n//handles selection of specific project\nfunction handleProjectSelection(id) {\n  const todosArr = getProjectTodos(id);\n  changeSelectedProject(id);\n  loadAllProjects();\n}\n\nfunction getProjectObj(projectName) {\n  const projectInstance = new _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projectName);\n  return projectInstance;\n}\n\nfunction changeSelectedProject(id) {\n  Projects.forEach((project, index) => {\n    project.selected = parseInt(id) === index;\n  });\n}\n//needed to get array of todos on selected project obj\nfunction getProjectTodos(id) {\n  return Projects.reduce((acc, cur, index) => {\n    return (acc = parseInt(id) === index ? cur.todos : acc);\n  }, []);\n}\n\n//eventlisteners//\nconst addProjectBtn = document.getElementById(\"add-project-btn\");\naddProjectBtn.addEventListener(\"click\", () => {\n  if (projectInput.value) {\n    addNewProject(projectInput.value);\n  }\n});\n\nprojectsContainer.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"projects-div\")) {\n    const id = e.target.id;\n    handleProjectSelection(id);\n  }\n});\n\nloadAllProjects();\n\n//todo: Need funt to load/render all todos for selected project\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/new-project-class.js":
/*!**********************************!*\
  !*** ./src/new-project-class.js ***!
  \**********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.selected = false;\n    this.todos = [];\n  }\n}\n\n\n//# sourceURL=webpack:///./src/new-project-class.js?");

/***/ })

/******/ });
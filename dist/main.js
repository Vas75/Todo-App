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
/*! exports provided: loadAllProjects, renderAllTodos, getFormData, toggleEditModal, showTodoDescription, updateFormDataAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAllProjects\", function() { return loadAllProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAllTodos\", function() { return renderAllTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFormData\", function() { return getFormData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleEditModal\", function() { return toggleEditModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTodoDescription\", function() { return showTodoDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateFormDataAttribute\", function() { return updateFormDataAttribute; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n//called on page load, and when new project added\nfunction loadAllProjects() {\n  clearContainer(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"]);\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"Projects\"].forEach((project, index) => {\n    const projectTitle = project.title;\n    const isSelected = project.selected;\n    renderSingleProject(projectTitle, isSelected, index);\n  });\n}\n\nfunction renderSingleProject(projectName, isSelected, index) {\n  const projectDiv = makeProjectDiv(projectName, index);\n\n  const classes = isSelected\n    ? [\"projects-div\", \"selected-project\"]\n    : [\"projects-div\"];\n\n  projectDiv.classList.add(...classes);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"projectsContainer\"].appendChild(projectDiv);\n}\n\nfunction makeProjectDiv(title, index) {\n  const div = document.createElement(\"div\");\n  div.id = index;\n  div.textContent = title;\n\n  function makeDeleteBtn(index) {\n    const deleteBtn = document.createElement(\"button\");\n    deleteBtn.setAttribute(\"data-index\", `${index}`);\n    deleteBtn.setAttribute(\"type\", \"button\");\n    deleteBtn.textContent = \"delete project\";\n    return deleteBtn;\n  }\n\n  div.appendChild(makeDeleteBtn(index));\n  return div;\n}\n\nfunction renderAllTodos(todosArr) {\n  clearContainer(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"todosContainer\"]);\n\n  todosArr.forEach((todo, index) => {\n    const { title, dueDate, description, isComplete } = todo;\n\n    const todoDiv = makeTodoDiv(title, isComplete);\n    todoDiv.innerHTML = getTodoInnerHTML(\n      title,\n      dueDate,\n      description,\n      isComplete,\n      index\n    );\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"todosContainer\"].appendChild(todoDiv);\n  });\n}\n\nfunction makeTodoDiv(todoTitle, isComplete) {\n  const div = document.createElement(\"div\");\n  div.setAttribute(\"data-todo-title\", `${todoTitle}`);\n\n  if (isComplete) div.classList.add(\"todo-complete\");\n\n  return div;\n}\n\nfunction getTodoInnerHTML(title, dueDate, description, isComplete, index) {\n  //bottom nested div hidden default, show on click of upper nested div\n\n  return `  \n            <div class=\"todo todo-upper\"> \n              <button type=\"button\" class=\"todo-delete-btn\">delete</button>\n              ${title} (Due, ${dueDate}.)\n              <label for=\"checkBox-${index}\">\n                completed\n                <input type=\"checkbox\" class=\"todo-checkbox\" id=\"checkBox-${index}\" ${\n    isComplete ? \"checked\" : \"\"\n  }> \n              </label> \n            </div>\n            <div class=\"todo todo-description-hidden\">\n              ${description} <button type=\"button\" class=\"todo-edit-btn\" title=\"Click to edit todo.\">edit todo</button>\n            </div>            \n          `;\n}\n\n//retrieve form data for creating/updating todos\nfunction getFormData(formEl) {\n  return [...formEl].reduce((data, formEl) => {\n    const tag = formEl.tagName;\n    if (tag === \"INPUT\" || tag === \"SELECT\" || tag === \"TEXTAREA\") {\n      return (data = [...data, formEl.value]);\n    }\n    return data;\n  }, []);\n}\n\nfunction showTodoDescription(containerDiv) {\n  containerDiv.classList.toggle(\"todo-description-show\");\n}\n\nfunction toggleEditModal() {\n  const hasShowClass = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"editModal\"].classList.contains(\"show\");\n\n  if (hasShowClass) {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"editModal\"].classList.remove(\"show\");\n    return;\n  }\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"editModal\"].classList.add(\"show\");\n}\n\nfunction updateFormDataAttribute(tudoTitle) {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"editTodoForm\"].setAttribute(\"data-title\", `${tudoTitle}`);\n}\n\n//clears project/todos container of html (rendered projects/todos)\nfunction clearContainer(container) {\n  while (container.firstElementChild) {\n    container.removeChild(container.firstElementChild);\n  }\n}\n\n\n\n\n\n//add styles to todo element on click, no default, so dont have to worry about style on page load\n//need to attach eventlistener(1 or more) to todo html, event delegation? Need to listen for click on upper todo, to show\n//lower part, and change of checkbox in upper todo, which styles todo as completed or not(change compl prop on obj too), and need to add delete btn to upper\n//todo, have to listene for that click too, need to add btn to lower todo that brings up modal/form to edit todo.\n\n//added logic that changes completed prop on instance when checkbox clicked, then depending on isComplete styleing changed\n//, box checked or unchecked depending on th property\n\n\n//# sourceURL=webpack:///./src/dom-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Projects, projectsContainer, todosContainer, editModal, editTodoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Projects\", function() { return Projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsContainer\", function() { return projectsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todosContainer\", function() { return todosContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editModal\", function() { return editModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTodoForm\", function() { return editTodoForm; });\n/* harmony import */ var _dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-module.js */ \"./src/dom-module.js\");\n/* harmony import */ var _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-class.js */ \"./src/new-project-class.js\");\n/* harmony import */ var _new_todo_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-todo-class.js */ \"./src/new-todo-class.js\");\nconst projectsContainer = document.getElementById(\"projects-container\");\nconst addProjectBtn = document.getElementById(\"add-project-btn\");\nconst projectInput = document.getElementById(\"add-project-input\");\nconst todosContainer = document.getElementById(\"todos-container\");\nconst addTodoForm = document.getElementById(\"add-todo-form\");\nconst editModal = document.getElementById(\"edit-modal\");\nconst editTodoForm = document.getElementById(\"edit-todo-form\");\n\n//below Project will get localstorage if present or general obj, general on first page load\"\n//the general project may need to be dynamic, wont have any getter/setter if not instance of Project.\n//wont have methods of class instances either!!!!!!! Currently no methods on Project class.\nlet Projects = [\n  // {\n  //   title: \"general\",\n  //   todos: [\n  //     /*todo instances go here */\n  //   ],\n  //   selected: true,\n  // },\n];\n\n//handles process of adding new projects\nfunction addNewProjectObj(projectTitle) {\n  const project = getProjectObj(projectTitle);\n  Projects.push(project);\n  //passing index of last obj, makes selected, so added prj will be selected, select styles added to it, and removed from other.\n  handleProjectSelection(Projects.length - 1);\n}\n\n//handles selection of specific project/additon of new project,\nfunction handleProjectSelection(id) {\n  changeSelectedProject(id);\n  //called to rerender all projects after addition of  new Project instance\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"loadAllProjects\"])();\n  //load selected projects todos\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n}\n//start here, got to work out steps for the deletion of a project\nfunction handleProjectDeletion(dataSetValue) {\n  const parsedNum = parseInt(dataSetValue);\n  Projects = getFilteredProjects(parsedNum);\n\n  //needed to check if Projects array is empty, if so makes default prj,\n  if (Projects.length < 1) {\n    addNewProjectObj(\"General Todos\");\n  }\n  //called here so on deletion of project, selected proj defaults to first proj at index 0.\n  changeSelectedProject(0);\n\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"loadAllProjects\"])();\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n}\n\nfunction getProjectObj(projectName) {\n  const projectInstance = new _new_project_class_js__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projectName);\n  return projectInstance;\n}\n\nfunction changeSelectedProject(id) {\n  Projects.forEach((project, index) => {\n    project.selected = parseInt(id) === index;\n  });\n}\n//needed to get array of todos living on selected project instance\nfunction getSelectedProjectsTodos() {\n  for (let project of Projects) {\n    if (project.selected) {\n      return project.todos;\n    }\n  }\n}\n\nfunction getFilteredProjects(num) {\n  return Projects.filter((_, index) => {\n    return !(num === index);\n  });\n}\n\nfunction handleNewTodo(e) {\n  const formDataArr = Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getFormData\"])(e.target);\n  const todoTitle = formDataArr[0];\n  if (isTodoUnique(todoTitle)) {\n    const todoInstance = new _new_todo_class_js__WEBPACK_IMPORTED_MODULE_2__[\"Todo\"](...formDataArr);\n    const currTodoArr = getSelectedProjectsTodos();\n    currTodoArr.push(todoInstance);\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(currTodoArr);\n  }\n}\n\n//handles various events on DOM todo elements\nfunction handleTodoEvents(targetEl) {\n  const todoTitle = targetEl.closest(\"div[data-todo-title]\").dataset.todoTitle;\n\n  if (targetEl.classList.contains(\"todo-upper\")) {\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"showTodoDescription\"])(targetEl.nextElementSibling);\n  } else if (targetEl.classList.contains(\"todo-edit-btn\")) {\n    //below needed to associate edit form with current todo\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"updateFormDataAttribute\"])(todoTitle);\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleEditModal\"])();\n  } else if (targetEl.classList.contains(\"todo-checkbox\")) {\n    toggleIsCompleteOnTodoInstance(todoTitle);\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n  } else if (targetEl.classList.contains(\"todo-delete-btn\")) {\n    deleteTodoInstance(todoTitle);\n    Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n  }\n}\n//how do i get the correct todos inst, my code doest have title here of todo here! On click of todo element, give inst a\n//prop value of selected = true? so much work there, but dont have another idea yet.\nfunction handleTodoEdit(e) {\n  const editForm = e.target;\n  const editData = Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getFormData\"])(editForm);\n  const formDataSetValue = editForm.dataset.title;\n  //todoInstance ref to active todo obj//\n  const todoInstance = getActiveTodoObj(formDataSetValue);\n  //invoking method on Todo instance\n  todoInstance.updateTodo(...editData);\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n}\n\nfunction deleteTodoInstance(todoTitle) {\n  const currTodos = getSelectedProjectsTodos();\n\n  currTodos.forEach((todo, index) => {\n    if (todo.title === todoTitle) {\n      currTodos.splice(index, 1);\n    }\n  });\n}\n//needed to change value of todo property on user check mark\nfunction toggleIsCompleteOnTodoInstance(todoTitle) {\n  const currTodos = getSelectedProjectsTodos();\n\n  currTodos.forEach((todo) => {\n    if (todo.title === todoTitle) {\n      todo.isComplete = !todo.isComplete;\n    }\n  });\n}\n\nfunction getActiveTodoObj(formDatasetValue) {\n  const currTodos = getSelectedProjectsTodos();\n\n  for (let todoObj of currTodos) {\n    if (todoObj.title === formDatasetValue) {\n      return todoObj;\n    }\n  }\n}\n\nfunction isTodoUnique(newTodoTitle) {\n  const currTodos = getSelectedProjectsTodos();\n  //if todo already exists with title, returns false\n  return !currTodos.some((todo) => {\n    return todo.title === newTodoTitle;\n  });\n}\n\n/////eventlisteners///////\naddProjectBtn.addEventListener(\"click\", () => {\n  if (projectInput.value) {\n    addNewProjectObj(projectInput.value);\n  }\n});\n\nprojectsContainer.addEventListener(\"click\", (e) => {\n  const el = e.target;\n  if (el.classList.contains(\"projects-div\")) {\n    handleProjectSelection(el.id);\n  } else if (el.tagName === \"BUTTON\") {\n    handleProjectDeletion(el.dataset.index);\n  }\n});\n\naddTodoForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const todoTitle = e.target.querySelector(\"#todo-title\").value;\n\n  if (todoTitle) {\n    handleNewTodo(e);\n  }\n  e.target.reset();\n});\n\n//using event delegation, listening for various events in todo\ntodosContainer.addEventListener(\"click\", (e) => {\n  if (!(e.target.id === \"todos-container\")) {\n    handleTodoEvents(e.target);\n  }\n});\n\neditTodoForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  handleTodoEdit(e);\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleEditModal\"])();\n  editTodoForm.reset();\n});\n\n//below closes edit form on click of cancel btn\neditTodoForm.querySelector(\"#cancel\").addEventListener(\"click\", () => {\n  Object(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleEditModal\"])();\n  editTodoForm.reset();\n});\n\n//below iife run on page load, if no projects, creates default one, if one in local storage, iife does nothing.\n(function () {\n  if (Projects.length < 1) {\n    addNewProjectObj(\"General Todos\");\n  }\n})();\nObject(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"loadAllProjects\"])();\nObject(_dom_module_js__WEBPACK_IMPORTED_MODULE_0__[\"renderAllTodos\"])(getSelectedProjectsTodos());\n\n\n\n\n\n\n\n/**\n * Want to find way make new projects selected on creation, get styled as such, selected=true, get and display its todos.\n * Tricky.\n *\n * Im able to grab selected projects todos array and add todos to array with the form. May come up with functs to render the todos\n * to the browser. A lot more to go, but making slow progress.\n *\n *\n * handle updating todo by deleting the todo obj and making another todo inst, and assgining it to the index of prev?\n *No, didnt do this, trying to grab the todo inst and update it, but need some kind of selecte/active prop on it,\n dont have the title of the todo in the update code, sheeeesh, this will take forever.\n * handler taking care of complex steps, each helper does very specific task, call follow functions in handler,\n * trying to keep knowledge of objects in specific functions, passing needed data from the objects.\n */\n\n/**\n * Should i have handler functions call functions, and they return values, then call next function in a looping pattern?\n * Im going to rememeber this, maybe a step in the right direction.\n */\n\n/**\n * Note: could have created a function that looped through array of project obj, and then looped through object,\n * then looped through array of todos, may have been useful.\n */\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nclass Todo {\n  constructor(title, dueDate, priority, description) {\n    this.title = title;\n    this.dueDate = dueDate; //getter/setter here, use date-fns?\n    this.priority = priority;\n    this.description = description;\n    this.isComplete = false;\n  }\n  updateTodo(newTitle, newDueDate, newPriority, newDescription) {\n    this.title = newTitle ? newTitle : this.title;\n    this.dueDate = newDueDate ? newDueDate : this.dueDate;\n    this.priority = newPriority ? newPriority : this.priority;\n    this.description = newDescription ? newDescription : this.description;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/new-todo-class.js?");

/***/ })

/******/ });
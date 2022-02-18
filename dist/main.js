/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Contact.js":
/*!***********************!*\
  !*** ./js/Contact.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\n    constructor(form) {\n        this.fullName = form.elements[\"fullName\"].value;\n        this.email = form.elements[\"email\"].value;\n        this.subject = form.elements[\"subject\"].value;\n        this.body = form.elements[\"msg\"].value;\n    }\n\n    fullName = \"\";\n    email = \"\";\n    subject = \"\";\n    body = \"\";\n\n    send(){\n        console.info(this.formatMessage());\n        document.getElementById(\"formInfo\").innerHTML = \"We are not sending emails just yet...feature for next version!\";\n    }\n    \n    formatMessage() {\n        return `To: ${this.fullName}\n                Email: ${this.email}\n                Subject: ${this.subject}\n                Body: ${this.body}`;\n    }\n};\n\n\n\n//# sourceURL=webpack:///./js/Contact.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./js/Contact.js\");\n\n\n\nconst formInfo = document.getElementById(\"formInfo\");\n\nlet hasDevJob = false;\nif (hasDevJob) {\n    //I have a Dev job\n    showMessage(\"Thanks for stopping by, I am currently employed.\")\n} else {\n    //I need a job!\n    showMessage(\"Please take a look around, I am currently seeking a Dev position. Thanks for coming!\");\n}\n\nlet today = new Date(0);\nlet dayOfWeek = today.getDay();\nif (dayOfWeek === 0 || dayOfWeek === 6) {\n    showMessage(\"Since it's the weekend, please be patient with my returning your email. Thanks!\");\n}\n\nfunction showMessage(message) {\n    formInfo.innerHTML = \"<p>\" +message+ \"</p>\";\n}\n\nfunction clearMessage() {\n    formInfo.innerHTML = \"\";\n}\n\nconst contactForm = document.getElementById(\"contactForm\");\ncontactForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    const contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contactForm);\n    contact.send();\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
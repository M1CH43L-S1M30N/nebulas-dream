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

/***/ "./src/Character.js":
/*!**************************!*\
  !*** ./src/Character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\nclass Character {\n  constructor(name) {\n    this.name = name;\n    this.status = { health: 100, sanity: 100 };\n  }\n\n  hazard(n) {\n    const rand = n || Math.floor(Math.random() * 5 + 1);\n    \n    this.status.sanity -= rand;\n    \n    if (this.status.sanity < 1) {\n      return false\n    }\n    return true;\n  }\n}\n\n//# sourceURL=webpack:///./src/Character.js?");

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\nclass Event {\n  constructor() {\n    this.events = [\"Alert Black Hole Detected\",\n     \"Alert Unknown Singularity Detected\",\n     \"Alert Asteroid Belt Detected\",\n     \"Alert Acidic Space Rain Detected\",\n     \"Alert Unidentified Flying Object Detected\",\n      \"Alert Unexpected Gravitational Pull Detected\",\n       \"Alert Impending Supernova Detected\"]\n  }\n\n  trigger() {\n    var rand = this.events[Math.floor(Math.random() * this.events.length)];\n    return [rand, Math.floor(Math.random() * 10 + 1)];\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/Event.js?");

/***/ }),

/***/ "./src/Nebula.js":
/*!***********************!*\
  !*** ./src/Nebula.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nebula; });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Starfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Starfield */ \"./src/Starfield.js\");\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character */ \"./src/Character.js\");\n/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event */ \"./src/Event.js\");\n\n\n\n\n\nclass Nebula {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.dim = { width: canvas.width, height: canvas.height };\n    this.ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.starfield = new _Starfield__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n    this.event = new _Event__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.passengers = [];\n    this.scenarios;\n    this.date = Date.now();\n    this.paused = false;\n    // this.pauseButton = document.getElementById(\"pause\");\n    this.sanitySlice = this.sanitySlice.bind(this);\n    this.handleEvent = this.handleEvent.bind(this);\n    this.continue = this.continue.bind(this);\n    // this.handlePause = this.handlePause.bind(this);\n    // this.handleBlackHole = this.handleBlackHole.bind(this);\n    this.start();\n  }\n\n  handleEvent() {\n    let alert = document.getElementById(\"alert-id\");\n    let alertDiv = document.getElementById(\"alert-div-id\");\n    \n    let ans;\n    let event = this.event.trigger();\n    \n    if (this.passengers.length) {\n      alert.innerHTML = event[0];\n      alertDiv.style.visibility = \"visible\"; \n      // ans = prompt(`${event[0]} type [avoid] or [continue]`);\n    }\n\n    // if (ans === \"avoid\") {\n    //   let passenger = this.passengers[Math.floor(Math.random() * this.passengers.length)];\n    //   console.log(`${passenger.name} lost ${event[1]} of sanity!!`)\n    //   passenger.hazard(event[1]);\n    // }\n    function disappear() {\n      alertDiv.style.visibility = \"hidden\";\n    }\n    setTimeout(() => {\n      disappear();\n      this.continue();\n    }, 4000);\n    // this.continue();\n  }\n\n  continue() {\n    this.animate();\n    this.sanitySlice();\n    setTimeout(this.handleEvent, 5000);\n  }\n\n\n  start() {\n    this.animate();\n    this.populatePassengers();\n    this.sanitySlice();\n    setTimeout(this.handleEvent, 5000);\n    // setTimeout(this.handleBlackHole, 5000);\n    // setTimeout(this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 5000);\n  }\n\n  animate() {\n    this.ship.animate(this.ctx);\n    // this.starfield.animate();\n    // console.log(this.starfield.frame);\n    console.log(\"wtf\")\n  }\n\n  populatePassengers() {\n    for (let i = 1; i < 5; i++) {\n      let person = prompt(`Enter Passenger #${i}'s name`);\n      this.passengers.push(new _Character__WEBPACK_IMPORTED_MODULE_2__[\"default\"](person));\n    }\n  }\n\n  sanitySlice() {\n    // console.log(this)\n    this.passengers.forEach(person => {\n      console.log(person)\n      let res = person.hazard();\n      if(!res) {\n        alert(`${person.name} went insane!!!`);\n        this.passengers = this.arrayRemove(this.passengers, person)\n        console.log(this.passengers)\n      }\n    })\n  }\n\n  arrayRemove(arr, value) {\n    return arr.filter(function (ele) {\n      return ele != value;\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Nebula.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\nconst CONSTANTS = {\n  HEIGHT: 100,\n  WIDTH: 150\n};\n\nclass Ship {\n  contructor() {\n    this.ship;\n  }\n\n  animate(ctx) {\n    this.drawShip(ctx);\n  }\n\n  drawShip(ctx) {\n    this.ship = new Image();\n    this.ship.src = \"../dist/assets/lastSprite.png\";\n    let that = this;\n    this.ship.onload = function keepDrawing() {\n      ctx.drawImage(that.ship, 400, 160);\n      requestAnimationFrame(keepDrawing);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/Starfield.js":
/*!**************************!*\
  !*** ./src/Starfield.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Starfield; });\nclass Starfield {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.img = new Image();\n    this.img.src = \"../dist/assets/stars.png\";\n    this.animate = this.animate.bind(this);\n    // this.frame = this.animate();\n  }\n\n  animate() {\n    var width = 650;\n    var height = 400;\n    var imgWidth = 0;\n    var scrollSpeed = 5;\n    let that = this;\n\n    this.ctx.drawImage(that.img, imgWidth, 0);\n\n    this.ctx.drawImage(that.img, imgWidth - width, 0);\n\n    imgWidth += scrollSpeed;\n\n    if (imgWidth == width) imgWidth = 0;\n\n    // window.requestAnimationFrame(this.animate);\n  }\n\n  \n}\n\n\n\n\n// var canvas = document.getElementById(\"canvas\");\n// console.log(canvas);\n\n// var ctx = canvas.getContext(\"2d\");\n\n// canvas.width = 650;\n// canvas.height = 400;\n\n// var img = new Image();\n\n// img.src = \"../dist/assets/stars.png\";\n\n// window.onload = function() {\n//   var imgWidth = 0;\n\n//   var scrollSpeed = 5;\n\n//   function loop() {\n//     var ship = new Ship();\n//     ship.drawImage(ctx);\n//     ctx.drawImage(img, imgWidth, 0);\n\n//     ctx.drawImage(img, imgWidth - canvas.width, 0);\n\n//     imgWidth += scrollSpeed;\n\n//     if (imgWidth == canvas.width) imgWidth = 0;\n\n//     window.requestAnimationFrame(loop);\n//   }\n\n//   loop();\n//   console.log(\"wow\");\n// }\n\n//# sourceURL=webpack:///./src/Starfield.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nebula */ \"./src/Nebula.js\");\n\n\nconst canvas = document.getElementById(\"canvas\");\nnew _Nebula__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
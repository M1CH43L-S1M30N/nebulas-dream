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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\nclass Character {\n  constructor(name) {\n    this.name = name;\n    this.status = { health: 100, sanity: 100 };\n  }\n\n  hazard(n) {\n    const rand = n || Math.floor(Math.random() * 10 + 5);\n    \n    this.status.sanity -= rand;\n    \n    if (this.status.sanity < 1) {\n      return false\n    }\n    return true;\n  }\n}\n\n//# sourceURL=webpack:///./src/Character.js?");

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\nclass Event {\n  constructor() {\n    this.events = [\"Alert Black Hole Detected\",\n     \"Alert Unknown Singularity Detected\",\n     \"Alert Asteroid Belt Detected\",\n     \"Alert Acidic Space Rain Detected\",\n     \"Alert Unidentified Flying Object Detected\",\n      \"Alert Unexpected Gravitational Pull Detected\",\n       \"Alert Impending Supernova Detected\"]\n  }\n\n  trigger() {\n    var rand = this.events[Math.floor(Math.random() * this.events.length)];\n    return [rand, Math.floor(Math.random() * 10 + 8)];\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/Event.js?");

/***/ }),

/***/ "./src/Nebula.js":
/*!***********************!*\
  !*** ./src/Nebula.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nebula; });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Starfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Starfield */ \"./src/Starfield.js\");\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character */ \"./src/Character.js\");\n/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event */ \"./src/Event.js\");\n\n\n\n\n\nclass Nebula {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.dim = { width: canvas.width, height: canvas.height };\n    this.ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.starfield = new _Starfield__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n    this.event = new _Event__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.passengers = [];\n    this.scenarios;\n    this.time = Date.now();\n    this.paused = false;\n    this.names = [\"Tommy\", \"Carly\", \"Martin\", \"Mashu\"]\n    // this.pauseButton = document.getElementById(\"pause\");\n    this.sanitySlice = this.sanitySlice.bind(this);\n    this.handleEvent = this.handleEvent.bind(this);\n    this.continue = this.continue.bind(this);\n    this.animate = this.animate.bind(this);\n    this.populatePassengers = this.populatePassengers.bind(this);\n    // this.handlePause = this.handlePause.bind(this);\n    // this.handleBlackHole = this.handleBlackHole.bind(this);\n    this.start();\n  }\n\n  handleEvent() {\n    let cover = document.getElementById(\"cover\");\n    cover.style.visibility = \"hidden\";\n\n    this.starfield.animating = false;\n    let timeOne = Date.now();\n    let alert = document.getElementById(\"alert-id\");\n    let alertDiv = document.getElementById(\"alert-div-id\");\n    let avoid = document.getElementById(\"yes\");\n    let cont = document.getElementById(\"no\");\n    let yesno = document.getElementById(\"yes-no\");\n    let encounterDiv = document.getElementById(\"encounter-div\");\n    let encounter = document.getElementById(\"encounter\");\n\n    \n\n    function disappear() {\n      alertDiv.style.visibility = \"hidden\";\n      yesno.style.visibility = \"hidden\";\n      encounterDiv.style.visibility = \"hidden\";\n    }\n    \n    let ans;\n    let event = this.event.trigger();\n    \n    if (this.passengers) {\n      alert.innerHTML = event[0];\n      alertDiv.style.visibility = \"visible\";\n      yesno.style.visibility = \"visible\";\n      \n      // ans = prompt(`${event[0]} type [avoid] or [continue]`);\n      console.log(\"setting click handler\");\n\n      cont.onclick = () => {\n        let timeTwo = Date.now();\n        this.time = this.time + (timeTwo - timeOne);\n        // e.preventDefault();\n        let passenger = this.passengers[Math.floor(Math.random() * this.passengers.length)];\n        passenger.hazard(event[1]);\n        ans = `CATASTROPHE!  ${passenger.name} lost ${event[1]} of sanity!!`;\n        encounter.innerHTML = ans;\n        encounterDiv.style.visibility = \"visible\";\n        setTimeout(() => {\n          console.log((timeTwo - timeOne) / 1000);\n          disappear();\n          this.updateSanity();\n          this.continue();\n        }, 3000);\n        // avoid.removeEventListener(\"click\", cbAvoid);\n      }\n\n      avoid.onclick = () => {\n        let timeTwo = Date.now();\n        this.time = (this.time + 10000) + (timeTwo - timeOne);\n        // e.preventDefault();\n        ans = \"Crisis Avoided...rerouting\";\n        encounter.innerHTML = ans;\n        encounterDiv.style.visibility = \"visible\";\n        setTimeout(() => {\n          console.log((timeTwo - timeOne) / 1000);\n          disappear();\n          this.updateSanity();\n          this.continue();\n        }, 3000);\n        // cont.removeEventListener(\"click\", cbCont);\n      }\n      // cont.removeEventListener(\"click\", cbCont);\n      // avoid.removeEventListener(\"click\", cbAvoid);\n      \n      // avoid.addEventListener(\"click\", cbAvoid, { once: true });\n      // cont.addEventListener(\"click\", cbCont, { once: true })\n    }\n  }\n\n  continue() {\n    let winnerDiv = document.getElementById(\"winner-div\");\n    let winner = document.getElementById(\"winner\");\n    let final;\n\n    let endTime = Date.now();\n    if (endTime - this.time >= 95000) {\n      this.starfield.animating = false;\n      let count = 0\n      this.passengers.forEach(p => {\n        if (p.status.sanity > 1) {\n          count = count + 1;\n        }\n      })\n      if(count === 4) {\n        final = \"The journey was long and unforgiving, but alas you and your family can begin your second chance at life on Genesis Two!!\";\n      } else {\n        final = \"Though all of you may not be mentally fit to contribute to society, at least some of you, with enough rehab will be able to begin your second chance at life on Genesis Two!!\";\n      }\n\n      winner.innerHTML = `Congratulations! ${final}`;\n      winnerDiv.style.visibility = \"visible\";\n      // console.log(\"You made it to Genesis Two\");\n    } else {\n      this.animate();\n      this.sanitySlice();\n      console.log(\"inside continue\")\n      setTimeout(this.handleEvent, 9000);\n    }\n  }\n\n\n  start() {\n    let cover = document.getElementById(\"cover\");\n    cover.style.visibility = \"visible\";\n    this.animate();\n    this.populatePassengers();\n    this.sanitySlice();\n    setTimeout(this.handleEvent, 9000);\n    // setTimeout(this.handleBlackHole, 5000);\n    // setTimeout(this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 5000);\n  }\n\n  animate() {\n    this.ship.animate(this.ctx);\n    this.starfield.animate(this.ctx);\n    // console.log(this.starfield.frame);\n    // console.log(\"wtf\")\n  }\n\n  populatePassengers() {\n    for (let i = 0; i < 4; i++) {\n      let person = this.names[i];\n      let pass = new _Character__WEBPACK_IMPORTED_MODULE_2__[\"default\"](person);\n      this.passengers.push(pass);\n    }\n  }\n  // CODE SNIPPET\n\n  updateSanity() {\n    let alive = false;\n    this.passengers.forEach(p => {\n      if (p.status.sanity > 0) {\n        alive = true;\n      }\n    })\n    if (alive) {\n      for (let i = 0; i < this.passengers.length; i++) {\n        let character = document.getElementById(`p${i + 1}`);\n        let pass = this.passengers[i];\n        if (pass.status.sanity < 55 && pass.status.sanity > 25) {\n          character.style.borderColor = \"orange\";\n        } else if (pass.status.sanity <= 25) {\n          character.style.borderColor = \"red\";\n        }\n        character.innerHTML = `${pass.name}'s sanity: ${pass.status.sanity}`;\n      }\n    } else {\n      let gameOverDiv = document.getElementById(\"game-over-div\");\n      let gameOver = document.getElementById(\"game-over\");\n\n      gameOver.innerHTML = \"The journey to Genesis Two proved too much for you and your family. You are left to drift the void, until the end of time!... GAME OVER\";\n      gameOverDiv.style.visibility = \"visible\";\n    }\n  }\n  // CODE SNIPPET\n\n  sanitySlice() {\n    let insane = document.getElementById(\"death\");\n    function disappear() {\n      insane.style.visibility = \"hidden\";\n    }\n    this.passengers.forEach(person => {\n      console.log(person)\n      let res = person.hazard();\n      if(!res) {\n        insane.innerHTML = `${person.name} went insane!!!`;\n        insane.style.visibility = \"visible\";\n        // alert(`${person.name} went insane!!!`);\n        // this.passengers = this.arrayRemove(this.passengers, person)\n        setTimeout(disappear, 3000);\n        // console.log(this.passengers)\n      }\n    })\n  }\n\n  arrayRemove(arr, value) {\n    return arr.filter(function (ele) {\n      return ele != value;\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Nebula.js?");

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
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/michael/Documents/Nebulas-Dream/src/Starfield.js'\");\n\n//# sourceURL=webpack:///./src/Starfield.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nebula */ \"./src/Nebula.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Starfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Starfield */ \"./src/Starfield.js\");\n\n\n\n\nconst sendoffs = [\n  \"Godspeed on your journey!!!\",\n  \"Safe passage to Genesis Two!!\",\n  \"Do not go gently into that good night!\",\n  \"Nobody can hear you scream in space!!\",\n  \"You're not in Kansas anymore!!\",\n  \"Your colony awaits you at Genesis Two!\"\n]\n\nconst canvas = document.getElementById(\"canvas\");\nconst key = document.getElementById(\"any-key-id\");\nconst intro = document.getElementById(\"intro\");\nconst instruct = document.getElementById(\"instructions-div\");\nconst sendoff = document.getElementById(\"Godspeed\");\n\nlet ctx = canvas.getContext(\"2d\");\n\nconst ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst starfield = new _Starfield__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n\nship.animate(ctx);\nstarfield.animate(ctx);\n\ndocument.addEventListener(\"keypress\", () => {\n  starfield.animating = false;\n  key.style.visibility = \"hidden\";\n  intro.style.visibility = \"hidden\";\n  instruct.style.visibility = \"hidden\";\n  sendoff.innerHTML = sendoffs[Math.floor(Math.random() * 6)];\n  new _Nebula__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n})\n\n\n// new Nebula(canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
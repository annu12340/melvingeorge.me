module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/IndexPage/Header.jsx":
/*!*****************************************!*\
  !*** ./components/IndexPage/Header.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/Header.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ICONS

const FontAwesomeIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome", 7))).FontAwesomeIcon, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome")],
    modules: ["@fortawesome/react-fontawesome"]
  }
}); // COMPONENTS

const Navigation = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Navigation/Navigation */ "./components/Navigation/Navigation.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../Navigation/Navigation */ "./components/Navigation/Navigation.jsx")],
    modules: ["../Navigation/Navigation"]
  }
});
const MobileNavigation = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../Navigation/MobileNavigation */ "./components/Navigation/MobileNavigation.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../Navigation/MobileNavigation */ "./components/Navigation/MobileNavigation.jsx")],
    modules: ["../Navigation/MobileNavigation"]
  }
});


const Header = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
  className: "jsx-813123148" + " " + "bgHero z-0 pb-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-813123148" + " " + "container max-w-screen-md mx-auto px-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, __jsx(Navigation, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx(MobileNavigation, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("section", {
  className: "jsx-813123148" + " " + "flex flex-col items-center justify-center lg:flex-row pt-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-813123148" + " " + "flex flex-col order-last lg:order-first",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}, __jsx("p", {
  className: "jsx-813123148" + " " + "pb-2 text-blue-600 font-normal text-2xl lg:text-3xl leading-normal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, "Hi, I'm Melvin George. I help the world by building quality software."), __jsx("p", {
  className: "jsx-813123148" + " " + "pt-2 text-left text-blue-300",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://www.github.com/melvin2016",
  target: "blank",
  className: "jsx-813123148",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: "transition transition-colors duration-300 hover:text-gray-900",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://mozillians.org/en-US/u/melvin2016/",
  target: "blank",
  className: "jsx-813123148",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: "transition transition-colors duration-300 hover:text-orange-500",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFirefoxBrowser"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://www.facebook.com/alkitj10",
  target: "blank",
  className: "jsx-813123148",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: "transition transition-colors duration-300 hover:text-blue-700",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://www.twitter.com/melvin2016_",
  target: "blank",
  className: "jsx-813123148",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: "transition transition-colors duration-300 hover:text-blue-400",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 17
  }
})))), __jsx("div", {
  className: "jsx-813123148" + " " + "order-first lg:order-last",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "jsx-813123148" + " " + "heroImg block lg:hidden",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 13
  }
}), __jsx("img", {
  width: "640",
  height: "360",
  src: __webpack_require__(/*! ../../public/me.png?webp */ "./public/me.png?webp"),
  alt: "Picture of Melvin george",
  className: "jsx-813123148" + " " + "hidden lg:block order-first md:order-last w-full z-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }
}))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "813123148",
  __self: undefined
}, `.bgHero.jsx-813123148{background-color:#ebf8ff;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%234299e1' fill-opacity='0.11' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");}.heroImg.jsx-813123148{width:160px;height:160px;margin:25px auto;border-radius:50%;background:url(${__webpack_require__(/*! ../../public/me.png?webp */ "./public/me.png?webp")}) 5px / cover no-repeat #bee3f8;background-repeat:no-repeat;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWx2aW5nZW9yZ2UvUFJPSkVDVFMvb25nb2luZy9teUJsb2cvbXlCbG9nQmFja2VuZC9jb21wb25lbnRzL0luZGV4UGFnZS9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGZ0IsQUFHa0MsQUFLYixZQUNDLGFBTDh0SyxBQU0xdEssaUJBQ0Msa0JBRUMsMkVBQ1MsNEJBQzlCLGltS0FWQSIsImZpbGUiOiIvVXNlcnMvbWVsdmluZ2VvcmdlL1BST0pFQ1RTL29uZ29pbmcvbXlCbG9nL215QmxvZ0JhY2tlbmQvY29tcG9uZW50cy9JbmRleFBhZ2UvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIElDT05TXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5jb25zdCBGb250QXdlc29tZUljb24gPSBkeW5hbWljKFxuICBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpKS5Gb250QXdlc29tZUljb25cbik7XG5cbi8vIENPTVBPTkVOVFNcbmNvbnN0IE5hdmlnYXRpb24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL05hdmlnYXRpb24vTmF2aWdhdGlvblwiKSk7XG5jb25zdCBNb2JpbGVOYXZpZ2F0aW9uID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoXCIuLi9OYXZpZ2F0aW9uL01vYmlsZU5hdmlnYXRpb25cIilcbik7XG5cbmltcG9ydCB7XG4gIGZhR2l0aHViLFxuICBmYUZhY2Vib29rLFxuICBmYVR3aXR0ZXIsXG4gIGZhRmlyZWZveEJyb3dzZXIsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPD5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnSGVybyB6LTAgcGItMTJcIj5cbiAgICAgIHsvKiA8IS0tIEhlYWRlciBDb250YWluZXIgLS0+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctc2NyZWVuLW1kIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICB7LyogPCEtLSBOYXZpZ2F0aW9uIFNlY3Rpb24gLS0+ICovfVxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8TW9iaWxlTmF2aWdhdGlvbiAvPlxuICAgICAgICB7LyogPCEtLSBIZXJvIHNlY3Rpb24gLS0+ICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzpmbGV4LXJvdyBwdC02XCI+XG4gICAgICAgICAgey8qIDwhLS0gSGVybyBTZWN0aW9uOiBBYm91dCBUZXh0IC0tPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3JkZXItbGFzdCBsZzpvcmRlci1maXJzdFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWJsdWUtNjAwIGZvbnQtbm9ybWFsIHRleHQtMnhsIGxnOnRleHQtM3hsIGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgICAgICAgIEhpLCBJJ20gTWVsdmluIEdlb3JnZS4gSSBoZWxwIHRoZSB3b3JsZCBieSBidWlsZGluZyBxdWFsaXR5XG4gICAgICAgICAgICAgIHNvZnR3YXJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMiB0ZXh0LWxlZnQgdGV4dC1ibHVlLTMwMFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9tZWx2aW4yMDE2XCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZhR2l0aHVifVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tb3ppbGxpYW5zLm9yZy9lbi1VUy91L21lbHZpbjIwMTYvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LW9yYW5nZS01MDBcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFGaXJlZm94QnJvd3Nlcn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWxraXRqMTBcIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtYmx1ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFGYWNlYm9va31cbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9tZWx2aW4yMDE2X1wiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYVR3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEhlcm8gU2VjdGlvbjogSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1maXJzdCBsZzpvcmRlci1sYXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9JbWcgYmxvY2sgbGc6aGlkZGVuXCIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgb3JkZXItZmlyc3QgbWQ6b3JkZXItbGFzdCB3LWZ1bGwgei0wXCJcbiAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vcHVibGljL21lLnBuZz93ZWJwXCIpfVxuICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIE1lbHZpbiBnZW9yZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJnSGVybyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY4ZmY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzA0IDMwNCcgd2lkdGg9JzMwNCcgaGVpZ2h0PSczMDQnJTNFJTNDcGF0aCBmaWxsPSclMjM0Mjk5ZTEnIGZpbGwtb3BhY2l0eT0nMC4xMScgZD0nTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgfVxuXG4gICAgICAuaGVyb0ltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cmVxdWlyZShcIi4uLy4uL3B1YmxpYy9tZS5wbmc/d2VicFwiKX0pIDVweCAvIGNvdmVyXG4gICAgICAgICAgbm8tcmVwZWF0ICNiZWUzZjg7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/Header.jsx */`));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/IndexPage/Main.jsx":
/*!***************************************!*\
  !*** ./components/IndexPage/Main.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SinglePostLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SinglePostLink */ "./components/IndexPage/SinglePostLink.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/Main.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// COMPONENTS


const Main = ({
  linksData
}) => __jsx("main", {
  className: "z-0 relative container max-w-screen-md mx-auto px-4 md:px-20 md:-mt-8 lg:-mt-12 py-10 mb-12 md:shadow-lg md:rounded-lg bg-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "text-2xl mb-10 font-semibold text-gray-800",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "Blog"), linksData && linksData.length <= 0 ? null : linksData.map(linkData => __jsx(_SinglePostLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: linkData.title,
  key: linkData.href,
  href: linkData.href,
  description: linkData.description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/IndexPage/SinglePostLink.jsx":
/*!*************************************************!*\
  !*** ./components/IndexPage/SinglePostLink.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/SinglePostLink.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! next/link */ "./node_modules/next/link.js", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! next/link */ "./node_modules/next/link.js")],
    modules: ["next/link"]
  }
});
const FontAwesomeIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome", 7))).FontAwesomeIcon, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome")],
    modules: ["@fortawesome/react-fontawesome"]
  }
});


const SinglePostLink = ({
  title,
  href,
  description
}) => __jsx("div", {
  className: "mb-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(Link, {
  href: "/posts/[link]",
  as: `/posts/${href}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "text-2xl font-medium cursor-pointer duration-300 transition transition-colors  hover:bg-gray-200 hover:text-blue-600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, title.charAt(0).toUpperCase() + title.slice(1))), __jsx("p", {
  className: "italic mt-1 text-xl font-normal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, description), __jsx("a", {
  href: "",
  className: "inline-block cursor-pointer text-blue-500 mt-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx(Link, {
  href: "/posts/[link]",
  as: `/posts/${href}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx("span", {
  className: "font-light text-xl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, "Read ", __jsx(FontAwesomeIcon, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"],
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 16
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (SinglePostLink);

/***/ }),

/***/ "./context/NavigationContext.js":
/*!**************************************!*\
  !*** ./context/NavigationContext.js ***!
  \**************************************/
/*! exports provided: activeTabContext, setActiveTabContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeTabContext", function() { return activeTabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveTabContext", function() { return setActiveTabContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const activeTabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const setActiveTabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndexPage_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndexPage/Header */ "./components/IndexPage/Header.jsx");
/* harmony import */ var _components_IndexPage_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IndexPage/Main */ "./components/IndexPage/Main.jsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_NavigationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/NavigationContext */ "./context/NavigationContext.js");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES
 // COMPONENTS



 // CONTEXT


function Home({
  linksData
}) {
  const setActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_NavigationContext__WEBPACK_IMPORTED_MODULE_4__["setActiveTabContext"]);
  setActiveTab("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "HOME",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_components_IndexPage_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_IndexPage_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linksData: linksData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}
async function getStaticProps() {
  const fs = __webpack_require__(/*! fs */ "fs");

  const path = __webpack_require__(/*! path */ "path");

  const matter = __webpack_require__(/*! gray-matter */ "gray-matter");

  const filesString = fs.readdirSync(path.join("content", "posts/")).toString();
  const linksArray = filesString.split(",");
  const linksData = linksArray.map(link => {
    const post = fs.readFileSync(path.join("content", "posts/", link)).toString();
    const {
      data
    } = matter(post);
    const title = data.title;
    const href = link.replace(".md", "");
    const description = data.description;
    const date = data.date;
    return {
      title,
      href,
      description,
      date
    };
  }); // Sort using date added

  linksData.sort((firstFile, secondFile) => {
    return new Date(secondFile.date) - new Date(firstFile.date);
  }); // Delete unnecessary date property

  linksData.map(link => {
    delete link.date;
    return link;
  });
  return {
    props: {
      linksData
    }
  };
}

/***/ }),

/***/ "./public/me.png?webp":
/*!****************************!*\
  !*** ./public/me.png?webp ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/me-d2ece8a7fbcb208da976edc8ebbb9c9a.png.webp";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
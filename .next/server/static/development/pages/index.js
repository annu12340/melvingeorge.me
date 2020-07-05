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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navigation */ "./components/Navigation/Navigation.jsx");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/Header.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// ICONS


const FontAwesomeIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome", 7))).FontAwesomeIcon, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome")],
    modules: ["@fortawesome/react-fontawesome"]
  }
});


const Header = () => __jsx("div", {
  className: "jsx-1470800452" + " " + "bgHero",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx("header", {
  className: "jsx-1470800452" + " " + "z-0 pb-12 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-1470800452" + " " + "container max-w-screen-md mx-auto px-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, __jsx("section", {
  className: "jsx-1470800452" + " " + "flex flex-col items-center justify-center lg:flex-row pt-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-1470800452" + " " + "flex flex-col order-last lg:order-first",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, __jsx("p", {
  className: "jsx-1470800452" + " " + "pb-2 text-white font-medium text-2xl lg:text-3xl leading-normal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, "Hi, I'm Melvin George. I help the world by building quality software."), __jsx("p", {
  className: "jsx-1470800452" + " " + "pt-2 text-left text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://www.github.com/melvin2016",
  target: "blank",
  className: "jsx-1470800452",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: " transition-colors duration-300 hover:text-gray-900",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://mozillians.org/en-US/u/melvin2016/",
  target: "blank",
  className: "jsx-1470800452",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: " transition-colors duration-300 hover:text-orange-300",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFirefoxBrowser"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://www.facebook.com/alkitj10",
  target: "blank",
  className: "jsx-1470800452",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: "transition transition-colors duration-300 hover:text-blue-700",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebook"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
})), "\xA0\xA0\xA0", __jsx("a", {
  href: "https://www.twitter.com/developer_369",
  target: "blank",
  className: "jsx-1470800452",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 15
  }
}, __jsx(FontAwesomeIcon, {
  className: " transition-colors duration-300 hover:text-blue-300",
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitter"],
  size: "2x",
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
})))), __jsx("div", {
  className: "jsx-1470800452" + " " + "order-first lg:order-last",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "jsx-1470800452" + " " + "heroImg block lg:hidden w-full",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }
}), __jsx("img", {
  width: "640",
  height: "360",
  src: __webpack_require__(/*! ../../public/me2.png?webp */ "./public/me2.png?webp"),
  alt: "Picture of Melvin george",
  className: "jsx-1470800452" + " " + "hidden lg:block order-first md:order-last z-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 13
  }
}))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1470800452",
  __self: undefined
}, `.heroImg.jsx-1470800452{width:160px;height:160px;margin:25px auto;border-radius:50%;background:url(${__webpack_require__(/*! ../../public/me.png?webp */ "./public/me.png?webp")}) -30px / cover no-repeat #4299E1;background-repeat:no-repeat;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWx2aW5nZW9yZ2UvUFJPSkVDVFMvb25nb2luZy9teUJsb2cvbXlCbG9nQmFja2VuZC9jb21wb25lbnRzL0luZGV4UGFnZS9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGTyxBQUdxQixZQUNDLGFBQ0ksaUJBQ0Msa0JBRUMsNkVBQ1MsNEJBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9tZWx2aW5nZW9yZ2UvUFJPSkVDVFMvb25nb2luZy9teUJsb2cvbXlCbG9nQmFja2VuZC9jb21wb25lbnRzL0luZGV4UGFnZS9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gSUNPTlNcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9OYXZpZ2F0aW9uL05hdmlnYXRpb25cIjtcbmNvbnN0IEZvbnRBd2Vzb21lSWNvbiA9IGR5bmFtaWMoXG4gIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIikpLkZvbnRBd2Vzb21lSWNvbixcbik7XG5cbmltcG9ydCB7XG4gIGZhR2l0aHViLFxuICBmYUZhY2Vib29rLFxuICBmYVR3aXR0ZXIsXG4gIGZhRmlyZWZveEJyb3dzZXIsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJiZ0hlcm9cIj5cbiAgICA8TmF2aWdhdGlvbiAvPlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiei0wIHBiLTEyIFwiPlxuICAgICAgey8qIDwhLS0gSGVhZGVyIENvbnRhaW5lciAtLT4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy1zY3JlZW4tbWQgbXgtYXV0byBweC00XCI+XG4gICAgICAgIHsvKiA8IS0tIEhlcm8gc2VjdGlvbiAtLT4gKi99XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6ZmxleC1yb3cgcHQtNlwiXG4gICAgICAgID5cbiAgICAgICAgICB7LyogPCEtLSBIZXJvIFNlY3Rpb246IEFib3V0IFRleHQgLS0+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvcmRlci1sYXN0IGxnOm9yZGVyLWZpcnN0XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi0yIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGV4dC0yeGwgbGc6dGV4dC0zeGwgbGVhZGluZy1ub3JtYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIaSwgSSdtIE1lbHZpbiBHZW9yZ2UuIEkgaGVscCB0aGUgd29ybGQgYnkgYnVpbGRpbmcgcXVhbGl0eVxuICAgICAgICAgICAgICBzb2Z0d2FyZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTIgdGV4dC1sZWZ0IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vbWVsdmluMjAxNlwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZhR2l0aHVifVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tb3ppbGxpYW5zLm9yZy9lbi1VUy91L21lbHZpbjIwMTYvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtb3JhbmdlLTMwMFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUZpcmVmb3hCcm93c2VyfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hbGtpdGoxMFwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUZhY2Vib29rfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2RldmVsb3Blcl8zNjlcIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1ibHVlLTMwMFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYVR3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEhlcm8gU2VjdGlvbjogSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1maXJzdCBsZzpvcmRlci1sYXN0XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm9JbWcgYmxvY2sgbGc6aGlkZGVuIHctZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBvcmRlci1maXJzdCBtZDpvcmRlci1sYXN0IHotMFwiXG4gICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL3B1YmxpYy9tZTIucG5nP3dlYnBcIil9XG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgTWVsdmluIGdlb3JnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgIC5oZXJvSW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtyZXF1aXJlKFwiLi4vLi4vcHVibGljL21lLnBuZz93ZWJwXCIpfSkgLTMwcHggLyBjb3ZlclxuICAgICAgICAgIG5vLXJlcGVhdCAjNDI5OUUxO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "text-2xl mb-10 font-semibold text-gray-800",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, "Recent blogs"), linksData && linksData.length <= 0 ? null : linksData.map(linkData => __jsx(_SinglePostLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: linkData.title,
  key: linkData.href,
  href: linkData.href,
  description: linkData.description,
  tagName: linkData.tagName,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
})), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/blog",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx("a", {
  className: "font-light text-xl text-blue-500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, "Read more articles \u2192")));

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
/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tag/Tag */ "./components/Tag/Tag.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/IndexPage/SinglePostLink.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! next/link */ "./node_modules/next/link.js", 7)), {
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
  description,
  tagName
}) => __jsx("div", {
  className: "mb-16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx(Link, {
  href: "/blog/[link]",
  as: `/blog/${href}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "text-2xl font-medium cursor-pointer duration-300 transition transition-colors  hover:bg-gray-200 hover:text-blue-600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, title.charAt(0).toUpperCase() + title.slice(1))), __jsx("p", {
  className: "italic mt-1 text-xl font-normal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, description), __jsx("div", {
  className: "flex flex-row justify-between items-center mt-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx("a", {
  href: "",
  className: "inline-block cursor-pointer text-blue-500 mt-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, __jsx(Link, {
  href: "/blog/[link]",
  as: `/blog/${href}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "font-light text-xl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}, "Read ", __jsx(FontAwesomeIcon, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"],
  width: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 18
  }
})))), __jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
  name: tagName,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (SinglePostLink);

/***/ }),

/***/ "./components/Navigation/Navigation.jsx":
/*!**********************************************!*\
  !*** ./components/Navigation/Navigation.jsx ***!
  \**********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ActiveTab */ "./context/ActiveTab.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/Navigation.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// MODULES



 // COMPONENTS

const NavigationItems = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./NavigationItems */ "./components/Navigation/NavigationItems.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./NavigationItems */ "./components/Navigation/NavigationItems.jsx")],
    modules: ["./NavigationItems"]
  }
});
const MobileNavigation = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./MobileNavigation */ "./components/Navigation/MobileNavigation.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./MobileNavigation */ "./components/Navigation/MobileNavigation.jsx")],
    modules: ["./MobileNavigation"]
  }
});

const Navigation = () => {
  const activeTab = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__["ActiveTabContext"]);
  const isIndex = activeTab.tab === "" ? true : false;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-3730079438" + " " + "flex flex-row justify-between container max-w-screen-md mx-auto px-4 h-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3730079438" + " " + "flex flex-row  items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, !isIndex ? __jsx("div", {
    className: "jsx-3730079438" + " " + "heroImg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }) : null, __jsx("a", {
    className: "jsx-3730079438" + " " + ` transition-colors duration-300 text-black text-lg tracking-wider cursor-pointer ${isIndex ? "text-white font-medium" : "ml-4"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Melvin George"))), __jsx("ul", {
    className: "jsx-3730079438" + " " + `${isIndex ? "text-white font-medium" : "text-black"} text-lg md:block my-auto hidden`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(NavigationItems, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(MobileNavigation, {
    isIndex: isIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3730079438",
    __self: undefined
  }, `.heroImg.jsx-3730079438{width:60px;height:60px;margin:15px auto;border-radius:50%;background:url(${__webpack_require__(/*! ../../public/me.png?webp */ "./public/me.png?webp")}) -10px / cover no-repeat rgb(241,241,241);background-repeat:no-repeat;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWx2aW5nZW9yZ2UvUFJPSkVDVFMvb25nb2luZy9teUJsb2cvbXlCbG9nQmFja2VuZC9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNTLEFBR3NCLFdBQ0MsWUFDSyxpQkFDQyxrQkFFWSxzRkFDRiw0QkFDOUIiLCJmaWxlIjoiL1VzZXJzL21lbHZpbmdlb3JnZS9QUk9KRUNUUy9vbmdvaW5nL215QmxvZy9teUJsb2dCYWNrZW5kL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVNcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFjdGl2ZVRhYkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BY3RpdmVUYWJcIjtcblxuLy8gQ09NUE9ORU5UU1xuY29uc3QgTmF2aWdhdGlvbkl0ZW1zID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL05hdmlnYXRpb25JdGVtc1wiKSk7XG5jb25zdCBNb2JpbGVOYXZpZ2F0aW9uID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL01vYmlsZU5hdmlnYXRpb25cIikpO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBhY3RpdmVUYWIgPSB1c2VDb250ZXh0KEFjdGl2ZVRhYkNvbnRleHQpO1xuICBjb25zdCBpc0luZGV4ID0gYWN0aXZlVGFiLnRhYiA9PT0gXCJcIiA/IHRydWUgOiBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGNvbnRhaW5lciBtYXgtdy1zY3JlZW4tbWQgbXgtYXV0byBweC00IGgtMjRcIlxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7IWlzSW5kZXggPyA8ZGl2IGNsYXNzTmFtZT1cImhlcm9JbWdcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHRleHQtYmxhY2sgdGV4dC1sZyB0cmFja2luZy13aWRlciBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgIGlzSW5kZXggPyBcInRleHQtd2hpdGUgZm9udC1tZWRpdW1cIiA6IFwibWwtNFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNZWx2aW4gR2VvcmdlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgIGlzSW5kZXggPyBcInRleHQtd2hpdGUgZm9udC1tZWRpdW1cIiA6IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgfSB0ZXh0LWxnIG1kOmJsb2NrIG15LWF1dG8gaGlkZGVuYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbXMgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPE1vYmlsZU5hdmlnYXRpb24gaXNJbmRleD17aXNJbmRleH0gLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLmhlcm9JbWcge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cmVxdWlyZShcIi4uLy4uL3B1YmxpYy9tZS5wbmc/d2VicFwiKX0pIC0xMHB4IC8gY292ZXJcbiAgICAgICAgICAgIG5vLXJlcGVhdCByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl19 */
/*@ sourceURL=/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/Navigation.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Tag/Tag.jsx":
/*!********************************!*\
  !*** ./components/Tag/Tag.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Tag/Tag.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Tag = ({
  name
}) => {
  let styleToApply;

  switch (name) {
    case "JavaScript":
      styleToApply = "bg-yellow-400 text-black";
      break;

    case "Nextjs":
      styleToApply = "bg-gray-300 text-black";
      break;

    case "Reactjs":
      styleToApply = "bg-black text-blue-400";
      break;

    case "Resource":
      styleToApply = "bg-blue-300 text-gray-800";
      break;
  }

  return __jsx("div", {
    className: `text-xl px-3 py-1 rounded-sm ${styleToApply}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./context/ActiveTab.jsx":
/*!*******************************!*\
  !*** ./context/ActiveTab.jsx ***!
  \*******************************/
/*! exports provided: ActiveTabProvider, ActiveTabContext, SetActiveTabContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveTabProvider", function() { return ActiveTabProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveTabContext", function() { return ActiveTabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveTabContext", function() { return SetActiveTabContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/context/ActiveTab.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const initalTab = {
  tab: ""
};
const ActiveTabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initalTab);
const SetActiveTabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      return {
        tab: ""
      };

    case "blog":
      return {
        tab: "blog"
      };

    case "projects":
      return {
        tab: "projects"
      };

    case "about":
      return {
        tab: "about"
      };

    default:
      return;
  }
};

const ActiveTabProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initalTab);
  return __jsx(ActiveTabContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(SetActiveTabContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, children));
};



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndexPage_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndexPage/Header */ "./components/IndexPage/Header.jsx");
/* harmony import */ var _components_IndexPage_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IndexPage/Main */ "./components/IndexPage/Main.jsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ActiveTab */ "./context/ActiveTab.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES
 // COMPONENTS



 // CONTEXT



const Home = ({
  linksData
}) => {
  const dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__["SetActiveTabContext"]); // This thing cause a fuc**** error that i dont know how how to fix :(
  // Even if this is an error it works as of now

  dispatchActiveTab({
    type: ""
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "HOME",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_IndexPage_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_components_IndexPage_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linksData: linksData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

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
    const href = link.replace(".mdx", "");
    const description = data.description;
    const date = data.date;
    const tagName = data.category;
    return {
      title,
      href,
      description,
      date,
      tagName
    };
  }); // Sort using date added

  linksData.sort((firstFile, secondFile) => {
    return new Date(secondFile.date) - new Date(firstFile.date);
  }); // Delete unnecessary date property

  linksData.map(link => {
    delete link.date;
    return link;
  });
  const filteredLinksData = linksData.filter((_, index) => {
    return index <= 29;
  });
  return {
    props: {
      linksData: filteredLinksData
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/me.png?webp":
/*!****************************!*\
  !*** ./public/me.png?webp ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,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"

/***/ }),

/***/ "./public/me2.png?webp":
/*!*****************************!*\
  !*** ./public/me2.png?webp ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/me2-d2ece8a7fbcb208da976edc8ebbb9c9a.png.webp";

/***/ }),

/***/ 6:
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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
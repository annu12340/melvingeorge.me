module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Seo/default-seo.config.js":
/*!**********************************************!*\
  !*** ./components/Seo/default-seo.config.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Blog Of MELVIN GEORGE",
  description: "Hi, I'm Melvin George. I help the world by building quality software. Come check out my blog to see more of software development posts",
  additionalMetaTags: [{
    name: "keywords",
    content: "blog,melvin george,article,developer,javascript,reactjs"
  }, {
    name: "image",
    property: "og:image",
    content: `https://melvingeorge.me${__webpack_require__(/*! ../../public/metame.png?resize&size=600 */ "./public/metame.png?resize&size=600")}`
  }, {
    name: "author",
    content: "MELVIN GEORGE"
  }],
  openGraph: {
    title: "MELVIN GEORGE",
    description: "Hi, I'm Melvin George. Come check out my blog to see more of my software developments",
    images: [{
      url: `https://melvingeorge.me${__webpack_require__(/*! ../../public/metame.png?resize&size=600 */ "./public/metame.png?resize&size=600")}`
    }],
    type: "website",
    locale: "en_IE",
    url: "https://melvingeorge.me/",
    site_name: "MELVIN GEORGE Blog"
  },
  twitter: {
    handle: "@melvin2016_",
    site: "@melvin2016_",
    cardType: "summary_large_image"
  }
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Seo_default_seo_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo/default-seo.config */ "./components/Seo/default-seo.config.js");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function App({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["DefaultSeo"], _extends({}, _components_Seo_default_seo_config__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["SocialProfileJsonLd"], {
    type: "Person",
    name: "MELVIN GEORGE",
    url: "http://melvingeorge.me/",
    sameAs: ["https://www.facebook.com/alkitj10", "https://github.com/melvin2016", "https://www.linkedin.com/in/melvin2016/", "https://twitter.com/melvin2016_"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./public/metame.png?resize&size=600":
/*!*******************************************!*\
  !*** ./public/metame.png?resize&size=600 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {srcSet:"/_next/static/images/metame-600-35b36bf737a1ecba0272e3b2a0e59ca7.png"+" 600w",images:[{path:"/_next/static/images/metame-600-35b36bf737a1ecba0272e3b2a0e59ca7.png",width:600,height:228}],src:"/_next/static/images/metame-600-35b36bf737a1ecba0272e3b2a0e59ca7.png",toString:function(){return "/_next/static/images/metame-600-35b36bf737a1ecba0272e3b2a0e59ca7.png"},placeholder: undefined,width:600,height:228};

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
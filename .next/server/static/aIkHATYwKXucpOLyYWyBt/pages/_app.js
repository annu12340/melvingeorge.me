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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./default-seo.config.js
/* harmony default export */ var default_seo_config = ({
  titleTemplate: "%s | MELVIN GEORGE",
  description: "Hi, I'm Melvin George, A web developer, and blogger. I’ve written code for Mozilla, Qiskit, and an active contributor to many frontend open-source projects that are being used by millions of people around the world. I love Javascript, React.js, and many new exciting technologies that help society to find a solution to an existing problem. Come check out my blog to see more of software development posts on these technologies.",
  canonical: "https://melvingeorge.me",
  additionalMetaTags: [{
    name: "keywords",
    content: "blog,melvin george,article,developer,javascript,reactjs,melvingeorge.me,developer_369,mozillian,qiskitter,melvin_2016,javascript developer, reactjs developer, nextjs developer, software engineer, blogger"
  }, {
    name: "image",
    property: "og:image",
    content: `https://melvingeorge.me${__webpack_require__("fxnT")}`
  }, {
    name: "author",
    content: "MELVIN GEORGE"
  }],
  openGraph: {
    title: "MELVIN GEORGE",
    description: "Hi, I'm Melvin George. Come check out my blog to see more of my software development posts",
    images: [{
      url: `https://melvingeorge.me${__webpack_require__("fxnT")}`
    }],
    type: "website",
    locale: "en_IE",
    url: "https://melvingeorge.me/",
    site_name: "MELVIN GEORGE Blog"
  },
  twitter: {
    handle: "@developer_369",
    site: "@developer_369",
    cardType: "summary_large_image"
  },
  facebook: {
    appId: 184687632619980
  }
});
// EXTERNAL MODULE: ./context/ActiveTab.jsx
var ActiveTab = __webpack_require__("cdkR");

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__("RDVA");

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/night-owl.css
var night_owl = __webpack_require__("2r9m");

// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;






const App = ({
  Component,
  pageProps
}) => {
  return __jsx(external_react_default.a.Fragment, null, __jsx(external_next_seo_["DefaultSeo"], default_seo_config), __jsx(external_next_seo_["SocialProfileJsonLd"], {
    type: "Person",
    name: "MELVIN GEORGE",
    url: "http://melvingeorge.me/",
    sameAs: ["https://www.facebook.com/alkitj10", "https://github.com/melvin2016", "https://www.linkedin.com/in/melvin2016/", "https://twitter.com/developer_369"]
  }), __jsx(ActiveTab["b" /* ActiveTabProvider */], null, __jsx(Component, pageProps)));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "2r9m":
/***/ (function(module, exports) {



/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdkR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActiveTabProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveTabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SetActiveTabContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    value: state
  }, __jsx(SetActiveTabContext.Provider, {
    value: dispatch
  }, children));
};



/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "fxnT":
/***/ (function(module, exports) {

module.exports = {srcSet:"/_next/static/images/metame-600-82397d196440a72e9238bd3140a8234d.png"+" 600w",images:[{path:"/_next/static/images/metame-600-82397d196440a72e9238bd3140a8234d.png",width:600,height:315}],src:"/_next/static/images/metame-600-82397d196440a72e9238bd3140a8234d.png",toString:function(){return "/_next/static/images/metame-600-82397d196440a72e9238bd3140a8234d.png"},placeholder: undefined,width:600,height:315};

/***/ })

/******/ });
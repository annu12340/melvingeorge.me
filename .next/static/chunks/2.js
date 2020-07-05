(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/Navigation/MobileNavigation.jsx":
/*!****************************************************!*\
  !*** ./components/Navigation/MobileNavigation.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ActiveTab */ "./context/ActiveTab.jsx");


var _this = undefined,
    _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/MobileNavigation.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// MODULES



var Link = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! next/link */ "./node_modules/next/link.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! next/link */ "./node_modules/next/link.js")];
    },
    modules: ["next/link"]
  }
});
var FontAwesomeIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js")));

        case 2:
          return _context.abrupt("return", _context.sent.FontAwesomeIcon);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js")];
    },
    modules: ["@fortawesome/react-fontawesome"]
  }
}); // CONTEXT



var MobileNavigation = function MobileNavigation(_ref) {
  var _ref$isIndex = _ref.isIndex,
      isIndex = _ref$isIndex === void 0 ? false : _ref$isIndex;
  // All tabs
  var tabs = ["Blog", "About"]; // Navigation button state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1]; // Active tab


  var activeTab = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__["ActiveTabContext"]);
  var dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_4__["SetActiveTabContext"]); // Tab click handler

  var tabHandler = function tabHandler(tabName) {
    setMenuOpen(!menuOpen);
    dispatchActiveTab({
      type: tabName
    });
  }; // Active tab style


  var activeTabStyle = "bg-gray-900 opacity-75 rounded shadow-lg px-2";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "".concat(isIndex ? "text-white" : "text-black", "  my-auto cursor-pointer text-lg md:hidden"),
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, menuOpen ? __jsx("a", {
    className: "relative z-50 text-white transition-all duration-300 tracking-wider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "CLOSE", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    width: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })) : __jsx("a", {
    className: "transition-all duration-300 tracking-wider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "MENU", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"],
    width: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }))), menuOpen ? __jsx("nav", {
    className: "absolute flex flex-col items-center justify-center top-0 z-30 left-0 bg-blue-600 h-screen w-screen md:hidden  transition-colors duration-700 ease-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "text-4xl text-center text-gray-100 flex flex-col uppercase mt-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, tabs.length > 0 ? tabs.map(function (tab) {
    return __jsx(Link, {
      href: "/".concat(tab.toLowerCase()),
      key: tab,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "cursor-pointer block mb-12 transition-colors duration-300 hover:text-gray-900 tracking-normal ".concat(tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""),
      onClick: function onClick() {
        return tabHandler(tab.toLowerCase());
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    }, tab)));
  }) : null)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileNavigation);

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ })

}]);
//# sourceMappingURL=2.js.map
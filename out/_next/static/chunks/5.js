(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./components/Navigation/NavigationItems.jsx":
/*!***************************************************!*\
  !*** ./components/Navigation/NavigationItems.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ActiveTab */ "./context/ActiveTab.jsx");
var _this = undefined,
    _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/NavigationItems.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES


var Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! next/link */ "./node_modules/next/link.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! next/link */ "./node_modules/next/link.js")];
    },
    modules: ["next/link"]
  }
}); // CONTEXT



var NavigationItems = function NavigationItems() {
  // All tabs
  var tabs = ["Blog", "Projects", "About"]; // Active tab

  var activeTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__["ActiveTabContext"]);
  var dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__["SetActiveTabContext"]); // Active tab style

  var activeTabStyle = "bg-gray-400 text-blue-900";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tabs.length > 0 ? tabs.map(function (tab) {
    return __jsx("li", {
      className: "inline-block tracking-wider ml-6 first:ml-0",
      key: tab,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx(Link, {
      href: "/".concat(tab.toLowerCase()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "cursor-pointer transition transition-colors duration-300 hover:text-blue-900 hover:bg-gray-400 p-2 rounded-sm ".concat(tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""),
      href: "",
      onClick: function onClick() {
        return dispatchActiveTab({
          type: tab.toLowerCase()
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, tab)));
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationItems);

/***/ })

}]);
//# sourceMappingURL=5.js.map
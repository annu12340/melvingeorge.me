exports.ids = [2];
exports.modules = {

/***/ "./components/Navigation/NavigationItems.jsx":
/*!***************************************************!*\
  !*** ./components/Navigation/NavigationItems.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ActiveTab */ "./context/ActiveTab.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/NavigationItems.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES


const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! next/link */ "./node_modules/next/link.js", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! next/link */ "./node_modules/next/link.js")],
    modules: ["next/link"]
  }
}); // CONTEXT



const NavigationItems = () => {
  // All tabs
  const tabs = ["Blog", "About"]; // Active tab

  const activeTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__["ActiveTabContext"]);
  const dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__["SetActiveTabContext"]); // Active tab style

  const activeTabStyle = "bg-blue-200 text-black-900";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tabs.length > 0 ? tabs.map(tab => __jsx("li", {
    className: "tracking-wider ml-6 first:ml-0 inline-block",
    key: tab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(Link, {
    href: `/${tab.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: `cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:bg-blue-200 p-2 rounded-sm ${tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""}`,
    href: "",
    onClick: () => dispatchActiveTab({
      type: tab.toLowerCase()
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, tab)))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationItems);

/***/ })

};;
//# sourceMappingURL=2.js.map
exports.ids = [12];
exports.modules = {

/***/ "CQE5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cdkR");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES


const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "YFqc", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("YFqc")],
    modules: ["next/link"]
  }
}); // CONTEXT



const NavigationItems = () => {
  // All tabs
  const tabs = ["Blog", "About"]; // Active tab

  const activeTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__[/* ActiveTabContext */ "a"]);
  const dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_2__[/* SetActiveTabContext */ "c"]); // Active tab style

  const activeTabStyle = "bg-blue-200 text-black-900";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tabs.length > 0 ? tabs.map(tab => __jsx("li", {
    className: "tracking-wider ml-6 first:ml-0 inline-block",
    key: tab
  }, __jsx(Link, {
    href: `/${tab.toLowerCase()}`
  }, __jsx("a", {
    className: `cursor-pointer transition-colors duration-300 hover:text-blue-600 hover:bg-blue-200 p-2 rounded-sm ${tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""}`,
    href: "",
    onClick: () => dispatchActiveTab({
      type: tab.toLowerCase()
    })
  }, tab)))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationItems);

/***/ })

};;
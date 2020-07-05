exports.ids = [11];
exports.modules = {

/***/ "KV6L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cdkR");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES



const Link = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "YFqc", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("YFqc")],
    modules: ["next/link"]
  }
});
const FontAwesomeIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "uhWA", 7))).FontAwesomeIcon, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("uhWA")],
    modules: ["@fortawesome/react-fontawesome"]
  }
}); // CONTEXT



const MobileNavigation = ({
  isIndex = false
}) => {
  // All tabs
  const tabs = ["Blog", "About"]; // Navigation button state

  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Active tab

  const activeTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__[/* ActiveTabContext */ "a"]);
  const dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__[/* SetActiveTabContext */ "c"]); // Tab click handler

  const tabHandler = tabName => {
    setMenuOpen(!menuOpen);
    dispatchActiveTab({
      type: tabName
    });
  }; // Active tab style


  const activeTabStyle = "bg-gray-900 opacity-75 rounded shadow-lg px-2";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${isIndex ? "text-white" : "text-black"}  my-auto cursor-pointer text-lg md:hidden`,
    onClick: () => setMenuOpen(!menuOpen)
  }, menuOpen ? __jsx("a", {
    className: "relative z-50 text-white transition-all duration-300 tracking-wider"
  }, "CLOSE", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
    width: "0"
  })) : __jsx("a", {
    className: "transition-all duration-300 tracking-wider"
  }, "MENU", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"],
    width: "0"
  }))), menuOpen ? __jsx("nav", {
    className: "absolute flex flex-col items-center justify-center top-0 z-30 left-0 bg-blue-600 h-screen w-screen md:hidden  transition-colors duration-700 ease-in"
  }, __jsx("ul", {
    className: "text-4xl text-center text-gray-100 flex flex-col uppercase mt-10"
  }, tabs.length > 0 ? tabs.map(tab => __jsx(Link, {
    href: `/${tab.toLowerCase()}`,
    key: tab
  }, __jsx("a", {
    className: `cursor-pointer block mb-12 transition-colors duration-300 hover:text-gray-900 tracking-normal ${tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""}`,
    onClick: () => tabHandler(tab.toLowerCase())
  }, __jsx("li", null, tab)))) : null)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileNavigation);

/***/ })

};;
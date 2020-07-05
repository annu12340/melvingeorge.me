exports.ids = [1];
exports.modules = {

/***/ "./components/Navigation/MobileNavigation.jsx":
/*!****************************************************!*\
  !*** ./components/Navigation/MobileNavigation.jsx ***!
  \****************************************************/
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
/* harmony import */ var _context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ActiveTab */ "./context/ActiveTab.jsx");
var _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/Navigation/MobileNavigation.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES



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

  const activeTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__["ActiveTabContext"]);
  const dispatchActiveTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ActiveTab__WEBPACK_IMPORTED_MODULE_3__["SetActiveTabContext"]); // Tab click handler

  const tabHandler = tabName => {
    setMenuOpen(!menuOpen);
    dispatchActiveTab({
      type: tabName
    });
  }; // Active tab style


  const activeTabStyle = "bg-gray-900 opacity-75 rounded shadow-lg px-2";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${isIndex ? "text-white" : "text-black"}  my-auto cursor-pointer text-lg md:hidden`,
    onClick: () => setMenuOpen(!menuOpen),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, menuOpen ? __jsx("a", {
    className: "relative z-50 text-white transition-all duration-300 tracking-wider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "CLOSE", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
    width: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })) : __jsx("a", {
    className: "transition-all duration-300 tracking-wider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "MENU", __jsx(FontAwesomeIcon, {
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"],
    width: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }))), menuOpen ? __jsx("nav", {
    className: "absolute flex flex-col items-center justify-center top-0 z-30 left-0 bg-blue-600 h-screen w-screen md:hidden  transition-colors duration-700 ease-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "text-4xl text-center text-gray-100 flex flex-col uppercase mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, tabs.length > 0 ? tabs.map(tab => __jsx(Link, {
    href: `/${tab.toLowerCase()}`,
    key: tab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: `cursor-pointer block mb-12 transition-colors duration-300 hover:text-gray-900 tracking-normal ${tab.toLowerCase() === activeTab.tab ? activeTabStyle : ""}`,
    onClick: () => tabHandler(tab.toLowerCase()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, tab)))) : null)) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileNavigation);

/***/ })

};;
//# sourceMappingURL=1.js.map
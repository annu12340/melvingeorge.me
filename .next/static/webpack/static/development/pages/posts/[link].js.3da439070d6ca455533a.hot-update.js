webpackHotUpdate("static/development/pages/posts/[link].js",{

/***/ "./components/BlogRenderer.jsx":
/*!*************************************!*\
  !*** ./components/BlogRenderer.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_BlogNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation/BlogNavigation */ "./components/Navigation/BlogNavigation.jsx");
/* harmony import */ var _Utils_ImageLoaderUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils/ImageLoaderUtil */ "./components/Utils/ImageLoaderUtil.jsx");
/* harmony import */ var _Utils_CodeBlockUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils/CodeBlockUtil */ "./components/Utils/CodeBlockUtil.jsx");
var _this = undefined,
    _jsxFileName = "/Users/melvingeorge/PROJECTS/ongoing/myBlog/myBlogBackend/components/BlogRenderer.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// MODULES

 // COMPONENTS





var BlogRenderer = function BlogRenderer(_ref) {
  var metadeta = _ref.metadeta,
      content = _ref.content;
  var metaImageUrl;
  var metaURl;

  if (true) {
    metaURl = "".concat(window.location.origin);
    metaImageUrl = "".concat(window.location.origin).concat(__webpack_require__("./content/assets sync recursive ^\\.\\/.*\\/main\\.jpg$")("./".concat(metadeta.link, "/main.jpg")));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: metadeta.title,
    description: metadeta.description,
    additionalMetaTags: [{
      name: "keywords",
      content: metadeta.keywords
    }],
    openGraph: {
      url: "".concat(metaURl, "/posts/").concat(metadeta.link),
      title: metadeta.title,
      description: metadeta.description,
      type: "article",
      images: [{
        url: metaImageUrl,
        alt: "Image of ".concat(metadeta.link, " By MELVIN GEORGE")
      }],
      site_name: "MELVIN GEORGE Blog"
    },
    twitter: {
      handle: "@melvin2016_",
      site: "@melvin2016_",
      cardType: "summary_large_image"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["BlogJsonLd"], {
    url: "".concat(metaURl, "/posts/").concat(metadeta.link),
    title: metadeta.title,
    images: [metaImageUrl],
    datePublished: new Date(metadeta.date).toISOString(),
    dateModified: new Date(metadeta.date).toISOString(),
    authorName: "MELVIN GEORGE",
    description: metadeta.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_Navigation_BlogNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "relative container max-w-screen-md mx-auto px-4 py-10 bg-gray-100 h-auto min-h-screen rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
    escapeHtml: false,
    source: content,
    renderers: {
      image: _Utils_ImageLoaderUtil__WEBPACK_IMPORTED_MODULE_4__["default"].bind(null, metadeta.link),
      code: _Utils_CodeBlockUtil__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    className: "blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogRenderer);

/***/ })

})
//# sourceMappingURL=[link].js.3da439070d6ca455533a.hot-update.js.map
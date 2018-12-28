webpackHotUpdate(7,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss__ = __webpack_require__("./node_modules/react-jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss__ = __webpack_require__("./node_modules/jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image__ = __webpack_require__("./node_modules/react-progressive-image/dist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image__);
var _jsxFileName = "/Users/sean.miller/workspace/miller_painting/pages/index.js";






var styles = {
  blurb: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    color: 'white'
  }
};

var IndexPage = function IndexPage(_ref) {
  var classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Miller Painting - Palm Springs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default.a, {
    src: "static/red-house-landscape.jpg",
    placeholder: "static/red-house-landscape-loading.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, function (src, loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      style: {
        transition: 'filter 1s',
        width: '100%',
        filter: loading ? 'blur(5px)' : 'none'
      },
      src: src,
      alt: "my image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.blurb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Painting, sanding, and wallpaper services for the Coachella Valley")));
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3_react_jss___default()(styles)(IndexPage));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.42fb1a2da059c20c3a7f.hot-update.js.map
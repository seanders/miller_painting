webpackHotUpdate(5,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss_compose__ = __webpack_require__("./node_modules/jss-compose/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jss_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image__ = __webpack_require__("./node_modules/react-progressive-image/dist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image__);
var _jsxFileName = "/Users/sean/workspace/miller_painting/pages/index.js";






__WEBPACK_IMPORTED_MODULE_3_react_jss___default.a.use(__WEBPACK_IMPORTED_MODULE_4_jss_compose___default()());
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
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Miller Painting - Palm Springs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default.a, {
    src: "static/red-house-landscape.jpg",
    placeholder: "static/red-house-landscape-loading.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
        lineNumber: 27
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.blurb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
//# sourceMappingURL=5.87a00e78e52a87e51df6.hot-update.js.map
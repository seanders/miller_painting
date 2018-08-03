module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_jss__);


var styles = {
  headerContainer: {
    width: '100%',
    position: 'absolute',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
    color: 'white',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10
  },
  rightSideContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexBasis: '40%'
  },
  leftSideContent: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  headerText: {
    margin: 0
  },
  headerAnchor: {
    textDecoration: 'none',
    color: 'white',
    padding: '16px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(200, 200, 100, 0.64)',
      transition: 'background-color 0.3s'
    }
  },
  phoneNumber: {
    display: 'flex',
    alignItems: 'center'
  }
};

var Header = function Header(_ref) {
  var classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.headerContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.leftSideContent
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    className: classes.headerAnchor
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.headerText
  }, "Miller Painting")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: classes.phoneNumber
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "760-668-7808"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.rightSideContent
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/services",
    className: classes.headerAnchor
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.headerText
  }, "Services")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/about",
    className: classes.headerAnchor
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.aboutUs
  }, "About Us"))));
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react_jss___default()(styles)(Header));

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image__);






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
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Miller Painting - Palm Springs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default.a, {
    src: "static/red-house-landscape.jpg",
    placeholder: "static/red-house-landscape-loading.jpg"
  }, function (src, loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      style: {
        transition: 'filter 1s',
        width: '100%',
        filter: loading ? 'blur(5px)' : 'none'
      },
      src: src,
      alt: "my image"
    });
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.blurb
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "Painting, sanding, and wallpaper services for the Coachella Valley")));
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_3_react_jss___default()(styles)(IndexPage));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-progressive-image");

/***/ })
/******/ ]);
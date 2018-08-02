webpackHotUpdate(5,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss__ = __webpack_require__("./node_modules/react-jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_jss__);
var _jsxFileName = "/Users/sean/workspace/miller_painting/components/Header.js";


var styles = {
  headerContainer: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    top: 0,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightSideContent: {
    display: 'flex',
    flexBasis: '40%,'
  },
  headerText: {
    margin: 0
  }
};

var Header = function Header(_ref) {
  var classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.headerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: classes.headerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Miller Painting"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.rightSideContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: classes.headerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: classes.headerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "About Us")));
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react_jss___default()(styles)(Header));

/***/ }),

/***/ "./node_modules/react-jss/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theming = __webpack_require__("./node_modules/theming/dist/esm/index.js");

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _theming.ThemeProvider;
  }
});
Object.defineProperty(exports, 'withTheme', {
  enumerable: true,
  get: function get() {
    return _theming.withTheme;
  }
});
Object.defineProperty(exports, 'createTheming', {
  enumerable: true,
  get: function get() {
    return _theming.createTheming;
  }
});

var _JssProvider = __webpack_require__("./node_modules/react-jss/lib/JssProvider.js");

Object.defineProperty(exports, 'JssProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_JssProvider)['default'];
  }
});

var _jss = __webpack_require__("./node_modules/react-jss/lib/jss.js");

Object.defineProperty(exports, 'jss', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_jss)['default'];
  }
});
Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _jss.SheetsRegistry;
  }
});
Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _jss.createGenerateClassNameDefault;
  }
});

var _injectSheet = __webpack_require__("./node_modules/react-jss/lib/injectSheet.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_injectSheet)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ })

})
//# sourceMappingURL=5.91f4cb0c174beefe6fc8.hot-update.js.map
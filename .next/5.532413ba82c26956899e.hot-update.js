webpackHotUpdate(5,{

/***/ "./node_modules/react-progressive-image/dist.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressiveImage = function (_React$Component) {
  _inherits(ProgressiveImage, _React$Component);

  function ProgressiveImage(props) {
    _classCallCheck(this, ProgressiveImage);

    var _this = _possibleConstructorReturn(this, (ProgressiveImage.__proto__ || Object.getPrototypeOf(ProgressiveImage)).call(this, props));

    _this.loadImage = function (src) {
      // If there is already an image we nullify the onload
      // and onerror props so it does not incorrectly set state
      // when it resolves
      if (_this.image) {
        _this.image.onload = null;
        _this.image.onerror = null;
      }
      var image = new Image();
      _this.image = image;
      image.onload = _this.onLoad;
      image.onerror = _this.onError;
      image.src = src;
    };

    _this.onLoad = function () {
      // use this.image.src instead of this.props.src to
      // avoid the possibility of props being updated and the
      // new image loading before the new props are available as
      // this.props.
      _this.setState({
        image: _this.image.src,
        loading: false
      });
    };

    _this.onError = function (errorEvent) {
      var onError = _this.props.onError;

      if (onError) {
        onError(errorEvent);
      }
    };

    _this.state = {
      image: props.placeholder,
      loading: true
    };
    return _this;
  }

  _createClass(ProgressiveImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var src = this.props.src;

      this.loadImage(src);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var src = nextProps.src,
          placeholder = nextProps.placeholder;
      // We only invalidate the current image if the src has changed.

      if (src !== this.props.src) {
        this.setState({ image: placeholder, loading: true }, function () {
          _this2.loadImage(src);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          image = _state.image,
          loading = _state.loading;
      var children = this.props.children;

      if (!children || typeof children !== "function") {
        throw new Error("ProgressiveImage requires a function as its only child");
      }
      return children(image, loading);
    }
  }]);

  return ProgressiveImage;
}(React.Component);

exports.default = ProgressiveImage;


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_jss__ = __webpack_require__("./node_modules/react-jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image__ = __webpack_require__("./node_modules/react-progressive-image/dist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image__);
var _jsxFileName = "/Users/sean/workspace/miller_painting/pages/index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-523879908"
  }, "Miller Painting - Palm Springs"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Merriweather",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-523879908"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "523879908",
    css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcyQixBQUdzQixTQUNYIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZWFuL3dvcmtzcGFjZS9taWxsZXJfcGFpbnRpbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgSnNzUHJvdmlkZXIsIFNoZWV0c1JlZ2lzdHJ5IH0gZnJvbSAncmVhY3QtanNzJ1xuaW1wb3J0IFByb2dyZXNzaXZlSW1hZ2UgZnJvbSAncmVhY3QtcHJvZ3Jlc3NpdmUtaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NaWxsZXIgUGFpbnRpbmcgLSBQYWxtIFNwcmluZ3M8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlclwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UHJvZ3Jlc3NpdmVJbWFnZSBzcmM9XCJzdGF0aWMvcmVkLWhvdXNlLWxhbmRzY2FwZS5qcGdcIiBwbGFjZWhvbGRlcj1cInN0YXRpYy9yZWQtaG91c2UtbGFuZHNjYXBlLWxvYWRpbmcuanBnXCI+XG4gICAgICAgIHtzcmMgPT4gPGltZyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHNyYz17c3JjfSBhbHQ9XCJteSBpbWFnZVwiIC8+fVxuICAgICAgPC9Qcm9ncmVzc2l2ZUltYWdlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_progressive_image___default.a, {
    src: "static/red-house-landscape.jpg",
    placeholder: "static/red-house-landscape-loading.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, function (src) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      style: {
        width: '100%'
      },
      src: src,
      alt: "my image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    });
  }));
});
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
//# sourceMappingURL=5.532413ba82c26956899e.hot-update.js.map
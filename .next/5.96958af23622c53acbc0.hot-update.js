webpackHotUpdate(5,{

/***/ "./components/PageContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss__ = __webpack_require__("./node_modules/react-jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_jss__);
var _jsxFileName = "/Users/sean.miller/workspace/miller_painting/components/PageContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var styles = {
  textContainer: {
    margin: 'auto',
    marginTop: 100,
    maxWidth: 900,
    display: 'flex'
  }
};
var PageContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(PageContainer, _Component);

  function PageContainer() {
    _classCallCheck(this, PageContainer);

    return _possibleConstructorReturn(this, (PageContainer.__proto__ || Object.getPrototypeOf(PageContainer)).apply(this, arguments));
  }

  _createClass(PageContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.textContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, children);
    }
  }]);

  return PageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_react_jss___default()(styles)(PageContainer));

/***/ })

})
//# sourceMappingURL=5.96958af23622c53acbc0.hot-update.js.map
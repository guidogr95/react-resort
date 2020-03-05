webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ChatScreenDisplay.js":
/*!*****************************************!*\
  !*** ./components/ChatScreenDisplay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatScreenDisplay; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UsernameForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsernameForm */ "./components/UsernameForm.js");
/* harmony import */ var _ChatWidgetHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatWidgetHeader */ "./components/ChatWidgetHeader.js");
/* harmony import */ var _ChatScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChatScreen */ "./components/ChatScreen.js");







var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatScreenDisplay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var ChatScreenDisplay = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatScreenDisplay, _Component);

  function ChatScreenDisplay(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChatScreenDisplay);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatScreenDisplay).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChat", function () {
      if (_this.props.currentScreen === 'WhatIsYourUsernameScreen') {
        return __jsx(_UsernameForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onSubmit: _this.props.onSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      } else if (_this.props.currentScreen === 'ChatScreen') {
        return __jsx(_ChatScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
          currentUsername: _this.props.currentUsername,
          userId: _this.props.userId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatScreenDisplay, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "chat-screen-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(_ChatWidgetHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), this.handleChat());
    }
  }]);

  return ChatScreenDisplay;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.92ca31859bef23fc8b39.hot-update.js.map
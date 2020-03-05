webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ChatComponent.js":
/*!*************************************!*\
  !*** ./components/ChatComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UsernameForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UsernameForm */ "./components/UsernameForm.js");
/* harmony import */ var _ChatScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChatScreen */ "./components/ChatScreen.js");
/* harmony import */ var _ChatScreenDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatScreenDisplay */ "./components/ChatScreenDisplay.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");








var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var ChatComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatComponent, _Component);

  function ChatComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatComponent).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (username) {
      axios__WEBPACK_IMPORTED_MODULE_12___default()({
        url: 'http://localhost:3001/users',
        method: 'POST',
        data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          username: username
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log(res.data.userId);
        console.log('success');

        _this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen',
          userId: res.data.userId
        });
      })["catch"](function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChat", function () {
      if (_this.state.currentScreen === 'WhatIsYourUsernameScreen') {
        return __jsx(_UsernameForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onSubmit: _this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      } else if (_this.state.currentScreen === 'ChatScreen') {
        return __jsx(_ChatScreen__WEBPACK_IMPORTED_MODULE_10__["default"], {
          currentUsername: _this.state.currentUsername,
          userId: _this.state.userId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
      }
    });

    _this.state = {
      currentScreen: 'WhatIsYourUsernameScreen',
      currentUsername: '',
      userId: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatComponent, [{
    key: "render",
    value: function render() {
      if (this.context.authenticated || this.context.authenticated === null) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      } else {
        return (// <div className="chat-component">
          //     {this.handleChat()}
          // </div>
          __jsx("div", {
            className: "chat-component chat-icon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("div", {
            className: "chat-component-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, __jsx(_ChatScreenDisplay__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onSubmit: this.handleSubmit,
            currentScreen: this.state.currentScreen,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }), __jsx("div", {
            className: "chat-icon-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdChat"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }))))
        );
      }
    }
  }]);

  return ChatComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ChatComponent, "contextType", _context__WEBPACK_IMPORTED_MODULE_13__["RoomContext"]);



/***/ })

})
//# sourceMappingURL=_app.js.27da3b2238990991b3a7.hot-update.js.map
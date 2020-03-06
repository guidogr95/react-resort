webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/ChatInstance.js":
/*!************************************!*\
  !*** ./components/ChatInstance.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatInstance; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatInstance.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var ChatInstance = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatInstance, _Component);

  function ChatInstance(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatInstance);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatInstance).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default.a.ChatManager({
        instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
        userId: 'guido',
        tokenProvider: new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default.a.TokenProvider({
          url: 'https://express-login.now.sh/chat/authenticate'
        })
      });
      chatManager.connect().then(function (currentUser) {
        _this.setState({
          currentUser: currentUser
        });

        return currentUser.subscribeToRoom({
          roomId: _this.props.roomInfo.id,
          messageLimit: 100,
          hooks: {
            onMessage: function onMessage(message) {
              _this.setState({
                messages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.messages), [message])
              });

              console.log('message');
              react_scroll__WEBPACK_IMPORTED_MODULE_12__["animateScroll"].scrollToBottom({
                containerId: _this.state.currentRoom.id
              });
            },
            onUserStartedTyping: function onUserStartedTyping(user) {
              _this.setState({
                userTyping: user.name,
                isUserTyping: true
              });
            },
            onUserStoppedTyping: function onUserStoppedTyping(user) {
              _this.setState({
                userTyping: user.name,
                isUserTyping: false
              });
            }
          }
        });
      }).then(function (room) {
        _this.setState({
          currentRoom: room
        });

        react_scroll__WEBPACK_IMPORTED_MODULE_12__["animateScroll"].scrollToBottom({
          containerId: _this.state.currentRoom.id
        });
      })["catch"](function (error) {
        return console.log('Hiiiii', error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sendMessage", function (text) {
      _this.state.currentUser.sendSimpleMessage({
        roomId: _this.state.currentRoom.id,
        text: text
      }).then(function (messageId) {
        return _this.setState({
          text: ''
        });
      })["catch"](function (err) {
        return console.log('error', err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function (event) {
      event.preventDefault();

      _this.sendMessage(_this.state.text);
    });

    _this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      userTyping: '',
      isUserTyping: false,
      text: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatInstance, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('mounted');

      if (this.state.currentRoom.length === 0) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Loading....");
      }

      return __jsx("div", {
        className: this.context.activeWindow === this.state.currentRoom.id ? "chat-instance" : "chat-instance inactive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        className: "chat-messages",
        id: this.state.currentRoom.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.messages.map(function (message, index) {
        return __jsx("li", {
          className: _this2.state.currentUser.id == message.senderId ? "admin-style" : "customer-style",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, __jsx("div", {
          className: "chat-msg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, __jsx("div", {
          className: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, message.senderId[0]), __jsx("div", {
          className: "msg-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, message.senderId), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, message.text))));
      }))), __jsx("div", {
        className: "chat-input-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("input", {
        name: "text",
        type: "text",
        placeholder: "Your text...",
        onChange: this.handleChange,
        value: this.state.text,
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), __jsx("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaPaperPlane"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))))));
    }
  }]);

  return ChatInstance;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ChatInstance, "contextType", _context__WEBPACK_IMPORTED_MODULE_10__["RoomContext"]);



/***/ })

})
//# sourceMappingURL=chat.js.fb30d7d4b82f43b343ad.hot-update.js.map
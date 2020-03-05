webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ChatScreen.js":
/*!**********************************!*\
  !*** ./components/ChatScreen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatScreen; });
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
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MessageList */ "./components/MessageList.js");
/* harmony import */ var _SendMessageForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SendMessageForm */ "./components/SendMessageForm.js");
/* harmony import */ var _TypingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TypingIndicator */ "./components/TypingIndicator.js");








var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatScreen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

 //Components





var ChatScreen = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatScreen, _Component);

  function ChatScreen(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatScreen);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatScreen).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default.a.ChatManager({
        instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
        userId: _this.props.userId,
        tokenProvider: new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default.a.TokenProvider({
          url: 'http://localhost:3001/authenticate'
        })
      });
      chatManager.connect().then(function (currentUser) {
        _this.setState({
          currentUser: currentUser
        });

        console.log(currentUser);
        return currentUser.createRoom({
          id: "".concat(currentUser.id, "-room"),
          name: "".concat(currentUser.id, "-room"),
          "private": true,
          addUserIds: [currentUser.id, 'guido']
        }).then(function (room) {
          _this.setState({
            currentRoom: room
          });

          return currentUser.subscribeToRoom({
            roomId: room.id,
            messageLimit: 100,
            hooks: {
              onMessage: function onMessage(message) {
                console.log(message);

                _this.setState({
                  messages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.messages), [message])
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
          }).then(function () {
            return _this.state.currentUser.subscribeToRoomMultipart({
              roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
              messageLimit: 100,
              hooks: {
                onMessage: function onMessage(message) {
                  console.log(message); // this.updateRooms();
                }
              }
            }).then(function () {
              _this.state.currentUser.sendSimpleMessage({
                roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
                text: 'we'
              }).then(function (messageId) {
                return console.log('sent', messageId);
              })["catch"](function (err) {
                return console.log('error', err);
              });
            });
          });
        })["catch"](function (err) {
          console.log('error', err);
        }); // return currentUser.subscribeToRoom({
        //     roomId: 'eadf4af7-69ff-4a59-9dc1-d4c4adcafde4',
        //     messageLimit: 100,
        //     hooks: {
        //         onMessage: (message) => {
        //             console.log(message)
        //             this.setState({
        //                 messages: [...this.state.messages, message]
        //             })
        //         },
        //         onUserStartedTyping: user => {
        //             this.setState({
        //                 userTyping: user.name,
        //                 isUserTyping: true
        //             })
        //         },
        //         onUserStoppedTyping: user => {
        //             this.setState({
        //                 userTyping: user.name,
        //                 isUserTyping: false
        //             })
        //         }
        //     }
        // })
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sendTypingEvent", function () {
      _this.state.currentUser.isTypingIn({
        roomId: _this.state.currentRoom.id
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      userTyping: '',
      isUserTyping: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatScreen, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "chat-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx(_MessageList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        messages: this.state.messages,
        currentUser: this.state.currentUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), this.state.isUserTyping ? __jsx(_TypingIndicator__WEBPACK_IMPORTED_MODULE_12__["default"], {
        userTyping: this.state.userTyping,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }) : '', __jsx(_SendMessageForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onSubmit: this.sendMessage,
        onChange: this.sendTypingEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }));
    }
  }]);

  return ChatScreen;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.41986f49f000198f46ae.hot-update.js.map
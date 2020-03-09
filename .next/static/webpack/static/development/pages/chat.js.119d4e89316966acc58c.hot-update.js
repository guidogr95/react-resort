webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/ChatList.js":
/*!********************************!*\
  !*** ./components/ChatList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _ChatRoomButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatRoomButton */ "./components/ChatRoomButton.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-scrollbars-custom */ "./node_modules/react-scrollbars-custom/dist/rsc.esm.js");









var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;







var ChatList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ChatList, _Component);

  function ChatList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ChatList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "useForceUpdate", function () {
      _this.setState({
        counter: _this.state.counter + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "switchChat", function (event) {
      _this.context.changeWindow(event.target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addCheckedChat", function (chatRoom) {
      _this.setState({
        checkedChats: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.checkedChats), [chatRoom])
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "removeCheckedChat", function (chatRoom) {
      var filtered = _this.state.checkedChats.filter(function (room) {
        return room.id !== chatRoom.id;
      });

      _this.setState({
        checkedChats: filtered
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteChats", function () {
      _this.state.checkedChats.map(function (chat) {
        try {
          var token = _this.getToken();

          axios__WEBPACK_IMPORTED_MODULE_13___default()({
            url: "https://us1.pusherplatform.io/services/chatkit_scheduler/v1/fe088103-8b4d-4e06-a93c-4d2fb3f963be/users/".concat(chat.createdByUserId),
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(token)
            }
          }).then(function (res) {
            return console.log(res);
          })["catch"](function (err) {
            return console.log(err);
          });
        } catch (err) {
          console.log(err);
        }

        _this.props.currentUser.deleteRoom({
          roomId: chat.id
        }).then(function () {
          console.log("Deleted room with ID: ".concat(chat.id));

          _this.setState({
            checkAll: false
          });
        })["catch"](function (err) {
          console.log("Error deleted room ".concat(chat.id, ": ").concat(err));
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCheckAll", function () {
      var isCheckAll = !_this.state.checkAll;

      _this.setState({
        checkAll: !_this.state.checkAll
      });

      if (isCheckAll) {
        var allRooms = _this.props.currentUser.rooms.filter(function (room) {
          return room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45';
        });

        _this.setState({
          checkedChats: allRooms
        });
      } else {
        _this.setState({
          checkedChats: []
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getToken", function (userId) {
      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_12___default.a.sign({
        instance: 'fe088103-8b4d-4e06-a93c-4d2fb3f963be',
        iss: 'api_keys/d6b63c39-9c58-459d-a34b-a8d39eb6124d',
        sub: userId,
        su: true
      }, 'l8I+uX85fbJCwMZVSrlyE4z2f7ckYbgbirHv5pfhDgE=', {
        expiresIn: '1h'
      });
      return token;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "seeList", function () {
      console.log(_this.props.currentUser.rooms);
    });

    _this.state = {
      activeWindow: '',
      checkedChats: [],
      checkAll: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.currentUser !== this.props.currentUser && this.props.currentUser !== null && this.props.currentUser.rooms.length > 1) {
        var chatWindow = this.props.currentUser.rooms.find(function (room) {
          return room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4';
        });
        this.context.changeWindow(chatWindow.id);
      }

      if (this.state.checkedChats.length === 0 && this.state.checkAll) {
        this.setState({
          checkAll: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentUser = this.props.currentUser;
      return __jsx("div", {
        className: "chat-list-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        name: "checkAll",
        id: "chat-checkbox",
        checked: this.state.checkAll,
        onChange: this.handleCheckAll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "chat-checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Seleccionar todos"), __jsx("button", {
        className: "btn-primary",
        onClick: this.deleteChats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Delete Chats")), __jsx(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("ul", {
        className: "chatrooms-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, currentUser ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.props.currentUser.rooms).map(function (room, index) {
        if (room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45') {
          return __jsx(_ChatRoomButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: index,
            room: room,
            see: _this2.seeList,
            clearAll: _this2.clearAll,
            checkAll: _this2.state.checkAll,
            onClick: _this2.switchChat,
            check: _this2.addCheckedChat,
            uncheck: _this2.removeCheckedChat,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          });
        }
      }) : 'Loading...')));
    }
  }]);

  return ChatList;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(ChatList, "contextType", _context__WEBPACK_IMPORTED_MODULE_10__["RoomContext"]);



/***/ })

})
//# sourceMappingURL=chat.js.119d4e89316966acc58c.hot-update.js.map
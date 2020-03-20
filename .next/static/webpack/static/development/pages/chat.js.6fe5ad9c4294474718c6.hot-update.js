webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/ChatBoard.js":
/*!*********************************!*\
  !*** ./components/ChatBoard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBoard; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ChatInstance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatInstance */ "./components/ChatInstance.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context */ "./context.js");








var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatBoard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var ChatBoard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatBoard, _Component);

  function ChatBoard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ChatBoard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatBoard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ChatBoard, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "chat-header-board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "chat-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("div", {
        className: "deploy-chats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_11__["IoMdChatboxes"], {
        onClick: this.props.setChatListActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.context.currentUser).length > 0 ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.context.currentUser.rooms).find(function (room) {
        return room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45' && room.unreadCount > 0;
      }) ? __jsx("div", {
        className: "pending-msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }) : '' : ''), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("a", {
        className: "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Go Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("a", {
        className: "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Admin Panel"))), __jsx("div", {
        className: "chat-board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.context.currentUser).length > 0 ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.context.currentUser.rooms).map(function (room) {
        if (room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4') {
          return __jsx(_ChatInstance__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: room.id,
            key: room.id,
            roomInfo: room,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });
        }
      }) : 'Loading'));
    }
  }]);

  return ChatBoard;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ChatBoard, "contextType", _context__WEBPACK_IMPORTED_MODULE_12__["RoomContext"]);



/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _ChatRoomButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChatRoomButton */ "./components/ChatRoomButton.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-scrollbars-custom */ "./node_modules/react-scrollbars-custom/dist/rsc.esm.js");










var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







var ChatList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ChatList, _Component);

  function ChatList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ChatList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "useForceUpdate", function () {
      _this.setState({
        counter: _this.state.counter + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "switchChat", function (id) {
      _this.context.changeWindow(id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "addCheckedChat", function (chatRoom) {
      _this.setState({
        checkedChats: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.checkedChats), [chatRoom])
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "removeCheckedChat", function (chatRoom) {
      var filtered = _this.state.checkedChats.filter(function (room) {
        return room.id !== chatRoom.id;
      });

      _this.setState({
        checkedChats: filtered
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "deleteChats", function () {
      var length = _this.state.checkedChats.length;
      var loop = 0;

      _this.state.checkedChats.map(function (chat) {
        try {
          var token = _this.getToken();

          axios__WEBPACK_IMPORTED_MODULE_14___default()({
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

        _this.context.currentUser.deleteRoom({
          roomId: chat.id
        }).then(function () {
          console.log("Deleted room with ID: ".concat(chat.id));

          _this.setState({
            checkAll: false
          });

          loop += 1;

          if (loop === length) {
            _this.setState({
              checkedChats: []
            });
          }
        })["catch"](function (err) {
          console.log("Error deleted room ".concat(chat.id, ": ").concat(err));
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleCheckAll", function () {
      var isCheckAll = !_this.state.checkAll;

      _this.setState({
        checkAll: !_this.state.checkAll
      });

      if (isCheckAll) {
        var allRooms = _this.context.currentUser.rooms.filter(function (room) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getToken", function (userId) {
      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_13___default.a.sign({
        instance: 'fe088103-8b4d-4e06-a93c-4d2fb3f963be',
        iss: 'api_keys/d6b63c39-9c58-459d-a34b-a8d39eb6124d',
        sub: userId,
        su: true
      }, 'l8I+uX85fbJCwMZVSrlyE4z2f7ckYbgbirHv5pfhDgE=', {
        expiresIn: '1h'
      });
      return token;
    });

    _this.state = {
      activeWindow: '',
      checkedChats: [],
      checkAll: false,
      loaded: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.context.currentUser).length > 0 && !this.state.loaded) {
        var chatWindow = this.context.currentUser.rooms.reverse().find(function (room) {
          return room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45';
        });

        if (!chatWindow) {} else {
          this.context.changeWindow(chatWindow.id);
        }

        this.setState({
          loaded: true
        });
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

      var currentUser = this.context.currentUser;
      return __jsx("div", {
        className: !this.props.active ? "chat-list-container" : "chat-list-container active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("div", {
        className: "chat-list-settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
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
          lineNumber: 112
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "chat-checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), __jsx("button", {
        className: "btn-primary",
        onClick: this.deleteChats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Delete")), __jsx(react_scrollbars_custom__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "chatlist-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("ul", {
        className: "chatrooms-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(currentUser).length > 0 ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(currentUser.rooms).reverse().map(function (room) {
        if (room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45') {
          return __jsx(_ChatRoomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: room.id,
            room: room,
            checkAll: _this2.state.checkAll,
            onClick: _this2.switchChat,
            check: _this2.addCheckedChat,
            uncheck: _this2.removeCheckedChat,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          });
        }
      }) : 'Loading...')));
    }
  }]);

  return ChatList;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(ChatList, "contextType", _context__WEBPACK_IMPORTED_MODULE_11__["RoomContext"]);



/***/ }),

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chat; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_chat_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/chat.jpg */ "./images/chat.jpg");
/* harmony import */ var _images_chat_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_chat_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/gif/loading-arrow.gif */ "./images/gif/loading-arrow.gif");
/* harmony import */ var _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ChatList */ "./components/ChatList.js");
/* harmony import */ var _components_ChatBoard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ChatBoard */ "./components/ChatBoard.js");










var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/pages/chat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









function chat() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_10__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_14__["RoomContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      btnDisabled = _useState2[0],
      setbtnDisabled = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      currentUser = _useState4[0],
      setCurrentUser = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      currentRoom = _useState5[0],
      setCurrentRoom = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      chatListActive = _useState6[0],
      setchatListActive = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(0),
      value = _useState7[0],
      setValue = _useState7[1];

  var style = {
    minHeight: 600,
    width: "100%",
    height: "calc(100vh - 65px)",
    background: "rgba(175, 154, 125,0.5)"
  };

  var handleChange = function handleChange(event) {
    return setInput(_objectSpread({}, input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value)));
  };

  var useForceUpdate = function useForceUpdate() {
    setValue(Math.random);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    context.updateCredentials(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (context.authenticated && context.authenticated !== null) {
      handleChatSession();
    } else {}
  }, [context.authenticated]);

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setbtnDisabled(true);
            axios__WEBPACK_IMPORTED_MODULE_13___default()({
              url: 'https://express-login.now.sh/api/users/login',
              method: 'POST',
              data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()({
                email: input.email,
                password: input.password
              }),
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            }).then(function (res) {
              setbtnDisabled(false);
              context.updateCredentials(false, res.data.userId, res.data.email, res.data.token);
            })["catch"](function (err) {
              setErrors(_objectSpread({}, errors, {
                error: "No se pudo conectar. Revise sus credenciales"
              }));
              setbtnDisabled(false);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var setChatListActive = function setChatListActive() {
    setchatListActive(!chatListActive);
  };

  var handleChatSession = function handleChatSession() {
    var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_15___default.a.ChatManager({
      instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
      userId: context.chatUserId,
      tokenProvider: new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_15___default.a.TokenProvider({
        url: 'https://express-login.now.sh/chat/authenticate'
      })
    });
    chatManager.connect({
      onAddedToRoom: function onAddedToRoom() {
        useForceUpdate();
      },
      onRoomDeleted: function onRoomDeleted() {
        useForceUpdate();
      },
      onNewReadCursor: function onNewReadCursor() {
        useForceUpdate();
      },
      onRoomUpdated: function onRoomUpdated() {
        useForceUpdate();
      }
    }).then(function (currentUser) {
      console.log('updated');
      context.setCurrentUser(currentUser);
      return currentUser.subscribeToRoom({
        roomId: '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45',
        messageLimit: 100,
        hooks: {
          onPresenceChanged: function onPresenceChanged(state, user) {// console.log(`User ${user.name} is ${state.current}`)
          }
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    })["catch"](function (error) {
      return console.log('Hiiiii', error);
    });
  };

  var renderForm = function renderForm() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("h3", {
      className: "welcome",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Welcome"), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(errors).map(function (err, index) {
      return __jsx("div", {
        key: index,
        className: "login-err",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, err);
    }), __jsx("form", {
      className: "login-form",
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      id: "email",
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Password"), __jsx("input", {
      type: "password",
      name: "password",
      id: "password",
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), __jsx("button", {
      disabled: btnDisabled,
      className: btnDisabled ? "btn-primary submit-btn disabled" : "btn-primary submit-btn",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, btnDisabled ? __jsx("img", {
      className: "loading-login",
      src: _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "loading spinner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }) : "Enviar")));
  };

  var renderLoggedin = function renderLoggedin() {
    return __jsx("div", {
      className: "signed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: "chat-window",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx(_components_ChatList__WEBPACK_IMPORTED_MODULE_16__["default"], {
      active: chatListActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), __jsx(_components_ChatBoard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      setChatListActive: setChatListActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })));
  };

  if (context.authenticated === null) {
    return __jsx("div", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("div", {
      className: "log-box loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("img", {
      className: "loading-spinner",
      src: _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })));
  }

  return __jsx("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    className: "log-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, context.authenticated ? renderLoggedin() : renderForm()));
}

/***/ })

})
//# sourceMappingURL=chat.js.6fe5ad9c4294474718c6.hot-update.js.map
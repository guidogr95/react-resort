webpackHotUpdate("static/development/pages/rooms.js",{

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/*! exports provided: withRoomConsumer, RoomProvider, RoomConsumer, RoomContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRoomConsumer", function() { return withRoomConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomProvider", function() { return RoomProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomConsumer", function() { return RoomConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomContext", function() { return RoomContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data */ "./data.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
















var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_1___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

/* eslint-disable no-unused-vars */



var RoomContext = react__WEBPACK_IMPORTED_MODULE_16___default.a.createContext(); // 

var RoomProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__["default"])(RoomProvider, _Component);

  function RoomProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(this, RoomProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(RoomProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "state", {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      roomtype: 'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      PUBLICTOKEN: 'f3341f2f85860e06446a5e86bfd392'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "formatData", function (items) {
      var tempItems = items.map(function (item) {
        var id = item.id;
        var images = item.images.map(function (image) {
          return image.url;
        });

        var room = _objectSpread({}, item, {
          images: images,
          id: id
        });

        return room;
      });
      return tempItems;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "getRoom", function (slug) {
      var tempRooms = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.state.rooms);

      var room = tempRooms.find(function (room) {
        return room.slug === slug;
      });
      return room;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handleChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = event.target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])({}, name, value), _this.filterRooms); //callback function ^

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "filterRooms", function () {
      var _this$state = _this.state,
          rooms = _this$state.rooms,
          roomtype = _this$state.roomtype,
          capacity = _this$state.capacity,
          price = _this$state.price,
          minSize = _this$state.minSize,
          maxSize = _this$state.maxSize,
          breakfast = _this$state.breakfast,
          pets = _this$state.pets; //all the rooms

      var tempRooms = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(rooms); //transform value


      capacity = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(capacity);
      price = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(price); //filter by type

      if (roomtype !== 'all') {
        console.log('notal');
        tempRooms = tempRooms.filter(function (room) {
          return room.roomtype === type;
        });
      } //filter by capacity


      if (capacity !== 1) {
        tempRooms = tempRooms.filter(function (room) {
          return room.capacity >= capacity;
        });
      } //filter by price


      tempRooms = tempRooms.filter(function (room) {
        return room.price <= price;
      }); //filter extras

      if (breakfast) {
        tempRooms = tempRooms.filter(function (room) {
          return room.breakfast === true;
        });
      }

      if (pets) {
        tempRooms = tempRooms.filter(function (room) {
          return room.pets === true;
        });
      }

      _this.setState({
        sortedRooms: tempRooms
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["default"])(RoomProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_18___default()({
        url: 'https://graphql.datocms.com/',
        method: 'post',
        data: {
          query: "{\n                allRooms {\n                    id\n                    name\n                    slug\n                    price\n                    roomtype\n                    size\n                    capacity\n                    breakfast\n                    pets\n                    featured\n                    description\n                    extras\n                    images {\n                      url\n                    }\n                  }\n                }"
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': "Bearer ".concat(this.state.PUBLICTOKEN)
        }
      }).then(function (response) {
        // handle success
        var rooms = self.formatData(response.data.data.allRooms);
        var featuredRooms = rooms.filter(function (room) {
          return room.featured === true;
        });
        var maxPrice = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(rooms.map(function (item) {
          return item.price;
        })));
        var maxSize = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(rooms.map(function (item) {
          return item.size;
        })));
        self.setState({
          rooms: rooms,
          featuredRooms: featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice: maxPrice,
          maxSize: maxSize
        });
        return rooms;
      })["catch"](function (error) {
        console.log(error);
      }); // let rooms = this.formatData(items);
      // let featuredRooms = rooms.filter(room => room.featured === true);
      // let maxPrice = Math.max(...rooms.map(item => item.price));
      // let maxSize = Math.max(...rooms.map(item => item.size));
      // this.setState({
      //     rooms,
      //     featuredRooms,
      //     sortedRooms: rooms,
      //     loading: false,
      //     price: maxPrice,
      //     maxPrice,
      //     maxSize
      // })
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(RoomContext.Provider, {
        value: _objectSpread({}, this.state, {
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return RoomProvider;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);

var RoomConsumer = RoomContext.Consumer;
function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return __jsx(RoomConsumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, function (value) {
      return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        context: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }));
    });
  };
}


/***/ })

})
//# sourceMappingURL=rooms.js.8b169e86ba5689f0b4db.hot-update.js.map
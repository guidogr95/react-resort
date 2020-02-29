webpackHotUpdate("static/development/pages/room/[name].js",{

/***/ "./pages/room/[name].js":
/*!******************************!*\
  !*** ./pages/room/[name].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Banner */ "./components/Banner.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context */ "./context.js");
/* harmony import */ var _components_StyledHero__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/StyledHero */ "./components/StyledHero.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/pages/room/[name].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


 //Components
// import defaultBcg from '../images/room-1.jpeg'

 //Context



 //SEO



var room = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(room, _Component);

  function room(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, room);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(room).call(this, props));
    _this.state = {
      slug: _this.props.query.name,
      room: _this.props.room
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(room, [{
    key: "render",
    value: function render() {
      if (!room) {
        return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      }

      var _this$state$room = this.state.room,
          name = _this$state$room.name,
          description = _this$state$room.description,
          capacity = _this$state$room.capacity,
          size = _this$state$room.size,
          price = _this$state$room.price,
          extras = _this$state$room.extras,
          breakfast = _this$state$room.breakfast,
          pets = _this$state$room.pets,
          images = _this$state$room.images;
      var roomimages = images.map(function (image) {
        return image.url;
      });

      var _roomimages = Object(_babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(roomimages),
          mainImg = _roomimages[0],
          defaultImg = _roomimages.slice(1);

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, name), __jsx("meta", {
        name: "title",
        content: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("meta", {
        name: "description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("meta", {
        property: "og:description",
        content: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image",
        content: mainImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("meta", {
        property: "og:title",
        content: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx(_components_StyledHero__WEBPACK_IMPORTED_MODULE_14__["default"], {
        img: mainImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "".concat(name, " room"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/rooms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("a", {
        className: "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "back to rooms")))), __jsx("section", {
        className: "single-room",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "single-room-images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, defaultImg.map(function (item, index) {
        return __jsx("img", {
          key: index,
          src: item,
          alt: name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      })), __jsx("div", {
        className: "single-room-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("article", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Details"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, description)), __jsx("article", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Info"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "price: $", price), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "size: $", size, " sqm"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "max capacity: ", capacity, " pax"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, pets ? "pets allows" : "no pets allowed"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, breakfast && "free breakfast included")))), __jsx("section", {
        className: "room-extras",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "extras"), __jsx("ul", {
        className: "extras",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, extras.map(function (item, index) {
        return __jsx("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "- ", item);
      }))));
    }
  }]);

  return room;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(room, "getInitialProps", function _callee(_ref) {
  var query, res, data, roomData, room;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://graphql.datocms.com/', {
            method: "POST",
            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
              query: "{ allRooms {\n                    id\n                    name\n                    slug\n                    price\n                    roomtype\n                    size\n                    capacity\n                    breakfast\n                    pets\n                    featured\n                    description\n                    extras\n                    images {\n                      url\n                    }\n                  } }"
            }),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer f3341f2f85860e06446a5e86bfd392'
            }
          }));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          roomData = data.data.allRooms;
          room = roomData.find(function (room) {
            return room.slug === query.name;
          });
          return _context.abrupt("return", {
            query: query,
            room: room
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(room, "contextType", _context__WEBPACK_IMPORTED_MODULE_13__["RoomContext"]);

/* harmony default export */ __webpack_exports__["default"] = (room);

/***/ })

})
//# sourceMappingURL=[name].js.de5cdd3a80e705564221.hot-update.js.map
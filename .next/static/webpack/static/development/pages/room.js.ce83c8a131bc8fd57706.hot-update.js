webpackHotUpdate("static/development/pages/room.js",{

/***/ "./pages/room/index.js":
/*!*****************************!*\
  !*** ./pages/room/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Banner */ "./components/Banner.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context */ "./context.js");
/* harmony import */ var _components_StyledHero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/StyledHero */ "./components/StyledHero.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/pages/room/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 //Components
// import defaultBcg from '../images/room-1.jpeg'


 //Context





var SingleRoom = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SingleRoom, _Component);

  // static async getInitialProps({query}) {
  //     // console.log(query)
  //     return {query}
  // }
  function SingleRoom(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SingleRoom);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleRoom).call(this, props));
    console.log(_this.props.router.query.name);
    _this.state = {
      slug: _this.props.router.query.name // defaultBcg

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SingleRoom, [{
    key: "render",
    value: function render() {
      var getRoom = this.context.getRoom;
      var room = getRoom(this.state.slug);

      if (!room) {
        return __jsx("div", {
          className: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "no such room could be found..."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/rooms",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("a", {
          className: "btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "back to rooms")));
      }

      var name = room.name,
          description = room.description,
          capacity = room.capacity,
          size = room.size,
          price = room.price,
          extras = room.extras,
          breakfast = room.breakfast,
          pets = room.pets,
          images = room.images;

      var _images = Object(_babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(images),
          mainImg = _images[0],
          defaultImg = _images.slice(1);

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_StyledHero__WEBPACK_IMPORTED_MODULE_13__["default"], {
        img: mainImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "".concat(name, " room"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/rooms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        className: "btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "back to rooms")))), __jsx("section", {
        className: "single-room",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "single-room-images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, defaultImg.map(function (item, index) {
        return __jsx("img", {
          key: index,
          src: item,
          alt: name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        });
      })), __jsx("div", {
        className: "single-room-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("article", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Details"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, description)), __jsx("article", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Info"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "price: $", price), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "size: $", size, " sqm"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "max capacity: ", capacity, " pax"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, pets ? "pets allows" : "no pets allowed"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, breakfast && "free breakfast included")))), __jsx("section", {
        className: "room-extras",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "extras"), __jsx("ul", {
        className: "extras",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, extras.map(function (item, index) {
        return __jsx("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "- ", item);
      }))));
    }
  }]);

  return SingleRoom;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SingleRoom, "contextType", _context__WEBPACK_IMPORTED_MODULE_12__["RoomContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(SingleRoom));

/***/ })

})
//# sourceMappingURL=room.js.ce83c8a131bc8fd57706.hot-update.js.map
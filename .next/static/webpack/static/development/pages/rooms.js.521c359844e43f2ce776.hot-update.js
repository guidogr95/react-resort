webpackHotUpdate("static/development/pages/rooms.js",{

/***/ "./components/RoomsFilter.js":
/*!***********************************!*\
  !*** ./components/RoomsFilter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomsFilter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");


var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/RoomsFilter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable no-unused-vars */


 //get all unique values

var getUnique = function getUnique(items, value) {
  console.log(items);
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(items.map(function (item) {
    return item[value];
  })));
};

function RoomsFilter(_ref) {
  var rooms = _ref.rooms;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["RoomContext"]);
  var handleChange = context.handleChange,
      roomtype = context.roomtype,
      capacity = context.capacity,
      price = context.price,
      minPrice = context.minPrice,
      maxPrice = context.maxPrice,
      minSize = context.minSize,
      maxSize = context.maxSize,
      breakfast = context.breakfast,
      pets = context.pets; //get unique types

  var types = getUnique(rooms, 'roomtype'); //add all type

  types = ['all'].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(types)); //map to jsx

  types = types.map(function (item, index) {
    return __jsx("option", {
      value: item,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item);
  });
  var people = getUnique(rooms, 'capacity');
  people = people.map(function (item, index) {
    return __jsx("option", {
      key: index,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, item);
  });
  return __jsx("section", {
    className: "filter-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "search rooms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("form", {
    className: "filter-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "room type"), __jsx("select", {
    name: "roomtype",
    id: "type",
    value: roomtype,
    className: "form-control",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, types)), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "capacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Guests"), __jsx("select", {
    name: "capacity",
    id: "capacity",
    value: capacity,
    className: "form-control",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, people)), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "room price $", price), __jsx("input", {
    type: "range",
    name: "price",
    min: minPrice,
    max: maxPrice,
    id: "price",
    value: price,
    onChange: handleChange,
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "single-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "breakfast",
    id: "breakfast",
    checked: breakfast,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "breakfast")), __jsx("div", {
    className: "single-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "pets",
    id: "pets",
    checked: pets,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "pets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "pets")))));
}

/***/ })

})
//# sourceMappingURL=rooms.js.521c359844e43f2ce776.hot-update.js.map
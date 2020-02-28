webpackHotUpdate("static/development/pages/rooms.js",{

/***/ "./components/RoomsContainer.js":
/*!**************************************!*\
  !*** ./components/RoomsContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RoomsFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomsFilter */ "./components/RoomsFilter.js");
/* harmony import */ var _RoomsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomsList */ "./components/RoomsList.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/RoomsContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function RoomsContainer(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["RoomContext"]);
  var loading = context.loading,
      sortedRooms = context.sortedRooms,
      rooms = context.rooms;

  if (loading) {
    return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_RoomsFilter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rooms: rooms,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_RoomsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rooms: sortedRooms,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RoomsContainer); // import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//         {
//             (value) => {
//                 const {loading,sortedRooms,rooms} = value
//                 if (loading) {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )
//             }
//         }
//         </RoomConsumer>
//     )
// }

/***/ })

})
//# sourceMappingURL=rooms.js.5b2c0076318c5b6a7ae7.hot-update.js.map
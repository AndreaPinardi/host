"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_jsx-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");



const container = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null));

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
var RemoteComponent = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () { return __webpack_require__(/*! remote/nextjs-remote-page */ "webpack/container/remote/remote/nextjs-remote-page"); }).catch(function () {
        return { default: function () { return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "NextJs remote unavailable!" }); } };
    });
});
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: null, children: (0, jsx_runtime_1.jsx)(RemoteComponent, {}) }) }));
}
exports["default"] = App;


/***/ })

}]);
//# sourceMappingURL=src_bootstrap_jsx-webpack_sharing_consume_default_react-dom_react-dom.js.map
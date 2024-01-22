"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([[793],{

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(613);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/App.jsx

const RemoteComponent = /*#__PURE__*/(0,index_js_.lazy)(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.t.bind(__webpack_require__, 26, 23)).catch(() => {
  return {
    default: () => /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, "NextJs remote unavailable!")
  };
}));
function App() {
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: null
  }, /*#__PURE__*/index_js_default().createElement(RemoteComponent, null)));
}
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: ../node_modules/react-dom/client.js
var client = __webpack_require__(634);
;// CONCATENATED MODULE: ./src/bootstrap.jsx



const container = document.getElementById('root');
const root = (0,client/* createRoot */.s)(container); // createRoot(container!) if you use TypeScript
root.render( /*#__PURE__*/index_js_default().createElement(src_App, null));

/***/ }),

/***/ 634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(241);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}]);
//# sourceMappingURL=793.js.map
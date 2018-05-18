module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./components/rate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _jsxFileName = "/Users/jgarciadiaz/Dev/sites/site-etl/components/rate.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Rate = function Rate(_ref) {
  var currency = _ref.currency,
      rate = _ref.rate;
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, currency, ": ", rate);
};

var _default = Rate;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Rate, "Rate", "/Users/jgarciadiaz/Dev/sites/site-etl/components/rate.js");
  reactHotLoader.register(_default, "default", "/Users/jgarciadiaz/Dev/sites/site-etl/components/rate.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/usdmxn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _jsxFileName = "/Users/jgarciadiaz/Dev/sites/site-etl/components/usdmxn.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Rate = function Rate(_ref) {
  var entity = _ref.entity,
      buy = _ref.buy,
      sale = _ref.sale;
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, entity, ": ", buy, " / ", sale);
};

var _default = Rate;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Rate, "Rate", "/Users/jgarciadiaz/Dev/sites/site-etl/components/usdmxn.js");
  reactHotLoader.register(_default, "default", "/Users/jgarciadiaz/Dev/sites/site-etl/components/usdmxn.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _rate = _interopRequireDefault(__webpack_require__("./components/rate.js"));

var _usdmxn = _interopRequireDefault(__webpack_require__("./components/usdmxn.js"));

var _rateUtil = __webpack_require__("./utils/rateUtil.js");

var _rateService = __webpack_require__("./services/rateService.js");

var _jsxFileName = "/Users/jgarciadiaz/Dev/sites/site-etl/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var IndexPage = function IndexPage(_ref) {
  var rates = _ref.rates,
      usdmxn = _ref.usdmxn;
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Tipo de Cambio: ", _react.default.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), (0, _rateUtil.renderRatesFor)(_rate.default, rates), _react.default.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), "Venta/Compra del Dolar en M\xE9xico:", (0, _rateUtil.renderRatesFor)(_usdmxn.default, usdmxn));
};

IndexPage.getInitialProps = _rateService.getRates;
var _default = IndexPage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPage, "IndexPage", "/Users/jgarciadiaz/Dev/sites/site-etl/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/jgarciadiaz/Dev/sites/site-etl/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./services/rateService.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRates = getRates;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__("./node_modules/isomorphic-unfetch/browser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function getRates() {
  return _getRates.apply(this, arguments);
}

function _getRates() {
  _getRates = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var results, res, rates, usdmxn;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            results = Promise.all([fetch('http://127.0.0.1:3000/rates'), fetch('http://127.0.0.1:3000/rates/usdmxn')]);
            _context.next = 3;
            return results;

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res[0].json();

          case 6:
            rates = _context.sent;
            _context.next = 9;
            return res[1].json();

          case 9:
            usdmxn = _context.sent;
            return _context.abrupt("return", {
              rates: rates,
              usdmxn: usdmxn
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getRates.apply(this, arguments);
}

var _default = {};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRates, "getRates", "/Users/jgarciadiaz/Dev/sites/site-etl/services/rateService.js");
  reactHotLoader.register(_default, "default", "/Users/jgarciadiaz/Dev/sites/site-etl/services/rateService.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./utils/rateUtil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRatesFor = renderRatesFor;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _jsxFileName = "/Users/jgarciadiaz/Dev/sites/site-etl/utils/rateUtil.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function renderRatesFor(Component, rates) {
  if (!rates || !rates.length) {
    return null;
  }

  return rates.map(function (rate) {
    return _react.default.createElement(Component, _extends({}, rate, {
      key: rate._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }));
  });
}

var _default = {};
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderRatesFor, "renderRatesFor", "/Users/jgarciadiaz/Dev/sites/site-etl/utils/rateUtil.js");
  reactHotLoader.register(_default, "default", "/Users/jgarciadiaz/Dev/sites/site-etl/utils/rateUtil.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map
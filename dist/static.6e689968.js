(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(12);

var _reactHelmet = __webpack_require__(54);

var _browser = __webpack_require__(9);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(27));

var _RouteData = _interopRequireWildcard(__webpack_require__(55));

var _SiteData = _interopRequireWildcard(__webpack_require__(56));

var _Prefetch = _interopRequireDefault(__webpack_require__(57));

var _Routes = _interopRequireDefault(__webpack_require__(29));

var _Root = _interopRequireDefault(__webpack_require__(58));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _axios = _interopRequireDefault(__webpack_require__(24));

var _utils = __webpack_require__(12);

var _Visibility = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 43;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already failed to find info for the 404 page,
            // try to load info for the 404 page

            if (!(path !== '404')) {
              _context2.next = 42;
              break;
            }

            return _context2.abrupt("return", getRouteInfo('404', {
              priority: priority
            }));

          case 42:
            return _context2.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.fullData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", routeInfo.fullData);

          case 8:
            // Request and build the props one by one
            routeInfo.fullData = _objectSpread({}, routeInfo.data || {}); // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.fullData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
            return _context4.abrupt("return", routeInfo.fullData);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              registerTemplateForPath(path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (!(!routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 19;
              break;
            }

            if (!priority) {
              _context5.next = 16;
              break;
            }

            _context5.next = 14;
            return Template.preload();

          case 14:
            _context5.next = 18;
            break;

          case 16:
            _context5.next = 18;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 18:
            routeInfo.templateLoaded = true;

          case 19:
            return _context5.abrupt("return", Template);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        data,
        _ref13,
        _ref14,
        _args6 = arguments;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 10;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context6.sent;
            _context6.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context6.next = 21;
            break;

          case 15:
            ;
            _context6.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref13 = _context6.sent;
            _ref14 = _slicedToArray(_ref13, 1);
            data = _ref14[0];

          case 21:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

            return _context6.abrupt("return", data);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(49);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(51);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(52);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(18);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _swimmer = __webpack_require__(46);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(50)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(14);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = {"type":"Topology","objects":{"states":{"type":"GeometryCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"geometries":[{"type":"Polygon","id":"WV","arcs":[[0]]},{"type":"Polygon","id":"FL","arcs":[[1]]},{"type":"Polygon","id":"IL","arcs":[[2]]},{"type":"Polygon","id":"MN","arcs":[[3]]},{"type":"Polygon","id":"MD","arcs":[[4]]},{"type":"Polygon","id":"RI","arcs":[[5]]},{"type":"Polygon","id":"ID","arcs":[[6]]},{"type":"Polygon","id":"NH","arcs":[[7]]},{"type":"Polygon","id":"NC","arcs":[[8]]},{"type":"Polygon","id":"VT","arcs":[[9]]},{"type":"Polygon","id":"CT","arcs":[[10]]},{"type":"Polygon","id":"DE","arcs":[[11]]},{"type":"Polygon","id":"NM","arcs":[[12]]},{"type":"Polygon","id":"CA","arcs":[[13]]},{"type":"Polygon","id":"NJ","arcs":[[14]]},{"type":"Polygon","id":"WI","arcs":[[15]]},{"type":"Polygon","id":"OR","arcs":[[16]]},{"type":"Polygon","id":"NE","arcs":[[17]]},{"type":"Polygon","id":"PA","arcs":[[18]]},{"type":"Polygon","id":"WA","arcs":[[19]]},{"type":"Polygon","id":"LA","arcs":[[20]]},{"type":"Polygon","id":"GA","arcs":[[21]]},{"type":"Polygon","id":"AL","arcs":[[22]]},{"type":"Polygon","id":"UT","arcs":[[23]]},{"type":"Polygon","id":"OH","arcs":[[24]]},{"type":"Polygon","id":"TX","arcs":[[25]]},{"type":"Polygon","id":"CO","arcs":[[26]]},{"type":"Polygon","id":"SC","arcs":[[27]]},{"type":"Polygon","id":"OK","arcs":[[28]]},{"type":"Polygon","id":"TN","arcs":[[29]]},{"type":"Polygon","id":"WY","arcs":[[30]]},{"type":"Polygon","id":"ND","arcs":[[31]]},{"type":"Polygon","id":"KY","arcs":[[32]]},{"type":"Polygon","id":"ME","arcs":[[33]]},{"type":"Polygon","id":"NY","arcs":[[34]]},{"type":"Polygon","id":"NV","arcs":[[35]]},{"type":"Polygon","id":"AR","arcs":[[36]]},{"type":"Polygon","id":"MS","arcs":[[37]]},{"type":"Polygon","id":"MO","arcs":[[38]]},{"type":"Polygon","id":"MT","arcs":[[39]]},{"type":"Polygon","id":"KS","arcs":[[40]]},{"type":"Polygon","id":"IN","arcs":[[41]]},{"type":"Polygon","id":"SD","arcs":[[42]]},{"type":"Polygon","id":"MA","arcs":[[43]]},{"type":"Polygon","id":"VA","arcs":[[44]]},{"type":"Polygon","id":"DC","arcs":[[45]]},{"type":"Polygon","id":"IA","arcs":[[46]]},{"type":"Polygon","id":"AZ","arcs":[[47]]}]}},"arcs":[[[47099,0],[-80,8337],[-180,18216],[6335,205],[5082,30],[-62,5515],[-48,9515],[189,63],[1354,-2569],[1032,-1343],[1658,-3332],[528,-669],[1078,942],[1753,-5017],[796,1352],[766,817],[381,-148],[597,558],[1070,42],[558,-989],[-321,-1206],[532,13],[442,-1489],[980,586],[129,-619],[886,-1666],[741,373],[752,1251],[352,1015],[523,-247],[769,285],[560,-283],[41,1127],[-422,117],[166,1441],[715,677],[149,1758],[362,120],[21,2627],[407,341],[-298,795],[-823,4798],[-3737,-5937],[-2127,-3475],[110,3277],[-211,1062],[-633,1786],[223,388],[-419,1357],[395,872],[-599,1591],[-225,148],[-1006,2311],[243,399],[-557,1589],[-316,-466],[-555,1648],[-1193,1216],[-887,3613],[-1409,-2526],[-592,1722],[-501,2649],[8,1224],[-431,218],[-300,1774],[-531,2028],[-51,932],[-776,2035],[-368,367],[-1860,-1330],[-680,-2763],[-1264,-1201],[-574,3444],[109,1272],[-606,2300],[-766,1430],[235,1066],[-700,1037],[-539,1173],[-367,1581],[27,966],[-314,755],[-645,2674],[-1525,3137],[-250,255],[-1011,3147],[-122,1412],[-444,846],[319,1366],[533,564],[-445,948],[-811,903],[319,1681],[-2058,2472],[-398,-1768],[-473,222],[-1104,1485],[-1458,1416],[-156,-672],[-608,-960],[-545,1216],[378,1127],[-1202,1485],[-419,-216],[-1368,535],[-740,482],[-690,790],[-1072,-2004],[-469,-1182],[-906,1833],[-1476,1898],[-1373,36],[-698,-1146],[-52,-772],[-489,-674],[-745,-168],[-211,-1216],[-608,-1051],[41,-1599],[-748,-1931],[679,-1004],[-305,-789],[-1021,-67],[-687,-740],[-691,-2099],[-857,-980],[-529,-1582],[-316,-2359],[-394,-521],[-378,-1289],[-61,-1243],[-894,-1521],[415,-1144],[-547,-925],[-289,-1987],[-377,-1194],[-535,-966],[293,-982],[503,-2697],[31,-1891],[-227,-543],[119,-2229],[614,598],[1529,-858],[921,-188],[269,-1441],[175,-2231],[263,-560],[1019,-19],[122,-741],[-170,-1639],[115,-824],[-378,-2349],[907,-1511],[52,-1646],[648,-2200],[976,-1489],[252,1053],[529,249],[330,1499],[-316,1037],[381,842],[490,-761],[65,-797],[722,-996],[228,-1457],[-506,-1395],[664,-734],[146,-659],[-113,-1935],[364,-1107],[387,-318],[180,-1337],[1244,46],[121,-1820],[1159,-1967],[534,659],[221,1321],[439,-65],[865,-1092],[629,-151],[311,-1104],[565,-359],[485,-1457],[778,-1592],[1021,-1762],[583,-139],[185,-1905],[405,-781],[-421,-1463],[492,-992],[6,-1252],[377,-622],[-164,-1226],[585,-195],[-77,-955],[271,-702],[124,-2126],[-79,-893],[338,-751],[57,-1525],[417,-1299],[81,-868],[431,-905],[261,-1605],[-106,-3235],[209,-1202],[-333,-1873],[-385,-1004],[422,-1427],[453,148],[702,-636]],[[42481,1561],[103,995],[248,729],[88,644],[-70,417],[145,1029],[286,621],[2478,449],[632,85],[2536,441],[3021,524],[2762,502],[3017,521],[2390,418],[-166,461],[245,801],[-65,897],[112,709],[141,303],[416,-140],[251,167],[182,-204],[-39,-651],[175,-906],[-7,-814],[84,-548],[-275,-1655],[93,-476],[-22,-621],[430,-485],[56,-576],[463,-56],[57,339],[558,201],[479,647],[371,-93],[554,450],[454,-51],[10,321],[150,126],[225,-69],[74,288],[-60,664],[-26,1279],[-130,67],[-19,-625],[-44,-305],[-164,-116],[-25,730],[56,485],[285,444],[110,469],[97,171],[55,335],[-23,485],[129,412],[-44,671],[7,622],[203,1657],[55,275],[162,1783],[257,1914],[-40,484],[129,65],[77,768],[36,749],[108,788],[184,1070],[134,640],[69,584],[258,1215],[425,2147],[704,3186],[197,768],[114,208],[-49,289],[196,343],[92,560],[872,3041],[411,1356],[345,997],[388,1403],[161,985],[97,300],[-79,318],[-347,757],[1,1775],[-16,324],[32,827],[140,1536],[255,1317],[529,1648],[8,650],[-208,-873],[-196,-465],[-62,-528],[-388,-1436],[-197,-1200],[-62,-634],[9,-2603],[193,-1911],[4,-598],[-48,-600],[-99,-378],[-216,-42],[-133,-112],[1,328],[-135,55],[-415,-145],[-117,-111],[-120,-443],[25,-590],[96,-121],[105,-535],[-20,-269],[-279,-205],[-218,-414],[-124,-114],[105,1378],[73,366],[-48,206],[200,802],[51,913],[155,1461],[182,1171],[192,800],[50,360],[1051,4755],[1057,4752],[239,2286],[982,4800],[-127,-201],[-264,-135],[-289,-371],[-48,137],[168,399],[207,204],[199,-115],[251,568],[42,197],[187,185],[64,461],[161,661],[138,814],[127,550],[-36,345],[-146,68],[-76,172],[230,165],[106,254],[177,1440],[1,406],[-100,223],[88,349],[41,469],[21,1933],[-36,436],[-102,29],[-49,2052],[-77,687],[8,521],[-50,474],[23,333],[-158,2232],[-62,451],[-109,288],[107,336],[-92,4436],[-47,-627],[43,-685],[-4,-389],[-76,-194],[-238,644],[-39,549],[-83,397],[-3,635],[-96,286],[-200,84],[-95,280],[-11,366],[-136,645],[-194,395],[-27,1034],[-40,256],[-165,595],[10,602],[104,227],[-102,495],[188,337],[-8,186],[-242,440],[-300,710],[-66,382],[-114,269],[-25,463],[-161,-89],[0,-230],[-236,147],[62,223],[-195,274],[-87,-251],[45,-470],[-356,37],[-101,70],[-171,798],[-106,-75],[-232,58],[40,333],[-181,0],[-219,343],[-416,2],[-251,-340],[-198,-84],[-99,-194],[-216,271],[-153,349],[-381,56],[-487,151],[-312,153],[-103,-50],[-316,-620],[-186,-937],[9,-472],[73,-590],[111,-500],[162,49],[193,369],[115,464],[108,130],[511,448],[-137,215],[119,194],[290,-73],[116,-177],[67,-328],[-46,-269],[-379,-826],[-122,-132],[-235,-82],[-154,-182],[-252,-103],[-309,-506],[-52,-161],[-49,-618],[-95,-582],[-217,-501],[-75,-296],[191,-386],[-74,-168],[-230,9],[-94,-825],[-138,-523],[-85,-776],[-280,-53],[-123,-533],[-113,-161],[237,-440],[-177,-517],[-317,-527],[-280,-148],[-158,-201],[-156,-377],[-88,191],[-147,-218],[-286,-295],[-288,-108],[-101,-299],[-118,315],[-147,120],[-145,-106],[-228,254],[-114,-307],[-44,-440],[93,-78],[226,340],[128,-239],[74,-378],[-250,29],[-136,-150],[-78,-359],[58,-143],[-190,-301],[-103,-389],[-110,-1087],[-93,618],[-117,-1084],[-53,-1187],[38,-665],[-194,-744],[66,-148],[-10,-942],[-78,-525],[-149,-113],[-300,16],[-360,-417],[-200,-39],[18,-446],[210,58],[417,-722],[125,-413],[-25,-381],[367,-778],[152,-509],[-235,126],[-346,687],[-73,240],[-203,1172],[-298,290],[0,-216],[-226,233],[-81,0],[-157,-502],[58,-759],[-176,-1045],[6,-339],[169,-1752],[1,-708],[-271,-470],[11,-193],[460,-601],[144,-60],[99,-176],[-27,-393],[-144,278],[-501,253],[-150,-89],[-30,240],[-162,73],[-72,192],[-190,-419],[-249,-156],[-128,-461],[-113,92],[260,632],[118,57],[165,681],[102,561],[60,894],[-186,-277],[-130,271],[-114,-217],[-136,77],[-207,-268],[-106,-24],[-197,-281],[-185,-1297],[-180,215],[-42,-302],[-583,-2456],[-63,-538],[-152,-630],[33,-490],[-161,-61],[-264,-929],[139,-105],[-5,-379],[-133,-582],[-67,-730],[-467,-736],[-346,-189],[-73,-222],[-123,-688],[222,487],[243,327],[80,-224],[9,-290],[-135,48],[-84,-166],[114,-255],[328,285],[-69,-442],[283,-236],[-112,-462],[142,-193],[205,-891],[182,-295],[44,-294],[158,-175],[138,-522],[184,-257],[262,-639],[55,-226],[-16,-347],[-126,-633],[-57,-628],[-191,-209],[-136,154],[-87,417],[7,1076],[-289,-59],[-80,-292],[-7,-375],[47,-730],[-41,-387],[-114,-200],[-171,-78],[-70,-340],[-178,-209],[-366,-262],[-73,638],[300,40],[-83,187],[-300,165],[-107,253],[250,214],[240,299],[251,207],[53,780],[-31,332],[-89,228],[-112,638],[44,247],[-99,494],[-107,89],[-200,-99],[-17,-526],[-220,-143],[-229,-650],[-250,-426],[-98,162],[382,886],[77,274],[134,858],[-160,-121],[-156,-1089],[-393,-820],[-88,-358],[-83,-931],[134,61],[226,-1208],[153,-1379],[31,-583],[59,-136],[-95,-449],[-32,-380],[6,-502],[181,-310],[94,-625],[196,-631],[-102,-98],[315,-1648],[144,-504],[13,-815],[86,-629],[31,-1297],[68,-264],[-46,-366],[79,-256],[-23,-878],[-111,-151],[-193,-740],[91,-229],[102,127],[108,-189],[53,-728],[-83,-416],[-262,-200],[-267,-704],[-31,-262],[44,-304],[-188,-210],[53,-304],[10,-521],[-237,-401],[-72,-261],[139,-169],[-159,-300],[-11,-539],[-182,200],[-130,-323],[-128,186],[-149,-16],[-255,-281],[-259,50],[-337,136],[-108,-85],[-32,-356],[-126,-125],[-44,-240],[75,-140],[-145,-541],[-190,-132],[-276,-382],[-60,-595],[-107,-452],[-192,-561],[-238,-489],[-161,51],[-174,-301],[-318,-808],[-67,17],[-242,-349],[28,-353],[-64,-372],[69,-164],[59,-650],[-98,-512],[-365,-235],[-173,-318],[-217,-216],[-215,-459],[-92,-295],[-96,-929],[-119,-174],[-77,-413],[-235,-530],[-112,-347],[-277,-450],[-188,-156],[-210,-461],[-153,58],[-285,-272],[-593,-818],[-460,-814],[-333,183],[-461,57],[-200,216],[-152,-509],[-156,181],[-272,-6],[-106,397],[-277,-16],[-233,251],[-176,353],[-4,309],[131,7],[164,465],[-105,24],[-373,-295],[-218,-243],[46,560],[59,84],[395,127],[196,155],[40,326],[-88,348],[-332,-271],[-264,-68],[-352,133],[-70,-159],[-356,400],[-273,428],[-316,160],[-197,272],[-333,618],[-354,172],[-261,351],[-125,46],[-258,296],[-26,-264],[232,-749],[-102,-109],[-359,372],[-120,379],[-162,38],[-136,395],[-87,98],[-508,-149],[-261,5],[-758,446],[-430,-104],[-250,209],[-125,-131],[-157,-461],[-99,-1282],[-4,-777],[118,-178],[-37,1041],[10,349],[104,670],[159,538],[136,82],[188,-336],[-25,-242],[47,-1060],[-55,-331],[-195,-564],[-74,-505],[-86,-283],[-213,-443],[-721,-764],[253,-7],[-790,-1442],[-84,-87],[-305,-680],[0,-203],[387,176],[-11,278],[414,298],[203,558],[219,357],[221,210],[159,-224],[181,-121],[-70,-218],[-241,-130],[-151,461],[-146,-365],[3,-740],[-160,-32],[4,-470],[-200,155],[-117,-105],[-50,306],[-221,-366],[-145,-130],[-111,52],[-104,-284],[-218,-244],[-142,-347],[140,-151],[282,-667],[249,115],[260,-588],[152,27],[-73,-373],[-115,-263],[-230,648],[-118,151],[-100,-192],[-260,244],[-95,280],[-272,-1118],[-154,363],[-203,28],[-226,180],[-71,197],[135,450],[297,-100],[117,66],[202,489],[-101,278],[46,188],[217,375],[-98,302],[-150,-90],[-745,-1229],[-536,-605],[-724,-869],[-800,-585],[-1084,-725],[-764,-257],[-45,-273],[512,86],[414,239],[81,-69],[130,-532],[176,492],[286,174],[76,-296],[-15,-297],[257,424],[300,211],[172,269],[76,-315],[-236,-653],[-32,-231],[94,-384],[-285,191],[-79,-150],[-69,-411],[-107,181],[-398,-117],[-621,229],[-173,241],[-196,-243],[35,-220],[154,-396],[-153,-19],[-159,258],[-169,-201],[8,491],[-147,172],[-225,94],[-84,212],[-229,-18],[-13,298],[-76,101],[-496,-111],[-522,60],[-132,-128],[-327,175],[-359,-32],[-1001,173],[-646,291],[-322,46],[30,-164],[341,-286],[391,-173],[465,1],[434,-656],[289,298],[-59,-351],[-432,-346],[-106,-369],[-110,-38],[-36,-224],[195,-609],[-122,-527],[-77,94],[-205,1064],[-90,343],[-59,514],[-67,159],[-130,-179],[59,-451],[-100,-700],[-138,-52],[48,-316],[-108,-47],[-70,-292],[-193,76],[33,675],[110,397],[-9,456],[-166,567],[-85,-104],[-62,346],[-271,89],[-124,135],[-10,519],[-85,203],[-229,71],[15,277],[-146,117],[-921,289],[-114,117],[-194,22],[22,-128],[133,-210],[313,-77],[-137,-276],[237,-5],[129,-256],[-72,-379],[201,-444],[124,-170],[217,-130],[-68,-550],[-396,-144],[-89,-173],[-40,-741],[260,-802],[112,-648],[-63,-725],[-587,-779],[-202,-455],[-49,-446],[-488,-1097],[56,-612],[234,-1164],[-50,-487],[2912,310],[3665,461],[2804,312],[3508,261],[2065,98],[1530,119]],[[41428,0],[1540,110],[1616,50],[1314,103],[1856,77],[2647,196],[2981,160],[1139,-43],[3563,-8],[1807,38],[5094,-130],[-634,7165],[-502,6073],[-2079,67],[16,7804],[47,8845],[24,5954],[-7,6543],[9,4826],[52,9500],[-390,260],[-113,412],[10,917],[166,87],[-31,989],[-230,262],[-264,906],[595,1409],[-1,1295],[415,524],[-37,602],[-222,1127],[392,1342],[-156,1594],[-532,584],[-204,1050],[43,380],[-333,742],[97,423],[-203,540],[-405,269],[97,504],[-87,652],[-611,1598],[-125,898],[-597,-307],[-327,1152],[105,664],[410,523],[-234,638],[-473,432],[320,654],[-464,635],[152,990],[-170,376],[167,1106],[-568,24],[468,1701],[-146,796],[-528,865],[-246,922],[190,1472],[430,820],[77,441],[-147,571],[-378,23],[-1000,331],[-630,923],[-305,-415],[-431,597],[-92,951],[-177,756],[36,675],[414,1015],[164,931],[-266,1410],[-383,145],[-395,-257],[-309,-659],[-829,-533],[-473,-772],[-903,-723],[-298,-47],[-395,332],[-445,971],[-134,679],[-472,1095],[25,836],[285,534],[-417,30],[-76,-702],[-394,-822],[-294,338],[306,537],[-245,415],[-591,-847],[-9,-1011],[-326,-794],[-248,-1111],[33,-776],[-225,-162],[-196,-635],[64,-503],[520,-532],[111,-890],[-128,-782],[-217,-533],[-309,-1253],[-18,-851],[291,-284],[-270,-770],[45,-797],[-494,-513],[-238,-666],[-346,-198],[55,-468],[-546,-1109],[-400,-287],[-322,-794],[-378,612],[-381,-260],[-140,-634],[303,-508],[-62,-409],[-331,152],[-526,-1013],[-193,-15],[-256,-822],[-287,-143],[-480,-786],[-216,-829],[-405,-600],[-164,-587],[-83,-1117],[21,-897],[213,-978],[365,-793],[195,-1576],[603,-1880],[-45,-898],[-171,-649],[331,-1081],[302,-445],[76,-921],[-927,-1302],[-406,-103],[-564,-656],[-397,-176],[-678,1658],[-213,91],[-310,-354],[-264,-719],[-94,-1224],[-215,-1152],[217,-584],[-171,-1182],[-100,-1738],[-440,-1076],[-360,-666],[-1274,-1936],[-402,-1659],[-321,-143],[-239,-1086],[-251,-242],[-345,-892],[-603,-1183],[48,-1147],[-462,-918],[-84,-658],[194,-652],[-462,-2228],[42,-375],[-122,-1249],[64,-1984],[332,-1891],[298,-626],[298,-225],[-19,-1023],[100,-1148],[-239,-562],[328,-1043],[341,-396],[420,-212],[419,39],[441,-603],[49,-942],[169,-921],[-20,-625],[683,-1702],[242,-289],[167,-1969],[-11,-1084],[-272,-1117],[-344,-216],[-457,-1537],[287,-1072],[195,-1779],[490,-406],[291,246],[559,-574],[725,131],[543,-186],[412,-860],[362,-253],[525,74],[329,-738],[464,-383],[11,-1066],[211,-940],[-9,-628],[249,-582],[603,-618],[246,-1855],[-46,-988],[153,-750],[-153,-707],[24,-1344],[-297,-662],[-1173,-1368],[-248,-1040],[107,-720],[-390,-1129],[-495,-602],[-97,-467],[-515,-632],[62,-597]],[[29517,4804],[3158,533],[3682,510],[4033,440],[136,-6287],[482,551],[529,-233],[521,790],[141,496],[223,2853],[114,359],[-27,1623],[164,11],[150,1912],[-121,971],[41,693],[525,1071],[279,289],[528,159],[123,-256],[802,241],[98,751],[461,149],[799,77],[864,257],[198,978],[-74,660],[126,235],[795,1],[71,-210],[454,33],[426,-272],[11,-685],[633,-638],[745,-254],[154,315],[1029,-8],[1372,1375],[496,-68],[-6,715],[-332,81],[-71,526],[304,428],[795,-202],[277,763],[-67,815],[301,949],[251,1207],[478,-412],[-117,-728],[59,-900],[441,-60],[237,-301],[423,138],[453,515],[-24,925],[614,427],[163,499],[805,82],[106,947],[-67,451],[392,269],[381,34],[-20,739],[466,-351],[325,299],[311,-367],[649,-294],[871,-1674],[273,-151],[283,-538],[482,-482],[252,80],[61,1081],[412,1209],[646,-155],[325,-373],[136,448],[638,-118],[342,85],[372,-276],[930,-227],[602,370],[195,907],[530,597],[414,-508],[460,-179],[105,194],[529,-107],[206,218],[519,-376],[-1527,8787],[-639,3583],[-3870,161],[-1854,2865],[-2718,4189],[-506,680],[-2373,3011],[-400,-742],[-271,175],[-43,397],[-363,1129],[-455,-255],[75,10008],[-236,263],[-81,734],[-345,-174],[-185,194],[-172,739],[-304,-177],[-147,541],[-500,314],[-429,736],[-305,1102],[-106,1077],[-491,801],[-106,1524],[27,903],[355,245],[292,-128],[279,459],[-2,456],[476,1238],[-18,734],[-314,779],[32,296],[-369,833],[65,1193],[-87,571],[134,1325],[-342,743],[246,742],[-41,861],[114,599],[-136,818],[53,844],[-252,1548],[462,638],[669,1290],[-2,398],[324,212],[179,618],[1163,145],[185,247],[121,826],[477,923],[1024,633],[576,695],[199,412],[268,1429],[85,899],[362,613],[664,723],[408,971],[402,601],[880,389],[1013,2622],[272,1246],[-128,1147],[31,1656],[209,469],[-31,680],[180,839],[-2585,197],[-2480,139],[-4995,170],[-2924,6],[-3875,-94],[-2215,-107],[-3990,-282],[-3236,-289],[-3355,-394],[-2992,-426],[207,-5634],[305,-8335],[265,-7191],[347,-10001],[-177,-994],[-735,-1003],[-354,-84],[-268,-841],[-146,-1104],[-487,-1544],[134,-699],[548,-788],[473,-498],[575,-1408],[184,-1938],[-24,-1567],[170,-947],[-158,-2485],[53,-1716],[-358,-830],[-363,-2902],[45,-449],[-246,-1057],[10,-743],[134,-768],[-62,-1520],[173,-458],[26,-927],[-251,-1920],[124,-717],[46,-956],[-85,-686],[95,-1432],[-43,-983],[103,-738],[-83,-2553],[141,-1664],[-177,-823],[-27,-860],[-356,-2410],[-161,-705],[24,-809],[-183,-512],[-19,-1610],[-337,-1689],[12,-691],[243,-1512],[-12,-1036],[-138,-383],[158,-680],[-28,-2048],[-58,-354],[361,-1300],[57,-912],[-203,-1686],[-113,-199],[71,-824],[-254,-1627],[65,-853]],[[40482,23439],[-725,-693],[74,-4788],[-654,-284],[-195,-3229],[-1273,-1362],[-240,-2654],[774,-138],[-26,-2058],[-1032,413],[-1388,-656],[-965,355],[-596,-1913],[-1316,-2412],[-1333,-813],[-1686,2875],[-261,1104],[-1760,-1243],[-869,2632],[-969,-119],[535,2254],[-1059,1701],[-1948,-270],[-1062,-1122],[-701,201],[-1359,-1626],[-1391,-2604],[-3408,8822],[-1923,-1908],[-989,1123],[-3161,5769],[-1937,2262],[-2574,4434],[-343,-149],[495,-17312],[348,-10031],[8599,665],[13988,950],[8282,376],[8517,368],[10221,103],[9506,-162],[7572,-201],[6924,-337],[46,3929],[1152,27330],[889,21015],[635,15000],[3799,102],[5711,-202],[3059,-236],[-112,1045],[-588,-240],[445,1558],[-113,690],[-921,-926],[512,2836],[509,-135],[182,585],[-213,1890],[-495,1689],[-465,2440],[-192,402],[-695,112],[-480,-778],[-450,1146],[-247,3188],[-288,874],[-352,2264],[-535,-292],[-368,312],[-442,1176],[107,437],[-486,3621],[-5130,1463],[-508,1527],[-480,-274],[-1892,-241],[-480,149],[-1469,2488],[-365,-1064],[147,-878],[-405,-1101],[801,-2828],[584,-194],[1252,-2754],[-1592,261],[-411,-447],[591,-985],[184,-1069],[621,-260],[88,-854],[-940,-173],[-478,404],[-943,-168],[-430,249],[-162,1298],[-373,-391],[-33,-1081],[251,-2064],[657,-952],[830,-524],[432,-1123],[-916,-103],[-387,-428],[-207,-1061],[295,-2391],[836,-3205],[103,-1640],[-409,159],[-193,1635],[-1167,2992],[-472,3203],[-273,-1300],[-509,-1152],[35,-1191],[567,-553],[138,-823],[-208,-1200],[-524,636],[-573,1490],[-365,1377],[377,796],[54,1431],[-222,1412],[-416,148],[-691,-2386],[-757,-738],[-340,-1323],[-1255,-3172],[-576,-27],[10,2136],[-1293,-4154],[-283,-1804],[-490,-977],[-25,-1132],[309,-418],[1045,1197],[230,-2230],[1237,-1199],[191,-1265],[-263,-870],[-535,10],[-175,882],[-475,534],[-637,32],[-106,-1092],[449,-1116],[-445,-1454],[924,331],[1041,-24],[426,720],[381,-188],[577,1028],[462,-320],[808,1345],[862,95],[830,-2231],[13,-2807],[-621,3046],[-494,542],[-1673,-1659],[244,-1832],[-868,725],[-221,-1016],[799,-798],[-3,-367],[-1228,297],[-186,-648],[-477,1013],[-791,-2126],[169,-1108],[-132,-1160],[-417,453],[-381,1871],[-376,-353],[-121,-1585],[-586,1769],[28,2182],[-423,-654],[109,-2066],[181,-943],[515,-4129],[554,-987],[361,79],[975,1662],[14,1038],[810,1669],[844,-901],[446,-1506],[-1381,859],[-367,-1507],[113,-1759],[630,-740],[608,-336],[423,-655],[-994,-894],[-878,931],[84,-2669],[-316,-833],[-801,-356],[-330,1002],[-964,454],[-356,445],[28,2746],[-939,1287],[342,-5738],[676,-3106],[130,-1230],[413,80],[214,2037],[1407,766],[378,-280],[934,-1621],[71,-1092],[-439,-1440],[548,-716],[379,-1225],[885,-1948],[-219,-541],[-857,1142],[-906,-305],[-190,1604],[-376,756],[-162,1524],[183,1985],[-264,84],[-524,-1060],[224,-1343],[-259,-3651],[-619,-1304],[-5,-877],[332,-1106],[842,-3941],[640,-1411],[102,-1504],[831,-786],[258,-1591],[289,-642],[923,96],[643,358],[1939,-213],[1440,108],[-89,-944],[-817,319],[-2054,-250],[-563,-635],[398,-1254],[786,-1876],[776,-1292],[446,-118],[937,602],[-62,-867],[-518,-1464],[489,-599],[346,-1022],[367,-2460],[-484,394],[-645,1724],[-304,1286],[-1205,2167],[-682,1566],[5,-1740],[172,-1015],[490,-1530],[356,-1742],[223,-2072],[-325,182],[-546,1815],[-576,1011],[-602,-399],[-898,-30],[-185,411],[-536,2956],[217,521],[903,725],[-171,1175],[-954,2043],[-1222,1533],[-516,993],[-331,-692],[-82,-1045],[250,-3736],[-338,-358],[-407,1103],[-248,4007],[446,1547],[-770,2096],[-168,-2473],[-415,-2419],[-277,-252],[-1531,844],[324,538],[989,670],[-92,1533],[-640,549],[95,919],[-1119,-533],[26,960],[675,1801],[-531,416],[-526,-1745],[-830,-711],[736,2856],[916,1521],[-928,1773],[-414,-662],[-564,-43],[94,-1010],[-1466,-1972],[-534,87],[-230,812],[653,183],[142,1538],[548,223],[392,1848],[485,801],[497,334],[736,1255],[69,1327],[222,887],[-113,834],[-892,-482],[-958,436],[818,605],[1355,1368],[238,1247],[-960,514],[-540,549],[-806,-1418],[-263,-1247],[-556,-1690],[-353,585],[-35,1483],[568,367],[1172,2386],[339,1746],[221,2220],[-855,-784],[-492,-1271],[-657,-399],[929,2438],[397,736],[-59,1011],[-515,-370],[-43,904],[-309,737],[153,929],[790,-293],[-212,1978],[-543,1309],[-428,422],[33,1096],[595,1609],[-152,2637],[430,2547],[-34,5391],[347,1697],[1252,3081],[827,2506],[294,353],[-215,1674],[-539,1728],[-708,-111],[-370,-608],[37,-1539],[-303,-1498],[-578,-632],[-651,-290],[-391,-779],[-845,-1068],[-707,-1592],[-237,-1691],[-520,-7980],[-255,67],[212,5088],[33,3887],[348,1907],[1478,2754],[1557,1643],[359,2038],[902,1956],[379,-57],[532,-779],[685,489],[-467,1725],[202,2157],[1123,3400],[291,1319],[-405,985],[270,2398],[97,1742],[-574,-715],[-942,-2440],[-404,-277],[-398,-1277],[144,-1452],[-460,-905],[-408,1997],[-734,-1436],[-123,1400],[-425,81],[-367,-2418],[-318,-799],[-1120,-1313],[-561,-83],[-1111,-686],[-1187,573],[-1028,-1393],[64,-1223],[-224,-1232],[-83,-1997],[-251,-1426],[-443,-1055],[-655,-876],[514,2346],[352,2828],[1,2447],[-551,-788],[-1168,-1056],[-31,-1254],[-1028,-1579],[-275,-1424],[-720,-4877],[-357,380],[-438,1386],[-712,1063],[-218,-138],[-39,-3035],[-551,765],[421,1105],[-659,2373],[-1207,1307],[-583,-531],[-479,-1051],[-142,-1691],[96,-1404],[-184,-2314],[821,-3365],[846,10],[-370,-979],[414,-1606],[537,-617],[766,-384],[509,-3165],[319,-601],[720,-356],[429,-2148],[31,-3384],[2321,-4762],[-2677,-5506],[-1608,3283],[-513,-1542],[-2029,-1057],[2,-2113],[-1924,-2199],[-2442,-676],[-407,-1655],[-755,-767],[-173,-1454],[944,-2166],[484,-1968],[-1669,-2181],[-552,-2206],[-1519,-159],[-1517,-710]],[[37437,1193],[17399,-1193],[8,14347],[1780,-584],[-358,8631],[801,4871],[2822,3264],[1244,3971],[-361,3749],[-840,3845],[-1736,-965],[-294,-1280],[303,-3646],[856,-4446],[-883,-1175],[-282,3404],[-1960,-2775],[-620,-5241],[-1032,-1564],[158,7243],[999,2136],[29,2321],[-734,3363],[-587,-1779],[-845,-558],[-1178,1997],[982,1038],[400,1747],[58,4600],[-1269,4364],[763,4096],[-58,8035],[-1204,7173],[-1804,4566],[-1374,-1166],[-2882,1018],[-6523,4152],[-3167,1588],[-1793,1636],[508,-2876],[1274,-1675],[-518,-7824],[1863,-688],[486,-27399],[-431,-40321]],[[36898,42336],[-165,-1484],[210,-899],[-196,-656],[26,-636],[-79,-555],[-319,-785],[114,-1117],[211,-6913],[230,-7560],[121,-4277],[119,-3840],[187,-4978],[283,-8636],[2401,288],[2041,213],[-196,7854],[-162,6555],[636,1951],[222,237],[107,1072],[450,857],[-76,553],[185,460],[3,428],[-296,698],[183,283],[104,548],[-31,388],[-263,186],[892,1426],[81,680],[866,587],[187,542],[-21,450],[177,180],[84,444],[206,208],[409,1280],[87,47],[166,1086],[221,43],[284,1013],[51,971],[263,217],[159,447],[303,378],[-120,615],[167,249],[260,-589],[163,26],[200,461],[-103,385],[125,586],[317,-73],[373,209],[208,-393],[314,-96],[172,316],[-147,1337],[17,472],[-283,539],[131,516],[-250,767],[54,307],[-122,837],[-186,555],[93,402],[9,976],[-297,29],[-74,533],[289,476],[-114,888],[102,470],[217,289],[-102,583],[202,674],[-93,257],[-457,261],[-333,1068],[83,421],[206,314],[11,752],[-316,416],[118,450],[-103,300],[563,702],[74,394],[263,254],[110,466],[364,-330],[114,-847],[258,139],[290,-286],[79,-371],[523,-1019],[131,-664],[258,206],[65,485],[536,815],[-141,1136],[292,101],[57,475],[-121,356],[44,687],[188,205],[-29,881],[276,727],[-63,204],[479,1136],[69,756],[438,971],[160,64],[28,1397],[-256,166],[192,1164],[473,645],[78,509],[460,-526],[256,300],[447,1034],[161,714],[47,855],[-153,260],[237,461],[158,581],[-101,430],[119,646],[188,376],[382,399],[199,533],[162,-419],[-134,-511],[269,-769],[334,-351],[279,261],[547,24],[241,311],[133,-233],[193,354],[231,99],[150,-636],[-10,-513],[345,-545],[292,54],[223,439],[260,-66],[168,206],[313,-334],[282,147],[129,-285],[419,69],[308,353],[423,-259],[52,-220],[441,149],[143,-195],[420,280],[-131,-881],[276,-1046],[-105,-293],[554,-733],[191,247],[585,1545],[-59,529],[251,216],[254,967],[386,295],[17,61],[42,6389],[55,5627],[32,4323],[61,8357],[5,3312],[44,6792],[-2235,79],[-3432,61],[-99,-60],[-2379,3],[-3600,6],[-2426,6],[-1159,-123],[-2851,-156],[-1115,-169],[-1110,5],[-1592,-116],[-3592,-303],[-1654,-159],[-3279,-390],[-88,-30],[146,-5276],[182,-6425],[216,-7655],[175,-6099],[-20,-294],[265,-534],[123,-686],[42,-914],[133,-517],[-180,-420],[-5,-515],[220,-174],[209,-742],[-28,-366],[-308,-243],[-21,-678],[-276,-121],[-129,235],[-293,-706],[-257,242],[-242,-587],[178,-496],[-234,-899],[148,-414],[-20,-802],[419,-822],[287,-1647],[286,-1101],[552,-480],[20,-265],[423,-1147],[118,-627],[-105,-713],[62,-546],[262,-513],[127,-624],[240,-521],[158,-1333],[155,-487],[15,-553],[467,-1751],[169,-264],[2,-572],[178,-617],[312,-731],[-103,-689],[-208,-594],[14,-605],[-265,-663],[-340,-81],[-142,-564],[-315,23],[-219,-888],[-236,-583],[-29,-538],[-176,-595]],[[51709,11248],[154,-2314],[789,-1867],[-84,-662],[500,-2522],[-297,-1049],[837,-816],[902,-1810],[761,1966],[1291,172],[638,-2346],[754,23285],[376,15820],[358,18949],[255,8421],[301,716],[-316,2862],[186,1288],[-336,1415],[124,1821],[810,1307],[308,1481],[1091,1800],[-198,3531],[127,804],[1082,1756],[281,562],[257,580],[-279,1434],[-721,2399],[-288,1356],[-154,1611],[-1576,-471],[-1392,1010],[-450,2038],[-943,-569],[-730,1179],[66,2053],[-877,-189],[-675,1750],[-5539,-310],[-3928,-304],[-6568,-613],[-434,-1764],[-695,-1331],[-138,-2991],[396,-1293],[-99,-1380],[812,-657],[194,-1071],[-102,-2039],[457,-1252],[-245,-2028],[238,-4467],[581,-2204],[-264,-2001],[326,-3863],[-78,-1756],[352,-2541],[329,-328],[639,-3062],[-19,-1048],[467,-1472],[486,-431],[712,-2473],[-58,-1727],[240,-1186],[658,-1214],[77,-2857],[1149,-3370],[-60,-1693],[-381,-2468],[244,-1857],[-272,-1265],[665,-1887],[509,-654],[1453,33],[806,-723],[261,-1676],[1064,-384],[742,-1268],[168,-1197],[618,-459],[517,-2971],[100,-2572],[-413,-1012],[-133,-1539],[-483,-2150],[693,-1239],[23,-1140],[411,-1945],[660,-1609],[-532,-3334],[462,-709]],[[30964,10696],[3443,697],[2094,273],[3643,593],[1180,-12],[4763,772],[1892,123],[6346,242],[6689,21],[4635,-15],[2864,-160],[2240,-44],[3239,-185],[4135,-192],[5006,-317],[-3,-230],[1830,-106],[5503,-492],[2349,-251],[-22,1395],[308,1089],[497,731],[-187,223],[151,660],[314,80],[131,-902],[139,-34],[44,742],[-24,1286],[496,1513],[137,782],[683,3172],[397,2044],[-205,193],[-388,-578],[-366,-1048],[77,-707],[-254,-1023],[-259,-396],[-154,-895],[-390,-579],[134,-539],[-479,-680],[-107,408],[237,408],[241,1998],[-139,186],[633,1078],[-1259,-603],[-487,-1203],[-295,-229],[-528,-955],[-772,-474],[-213,251],[540,523],[387,680],[317,969],[275,266],[126,643],[196,403],[-361,452],[-399,120],[85,375],[-570,-31],[-358,-404],[-201,-625],[-500,-688],[-90,504],[348,471],[629,1615],[-270,139],[-273,-97],[-1185,-949],[-318,-368],[-198,-590],[-178,119],[-600,-830],[334,1116],[406,420],[189,501],[814,875],[-1100,474],[-22,419],[-224,580],[-340,515],[-619,545],[-585,84],[-136,-124],[-442,-1216],[-173,676],[-254,22],[-236,-477],[-186,-1510],[-285,-1232],[-73,-732],[179,-1557],[229,-667],[87,-780],[-106,-484],[-218,-281],[62,1234],[-405,1151],[-128,1084],[28,1852],[210,929],[86,785],[281,656],[187,1341],[-365,1147],[4,208],[1535,-116],[378,144],[348,-501],[573,-536],[580,-304],[371,194],[22,972],[375,-228],[722,474],[128,-339],[-344,-537],[240,-454],[971,-673],[1054,-286],[583,392],[221,398],[-373,473],[-63,983],[528,-424],[-217,1231],[-423,757],[260,400],[155,793],[-39,731],[-665,338],[586,391],[273,817],[-167,334],[255,751],[-180,439],[-711,-346],[-266,30],[210,689],[270,207],[614,-245],[167,559],[344,-2268],[30,-951],[-91,-3446],[78,-259],[505,-872],[407,932],[347,311],[74,-480],[-362,-469],[-178,-707],[712,345],[-6,-553],[-257,-35],[131,-990],[392,501],[336,747],[577,1685],[11,371],[257,748],[13,517],[-199,1232],[209,746],[48,1181],[-539,101],[131,699],[274,771],[-119,893],[-308,392],[0,656],[-267,231],[-206,-735],[-268,276],[-197,-219],[-144,-522],[-188,-183],[1,1210],[-603,1441],[-259,173],[73,784],[-405,554],[92,386],[-209,694],[-366,33],[-157,419],[-40,636],[133,395],[-584,558],[-343,760],[-763,30],[-201,-102],[-133,-518],[-156,72],[-78,619],[-485,-496],[-271,-999],[-261,-242],[-67,833],[133,568],[-225,599],[-242,-522],[151,-416],[-166,-896],[-36,-906],[-105,-508],[-296,101],[103,522],[-222,985],[-377,-58],[-243,472],[-309,-714],[222,-406],[-482,-348],[-164,-286],[161,-475],[-355,-680],[44,-318],[286,-157],[567,131],[184,-216],[149,-783],[-543,148],[-524,-245],[-303,-20],[-682,877],[303,252],[173,495],[-138,764],[320,585],[-142,571],[319,551],[-228,271],[-329,-109],[-247,-412],[17,-646],[-305,412],[-331,-137],[-601,375],[-259,-234],[-471,-671],[-898,-282],[-547,-592],[-510,-218],[-668,-1003],[318,1185],[353,254],[225,1207],[343,-428],[467,205],[471,525],[530,740],[679,287],[727,801],[937,369],[1035,602],[270,21],[326,1127],[-228,1162],[-820,-14],[413,405],[3,501],[-473,-288],[-187,87],[-308,537],[-529,334],[32,396],[474,25],[378,384],[160,-815],[206,782],[-49,720],[-232,558],[-345,294],[68,455],[-387,650],[-728,1040],[-175,665],[-431,357],[-489,95],[-359,-120],[-722,-927],[-532,-1130],[-575,-496],[-560,-1543],[-413,-348],[510,1594],[441,1019],[282,1180],[429,1099],[474,410],[515,148],[558,315],[405,548],[108,326],[542,-540],[373,-867],[400,-728],[253,-91],[288,767],[475,570],[109,-428],[-261,-762],[-32,-395],[226,-193],[341,27],[399,251],[-23,-1134],[187,-939],[179,-351],[167,563],[-62,983],[287,827],[-504,559],[-11,686],[308,130],[488,-371],[201,-463],[587,-339],[-45,-432],[-306,-993],[356,173],[348,960],[276,319],[-371,1020],[-407,-10],[-56,443],[136,688],[-203,646],[-435,458],[-225,410],[-659,1821],[-305,611],[66,517],[-260,484],[-499,-143],[-268,-773],[181,-420],[-526,-954],[-21,2416],[-110,630],[-295,-335],[-90,-550],[-98,-1392],[-165,-266],[-278,141],[-514,774],[303,96],[341,1135],[-2221,-208],[-361,520],[-1629,1131],[-228,280],[-116,-485],[190,-320],[-260,-756],[-84,-769],[-206,357],[144,616],[-10,491],[-159,748],[-724,948],[-570,1638],[-725,901],[-210,104],[-343,-574],[-412,-176],[161,-420],[489,-819],[106,-534],[-538,-1430],[-189,-289],[218,-365],[-229,-427],[-343,11],[-28,1106],[368,475],[192,758],[-7,701],[-162,351],[-334,-72],[-213,173],[-7,477],[233,602],[503,451],[-37,616],[100,378],[-871,672],[-906,1096],[-1489,2708],[-695,1751],[-607,2008],[-538,1147],[-127,920],[-331,1519],[-185,3157],[-194,1548],[-246,22],[-45,-390],[162,-853],[-118,-2247],[84,-825],[-231,-1106],[-260,-432],[141,2033],[125,685],[-90,873],[21,983],[-250,1443],[-415,1387],[-269,365],[-197,-39],[-1054,-575],[-864,18],[-450,-263],[-938,454],[-393,-182],[-1201,612],[-1021,799],[-211,-357],[-3470,-7190],[-3765,-7823],[-1789,-3914],[-3589,-7428],[-2227,-81],[-3380,-304],[-7169,-621],[227,-3274],[-1654,-4972],[-1236,1685],[-158,-1185],[293,-654],[-393,-1195],[-2200,-453],[-5676,-1076],[-4649,-888],[-1053,-294],[-1000,133],[-287,-728],[-500,1135],[-621,-115],[-454,450],[-1334,524],[-667,942],[-768,664],[-222,-526],[-3742,1868],[-2194,-213],[-3597,-471],[-5,152],[-4658,-837],[-3266,-661],[661,-6543],[943,-1010],[330,777],[985,-68],[860,-1305],[-143,-442],[388,-1509],[-117,-943],[516,-1142],[797,-650],[404,-1135],[618,-46],[658,-941],[2079,329],[1106,29],[496,-1148],[891,-590],[217,-605],[424,230],[688,-1037],[184,-860],[624,-14],[253,-771],[1044,-703],[851,604],[389,-579],[537,-1963],[276,-244],[-142,-1316],[191,-560],[515,-42],[308,816],[555,-1314],[-88,-491],[1709,-1942],[481,1024],[-295,825],[20,947],[670,182],[508,-320],[520,-781],[620,-2022],[629,-836],[758,-486],[474,184],[369,-737],[717,394],[181,1252],[1061,-342],[1518,-4919],[766,-1078],[491,-372],[347,586],[523,-207],[-219,-1827],[555,-1643],[-104,-1760],[367,-1419]],[[36873,164],[4199,-148],[3315,7],[3862,171],[4818,386],[11624,-580],[-522,819],[626,3785],[-744,1848],[-456,2226],[-20,1299],[-782,1428],[562,2437],[161,1750],[475,1144],[-99,2931],[-572,3397],[-701,537],[-185,1368],[-838,1462],[-1210,462],[-287,1915],[-914,843],[-1656,-3],[-576,757],[-746,2164],[317,1435],[-268,2122],[448,2801],[79,1927],[-1290,3866],[-72,3256],[-743,1398],[-267,1356],[76,1966],[-796,2833],[-552,502],[-523,1688],[27,1194],[-711,3502],[-373,381],[-386,2902],[99,1998],[-350,4408],[311,2272],[-649,2525],[-246,5092],[290,2304],[-514,1437],[128,2320],[-215,1224],[-922,768],[121,1569],[-444,1482],[173,3403],[799,1499],[505,2000],[-5503,-439],[-7149,-498],[-398,-2455],[199,-1371],[429,-18620],[199,-11223],[-173,-2085],[-404,-633],[-263,-2033],[-975,79],[-516,2407],[-469,-706],[23,-2201],[363,-2347],[544,-1602],[308,-1936],[-602,-2134],[274,-2478],[-522,-2596],[-1,-4017],[-419,-822],[760,-6355],[421,-718],[818,-2889],[-326,-4285],[585,-2435],[-49,-2110],[-1338,-6165],[312,-2126],[113,-3455],[449,-2560],[-665,-1494],[636,-3538],[-47,-3995]],[[25520,31],[1993,-31],[13272,1305],[7560,292],[-113,3644],[1708,-518],[368,-3086],[6209,550],[1397,-418],[13170,156],[11618,284],[63,1440],[716,32886],[-149,22450],[-1521,634],[494,6399],[-1030,1421],[-1345,-1718],[-2582,351],[-2171,2496],[-1651,-3167],[-401,569],[-518,3305],[-854,-70],[-1134,-948],[-909,-105],[-185,2484],[-935,-1227],[-2098,2653],[-2057,-2256],[-57,-3856],[-1100,-147],[903,2698],[-517,4207],[-2208,-1228],[-1437,856],[-1131,2332],[-3357,-2546],[-1970,921],[-861,1664],[-1419,-1292],[-1793,0],[-920,1166],[-1276,-71],[-458,1227],[-1259,35],[-456,-5229],[-2134,4133],[-1623,4662],[-1376,-488],[-1425,1904],[-454,1557],[-46,2449],[-895,128],[-1237,-2127],[-1351,1186],[-1248,2685],[-945,955],[-510,-1601],[-547,1637],[-1059,285],[-1654,1236],[-1543,2076],[-2824,3232],[-677,1967],[-477,-939],[-975,1132],[-2439,1037],[-675,2350],[-41,-2829],[-2446,-8476],[8595,-10258],[-2305,-7852],[1266,-30416],[1446,-40137]],[[39812,8348],[1883,-4899],[1437,-2125],[2207,-1324],[2821,668],[1517,1678],[-1402,2445],[-298,2915],[-354,1255],[-1371,3458],[-970,738],[-502,2829],[68,634],[1009,2241],[294,2574],[-559,2591],[-353,3057],[518,1617],[1115,2668],[1009,3602],[1538,2783],[162,1700],[567,1517],[371,3290],[-290,3775],[5,2998],[196,2019],[-109,1755],[209,1639],[1404,2546],[761,2603],[127,4055],[1815,4898],[1346,3188],[803,1517],[989,831],[1265,-959],[517,8498],[-561,-1101],[-949,693],[34,1798],[-291,1143],[875,329],[-624,1236],[-1891,1067],[-491,1202],[448,1661],[1088,-1555],[722,-119],[843,1699],[713,-1962],[355,492],[-23,2447],[391,7291],[-379,5],[-711,9],[-4104,41],[-7660,-213],[-5090,-439],[-576,-20186],[-811,-28385],[-1062,-37089],[9,-5339]],[[71808,1485],[59,8765],[-272,9],[45,6057],[51,8603],[25,4304],[42,7358],[62,10943],[41,6538],[-24,9974],[-20,7639],[51,8768],[52,8766],[-4771,89],[-4137,28],[-3396,-20],[-3572,-39],[-3926,-113],[-2295,-88],[-3778,-107],[-157,347],[191,1068],[-209,250],[23,686],[418,998],[353,493],[-4083,-199],[-2444,-133],[-3310,-206],[-2431,-172],[-139,7908],[-3977,-286],[-2201,-192],[227,-10337],[166,-7387],[240,-10871],[187,-8264],[223,-9999],[168,-7196],[204,-8794],[191,-8481],[203,-8381],[187,-7800],[137,-5621],[157,-6390],[2100,208],[4616,389],[5101,363],[3054,180],[50,136],[4346,177],[3329,93],[4318,107],[628,57],[4734,22],[2269,-54],[3565,-97],[3329,-96]],[[28767,0],[817,84],[1370,61],[1025,66],[749,-59],[377,74],[1196,32],[1274,-27],[1625,68],[2207,46],[654,-29],[555,18],[2569,-128],[1212,-113],[96,5058],[98,5137],[100,4432],[40,2017],[71,4098],[65,3913],[45,3502],[78,2873],[1565,2593],[2242,3664],[1649,2675],[1491,2419],[2199,3500],[733,1190],[1532,2417],[1705,2665],[1158,1812],[2347,3628],[1582,2428],[1313,1995],[1885,2845],[1308,1963],[1804,2692],[135,1503],[176,196],[235,757],[401,477],[186,713],[72,541],[296,625],[35,796],[214,4],[383,450],[193,325],[233,110],[211,449],[53,494],[-124,111],[-331,988],[-143,82],[-140,429],[-382,452],[-65,250],[37,720],[-348,1213],[186,614],[-101,233],[169,855],[5,381],[103,390],[-115,162],[-10,428],[82,397],[-68,247],[107,402],[-136,276],[-231,938],[-6,326],[-395,354],[146,763],[-109,428],[274,283],[79,1206],[-77,767],[220,612],[248,46],[179,-151],[345,96],[187,871],[107,290],[26,713],[-242,697],[51,376],[-387,452],[-349,-2],[-122,261],[-2432,1149],[-2532,1167],[-3213,1432],[-2899,1246],[-100,-915],[-77,-334],[-90,-247],[-111,-128],[-167,11],[-17,-140],[86,-203],[184,130],[27,166],[183,567],[48,268],[94,-177],[-101,-347],[-6,-205],[-77,-204],[-220,-243],[6,-135],[-163,50],[-121,231],[-89,81],[-17,-704],[-28,-231],[-151,-580],[102,-208],[12,-357],[-157,-1205],[-69,-333],[-62,-124],[-151,-797],[-214,-611],[-766,-1775],[-430,-545],[-292,-530],[-392,-413],[-211,-467],[-235,-324],[-270,-305],[-235,-129],[-234,-277],[-554,-980],[-295,-265],[-150,39],[-22,294],[-82,-106],[-65,-312],[-149,86],[-97,316],[38,258],[-129,82],[-253,-146],[-38,-101],[-229,-32],[-84,-349],[132,-379],[8,-343],[-288,-1233],[-193,-528],[-294,-405],[-121,-7],[-173,86],[-302,15],[-17,90],[-310,25],[-155,134],[-99,265],[-219,-355],[-385,-57],[-190,-159],[-141,-55],[-142,-179],[-103,-8],[-136,-152],[-125,-51],[-51,72],[-308,-425],[-107,-29],[-217,-777],[-52,-417],[-99,-209],[-65,33],[-160,-185],[-154,-309],[-92,24],[-184,-372],[-108,-155],[-112,-35],[-80,-119],[-192,-109],[-124,-202],[-56,38],[-188,-77],[-315,138],[-87,181],[-113,-11],[-251,-197],[-199,29],[-207,126],[-200,-281],[-160,-14],[-243,-260],[-120,-13],[-246,68],[-191,-140],[-172,44],[-545,57],[-590,232],[-129,103],[-84,-77],[-180,-782],[-218,-207],[-92,-132],[-196,22],[-69,-111],[-53,-250],[172,-1052],[10,-283],[-175,-587],[85,-679],[10,-431],[-113,-229],[-22,-175],[-127,-130],[121,-1041],[34,-381],[7,-429],[-73,-721],[-152,-142],[-124,-227],[-192,-25],[-68,193],[-114,-202],[-263,-250],[-122,-225],[-95,-282],[6,-263],[115,-632],[160,-71],[-95,-337],[-65,-40],[-23,-377],[-75,-300],[-93,-165],[-167,29],[-77,-111],[-184,-36],[-432,-962],[-132,-556],[-54,-46],[-117,-346],[-112,55],[-95,-166],[-231,-174],[-202,-537],[-41,-557],[-63,-239],[-219,-376],[-170,-401],[-165,-306],[-121,-1043],[-74,-228],[-260,-179],[-114,-331],[-9,-149],[-103,-219],[-52,-311],[-208,-539],[-222,-384],[-301,-393],[-50,23],[-108,-182],[-43,-253],[-121,-191],[-95,-260],[-38,-768],[-48,-420],[-133,-746],[17,-218],[63,-130],[-30,-406],[-83,19],[-102,-165],[117,-382],[54,-318],[152,200],[63,203],[74,-57],[136,-309],[100,-517],[45,-728],[56,-604],[-62,-322],[-237,-987],[-194,-449],[-133,-99],[-156,250],[-199,-81],[-17,126],[-150,23],[-191,-75],[-201,-232],[-228,-457],[-193,-432],[-113,-405],[-115,-218],[-130,-22],[7,-176],[-91,-169],[-40,-255],[-112,-86],[-35,-137],[-55,-623],[35,-177],[45,-977],[-46,-164],[-135,-675],[-18,-421],[-57,-215],[-158,-54],[-79,-324],[25,-316],[-16,-309],[66,-125],[32,-277],[7,-405],[-73,-933],[-5,-309],[215,-255],[185,-59],[126,218],[20,291],[116,363],[-33,161],[-125,48],[18,355],[53,236],[-38,254],[83,46],[-44,247],[64,123],[117,38],[130,136],[171,59],[76,265],[167,130],[67,294],[204,106],[141,460],[80,68],[176,-28],[-56,-215],[-42,-325],[-129,-21],[-65,-155],[-31,-264],[-124,-391],[-67,-916],[-120,-385],[-93,12],[-154,-255],[-44,-217],[56,-56],[151,53],[-20,-161],[-91,33],[-183,-87],[-198,-207],[14,-236],[137,-285],[-34,-338],[-101,-484],[-149,45],[-186,-304],[-79,-347],[132,89],[11,-151],[147,-183],[-27,-264],[125,93],[152,-77],[91,-145],[6,-151],[107,-172],[93,-32],[168,113],[72,213],[84,47],[272,-257],[320,-87],[267,123],[210,36],[209,191],[239,79],[115,-43],[116,87],[135,20],[36,-89],[-97,-189],[79,-102],[58,-418],[191,-61],[73,-108],[101,77],[-11,312],[-146,12],[-47,188],[113,279],[85,-117],[24,-359],[35,-38],[368,454],[-27,-235],[-256,-203],[-94,-349],[-230,-86],[-70,140],[-147,0],[-36,332],[-41,115],[-175,231],[-104,-9],[-74,-139],[22,-191],[178,-188],[-44,-94],[-230,266],[-176,-101],[-150,167],[-140,46],[34,-279],[-258,42],[-180,-251],[119,-130],[-59,-283],[-224,37],[-57,128],[-27,226],[-188,432],[-38,189],[-116,-14],[-105,-229],[-161,-11],[-197,-95],[-119,-361],[-391,-485],[-59,205],[-316,304],[19,298],[-100,634],[212,211],[-159,296],[49,300],[-96,179],[111,97],[8,115],[145,250],[-127,158],[-26,-211],[-95,-75],[-2,225],[87,139],[30,298],[-30,72],[-210,89],[-185,-427],[-113,-188],[-80,-48],[-99,-230],[-112,-86],[-100,76],[-128,-45],[-84,-318],[-129,-170],[-63,-294],[-103,-240],[-348,-377],[-58,-34],[-175,95],[-143,330],[-75,-76],[108,-508],[179,-1008],[-1,-219],[-58,-195],[2,-170],[-113,-333],[33,-87],[238,676],[136,477],[91,222],[75,-2],[-151,-473],[-188,-655],[-133,-235],[-21,-310],[-110,-310],[-110,-194],[-69,4],[-67,169],[-52,-285],[34,-252],[-71,-480],[-102,-317],[-61,-307],[-168,-325],[-328,-350],[-78,-198],[-257,-420],[-16,-206],[-232,-609],[-49,-255],[-76,-217],[-230,-540],[-123,-116],[-54,-274],[-112,-248],[-110,-120],[-211,-476],[-55,-246],[-189,-455],[-116,-445],[70,-45],[91,-307],[66,-394],[-19,-331],[-93,-785],[-63,-109],[12,-168],[-122,-377],[-77,-803],[-49,-100],[27,-195],[-29,-280],[-71,-249],[51,-1012],[79,-482],[124,-559],[5,-199],[-63,-351],[12,-611],[-30,-386],[-46,-212],[-59,-67],[-46,-462],[5,-223],[-56,-533],[-101,-120],[-103,-233],[-82,-447],[-94,-179],[-84,-408],[-84,-165],[-119,-365],[-178,-259],[-19,-439],[-104,-317],[-266,-257],[-127,-382],[-137,-213],[-235,-440],[-163,-399],[73,-591],[-58,-273],[3,-341],[-115,-409],[-36,-294],[57,-219],[49,-453],[154,-693],[117,-400],[47,-294],[157,-543],[144,-594],[32,92],[-68,224],[-54,300],[95,76],[81,-91],[-17,-373],[69,-76],[63,-463],[54,-130],[206,-22],[136,-172],[16,-239],[-64,-109],[-67,61],[-69,-129],[-67,17],[-66,355],[-94,244],[-28,179],[-96,278],[-34,-101],[233,-818],[182,-900],[106,-805],[1,-272],[-131,-202],[-43,-408],[0,-409],[74,-55],[81,-372],[148,-1095],[44,-535],[95,-958],[-57,-884],[55,-177],[-125,-291],[9,-369],[-126,-643],[8,-157],[-66,-589],[-104,-114],[-51,74],[-112,-246],[-110,-154],[115,-366],[65,-370],[85,-1121],[-35,-382]],[[50705,0],[3587,4476],[1930,2578],[6454,7582],[-8,1123],[-151,1665],[-545,3007],[-893,3830],[-262,2130],[-593,1118],[-377,1340],[-533,401],[-123,-520],[504,-1954],[-312,87],[-362,1609],[-613,616],[-294,626],[-177,2559],[-592,839],[-49,1586],[-286,659],[407,1531],[909,779],[784,-290],[398,95],[1346,955],[606,781],[-86,-1591],[-313,-1618],[441,501],[162,776],[135,2241],[-12,2761],[-286,4151],[-499,4773],[-307,4682],[-183,1764],[-198,3259],[-306,4079],[-116,-283],[412,-7812],[221,-1613],[105,-1765],[-465,160],[265,840],[-299,808],[-319,-111],[-281,691],[308,1081],[-153,876],[41,1149],[-411,1271],[153,1747],[-592,1731],[-316,1421],[-54,1150],[417,365],[-61,1474],[-481,961],[-186,1038],[-506,312],[-196,1312],[-534,271],[-581,1198],[-18,576],[408,841],[209,760],[-320,681],[-163,-948],[-584,-838],[-434,241],[-318,-517],[95,2246],[330,612],[-250,1660],[-570,-368],[-451,1227],[432,1291],[329,1556],[-482,415],[-909,1194],[-285,-501],[612,-1412],[-435,-583],[-708,2041],[72,768],[-994,-71],[-430,234],[-8,729],[992,872],[-652,1834],[-523,899],[-736,3166],[-233,389],[126,709],[-451,1129],[-134,647],[-663,635],[74,985],[-313,1130],[-514,993],[-612,776],[-909,743],[-540,-392],[240,-2951],[915,-4111],[114,-1611],[-296,-1353],[-503,-533],[-1305,124],[-68,-881],[-537,-122],[-489,240],[-571,813],[-473,-455],[-116,-1468],[-693,-1245],[-350,-376],[-235,-972],[-591,-9],[-252,-264],[-265,-1255],[-304,-471],[-294,290],[-1823,-4268],[-471,-687],[-361,-856],[-91,-801],[113,-20],[142,-662],[181,-1870],[-65,-622],[-319,-695],[-296,-754],[-33,-487],[733,-1269],[148,-1463],[591,-1268],[29,-1187],[340,-1177],[531,-1058],[604,-848],[875,-786],[511,-233],[159,-70],[596,-146],[560,-525],[755,-297],[705,-1290],[-329,-1414],[641,-523],[574,-1887],[1651,-2795],[1161,-713],[518,-1592],[584,145],[984,-1060],[-722,-2829],[-1089,-1458],[-396,-1841],[-1095,-1767],[-422,-2504],[-985,-255],[-445,-700],[-100,-4927],[-1019,-1416],[-581,456],[-429,-2071],[-30,-3163],[504,-3542],[963,-539],[843,-3388],[-968,-3274],[-191,-1569],[1581,-1986],[682,-2813],[898,-1224],[624,-1753],[382,-2801],[411,-1571],[1123,-2386],[922,-498]],[[47103,439],[-288,1537],[-844,3926],[-2020,9205],[157,661],[577,-43],[325,689],[323,32],[664,2894],[-13,459],[4546,2553],[2588,1385],[1692,1932],[487,472],[292,-246],[427,260],[148,489],[294,15],[349,-595],[401,-83],[596,708],[294,-220],[566,685],[321,-169],[525,272],[386,513],[189,777],[222,164],[-413,1065],[279,767],[312,71],[386,-334],[234,749],[588,17],[494,850],[237,747],[-288,259],[367,1215],[-211,1203],[131,910],[-125,748],[-332,648],[97,506],[-228,987],[251,293],[683,-105],[407,-877],[352,985],[-262,918],[-279,2532],[382,634],[180,726],[1581,492],[193,-2625],[621,-873],[958,-2431],[440,-1951],[2452,-314],[3727,3738],[-1658,3478],[-1188,4333],[-954,8080],[55,-8],[-882,7364],[-81,492],[-176,2798],[-313,5647],[-41,1351],[20,6153],[456,5360],[615,7601],[480,5761],[-6048,715],[-2148,130],[-4236,321],[-1354,141],[-3548,21],[-3150,-72],[-2208,5],[-1563,-61],[-1923,6],[-1832,-76],[-4,-673],[-572,-2178],[-1779,-1051],[-748,-1107],[-106,-427],[-237,-2709],[-322,-477],[-9,-1251],[-194,-1616],[21,-2041],[442,-1374],[477,-1116],[-521,-1561],[-542,-510],[44,-978],[-243,-1383],[120,-852],[-182,-1038],[64,-811],[-233,-598],[29,-1994],[200,-1357],[-278,-1541],[-1113,-3318],[-1041,-613],[-459,-788],[-452,-1233],[-768,-978],[-411,-796],[-67,-1095],[-266,-1761],[-222,-528],[-666,-929],[-1204,-929],[-537,-1187],[-113,-1012],[-213,-328],[-1391,-363],[-191,-772],[-382,-308],[18,-477],[-753,-1660],[-530,-841],[363,-1819],[-31,-1023],[196,-961],[-114,-738],[83,-1028],[-267,-932],[440,-838],[-110,-1613],[127,-673],[-32,-1445],[476,-940],[-26,-361],[407,-886],[50,-880],[-524,-1565],[20,-548],[-318,-598],[-355,108],[-417,-352],[2,-1091],[187,-1815],[621,-884],[169,-1277],[409,-1277],[545,-815],[614,-296],[198,-628],[359,263],[234,-862],[230,-203],[409,265],[126,-870],[294,-277],[298,-12054],[537,379],[480,-1299],[68,-472],[334,-167],[451,959],[2974,-3240],[636,-737],[3435,-4603],[2346,-3149],[4669,439]],[[30848,2117],[195,-194],[382,126],[822,1249],[300,686],[436,521],[171,1201],[453,1633],[-6,1091],[180,1036],[-112,1295],[186,684],[48,1051],[-139,1210],[71,535],[668,950],[990,584],[817,809],[459,-243],[367,658],[641,59],[525,-621],[632,-100],[1526,-1522],[331,-861],[436,-277],[586,319],[805,-202],[767,-458],[537,593],[471,209],[498,-252],[938,792],[238,1476],[403,-64],[370,-856],[1093,-168],[372,312],[316,-648],[1287,-982],[422,-676],[586,170],[414,869],[790,10],[930,-498],[562,-113],[308,-821],[773,-537],[802,-903],[1254,-559],[1021,-243],[347,-1113],[396,-464],[366,367],[1227,-348],[821,-455],[477,245],[530,-141],[888,-1103],[157,-475],[4720,-380],[6832,-680],[4315,-548],[341,867],[103,840],[435,823],[441,1314],[499,-176],[286,834],[549,-23],[491,936],[43,968],[395,853],[238,1051],[-418,1304],[-218,1062],[58,914],[-241,496],[-559,3006],[34,889],[-195,848],[-112,2204],[-328,940],[-138,1057],[-366,940],[-42,902],[244,1097],[-123,1061],[-560,2030],[-4,435],[-837,1014],[-346,1897],[-290,2780],[-591,1509],[116,1287],[-198,733],[471,1352],[-236,880],[453,846],[391,-503],[548,1014],[184,-437],[460,75],[105,1089],[526,257],[84,581],[-260,1295],[-339,380],[62,833],[337,602],[-161,899],[28,1505],[-127,1168],[-374,987],[63,470],[359,10033],[458,12667],[383,10699],[322,8831],[-5155,761],[-4917,571],[-4123,493],[-5691,327],[-5276,130],[-436,53],[-2820,97],[-5974,-64],[-1287,-123],[-1521,-27],[-5126,-435],[-3772,-406],[-2958,-136],[-2778,-263],[-871,-234],[-1742,18],[-2378,-321],[-3177,-368],[-1893,-333],[-480,-1215],[-156,-51],[-506,-1664],[64,-438],[-86,-445],[44,-588],[-86,-524],[-1,-560],[-258,-723],[71,-1108],[-167,-812],[89,-754],[65,-1362],[-107,-475],[151,-326],[60,-862],[149,-648],[145,-1086],[-49,-678],[49,-482],[-79,-1114],[-312,-630],[-89,-384],[-25,-658],[-268,-192],[-68,-300],[-89,-1315],[-124,-531],[33,-461],[545,-1889],[492,-2267],[255,-2050],[449,-3291],[-78,-1112],[233,-665],[295,-229],[279,-19],[190,-335],[114,-527],[214,-515],[258,-138],[33,1184],[499,201],[-268,-553],[-38,-675],[-108,-273],[18,-492],[-590,622],[-70,416],[-382,885],[-80,-78],[355,-1170],[611,-2914],[154,-891],[174,-1606],[302,-333],[311,-1082],[134,-140],[-2,-478],[-271,244],[-125,891],[-271,348],[291,-1853],[308,-2721],[177,-2297],[187,-539],[-82,-887],[283,-3342],[49,-1342],[87,-848],[-38,-356],[127,-576],[200,-1915],[73,-1980],[262,-2525],[150,-252],[-83,-705],[-31,-874],[108,-1288],[-85,-734],[103,-1032],[288,-1220],[43,-599],[122,-250],[-48,-445],[111,-717],[142,-1714],[-77,-261],[113,-627],[174,-485],[143,-1093],[57,-1170],[-47,-265],[119,-937],[73,-937],[-122,-1149],[181,-634],[361,-837],[-270,-384],[-113,-453],[39,-961],[110,-476],[329,793],[144,44],[99,-390],[-104,-888],[51,-489],[-230,104],[-236,-532],[139,-1007],[42,-610],[175,-296],[-111,-1476],[-278,-797],[115,-466],[98,-758],[65,-1295],[-65,-1037],[-144,-458],[224,-624],[242,-253],[108,-760],[-50,-1541],[-75,-873],[-240,-1852],[-220,-717],[157,-132],[113,639],[254,153],[195,350],[159,522],[250,234],[245,-25],[114,359],[304,131],[-200,-574],[-275,-163],[185,-346],[423,-269],[276,798],[162,13],[711,-259],[-37,-418],[299,-1],[493,-583],[257,150],[343,758],[39,492],[319,728],[815,374],[340,-33],[347,-913]],[[2424,2630],[6151,957],[9064,1160],[5340,540],[5258,494],[7968,361],[9122,169],[4258,-20],[4706,-120],[7450,-368],[356,1502],[2275,2035],[1412,1492],[1281,1661],[703,-313],[601,-1444],[114,-1252],[467,-350],[623,519],[948,137],[875,-568],[457,278],[603,-389],[713,266],[222,-586],[2149,385],[85,981],[677,416],[241,691],[626,-97],[1006,243],[361,1173],[428,-486],[1120,746],[74,949],[803,53],[447,353],[-207,1380],[842,1573],[169,1131],[729,-307],[649,1039],[595,-324],[475,56],[273,1165],[-285,1050],[106,2261],[441,735],[591,2355],[-373,640],[194,1356],[924,1519],[70,2048],[370,-27],[583,990],[-57,603],[711,499],[-289,1928],[666,2291],[532,895],[-393,1658],[400,846],[-497,583],[326,1312],[-151,1418],[392,778],[-138,895],[477,975],[305,-943],[406,717],[-73,1306],[957,434],[-287,3191],[391,796],[445,23],[132,1001],[-567,196],[246,1238],[21,1657],[401,866],[312,1932],[-190,834],[271,718],[23,1259],[374,432],[26,1820],[322,1092],[-377,677],[234,2658],[-472,876],[23,1012],[508,1145],[628,447],[499,1461],[-132,759],[174,1794],[678,-199],[125,1800],[413,694],[19,878],[542,2174],[-329,671],[1192,751],[-6,632],[926,664],[92,1834],[1019,1637],[-165,2335],[1360,1300],[-4171,781],[-7290,1215],[-8657,1194],[-9043,950],[-3743,310],[-6560,431],[-6839,295],[-5361,105],[-8390,-46],[-6408,-225],[-6681,-388],[-4948,-394],[318,-15310],[313,-15384],[-8741,-883],[-6059,-773],[-7739,-1185],[499,-12044],[624,-15675],[702,-17498],[599,-14934]],[[13518,5660],[5599,-1764],[4087,-3896],[-339,18063],[3678,298],[7616,464],[3545,60],[4147,147],[6304,89],[8283,-134],[3716,-212],[4964,-104],[8963,-572],[4870,-490],[669,1705],[407,313],[142,1797],[633,986],[242,-461],[1168,800],[394,1081],[-207,1339],[679,719],[239,4681],[-380,474],[648,1415],[84,1063],[478,807],[105,1005],[942,157],[279,1177],[1003,-288],[720,603],[610,1113],[273,1111],[-777,525],[-901,2163],[-313,1390],[-257,2442],[-492,1569],[-740,1144],[-517,2487],[-1310,1869],[202,1330],[913,2719],[-643,3005],[-817,562],[-349,3105],[102,2728],[421,1745],[491,-453],[916,1119],[207,4252],[403,560],[859,117],[428,2124],[994,1415],[390,1553],[982,1147],[700,2376],[-827,1028],[-511,-63],[-408,1438],[-991,743],[-1365,2603],[-1021,1024],[-173,846],[-12,164],[11,831],[6,467],[-143,298],[-793,701],[-533,707],[-326,148],[-333,-241],[-809,921],[-435,357],[-421,1246],[-775,-763],[-1411,-201],[-1084,761],[-692,1122],[-886,2525],[-4691,384],[-5133,301],[-6443,313],[-6930,140],[-5777,-80],[-5617,-94],[-9489,-384],[-5834,-298],[-6276,-492],[-7821,-825],[617,-22475],[280,-10283],[389,-14266],[344,-12809],[534,-19945],[326,-12388]],[[82380,0],[651,16992],[329,9867],[305,7628],[363,8520],[612,15148],[559,13948],[-71,2309],[754,1386],[238,1069],[39,1295],[488,1201],[-294,1936],[548,2893],[-5493,821],[-8701,1046],[-6011,599],[-197,610],[-1126,1426],[-675,191],[-609,-301],[-1043,598],[-1562,471],[-468,-460],[-503,600],[-437,1426],[-1300,331],[-1595,738],[-1018,1168],[-983,700],[-389,1052],[-715,156],[-1183,653],[-1008,3],[-531,-1101],[-748,-206],[-535,870],[-1637,1275],[-400,832],[-476,-391],[-1392,233],[-468,1098],[-514,88],[-310,-1877],[-1199,-995],[-634,330],[-601,-259],[-687,-748],[-975,597],[-1027,270],[-747,-399],[-555,360],[-419,1103],[-1941,1962],[-806,138],[-667,799],[-818,-68],[-470,-833],[-584,316],[-1044,-1021],[-1265,-732],[-855,-1203],[-92,-682],[175,-1544],[-66,-1339],[-238,-870],[138,-1652],[-232,-1318],[5,-1390],[-583,-2076],[-220,-1529],[-557,-658],[-385,-870],[-1050,-1582],[-488,-157],[-246,250],[-160,12],[-622,737],[-276,-63],[-290,-434],[-596,-1176],[-453,-1592],[-318,-556],[-1215,307],[-567,-363],[-101,-701],[-162,-335],[-540,336],[-180,488],[-397,-343],[-682,1149],[-494,-394],[-210,-554],[-315,-1171],[-359,-198],[-267,474],[-144,544],[-185,118],[242,-2392],[110,-2381],[136,-4447],[-49,-1338],[104,-340],[236,723],[-87,194],[197,1602],[-153,2159],[-30,2077],[41,996],[534,272],[123,-693],[382,-676],[326,311],[261,680],[75,-538],[-529,-813],[-20,-453],[-314,-471],[27,-637],[348,-487],[71,-879],[-196,-1065],[-210,-749],[322,59],[-61,-1507],[133,-672],[658,-330],[158,144],[112,866],[172,-531],[-388,-1064],[-547,-929],[-142,541],[-664,118],[70,557],[-489,-393],[-38,-221],[-582,-741],[-51,-528],[40,-1340],[-201,-2233],[203,-721],[186,378],[-85,618],[342,1001],[337,394],[81,-525],[-267,-1177],[389,-175],[435,-475],[789,-565],[367,-496],[-211,-278],[-779,-71],[-128,-467],[-451,-50],[25,-725],[-122,-552],[-348,-314],[-479,-224],[-314,481],[86,652],[-33,961],[102,623],[-298,425],[-242,96],[115,-1575],[64,-1712],[-5,-1845],[-184,-3427],[-111,-1052],[-206,-1119],[-208,-62],[-170,-1317],[-164,-284],[-139,-4051],[29,-1325],[-210,-2551],[-197,-1502],[-53,-1523],[-212,-273],[-245,-824],[-26,-981],[-512,-685],[-203,-1029],[-375,-207],[-226,-966],[-217,-2366],[-105,-2372],[69,-708],[-331,-2026],[338,-544],[121,-585],[-109,-930],[229,-452],[58,-835],[195,-691],[-563,-1551],[43,-444],[283,-46],[518,313],[152,419],[405,25],[1000,1660],[508,731],[461,421],[636,769],[422,22],[1014,1341],[90,446],[430,711],[479,195],[230,231],[885,233],[101,158],[400,-70],[262,248],[816,-226],[523,450],[63,281],[444,223],[307,-410],[249,485],[637,173],[279,417],[905,190],[321,-66],[368,120],[217,-164],[709,-1469],[-120,692],[449,127],[193,594],[232,328],[185,928],[-61,706],[133,419],[297,213],[-56,-1128],[69,-359],[389,-124],[268,91],[64,703],[286,240],[383,1633],[169,-817],[-451,-1285],[-35,-342],[139,-759],[682,-553],[226,21],[167,684],[-320,372],[-79,554],[586,2549],[301,600],[74,1059],[452,1331],[-27,448],[-366,48],[-244,1054],[-430,1037],[-330,1559],[-141,1281],[-293,360],[-151,-148],[320,-2621],[25,-825],[-386,660],[-47,-1080],[-194,293],[-3,442],[223,1338],[-218,355],[-256,1250],[-169,406],[-71,644],[-303,399],[-780,1879],[-457,1995],[-536,1185],[-156,1036],[-262,1111],[-37,427],[280,486],[527,-60],[1613,-1269],[322,-392],[316,-596],[-264,-146],[-374,318],[-668,865],[-725,609],[-370,-47],[-187,-687],[152,-801],[361,-1005],[422,-1827],[732,-2023],[724,-894],[708,-516],[331,-463],[317,-2041],[966,-2651],[365,-184],[20,683],[242,-304],[-164,-1978],[-207,-1181],[536,746],[225,447],[84,693],[44,1365],[172,820],[177,1343],[-237,581],[-441,-246],[-380,1228],[-153,163],[-495,-1181],[-68,405],[262,725],[286,2723],[-8,403],[-235,225],[-238,-631],[-319,-1599],[-131,485],[-25,675],[122,561],[387,475],[-421,1298],[486,-436],[737,-1043],[149,1586],[240,221],[-516,3585],[164,619],[-178,662],[-293,268],[219,1008],[26,475],[-259,557],[-715,-727],[-230,-395],[590,-2179],[-574,396],[-366,684],[-82,746],[-155,470],[-7,794],[212,834],[-269,703],[57,603],[-291,504],[-225,-924],[-125,-1311],[13,-662],[279,-592],[46,-1316],[-51,-614],[-258,-559],[-282,1882],[-387,659],[-334,347],[-323,2114],[-157,585],[-251,433],[-503,252],[198,303],[-89,641],[628,-775],[289,-229],[-455,1616],[129,339],[275,45],[142,955],[239,-13],[-127,-726],[122,-275],[-28,-1071],[90,-327],[387,-615],[49,948],[461,-694],[222,866],[228,239],[224,890],[354,-399],[329,-645],[804,-2238],[218,-919],[141,-1015],[16,-1054],[811,1400],[143,112],[314,-436],[-262,-692],[198,-556],[356,-400],[309,-165],[161,-723],[-80,-897],[-293,-1095],[21,-1217],[-186,-1013],[-167,-1538],[299,-578],[283,973],[71,-1027],[-169,-710],[-494,-539],[-133,-536],[143,-190],[326,-1460],[-45,-909],[-159,-729],[78,-1009],[171,-693],[280,-465],[126,-455],[67,-1054],[141,-878],[408,-685],[329,-130],[270,-376],[61,-769],[148,-326],[-268,-348],[-157,323],[-621,-1134],[-286,-709],[-187,-922],[-33,-1041],[32,-864],[-80,-638],[-539,-635],[-124,320],[16,578],[-192,270],[-33,417],[90,942],[225,608],[429,618],[309,1343],[-267,-186],[-245,-788],[-748,-1247],[-313,-1157],[-52,-708],[20,-1496],[631,-241],[320,47],[254,684],[252,-1254],[-136,-820],[-560,-952],[-318,-654],[-379,-296],[-280,-1213],[82,-457],[-229,-123],[-296,755],[-284,149],[-239,-295],[-80,-467],[195,-674],[-45,-503],[-313,-401],[664,-782],[170,458],[133,728],[267,-396],[357,839],[235,294],[186,-368],[-90,-1825],[-181,-799],[-352,-555],[281,-163],[500,835],[188,-200],[74,-511],[-138,-1199],[-230,-331],[-108,-530],[-34,-874],[-198,-220],[44,-463],[214,-830],[-264,-828],[-393,-359],[-174,163],[-439,1403],[-183,-19],[-79,-572],[195,-561],[-229,-845],[-165,-217],[-143,-1051],[-373,-753],[-121,-629],[255,-841],[-105,-515],[-439,2],[-39,-483],[328,-332],[405,189],[-225,-1181],[192,-9],[5681,383],[3005,284],[3775,18],[5910,66],[5615,-99],[6857,-371],[5115,-413],[6817,-759],[7869,-1119]],[[51618,470],[-346,1060],[-100,956],[496,529],[318,-683],[-52,-1293],[483,71],[234,1202],[-47,923],[-718,1104],[-173,795],[-27,1333],[1063,690],[-25,601],[-616,903],[-259,656],[111,1017],[221,334],[712,-581],[197,573],[-490,681],[235,543],[716,826],[-120,402],[-501,-372],[-463,-1214],[-217,1208],[246,1032],[674,542],[333,-431],[291,724],[-279,425],[-96,901],[187,370],[755,261],[-27,880],[-314,509],[-338,1775],[-526,-703],[-831,895],[-480,290],[38,1544],[529,173],[613,-832],[458,333],[-328,1110],[-416,489],[-181,765],[241,762],[-308,689],[-584,195],[-236,531],[-118,1287],[-650,1117],[214,771],[-380,444],[-128,-1094],[-512,429],[-173,1494],[163,614],[618,-365],[85,666],[-918,-16],[-276,885],[-17,2239],[-647,27],[-352,-604],[-195,793],[321,651],[653,-282],[158,677],[-364,676],[-738,315],[44,2128],[435,1153],[-331,804],[-444,481],[399,710],[-79,1029],[-412,337],[-854,-91],[-27,805],[516,786],[66,576],[-363,1561],[642,1196],[3,690],[-746,1002],[5348,-193],[4036,-226],[5426,-413],[5009,-480],[-256,1470],[-428,3555],[-261,891],[-91,1899],[284,1434],[36,990],[740,2169],[755,1202],[25,1149],[306,1177],[292,462],[37,2005],[174,763],[500,1075],[342,-414],[79,241],[-343,595],[-316,221],[-84,-309],[64,-465],[-491,341],[-520,-99],[-167,166],[-297,-213],[-134,-293],[39,-574],[-97,-424],[-200,-39],[-356,278],[-228,-21],[-392,-623],[-232,-147],[-424,211],[-475,-131],[-396,-1412],[-593,-887],[-401,-302],[-504,-241],[-485,-104],[-345,107],[-468,907],[-625,1959],[-754,1450],[-234,796],[-28,1142],[216,901],[371,628],[439,326],[773,90],[382,480],[670,328],[246,-4],[424,-315],[712,-190],[422,-341],[708,-1139],[279,-705],[184,-819],[334,207],[104,617],[316,380],[244,103],[49,-322],[303,-967],[86,-662],[159,325],[-268,1219],[152,345],[131,-611],[286,-113],[191,-347],[8,-712],[147,98],[308,556],[-371,1020],[-31,624],[-305,250],[-112,404],[54,459],[-112,230],[-207,-393],[-280,-211],[-284,9],[-224,262],[-129,393],[-23,777],[201,932],[120,244],[472,71],[521,-499],[67,258],[-175,715],[472,944],[237,154],[473,-157],[177,-290],[260,-1035],[12,-1439],[195,-594],[316,-231],[184,-304],[223,-1254],[560,474],[13,513],[343,-498],[225,22],[55,340],[-262,322],[-300,-21],[-186,445],[152,1124],[450,-78],[183,459],[-112,393],[-200,107],[-81,-409],[-276,528],[306,652],[171,-391],[182,415],[464,431],[-213,289],[86,393],[-232,185],[-124,352],[286,995],[-329,-103],[-354,187],[-208,-578],[-206,-312],[-276,-73],[58,436],[-387,967],[-101,461],[-178,267],[-436,45],[-159,416],[-14,468],[211,670],[676,-34],[77,494],[373,626],[-181,153],[-413,-607],[-930,-239],[-321,22],[105,615],[287,545],[-202,196],[-898,-405],[11,959],[321,714],[138,841],[174,390],[555,479],[267,-85],[81,314],[482,434],[194,11],[-128,884],[208,402],[-268,280],[57,255],[261,105],[632,-342],[237,-24],[258,292],[328,43],[8,621],[425,378],[645,-361],[193,289],[92,657],[320,-122],[248,-802],[523,1198],[180,97],[201,743],[-24,461],[-214,350],[454,213],[213,462],[233,-266],[348,-47],[254,492],[-214,214],[-370,132],[-323,677],[91,267],[711,-54],[-269,1296],[-349,-506],[-124,827],[-159,37],[-398,1005],[-19,463],[237,824],[-261,-1],[-350,-793],[-436,-1491],[-257,-335],[6,1035],[-635,442],[-160,1072],[-467,1593],[-181,360],[-234,167],[40,-1039],[242,-489],[331,-1125],[-35,-687],[425,-407],[235,-1168],[90,-1083],[-157,-9],[-33,794],[-166,-87],[-35,-938],[-209,195],[104,1123],[-126,420],[-486,447],[-252,-857],[57,-486],[-319,-295],[-649,-2154],[-138,359],[-643,-414],[-576,-133],[-173,-716],[-431,-355],[-71,163],[-686,-220],[-926,-165],[457,-453],[175,-287],[134,-684],[-80,-555],[-339,45],[51,-738],[-346,351],[-266,-672],[134,-518],[11,-464],[-382,-108],[-71,919],[-181,-113],[-345,-676],[-356,349],[-320,-197],[-1200,-1503],[-387,-213],[-289,265],[-430,-1022],[-272,1052],[155,502],[579,989],[215,163],[581,193],[509,746],[-247,318],[-27,658],[172,612],[-203,640],[103,397],[335,644],[-209,206],[-153,-408],[-264,176],[127,413],[-325,47],[-37,759],[187,701],[350,-130],[-286,1402],[-522,1120],[-175,143],[-538,766],[-325,319],[-96,-249],[0,-573],[-110,-516],[-285,-661],[105,-534],[75,-1495],[-223,-577],[-163,914],[-152,-552],[-412,-877],[-244,-227],[-94,824],[-243,719],[-24,-1389],[-368,-1285],[-200,-168],[-70,773],[-318,936],[-150,-375],[-326,408],[-375,-224],[33,-457],[-214,-4],[-248,815],[250,64],[-15,462],[-173,565],[-236,47],[-204,1046],[76,152],[-60,973],[-368,-70],[-7,599],[-311,470],[-406,-260],[-153,386],[-382,-237],[-47,-316],[289,-276],[-87,-469],[-192,195],[-364,-375],[-160,490],[-422,617],[-506,-918],[-277,-349],[-294,-131],[-302,251],[24,-489],[-89,-549],[-240,106],[-124,581],[-316,44],[-485,-665],[-1130,-336],[-614,-535],[-468,-836],[-24,-730],[188,108],[361,-361],[201,-865],[126,-283],[212,358],[137,502],[256,288],[318,-212],[2,842],[-138,712],[196,193],[45,484],[434,-537],[-159,-493],[181,-656],[-132,-536],[-607,-1009],[-465,-610],[-20,-599],[-287,-425],[-168,-580],[-59,-669],[38,-667],[127,-568],[322,-635],[32,-409],[-131,-557],[-314,-125],[112,574],[-54,359],[-302,534],[48,785],[-209,1023],[-241,-312],[-717,-508],[-390,-65],[-56,-166],[141,-732],[-150,-220],[-248,366],[-432,316],[-439,156],[-121,-368],[-6,-1081],[-265,-1377],[-471,341],[-281,-26],[-49,-242],[102,-1009],[29,-1093],[-82,-330],[-500,-261],[-997,142],[-579,641],[-270,117],[-212,-1005],[136,-945],[117,-214],[178,439],[85,-695],[-202,-393],[-630,-134],[-283,449],[-356,-341],[-187,37],[-63,667],[-104,164],[-911,702],[-511,892],[4,-519],[-259,-357],[-239,486],[-229,-310],[123,1017],[202,706],[234,-303],[441,-179],[-347,649],[370,1708],[502,-422],[247,-6],[-384,781],[80,458],[-757,35],[-395,273],[-717,777],[-377,296],[-405,-10],[-1612,-640],[-867,-291],[-1461,-820],[-1196,-1016],[-1280,-1238],[-1180,-1019],[-718,-482],[-1116,-559],[-574,-103],[-981,332],[-424,-152],[-722,-94],[-469,15],[-651,129],[-879,288],[-1053,284],[-881,658],[-105,229],[-498,-1271],[-143,-1033],[62,-407],[332,-276],[391,-116],[421,-791],[260,-2592],[-95,-448],[-224,-182],[550,-946],[208,-718],[-25,-999],[341,-1040],[-279,-1840],[196,-1261],[-621,-1795],[88,-1506],[635,-1170],[-401,-2558],[273,-1148],[370,-147],[-35,-1161],[550,-901],[846,-3873],[-44,-814],[296,-1390],[-341,-1653],[433,-1184],[-18,-847],[-371,-518],[253,-526],[-84,-1769],[-421,497],[-286,-1673],[51,-648],[-748,-1300],[222,-1340],[-245,-1781],[-577,-802],[315,-903],[-230,-512],[-436,-12],[-359,-812],[-180,-1018],[247,-975],[-90,-541],[330,-996],[-421,-1202],[153,-569],[-783,-2535],[-7,-461],[-683,-674],[-468,-1723],[-241,-262],[103,-8362],[132,-10653],[77,-5902],[5514,257],[4895,144],[4401,161],[5175,85],[4533,-70],[4206,-107]],[[29345,0],[1189,119],[4409,168],[5413,263],[2483,132],[3537,128],[0,-115],[2725,-17],[1662,-60],[-166,1076],[-1032,1983],[-676,1462],[-23,783],[-231,720],[114,792],[293,231],[614,1254],[552,452],[717,1308],[67,487],[359,525],[1148,-50],[318,582],[260,2050],[300,482],[140,932],[334,1002],[20,949],[197,1215],[365,449],[700,2181],[319,1773],[280,44],[257,679],[624,1030],[659,632],[413,1055],[451,695],[114,1129],[297,809],[32,673],[549,856],[761,570],[319,716],[209,936],[453,388],[24,1843],[117,1054],[618,544],[107,774],[-149,482],[841,1079],[-98,640],[560,1097],[520,474],[267,-35],[437,1015],[649,873],[-91,1456],[173,359],[234,1524],[270,202],[32,1332],[155,786],[-186,846],[308,1080],[-225,477],[263,723],[621,756],[170,-76],[886,2011],[-42,951],[454,1693],[291,793],[-2,643],[-285,672],[293,946],[61,1790],[449,573],[487,-220],[513,664],[249,571],[316,136],[110,178],[274,86],[113,409],[-159,448],[-435,688],[-185,-579],[-120,31],[-240,597],[16,388],[123,359],[229,99],[-498,942],[-840,-475],[-187,-587],[-202,183],[240,480],[11,198],[-353,199],[-113,255],[492,150],[240,434],[188,-4],[-183,834],[-268,729],[-244,363],[-466,29],[-296,-97],[-435,-608],[-141,399],[390,294],[262,424],[-22,389],[-355,784],[-543,1983],[-154,115],[-133,454],[119,468],[-70,431],[-26,752],[-299,632],[14,472],[347,1426],[-94,132],[-829,-203],[-378,-423],[-192,114],[229,422],[363,313],[880,365],[525,856],[-39,842],[-123,314],[-170,-201],[-316,1071],[-216,583],[-164,254],[-287,-150],[17,-1246],[-68,-265],[-193,64],[-105,565],[90,1273],[-42,295],[-320,-349],[-46,427],[257,233],[304,620],[46,-670],[176,210],[-163,1495],[-356,-900],[-222,-393],[-100,241],[363,765],[76,357],[-52,434],[-141,211],[-423,172],[185,337],[435,94],[-376,968],[-115,790],[117,474],[-262,110],[82,1036],[192,729],[-74,989],[-642,87],[-788,-621],[-524,143],[-684,-903],[-791,-267],[-83,-478],[-655,93],[-76,817],[-605,700],[35,879],[-128,677],[401,2335],[-114,778],[15,1152],[-241,1290],[59,920],[-256,294],[-356,-228],[-589,210],[-202,-424],[-163,-1002],[85,-1272],[-352,-1126],[232,-659],[-3387,-520],[-4275,-647],[-3913,-628],[-4281,-650],[-3591,-547],[-896,-101],[-3510,-562],[-407,-869],[-214,-1452],[97,-593],[-130,-908],[-356,-1025],[-153,-1404],[-66,-1135],[-215,-1216],[-352,-1049],[-194,-162],[42,-1289],[-136,-845],[213,-615],[3,-1520],[258,-1591],[-45,-621],[289,-1503],[-139,-683],[18,-1022],[-589,-1696],[71,-739],[-188,-1111],[104,-699],[-72,-908],[546,-1837],[258,-1401],[111,-1650],[-138,-959],[482,-1027],[706,-761],[272,-830],[-278,-869],[-604,-550],[178,-846],[129,-1716],[-190,-179],[-53,-1374],[-561,-1413],[-318,-1424],[-112,-2779],[-371,-746],[104,-668],[-253,-675],[-352,-5187],[-509,-7982],[-723,-11174],[-442,-7012],[-638,-9082],[-292,-5047]],[[37613,260],[-21,-260],[4525,288],[1944,84],[4968,360],[3083,81],[5350,85],[1872,66],[373,4896],[779,8803],[551,6800],[894,10837],[630,7742],[429,5031],[259,641],[-91,658],[374,701],[154,2701],[334,1366],[571,1339],[74,1335],[188,162],[-98,1682],[-160,837],[598,494],[285,828],[-252,828],[-675,790],[-454,1033],[151,925],[-81,1617],[-230,1382],[-502,1828],[85,880],[-90,688],[201,1070],[-57,726],[601,1613],[-1,997],[146,657],[-258,1484],[54,602],[-226,1568],[21,1482],[-198,613],[146,815],[-20,1259],[191,145],[360,1000],[229,1170],[81,1102],[-2111,24],[-2850,119],[-4839,69],[-3870,-85],[-5056,-185],[-4013,-69],[82,664],[-288,1628],[-59,849],[704,1448],[81,607],[290,602],[830,999],[108,989],[-136,905],[-334,1135],[77,1013],[127,228],[212,379],[27,48],[-451,926],[-269,942],[-353,219],[-185,509],[-342,32],[-94,-384],[-230,-87],[226,793],[-62,637],[-572,468],[-1168,281],[-1093,-40],[-781,245],[27,-390],[340,-156],[194,-289],[185,357],[347,145],[734,-420],[251,-339],[-100,-705],[-410,-822],[-63,-257],[106,-687],[-93,-327],[-186,391],[-230,73],[-229,-324],[-112,-393],[-53,-731],[-149,-527],[96,-747],[184,-617],[-12,-727],[-250,-1597],[-285,-486],[-270,-123],[-24,-812],[-114,60],[-140,1005],[-135,430],[-101,1038],[-197,584],[-7,567],[-106,398],[-154,1596],[7,875],[-102,1518],[-231,116],[-334,-48],[-100,-269],[80,-438],[-255,-210],[-541,-270],[-225,-265],[-126,423],[-153,-490],[-175,-5],[-364,285],[-18,-1815],[-95,-10919],[-112,-10104],[-62,-4683],[-25,-3939],[478,-7441],[385,-6195],[406,-6809],[628,-10251],[448,-7344],[426,-6450],[775,-12222],[378,-5756],[-451,-597],[-381,-1604]],[[32566,0],[1584,257],[3322,160],[4930,194],[3258,96],[134,86],[4701,16],[3062,-71],[32,6081],[32,8536],[21,4844],[3901,-55],[1663,-76],[5491,-443],[3314,-333],[211,8189],[42,2731],[206,8511],[232,9677],[182,7453],[108,5363],[33,3176],[211,8804],[188,2183],[309,12202],[97,5286],[157,6174],[-4622,435],[-2776,195],[-3977,228],[-165,-115],[-5276,205],[-3530,10],[-3263,-31],[-5993,-211],[-2510,-139],[-4535,-351],[-3328,-331],[33,-2006],[254,-10071],[143,-4644],[230,-8917],[108,-4618],[203,-7744],[259,-9842],[242,-9322],[280,-10854],[181,-6526],[316,-11796],[188,-7298],[117,-5298]],[[31027,15410],[5591,79],[7074,-197],[2794,-5531],[378,2378],[3513,4734],[2577,-1],[3610,-4709],[2611,-3457],[205,-6],[3881,-5534],[2233,-1015],[4270,-2151],[173,8792],[273,14153],[176,9090],[193,10122],[-597,630],[-400,-81],[-332,1291],[361,838],[338,1602],[-152,1072],[175,2817],[-188,1431],[-354,836],[-48,768],[-332,1179],[-12,1340],[-276,692],[92,773],[-55,1872],[-219,642],[92,827],[-507,232],[174,1055],[-314,584],[27,1095],[-406,920],[406,1235],[-335,726],[-113,1686],[-506,183],[-849,1649],[-640,1475],[-388,1326],[-485,374],[-244,999],[-547,198],[-728,1048],[-383,103],[-227,-1133],[-484,-520],[-964,1843],[-60,1606],[-1089,90],[-124,1189],[-331,320],[-291,1007],[148,1682],[-111,591],[-562,713],[477,1168],[-162,1299],[-607,948],[-36,704],[-410,718],[-355,-696],[250,-942],[-326,-1278],[-470,-161],[-247,-895],[-817,1405],[-511,1994],[-5,1447],[-756,1419],[391,2016],[-81,734],[191,1417],[-88,662],[-892,124],[-216,518],[-97,1972],[-199,1291],[-802,261],[-1318,912],[-553,-459],[-170,-1297],[-422,-565],[-710,-1672],[-621,-47],[-583,-935],[-284,-2555],[26,-1350],[-215,-245],[-735,728],[-546,-14],[-356,975],[-490,443],[-230,1022],[-661,376],[-430,-322],[-428,771],[-383,-1033],[-487,-636],[-890,-386],[-511,-733],[-898,435],[-340,1213],[-242,261],[-991,-807],[-127,-1057],[-546,-685],[-178,-919],[-1142,-845],[-925,381],[-1383,-1006],[-158,-542],[-10,-1675],[-487,-1608],[-237,-1665],[-445,-674],[-674,-496],[-27,-1085],[-218,-546],[-522,672],[-1193,339],[-539,-733],[-569,-1193],[-703,1017],[259,-9542],[209,-8535],[358,-11692],[219,-8969],[260,-12128],[161,-7399],[141,-7172]],[[38883,7],[1332,65],[1431,49],[1366,33],[2597,1],[2039,-53],[1843,-87],[63,4789],[33,2487],[72,5422],[65,4879],[169,-175],[244,243],[517,1155],[224,377],[350,8],[106,-408],[193,22],[446,320],[72,-766],[213,437],[219,35],[-28,210],[234,363],[-11,283],[105,856],[257,92],[241,-4],[388,-148],[247,380],[210,36],[245,208],[285,5],[167,-306],[249,115],[359,757],[317,-423],[-6,-219],[120,-278],[243,179],[252,-30],[242,157],[158,-390],[130,279],[-96,476],[152,618],[164,67],[256,-144],[97,121],[-17,708],[-97,164],[414,386],[259,-278],[142,-551],[115,-40],[150,-487],[96,-47],[248,293],[49,466],[118,46],[206,-237],[165,138],[1,543],[145,204],[194,-29],[116,-399],[313,-85],[26,-369],[223,-12],[91,542],[-132,368],[62,380],[158,314],[218,-83],[-16,-691],[161,-147],[213,-738],[21,-396],[176,-246],[75,97],[55,460],[125,378],[120,-221],[143,30],[140,387],[175,-95],[79,-186],[40,-583],[309,98],[-94,517],[196,171],[149,-64],[139,440],[262,-104],[247,515],[55,254],[148,-96],[75,-701],[271,165],[146,-143],[81,-733],[236,-136],[138,67],[373,-288],[67,-250],[374,385],[43,-241],[176,98],[29,-439],[254,-22],[77,-207],[142,-20],[94,-340],[175,128],[92,380],[345,58],[296,-70],[405,-537],[-23,-192],[113,-273],[234,185],[440,568],[191,-13],[137,185],[229,488],[208,286],[334,54],[154,285],[199,24],[181,145],[170,-58],[131,329],[221,-5],[64,-177],[135,155],[277,584],[129,-164],[166,39],[51,-291],[336,48],[55,-276],[155,231],[236,-163],[160,174],[328,4886],[148,2231],[271,4029],[214,3164],[99,68],[228,591],[278,167],[17,173],[372,857],[-41,233],[195,401],[-94,417],[50,192],[-63,400],[99,361],[160,260],[165,-51],[102,164],[-91,381],[242,229],[146,641],[-43,533],[322,396],[1,250],[159,595],[143,-241],[86,657],[-79,230],[155,149],[33,317],[-127,502],[179,580],[-69,563],[42,302],[-201,1570],[-180,410],[49,435],[-135,102],[-69,469],[230,915],[-204,523],[13,581],[290,598],[-35,502],[162,660],[-97,437],[40,374],[-57,298],[-178,429],[-256,61],[-30,363],[-174,868],[-16,583],[42,277],[264,436],[85,274],[-52,186],[-171,-17],[-490,120],[-90,47],[-274,300],[-317,491],[-459,508],[-1221,1555],[-135,262],[-179,571],[-78,100],[-98,-12],[3,-226],[290,-750],[98,-142],[205,-202],[105,-295],[78,-107],[206,-31],[117,-129],[4,-312],[-88,189],[-224,-189],[-166,257],[-357,227],[-236,203],[-36,-181],[144,-693],[29,-386],[15,-449],[-76,-514],[-80,-223],[-105,-28],[-197,152],[-54,-86],[-72,153],[11,175],[-72,330],[-38,344],[-43,179],[-171,145],[-55,-97],[-41,-212],[-121,-113],[-209,-102],[-91,-250],[-75,6],[-27,363],[234,131],[105,153],[-84,169],[-20,152],[33,172],[115,164],[-12,117],[-95,271],[-17,263],[179,231],[321,90],[-52,215],[-55,-30],[-112,129],[79,152],[39,282],[105,-18],[125,166],[296,186],[-49,85],[-157,-99],[-72,65],[-27,410],[-37,194],[-58,93],[-71,-92],[-148,370],[-283,854],[-192,334],[-45,-172],[-162,-30],[67,236],[-25,224],[73,600],[12,296],[-24,131],[-271,555],[-110,161],[-193,568],[-245,525],[-160,118],[-259,477],[-441,745],[-169,214],[-177,133],[-186,68],[-193,20],[-153,67],[-538,544],[32,114],[-1,488],[49,-2],[574,-846],[153,-161],[147,-62],[-455,776],[-257,336],[-418,298],[-234,467],[-231,216],[-253,396],[-33,-129],[130,-240],[568,-755],[129,-134],[-27,-305],[-83,-72],[-81,46],[-150,224],[-136,108],[-235,288],[-192,158],[-80,-139],[69,-93],[189,-83],[11,-199],[-166,117],[-87,-9],[-9,-179],[81,-340],[-18,-129],[-269,111],[-83,104],[-98,301],[-150,183],[-51,-172],[-159,-309],[41,-264],[-96,-260],[-74,148],[-87,-237],[-35,69],[100,378],[78,399],[-17,225],[204,127],[-227,351],[-73,-5],[17,-194],[-44,-176],[-146,254],[-67,-302],[-92,60],[-127,-25],[-44,-78],[-51,-404],[-107,-213],[-114,4],[-50,74],[-92,-122],[40,410],[175,450],[34,162],[-7,409],[111,-21],[270,240],[63,109],[68,244],[-209,265],[67,166],[110,-183],[122,-97],[164,88],[131,196],[23,230],[-286,390],[-79,58],[-631,875],[-80,-107],[-66,57],[-79,-226],[-24,-356],[-60,-155],[-100,-32],[-30,-233],[-91,-112],[-124,-289],[-65,128],[149,272],[56,252],[-30,106],[-235,-235],[-62,140],[92,255],[138,284],[70,229],[-62,529],[96,352],[-37,134],[-143,220],[-194,609],[-62,107],[-202,177],[34,-365],[84,-333],[-68,-173],[53,-351],[-62,-132],[-138,492],[60,94],[2,304],[-86,411],[-46,52],[-155,-77],[31,-542],[-59,-131],[-59,220],[-140,216],[-159,169],[-124,-97],[-111,1],[-45,198],[89,125],[-159,391],[-72,229],[41,89],[174,64],[178,353],[80,-547],[198,-210],[85,-317],[64,178],[-12,384],[19,195],[-166,476],[-132,605],[-295,1040],[-88,162],[-142,-392],[-139,-131],[-99,43],[-166,181],[-161,-95],[-357,57],[-29,128],[-116,-38],[-27,-103],[-120,58],[77,227],[81,123],[99,20],[135,-88],[143,-7],[56,59],[-25,284],[111,441],[72,122],[392,270],[29,280],[-98,385],[-12,331],[-124,606],[-56,444],[-17,301],[-55,157],[-138,1049],[-4,222],[-45,79],[-269,278],[-84,228],[-60,48],[-86,-104],[150,-195],[71,-236],[74,-59],[-21,-163],[-92,-88],[13,-381],[-80,89],[-142,290],[37,131],[-142,225],[-71,-93],[-70,249],[14,129],[-125,62],[-41,-235],[-379,-967],[-116,-204],[-141,-166],[25,234],[156,280],[-9,207],[167,296],[85,345],[88,128],[-133,268],[-104,-2],[-112,-80],[-39,187],[199,88],[240,-103],[74,62],[62,211],[136,-4],[169,56],[166,0],[334,-450],[64,76],[-25,246],[-50,49],[21,464],[-52,141],[69,409],[-78,214],[-132,84],[78,304],[-46,112],[62,241],[7,166],[-56,101],[-240,72],[-49,161],[28,425],[31,172],[97,247],[178,135],[62,120],[-44,199],[-207,-340],[-48,-36],[-40,291],[3,335],[36,121],[182,50],[57,99],[68,305],[46,430],[128,622],[70,650],[122,647],[-42,257],[-151,166],[153,81],[-19,244],[2,413],[137,29],[67,357],[155,38],[-27,290],[114,-118],[56,114],[-61,147],[-9,426],[40,91],[99,-72],[68,158],[-50,239],[106,395],[-9,515],[31,266],[160,202],[177,-4],[110,51],[-35,250],[-109,-18],[-42,426],[31,300],[91,134],[144,-235],[66,-185],[24,-495],[102,-59],[49,267],[53,780],[-313,116],[-291,163],[-204,381],[-209,153],[79,262],[-49,401],[-317,-37],[-134,-381],[-221,58],[-57,-338],[-235,-141],[-197,-492],[-211,-368],[-259,103],[-285,-67],[-71,-255],[-198,105],[-133,-114],[-381,187],[-98,-125],[-218,267],[-297,-212],[-299,13],[-116,159],[-227,-139],[-351,-463],[-47,-387],[-236,63],[-257,-382],[-98,-259],[-176,192],[-352,-422],[-364,236],[-69,-241],[-245,-367],[-84,-303],[-120,58],[-202,-434],[-326,209],[-31,-175],[-239,-34],[-86,-234],[-158,106],[-121,-204],[-194,188],[-133,-284],[73,-470],[-172,-516],[-170,-91],[-68,-840],[-104,-343],[-53,-685],[-140,-199],[-19,-422],[-126,-538],[-269,-346],[-45,-421],[-226,-195],[42,-298],[-174,-419],[-134,-47],[-30,-433],[70,-122],[-37,-724],[53,-270],[-79,-705],[-242,-215],[-46,-656],[58,-733],[-38,-375],[63,-274],[-215,-180],[63,-658],[-140,-400],[-270,-335],[-149,161],[-134,-319],[-226,-45],[-221,-637],[-133,-86],[-54,-315],[-127,62],[-129,-255],[-46,-533],[-102,-247],[43,-238],[-200,-528],[25,-267],[-248,-102],[-134,-716],[-147,-172],[-151,-601],[-533,-435],[-57,-403],[-145,-43],[-159,-424],[21,-321],[-265,-815],[52,-284],[-137,-433],[136,-253],[-221,-125],[-106,-366],[51,-327],[-209,-234],[-64,-301],[-162,-197],[-37,-766],[-130,-387],[-40,-428],[-128,-96],[-113,-649],[-121,-2],[-78,-944],[-118,-973],[-262,-364],[-265,-1057],[-325,-303],[-37,-260],[-266,-380],[-221,-161],[-136,-398],[-100,-506],[-378,-172],[-92,-362],[-359,-211],[82,-273],[-152,-248],[-139,56],[47,-537],[-58,-176],[-202,63],[-50,-474],[-165,-431],[-136,-39],[-29,-360],[-182,214],[-159,39],[17,-346],[-134,-10],[-324,424],[-66,-159],[-201,78],[-289,-258],[-706,-68],[-106,-192],[-277,277],[-276,-77],[-175,-212],[-117,-332],[-135,78],[-317,-366],[-171,75],[-265,992],[-120,-118],[-324,88],[-145,206],[-97,-128],[-304,215],[-128,-75],[-74,615],[-171,328],[-28,423],[-118,28],[-45,491],[-125,192],[0,281],[-111,590],[24,345],[-86,375],[-134,21],[-130,892],[157,378],[-351,425],[-115,-86],[-240,815],[-83,-2],[-197,377],[4,327],[-241,524],[-205,-165],[-195,53],[-61,-152],[-300,-260],[-199,-28],[-255,-447],[-298,-716],[-129,-188],[-318,-55],[-285,-275],[-211,-362],[-103,-450],[-581,-333],[-191,-34],[-196,-174],[-248,-354],[-95,-275],[-248,-244],[-164,-536],[16,-305],[-350,-450],[-171,20],[-223,-373],[-13,-153],[-454,-696],[-113,-425],[-7,-573],[-466,-1742],[-11,-543],[-79,-763],[117,-1227],[-89,-572],[-182,-395],[5,-231],[-194,-342],[12,-279],[-187,-291],[-28,-1004],[-79,-729],[-131,-292],[-148,-118],[-43,-511],[-80,-235],[-218,-32],[-200,-567],[-384,-653],[-131,47],[-342,-443],[-185,-151],[-39,-339],[-593,-1055],[-87,-654],[-232,-596],[-229,-227],[-120,-288],[-128,-61],[-67,-332],[-265,-867],[-236,-265],[-67,-502],[-200,-303],[-267,-91],[-213,-297],[-321,-592],[-76,-549],[-129,-245],[-81,-659],[-244,-1015],[-261,-354],[-159,117],[-133,-349],[-179,-291],[-204,-567],[0,-368],[116,-117],[-81,-585],[90,-173],[2014,348],[1225,214],[2096,329],[1909,248],[1815,210],[2215,207],[2554,179],[65,-4682],[65,-4658],[91,-4036],[117,-5242],[46,-3423],[82,-5699],[54,-3813],[32,-2223],[62,-4429],[39,-3105],[139,7]],[[19164,0],[4606,633],[3033,326],[3791,338],[4486,339],[5422,327],[4973,290],[2951,50],[3393,-22],[4285,-71],[2024,-142],[5042,-234],[6059,-444],[4735,-463],[6820,-841],[398,11986],[395,11923],[531,15183],[347,9519],[351,10129],[485,14272],[268,7094],[238,7088],[350,10363],[-6391,768],[-1142,13],[-1825,185],[-4733,463],[-5071,440],[-3229,241],[-6738,246],[-895,-52],[-6148,10],[-4739,-60],[-6186,-224],[-70,-194],[-4344,-283],[-7251,-645],[-6553,-760],[-2980,-419],[256,-7532],[266,-6437],[504,-14890],[-71,-2705],[376,-10745],[187,-3863],[253,-6540],[312,-9102],[408,-11818],[355,-10399],[142,-3329],[324,-10012]],[[23132,6090],[4050,-2353],[253,556],[826,-789],[709,-1085],[1446,-683],[488,-528],[681,74],[524,-1282],[327,772],[1090,-228],[1156,235],[5095,589],[6221,716],[2411,318],[452,1273],[-307,738],[195,1281],[1318,-1938],[1901,5296],[-186,3594],[7839,109],[3695,66],[2433,-85],[4055,7828],[2025,4133],[4251,8245],[3915,7576],[-63,566],[131,481],[-528,113],[-523,477],[-1318,1776],[-1282,2414],[-862,2019],[-1135,3480],[-1241,3727],[-274,1332],[9,556],[-283,3679],[-186,293],[-102,-1705],[-312,-593],[-534,21],[53,-1058],[311,-1471],[447,-1144],[-144,-188],[-252,527],[-550,1696],[-228,1312],[-30,661],[112,592],[566,832],[444,213],[166,1547],[255,272],[-702,1115],[-110,-531],[-289,341],[246,632],[-703,1319],[-561,555],[-248,480],[-180,1481],[-907,384],[-429,506],[-391,-1547],[-826,904],[-154,428],[-316,1438],[-17,363],[232,858],[-589,988],[-157,554],[-343,280],[-647,1937],[-693,867],[-675,485],[-407,-910],[-323,-381],[395,-1301],[-230,-420],[-130,650],[-463,-604],[-41,523],[129,794],[-16,909],[-436,-41],[325,710],[461,198],[381,747],[105,724],[-201,645],[-749,1131],[-462,159],[-461,-140],[-115,357],[302,403],[-26,566],[-686,263],[-1182,750],[-362,466],[-729,-1431],[-282,148],[702,1218],[-134,551],[-262,313],[-929,1431],[-361,374],[-460,-955],[-152,1041],[-407,104],[-449,-758],[-581,-210],[-488,-872],[-100,671],[-327,90],[-929,-288],[-405,5],[11,628],[1156,438],[542,-207],[671,616],[1,236],[-741,9],[-685,448],[1206,176],[333,267],[153,598],[-64,604],[-564,497],[-532,1010],[255,255],[670,-727],[611,-1224],[-141,1387],[-383,1381],[-1076,1412],[-448,6],[-504,521],[-142,-131],[-76,-1662],[167,-1987],[-536,270],[240,-2281],[-335,633],[-1,2154],[190,1078],[-55,577],[-318,-132],[-890,-1611],[-331,-1754],[-154,-1171],[-13,-667],[181,-550],[-406,-429],[-376,-595],[289,1458],[-105,723],[174,1138],[375,1949],[-150,1202],[304,442],[406,1478],[432,-132],[278,578],[176,948],[-351,768],[-423,1228],[-1098,1404],[354,-2821],[-454,1204],[-178,1371],[-600,1481],[-110,721],[63,374],[-468,-212],[-366,-856],[-757,-1002],[-724,310],[-661,-866],[-75,-2657],[-427,-1413],[427,-987],[10,-951],[-424,-1186],[-657,-2523],[70,-1406],[-1291,-3008],[-252,107],[-910,-1144],[-380,-1079],[336,-695],[-443,-1608],[283,-1239],[-220,-1167],[-34,-1964],[-395,-310],[-330,-2256],[-250,-537],[149,-2139],[-945,-1314],[-631,-1513],[-393,38],[-759,-723],[-809,-1640],[151,-936],[-1222,-1628],[225,-700],[-146,-1141],[-901,-832],[-157,-1552],[-12,-2704],[-658,-593],[-294,-1382],[-457,-1067],[-1105,-879],[-792,-1287],[-36,-985],[-423,-1202],[-150,-1657],[-649,-1043],[-587,-1568],[-952,-967],[-895,-1544],[-364,-1007],[-407,-84],[-436,-2608],[-983,-3227],[-524,-678],[-266,-1784],[-12,-1381],[-468,-1483],[-188,-1365],[-427,-722],[-341,-2998],[-452,-868],[-1667,-16],[-511,-790],[-88,-712],[-1014,-1954],[-791,-701],[-865,-1868],[-421,-360],[-149,-1156],[349,-1024],[49,-1132],[1008,-2059],[1530,-2783],[260,-1542]],[[1027,14127],[634,-14127],[2064,389],[1284,360],[7240,1243],[4862,636],[4284,489],[5316,532],[6937,534],[5280,435],[5818,311],[8922,285],[7817,-40],[6154,-169],[5975,-265],[5532,-367],[6009,-519],[3239,-337],[6053,-681],[429,14164],[624,6619],[1146,11385],[1335,13352],[250,14347],[310,15824],[164,7632],[267,13161],[-220,535],[-702,-72],[-384,-1096],[-546,115],[-561,-535],[-627,-156],[-462,-966],[-1055,-305],[-634,-995],[-677,-1640],[-419,-641],[-608,-36],[-1338,-1981],[-725,-681],[-386,819],[54,618],[-1338,1541],[-944,102],[-1091,-325],[-254,-1240],[-542,-478],[-332,1041],[-453,6],[-265,624],[-807,-34],[-134,1383],[-549,-382],[-160,746],[-1150,-1374],[-238,766],[-1210,762],[-431,-267],[-764,335],[-326,2293],[-479,391],[-843,-631],[-305,2192],[-482,245],[-149,-829],[-734,-1733],[-840,220],[-397,-1453],[-481,143],[-603,-622],[349,-1600],[-972,-440],[-183,1834],[-268,558],[-567,230],[-403,-1284],[-453,-153],[-401,652],[-361,-1251],[-128,-1481],[-229,-340],[-581,709],[-108,1248],[-747,2251],[-525,401],[-17,2198],[-700,174],[-468,-1061],[-161,-1229],[455,-1112],[-235,-1758],[-708,-53],[-118,1160],[-1004,140],[-405,1219],[-620,11],[-437,-706],[49,-1723],[-508,-506],[-679,669],[-369,-194],[-109,-1500],[-757,-1029],[-311,110],[-524,1483],[-366,77],[-507,1689],[-848,776],[-1273,-1395],[323,-481],[122,-2236],[-295,-425],[-824,350],[-513,-277],[-422,-2024],[352,-1470],[-387,-937],[-539,1173],[-752,-601],[-801,-6],[-752,-667],[-410,830],[-1,698],[-1046,1208],[-1065,-2547],[-776,-468],[-559,901],[-905,-132],[-756,-762],[-660,-200],[-747,-1307],[-1243,308],[-763,-85],[-807,-401],[-246,-2755],[61,-891],[-704,-1247],[108,-655],[-689,-201],[-633,-1474],[-303,2399],[-1382,-1202],[-610,-150],[-374,1251],[-1109,-172],[-673,-1285],[-1524,-3875],[-747,-871],[-553,484],[279,-15480],[309,-17197],[142,-7888],[273,-15184],[-5843,-482],[-6454,-674],[-8219,-1079],[-4316,-673],[-4520,-750],[-4204,-763]],[[70405,74965],[-7424,392],[-6046,325],[-1633,-22],[-2632,-72],[-7524,-112],[-4335,-147],[-6982,-616],[-2732,-180],[-6355,-591],[26,366],[-8524,-794],[-6595,-766],[-4596,-644],[-5053,-815],[255,-1315],[950,600],[520,-2610],[422,-402],[430,575],[419,-503],[-538,-1607],[488,-1127],[-211,-695],[-609,-228],[-93,-1192],[647,-160],[62,-1110],[420,-1138],[-429,-855],[-364,632],[-258,-1054],[480,-503],[150,-750],[588,135],[-77,1705],[460,-501],[184,-1068],[-310,-1535],[161,-931],[592,-250],[473,1262],[51,-2353],[1090,-846],[-818,-835],[-271,-965],[112,-1382],[523,-542],[323,582],[665,-357],[319,-1004],[1086,-630],[-38,-568],[-584,-616],[-112,-570],[378,-833],[858,812],[154,-1231],[-619,-1129],[-193,-1161],[558,-897],[129,-1392],[1039,-1232],[-120,-1222],[-928,-1689],[-3,-808],[947,520],[885,-274],[-2,-583],[-826,-1162],[42,-905],[897,154],[283,-960],[-329,-1391],[300,-1659],[-194,-583],[610,92],[331,1077],[444,-1022],[1327,-72],[3871,599],[2138,208],[6304,668],[1856,227],[255,-1136],[-103,-1919],[-252,-2192],[2496,602],[-57,878],[4295,56],[4584,149],[5452,-113],[292,552],[639,-531],[1992,137],[3393,542],[2275,244],[3756,163],[2547,-404],[3238,179],[1837,287],[3289,78],[3054,-48],[3083,-159],[3512,-71],[164,-540],[1992,-76],[2534,-273],[176,107],[7236,-819],[4623,-673],[3172,-415],[107,-654],[3123,-364],[-320,740],[-286,1557],[219,1781],[-466,1837],[342,1820],[-524,351],[-395,-509],[-481,513],[-718,1312],[-1247,5462],[-1069,635],[-266,-1240],[-762,-214],[-333,857],[-499,-63],[-748,701],[-594,1028],[-509,2245],[-485,942],[-502,464],[-700,-8],[-81,-969],[250,-927],[-560,-926],[-1633,2454],[121,481],[-488,1500],[-368,-757],[-527,180],[-161,627],[231,1316],[-269,325],[-427,2163],[-364,699],[-914,-394],[-1029,1001],[-211,861],[-641,180],[-135,935],[-642,1250],[-451,-123],[-185,680],[-879,845],[-437,1314],[-1140,265],[-2161,215],[-618,1144],[-633,213],[-343,1275],[-779,881],[-459,1314],[181,940],[-303,1657],[175,418],[-802,1573],[-1010,332],[-390,-712],[-906,1291],[-263,6916]],[[21725,12581],[429,-12581],[2203,323],[706,310],[2156,258],[327,-97],[1863,303],[649,-77],[2662,364],[5690,518],[164,167],[4740,432],[4162,304],[3341,222],[4046,243],[354,96],[3825,203],[4160,167],[1649,30],[126,-160],[6269,62],[4408,1],[4776,-70],[94,11559],[93,12454],[91,14047],[80,10009],[78,12050],[91,14034],[85,12490],[51,9549],[-5088,98],[-2042,101],[-4322,9],[-3423,-2],[-2976,-55],[-5017,-261],[-5472,-243],[-4530,-227],[-3829,-214],[-3066,-208],[-4659,-422],[-4100,-356],[-6791,-650],[-2055,-252],[-4817,-708],[199,-5993],[361,-10601],[248,-7584],[392,-11622],[223,-5660],[480,-14299],[251,-7395],[305,-9629],[386,-10928],[-26,-109]],[[12326,0],[4734,697],[5937,716],[7646,720],[5924,347],[3757,149],[6224,122],[5611,-33],[3473,-91],[4731,-221],[6258,-443],[5043,-475],[8925,-1106],[2,1647],[715,2909],[-13,1597],[243,305],[628,3054],[27,1752],[-489,2670],[159,631],[353,3842],[-197,1378],[317,635],[173,1946],[-236,2997],[80,1308],[884,2977],[272,3020],[420,852],[73,1540],[406,1229],[1026,4321],[178,1602],[456,1441],[-21,3221],[533,4758],[-84,1454],[227,1825],[33,2755],[261,1240],[55,1830],[-128,1427],[759,3461],[88,1762],[-258,970],[342,2823],[-138,1531],[92,1404],[619,1839],[-16,874],[1116,5240],[796,1340],[156,3265],[669,4580],[-179,1889],[280,2937],[-7287,1168],[-2828,406],[-6020,714],[-4257,410],[-9742,598],[-5123,197],[-6049,46],[-8096,-69],[-8226,-364],[-7282,-543],[-5928,-591],[-4250,-509],[-7449,-1071],[530,-14015],[556,-15040],[668,-17449],[592,-14738],[220,-6914],[473,-13475],[556,-15221]],[[21850,48368],[1023,1005],[540,-1057],[1,-1181],[-311,-1637],[573,-1150],[290,209],[474,1586],[1934,-620],[194,924],[-134,1546],[745,34],[448,-1296],[-512,-1746],[690,-1497],[231,1427],[577,826],[1082,-1162],[637,433],[1941,3081],[702,332],[414,1900],[771,-439],[466,-3270],[841,-900],[731,-103],[913,-1657],[723,59],[489,2513],[420,784],[507,-684],[438,303],[-223,1410],[714,270],[255,-2081],[1049,-191],[-204,-1287],[44,-2019],[887,-591],[333,-1175],[766,-1442],[391,-2116],[919,1884],[13,2779],[1108,1626],[736,-119],[532,551],[366,1382],[370,-1169],[1012,-291],[262,-602],[269,-2127],[55,-2772],[692,-1582],[410,-1919],[525,-208],[467,726],[751,-865],[392,-945],[487,-3271],[446,-857],[1116,-552],[309,-1149],[665,-899],[105,-1047],[-282,-1593],[-120,-3249],[565,-876],[447,240],[840,-329],[589,148],[465,1228],[601,452],[2303,-2909],[734,54],[584,-554],[938,287],[-160,-1647],[450,-801],[-299,-1135],[-679,-152],[-103,-694],[538,-1213],[-38,-1052],[-718,-2228],[969,-1565],[877,-1365],[754,1472],[706,887],[1517,-543],[653,-908],[291,679],[58,1384],[873,571],[584,822],[340,2106],[658,2012],[49,2140],[214,678],[1790,1160],[1174,-572],[1478,977],[248,1158],[712,825],[185,1340],[1284,941],[304,-354],[408,-1581],[1138,-638],[669,891],[1145,414],[637,769],[511,1285],[531,-1023],[556,374],[836,-540],[273,-1327],[617,-609],[434,-1277],[697,-31],[924,-996],[281,295],[-6,1727],[418,3240],[764,1143],[794,5],[942,2074],[551,684],[245,1643],[-20,2513],[281,559],[61,2117],[-424,3117],[-278,1159],[646,965],[482,1253],[422,2158],[658,916],[-405,1364],[1075,1509],[131,1374],[486,1359],[468,498],[471,2565],[671,1654],[1005,912],[877,2196],[804,680],[1143,-141],[-4854,9530],[-1089,687],[-1420,1524],[-1062,1756],[-1047,1150],[-323,2673],[-509,1205],[-601,102],[-522,1120],[176,1486],[-264,1346],[-1174,1112],[-1362,186],[-712,2681],[-69,1120],[-780,138],[-2014,1403],[-931,1093],[-1504,182],[-1072,1035],[-808,1168],[-201,618],[-4100,-179],[-3601,-46],[-3565,-177],[-3837,-344],[-2138,-478],[-3776,-462],[-2979,270],[-4379,-490],[-2650,-467],[-3947,-908],[-2320,-323],[-756,566],[-330,-667],[-6361,-321],[-5343,-561],[-5009,-431],[85,-1020],[-2897,-917],[247,2578],[82,2247],[-322,1303],[-2159,-426],[-7338,-1332],[-2488,-433],[-4501,-1046],[-1549,-35],[886,-4092],[648,167],[530,1946],[561,117],[480,-1918],[567,-1154],[-464,-1863],[469,-1290],[718,-400],[-752,-1261],[154,-1092],[432,-101],[680,-3538],[-404,-954],[-488,-1085],[19,-1558],[961,-1875],[300,-1213],[900,-1656],[756,-487],[547,182],[1618,1623],[817,1579],[1498,1244],[525,1317],[714,598],[720,-152],[595,-2534],[-236,-1774],[-693,-2006],[-17,-1259],[381,-1346],[240,-1729],[838,-975],[534,858],[1230,-1519],[1872,-317],[700,66],[310,-1011],[-112,-838],[-737,-1638],[-247,-2770],[518,-1628],[1032,-1442],[324,-1424]],[[33745,48779],[600,-277],[158,-333],[554,550],[-37,751],[273,1028],[294,-633],[355,-1308],[42,-1031],[-170,-793],[257,-631],[392,190],[242,714],[482,332],[213,-651],[-197,-903],[-235,-177],[-306,-1432],[634,-2086],[206,-121],[537,-1252],[202,41],[494,-890],[513,-279],[105,-649],[-200,-1098],[588,-1271],[454,-424],[367,-1542],[-196,-540],[-360,-102],[60,-2166],[401,-863],[165,-1033],[-404,-941],[667,-3283],[479,-655],[426,-1112],[295,-184],[518,-6370],[1794,-5166],[2427,-6989],[1805,-5200],[777,409],[650,821],[-144,701],[-8,1405],[101,1614],[758,901],[274,591],[714,-788],[948,-666],[608,-58],[226,-930],[784,-218],[342,364],[349,-457],[28,-880],[400,-471],[707,105],[1229,2194],[931,1466],[535,2063],[711,839],[63,10713],[84,7809],[37,7238],[241,592],[-411,806],[321,1234],[-299,593],[-53,1686],[53,1188],[387,225],[322,-319],[303,1147],[1388,983],[330,-413],[290,1244],[-109,496],[-506,870],[215,1510],[372,770],[-24,1140],[-346,1515],[119,747],[657,2059],[318,610],[352,-535],[181,-997],[360,625],[435,176],[151,820],[209,366],[227,761],[-83,364],[56,358],[221,381],[206,855],[-75,1194],[-163,144],[-273,-516],[-82,529],[122,221],[-65,484],[-132,94],[-373,-586],[-146,277],[328,865],[260,36],[130,405],[158,-382],[-111,-451],[151,-120],[113,394],[78,1109],[177,-274],[-13,-1377],[258,837],[166,306],[120,637],[-430,1127],[-326,12],[-160,461],[-146,716],[-438,1054],[-436,627],[-215,-292],[-144,60],[89,569],[-176,-28],[-374,-583],[122,-580],[-27,-419],[-145,-197],[-229,251],[4,304],[-228,77],[148,564],[-81,781],[-176,419],[-142,-209],[-107,-1011],[-127,268],[7,648],[-174,377],[-265,-139],[47,-329],[-319,-506],[-122,52],[-311,643],[223,145],[-65,1292],[49,339],[-343,285],[-213,-112],[-86,-844],[-276,476],[-238,1089],[-210,-216],[-97,-633],[87,-1152],[-121,-30],[-239,1102],[-167,-768],[-245,-50],[-67,608],[-231,222],[183,756],[3,599],[-295,-88],[34,450],[-113,1029],[-298,314],[-221,-603],[-32,-1506],[-121,152],[-45,635],[122,1214],[-5,418],[-323,39],[-35,392],[-326,1113],[-300,-1314],[-122,-1274],[5,-888],[-373,-380],[1,820],[-252,-192],[-35,-1158],[-190,443],[-36,791],[-258,-623],[-35,-623],[-397,-189],[-44,426],[257,253],[95,305],[-133,458],[110,326],[-355,17],[-301,-340],[-58,465],[-196,493],[31,309],[-323,132],[-31,-277],[27,-1233],[-69,-358],[-371,-155],[148,717],[-37,638],[113,538],[-116,481],[-162,-964],[-155,425],[-470,293],[170,1001],[-148,884],[35,279],[239,261],[105,1111],[-229,207],[-739,-1353],[-403,40],[-387,-779],[-194,-142],[-286,413],[-233,38],[137,-1251],[407,42],[-103,-681],[195,-389],[217,206],[-27,-924],[-384,481],[-239,731],[-163,-220],[129,-996],[191,-443],[30,-495],[245,-1162],[-28,-403],[-443,-127],[-45,594],[-167,1266],[164,143],[-306,436],[-22,-439],[-253,99],[-320,619],[-369,213],[-170,244],[116,354],[-8,504],[224,805],[-10,726],[-430,508],[-185,1075],[-119,346],[-143,1092],[-283,1106],[42,488],[-35,654],[269,-56],[-182,841],[-347,262],[-192,963],[-399,122],[-101,521],[97,418],[-289,383],[-295,117],[34,-581],[249,-814],[-74,-379],[-493,1299],[-120,-93],[89,-615],[-87,-117],[-450,303],[185,-801],[-184,-320],[188,-666],[-136,-227],[-102,543],[-208,228],[56,556],[-288,207],[-144,582],[-262,1995],[-128,666],[-163,-108],[-203,-966],[-116,937],[-122,-275],[131,-1199],[-107,-480],[73,-524],[246,-906],[-126,-177],[-340,1447],[30,320],[-108,533],[-4,640],[132,637],[-31,775],[-122,132],[-108,-546],[-240,-119],[-233,-524],[162,-695],[-51,-1325],[173,-1105],[-165,-132],[-767,2467],[-79,324],[217,393],[193,984],[-199,1164],[-223,369],[-67,-647],[64,-383],[-114,-232],[-47,-1111],[-104,-802],[-7,-823],[-85,-1142],[48,-715],[257,-709],[-379,197],[-386,883],[-151,473],[-2,298],[230,128],[263,-51],[139,2308],[5,811],[155,1421],[-61,592],[-426,635],[-15,-712],[-128,-325],[27,-908],[104,-315],[-10,-436],[-145,-439],[51,-457],[-178,-117],[-202,314],[180,294],[38,680],[-157,570],[-122,-279],[-340,927],[-160,198],[-68,503],[-116,84],[558,-2341],[-125,-302],[-257,954],[-88,732],[-216,6],[391,-1228],[98,-641],[-178,40],[-100,-363],[-211,155],[-230,579],[-288,348],[-278,164],[-430,905],[-179,210],[-221,949],[-250,339],[47,825],[-202,313],[369,362],[98,589],[-67,1108],[-335,246],[-207,-172],[-177,505],[-263,-356],[-258,506],[-127,926],[56,950],[-37,554],[-137,615],[-174,82],[-425,880],[-200,173],[-334,54],[-356,866],[-169,591],[-19,550],[110,508],[-530,1852],[-255,1201],[-221,34],[-217,-695],[-138,160],[-134,819],[-627,-1100],[-68,-487],[158,-2103],[-632,-1127],[-168,-900],[-470,-819],[-54,-1095],[217,-831],[-97,-779],[221,-1697],[-172,-442],[-59,-5049],[0,-11349],[-46,-9480],[-184,-13962]],[[69324,40],[47,2024],[-303,1809],[346,742],[-213,1308],[-39,1754],[-146,1085],[713,3094],[36,1069],[-283,1248],[189,2165],[-398,1483],[-210,375],[-350,3239],[217,407],[23,2036],[278,1304],[-125,1263],[317,1068],[-145,989],[-267,824],[-171,1198],[0,1117],[241,347],[249,-1232],[494,-62],[144,1024],[209,312],[99,1053],[-40,5695],[-117,9449],[-93,700],[215,1236],[-1179,9255],[-688,5393],[172,807],[-227,9519],[-210,7184],[564,1819],[-1989,2515],[600,1958],[18,663],[-191,603],[-277,43],[-435,956],[-192,851],[-193,19],[-65,707],[184,572],[-561,37],[-227,179],[-271,-19],[-45,-459],[189,-953],[-107,-403],[193,-969],[205,-2286],[1,-1813],[-33,-835],[-169,-1103],[-367,-722],[-135,-481],[95,-737],[-19,-445],[-281,608],[-24,314],[123,1117],[147,658],[282,568],[-19,1363],[121,1896],[-3,378],[-3465,-4106],[-1036,-1395],[-1926,-2424],[-149,-719],[-360,-747],[-439,-438],[-634,99],[-152,-760],[-587,-175],[-47,-638],[-285,-545],[-32,-674],[-379,-940],[247,-267],[-61,-2960],[-413,-507],[156,-825],[-228,-712],[-720,-596],[-161,271],[-380,-670],[-57,-1143],[-250,-229],[-390,-1126],[-3081,-54],[-5664,-258],[-3134,-248],[-2349,-88],[-5233,-368],[-3982,-363],[-2620,-277],[-2241,-184],[-4813,-573],[-2326,-307],[350,-11456],[6264,-5640],[577,-951],[241,-1600],[-192,-743],[-611,-722],[-74,-699],[158,-1079],[-525,-330],[294,-1427],[-41,-2459],[-108,-197],[-911,-4283],[3640,-3111],[497,-512],[4417,522],[3360,294],[4482,343],[2732,212],[195,-1202],[2078,-6866],[505,-2070],[676,-864],[328,-1408],[523,-77],[640,-766],[28,-910],[505,-393],[757,-1031],[238,114],[449,-541],[726,-1393],[109,-868],[329,-967],[1160,-2259],[880,-1865],[1808,-3229],[837,-872],[238,-477],[535,-307],[713,-1182],[494,8],[626,-711],[728,571],[363,-201],[1735,69],[937,115],[1417,9],[2111,-236],[1799,-75],[2270,-212]],[[50162,996],[89,23],[3292,122],[1661,24],[3607,10],[1598,-14],[1113,-96],[1122,78],[2863,-76],[44,3883],[41,5332],[58,8573],[28,4719],[60,7805],[50,6664],[51,6996],[39,5476],[33,3253],[49,6256],[9,3246],[58,7005],[24,1389],[33,4109],[74,4650],[16,2646],[-126,206],[-468,2219],[-505,127],[-718,-1782],[-237,-49],[-514,285],[-20,-318],[-352,-12],[-312,153],[-304,452],[-292,70],[-113,263],[178,839],[-93,724],[185,924],[254,508],[-238,397],[-31,571],[103,690],[-60,635],[129,326],[-33,542],[199,541],[-89,401],[78,684],[-122,479],[90,754],[207,528],[187,1245],[156,2252],[-47,475],[-377,344],[234,438],[-189,734],[28,285],[-2059,-4077],[-1501,-2969],[-2176,-4294],[-1523,-3006],[-1846,-3652],[-2757,-5447],[-1368,-2714],[-2026,-3991],[-1831,-3613],[-879,-1773],[-2652,-5223],[-1809,-3601],[-2015,-3982],[-2757,-5446],[-1938,-3850],[63,-3869],[144,-4720],[144,-5300],[147,-5573],[66,-2754],[130,-6074],[178,-7071],[177,-7000],[261,2],[3146,345],[3395,303],[2464,94],[2938,153],[3084,99]],[[22938,0],[5493,504],[7502,484],[3163,178],[8311,254],[3884,-3],[5239,-68],[1282,33],[5170,-193],[4743,-222],[3944,-231],[313,2392],[709,696],[-176,1744],[206,537],[-198,853],[-340,210],[-98,954],[-1026,1381],[-140,1253],[-622,736],[-887,3368],[7110,-652],[244,1067],[648,944],[-83,1207],[-861,-591],[-317,876],[136,520],[588,462],[65,534],[-1003,834],[-253,1025],[-617,483],[-338,-486],[-470,630],[-37,1342],[309,862],[822,622],[-996,1040],[72,2256],[-516,-1103],[-552,366],[-105,923],[374,1397],[-121,1059],[-413,577],[-14,-1644],[-568,-3],[-105,748],[-431,583],[300,951],[314,-682],[453,724],[-342,1176],[-2,1072],[-609,291],[150,1118],[593,87],[236,617],[-407,1181],[596,1417],[-374,570],[-440,-456],[-382,475],[-361,2601],[-938,-368],[-176,1310],[736,1400],[-29,1045],[-701,1050],[-1131,1194],[-287,-1471],[-506,685],[319,1053],[-165,600],[256,1695],[-239,464],[-534,-138],[-283,859],[785,-19],[168,474],[-598,1536],[-825,-1087],[101,1882],[422,1136],[12,721],[-384,678],[-101,848],[293,1383],[-161,713],[-1084,1165],[-909,162],[-95,697],[289,1016],[-270,751],[-777,496],[-149,1646],[-677,-1022],[-356,247],[252,1080],[328,411],[819,-65],[-57,1110],[-521,77],[-491,-643],[-502,787],[393,1251],[584,251],[-284,1708],[-1049,201],[315,1100],[-442,402],[-226,-1037],[-791,820],[1,434],[895,975],[-695,1942],[313,1189],[644,625],[-399,841],[-318,-418],[-618,252],[-320,-322],[-124,1478],[338,710],[572,-337],[403,1226],[-508,439],[-643,-507],[-312,-827],[-557,189],[-147,1064],[584,417],[483,1177],[-248,674],[-886,543],[114,920],[426,966],[-593,1711],[766,-400],[47,-1309],[466,700],[-69,1227],[-900,749],[508,706],[289,870],[23,1450],[496,1712],[242,-1304],[409,371],[-549,1426],[67,2169],[-194,396],[-936,-259],[-198,968],[910,1237],[-45,881],[-430,860],[-4970,54],[-5357,-5],[-6115,-212],[-5199,-293],[-5782,-296],[-6513,-458],[276,-15269],[-440,-705],[-764,240],[-412,-874],[-241,782],[-1011,-513],[-232,833],[-496,-300],[-438,358],[-691,-2083],[-372,-621],[436,-12796],[244,-7422],[530,-15385],[510,-13943],[-594,-13219],[-515,-11273],[-260,-6545]],[[46866,0],[3583,121],[3256,64],[4668,17],[6029,-50],[402,1569],[455,565],[-291,5735],[-594,12176],[-332,6425],[-341,7314],[-481,10208],[-309,6780],[-296,6169],[-375,7410],[78,3906],[123,4644],[245,10020],[236,10829],[42,1799],[-97,144],[-1,479],[-201,153],[-151,409],[-199,177],[-313,-350],[-457,-156],[-140,-542],[-214,-421],[-159,512],[-396,328],[-433,90],[-266,-78],[-909,-1420],[-716,-408],[-478,412],[1075,296],[-146,268],[-272,49],[-538,-47],[-392,364],[-264,96],[-624,420],[-1100,649],[-270,-45],[28,-672],[-281,-444],[-189,-90],[-290,458],[65,231],[250,91],[-17,645],[-86,190],[-798,927],[63,273],[-185,588],[-70,548],[-225,-283],[-76,206],[-481,148],[-60,-208],[-293,311],[-391,-940],[-128,-649],[15,-1669],[-232,-412],[-228,-1008],[4,-958],[-601,-1071],[-569,-1875],[-8,-828],[-205,-1221],[117,-1577],[238,-719],[436,-2930],[247,-1205],[-4200,-51],[-4547,-107],[-3382,-124],[-4480,-220],[641,-789],[9,-578],[-519,-1046],[331,-1284],[-46,-488],[-420,-695],[35,-673],[715,135],[352,-254],[84,-859],[-324,-623],[382,-374],[291,-652],[-346,-999],[-1,-1792],[626,-213],[318,-543],[-121,-581],[-555,191],[-259,-572],[177,-653],[287,533],[545,24],[53,-1884],[248,-726],[773,81],[-59,-568],[-527,262],[-127,-529],[172,-1248],[439,-324],[89,932],[328,-346],[-167,-665],[569,-894],[123,-1078],[208,-431],[497,-120],[273,-558],[-190,-662],[168,-633],[360,-381],[298,-913],[-381,-317],[-534,656],[-444,-186],[-4,-1309],[412,-209],[719,-693],[432,636],[319,-1475],[276,-406],[40,-743],[-635,-281],[-152,-328],[99,-756],[244,-338],[-232,-636],[-291,338],[-562,-511],[-189,-895],[207,-1007],[370,1065],[418,355],[109,-331],[-592,-758],[-189,-479],[428,-539],[-156,-502],[-615,438],[-182,-300],[-75,-873],[232,-537],[540,-719],[32,-509],[-890,-669],[48,-1131],[161,-663],[632,-884],[57,-782],[-176,-1041],[-411,-98],[21,1105],[-284,557],[-412,-489],[103,-807],[314,-876],[321,-596],[45,-633],[-641,-944],[157,-688],[672,240],[145,-275],[-19,-1571],[416,-999],[-290,-293],[-193,930],[-336,-1266],[3,-1050],[-197,-647],[-359,-539],[662,-492],[67,-885],[-329,-534],[-51,946],[-560,247],[453,-1207],[-297,-724],[-70,-674],[650,-344],[189,-475],[-335,-882],[-418,-335],[121,-765],[407,-105],[216,618],[460,404],[374,-289],[-275,-914],[-420,212],[-236,-535],[109,-1067],[229,252],[453,-147],[225,322],[302,-588],[-460,-492],[-211,-883],[533,-1373],[-638,-762],[6,-316],[587,-552],[150,769],[327,-266],[-213,-821],[767,-84],[232,-1228],[-423,-218],[-268,-936],[378,-544],[349,499],[380,-25],[59,-806],[-599,-3],[-234,-319],[-168,-805],[263,-159],[480,788],[133,-1193],[575,-314],[209,-532],[-197,-761],[80,-504],[667,-61],[811,-782],[129,-511],[-193,-1032],[87,-614],[292,-471],[3,-530],[-292,-860],[-45,-1386],[588,851],[463,-1087],[-116,-359],[-576,-38],[221,-611],[390,136],[183,-324],[-161,-1262],[131,-430],[-218,-795],[383,-469],[187,1100],[851,-800],[533,-723],[38,-767],[-518,-1081]],[[26681,12857],[-861,-1171],[229,-1557],[-612,-1330],[29,-1272],[-600,-647],[36,-431],[-778,-762],[259,-390],[-263,-1600],[31,-605],[-249,-562],[4,-1259],[-475,-4],[-30,-1267],[2186,335],[3920,561],[3136,413],[4123,324],[4144,161],[2267,144],[1951,3],[2796,66],[4443,-50],[2901,-156],[314,651],[52,646],[445,215],[60,823],[383,913],[329,86],[6,1016],[325,608],[504,101],[-342,754],[-364,2245],[-48,2339],[161,1463],[-44,444],[576,2595],[-219,779],[108,769],[556,1054],[-41,1353],[727,1357],[418,1030],[299,270],[297,1264],[379,150],[496,1930],[1527,2206],[433,763],[533,1241],[141,2041],[217,1382],[-247,700],[269,1343],[128,1435],[321,832],[370,400],[248,-119],[777,-1991],[469,184],[674,739],[478,100],[1111,1479],[-77,1089],[-350,542],[-375,1291],[210,754],[65,1056],[-684,2247],[-209,1868],[-418,954],[-239,1163],[-12,1058],[113,1311],[201,681],[485,684],[265,963],[577,899],[339,152],[313,955],[227,6],[633,1164],[388,-198],[79,478],[-350,616],[173,739],[452,284],[436,-741],[391,917],[475,315],[658,1276],[-59,554],[410,214],[289,771],[589,576],[-42,942],[328,893],[-339,349],[33,1002],[381,1459],[262,616],[161,914],[-119,1055],[-605,654],[-70,596],[240,737],[267,180],[-29,915],[308,1295],[393,917],[25,1191],[707,966],[283,-503],[-367,-616],[341,-415],[475,948],[100,822],[491,-58],[285,544],[-308,2319],[-269,124],[-59,708],[514,686],[-437,352],[-251,875],[353,1103],[-317,803],[-236,1269],[-354,6],[-399,-1144],[-412,-13],[-414,2688],[-299,798],[-270,-753],[153,-631],[-115,-890],[-425,-259],[-332,517],[269,1263],[157,406],[-175,1248],[278,981],[-181,734],[-661,-13],[-6,666],[635,758],[17,426],[-640,299],[-706,-274],[24,590],[723,1129],[121,879],[-725,1016],[-57,1029],[-382,717],[-5421,155],[712,-2525],[482,-533],[121,-950],[798,-1005],[85,-724],[262,-143],[161,-642],[-151,-420],[154,-1324],[-534,-565],[-212,-1844],[-3020,0],[-3630,-18],[-3957,-29],[-981,-65],[-4010,-90],[-2972,-83],[-6362,-321],[-2422,-163],[-5746,-393],[-4212,-363],[224,-10614],[237,-10650],[118,-5866],[247,-9435],[104,-5064],[206,-7483],[147,-6256],[171,-955],[-499,-109],[-293,-648],[-521,158],[-226,-739],[-389,-224],[51,-718],[-547,-1088],[-123,-1860],[-538,-1354],[-340,-347],[-118,-793],[-439,-949],[23,-718],[409,-103],[36,-872],[269,-969],[454,-427],[2,-745],[200,-398],[349,485],[-102,-1417],[355,-329],[-108,-591],[-377,-409],[61,-883],[-637,-190],[-178,700],[-399,44],[-814,-901],[-104,-855],[-353,-228],[-434,-1142]],[[9832,0],[4593,1264],[1960,490],[4204,926],[4264,917],[5249,847],[4380,573],[3989,458],[4401,303],[3901,161],[2265,52],[6029,-1],[3881,-139],[4411,-289],[5347,-519],[5266,-688],[5515,-929],[3228,-633],[4063,-931],[562,9724],[512,8603],[279,4409],[518,9427],[638,11153],[566,9607],[523,8954],[620,9997],[578,9688],[-131,42],[-4157,941],[-3843,770],[-5472,973],[-104,160],[-1442,230],[-3639,476],[-3350,364],[-312,-35],[-3544,323],[-2929,223],[-3648,222],[-4157,133],[-147,-130],[-4988,98],[-2335,-84],[-567,123],[-1635,-113],[-283,111],[-1891,-59],[-623,-219],[-1930,-125],[-170,11065],[-572,-503],[-347,-1495],[-371,-365],[109,-787],[-824,-2415],[-277,-401],[-861,1015],[147,457],[-455,1530],[163,1348],[-622,-490],[-224,270],[-659,-298],[-86,323],[-649,318],[-449,-584],[-627,-176],[-207,406],[-419,-271],[-485,447],[-246,-340],[-393,52],[-318,-701],[-436,-136],[-544,758],[-8,774],[-255,930],[-344,-193],[-274,-569],[-211,324],[-349,-514],[-823,-143],[-409,-449],[-519,463],[-443,1105],[179,797],[-266,599],[-274,-844],[-556,-679],[-265,-607],[-147,-996],[173,-627],[-208,-908],[-333,-742],[242,-358],[-28,-1295],[-206,-1105],[-619,-1645],[-369,-504],[-716,690],[-91,-779],[-675,-1069],[-226,-1784],[392,-191],[30,-2094],[-235,-132],[-604,-1544],[-62,-1143],[-653,-1798],[105,-290],[-373,-1143],[91,-1303],[-269,-346],[-28,-1030],[198,-502],[-59,-718],[-428,-215],[271,-1652],[-751,-1328],[-69,-733],[-371,-364],[-229,954],[-831,1387],[-139,532],[-446,356],[-373,-268],[-218,1229],[-558,403],[-137,-718],[-375,-439],[-88,-603],[-791,-1177],[170,-417],[-149,-696],[491,-538],[28,-1114],[-286,-515],[-97,-641],[553,-1496],[689,-275],[152,-357],[-260,-1041],[184,-836],[-303,-477],[-123,-717],[217,-1278],[-397,-770],[139,-765],[439,29],[42,-1437],[-114,-612],[304,-770],[227,-1199],[-62,-462],[410,-1065],[-163,-785],[444,-723],[2,-694],[288,-1919],[-233,-502],[-465,66],[-325,527],[-534,-394],[-466,31],[-149,-885],[173,-536],[-265,-721],[-236,-77],[-414,796],[-229,-404],[210,-867],[-419,-624],[-205,-689],[-370,-381],[-18,-1426],[-353,-1542],[-318,-116],[-177,-1619],[-123,-89],[-516,-1958],[-287,-354],[-95,-664],[-245,-304],[57,-647],[-237,-831],[-1216,-1070],[-75,-1003],[-1199,-2291],[390,-198],[70,-552],[-117,-817],[-245,-455],[470,-928],[21,-617],[-237,-710],[144,-775],[-593,-1349],[-87,-1566],[-304,-398],[-788,-2963],[644,-9314],[763,-11091]],[[6416,0],[5025,774],[6786,906],[6513,730],[8532,717],[5455,330],[6962,266],[6682,115],[3815,5],[9220,-182],[8835,-446],[7445,-576],[4262,-411],[726,1541],[539,222],[218,1225],[1268,1065],[585,-195],[208,-1089],[953,71],[-21,1320],[589,478],[205,836],[-497,601],[262,2058],[-552,-601],[-265,652],[56,1100],[-637,779],[-322,1520],[16,1300],[-597,285],[23,1069],[723,1260],[237,1134],[529,403],[904,1827],[329,2714],[898,1432],[-18,1082],[593,204],[395,1020],[760,-408],[488,862],[749,-7],[-176,1475],[289,9355],[300,11240],[257,7619],[398,14266],[300,8895],[512,16225],[-6946,844],[-3717,415],[-6897,641],[-6349,453],[-6860,329],[-7064,207],[-8974,47],[-10242,-347],[-6679,-384],[-6060,-531],[-7962,-669],[-6100,-662],[-4916,-610],[-5579,-791],[528,-13492],[361,-9232],[322,-9251],[714,-18597],[495,-13206],[441,-12419],[728,-19808]],[[43452,91],[7009,228],[6358,80],[4054,-38],[4608,-73],[7,1610],[55,7223],[40,7429],[69,12125],[25,8927],[-39,11594],[24,8418],[1,9377],[-729,1228],[566,1680],[36,802],[-401,943],[84,527],[520,95],[236,856],[-337,625],[134,1252],[-717,-189],[-441,441],[-560,-17],[-1730,2297],[-462,-323],[-365,-919],[-450,-91],[-637,284],[-343,-166],[-422,689],[122,2469],[230,1201],[-71,799],[-497,710],[-224,885],[-842,465],[-331,670],[-336,2503],[-288,732],[-560,688],[-362,-530],[-396,181],[-291,1473],[-507,1229],[-12,2101],[-180,1621],[-192,467],[-761,267],[-267,900],[-292,-1026],[-408,-392],[-556,126],[-857,-1175],[-42,-2103],[-720,-1381],[-270,1623],[-562,1131],[-237,906],[-663,494],[-7,1528],[170,962],[-790,200],[-166,1585],[-542,-165],[150,-1076],[-335,-205],[-374,545],[-327,-569],[-404,-1871],[-547,-3],[-667,1305],[-551,120],[-622,730],[-305,2496],[-576,378],[-340,-1408],[-534,-207],[-1513,-2203],[-488,-287],[-799,949],[-449,-586],[-197,-1063],[-498,1178],[415,1285],[-317,1008],[-563,25],[76,-1176],[-162,-685],[-1450,602],[-385,-1164],[-223,-138],[-412,910],[262,1214],[20,892],[-390,836],[-789,-684],[-620,-2409],[792,12],[-211,-1556],[244,-510],[-192,-1392],[659,-848],[-433,-938],[668,-563],[338,-871],[-561,-763],[-133,-934],[478,-1579],[827,476],[192,-1241],[883,-2178],[135,-902],[-126,-710],[569,-341],[295,-736],[-128,-599],[479,-1006],[-52,-534],[305,-1446],[753,-770],[249,-2208],[-519,-1904],[331,-1552],[63,-837],[-567,-764],[27,-1805],[-801,-2014],[386,-1240],[327,-347],[62,-1376],[-230,-135],[5,-1279],[166,-564],[550,-330],[119,-13247],[85,-6727],[144,-9118],[91,-8301],[119,-12332],[143,-10879],[2897,91]],[[85195,1203],[-73,3262],[-775,2588],[-715,1048],[-803,1559],[-138,1210],[980,2285],[369,1734],[538,1244],[590,-38],[1320,1277],[407,1538],[616,16515],[421,11874],[496,13752],[335,9291],[-1496,222],[206,949],[-76,990],[782,1230],[49,2166],[-600,1206],[371,1315],[817,14],[141,1834],[383,1065],[-192,1649],[-531,586],[264,1037],[-268,925],[251,593],[-393,1032],[148,780],[-121,1407],[-323,667],[-514,2661],[354,1086],[1027,2013],[479,2050],[-71,1324],[473,535],[-581,321],[-636,-1011],[-712,305],[-166,-1104],[-826,-1531],[201,-1349],[-438,-341],[-784,-47],[-74,-927],[-1095,-721],[-417,477],[-354,-1144],[-983,-231],[-612,99],[-235,-675],[-663,-402],[-84,-957],[-2099,-365],[-216,574],[-696,-256],[-590,382],[-445,-268],[-855,558],[-925,-129],[-609,-504],[-456,343],[-111,1223],[-584,1413],[-687,308],[-1252,-1617],[-1381,-1451],[-2223,-1980],[-349,-1466],[-7274,376],[-4595,123],[-4157,21],[-8907,-174],[-7779,-372],[-5134,-502],[-5213,-552],[-8848,-1187],[-6003,-980],[487,-12045],[702,-16793],[604,-14791],[547,-13649],[179,18],[529,-13128],[512,-13570],[6454,1018],[3682,497],[5137,595],[6310,581],[7129,451],[7018,205],[5243,77],[4442,-67],[8448,-309],[3694,-258],[5222,-476],[2455,-283],[6325,-828]],[[48021,53642],[-30,-949],[-7634,-579],[-8655,-547],[-922,227],[-4077,-571],[-266,2016],[-1127,282],[104,-2391],[-4967,-448],[-8711,-1308],[-1310,-47],[-421,-2281],[2261,-14698],[3852,-25138],[9951,1192],[7662,944],[10426,1141],[6237,544],[8798,527],[1070,-2779],[1393,300],[-105,-3259],[1158,-1873],[1496,900],[710,-3236],[2206,-1611],[2499,730],[186,2244],[-236,677],[-769,444],[1164,1452],[-73,742],[667,3878],[-827,-1546],[-148,1428],[470,1012],[1253,1196],[-730,439],[401,1058],[1225,199],[913,-1919],[590,-647],[52,1371],[702,405],[-82,997],[-629,2212],[-338,513],[-858,-90],[-482,1519],[-2219,1226],[-1117,998],[-511,1659],[680,-244],[360,1485],[-375,261],[-648,1372],[-668,225],[-213,996],[753,1502],[-543,371],[-610,-1483],[-424,538],[-243,1340],[325,2888],[-517,-451],[-489,1201],[-183,1116],[-612,449],[93,1456],[882,1461],[798,199],[234,789],[-54,1465],[652,-448],[1002,-1633],[-430,-1818],[1512,2218],[1058,582],[942,1440],[576,1439],[80,2232],[397,690],[980,3327],[499,995],[89,2043],[846,2534],[-591,55],[-503,-2566],[-375,69],[-185,2911],[-398,-318],[-707,844],[1360,2752],[1118,240],[873,-208],[474,888],[363,2083],[151,2334],[-176,3214],[663,1585],[1481,2025],[869,642],[1680,760],[264,962],[911,-20],[690,-587],[1160,-1474],[2695,-1777],[1079,-1139],[456,-1590],[-98,-4027],[-462,-1510],[771,-467],[-1169,-1641],[-306,411],[-96,1911],[-244,687],[-336,-6227],[-483,-2573],[-869,-1175],[-618,-363],[-527,915],[441,1295],[-404,637],[-968,-2365],[26,-1435],[822,-377],[1023,254],[1472,1305],[686,1100],[863,2453],[752,2735],[959,5838],[435,1174],[-312,403],[-750,-403],[-136,2599],[510,-693],[517,881],[87,3189],[-79,4120],[-890,-412],[-3553,1523],[-1090,60],[-1216,1131],[-479,-159],[-1297,903],[-1054,40],[-570,864],[-334,-1113],[-503,368],[-667,2512],[-457,1114],[-545,650],[-2066,739],[-1398,2005],[-613,-563],[529,-1231],[195,-1706],[-29,-4696],[-156,-1857],[579,-1661],[177,-1134],[-375,-695],[-401,1181],[-1185,-1563],[-207,122],[-29,2744],[-386,718],[-768,2728],[-535,-764],[-154,1010],[-1011,831],[125,2281],[-401,-283],[-420,-1880],[-554,-733],[-35,1548],[-535,2150],[156,1818],[-774,1222],[-256,-393],[-998,1587],[-557,328],[-215,-1021],[-4,-1739],[-548,825],[-838,-302],[312,1258],[-570,674],[-261,-9105],[-1404,-878],[100,-659],[1215,-4320],[-1124,2079],[-792,-569],[-232,867],[-670,-2131],[-1517,-1747],[-432,-2614],[189,-4632],[-955,316],[-7,-7689],[-9320,625]],[[70943,10047],[853,347],[849,39],[325,1213],[949,1163],[-255,1114],[-509,1240],[107,806],[428,404],[240,910],[1368,297],[1091,1165],[16,1179],[1141,524],[299,844],[618,1053],[95,325],[307,1043],[-119,367],[80,1241],[-1,48],[-97,597],[76,1384],[0,50],[-48,348],[-57,67],[-738,293],[-146,878],[-317,-415],[-122,374],[370,847],[41,422],[-538,427],[-83,54],[-229,-281],[150,-747],[-238,-264],[-157,256],[-98,912],[-209,983],[-147,311],[162,421],[-302,406],[-20,790],[-295,1514],[-39,266],[-91,618],[157,1338],[-415,-84],[532,991],[170,652],[-10,393],[502,302],[149,-91],[834,-438],[157,-377],[177,-281],[355,-44],[190,-24],[275,-703],[35,-90],[138,-43],[316,373],[12,65],[30,682],[6,145],[-77,978],[-64,381],[355,893],[222,135],[230,450],[74,621],[-49,542],[146,275],[901,1063],[236,21],[496,45],[452,40],[168,127],[210,716],[277,-176],[372,-533],[155,46],[257,339],[340,-163],[56,16],[44,99],[83,549],[-40,428],[403,531],[450,590],[129,736],[-46,721],[303,22],[466,277],[107,231],[345,745],[181,388],[877,562],[1114,1443],[137,1037],[-143,1125],[-209,-31],[-384,-766],[-295,92],[348,1560],[59,742],[-244,1207],[382,613],[24,350],[-408,453],[-214,521],[266,938],[-30,402],[-335,-92],[-657,-451],[-311,-647],[-194,-104],[-285,-1122],[-107,420],[-107,1121],[-326,-295],[-105,-911],[-578,-1530],[-156,-775],[-357,-543],[-112,-530],[-214,160],[-269,-566],[-294,-73],[-300,-446],[-696,-1989],[-744,-810],[-229,-1162],[-350,-249],[-190,-482],[-256,-1871],[-238,-703],[-328,-497],[-636,-148],[-370,-1269],[-176,-176],[-737,-261],[-1,619],[592,284],[235,-154],[107,918],[189,442],[830,384],[467,1080],[-29,1694],[51,476],[498,306],[179,824],[937,1713],[265,1227],[310,949],[309,639],[479,-53],[94,999],[432,122],[223,313],[413,1221],[132,1351],[236,784],[355,333],[927,-187],[171,-184],[298,886],[437,266],[499,66],[490,293],[-402,540],[-548,164],[-311,509],[440,307],[668,791],[118,-786],[234,42],[91,904],[-146,525],[127,512],[272,87],[0,2616],[-81,856],[-264,454],[-216,-398],[-267,-1067],[-41,-464],[-308,220],[-216,-123],[-386,-1335],[-227,-379],[-139,756],[229,297],[-381,547],[8,570],[477,636],[127,800],[283,1044],[-68,484],[-927,419],[-450,399],[-169,-608],[-558,-1124],[-91,-456],[-245,-204],[-756,-2330],[-463,-527],[-237,-649],[-374,-1341],[-623,-1202],[-163,311],[28,827],[353,318],[532,1777],[376,464],[179,478],[881,2949],[883,1158],[359,693],[439,508],[759,-666],[357,386],[-52,1064],[225,553],[178,-286],[589,890],[87,434],[-392,522],[53,549],[475,-292],[138,186],[24,863],[-129,1264],[-149,460],[-718,328],[-490,850],[-352,91],[-156,-1192],[-160,-426],[-859,-770],[-281,-946],[-202,127],[-589,-982],[-118,-753],[94,-863],[-92,-804],[-209,-640],[-253,-381],[-169,216],[-713,263],[-275,539],[-166,-812],[-302,-187],[-767,-725],[-28,-1282],[-204,-2],[-38,1103],[-344,676],[-276,84],[-627,-2003],[-261,-311],[-485,780],[-551,-863],[-508,360],[-524,-350],[-493,50],[-368,-630],[-316,639],[47,392],[414,214],[772,576],[1014,-55],[270,651],[579,-907],[264,202],[176,1173],[824,1055],[238,178],[1088,-71],[171,183],[313,1070],[539,397],[323,-1199],[229,93],[63,1144],[153,1274],[-192,1172],[172,714],[1057,396],[-82,732],[344,197],[696,1247],[56,631],[194,757],[-225,645],[-5,677],[725,-1060],[310,-149],[659,180],[262,302],[108,701],[403,299],[-333,-1009],[182,-874],[-337,-511],[-38,-622],[237,-321],[489,-98],[1734,1221],[574,88],[262,-228],[230,-530],[370,40],[202,603],[419,3175],[1323,6485],[149,1203],[-333,36],[-74,-1638],[-214,-584],[-389,-2472],[-237,-351],[-183,299],[-80,3165],[139,1690],[-555,57],[-219,22],[-2581,249],[-6050,471],[-2011,90],[3,253],[-5503,273],[-4544,143],[-3560,145],[-2463,6],[-3148,120],[-5093,-80],[-7350,-174],[-6972,-424],[-2078,-184],[-5227,-979],[-1297,-20],[-3998,-757],[-2299,-363],[-3777,-872],[389,-680],[-3305,-563],[-159,653],[-3360,-527],[-4900,-700],[-7650,-1353],[-176,-166],[-2677,-491],[-2094,-533],[786,-886],[1018,-712],[1364,146],[893,-793],[1885,-850],[710,37],[117,-996],[774,-2270],[1238,113],[1113,-761],[305,-1159],[-87,-1377],[526,-901],[547,31],[519,-981],[423,-2344],[1000,-822],[1044,-1365],[1356,-1082],[1016,-397],[4846,-7599],[304,814],[-700,994],[743,1993],[-56,1624],[608,1092],[204,1243],[755,200],[491,703],[46,787],[699,1192],[1396,17],[1518,-1873],[939,-1829],[465,1220],[1072,2079],[708,-777],[757,-460],[1396,-492],[424,236],[1236,-1462],[-374,-1161],[566,-1215],[609,1000],[152,689],[1496,-1382],[1137,-1467],[483,-208],[388,1814],[2116,-2433],[-308,-1722],[833,-886],[461,-946],[-536,-594],[-312,-1403],[459,-842],[138,-1432],[1058,-3160],[256,-250],[1581,-3130],[682,-2695],[326,-755],[-19,-984],[389,-1593],[559,-1172],[723,-1028],[-229,-1093],[792,-1425],[638,-2315],[-98,-1298],[617,-3481],[1275,1272],[665,2837],[1880,1428],[378,-358],[809,-2039],[61,-947],[559,-2042],[322,-1793],[441,-205],[4,-1245],[535,-2676],[619,-1728],[1410,2626],[937,-3640],[1227,-1189],[580,-1655],[317,487],[582,-1595],[-243,-416],[1047,-2310],[229,-143],[626,-1595],[-394,-903],[440,-1365],[-224,-404],[662,-1792],[225,-1073],[-80,-3339],[2132,3624],[3746,6197],[885,-4852],[310,-797]],[[39674,51045],[-10550,-18965],[15655,-32080],[26096,53706],[-22595,46293],[-823,-8303],[2273,-17896],[-1985,-9540],[-8071,-13215]],[[15758,203],[5300,603],[5941,538],[5731,371],[7063,342],[3922,108],[6856,40],[5176,-96],[8836,-422],[4389,-297],[4573,-394],[-133,1275],[428,1975],[-14,1443],[822,631],[844,2175],[-640,1738],[-577,2110],[75,2995],[369,2324],[77,1831],[497,629],[488,3915],[176,603],[1153,1458],[2658,1154],[950,3065],[41,983],[-64,1057],[942,943],[202,781],[905,897],[764,1843],[-133,1289],[511,1735],[2147,2017],[570,1060],[60,2355],[321,1187],[-209,1360],[156,1713],[-287,3326],[-1010,1275],[-394,1100],[64,1098],[-299,1716],[62,1875],[-786,819],[-525,1399],[-927,33],[-618,557],[-661,1639],[-942,493],[-1286,-10],[-943,1176],[-530,-346],[-834,860],[-219,3191],[-429,1974],[914,2579],[622,280],[560,1893],[97,1913],[-155,3536],[-407,583],[-1091,3218],[80,1103],[-237,1685],[-20,1688],[-742,1199],[-747,52],[-733,499],[-578,800],[-513,1950],[465,931],[-100,2075],[103,1816],[-516,487],[-768,-70],[-516,-870],[-50,-1540],[-501,-77],[-616,-1321],[-122,-1238],[-682,-254],[-103,-971],[-499,-936],[-4384,673],[-6724,686],[-4234,248],[-2954,222],[-3435,27],[-6277,156],[-6247,-152],[-4752,-411],[-5937,-628],[-3309,-408],[189,-750],[-419,-1661],[-622,-643],[-450,-1334],[45,-1058],[550,-777],[-63,-2828],[439,-597],[-261,-1226],[96,-1898],[-359,-555],[63,-1315],[-233,-824],[253,-812],[-192,-2096],[-359,-1014],[91,-1727],[-172,-1356],[603,-43],[-70,-1078],[-461,-150],[-352,-938],[514,-3234],[-965,-722],[165,-1336],[-374,-860],[-381,893],[-429,-1148],[203,-891],[-354,-919],[253,-1430],[-250,-1455],[555,-465],[-358,-993],[520,-1612],[-491,-1079],[-538,-2568],[430,-1921],[-704,-719],[100,-611],[-540,-1193],[-386,-76],[66,-2147],[-858,-1838],[-110,-1463],[430,-561],[-455,-2612],[-409,-887],[43,-2379],[366,-1010],[-205,-1287],[-489,-192],[-464,-708],[168,-1386],[-364,-2320],[-950,-2442],[-299,-1259],[733,-2677],[391,-614],[227,-1461],[-102,-872],[490,-982],[-224,-705],[350,-905],[-208,-1179],[606,-467],[320,-1698],[-332,-1246],[-21,-1992],[-868,-254],[-302,-1509],[723,-1106],[100,-2319],[-745,-1537],[150,-1032],[-153,-1070],[1608,203]],[[31413,34548],[-25,-356],[258,-881],[-275,-573],[477,-373],[74,-580],[-119,-2803],[-190,-1563],[-237,-681],[-86,-944],[167,-574],[-75,-856],[124,-483],[-228,-696],[59,-665],[-149,-420],[95,-777],[-103,-865],[57,-701],[308,-458],[-297,-662],[-198,-1168],[140,-880],[-192,-1062],[149,-309],[362,-45],[391,-515],[390,-145],[434,64],[15,396],[644,-280],[291,94],[826,2300],[628,-85],[652,-2673],[162,-236],[70,-3268],[67,-5749],[100,-5076],[2847,228],[3875,264],[2144,119],[5116,234],[2786,90],[3013,86],[4503,16],[140,106],[3395,-10],[2371,-16],[3950,-83],[34,6351],[30,5587],[42,7752],[40,8331],[53,8426],[45,8739],[34,7151],[54,9934],[39,8212],[52,10801],[29,7339],[44,10269],[-3287,30],[-2735,22],[-4264,21],[-4483,-40],[-4243,-3360],[-3915,-3109],[-4832,-3828],[-1828,-1424],[-4474,-3708],[-4516,-3755],[-3054,-2531],[95,-714],[-68,-566],[485,-1572],[248,-1011],[223,-320],[526,215],[651,-445],[-22,-599],[469,-905],[65,-1093],[-119,-506],[-154,-1433],[-509,-358],[-293,118],[-369,-221],[-244,-1062],[228,-1118],[57,-1881],[-375,-598],[229,-585],[-110,-1250],[653,-297],[58,-492],[490,-1288],[249,-337],[-103,-680],[139,-336],[-66,-656],[79,-648],[200,-176],[-100,-661],[50,-586],[-131,-1414],[189,-293],[-193,-1057],[715,-1643],[52,-1129],[136,-343],[657,-454],[280,-571],[231,-36],[660,-1308],[207,-92],[-4,-794],[-258,-826],[-341,-319],[-248,-623],[-523,-937],[-329,-141],[67,-1251],[-363,-1153],[-29,-883],[-181,-1220],[-549,-992],[-251,-1323],[-243,-415],[16,-2418]]],"transform":{"scale":[0.00940009400094001,0.004600046000460006],"translate":[19.999999999999943,19.999999999999943]}};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/janterlaak/teststatic",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(47); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 31))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(31);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/about.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-about */).then(__webpack_require__.bind(null, 32))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/about.js');},resolve:function resolve(){return /*require.resolve*/(32);},chunkName:function chunkName(){return"src-pages-about";}}),universalOptions);var t_2=_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/blog.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-blog */).then(__webpack_require__.bind(null, 33))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/blog.js');},resolve:function resolve(){return /*require.resolve*/(33);},chunkName:function chunkName(){return"src-pages-blog";}}),universalOptions);var t_3=_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Post",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Post */).then(__webpack_require__.bind(null, 34))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Post');},resolve:function resolve(){return /*require.resolve*/(34);},chunkName:function chunkName(){return"src-containers-Post";}}),universalOptions);var t_4=_Users_janterlaak_teststatic_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 35))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(35);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../src/pages/404.js':t_0,'../src/pages/about.js':t_1,'../src/pages/blog.js':t_2,'../src/containers/Post':t_3,'../src/pages/index.js':t_4});var notFoundTemplate="../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(9);

var _StaticInfo = __webpack_require__(15);

var _utils = __webpack_require__(12);

var _Location = _interopRequireDefault(__webpack_require__(30));

var _Spinner = _interopRequireDefault(__webpack_require__(19));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();

      var getComponentForPath = function getComponentForPath(routePath) {
        // Clean the path
        routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

        var Comp = _.templatesByPath[routePath]; // Detect a 404

        var is404 = routePath === '404'; // Detect a failed template

        if (_.templateErrorByPath[routePath]) {
          is404 = true;
          Comp = _.templatesByPath['404'];
        } // Detect an unloaded template
        // TODO:suspense - This will become a suspense resource


        if (!Comp) {
          if (is404) {
            throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
          }

          ;

          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all([(0, _.prefetch)(routePath, {
                      priority: true
                    }), new Promise(function (resolve) {
                      return setTimeout(resolve, "200");
                    })]);

                  case 2:
                    _this3.safeForceUpdate();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }))();

          return Loader;
        }

        return function () {
          var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Comp ? _react.default.createElement(Comp, _extends({}, newProps, is404 ? {
            is404: true
          } : {}, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          })) : null;
        };
      };

      var Comp = getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"404 - Oh no's! We couldn't find that page :("));});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_terlaak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _assets_terlaak_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_terlaak_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jan ter Laak."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null," The name ter Laak is a domain name dedicated to name holders of ter laak"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null," Familie banner "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_assets_terlaak_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,alt:"terlaak"}),";",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null));});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var posts=_ref.posts;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"It's blog time."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," All Posts:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,posts.map(function(post){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:post.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog/post/".concat(post.id,"/")},post.title));})));}));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var post=_ref.post;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog/"},'<'," Back"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,post.title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,post.body));}));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(7);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(63);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(37);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(16);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(13);

// EXTERNAL MODULE: external "react-card-flip"
var external_react_card_flip_ = __webpack_require__(38);
var external_react_card_flip_default = /*#__PURE__*/__webpack_require__.n(external_react_card_flip_);

// EXTERNAL MODULE: /Users/janterlaak/teststatic/src/assets/Jan.jpg
var Jan = __webpack_require__(39);
var Jan_default = /*#__PURE__*/__webpack_require__.n(Jan);

// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/components/card.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var card_Card=/*#__PURE__*/function(_Component){_inherits(Card,_Component);function Card(){var _this;_classCallCheck(this,Card);_this=_possibleConstructorReturn(this,_getPrototypeOf(Card).call(this));_this.state={isFlipped:false};_this.handleClick=_this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(Card,[{key:"handleClick",value:function handleClick(event){event.preventDefault();this.setState(function(prevState){return{isFlipped:!prevState.isFlipped};});}},{key:"render",value:function render(){var styles={card:{marginLeft:"auto",marginRight:"auto",color:'red',border:'1px solid #eeeeee',borderRadius:'3px',padding:'15px',width:'500px'},image:{height:'100px',width:'125px'}};return external_react_default.a.createElement(external_react_card_flip_default.a,{isFlipped:this.state.isFlipped},external_react_default.a.createElement("div",{key:"front",style:styles.card},"Welcome to my site",external_react_default.a.createElement("br",null),external_react_default.a.createElement("button",{onClick:this.handleClick},"Flip Card")),external_react_default.a.createElement("div",{key:"back",style:styles.card},external_react_default.a.createElement("img",{style:styles.image,src:Jan_default.a}),external_react_default.a.createElement("button",{onClick:this.handleClick},"Flip Card")));}}]);return Card;}(external_react_["Component"]);;/* harmony default export */ var card = (card_Card);
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(17);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/components/Mailto.js
function Mailto_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Mailto_typeof=function _typeof(obj){return typeof obj;};}else{Mailto_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Mailto_typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function Mailto_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Mailto_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Mailto_createClass(Constructor,protoProps,staticProps){if(protoProps)Mailto_defineProperties(Constructor.prototype,protoProps);if(staticProps)Mailto_defineProperties(Constructor,staticProps);return Constructor;}function Mailto_possibleConstructorReturn(self,call){if(call&&(Mailto_typeof(call)==="object"||typeof call==="function")){return call;}return Mailto_assertThisInitialized(self);}function Mailto_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Mailto_getPrototypeOf(o){Mailto_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Mailto_getPrototypeOf(o);}function Mailto_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Mailto_setPrototypeOf(subClass,superClass);}function Mailto_setPrototypeOf(o,p){Mailto_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Mailto_setPrototypeOf(o,p);}var toSearchString=function toSearchString(){var searchParams=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return Object.keys(searchParams).map(function(key){return"".concat(key,"=").concat(encodeURIComponent(searchParams[key]));}).join('&');};var createMailtoLink=function createMailtoLink(email,headers){var link="mailto:".concat(email);if(headers){link+="?".concat(toSearchString(headers));}return link;};var Mailto_Mailto=/*#__PURE__*/function(_Component){Mailto_inherits(Mailto,_Component);function Mailto(){Mailto_classCallCheck(this,Mailto);return Mailto_possibleConstructorReturn(this,Mailto_getPrototypeOf(Mailto).apply(this,arguments));}Mailto_createClass(Mailto,[{key:"render",value:function render(){return this.props.obfuscate?this.renderObfuscatedLink():this.renderLink();}},{key:"renderLink",value:function renderLink(){var _this$props=this.props,email=_this$props.email,obfuscate=_this$props.obfuscate,headers=_this$props.headers,children=_this$props.children,others=_objectWithoutProperties(_this$props,["email","obfuscate","headers","children"]);return external_react_default.a.createElement("a",_extends({href:createMailtoLink(email,headers)},others),children);}},{key:"renderObfuscatedLink",value:function renderObfuscatedLink(){var _this$props2=this.props,email=_this$props2.email,obfuscate=_this$props2.obfuscate,headers=_this$props2.headers,children=_this$props2.children,others=_objectWithoutProperties(_this$props2,["email","obfuscate","headers","children"]);return external_react_default.a.createElement("a",_extends({onClick:this.handleClick.bind(this),href:"mailto:obfuscated"},others),children);}},{key:"handleClick",value:function handleClick(event){event.preventDefault();var _this$props3=this.props,email=_this$props3.email,headers=_this$props3.headers;window.location.href=createMailtoLink(email,headers);}}]);return Mailto;}(external_react_["Component"]);Mailto_Mailto.defaultProps={obfuscate:false};/* harmony default export */ var components_Mailto = (Mailto_Mailto);
// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/assets/Content.js
var T1=function T1(){return"\n    \n      A Solution Designer and Blockchain specialist in the Nederlands.\n      You can find me on Twitter, Github and Linkedin, or just send me an Email.\n    Also, make sure to check out a few of my \uD83D\uDC68\u200D\uD83D\uDCBB projects or take a look at my recent work below: \uD83D\uDC47";};var T2=function T2(){return"\n    Building Apps with the blockchain in mind. This group is building Apps for the social and commercial domains.\n     We are a team of solution designers building on javascript and Smart Contracts dedicated to Ethereum and Parity chains. This can be private or public just\n    what you needs are.\n     Thank you! \u2764\uFE0F";};var T3=function T3(){return"\n  To build, implement and maintain good E-commerce site is a hard thing to do. Integration in ERP and third party software even harder.\n  Together with a dedicated team of IT-specialist we can make that E-commerce dream a reality.\n\n  ";};var T4=function T4(){return"if you need an E-commerce solution, webshop and/or integration with business processes. We use the latest google technologies so customers find your\n          Shop.";};
// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/components/papersheet.js
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var papersheet_styles=function styles(theme){return{root:_objectSpread({},theme.mixins.gutters(),{width:"75%",maxWidth:1000,paddingTop:theme.spacing.unit*2,paddingBottom:theme.spacing.unit*2,marginLeft:"auto",marginRight:"auto"})};};function PaperSheet(props){var classes=props.classes;return external_react_default.a.createElement("div",null,external_react_default.a.createElement(Paper_default.a,{className:classes.root,elevation:1},external_react_default.a.createElement(Typography_default.a,{variant:"h5",component:"h3"},"Hi, I'm Jan ter Laak"),external_react_default.a.createElement(Typography_default.a,{component:"p"},external_react_default.a.createElement(T1,null))),external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),external_react_default.a.createElement(Paper_default.a,{className:classes.root,elevation:1},external_react_default.a.createElement(Typography_default.a,{variant:"h5",component:"h3"},"Member of Dapp.design"),external_react_default.a.createElement(Typography_default.a,{component:"p"},external_react_default.a.createElement(T2,null))),external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),external_react_default.a.createElement(Paper_default.a,{className:classes.root,elevation:1},external_react_default.a.createElement(Typography_default.a,{variant:"h5",component:"h3"},"E-commerce"),external_react_default.a.createElement(Typography_default.a,{component:"p"},external_react_default.a.createElement(T3,null),external_react_default.a.createElement(components_Mailto,{email:"jan@dapp.design",obfuscate:true},"Email me!"),external_react_default.a.createElement(T4,null),external_react_default.a.createElement("br",null)," Thank you! \u2764\uFE0F")));}/* harmony default export */ var papersheet = (Object(styles_["withStyles"])(papersheet_styles)(PaperSheet));
// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__(21);

// EXTERNAL MODULE: external "topojson"
var external_topojson_ = __webpack_require__(40);

// EXTERNAL MODULE: external "d3-ease"
var external_d3_ease_ = __webpack_require__(41);

// EXTERNAL MODULE: external "react-move"
var external_react_move_ = __webpack_require__(42);

// EXTERNAL MODULE: external "flubber"
var external_flubber_ = __webpack_require__(43);

// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/components/Surface.js
function Surface_extends(){Surface_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return Surface_extends.apply(this,arguments);}function Surface_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){Surface_defineProperty(target,key,source[key]);});}return target;}function Surface_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function Surface_objectWithoutProperties(source,excluded){if(source==null)return{};var target=Surface_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function Surface_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}// @flow weak
function Surface(props){var className=props.className,view=props.view,trbl=props.trbl,style=props.style,children=props.children,other=Surface_objectWithoutProperties(props,["className","view","trbl","style","children"]);var paddingBottom="".concat(Math.round(view[1]/view[0]*100),"%");// uses bottom-padding hack. See https://css-tricks.com/scale-svg/
return external_react_default.a.createElement("div",Surface_extends({className:className,style:Surface_objectSpread({},style,{position:'relative',width:'100%',height:'0px',paddingBottom:paddingBottom})},other),external_react_default.a.createElement("svg",{viewBox:"0 0 ".concat(view[0]," ").concat(view[1]),style:{position:'absolute',width:'100%',height:'100%',left:0,top:0}},external_react_default.a.createElement("g",{transform:"translate(".concat(trbl[3]," ,").concat(trbl[0],")")},children)));}Surface.defaultProps={view:[1000,350],trbl:[10,10,10,10]};
// EXTERNAL MODULE: /Users/janterlaak/teststatic/src/components/states.json
var components_states = __webpack_require__(22);

// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/components/States.js
function States_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){States_typeof=function _typeof(obj){return typeof obj;};}else{States_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return States_typeof(obj);}function States_extends(){States_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return States_extends.apply(this,arguments);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function States_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function States_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function States_createClass(Constructor,protoProps,staticProps){if(protoProps)States_defineProperties(Constructor.prototype,protoProps);if(staticProps)States_defineProperties(Constructor,staticProps);return Constructor;}function States_possibleConstructorReturn(self,call){if(call&&(States_typeof(call)==="object"||typeof call==="function")){return call;}return States_assertThisInitialized(self);}function States_getPrototypeOf(o){States_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return States_getPrototypeOf(o);}function States_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)States_setPrototypeOf(subClass,superClass);}function States_setPrototypeOf(o,p){States_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return States_setPrototypeOf(o,p);}function States_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function States_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// this is just a responsive SVG
// **************************************************
//  SVG Layout
// **************************************************
var States_view=[1000,450];// [width, height]
var States_trbl=[10,10,10,10];// [top, right, bottom, left] margins
var States_States=/*#__PURE__*/function(_PureComponent){States_inherits(States,_PureComponent);function States(){var _getPrototypeOf2;var _this;States_classCallCheck(this,States);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=States_possibleConstructorReturn(this,(_getPrototypeOf2=States_getPrototypeOf(States)).call.apply(_getPrototypeOf2,[this].concat(args)));States_defineProperty(States_assertThisInitialized(States_assertThisInitialized(_this)),"state",{states:Object(external_topojson_["feature"])(components_states,components_states.objects.states).features.map(function(d){return d.geometry.coordinates[0];})});States_defineProperty(States_assertThisInitialized(States_assertThisInitialized(_this)),"update",function(){// take the first one, put it at the end
_this.setState(function(_ref){var states=_ref.states;return{states:[].concat(_toConsumableArray(states.slice(1)),[states[0]])};});});return _this;}States_createClass(States,[{key:"render",value:function render(){var update=this.update,states=this.state.states;var interpolator=Object(external_flubber_["interpolate"])(states[0],states[1]);var styles={card:{marginLeft:"auto",marginRight:"auto",color:'red',border:'1px solid #eeeeee',borderRadius:'3px',padding:'15px',width:'500px'}};return external_react_default.a.createElement("div",{style:styles.card},external_react_default.a.createElement("button",{onClick:update},"Update"),external_react_default.a.createElement(Surface,{view:States_view,trbl:States_trbl},external_react_default.a.createElement(external_react_move_["Animate"],{start:{opacity:0,d:interpolator(1)},enter:[{opacity:[0.7],timing:{duration:1000}}],update:{d:interpolator,timing:{duration:1000,ease:external_d3_ease_["easeQuadOut"]}}},function(state){return external_react_default.a.createElement("g",{transform:"translate(100, 0) scale(0.8)"},external_react_default.a.createElement("path",States_extends({fill:"#ff69b4"},state)));})));}}]);return States;}(external_react_["PureComponent"]);/* harmony default export */ var components_States = (States_States);
// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/pages/index.js
var theme=Object(styles_["createMuiTheme"])({palette:{type:'dark'},typography:{useNextVariants:true}});/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(lib["withSiteData"])(function(){return external_react_default.a.createElement(styles_["MuiThemeProvider"],{theme:theme},external_react_default.a.createElement(CssBaseline_default.a,null),external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),external_react_default.a.createElement(external_react_social_icons_["SocialIcon"],{network:"twitter",bgColor:"#ff5a01",url:"https://twitter.com/DesignDapp/"}),external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),external_react_default.a.createElement(external_react_social_icons_["SocialIcon"],{url:"https://github.com/janterlaak"}),external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),external_react_default.a.createElement(components_Mailto,{email:"jan@terlaak.name",obfuscate:true},"Email me!"),external_react_default.a.createElement(Typography_default.a,{variant:"h3",gutterBottom:true,align:"center"},external_react_default.a.createElement(card,null)),external_react_default.a.createElement(papersheet,null),external_react_default.a.createElement(Typography_default.a,{variant:"h5",gutterBottom:true,align:"center"},"Guessing Game: Witch State are you looking at?"),external_react_default.a.createElement(components_States,null));}));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/terlaak.0d677c51.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Jan.c8ab0bee.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("topojson");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-move");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("flubber");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(48);
module.exports = __webpack_require__(53);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(23).default;

var _require = __webpack_require__(9),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/janterlaak/teststatic/dist/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(23).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(26),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(9),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/janterlaak/teststatic/dist/react-static-templates.js", function () {
    var _require3 = __webpack_require__(26),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 14,
	"./": 14,
	"./index": 14,
	"./index.js": 14
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(15));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(64).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(9);

var _Spinner = _interopRequireDefault(__webpack_require__(19));

var _StaticInfo = __webpack_require__(15);

var _Routes = __webpack_require__(29);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (!routeInfo || !routeInfo.data) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)


      return children(routeInfo.data);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));
var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(24));

var _Spinner = _interopRequireDefault(__webpack_require__(19));

var _StaticInfo = __webpack_require__(15);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(12);

var _ = __webpack_require__(9);

var _Visibility = _interopRequireDefault(__webpack_require__(25));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(8);

var _ = __webpack_require__(9);

var _utils = __webpack_require__(12);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(59));

var _HashScroller = _interopRequireDefault(__webpack_require__(60));

var _StaticInfo = __webpack_require__(15);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template);
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(12);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(3);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(28));

var _Location = _interopRequireDefault(__webpack_require__(30));

var _scrollTo = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)(false);
// Module
exports.push([module.i, "body {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\",\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #191b1c;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(20);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(7);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(8);

// EXTERNAL MODULE: /Users/janterlaak/teststatic/src/app.css
var app = __webpack_require__(61);

// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/App.js
function App(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement("nav",null,external_react_default.a.createElement(router_["Link"],{to:"/"},"Home"),external_react_default.a.createElement(router_["Link"],{to:"/about"},"About")),external_react_default.a.createElement("div",{className:"content"},external_react_default.a.createElement(lib["Routes"],null)));}/* harmony default export */ var src_App = (App);
// CONCATENATED MODULE: /Users/janterlaak/teststatic/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (src_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(src_App);// Hot Module Replacement
if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.6e689968.js.map
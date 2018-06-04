(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vant"] = factory(require("vue"));
	else
		root["vant"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAndroid; });
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);



var isServer = vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(x);
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;

  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(36)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var ctx = __webpack_require__(28);
var hide = __webpack_require__(14);
var has = __webpack_require__(10);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(59);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(57);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */



var prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
var root = _index__WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"] ? global : window;

/* istanbul ignore next */
var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(27);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(102);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(93);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(27);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(32);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(30);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(28);
var invoke = __webpack_require__(73);
var html = __webpack_require__(51);
var cel = __webpack_require__(41);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(27);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(58);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var global = __webpack_require__(6);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(19);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(98);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(51).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(53);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(19);
var $iterCreate = __webpack_require__(99);
var setToStringTag = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(97);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(100)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(104)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/actionsheet/index.vue?vue&type=template&id=03f6986a
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"van-slide-bottom"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],class:_vm.b({ 'withtitle': _vm.title })},[(_vm.title)?_c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b('header')},[_c('div',{domProps:{"textContent":_vm._s(_vm.title)}}),_c('icon',{attrs:{"name":"close"},on:{"click":_vm.onCancel}})],1):_c('ul',{staticClass:"van-hairline--bottom"},_vm._l((_vm.actions),function(item){return _c('li',{class:[_vm.b('item'), item.className, 'van-hairline--top'],on:{"click":function($event){$event.stopPropagation();_vm.onClickItem(item)}}},[(!item.loading)?[_c('span',{class:_vm.b('name')},[_vm._v(_vm._s(item.name))]),(item.subname)?_c('span',{class:_vm.b('subname')},[_vm._v(_vm._s(item.subname))]):_vm._e()]:_c('loading',{class:_vm.b('loading'),attrs:{"size":"20px"}})],2)})),(_vm.cancelText)?_c('div',{class:[_vm.b('cancel'), 'van-hairline--top'],domProps:{"textContent":_vm._s(_vm.cancelText)},on:{"click":_vm.onCancel}}):_c('div',{class:_vm.b('content')},[_vm._t("default")],2)])])}
var staticRenderFns = []

// CONCATENATED MODULE: ./packages/actionsheet/index.vue?vue&type=template&id=03f6986a

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(3);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(2);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./packages/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/utils/deep-assign.js


var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;


function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(utils["d" /* isDef */])(val) || deep_assign_hasOwnProperty.call(to, key) && !Object(utils["d" /* isDef */])(to[key])) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(utils["e" /* isObj */])(val)) {
    to[key] = val;
  } else {
    to[key] = deep_assign_assign(Object(to[key]), from[key]);
  }
}

function deep_assign_assign(to, from) {
  for (var key in from) {
    if (deep_assign_hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  return to;
}
// CONCATENATED MODULE: ./packages/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '名字',
  tel: '联系电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  complete: '完成',
  contact: '联系人',
  province: '选择省份',
  city: '选择城市',
  county: '选择地区',
  loadingTip: '加载中...',
  nameEmpty: '请填写名字',
  nameOverlimit: '名字过长，请重新输入',
  telInvalid: '请填写正确的手机号码或电话号码',
  telPlaceholder: '手机或固定电话',
  vanContactCard: {
    addText: '添加订单联系人信息'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanContactEdit: {
    delete: '删除联系人',
    confirmDelete: '确定要删除这个联系人么'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券码',
    tips: '使用优惠',
    reduce: '省',
    count: function count(_count) {
      return '\u60A8\u6709 ' + _count + ' \u4E2A\u53EF\u7528\u4F18\u60E0';
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    disabled: '不可用优惠',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + '\u6298';
    },
    condition: function condition(_condition) {
      return '\u6EE1' + _condition + '\u5143\u53EF\u7528';
    }
  },
  vanAddressEdit: {
    area: '收件地区',
    addressText: '收货',
    areaEmpty: '请选择收件地区',
    addressOverlimit: '详细地址不能超过200个字符',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    deleteAddress: '删除收货地址',
    confirmDelete: '确定要删除这个收货地址么',
    label: {
      name: '收货人',
      postal: '邮政编码'
    },
    placeholder: {
      postal: '邮政编码(选填)'
    }
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '如街道、楼层、门牌号等'
  },
  vanAddressList: {
    address: '收货地址',
    add: '新增收货地址'
  },
  vanSku: {
    unavailable: '商品已经无法购买啦',
    spec: '请选择完整的规格',
    least: '至少选择一件',
    quota: function quota(_quota) {
      return '\u9650\u8D2D' + _quota + '\u4EF6';
    },
    inventory: '库存不足',
    purchase: function purchase(count) {
      return '\u60A8\u5DF2\u8D2D\u4E70' + count + '\u4EF6';
    }
  },
  vanSkuActions: {
    cart: '加入购物车',
    buy: '立即购买'
  },
  vanSkuMessages: {
    fill: '请填写',
    upload: '请上传',
    number: '请填写正确的数字格式留言',
    email: '请填写正确的邮箱',
    'id_no': '请填写正确的身份证号码',
    overlimit: '写的太多了，不要超过200字',
    onePic: '仅限一张',
    placeholder: {
      'id_no': '输入18位身份证号码',
      text: '输入文本',
      tel: '输入数字',
      email: '输入邮箱',
      date: '点击选择日期',
      time: '点击选择时间',
      textarea: '点击填写段落文本'
    }
  },
  vanSkuImgUploader: {
    or: '或',
    uploading: '正在上传...',
    rephoto: '重拍',
    photo: '拍照',
    reselect: '重新选择照片',
    select: '选择照片',
    maxSize: function maxSize(_maxSize) {
      return '\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A' + _maxSize + 'MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8';
    }
  },
  vanSkuStepper: {
    title: '购买数量',
    remain: function remain(count) {
      return '\u5269\u4F59' + count + '\u4EF6';
    },
    quota: function quota(_quota2) {
      return '\u6BCF\u4EBA\u9650\u8D2D' + _quota2 + '\u4EF6';
    }
  }
});
// CONCATENATED MODULE: ./packages/locale/index.js




var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantLang', defaultLang);
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = zh_CN, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _add;

    proto.$vantLang = lang;
    this.add((_add = {}, _add[lang] = messages, _add));
  },
  add: function add() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    deep_assign_assign(proto.$vantMessages, messages);
  }
};

locale.install();

/* harmony default export */ var packages_locale = (locale);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(7);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./packages/mixins/bem.js

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var bem_prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  keys_default()(mods).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ var bem = ({
  methods: {
    b: function b(el, mods) {
      var name = this.$options.name;


      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }
      el = join(name, el, ELEMENT);

      return mods ? [el, bem_prefix(el, mods)] : el;
    }
  }
});
// CONCATENATED MODULE: ./packages/mixins/i18n.js
// component mixin


/* harmony default export */ var i18n = ({
  computed: {
    $t: function $t() {
      var name = this.$options.name;

      var prefix = name ? Object(utils["a" /* camelize */])(name) + '.' : '';

      if (false) {}

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var message = Object(utils["b" /* get */])(messages, prefix + path) || Object(utils["b" /* get */])(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/utils/create-basic.js
/**
 * Create a basic component with common options
 */




var create_basic_install = function install(Vue) {
  Vue.component(this.name, this);
};

/* harmony default export */ var create_basic = (function (sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || create_basic_install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);

  return sfc;
});;
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/index.vue?vue&type=template&id=6df04c3f
var iconvue_type_template_id_6df04c3f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',_vm._g({class:[_vm.b(), ("van-icon-" + _vm.name)],style:({ color: _vm.color })},_vm.$listeners),[_vm._t("default"),(_vm.isDef(_vm.info))?_c('div',{class:_vm.b('info')},[_vm._v(_vm._s(_vm.info))]):_vm._e()],2)}
var iconvue_type_template_id_6df04c3f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/icon/index.vue?vue&type=template&id=6df04c3f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//




/* harmony default export */ var iconvue_type_script_lang_js = (create_basic({
  name: 'icon',

  props: {
    name: String,
    info: [String, Number],
    color: String
  },

  methods: {
    isDef: utils["d" /* isDef */]
  }
}));
// CONCATENATED MODULE: ./packages/icon/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_iconvue_type_script_lang_js = (iconvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/icon/index.vue





/* normalize component */

var component = normalizeComponent(
  packages_iconvue_type_script_lang_js,
  iconvue_type_template_id_6df04c3f_render,
  iconvue_type_template_id_6df04c3f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/index.vue?vue&type=template&id=8cd290aa
var loadingvue_type_template_id_8cd290aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b([_vm.type, _vm.color]),style:(_vm.style)},[_c('span',{class:_vm.b('spinner', _vm.type)},[_vm._l(((_vm.type === 'spinner' ? 12 : 0)),function(item){return _c('i')}),(_vm.type === 'circular')?_c('svg',{class:_vm.b('circular'),attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]):_vm._e()],2)])}
var loadingvue_type_template_id_8cd290aa_staticRenderFns = []

// CONCATENATED MODULE: ./packages/loading/index.vue?vue&type=template&id=8cd290aa

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var loadingvue_type_script_lang_js = (create_basic({
  name: 'loading',

  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: 'black'
    }
  },

  computed: {
    style: function style() {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./packages/loading/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_loadingvue_type_script_lang_js = (loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/loading/index.vue





/* normalize component */

var loading_component = normalizeComponent(
  packages_loadingvue_type_script_lang_js,
  loadingvue_type_template_id_8cd290aa_render,
  loadingvue_type_template_id_8cd290aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = (loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell/index.vue?vue&type=template&id=7184f604
var cellvue_type_template_id_7184f604_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    _vm.b({
      center: _vm.center,
      required: _vm.required,
      clickable: _vm.isLink || _vm.clickable
    }),
    { 'van-hairline': _vm.border }
  ],on:{"click":_vm.onClick}},[_vm._t("icon",[(_vm.icon)?_c('icon',{class:_vm.b('left-icon'),attrs:{"name":_vm.icon}}):_vm._e()]),(_vm.title || _vm.$slots.title)?_c('div',{class:_vm.b('title')},[_vm._t("title",[_c('span',{domProps:{"textContent":_vm._s(_vm.title)}}),(_vm.label)?_c('div',{class:_vm.b('label'),domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e()])],2):_vm._e(),(_vm.value || _vm.$slots.default)?_c('div',{class:_vm.b('value', { alone: !_vm.$slots.title && !_vm.title })},[_vm._t("default",[_c('span',{domProps:{"textContent":_vm._s(_vm.value)}})])],2):_vm._e(),_vm._t("right-icon",[(_vm.isLink)?_c('icon',{class:_vm.b('right-icon'),attrs:{"name":"arrow"}}):_vm._e()]),_vm._t("extra")],2)}
var cellvue_type_template_id_7184f604_staticRenderFns = []

// CONCATENATED MODULE: ./packages/cell/index.vue?vue&type=template&id=7184f604

// CONCATENATED MODULE: ./packages/mixins/router-link.js
/**
 * add Vue-Router support
 */

/* harmony default export */ var router_link = ({
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },

  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var cellvue_type_script_lang_js = (create_basic({
  name: 'cell',

  components: {
    Icon: icon
  },

  mixins: [router_link],

  props: {
    icon: String,
    title: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./packages/cell/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_cellvue_type_script_lang_js = (cellvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/cell/index.vue





/* normalize component */

var cell_component = normalizeComponent(
  packages_cellvue_type_script_lang_js,
  cellvue_type_template_id_7184f604_render,
  cellvue_type_template_id_7184f604_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cell = (cell_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell-group/index.vue?vue&type=template&id=037cf4df
var cell_groupvue_type_template_id_037cf4df_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.b(), { 'van-hairline--top-bottom': _vm.border }]},[_vm._t("default")],2)}
var cell_groupvue_type_template_id_037cf4df_staticRenderFns = []

// CONCATENATED MODULE: ./packages/cell-group/index.vue?vue&type=template&id=037cf4df

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell-group/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var cell_groupvue_type_script_lang_js = (create_basic({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./packages/cell-group/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_cell_groupvue_type_script_lang_js = (cell_groupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/cell-group/index.vue





/* normalize component */

var cell_group_component = normalizeComponent(
  packages_cell_groupvue_type_script_lang_js,
  cell_groupvue_type_template_id_037cf4df_render,
  cell_groupvue_type_template_id_037cf4df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cell_group = (cell_group_component.exports);
// CONCATENATED MODULE: ./packages/utils/create.js

/**
 * Create a component with common options
 */






/* harmony default export */ var create = (function (sfc) {
  sfc.components = assign_default()(sfc.components || {}, {
    Icon: icon,
    Loading: loading,
    Cell: cell,
    CellGroup: cell_group
  });
  return create_basic(sfc);
});;
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(1);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/mixins/popup/Modal.vue?vue&type=template&id=4f4badc2
var Modalvue_type_template_id_4f4badc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"van-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"van-modal",class:_vm.className,style:(_vm.style),on:{"touchmove":function($event){$event.preventDefault();$event.stopPropagation();},"click":function($event){_vm.$emit('click', $event)}}})])}
var Modalvue_type_template_id_4f4badc2_staticRenderFns = []

// CONCATENATED MODULE: ./packages/mixins/popup/Modal.vue?vue&type=template&id=4f4badc2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/mixins/popup/Modal.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Modalvue_type_script_lang_js = ({
  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style: function style() {
      return extends_default()({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
});
// CONCATENATED MODULE: ./packages/mixins/popup/Modal.vue?vue&type=script&lang=js
 /* harmony default export */ var popup_Modalvue_type_script_lang_js = (Modalvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/mixins/popup/Modal.vue





/* normalize component */

var Modal_component = normalizeComponent(
  popup_Modalvue_type_script_lang_js,
  Modalvue_type_template_id_4f4badc2_render,
  Modalvue_type_template_id_4f4badc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./packages/mixins/popup/context.js
/* harmony default export */ var popup_context = ({
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  plusKey: function plusKey(key) {
    return this[key]++;
  },


  get top() {
    return this.stack[this.stack.length - 1];
  }
});
// CONCATENATED MODULE: ./packages/mixins/popup/manager.js






var defaultConfig = {
  className: '',
  customStyle: {}
};

/* harmony default export */ var manager = ({
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!popup_context.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      popup_context.stack.push({ vm: vm, config: config, targetNode: targetNode });
      this.update();
    };
  },
  close: function close(id) {
    var stack = popup_context.stack;


    if (stack.length) {
      if (popup_context.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        popup_context.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = popup_context.modal;


    if (!modal) {
      modal = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);

      popup_context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (popup_context.top) {
      var _context$top = popup_context.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;


      targetNode.appendChild(modal.$el);
      assign_default()(modal, extends_default()({}, defaultConfig, config, {
        visible: true
      }));
    }
  },


  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    if (popup_context.top) {
      var vm = popup_context.top.vm;

      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./packages/utils/scroll.js


/* harmony default export */ var utils_scroll = ({
  debounce: function debounce(func, wait, immediate) {
    var timeout = void 0,
        args = void 0,
        context = void 0,
        timestamp = void 0,
        result = void 0;
    return function () {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function later() {
        var last = new Date() - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          result = func.apply(context, args);
        }
      };
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result;
    };
  },


  /* 找到最近的触发滚动事件的元素
   * @param {Element} element
  * @param {Element} rootElement
  * @return {Element | window}
   */
  getScrollEventTarget: function getScrollEventTarget(element) {
    var rootParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent;
  },


  // 判断元素是否被加入到页面节点内
  isAttached: function isAttached(element) {
    var currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true;
      }
      if (currentNode.nodeType === 11) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
  },


  // 获取滚动高度
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },


  // 设置滚动高度
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },


  // 获取元素距离顶部高度
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },


  getComputedStyle: !utils["f" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});
// CONCATENATED MODULE: ./packages/utils/event.js


var supportsPassive = false;
if (!utils["f" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  !utils["f" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? { capture: false, passive: passive } : false);
}

function off(target, event, handler) {
  !utils["f" /* isServer */] && target.removeEventListener(event, handler);
}
// CONCATENATED MODULE: ./packages/mixins/touch.js
/* harmony default export */ var touch = ({
  methods: {
    touchStart: function touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    }
  }
});
// CONCATENATED MODULE: ./packages/mixins/popup/index.js






/* harmony default export */ var popup = ({
  mixins: [touch],

  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: Function,
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value: function value(val) {
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },

  created: function created() {
    this._popupId = 'popup-' + popup_context.plusKey('id');
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }
    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },


  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        popup_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);
        if (!popup_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        popup_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        popup_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);
        if (!popup_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this._popupId);
      this.$emit('input', false);
    },
    move: function move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
        /* istanbul ignore if */
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = utils_scroll.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;

      var status = '11';

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      /* istanbul ignore next */
      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      if (this.overlay) {
        manager.open(this, {
          zIndex: popup_context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }
      this.$el.style.zIndex = popup_context.plusKey('zIndex');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/actionsheet/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var actionsheetvue_type_script_lang_js = (create({
  name: 'actionsheet',

  mixins: [popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClickItem: function onClickItem(item) {
      if (typeof item.callback === 'function') {
        item.callback(item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./packages/actionsheet/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_actionsheetvue_type_script_lang_js = (actionsheetvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/actionsheet/index.vue





/* normalize component */

var actionsheet_component = normalizeComponent(
  packages_actionsheetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var actionsheet = (actionsheet_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-edit/index.vue?vue&type=template&id=18b139b4
var address_editvue_type_template_id_18b139b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('cell-group',[_c('field',{attrs:{"maxlength":"15","placeholder":_vm.$t('name'),"label":_vm.$t('label.name'),"error":_vm.errorInfo.name},on:{"focus":function($event){_vm.onFocus('name')}},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}}),_c('field',{attrs:{"type":"tel","label":_vm.$t('tel'),"placeholder":_vm.$t('telPlaceholder'),"error":_vm.errorInfo.tel},on:{"focus":function($event){_vm.onFocus('tel')}},model:{value:(_vm.data.tel),callback:function ($$v) {_vm.$set(_vm.data, "tel", $$v)},expression:"data.tel"}}),_c('cell',{class:_vm.b('area'),attrs:{"clickable":"","title":_vm.$t('area')},on:{"click":function($event){_vm.showArea = true}}},[_c('span',[_vm._v(_vm._s(_vm.data.province || _vm.$t('province')))]),_c('span',[_vm._v(_vm._s(_vm.data.city || _vm.$t('city')))]),_c('span',[_vm._v(_vm._s(_vm.data.county || _vm.$t('county')))])]),_c('address-edit-detail',{attrs:{"value":_vm.data.address_detail,"is-error":_vm.errorInfo.address_detail,"show-search-result":_vm.showSearchResult,"search-result":_vm.searchResult},on:{"focus":function($event){_vm.onFocus('address_detail')},"blur":function($event){_vm.detailFocused = false},"input":_vm.onChangeDetail,"select-search":function($event){_vm.$emit('select-search', $event)}}}),(_vm.showPostal)?_c('field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideBottomFields),expression:"!hideBottomFields"}],staticClass:"van-hairline--top",attrs:{"type":"tel","label":_vm.$t('label.postal'),"placeholder":_vm.$t('placeholder.postal'),"maxlength":"6","error":_vm.errorInfo.postal_code},on:{"focus":function($event){_vm.onFocus('postal_code')}},model:{value:(_vm.data.postal_code),callback:function ($$v) {_vm.$set(_vm.data, "postal_code", $$v)},expression:"data.postal_code"}}):_vm._e(),_vm._t("default"),(_vm.showSetDefault)?_c('switch-cell',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideBottomFields),expression:"!hideBottomFields"}],attrs:{"title":_vm.$t('defaultAddress')},model:{value:(_vm.data.is_default),callback:function ($$v) {_vm.$set(_vm.data, "is_default", $$v)},expression:"data.is_default"}}):_vm._e()],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideBottomFields),expression:"!hideBottomFields"}],class:_vm.b('buttons')},[_c('van-button',{attrs:{"block":"","loading":_vm.isSaving,"type":"primary"},on:{"click":_vm.onSave}},[_vm._v("\n      "+_vm._s(_vm.$t('save'))+"\n    ")]),(_vm.isEdit)?_c('van-button',{attrs:{"block":"","loading":_vm.isDeleting},on:{"click":_vm.onDelete}},[_vm._v("\n      "+_vm._s(_vm.$t('deleteAddress'))+"\n    ")]):_vm._e()],1),_c('popup',{attrs:{"position":"bottom"},model:{value:(_vm.showArea),callback:function ($$v) {_vm.showArea=$$v},expression:"showArea"}},[_c('van-area',{ref:"area",attrs:{"loading":!_vm.areaListLoaded,"value":_vm.data.area_code,"area-list":_vm.areaList},on:{"confirm":_vm.onAreaConfirm,"cancel":function($event){_vm.showArea = false}}})],1)],1)}
var address_editvue_type_template_id_18b139b4_staticRenderFns = []

// CONCATENATED MODULE: ./packages/address-edit/index.vue?vue&type=template&id=18b139b4

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/field/index.vue?vue&type=template&id=5df6326e
var fieldvue_type_template_id_5df6326e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cell',{class:_vm.b({
    error: _vm.error,
    disabled: _vm.$attrs.disabled,
    'has-icon': _vm.hasIcon,
    'min-height': _vm.type === 'textarea' && !_vm.autosize
  }),attrs:{"title":_vm.label,"center":_vm.center,"border":_vm.border,"required":_vm.required}},[_vm._t("label",null,{slot:"title"}),(_vm.type === 'textarea')?_c('textarea',_vm._g(_vm._b({ref:"textarea",class:_vm.b('control'),domProps:{"value":_vm.value}},'textarea',_vm.$attrs,false),_vm.listeners)):_c('input',_vm._g(_vm._b({class:_vm.b('control'),attrs:{"type":_vm.type},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),(_vm.errorMessage)?_c('div',{class:_vm.b('error-message'),domProps:{"textContent":_vm._s(_vm.errorMessage)}}):_vm._e(),(_vm.hasIcon)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.$slots.icon || _vm.value),expression:"$slots.icon || value"}],class:_vm.b('icon'),on:{"touchstart":function($event){$event.preventDefault();return _vm.onClickIcon($event)}}},[_vm._t("icon",[_c('icon',{attrs:{"name":_vm.icon}})])],2):_vm._e(),(_vm.$slots.button)?_c('div',{class:_vm.b('button'),attrs:{"slot":"extra"},slot:"extra"},[_vm._t("button")],2):_vm._e()],2)}
var fieldvue_type_template_id_5df6326e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/field/index.vue?vue&type=template&id=5df6326e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/field/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var fieldvue_type_script_lang_js = (create({
  name: 'field',

  inheritAttrs: false,

  props: {
    value: null,
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    required: Boolean,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    },
    onIconClick: {
      type: Function,
      default: function _default() {}
    }
  },

  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted: function mounted() {
    this.$nextTick(this.adjustSize);
  },


  computed: {
    hasIcon: function hasIcon() {
      return this.$slots.icon || this.icon;
    },
    listeners: function listeners() {
      return extends_default()({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },

  methods: {
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick();
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;

        var allowPoint = this.value.indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      if (!(this.type === 'textarea' && this.autosize)) {
        return;
      }

      var el = this.$refs.textarea;
      /* istanbul ignore if */
      if (!el) {
        return;
      }

      el.style.height = 'auto';

      var height = el.scrollHeight;
      if (Object(utils["e" /* isObj */])(this.autosize)) {
        var _autosize = this.autosize,
            maxHeight = _autosize.maxHeight,
            minHeight = _autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        el.style.height = height + 'px';
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/field/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_fieldvue_type_script_lang_js = (fieldvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/field/index.vue





/* normalize component */

var field_component = normalizeComponent(
  packages_fieldvue_type_script_lang_js,
  fieldvue_type_template_id_5df6326e_render,
  fieldvue_type_template_id_5df6326e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var field = (field_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/index.vue?vue&type=template&id=2c96799c
var buttonvue_type_template_id_2c96799c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.b([
    _vm.type,
    _vm.size,
    {
      block: _vm.block,
      loading: _vm.loading,
      disabled: _vm.disabled,
      unclickable: _vm.disabled || _vm.loading,
      'bottom-action': _vm.bottomAction
    }
  ]),attrs:{"type":_vm.nativeType,"disabled":_vm.disabled},on:{"click":_vm.onClick}},[(_vm.loading)?_c('loading',{attrs:{"size":"20px","color":_vm.type === 'default' ? 'black' : 'white'}}):_vm._e(),_c('span',{class:_vm.b('text')},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)],1)}
var buttonvue_type_template_id_2c96799c_staticRenderFns = []

// CONCATENATED MODULE: ./packages/button/index.vue?vue&type=template&id=2c96799c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var buttonvue_type_script_lang_js = (create({
  name: 'button',

  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/button/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_buttonvue_type_script_lang_js = (buttonvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/button/index.vue





/* normalize component */

var button_component = normalizeComponent(
  packages_buttonvue_type_script_lang_js,
  buttonvue_type_template_id_2c96799c_render,
  buttonvue_type_template_id_2c96799c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_button = (button_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/popup/index.vue?vue&type=template&id=c139b5fe
var popupvue_type_template_id_c139b5fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],class:_vm.b(( _obj = {}, _obj[_vm.position] = _vm.position, _obj ))},[_vm._t("default")],2)])
var _obj;}
var popupvue_type_template_id_c139b5fe_staticRenderFns = []

// CONCATENATED MODULE: ./packages/popup/index.vue?vue&type=template&id=c139b5fe

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/popup/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//




/* harmony default export */ var popupvue_type_script_lang_js = (create({
  name: 'popup',

  mixins: [popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : 'popup-slide-' + this.position);
    }
  }
}));
// CONCATENATED MODULE: ./packages/popup/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_popupvue_type_script_lang_js = (popupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/popup/index.vue





/* normalize component */

var popup_component = normalizeComponent(
  packages_popupvue_type_script_lang_js,
  popupvue_type_template_id_c139b5fe_render,
  popupvue_type_template_id_c139b5fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_popup = (popup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=template&id=9d1e33e2
var toastvue_type_template_id_9d1e33e2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"van-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],class:_vm.b([_vm.displayStyle, _vm.position])},[(_vm.displayStyle === 'text')?_c('div',[_vm._v(_vm._s(_vm.message))]):_vm._e(),(_vm.displayStyle === 'html')?_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),(_vm.displayStyle === 'default')?[(_vm.type === 'loading')?_c('loading',{attrs:{"color":"white","type":_vm.loadingType}}):_c('icon',{class:_vm.b('icon'),attrs:{"name":_vm.type}}),(_vm.hasMessage)?_c('div',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.message))]):_vm._e()]:_vm._e()],2)])}
var toastvue_type_template_id_9d1e33e2_staticRenderFns = []

// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=template&id=9d1e33e2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/toast.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var STYLE_LIST = ['success', 'fail', 'loading'];

/* harmony default export */ var toastvue_type_script_lang_js = (create({
  name: 'toast',

  mixins: [popup],

  props: {
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    displayStyle: function displayStyle() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    },
    hasMessage: function hasMessage() {
      return this.message || this.message === 0;
    }
  }
}));
// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=script&lang=js
 /* harmony default export */ var toast_toastvue_type_script_lang_js = (toastvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/toast/toast.vue





/* normalize component */

var toast_component = normalizeComponent(
  toast_toastvue_type_script_lang_js,
  toastvue_type_template_id_9d1e33e2_render,
  toastvue_type_template_id_9d1e33e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toast_toast = (toast_component.exports);
// CONCATENATED MODULE: ./packages/toast/index.js






var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};
var toast_parseOptions = function parseOptions(message) {
  return Object(utils["e" /* isObj */])(message) ? message : { message: message };
};

var queue = [];
var singleton = true;
var currentOptions = extends_default()({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(toast_toast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }
  return queue[queue.length - 1];
};

// transform toast options to popup props
function transformer(options) {
  options.overlay = options.mask;
  if (options.forbidClick && !options.overlay) {
    options.overlay = true;
    options.overlayStyle = { background: 'transparent' };
  }
  return options;
}

function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var toast = createInstance();

  options = extends_default()({}, currentOptions, toast_parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  assign_default()(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
};

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return Toast(extends_default()({
      type: type }, toast_parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = toast_createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  assign_default()(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = extends_default()({}, defaultOptions);
};

Toast.allowMultiple = function () {
  var allow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  singleton = !allow;
};

Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(toast_toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = Toast;

/* harmony default export */ var packages_toast = (Toast);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(15);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/dialog.vue?vue&type=template&id=3fb06cd0
var dialogvue_type_template_id_3fb06cd0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"van-dialog-bounce"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],class:_vm.b()},[(_vm.title)?_c('div',{class:_vm.b('header'),domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_c('div',{staticClass:"van-hairline",class:_vm.b('content')},[_vm._t("default",[(_vm.message)?_c('div',{class:_vm.b('message', { withtitle: _vm.title }),domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e()])],2),_c('div',{class:_vm.b('footer', { 'buttons': _vm.showCancelButton && _vm.showConfirmButton })},[_c('van-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCancelButton),expression:"showCancelButton"}],class:_vm.b('cancel'),attrs:{"loading":_vm.loading.cancel,"size":"large"},on:{"click":function($event){_vm.handleAction('cancel')}}},[_vm._v("\n        "+_vm._s(_vm.cancelButtonText || _vm.$t('cancel'))+"\n      ")]),_c('van-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showConfirmButton),expression:"showConfirmButton"}],class:[_vm.b('confirm'), { 'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton }],attrs:{"size":"large","loading":_vm.loading.confirm},on:{"click":function($event){_vm.handleAction('confirm')}}},[_vm._v("\n        "+_vm._s(_vm.confirmButtonText || _vm.$t('confirm'))+"\n      ")])],1)])])}
var dialogvue_type_template_id_3fb06cd0_staticRenderFns = []

// CONCATENATED MODULE: ./packages/dialog/dialog.vue?vue&type=template&id=3fb06cd0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/dialog.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var dialogvue_type_script_lang_js = (create({
  name: 'dialog',

  components: {
    VanButton: packages_button
  },

  mixins: [popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },


  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function () {
          _this.onClose(action);
          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
}));
// CONCATENATED MODULE: ./packages/dialog/dialog.vue?vue&type=script&lang=js
 /* harmony default export */ var dialog_dialogvue_type_script_lang_js = (dialogvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/dialog/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  dialog_dialogvue_type_script_lang_js,
  dialogvue_type_template_id_3fb06cd0_render,
  dialogvue_type_template_id_3fb06cd0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js






var instance = void 0;

var dialog_initInstance = function initInstance() {
  instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog))({
    el: document.createElement('div')
  });

  instance.$on('input', function (value) {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

var dialog_Dialog = function Dialog(options) {
  return new promise_default.a(function (resolve, reject) {
    if (!instance) {
      dialog_initInstance();
    }

    assign_default()(instance, extends_default()({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

dialog_Dialog.alert = function (options) {
  return dialog_Dialog(extends_default()({}, dialog_Dialog.currentOptions, options));
};

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(extends_default()({}, dialog_Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  assign_default()(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = extends_default()({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(dialog);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = dialog_Dialog;
dialog_Dialog.resetDefaultOptions();

/* harmony default export */ var packages_dialog = (dialog_Dialog);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/area/index.vue?vue&type=template&id=064b22e6
var areavue_type_template_id_064b22e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picker',{ref:"picker",class:_vm.b(),attrs:{"show-toolbar":"","value-key":"name","title":_vm.title,"loading":_vm.loading,"columns":_vm.columns,"item-height":_vm.itemHeight,"visible-item-count":_vm.visibleItemCount},on:{"change":_vm.onChange,"confirm":function($event){_vm.$emit('confirm', $event)},"cancel":function($event){_vm.$emit('cancel', $event)}}})}
var areavue_type_template_id_064b22e6_staticRenderFns = []

// CONCATENATED MODULE: ./packages/area/index.vue?vue&type=template&id=064b22e6

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/index.vue?vue&type=template&id=0579082a
var pickervue_type_template_id_0579082a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[(_vm.showToolbar)?_c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b('toolbar')},[_vm._t("default",[_c('div',{class:_vm.b('cancel'),on:{"click":function($event){_vm.emit('cancel')}}},[_vm._v(_vm._s(_vm.cancelButtonText || _vm.$t('cancel')))]),(_vm.title)?_c('div',{staticClass:"van-ellipsis",class:_vm.b('title'),domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_c('div',{class:_vm.b('confirm'),on:{"click":function($event){_vm.emit('confirm')}}},[_vm._v(_vm._s(_vm.confirmButtonText || _vm.$t('confirm')))])])],2):_vm._e(),(_vm.loading)?_c('div',{class:_vm.b('loading')},[_c('loading')],1):_vm._e(),_c('div',{class:_vm.b('columns'),style:(_vm.columnsStyle),on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._l((_vm.currentColumns),function(item,index){return _c('picker-column',{key:index,attrs:{"value-key":_vm.valueKey,"options":item.values,"class-name":item.className,"default-index":item.defaultIndex,"item-height":_vm.itemHeight,"visible-item-count":_vm.visibleItemCount},on:{"change":function($event){_vm.onChange(index)}}})}),_c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b('frame'),style:(_vm.frameStyle)})],2)])}
var pickervue_type_template_id_0579082a_staticRenderFns = []

// CONCATENATED MODULE: ./packages/picker/index.vue?vue&type=template&id=0579082a

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/PickerColumn.vue?vue&type=template&id=0a2c9c90
var PickerColumnvue_type_template_id_0a2c9c90_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.b(), _vm.className],style:(_vm.columnStyle),on:{"touchstart":_vm.onTouchStart,"touchmove":function($event){$event.preventDefault();return _vm.onTouchMove($event)},"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},[_c('ul',{style:(_vm.wrapperStyle)},_vm._l((_vm.options),function(option,index){return _c('li',{staticClass:"van-ellipsis",class:_vm.b('item', {
        disabled: _vm.isDisabled(option),
        selected: index === _vm.currentIndex
      }),domProps:{"textContent":_vm._s(_vm.getOptionText(option))},on:{"click":function($event){_vm.setIndex(index, true)}}})}))])}
var PickerColumnvue_type_template_id_0a2c9c90_staticRenderFns = []

// CONCATENATED MODULE: ./packages/picker/PickerColumn.vue?vue&type=template&id=0a2c9c90

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__(42);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/PickerColumn.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var DEFAULT_DURATION = 200;
var range = function range(num, arr) {
  return Math.min(Math.max(num, arr[0]), arr[1]);
};

/* harmony default export */ var PickerColumnvue_type_script_lang_js = (create({
  name: 'picker-column',

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent && this.$parent.children.push(this);
  },
  mounted: function mounted() {
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
  },


  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    },
    options: function options(next, prev) {
      if (stringify_default()(next) !== stringify_default()(prev)) {
        this.setIndex(0);
      }
    }
  },

  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },
    columnStyle: function columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    wrapperStyle: function wrapperStyle() {
      return {
        transition: this.duration + 'ms',
        transform: 'translate3d(0, ' + (this.offset + this.baseOffset) + 'px, 0)',
        lineHeight: this.itemHeight + 'px'
      };
    },
    currentValue: function currentValue() {
      return this.options[this.currentIndex];
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(this.startOffset + deltaY, [-(this.count * this.itemHeight), this.itemHeight]);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = range(Math.round(-this.offset / this.itemHeight), [0, this.count - 1]);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, [0, this.count]);
      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return Object(utils["e" /* isObj */])(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["e" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index);
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
          return;
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/picker/PickerColumn.vue?vue&type=script&lang=js
 /* harmony default export */ var picker_PickerColumnvue_type_script_lang_js = (PickerColumnvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/picker/PickerColumn.vue





/* normalize component */

var PickerColumn_component = normalizeComponent(
  picker_PickerColumnvue_type_script_lang_js,
  PickerColumnvue_type_template_id_0a2c9c90_render,
  PickerColumnvue_type_template_id_0a2c9c90_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PickerColumn = (PickerColumn_component.exports);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(29);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./packages/utils/deep-clone.js



function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if ((typeof obj === 'undefined' ? 'undefined' : typeof_default()(obj)) === 'object') {
    return deep_assign_assign({}, obj);
  }
  return obj;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var pickervue_type_script_lang_js = (create({
  name: 'picker',

  components: {
    PickerColumn: PickerColumn
  },

  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      children: [],
      currentColumns: []
    };
  },


  watch: {
    columns: {
      handler: function handler() {
        var columns = this.columns.map(deepClone);
        this.isSimpleColumn = columns.length && !columns[0].values;
        this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
      },

      immediate: true
    }
  },

  computed: {
    frameStyle: function frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },
    columnsStyle: function columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    }
  },

  methods: {
    emit: function emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },


    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },


    // get column value by index
    getColumnValue: function getColumnValue(index) {
      return (this.getColumn(index) || {}).currentValue;
    },


    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },


    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },


    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },


    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.currentColumns[index] || {}).values;
    },


    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.currentColumns[index];
      if (column) {
        column.values = options;
      }
    },


    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.currentValue;
      });
    },


    // set values of all columns
    setValues: function setValues(values) {
      var _this = this;

      values.forEach(function (value, index) {
        _this.setColumnValue(index, value);
      });
    },


    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },


    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this2 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this2.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/picker/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_pickervue_type_script_lang_js = (pickervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/picker/index.vue





/* normalize component */

var picker_component = normalizeComponent(
  packages_pickervue_type_script_lang_js,
  pickervue_type_template_id_0579082a_render,
  pickervue_type_template_id_0579082a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picker = (picker_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/area/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var areavue_type_script_lang_js = (create({
  name: 'area',

  components: {
    Picker: picker
  },

  props: {
    value: {},
    title: String,
    loading: Boolean,
    areaList: Object,
    itemHeight: Number,
    visibleItemCount: Number,
    // 省市县显示列数，3-省市县，2-省市，1-省
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    listValid: function listValid() {
      return this.areaList && Object(utils["e" /* isObj */])(this.areaList.province_list);
    },
    columns: function columns() {
      var columns = [];

      if (!this.listValid) {
        return columns;
      }

      var code = this.value || '';
      var columnsNum = +this.columnsNum;

      columns.push({
        values: this.getList('province')
      });

      if (columnsNum > 1) {
        columns.push({
          values: this.getList('city', code.slice(0, 2))
        });
      }

      if (columnsNum > 2) {
        columns.push({
          values: this.getList('county', code.slice(0, 4))
        });
      }

      return columns;
    }
  },

  mounted: function mounted() {
    this.setIndex();
  },


  watch: {
    value: function value() {
      this.setIndex();
    },
    areaList: function areaList() {
      this.setIndex();
    }
  },

  methods: {
    setIndex: function setIndex() {
      var _this = this;

      this.$nextTick(function () {
        var code = _this.value || '';
        var picker = _this.$refs.picker;

        picker && picker.setIndexes([_this.getIndex('province', code), _this.getIndex('city', code), _this.getIndex('county', code)]);
      });
    },


    // 根据省市县类型和对应的`code`获取对应列表
    getList: function getList(type, code) {
      var result = [];

      if (this.listValid && (type === 'province' || code)) {
        var areaList = this.areaList;

        var list = type === 'province' ? areaList.province_list : type === 'city' ? areaList.city_list : areaList.county_list;

        result = keys_default()(list).map(function (code) {
          return {
            code: code,
            name: list[code]
          };
        });

        if (type !== 'province' && code) {
          result = result.filter(function (item) {
            return item.code.indexOf(code) === 0;
          });
        }
      }

      result.unshift({
        code: '-1',
        name: this.$t(type)
      });

      return result;
    },


    // 获取对应省市县在列表中的索引
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var areaList = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < areaList.length; i++) {
        if (areaList[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      var code = values[index].code;
      // 处理省变化
      if (index === 0) {
        picker.setColumnValues(1, this.getList('city', code.slice(0, 2)));
        picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      } else if (index === 1) {
        picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      }
      this.$emit('change', picker, values, index);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    }
  }
}));
// CONCATENATED MODULE: ./packages/area/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_areavue_type_script_lang_js = (areavue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/area/index.vue





/* normalize component */

var area_component = normalizeComponent(
  packages_areavue_type_script_lang_js,
  areavue_type_template_id_064b22e6_render,
  areavue_type_template_id_064b22e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_area = (area_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-edit/Detail.vue?vue&type=template&id=4f30ae5f
var Detailvue_type_template_id_4f30ae5f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"root"},[_c('field',{attrs:{"label":_vm.$t('label'),"placeholder":_vm.$t('placeholder'),"maxlength":"200","type":"textarea","autosize":"","rows":"1","value":_vm.value,"error":_vm.isError},on:{"click-icon":_vm.onIconClick,"input":function($event){_vm.$emit('input', $event)},"focus":_vm.onFocus,"blur":_vm.onBlur}},[_c('div',{attrs:{"slot":"icon"},slot:"icon"},[(_vm.showIcon && _vm.isAndroid)?_c('span',{class:_vm.b('finish')},[_vm._v(_vm._s(_vm.$t('complete')))]):(_vm.showIcon)?_c('icon',{attrs:{"name":"clear"}}):_vm._e()],1)]),(_vm.showSearchList)?_c('cell-group',{attrs:{"border":false}},_vm._l((_vm.searchResult),function(express){return _c('cell',{key:express.name + express.address,attrs:{"title":express.name,"label":express.address,"icon":"location","clickable":""},on:{"click":function($event){_vm.onSelect(express)}}})})):_vm._e()],1)}
var Detailvue_type_template_id_4f30ae5f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/address-edit/Detail.vue?vue&type=template&id=4f30ae5f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-edit/Detail.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Detailvue_type_script_lang_js = (create({
  name: 'address-edit-detail',

  components: {
    Field: field
  },

  props: {
    value: {},
    isError: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  data: function data() {
    return {
      isAndroid: Object(utils["c" /* isAndroid */])(),
      isFocused: false
    };
  },


  computed: {
    showSearchList: function showSearchList() {
      return this.showSearchResult && this.isFocused && this.searchResult.length > 0;
    },
    showIcon: function showIcon() {
      return this.value && this.isFocused;
    }
  },

  methods: {
    onFocus: function onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
      this.$refs.root.scrollIntoView();
    },
    onBlur: function onBlur(e) {
      var _this = this;

      // wait for click event finished
      setTimeout(function () {
        _this.isFocused = false;
        _this.$emit('blur', e);
      }, 100);
    },
    onIconClick: function onIconClick() {
      if (this.isAndroid) {
        this.$refs.root.querySelector('.van-field__control').blur();
      } else {
        this.$emit('input', '');
      }
    },
    onSelect: function onSelect(express) {
      this.$emit('input', ((express.address || '') + ' ' + (express.name || '')).trim());
      this.$emit('select-search', express);
    },
    isString: function isString(str) {
      return typeof str === 'string';
    }
  }
}));
// CONCATENATED MODULE: ./packages/address-edit/Detail.vue?vue&type=script&lang=js
 /* harmony default export */ var address_edit_Detailvue_type_script_lang_js = (Detailvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/address-edit/Detail.vue





/* normalize component */

var Detail_component = normalizeComponent(
  address_edit_Detailvue_type_script_lang_js,
  Detailvue_type_template_id_4f30ae5f_render,
  Detailvue_type_template_id_4f30ae5f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Detail = (Detail_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch-cell/index.vue?vue&type=template&id=2e8fd305
var switch_cellvue_type_template_id_2e8fd305_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cell',{class:_vm.b(),attrs:{"center":"","title":_vm.title,"border":_vm.border}},[_c('van-switch',_vm._b({on:{"input":function($event){_vm.$emit('input', $event)}}},'van-switch',_vm.$props,false))],1)}
var switch_cellvue_type_template_id_2e8fd305_staticRenderFns = []

// CONCATENATED MODULE: ./packages/switch-cell/index.vue?vue&type=template&id=2e8fd305

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/index.vue?vue&type=template&id=1bf04f4d
var switchvue_type_template_id_1bf04f4d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({
    on: _vm.value,
    disabled: _vm.disabled
  }),style:(_vm.style),on:{"click":_vm.onClick}},[_c('div',{class:_vm.b('node')},[(_vm.loading)?_c('loading',{class:_vm.b('loading')}):_vm._e()],1)])}
var switchvue_type_template_id_1bf04f4d_staticRenderFns = []

// CONCATENATED MODULE: ./packages/switch/index.vue?vue&type=template&id=1bf04f4d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var switchvue_type_script_lang_js = (create({
  name: 'switch',

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },

  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },

  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/switch/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_switchvue_type_script_lang_js = (switchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/switch/index.vue





/* normalize component */

var switch_component = normalizeComponent(
  packages_switchvue_type_script_lang_js,
  switchvue_type_template_id_1bf04f4d_render,
  switchvue_type_template_id_1bf04f4d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_switch = (switch_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch-cell/index.vue?vue&type=script&lang=js
//
//
//
//
//
//




/* harmony default export */ var switch_cellvue_type_script_lang_js = (create({
  name: 'switch-cell',

  components: {
    VanSwitch: packages_switch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
}));
// CONCATENATED MODULE: ./packages/switch-cell/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_switch_cellvue_type_script_lang_js = (switch_cellvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/switch-cell/index.vue





/* normalize component */

var switch_cell_component = normalizeComponent(
  packages_switch_cellvue_type_script_lang_js,
  switch_cellvue_type_template_id_2e8fd305_render,
  switch_cellvue_type_template_id_2e8fd305_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var switch_cell = (switch_cell_component.exports);
// CONCATENATED MODULE: ./packages/utils/validate/mobile.js
function mobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return (/^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value)
  );
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-edit/index.vue?vue&type=script&lang=js



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable camelcase */












var defaultAddress = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
};

/* harmony default export */ var address_editvue_type_script_lang_js = (create({
  name: 'address-edit',

  components: {
    Field: field,
    Popup: packages_popup,
    VanArea: packages_area,
    VanButton: packages_button,
    SwitchCell: switch_cell,
    AddressEditDetail: Detail
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressInfo: {
      type: Object,
      default: function _default() {
        return extends_default()({}, defaultAddress);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },

  data: function data() {
    return {
      showArea: false,
      data: extends_default()({}, defaultAddress, this.addressInfo),
      detailFocused: false,
      errorInfo: {
        name: false,
        tel: false,
        address_detail: false,
        postal_code: false
      }
    };
  },


  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return Object(utils["e" /* isObj */])(this.areaList) && keys_default()(this.areaList).length;
    },
    isEdit: function isEdit() {
      return this.showDelete || !!this.data.id;
    }
  },

  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = extends_default()({}, defaultAddress, val);

        this.setAreaCode(val.area_code);
      },

      deep: true
    },

    areaList: function areaList() {
      this.setAreaCode(this.data.area_code);
    }
  },

  created: function created() {
    this.setAreaCode(this.data.area_code);
  },


  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.address_detail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      if (values.length !== 3 || values.some(function (value) {
        return +value.code === -1;
      })) {
        return packages_toast(this.$t('areaEmpty'));
      }
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.showArea = false;
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      if (values.length >= 3) {
        assign_default()(this.data, {
          province: values[0].name,
          city: values[1].name,
          county: values[2].name
        });
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'area_code', 'address_detail'];

      if (this.showPostal) {
        items.push('postal_code');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessageByKey(item);
        if (msg) {
          _this.errorInfo[item] = true;
          packages_toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key];
      var $t = this.$t;


      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : $t('nameOverlimit') : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'area_code':
          return value && +value !== -1 ? '' : $t('areaEmpty');
        case 'address_detail':
          return value ? value.length <= 200 ? '' : $t('addressOverlimit') : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (this.isDeleting) {
        return;
      }

      packages_dialog.confirm({
        message: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },


    // get values of area component
    getArea: function getArea() {
      var area = this.$refs.area;

      return area ? area.getValues() : [];
    },


    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      var _this3 = this;

      this.data.area_code = code || '';
      this.$nextTick(function () {
        _this3.$nextTick(function () {
          var area = _this3.$refs.area;

          if (area) {
            _this3.assignAreaValues(area.getValues());
          }
        });
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/address-edit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_address_editvue_type_script_lang_js = (address_editvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/address-edit/index.vue





/* normalize component */

var address_edit_component = normalizeComponent(
  packages_address_editvue_type_script_lang_js,
  address_editvue_type_template_id_18b139b4_render,
  address_editvue_type_template_id_18b139b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var address_edit = (address_edit_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-list/index.vue?vue&type=template&id=fc70ca58
var address_listvue_type_template_id_fc70ca58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('radio-group',{class:_vm.b('group'),attrs:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event)}}},[_c('cell-group',_vm._l((_vm.list),function(item,index){return _c('cell',{key:item.id,attrs:{"is-link":""}},[_c('radio',{attrs:{"name":item.id},on:{"click":function($event){_vm.$emit('select', item, index)}}},[_c('div',{class:_vm.b('name')},[_vm._v(_vm._s(item.name)+"，"+_vm._s(item.tel))]),_c('div',{class:_vm.b('address')},[_vm._v(_vm._s(_vm.$t('address'))+"："+_vm._s(item.address))])]),_c('icon',{class:_vm.b('edit'),attrs:{"slot":"right-icon","name":"edit"},on:{"click":function($event){_vm.$emit('edit', item, index)}},slot:"right-icon"})],1)}))],1),_c('cell',{staticClass:"van-hairline--top",class:_vm.b('add'),attrs:{"icon":"add","is-link":"","title":_vm.addButtonText || _vm.$t('add')},on:{"click":function($event){_vm.$emit('add')}}})],1)}
var address_listvue_type_template_id_fc70ca58_staticRenderFns = []

// CONCATENATED MODULE: ./packages/address-list/index.vue?vue&type=template&id=fc70ca58

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/index.vue?vue&type=template&id=70ca2f6d
var radiovue_type_template_id_70ca2f6d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ disabled: _vm.isDisabled }),on:{"click":function($event){_vm.$emit('click')}}},[_c('span',{class:_vm.b('input')},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],class:_vm.b('control'),attrs:{"type":"radio","disabled":_vm.isDisabled},domProps:{"value":_vm.name,"checked":_vm._q(_vm.currentValue,_vm.name)},on:{"change":function($event){_vm.currentValue=_vm.name}}}),_c('icon',{attrs:{"name":_vm.currentValue === _vm.name ? 'checked' : 'check'}})],1),(_vm.$slots.default)?_c('span',{class:_vm.b('label'),on:{"click":_vm.onClickLabel}},[_vm._t("default")],2):_vm._e()])}
var radiovue_type_template_id_70ca2f6d_staticRenderFns = []

// CONCATENATED MODULE: ./packages/radio/index.vue?vue&type=template&id=70ca2f6d

// CONCATENATED MODULE: ./packages/mixins/find-parent.js
/**
 * find parent component by name
 */

/* harmony default export */ var find_parent = ({
  data: function data() {
    return {
      parent: null
    };
  },


  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var radiovue_type_script_lang_js = (create({
  name: 'radio',

  mixins: [find_parent],

  props: {
    name: null,
    value: null,
    disabled: Boolean
  },

  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },

  created: function created() {
    this.findParent('van-radio-group');
  },


  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/radio/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_radiovue_type_script_lang_js = (radiovue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/radio/index.vue





/* normalize component */

var radio_component = normalizeComponent(
  packages_radiovue_type_script_lang_js,
  radiovue_type_template_id_70ca2f6d_render,
  radiovue_type_template_id_70ca2f6d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_radio = (radio_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-group/index.vue?vue&type=template&id=3cc1885c
var radio_groupvue_type_template_id_3cc1885c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._t("default")],2)}
var radio_groupvue_type_template_id_3cc1885c_staticRenderFns = []

// CONCATENATED MODULE: ./packages/radio-group/index.vue?vue&type=template&id=3cc1885c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio-group/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var radio_groupvue_type_script_lang_js = (create({
  name: 'radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  }
}));
// CONCATENATED MODULE: ./packages/radio-group/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_radio_groupvue_type_script_lang_js = (radio_groupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/radio-group/index.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  packages_radio_groupvue_type_script_lang_js,
  radio_groupvue_type_template_id_3cc1885c_render,
  radio_groupvue_type_template_id_3cc1885c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_group = (radio_group_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/address-list/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var address_listvue_type_script_lang_js = (create({
  name: 'address-list',

  components: {
    Radio: packages_radio,
    RadioGroup: radio_group
  },

  props: {
    addButtonText: String,
    value: [String, Number],
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/address-list/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_address_listvue_type_script_lang_js = (address_listvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/address-list/index.vue





/* normalize component */

var address_list_component = normalizeComponent(
  packages_address_listvue_type_script_lang_js,
  address_listvue_type_template_id_fc70ca58_render,
  address_listvue_type_template_id_fc70ca58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var address_list = (address_list_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge/index.vue?vue&type=template&id=2fee3aee
var badgevue_type_template_id_2fee3aee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:[_vm.b({ select: _vm.select }), 'van-hairline'],attrs:{"href":_vm.url},on:{"click":_vm.onClick}},[(_vm.isDef(_vm.info))?_c('div',{class:_vm.b('info')},[_vm._v(_vm._s(_vm.info))]):_vm._e(),_vm._v("\n  "+_vm._s(_vm.title)+"\n")])}
var badgevue_type_template_id_2fee3aee_staticRenderFns = []

// CONCATENATED MODULE: ./packages/badge/index.vue?vue&type=template&id=2fee3aee

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var badgevue_type_script_lang_js = (create({
  name: 'badge',

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },


  computed: {
    select: function select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },

  methods: {
    isDef: utils["d" /* isDef */],

    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
}));
// CONCATENATED MODULE: ./packages/badge/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_badgevue_type_script_lang_js = (badgevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/badge/index.vue





/* normalize component */

var badge_component = normalizeComponent(
  packages_badgevue_type_script_lang_js,
  badgevue_type_template_id_2fee3aee_render,
  badgevue_type_template_id_2fee3aee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge = (badge_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge-group/index.vue?vue&type=template&id=9562c1f4
var badge_groupvue_type_template_id_9562c1f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b()},[_vm._t("default")],2)}
var badge_groupvue_type_template_id_9562c1f4_staticRenderFns = []

// CONCATENATED MODULE: ./packages/badge-group/index.vue?vue&type=template&id=9562c1f4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/badge-group/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var badge_groupvue_type_script_lang_js = (create({
  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data: function data() {
    return {
      badges: []
    };
  }
}));
// CONCATENATED MODULE: ./packages/badge-group/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_badge_groupvue_type_script_lang_js = (badge_groupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/badge-group/index.vue





/* normalize component */

var badge_group_component = normalizeComponent(
  packages_badge_groupvue_type_script_lang_js,
  badge_groupvue_type_template_id_9562c1f4_render,
  badge_groupvue_type_template_id_9562c1f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge_group = (badge_group_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/index.vue?vue&type=template&id=a75d21ee
var cardvue_type_template_id_a75d21ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ center: _vm.centered })},[_c('div',{class:_vm.b('thumb')},[_vm._t("thumb",[_c('img',{class:_vm.b('img'),attrs:{"src":_vm.thumb}})])],2),_c('div',{class:_vm.b('content')},[_vm._t("title",[(_vm.title || _vm.isDef(_vm.price))?_c('div',{class:_vm.b('row')},[(_vm.title)?_c('div',{class:_vm.b('title')},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.isDef(_vm.price))?_c('div',{class:_vm.b('price')},[_vm._v(_vm._s(_vm.currency)+" "+_vm._s(_vm.price))]):_vm._e()]):_vm._e()]),_vm._t("desc",[(_vm.desc || _vm.isDef(_vm.num))?_c('div',{class:_vm.b('row')},[(_vm.desc)?_c('div',{class:_vm.b('desc')},[_vm._v(_vm._s(_vm.desc))]):_vm._e(),(_vm.isDef(_vm.num))?_c('div',{class:_vm.b('num')},[_vm._v("x "+_vm._s(_vm.num))]):_vm._e()]):_vm._e()]),_vm._t("tags")],2),(_vm.$slots.footer)?_c('div',{class:_vm.b('footer')},[_vm._t("footer")],2):_vm._e()])}
var cardvue_type_template_id_a75d21ee_staticRenderFns = []

// CONCATENATED MODULE: ./packages/card/index.vue?vue&type=template&id=a75d21ee

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/card/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var cardvue_type_script_lang_js = (create({
  name: 'card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  },

  methods: {
    isDef: utils["d" /* isDef */]
  }
}));
// CONCATENATED MODULE: ./packages/card/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_cardvue_type_script_lang_js = (cardvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/card/index.vue





/* normalize component */

var card_component = normalizeComponent(
  packages_cardvue_type_script_lang_js,
  cardvue_type_template_id_a75d21ee_render,
  cardvue_type_template_id_a75d21ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var card = (card_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell-swipe/index.vue?vue&type=template&id=4420d4d6
var cell_swipevue_type_template_id_4420d4d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside:touchstart",value:(_vm.onClick),expression:"onClick",arg:"touchstart"}],class:_vm.b(),on:{"click":function($event){_vm.onClick('cell')},"touchstart":_vm.startDrag,"touchmove":_vm.onDrag,"touchend":_vm.endDrag,"touchcancel":_vm.endDrag}},[_c('div',{class:_vm.b('wrapper'),style:(_vm.wrapperStyle),on:{"transitionend":function($event){_vm.swipe = false}}},[(_vm.leftWidth)?_c('div',{class:_vm.b('left'),on:{"click":function($event){$event.stopPropagation();_vm.onClick('left')}}},[_vm._t("left")],2):_vm._e(),_vm._t("default"),(_vm.rightWidth)?_c('div',{class:_vm.b('right'),on:{"click":function($event){$event.stopPropagation();_vm.onClick('right')}}},[_vm._t("right")],2):_vm._e()],2)])}
var cell_swipevue_type_template_id_4420d4d6_staticRenderFns = []

// CONCATENATED MODULE: ./packages/cell-swipe/index.vue?vue&type=template&id=4420d4d6

// CONCATENATED MODULE: ./packages/utils/clickoutside.js
/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */



var clickoutside_context = '@@clickoutsideContext';

/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[clickoutside_context].callback();
      }
    };

    el[clickoutside_context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };

    on(document, el[clickoutside_context].arg, handler);
  },
  update: function update(el, binding) {
    el[clickoutside_context].callback = binding.value;
  },
  unbind: function unbind(el) {
    off(document, el[clickoutside_context].arg, el[clickoutside_context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell-swipe/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var THRESHOLD = 0.15;

/* harmony default export */ var cell_swipevue_type_script_lang_js = (create({
  name: 'cell-swipe',

  mixins: [touch],

  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },

  directives: {
    Clickoutside: clickoutside
  },

  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },


  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: 'translate3d(' + this.offset + 'px, 0, 0)',
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },

  methods: {
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;

      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

      // right
      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
        // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      this.touchMove(event);
      var deltaX = this.deltaX;


      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      };
    },
    endDrag: function endDrag() {
      this.draging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
    },
    onClick: function onClick() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'outside';

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/cell-swipe/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_cell_swipevue_type_script_lang_js = (cell_swipevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/cell-swipe/index.vue





/* normalize component */

var cell_swipe_component = normalizeComponent(
  packages_cell_swipevue_type_script_lang_js,
  cell_swipevue_type_template_id_4420d4d6_render,
  cell_swipevue_type_template_id_4420d4d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cell_swipe = (cell_swipe_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/index.vue?vue&type=template&id=7edd2137
var checkboxvue_type_template_id_7edd2137_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('icon',{class:[
      _vm.b('icon'),
      ("van-checkbox--" + _vm.shape), {
        'van-checkbox--disabled': _vm.isDisabled,
        'van-checkbox--checked': _vm.isChecked
    }],attrs:{"name":"success"},on:{"click":_vm.onClick}}),(_vm.$slots.default)?_c('span',{class:_vm.b('label'),on:{"click":function($event){_vm.onClick('label')}}},[_vm._t("default")],2):_vm._e()],1)}
var checkboxvue_type_template_id_7edd2137_staticRenderFns = []

// CONCATENATED MODULE: ./packages/checkbox/index.vue?vue&type=template&id=7edd2137

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var checkboxvue_type_script_lang_js = (create({
  name: 'checkbox',

  mixins: [find_parent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },

  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        var parent = this.parent;

        if (parent) {
          var parentValue = this.parent.value.slice();
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            var index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    isChecked: function isChecked() {
      var currentValue = this.currentValue;

      if ({}.toString.call(currentValue) === '[object Boolean]') {
        return currentValue;
      } else if (Object(utils["d" /* isDef */])(currentValue)) {
        return currentValue === this.name;
      }
    },
    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    }
  },

  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },

  created: function created() {
    this.findParent('van-checkbox-group');
  },


  methods: {
    onClick: function onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.currentValue = !this.currentValue;
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/checkbox/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_checkboxvue_type_script_lang_js = (checkboxvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/checkbox/index.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  packages_checkboxvue_type_script_lang_js,
  checkboxvue_type_template_id_7edd2137_render,
  checkboxvue_type_template_id_7edd2137_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-group/index.vue?vue&type=template&id=47f1cf44
var checkbox_groupvue_type_template_id_47f1cf44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._t("default")],2)}
var checkbox_groupvue_type_template_id_47f1cf44_staticRenderFns = []

// CONCATENATED MODULE: ./packages/checkbox-group/index.vue?vue&type=template&id=47f1cf44

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox-group/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var checkbox_groupvue_type_script_lang_js = (create({
  name: 'checkbox-group',

  props: {
    value: null,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },

  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
}));
// CONCATENATED MODULE: ./packages/checkbox-group/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_checkbox_groupvue_type_script_lang_js = (checkbox_groupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/checkbox-group/index.vue





/* normalize component */

var checkbox_group_component = normalizeComponent(
  packages_checkbox_groupvue_type_script_lang_js,
  checkbox_groupvue_type_template_id_47f1cf44_render,
  checkbox_groupvue_type_template_id_47f1cf44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/circle/index.vue?vue&type=template&id=33621a9e
var circlevue_type_template_id_33621a9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b(),style:(_vm.style)},[_c('svg',{attrs:{"viewBox":"0 0 1060 1060"}},[_c('path',{class:_vm.b('hover'),style:(_vm.hoverStyle),attrs:{"d":_vm.path}}),_c('path',{class:_vm.b('layer'),style:(_vm.layerStyle),attrs:{"d":_vm.path}})]),_vm._t("default",[_c('div',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.text))])])],2)}
var circlevue_type_template_id_33621a9e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/circle/index.vue?vue&type=template&id=33621a9e

// EXTERNAL MODULE: ./packages/utils/raf.js
var raf = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/circle/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var circlevue_type_script_lang_js = (create({
  name: 'circle',

  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#38f'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },

  beforeCreate: function beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },


  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = this.perimeter * (100 - this.value) / 100;
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: '' + this.color,
        strokeDashoffset: offset + 'px',
        strokeWidth: this.strokeWidth + 1 + 'px'
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: '' + this.fill,
        stroke: '' + this.layerColor,
        strokeWidth: this.strokeWidth + 'px'
      };
    }
  },

  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = this.format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);
        if (this.speed) {
          Object(raf["a" /* cancel */])(this.rafId);
          this.rafId = Object(raf["b" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },

      immediate: true
    }
  },

  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', this.format(parseFloat(rate.toFixed(1))));
      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["b" /* raf */])(this.animate);
      }
    },
    format: function format(rate) {
      return Math.min(Math.max(rate, 0), 100);
    }
  }
}));
// CONCATENATED MODULE: ./packages/circle/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_circlevue_type_script_lang_js = (circlevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/circle/index.vue





/* normalize component */

var circle_component = normalizeComponent(
  packages_circlevue_type_script_lang_js,
  circlevue_type_template_id_33621a9e_render,
  circlevue_type_template_id_33621a9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var circle = (circle_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/col/index.vue?vue&type=template&id=5e726b30
var colvue_type_template_id_5e726b30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-col",class:( _obj = {}, _obj[("van-col-" + _vm.span)] = _vm.span, _obj[("van-col-offset-" + _vm.offset)] = _vm.offset, _obj ),style:(_vm.style)},[_vm._t("default")],2)
var _obj;}
var colvue_type_template_id_5e726b30_staticRenderFns = []

// CONCATENATED MODULE: ./packages/col/index.vue?vue&type=template&id=5e726b30

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/col/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var colvue_type_script_lang_js = (create({
  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + 'px';
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
}));
// CONCATENATED MODULE: ./packages/col/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_colvue_type_script_lang_js = (colvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/col/index.vue





/* normalize component */

var col_component = normalizeComponent(
  packages_colvue_type_script_lang_js,
  colvue_type_template_id_5e726b30_render,
  colvue_type_template_id_5e726b30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/index.vue?vue&type=template&id=1b0bd79f
var collapsevue_type_template_id_1b0bd79f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b()},[_vm._t("default")],2)}
var collapsevue_type_template_id_1b0bd79f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/collapse/index.vue?vue&type=template&id=1b0bd79f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var collapsevue_type_script_lang_js = (create({
  name: 'collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data: function data() {
    return {
      items: []
    };
  },


  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
}));
// CONCATENATED MODULE: ./packages/collapse/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_collapsevue_type_script_lang_js = (collapsevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/collapse/index.vue





/* normalize component */

var collapse_component = normalizeComponent(
  packages_collapsevue_type_script_lang_js,
  collapsevue_type_template_id_1b0bd79f_render,
  collapsevue_type_template_id_1b0bd79f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var collapse = (collapse_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse-item/index.vue?vue&type=template&id=58ec7d57
var collapse_itemvue_type_template_id_58ec7d57_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    _vm.b({ expanded: _vm.expanded }),
    { 'van-hairline--top': _vm.index }
  ]},[_c('cell',{class:_vm.b('title'),attrs:{"is-link":""},on:{"click":_vm.onClick}},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded),expression:"expanded"}],class:_vm.b('content')},[_vm._t("default")],2)],1)}
var collapse_itemvue_type_template_id_58ec7d57_staticRenderFns = []

// CONCATENATED MODULE: ./packages/collapse-item/index.vue?vue&type=template&id=58ec7d57

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse-item/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var collapse_itemvue_type_script_lang_js = (create({
  name: 'collapse-item',

  mixins: [find_parent],

  props: {
    name: [String, Number],
    title: String
  },

  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return Object(utils["d" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      var value = this.parent.value;

      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },

  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },


  methods: {
    onClick: function onClick() {
      var parent = this.parent;

      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    }
  }
}));
// CONCATENATED MODULE: ./packages/collapse-item/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_collapse_itemvue_type_script_lang_js = (collapse_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/collapse-item/index.vue





/* normalize component */

var collapse_item_component = normalizeComponent(
  packages_collapse_itemvue_type_script_lang_js,
  collapse_itemvue_type_template_id_58ec7d57_render,
  collapse_itemvue_type_template_id_58ec7d57_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var collapse_item = (collapse_item_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-card/index.vue?vue&type=template&id=f2188bf8
var contact_cardvue_type_template_id_f2188bf8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b([_vm.type, { uneditable: !_vm.editable }]),on:{"click":_vm.onClick}},[_c('div',{class:_vm.b('content')},[(_vm.type === 'add')?[_c('icon',{class:_vm.b('icon'),attrs:{"name":"add2"}}),_c('div',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.addText || _vm.$t('addText')))])]:(_vm.type === 'edit')?[_c('icon',{class:_vm.b('icon'),attrs:{"name":"contact"}}),_c('div',{class:_vm.b('text')},[_c('div',[_vm._v(_vm._s(_vm.$t('contact'))+"："+_vm._s(_vm.name))]),_c('div',[_vm._v(_vm._s(_vm.$t('tel'))+"："+_vm._s(_vm.tel))])])]:_vm._e()],2),(_vm.editable)?_c('icon',{class:_vm.b('arrow'),attrs:{"name":"arrow"}}):_vm._e()],1)}
var contact_cardvue_type_template_id_f2188bf8_staticRenderFns = []

// CONCATENATED MODULE: ./packages/contact-card/index.vue?vue&type=template&id=f2188bf8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-card/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var contact_cardvue_type_script_lang_js = (create({
  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/contact-card/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_contact_cardvue_type_script_lang_js = (contact_cardvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/contact-card/index.vue





/* normalize component */

var contact_card_component = normalizeComponent(
  packages_contact_cardvue_type_script_lang_js,
  contact_cardvue_type_template_id_f2188bf8_render,
  contact_cardvue_type_template_id_f2188bf8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var contact_card = (contact_card_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-edit/index.vue?vue&type=template&id=69e03e23
var contact_editvue_type_template_id_69e03e23_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('cell-group',[_c('field',{attrs:{"maxlength":"30","label":_vm.$t('contact'),"placeholder":_vm.$t('name'),"error":_vm.errorInfo.name},on:{"focus":function($event){_vm.onFocus('name')}},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}}),_c('field',{attrs:{"type":"tel","label":_vm.$t('tel'),"placeholder":_vm.$t('telPlaceholder'),"error":_vm.errorInfo.tel},on:{"focus":function($event){_vm.onFocus('tel')}},model:{value:(_vm.data.tel),callback:function ($$v) {_vm.$set(_vm.data, "tel", $$v)},expression:"data.tel"}})],1),_c('div',{class:_vm.b('buttons')},[_c('van-button',{attrs:{"block":"","loading":_vm.isSaving,"type":"primary"},on:{"click":_vm.onSave}},[_vm._v(_vm._s(_vm.$t('save')))]),(_vm.isEdit)?_c('van-button',{attrs:{"block":"","loading":_vm.isDeleting},on:{"click":_vm.onDelete}},[_vm._v(_vm._s(_vm.$t('delete')))]):_vm._e()],1)],1)}
var contact_editvue_type_template_id_69e03e23_staticRenderFns = []

// CONCATENATED MODULE: ./packages/contact-edit/index.vue?vue&type=template&id=69e03e23

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-edit/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var contact_editvue_type_script_lang_js = (create({
  name: 'contact-edit',

  components: {
    Field: field,
    VanButton: packages_button
  },

  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return {
          id: '',
          tel: '',
          name: ''
        };
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },

  data: function data() {
    return {
      data: this.contactInfo,
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },


  watch: {
    contactInfo: function contactInfo(val) {
      this.data = val;
    }
  },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key];
      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : this.$t('nameOverlimit') : this.$t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);
        if (msg) {
          _this.errorInfo[item] = true;
          packages_toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (!this.isDeleting) {
        packages_dialog.confirm({
          message: this.$t('confirmDelete')
        }).then(function () {
          _this2.$emit('delete', _this2.data);
        });
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/contact-edit/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_contact_editvue_type_script_lang_js = (contact_editvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/contact-edit/index.vue





/* normalize component */

var contact_edit_component = normalizeComponent(
  packages_contact_editvue_type_script_lang_js,
  contact_editvue_type_template_id_69e03e23_render,
  contact_editvue_type_template_id_69e03e23_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var contact_edit = (contact_edit_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-list/index.vue?vue&type=template&id=072dfeca
var contact_listvue_type_template_id_072dfeca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('radio-group',{attrs:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event)}}},[_c('cell-group',_vm._l((_vm.list),function(item,index){return _c('cell',{key:item.id,attrs:{"is-link":""}},[_c('radio',{attrs:{"name":item.id},on:{"click":function($event){_vm.$emit('select', item, index)}}},[_c('p',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.$t('contact'))+"："+_vm._s(item.name))]),_c('p',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.$t('tel'))+"："+_vm._s(item.tel))])]),_c('icon',{class:_vm.b('edit'),attrs:{"slot":"right-icon","name":"edit"},on:{"click":function($event){_vm.$emit('edit', item, index)}},slot:"right-icon"})],1)}))],1),_c('cell',{staticClass:"van-hairline--top",class:_vm.b('add'),attrs:{"icon":"add","is-link":"","title":_vm.addText || _vm.$t('addText')},on:{"click":function($event){_vm.$emit('add')}}})],1)}
var contact_listvue_type_template_id_072dfeca_staticRenderFns = []

// CONCATENATED MODULE: ./packages/contact-list/index.vue?vue&type=template&id=072dfeca

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/contact-list/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var contact_listvue_type_script_lang_js = (create({
  name: 'contact-list',

  components: {
    Radio: packages_radio,
    RadioGroup: radio_group
  },

  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/contact-list/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_contact_listvue_type_script_lang_js = (contact_listvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/contact-list/index.vue





/* normalize component */

var contact_list_component = normalizeComponent(
  packages_contact_listvue_type_script_lang_js,
  contact_listvue_type_template_id_072dfeca_render,
  contact_listvue_type_template_id_072dfeca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var contact_list = (contact_list_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-cell/index.vue?vue&type=template&id=72d5f531
var coupon_cellvue_type_template_id_72d5f531_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cell-group',{class:_vm.b()},[_c('cell',{attrs:{"title":_vm.title || _vm.$t('title'),"value":_vm.value,"is-link":_vm.editable},on:{"click":function($event){_vm.$emit('click')}}})],1)}
var coupon_cellvue_type_template_id_72d5f531_staticRenderFns = []

// CONCATENATED MODULE: ./packages/coupon-cell/index.vue?vue&type=template&id=72d5f531

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-cell/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var coupon_cellvue_type_script_lang_js = (create({
  name: 'coupon-cell',

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: String,
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    value: function value() {
      var coupons = this.coupons;

      var coupon = coupons[this.chosenCoupon];
      if (coupon) {
        return this.$t('reduce') + '\uFFE5' + (coupon.value / 100).toFixed(2);
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
}));
// CONCATENATED MODULE: ./packages/coupon-cell/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_coupon_cellvue_type_script_lang_js = (coupon_cellvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/coupon-cell/index.vue





/* normalize component */

var coupon_cell_component = normalizeComponent(
  packages_coupon_cellvue_type_script_lang_js,
  coupon_cellvue_type_template_id_72d5f531_render,
  coupon_cellvue_type_template_id_72d5f531_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coupon_cell = (coupon_cell_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-list/index.vue?vue&type=template&id=5d5b2ec4
var coupon_listvue_type_template_id_5d5b2ec4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[(_vm.showExchangeBar)?_c('cell-group',{class:_vm.b('top')},[_c('field',{staticClass:"van-hairline--surround",class:_vm.b('field'),attrs:{"placeholder":_vm.inputPlaceholder || _vm.$t('placeholder'),"maxlength":20},model:{value:(_vm.currentCode),callback:function ($$v) {_vm.currentCode=$$v},expression:"currentCode"}}),_c('van-button',{class:_vm.b('exchange'),attrs:{"size":"small","type":"danger","text":_vm.exchangeButtonText || _vm.$t('exchange'),"loading":_vm.exchangeButtonLoading,"disabled":_vm.buttonDisabled},on:{"click":_vm.onClickExchangeButton}})],1):_vm._e(),_c('div',{ref:"list",class:_vm.b('list', { 'with-exchange': _vm.showExchangeBar })},[_vm._l((_vm.coupons),function(item,index){return _c('coupon-item',{key:item.id || item.name,ref:"card",refInFor:true,attrs:{"data":item,"chosen":index === _vm.chosenCoupon},nativeOn:{"click":function($event){_vm.$emit('change', index)}}})}),(_vm.disabledCoupons.length)?_c('h3',[_vm._v(_vm._s(_vm.disabledListTitle || _vm.$t('disabled')))]):_vm._e(),_vm._l((_vm.disabledCoupons),function(item){return _c('coupon-item',{key:item.id || item.name,attrs:{"disabled":"","data":item}})}),(!_vm.coupons.length && !_vm.disabledCoupons.length)?_c('div',{class:_vm.b('empty')},[_c('img',{attrs:{"src":"https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png"}}),_c('p',[_vm._v(_vm._s(_vm.$t('empty')))])]):_vm._e()],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCloseButton),expression:"showCloseButton"}],staticClass:"van-hairline--top",class:_vm.b('close'),domProps:{"textContent":_vm._s(_vm.closeButtonText || _vm.$t('close'))},on:{"click":function($event){_vm.$emit('change', -1)}}})],1)}
var coupon_listvue_type_template_id_5d5b2ec4_staticRenderFns = []

// CONCATENATED MODULE: ./packages/coupon-list/index.vue?vue&type=template&id=5d5b2ec4

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-list/Item.vue?vue&type=template&id=3f0c9798
var Itemvue_type_template_id_3f0c9798_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ disabled: _vm.disabled })},[_c('div',{class:_vm.b('head')},[_c('div',{class:_vm.b('lines')}),_c('div',{class:_vm.b('gradient')},[_c('h2',{domProps:{"innerHTML":_vm._s(_vm.faceAmount)}}),_c('p',[_vm._v(_vm._s(_vm.conditionMessage))])])]),_c('div',{class:_vm.b('body')},[_c('h2',[_vm._v(_vm._s(_vm.data.name))]),_c('span',[_vm._v(_vm._s(_vm.validPeriod))]),(_vm.disabled && _vm.data.reason)?_c('p',[_vm._v(_vm._s(_vm.data.reason))]):_vm._e(),(_vm.chosen)?_c('div',{class:_vm.b('corner')},[_c('icon',{attrs:{"name":"success"}})],1):_vm._e()])])}
var Itemvue_type_template_id_3f0c9798_staticRenderFns = []

// CONCATENATED MODULE: ./packages/coupon-list/Item.vue?vue&type=template&id=3f0c9798

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-list/Item.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Itemvue_type_script_lang_js = (create({
  name: 'coupon-item',

  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean
  },

  computed: {
    validPeriod: function validPeriod() {
      return this.getDate(this.data.start_at) + '-' + this.getDate(this.data.end_at);
    },
    faceAmount: function faceAmount() {
      return this.data.denominations !== 0 ? '<span>\xA5</span> ' + this.formatAmount(this.data.denominations) : this.data.discount !== 0 ? this.formatDiscount(this.data.discount) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.data.origin_condition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.origin_condition === 0 ? this.$t('unlimited') : this.$t('condition', condition);
    }
  },

  methods: {
    getDate: function getDate(timeStamp) {
      var date = new Date(timeStamp * 1000);
      return date.getFullYear() + '.' + this.padZero(date.getMonth() + 1) + '.' + this.padZero(date.getDate());
    },
    padZero: function padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },
    formatDiscount: function formatDiscount(discount) {
      return this.$t('discount', '' + (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1));
    },
    formatAmount: function formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
}));
// CONCATENATED MODULE: ./packages/coupon-list/Item.vue?vue&type=script&lang=js
 /* harmony default export */ var coupon_list_Itemvue_type_script_lang_js = (Itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/coupon-list/Item.vue





/* normalize component */

var Item_component = normalizeComponent(
  coupon_list_Itemvue_type_script_lang_js,
  Itemvue_type_template_id_3f0c9798_render,
  Itemvue_type_template_id_3f0c9798_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Item = (Item_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/coupon-list/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var coupon_listvue_type_script_lang_js = (create({
  name: 'coupon-list',

  components: {
    VanButton: packages_button,
    Field: field,
    CouponItem: Item
  },

  model: {
    prop: 'code'
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      currentCode: this.code || ''
    };
  },


  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || this.currentCode.length < this.exchangeMinLength);
    }
  },

  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },


  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use v-model
      if (!this.code) {
        this.currentCode = '';
      }
    },


    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _$refs = _this.$refs,
            card = _$refs.card,
            list = _$refs.list;


        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/coupon-list/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_coupon_listvue_type_script_lang_js = (coupon_listvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/coupon-list/index.vue





/* normalize component */

var coupon_list_component = normalizeComponent(
  packages_coupon_listvue_type_script_lang_js,
  coupon_listvue_type_template_id_5d5b2ec4_render,
  coupon_listvue_type_template_id_5d5b2ec4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var coupon_list = (coupon_list_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/datetime-picker/index.vue?vue&type=template&id=5f6ddee8
var datetime_pickervue_type_template_id_5f6ddee8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picker',{ref:"picker",attrs:{"title":_vm.title,"columns":_vm.columns,"item-height":_vm.itemHeight,"show-toolbar":_vm.showToolbar,"visibie-item-height":_vm.visibleItemCount,"confirm-button-text":_vm.confirmButtonText,"cancel-button-text":_vm.cancelButtonText},on:{"change":_vm.onChange,"confirm":_vm.onConfirm,"cancel":function($event){_vm.$emit('cancel')}}})}
var datetime_pickervue_type_template_id_5f6ddee8_staticRenderFns = []

// CONCATENATED MODULE: ./packages/datetime-picker/index.vue?vue&type=template&id=5f6ddee8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/datetime-picker/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var currentYear = new Date().getFullYear();
var isValidDate = function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

/* harmony default export */ var datetime_pickervue_type_script_lang_js = (create({
  name: 'datetime-picker',

  components: {
    Picker: picker
  },

  props: {
    value: {},
    title: String,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: String,
    cancelButtonText: String,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isValidDate
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    }
  },

  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },


  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.updateColumnValue(val);
      this.$emit('input', val);
    }
  },

  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [[this.minHour, this.maxHour], [0, 59]];
      }

      var _getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _getBoundary.maxYear,
          maxDate = _getBoundary.maxDate,
          maxMonth = _getBoundary.maxMonth,
          maxHour = _getBoundary.maxHour,
          maxMinute = _getBoundary.maxMinute;

      var _getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _getBoundary2.minYear,
          minDate = _getBoundary2.minDate,
          minMonth = _getBoundary2.minMonth,
          minHour = _getBoundary2.minHour,
          minMinute = _getBoundary2.minMinute;

      var result = [[minYear, maxYear], [minMonth, maxMonth], [minDate, maxDate], [minHour, maxHour], [minMinute, maxMinute]];

      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (range) {
        var values = _this.times(range[1] - range[0] + 1, function (index) {
          var value = range[0] + index;
          return value < 10 ? '0' + value : '' + value;
        });

        return {
          values: values
        };
      });
      return results;
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';
      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        var _minHour = this.minHour;

        value = (_minHour > 10 ? _minHour : '0' + _minHour) + ':00';
      }

      // time type
      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        var correctedHour = Math.max(hour, this.minHour);
        correctedHour = Math.min(correctedHour, this.maxHour);

        return correctedHour + ':' + minute;
      }

      // date type

      var _getBoundary3 = this.getBoundary('max', value),
          maxYear = _getBoundary3.maxYear,
          maxDate = _getBoundary3.maxDate,
          maxMonth = _getBoundary3.maxMonth,
          maxHour = _getBoundary3.maxHour,
          maxMinute = _getBoundary3.maxMinute;

      var _getBoundary4 = this.getBoundary('min', value),
          minYear = _getBoundary4.minYear,
          minDate = _getBoundary4.minDate,
          minMonth = _getBoundary4.minMonth,
          minHour = _getBoundary4.minHour,
          minMinute = _getBoundary4.minMinute;

      var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);

      return new Date(value);
    },
    times: function times(n, iteratee) {
      var index = -1;
      var result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + 'Date'];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + 'Year'] = year, _ref[type + 'Month'] = month, _ref[type + 'Date'] = date, _ref[type + 'Hour'] = hour, _ref[type + 'Minute'] = minute, _ref;
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    isLeapYear: function isLeapYear(year) {
      return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var values = picker.getValues();
      var value = void 0;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var maxDate = this.getMonthEndDay(year, month);
        var date = this.getTrueValue(values[2]);
        if (this.type === 'year-month') {
          date = 1;
        }
        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }
        value = new Date(year, month - 1, date, hour, minute);
      }
      value = this.correctValue(value);
      this.innerValue = value;
      this.$nextTick(function () {
        _this2.$emit('change', picker);
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      if (this.type === 'time') {
        var currentValue = value.split(':');
        values = [currentValue[0], currentValue[1]];
      } else {
        values = ['' + value.getFullYear(), ('0' + (value.getMonth() + 1)).slice(-2), ('0' + value.getDate()).slice(-2)];
        if (this.type === 'datetime') {
          values.push(('0' + value.getHours()).slice(-2), ('0' + value.getMinutes()).slice(-2));
        }
        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.setColumnByValues(values);
      });
    },
    setColumnByValues: function setColumnByValues(values) {
      if (!this.$refs.picker) {
        return;
      }
      this.$refs.picker.setValues(values);
    }
  },

  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  }
}));
// CONCATENATED MODULE: ./packages/datetime-picker/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_datetime_pickervue_type_script_lang_js = (datetime_pickervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/datetime-picker/index.vue





/* normalize component */

var datetime_picker_component = normalizeComponent(
  packages_datetime_pickervue_type_script_lang_js,
  datetime_pickervue_type_template_id_5f6ddee8_render,
  datetime_pickervue_type_template_id_5f6ddee8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var datetime_picker = (datetime_picker_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action/index.vue?vue&type=template&id=dc0efe08
var goods_actionvue_type_template_id_dc0efe08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._t("default")],2)}
var goods_actionvue_type_template_id_dc0efe08_staticRenderFns = []

// CONCATENATED MODULE: ./packages/goods-action/index.vue?vue&type=template&id=dc0efe08

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var goods_actionvue_type_script_lang_js = (create({
  name: 'goods-action'
}));
// CONCATENATED MODULE: ./packages/goods-action/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_goods_actionvue_type_script_lang_js = (goods_actionvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/goods-action/index.vue





/* normalize component */

var goods_action_component = normalizeComponent(
  packages_goods_actionvue_type_script_lang_js,
  goods_actionvue_type_template_id_dc0efe08_render,
  goods_actionvue_type_template_id_dc0efe08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var goods_action = (goods_action_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action-big-btn/index.vue?vue&type=template&id=2d71966a
var goods_action_big_btnvue_type_template_id_2d71966a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('van-button',{class:_vm.b(),attrs:{"tag":"a","href":_vm.url,"type":_vm.primary ? 'primary' : 'default',"bottom-action":""},on:{"click":_vm.onClick}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var goods_action_big_btnvue_type_template_id_2d71966a_staticRenderFns = []

// CONCATENATED MODULE: ./packages/goods-action-big-btn/index.vue?vue&type=template&id=2d71966a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action-big-btn/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var goods_action_big_btnvue_type_script_lang_js = (create({
  name: 'goods-action-big-btn',

  mixins: [router_link],

  components: {
    VanButton: packages_button
  },

  props: {
    url: String,
    text: String,
    primary: Boolean
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./packages/goods-action-big-btn/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_goods_action_big_btnvue_type_script_lang_js = (goods_action_big_btnvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/goods-action-big-btn/index.vue





/* normalize component */

var goods_action_big_btn_component = normalizeComponent(
  packages_goods_action_big_btnvue_type_script_lang_js,
  goods_action_big_btnvue_type_template_id_2d71966a_render,
  goods_action_big_btnvue_type_template_id_2d71966a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var goods_action_big_btn = (goods_action_big_btn_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action-mini-btn/index.vue?vue&type=template&id=0fae229f
var goods_action_mini_btnvue_type_template_id_0fae229f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"van-hairline",class:_vm.b(),attrs:{"href":_vm.url},on:{"click":_vm.onClick}},[_c('icon',{class:[_vm.b('icon'), _vm.iconClass],attrs:{"info":_vm.info,"name":_vm.icon}}),_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var goods_action_mini_btnvue_type_template_id_0fae229f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/goods-action-mini-btn/index.vue?vue&type=template&id=0fae229f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/goods-action-mini-btn/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//




/* harmony default export */ var goods_action_mini_btnvue_type_script_lang_js = (create({
  name: 'goods-action-mini-btn',

  mixins: [router_link],

  props: {
    url: String,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./packages/goods-action-mini-btn/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_goods_action_mini_btnvue_type_script_lang_js = (goods_action_mini_btnvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/goods-action-mini-btn/index.vue





/* normalize component */

var goods_action_mini_btn_component = normalizeComponent(
  packages_goods_action_mini_btnvue_type_script_lang_js,
  goods_action_mini_btnvue_type_template_id_0fae229f_render,
  goods_action_mini_btnvue_type_template_id_0fae229f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var goods_action_mini_btn = (goods_action_mini_btn_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/image-preview.vue?vue&type=template&id=65c2fb8e
var image_previewvue_type_template_id_65c2fb8e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],class:_vm.b(),on:{"touchstart":_vm.onTouchStart,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},[_c('swipe',{ref:"swipe",attrs:{"initial-swipe":_vm.startPosition}},_vm._l((_vm.images),function(item,index){return _c('swipe-item',{key:index},[_c('img',{class:_vm.b('image'),attrs:{"src":item}})])}))],1)}
var image_previewvue_type_template_id_65c2fb8e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/image-preview/image-preview.vue?vue&type=template&id=65c2fb8e

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/index.vue?vue&type=template&id=b8606122
var swipevue_type_template_id_b8606122_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('div',{class:_vm.b('track'),style:(_vm.trackStyle),on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd,"transitionend":function($event){_vm.$emit('change', _vm.activeIndicator)}}},[_vm._t("default")],2),(_vm.showIndicators && _vm.count > 1)?_c('div',{class:_vm.b('indicators', { vertical: _vm.vertical })},_vm._l((_vm.count),function(index){return _c('i',{class:_vm.b('indicator', { active: index - 1 === _vm.activeIndicator })})})):_vm._e()])}
var swipevue_type_template_id_b8606122_staticRenderFns = []

// CONCATENATED MODULE: ./packages/swipe/index.vue?vue&type=template&id=b8606122

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var swipevue_type_script_lang_js = (create({
  name: 'swipe',

  mixins: [touch],

  props: {
    autoplay: Number,
    vertical: Boolean,
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },

  data: function data() {
    return {
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();
  },
  destroyed: function destroyed() {
    this.clear();
  },


  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      }
    }
  },

  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'height' : 'width'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + 'px', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + 'ms', _ref.transform = 'translate' + (this.vertical ? 'Y' : 'X') + '(' + this.offset + 'px)', _ref;
    }
  },

  methods: {
    // initialize swipe position
    initialize: function initialize() {
      clearTimeout(this.timer);
      var rect = this.$el.getBoundingClientRect();
      this.swiping = true;
      this.width = rect.width;
      this.height = rect.height;
      this.active = this.initialSwipe;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;

      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) return;

      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
      }

      this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },
    move: function move() {
      var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;

      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || move < 0) || atLast && (offset < 0 || move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = atLast && move > 0 ? trackSize : 0;

        this.active += move;
      } else {
        if (atFirst) {
          swipes[count - 1].offset = delta > 0 ? -trackSize : 0;
        } else if (atLast) {
          swipes[0].offset = delta < 0 ? trackSize : 0;
        }
      }
      this.offset = offset - this.active * this.size;
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this.swiping = true;
          _this.correctPosition();

          setTimeout(function () {
            _this.swiping = false;
            _this.move(1);
            _this.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/swipe/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_swipevue_type_script_lang_js = (swipevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/swipe/index.vue





/* normalize component */

var swipe_component = normalizeComponent(
  packages_swipevue_type_script_lang_js,
  swipevue_type_template_id_b8606122_render,
  swipevue_type_template_id_b8606122_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe = (swipe_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe-item/index.vue?vue&type=template&id=f19bfc26
var swipe_itemvue_type_template_id_f19bfc26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b(),style:(_vm.style)},[_vm._t("default")],2)}
var swipe_itemvue_type_template_id_f19bfc26_staticRenderFns = []

// CONCATENATED MODULE: ./packages/swipe-item/index.vue?vue&type=template&id=f19bfc26

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe-item/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var swipe_itemvue_type_script_lang_js = (create({
  name: 'swipe-item',

  data: function data() {
    return {
      offset: 0
    };
  },


  computed: {
    style: function style() {
      var _$parent = this.$parent,
          vertical = _$parent.vertical,
          width = _$parent.width,
          height = _$parent.height;

      return {
        width: width + 'px',
        height: vertical ? height + 'px' : '100%',
        transform: 'translate' + (vertical ? 'Y' : 'X') + '(' + this.offset + 'px)'
      };
    }
  },

  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));
// CONCATENATED MODULE: ./packages/swipe-item/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_swipe_itemvue_type_script_lang_js = (swipe_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/swipe-item/index.vue





/* normalize component */

var swipe_item_component = normalizeComponent(
  packages_swipe_itemvue_type_script_lang_js,
  swipe_itemvue_type_template_id_f19bfc26_render,
  swipe_itemvue_type_template_id_f19bfc26_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe_item = (swipe_item_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/image-preview.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var image_previewvue_type_script_lang_js = (create({
  name: 'image-preview',

  mixins: [popup],

  components: {
    Swipe: swipe,
    SwipeItem: swipe_item
  },

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      images: [],
      startPosition: 0
    };
  },


  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();

      var deltaTime = new Date() - this.touchStartTime;
      var _$refs$swipe = this.$refs.swipe,
          offsetX = _$refs$swipe.offsetX,
          offsetY = _$refs$swipe.offsetY;

      // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/image-preview/image-preview.vue?vue&type=script&lang=js
 /* harmony default export */ var image_preview_image_previewvue_type_script_lang_js = (image_previewvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/image-preview/image-preview.vue





/* normalize component */

var image_preview_component = normalizeComponent(
  image_preview_image_previewvue_type_script_lang_js,
  image_previewvue_type_template_id_65c2fb8e_render,
  image_previewvue_type_template_id_65c2fb8e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var image_preview = (image_preview_component.exports);
// CONCATENATED MODULE: ./packages/image-preview/index.js



var image_preview_instance = void 0;

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(image_preview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
};

var ImagePreview = function ImagePreview(images) {
  var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  image_preview_instance.images = images;
  image_preview_instance.startPosition = startPosition;
  image_preview_instance.value = true;
  image_preview_instance.$on('input', function (show) {
    image_preview_instance.value = show;
  });

  return image_preview_instance;
};

ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(image_preview);
};

/* harmony default export */ var packages_image_preview = (ImagePreview);
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(61);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./packages/lazyload/index.js


/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/index.vue?vue&type=template&id=713bc038
var listvue_type_template_id_713bc038_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._t("default"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],class:_vm.b('loading')},[_vm._t("loading",[_c('loading'),_c('span',{class:_vm.b('loading-text')},[_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])],2)],2)}
var listvue_type_template_id_713bc038_staticRenderFns = []

// CONCATENATED MODULE: ./packages/list/index.vue?vue&type=template&id=713bc038

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var listvue_type_script_lang_js = (create({
  name: 'list',

  model: {
    prop: 'loading'
  },

  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },

  mounted: function mounted() {
    this.scroller = utils_scroll.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.onScroll);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    /* istanbul ignore next */
    this.handler(true);
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.handler(false);
  },


  watch: {
    loading: function loading() {
      this.$nextTick(this.onScroll);
    },
    finished: function finished() {
      this.$nextTick(this.onScroll);
    }
  },

  methods: {
    onScroll: function onScroll() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;

      var scrollerHeight = utils_scroll.getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (!scrollerHeight || utils_scroll.getComputedStyle(el).display === 'none') {
        return;
      }

      var scrollTop = utils_scroll.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;

      var reachBottom = false;

      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = utils_scroll.getElementTop(el) - utils_scroll.getElementTop(scroller) + utils_scroll.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }

      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.onScroll);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/list/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_listvue_type_script_lang_js = (listvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/list/index.vue





/* normalize component */

var list_component = normalizeComponent(
  packages_listvue_type_script_lang_js,
  listvue_type_template_id_713bc038_render,
  listvue_type_template_id_713bc038_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_list = (list_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/nav-bar/index.vue?vue&type=template&id=144d6167
var nav_barvue_type_template_id_144d6167_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline--bottom",class:_vm.b({ fixed: _vm.fixed }),style:(_vm.style)},[_c('div',{class:_vm.b('left'),on:{"click":function($event){_vm.$emit('click-left')}}},[_vm._t("left",[(_vm.leftArrow)?_c('icon',{class:_vm.b('arrow'),attrs:{"name":"arrow"}}):_vm._e(),(_vm.leftText)?_c('span',{class:_vm.b('text'),domProps:{"textContent":_vm._s(_vm.leftText)}}):_vm._e()])],2),_c('div',{staticClass:"van-ellipsis",class:_vm.b('title')},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),_c('div',{class:_vm.b('right'),on:{"click":function($event){_vm.$emit('click-right')}}},[_vm._t("right",[(_vm.rightText)?_c('span',{class:_vm.b('text'),domProps:{"textContent":_vm._s(_vm.rightText)}}):_vm._e()])],2)])}
var nav_barvue_type_template_id_144d6167_staticRenderFns = []

// CONCATENATED MODULE: ./packages/nav-bar/index.vue?vue&type=template&id=144d6167

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/nav-bar/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var nav_barvue_type_script_lang_js = (create({
  name: 'nav-bar',

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
}));
// CONCATENATED MODULE: ./packages/nav-bar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_nav_barvue_type_script_lang_js = (nav_barvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/nav-bar/index.vue





/* normalize component */

var nav_bar_component = normalizeComponent(
  packages_nav_barvue_type_script_lang_js,
  nav_barvue_type_template_id_144d6167_render,
  nav_barvue_type_template_id_144d6167_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nav_bar = (nav_bar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/notice-bar/index.vue?vue&type=template&id=1c78615b
var notice_barvue_type_template_id_1c78615b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNoticeBar),expression:"showNoticeBar"}],class:_vm.b({ withicon: _vm.mode }),style:(_vm.barStyle),on:{"click":function($event){_vm.$emit('click')}}},[(_vm.leftIcon)?_c('div',{class:_vm.b('left-icon')},[_c('img',{attrs:{"src":_vm.leftIcon}})]):_vm._e(),_c('div',{ref:"wrap",class:_vm.b('wrap')},[_c('div',{ref:"content",class:[_vm.b('content'), _vm.animationClass],style:(_vm.contentStyle),on:{"animationend":_vm.onAnimationEnd,"webkitAnimationEnd":_vm.onAnimationEnd}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)]),(_vm.iconName)?_c('icon',{class:_vm.b('right-icon'),attrs:{"name":_vm.iconName},on:{"click":_vm.onClickIcon}}):_vm._e()],1)}
var notice_barvue_type_template_id_1c78615b_staticRenderFns = []

// CONCATENATED MODULE: ./packages/notice-bar/index.vue?vue&type=template&id=1c78615b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/notice-bar/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var notice_barvue_type_script_lang_js = (create({
  name: 'notice-bar',

  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },


  computed: {
    iconName: function iconName() {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : '';
    },
    barStyle: function barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle: function contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },

  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _$refs = _this.$refs,
              wrap = _$refs.wrap,
              content = _$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;
          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = _this.b('play');
          }
        });
      },

      immediate: true
    }
  },

  methods: {
    onClickIcon: function onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = _this2.b('play--infinite');
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/notice-bar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_notice_barvue_type_script_lang_js = (notice_barvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/notice-bar/index.vue





/* normalize component */

var notice_bar_component = normalizeComponent(
  packages_notice_barvue_type_script_lang_js,
  notice_barvue_type_template_id_1c78615b_render,
  notice_barvue_type_template_id_1c78615b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice_bar = (notice_bar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-keyboard/index.vue?vue&type=template&id=110fd86e
var number_keyboardvue_type_template_id_110fd86e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transition ? 'van-slide-bottom' : ''}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:_vm.b([_vm.theme]),style:(_vm.style),on:{"animationend":_vm.onAnimationEnd,"webkitAnimationEnd":_vm.onAnimationEnd}},[(_vm.title || _vm.showTitleClose)?_c('div',{staticClass:"van-hairline--top",class:_vm.b('title')},[_c('span',{domProps:{"textContent":_vm._s(_vm.title)}}),(_vm.showTitleClose)?_c('span',{class:_vm.b('close'),domProps:{"textContent":_vm._s(_vm.closeButtonText)},on:{"click":_vm.onBlur}}):_vm._e()]):_vm._e(),_c('div',{class:_vm.b('body')},_vm._l((_vm.keys),function(key,index){return _c('key',{key:key.text,attrs:{"text":key.text,"type":key.type},on:{"press":_vm.onPressKey}})})),(_vm.theme === 'custom')?_c('div',{class:_vm.b('sidebar')},[_c('key',{attrs:{"text":'delete',"type":['delete', 'big']},on:{"press":_vm.onPressKey}}),_c('key',{attrs:{"text":_vm.closeButtonText,"type":['green', 'big']},on:{"press":_vm.onPressKey}})],1):_vm._e()])])}
var number_keyboardvue_type_template_id_110fd86e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/number-keyboard/index.vue?vue&type=template&id=110fd86e

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-keyboard/Key.vue?vue&type=template&id=7aa9c8a2
var Keyvue_type_template_id_7aa9c8a2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"van-hairline",class:[_vm.b(), _vm.className],domProps:{"textContent":_vm._s(_vm.text)},on:{"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onFocus($event)},"touchmove":_vm.onBlur,"touchend":_vm.onBlur,"touchcancel":_vm.onBlur}})}
var Keyvue_type_template_id_7aa9c8a2_staticRenderFns = []

// CONCATENATED MODULE: ./packages/number-keyboard/Key.vue?vue&type=template&id=7aa9c8a2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-keyboard/Key.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Keyvue_type_script_lang_js = (create({
  name: 'key',

  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      active: false
    };
  },


  computed: {
    className: function className() {
      var _this = this;

      var types = this.type.slice(0);
      this.active && types.push('active');

      return types.map(function (type) {
        return _this.b([type]);
      });
    }
  },

  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur() {
      this.active = false;
    }
  }
}));
// CONCATENATED MODULE: ./packages/number-keyboard/Key.vue?vue&type=script&lang=js
 /* harmony default export */ var number_keyboard_Keyvue_type_script_lang_js = (Keyvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/number-keyboard/Key.vue





/* normalize component */

var Key_component = normalizeComponent(
  number_keyboard_Keyvue_type_script_lang_js,
  Keyvue_type_template_id_7aa9c8a2_render,
  Keyvue_type_template_id_7aa9c8a2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Key = (Key_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-keyboard/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var number_keyboardvue_type_script_lang_js = (create({
  name: 'number-keyboard',

  components: { Key: Key },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },


  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },

  computed: {
    keys: function keys() {
      var keys = [];
      for (var i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }

      switch (this.theme) {
        case 'default':
          keys.push({ text: this.extraKey, type: ['gray'] }, { text: 0 }, { text: 'delete', type: ['gray', 'delete'] });
          break;
        case 'custom':
          keys.push({ text: 0, type: ['middle'] }, { text: this.extraKey });
          break;
      }

      return keys;
    },
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    },
    showTitleClose: function showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    }
  },

  methods: {
    handler: function handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPressKey: function onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === 'delete') {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onBlur();
      } else {
        this.$emit('input', text);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/number-keyboard/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_number_keyboardvue_type_script_lang_js = (number_keyboardvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/number-keyboard/index.vue





/* normalize component */

var number_keyboard_component = normalizeComponent(
  packages_number_keyboardvue_type_script_lang_js,
  number_keyboardvue_type_template_id_110fd86e_render,
  number_keyboardvue_type_template_id_110fd86e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var number_keyboard = (number_keyboard_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/index.vue?vue&type=template&id=a10c8b86
var paginationvue_type_template_id_a10c8b86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.b({ simple: !_vm.isMultiMode })},[_c('li',{staticClass:"van-hairline",class:[_vm.b('item', { disabled: _vm.value === 1 }), _vm.b('prev')],on:{"click":function($event){_vm.selectPage(_vm.value - 1)}}},[_vm._v("\n    "+_vm._s(_vm.prevText || _vm.$t('prev'))+"\n  ")]),_vm._l((_vm.pages),function(page,index){return (_vm.isMultiMode)?_c('li',{staticClass:"van-hairline",class:[_vm.b('item', { active: page.active }), _vm.b('page')],on:{"click":function($event){_vm.selectPage(page.number)}}},[_vm._v("\n    "+_vm._s(page.text)+"\n  ")]):_vm._e()}),(!_vm.isMultiMode)?_c('li',{class:_vm.b('page-desc')},[_vm._t("pageDesc",[_vm._v(_vm._s(_vm.pageDesc))])],2):_vm._e(),_c('li',{staticClass:"van-hairline",class:[_vm.b('item', { disabled: _vm.value === _vm.computedPageCount }), _vm.b('next')],on:{"click":function($event){_vm.selectPage(_vm.value + 1)}}},[_vm._v("\n    "+_vm._s(_vm.nextText || _vm.$t('next'))+"\n  ")])],2)}
var paginationvue_type_template_id_a10c8b86_staticRenderFns = []

// CONCATENATED MODULE: ./packages/pagination/index.vue?vue&type=template&id=a10c8b86

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var paginationvue_type_script_lang_js = (create({
  name: 'pagination',

  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },

  computed: {
    isMultiMode: function isMultiMode() {
      return this.mode === 'multi';
    },
    computedPageCount: function computedPageCount() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pageDesc: function pageDesc() {
      return this.value + '/' + this.computedPageCount;
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.computedPageCount;

      // Default page limits
      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      }

      // Add page number links
      for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, number, number === this.value);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },

  watch: {
    value: {
      handler: function handler(page) {
        this.selectPage(page || this.value);
      },

      immediate: true
    }
  },

  methods: {
    selectPage: function selectPage(page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);
      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },
    makePage: function makePage(number, text, active) {
      return { number: number, text: text, active: active };
    }
  }
}));
// CONCATENATED MODULE: ./packages/pagination/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_paginationvue_type_script_lang_js = (paginationvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/pagination/index.vue





/* normalize component */

var pagination_component = normalizeComponent(
  packages_paginationvue_type_script_lang_js,
  paginationvue_type_template_id_a10c8b86_render,
  paginationvue_type_template_id_a10c8b86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pagination = (pagination_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/panel/index.vue?vue&type=template&id=421078fe
var panelvue_type_template_id_421078fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cell-group',{class:_vm.b()},[_vm._t("header",[_c('cell',{class:_vm.b('header'),attrs:{"title":_vm.title,"label":_vm.desc,"value":_vm.status}})]),_c('div',{class:_vm.b('content')},[_vm._t("default")],2),(_vm.$slots.footer)?_c('div',{staticClass:"van-hairline--top",class:_vm.b('footer')},[_vm._t("footer")],2):_vm._e()],2)}
var panelvue_type_template_id_421078fe_staticRenderFns = []

// CONCATENATED MODULE: ./packages/panel/index.vue?vue&type=template&id=421078fe

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/panel/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var panelvue_type_script_lang_js = (create({
  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
}));
// CONCATENATED MODULE: ./packages/panel/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_panelvue_type_script_lang_js = (panelvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/panel/index.vue





/* normalize component */

var panel_component = normalizeComponent(
  packages_panelvue_type_script_lang_js,
  panelvue_type_template_id_421078fe_render,
  panelvue_type_template_id_421078fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var panel = (panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/password-input/index.vue?vue&type=template&id=1eb2f20e
var password_inputvue_type_template_id_1eb2f20e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('ul',{staticClass:"van-hairline--surround",class:_vm.b('security'),on:{"touchstart":function($event){$event.stopPropagation();_vm.$emit('focus')}}},_vm._l((_vm.points),function(visibility){return _c('li',{staticClass:"van-hairline"},[_c('i',{style:(("visibility: " + visibility))})])})),(_vm.errorInfo || _vm.info)?_c('div',{class:_vm.b(_vm.errorInfo ? 'error-info' : 'info'),domProps:{"textContent":_vm._s(_vm.errorInfo || _vm.info)}}):_vm._e()])}
var password_inputvue_type_template_id_1eb2f20e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/password-input/index.vue?vue&type=template&id=1eb2f20e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/password-input/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var password_inputvue_type_script_lang_js = (create({
  name: 'password-input',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },

  computed: {
    points: function points() {
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
}));
// CONCATENATED MODULE: ./packages/password-input/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_password_inputvue_type_script_lang_js = (password_inputvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/password-input/index.vue





/* normalize component */

var password_input_component = normalizeComponent(
  packages_password_inputvue_type_script_lang_js,
  password_inputvue_type_template_id_1eb2f20e_render,
  password_inputvue_type_template_id_1eb2f20e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var password_input = (password_input_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/index.vue?vue&type=template&id=4707b706
var progressvue_type_template_id_4707b706_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('span',{class:_vm.b('portion'),style:(_vm.portionStyle)}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPivot),expression:"showPivot"}],class:_vm.b('pivot'),style:(_vm.pivotStyle)},[_vm._v(_vm._s(_vm.pivotText))])])}
var progressvue_type_template_id_4707b706_staticRenderFns = []

// CONCATENATED MODULE: ./packages/progress/index.vue?vue&type=template&id=4707b706

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//



/* harmony default export */ var progressvue_type_script_lang_js = (create({
  name: 'progress',

  props: {
    inactive: Boolean,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    pivotText: {
      type: String,
      default: function _default() {
        return this.percentage + '%';
      }
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    componentColor: function componentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },
    pivotStyle: function pivotStyle() {
      var percentage = this.percentage;

      return {
        color: this.textColor,
        backgroundColor: this.componentColor,
        left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
        marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
      };
    },
    portionStyle: function portionStyle() {
      return {
        width: this.percentage + '%',
        backgroundColor: this.componentColor
      };
    }
  }
}));
// CONCATENATED MODULE: ./packages/progress/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_progressvue_type_script_lang_js = (progressvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/progress/index.vue





/* normalize component */

var progress_component = normalizeComponent(
  packages_progressvue_type_script_lang_js,
  progressvue_type_template_id_4707b706_render,
  progressvue_type_template_id_4707b706_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_progress = (progress_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pull-refresh/index.vue?vue&type=template&id=91ba1156
var pull_refreshvue_type_template_id_91ba1156_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('div',{class:_vm.b('track'),style:(_vm.style),on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},[_c('div',{class:_vm.b('head')},[(_vm.status === 'normal')?_vm._t("normal"):_vm._e(),(_vm.status === 'pulling')?_vm._t("pulling",[_c('span',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.pullingText || _vm.$t('pulling')))])]):_vm._e(),(_vm.status === 'loosing')?_vm._t("loosing",[_c('span',{class:_vm.b('text')},[_vm._v(_vm._s(_vm.loosingText || _vm.$t('loosing')))])]):_vm._e(),(_vm.status === 'loading')?_vm._t("loading",[_c('div',{class:_vm.b('loading')},[_c('loading'),_c('span',[_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])],1)]):_vm._e()],2),_vm._t("default")],2)])}
var pull_refreshvue_type_template_id_91ba1156_staticRenderFns = []

// CONCATENATED MODULE: ./packages/pull-refresh/index.vue?vue&type=template&id=91ba1156

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/pull-refresh/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var pull_refreshvue_type_script_lang_js = (create({
  name: 'pull-refresh',

  mixins: [touch],

  props: {
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },

  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },


  computed: {
    style: function style() {
      return {
        transition: this.duration + 'ms',
        transform: 'translate3d(0,' + this.height + 'px, 0)'
      };
    }
  },

  mounted: function mounted() {
    this.scrollEl = utils_scroll.getScrollEventTarget(this.$el);
  },


  watch: {
    value: function value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.status === 'loading') {
        return;
      }
      if (this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.status === 'loading') {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.status === 'loading') {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = utils_scroll.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;

      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus: function getStatus(height, isLoading) {
      this.height = height;

      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/pull-refresh/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_pull_refreshvue_type_script_lang_js = (pull_refreshvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/pull-refresh/index.vue





/* normalize component */

var pull_refresh_component = normalizeComponent(
  packages_pull_refreshvue_type_script_lang_js,
  pull_refreshvue_type_template_id_91ba1156_render,
  pull_refreshvue_type_template_id_91ba1156_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pull_refresh = (pull_refresh_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/rate/index.vue?vue&type=template&id=b1ec5f5e
var ratevue_type_template_id_b1ec5f5e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},_vm._l((_vm.list),function(isFull,index){return _c('svg',{class:_vm.b('item'),style:(_vm.style),attrs:{"fill":_vm.disabled ? _vm.disabledColor : isFull ? _vm.color : _vm.voidColor,"viewBox":"0 0 32 32"},on:{"click":function($event){_vm.onSelect(index)}}},[_c('path',{attrs:{"d":isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z'}})])}))}
var ratevue_type_template_id_b1ec5f5e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/rate/index.vue?vue&type=template&id=b1ec5f5e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/rate/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ratevue_type_script_lang_js = (create({
  name: 'rate',

  props: {
    size: {
      type: Number,
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    style: function style() {
      return {
        width: this.size + 'px'
      };
    },
    list: function list() {
      var _this = this;

      return Array.apply(null, { length: this.count }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },

  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled) {
        this.$emit('input', index + 1);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/rate/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_ratevue_type_script_lang_js = (ratevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/rate/index.vue





/* normalize component */

var rate_component = normalizeComponent(
  packages_ratevue_type_script_lang_js,
  ratevue_type_template_id_b1ec5f5e_render,
  ratevue_type_template_id_b1ec5f5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_rate = (rate_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/row/index.vue?vue&type=template&id=7666ccba
var rowvue_type_template_id_7666ccba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b(),style:(_vm.style)},[_vm._t("default")],2)}
var rowvue_type_template_id_7666ccba_staticRenderFns = []

// CONCATENATED MODULE: ./packages/row/index.vue?vue&type=template&id=7666ccba

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/row/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var rowvue_type_script_lang_js = (create({
  name: 'row',

  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style: function style() {
      var margin = '-' + Number(this.gutter) / 2 + 'px';
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    }
  }
}));
// CONCATENATED MODULE: ./packages/row/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_rowvue_type_script_lang_js = (rowvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/row/index.vue





/* normalize component */

var row_component = normalizeComponent(
  packages_rowvue_type_script_lang_js,
  rowvue_type_template_id_7666ccba_render,
  rowvue_type_template_id_7666ccba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var row = (row_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/search/index.vue?vue&type=template&id=7aa9739f
var searchvue_type_template_id_7aa9739f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ 'show-action': _vm.showAction }),style:({ background: _vm.background })},[_c('icon',{attrs:{"name":"search"}}),_c('field',_vm._g(_vm._b({attrs:{"value":_vm.value,"type":"search","icon":"clear","border":false},on:{"click-icon":function($event){_vm.$emit('input', '')}}},'field',_vm.$attrs,false),_vm.listeners)),(_vm.showAction)?_c('div',{class:_vm.b('action')},[_vm._t("action",[_c('div',{class:_vm.b('cancel'),on:{"click":_vm.onBack}},[_vm._v(_vm._s(_vm.$t('cancel')))])])],2):_vm._e()],1)}
var searchvue_type_template_id_7aa9739f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/search/index.vue?vue&type=template&id=7aa9739f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/search/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var searchvue_type_script_lang_js = (create({
  name: 'search',

  inheritAttrs: false,

  components: {
    Field: field
  },

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  computed: {
    listeners: function listeners() {
      return extends_default()({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },

  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./packages/search/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_searchvue_type_script_lang_js = (searchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/search/index.vue





/* normalize component */

var search_component = normalizeComponent(
  packages_searchvue_type_script_lang_js,
  searchvue_type_template_id_7aa9739f_render,
  searchvue_type_template_id_7aa9739f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var search = (search_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/Sku.vue?vue&type=template&id=e40da5f2
var Skuvue_type_template_id_e40da5f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isSkuEmpty)?_c('popup',{staticClass:"van-sku-container",attrs:{"position":"bottom","close-on-click-overlay":_vm.closeOnClickOverlay,"get-container":_vm.getContainer},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_vm._t("sku-header",[_c('sku-header',{attrs:{"sku-event-bus":_vm.skuEventBus,"selected-sku":_vm.selectedSku,"goods":_vm.goods,"sku":_vm.sku}},[_vm._t("sku-header-price",[_c('div',{staticClass:"van-sku__goods-price"},[_c('span',{staticClass:"van-sku__price-symbol"},[_vm._v("￥")]),_c('span',{staticClass:"van-sku__price-num"},[_vm._v(_vm._s(_vm.price))])])],{price:_vm.price,selectedSkuComb:_vm.selectedSkuComb})],2)],{skuEventBus:_vm.skuEventBus,selectedSku:_vm.selectedSku,selectedSkuComb:_vm.selectedSkuComb}),_c('div',{staticClass:"van-sku-body",style:(_vm.bodyStyle)},[_vm._t("sku-body-top",null,{selectedSku:_vm.selectedSku,skuEventBus:_vm.skuEventBus}),_vm._t("sku-group",[(_vm.hasSku)?_c('div',{staticClass:"van-sku-group-container van-hairline--bottom"},_vm._l((_vm.skuTree),function(skuTreeItem,index){return _c('sku-row',{key:index,attrs:{"sku-row":skuTreeItem}},_vm._l((skuTreeItem.v),function(skuValue,index){return _c('sku-row-item',{key:index,attrs:{"sku-key-str":skuTreeItem.k_s,"sku-value":skuValue,"sku-event-bus":_vm.skuEventBus,"selected-sku":_vm.selectedSku,"sku-list":_vm.sku.list}})}))})):_vm._e()],{selectedSku:_vm.selectedSku,skuEventBus:_vm.skuEventBus}),_vm._t("extra-sku-group",null,{skuEventBus:_vm.skuEventBus}),_vm._t("sku-stepper",[_c('sku-stepper',{ref:"skuStepper",attrs:{"sku-event-bus":_vm.skuEventBus,"selected-sku":_vm.selectedSku,"selected-sku-comb":_vm.selectedSkuComb,"selected-num":_vm.selectedNum,"stepper-title":_vm.stepperTitle,"sku-stock-num":_vm.sku.stock_num,"quota":_vm.quota,"quota-used":_vm.quotaUsed,"disable-stepper-input":_vm.disableStepperInput,"hide-stock":_vm.hideStock,"custom-stepper-config":_vm.customStepperConfig}})],{skuEventBus:_vm.skuEventBus,selectedSku:_vm.selectedSku,selectedSkuComb:_vm.selectedSkuComb,selectedNum:_vm.selectedNum}),_vm._t("sku-messages",[_c('sku-messages',{ref:"skuMessages",attrs:{"goods-id":_vm.goodsId,"message-config":_vm.messageConfig,"messages":_vm.sku.messages}})])],2),_vm._t("sku-actions",[_c('sku-actions',{attrs:{"sku-event-bus":_vm.skuEventBus,"buy-text":_vm.buyText,"show-add-cart-btn":_vm.showAddCartBtn}})],{skuEventBus:_vm.skuEventBus})],2):_vm._e()}
var Skuvue_type_template_id_e40da5f2_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/Sku.vue?vue&type=template&id=e40da5f2

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuHeader.vue?vue&type=template&id=9a757a7a
var SkuHeadervue_type_template_id_9a757a7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline--bottom",class:_vm.b()},[_c('div',{class:_vm.b('img-wrap')},[_c('img',{attrs:{"src":_vm.goodsImg}})]),_c('div',{class:_vm.b('goods-info')},[_c('div',{staticClass:"van-sku__goods-name van-ellipsis"},[_vm._v(_vm._s(_vm.goods.title))]),_vm._t("default"),_c('icon',{staticClass:"van-sku__close-icon",attrs:{"name":"close"},on:{"click":function($event){_vm.skuEventBus.$emit('sku:close')}}})],2)])}
var SkuHeadervue_type_template_id_9a757a7a_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuHeader.vue?vue&type=template&id=9a757a7a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuHeader.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SkuHeadervue_type_script_lang_js = (create({
  name: 'sku-header',

  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg: function goodsImg() {
      var s1Id = this.selectedSku.s1;
      var skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg: function getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      var treeItem = this.sku.tree.filter(function (treeItem) {
        return treeItem.k_s === 's1';
      })[0] || {};

      if (!treeItem.v) {
        return;
      }

      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuHeadervue_type_script_lang_js = (SkuHeadervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuHeader.vue





/* normalize component */

var SkuHeader_component = normalizeComponent(
  components_SkuHeadervue_type_script_lang_js,
  SkuHeadervue_type_template_id_9a757a7a_render,
  SkuHeadervue_type_template_id_9a757a7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuHeader = (SkuHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuRow.vue?vue&type=template&id=487c7a25
var SkuRowvue_type_template_id_487c7a25_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('div',{class:_vm.b('title')},[_vm._v(_vm._s(_vm.skuRow.k)+"：")]),_vm._t("default")],2)}
var SkuRowvue_type_template_id_487c7a25_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuRow.vue?vue&type=template&id=487c7a25

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuRow.vue?vue&type=script&lang=js
//
//
//
//
//
//
//



/* harmony default export */ var SkuRowvue_type_script_lang_js = (create({
  name: 'sku-row',

  props: {
    skuRow: Object
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuRow.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuRowvue_type_script_lang_js = (SkuRowvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuRow.vue





/* normalize component */

var SkuRow_component = normalizeComponent(
  components_SkuRowvue_type_script_lang_js,
  SkuRowvue_type_template_id_487c7a25_render,
  SkuRowvue_type_template_id_487c7a25_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuRow = (SkuRow_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuRowItem.vue?vue&type=template&id=5a3c6b6e
var SkuRowItemvue_type_template_id_5a3c6b6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"van-sku-row__item",class:{
    'van-sku-row__item--active': _vm.isChoosed,
    'van-sku-row__item--disabled': !_vm.isChoosable
  },on:{"click":_vm.onSelect}},[_vm._v("\n  "+_vm._s(_vm.skuValue.name)+"\n")])}
var SkuRowItemvue_type_template_id_5a3c6b6e_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuRowItem.vue?vue&type=template&id=5a3c6b6e

// CONCATENATED MODULE: ./packages/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};

var UNSELECTED_SKU_VALUE_ID = '';

/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./packages/sku/utils/skuHelper.js




/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
};

// 判断是否所有的sku都已经选中
var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = keys_default()(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
};

// 根据已选择的sku获取skuComb
var skuHelper_getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (skuComb) {
    return keys_default()(selectedSku).every(function (skuKeyStr) {
      return String(skuComb[skuKeyStr]) === String(selectedSku[skuKeyStr]); // eslint-disable-line
    });
  });
  return skuComb[0];
};

// 获取已选择的sku名称
var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return keys_default()(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (skuValue) {
        return skuValue.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }
    return selectedValues;
  }, []);
};

// 判断sku是否可选
var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _Object$assign2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId;
  // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = assign_default()({}, selectedSku, (_Object$assign2 = {}, _Object$assign2[key] = valueId, _Object$assign2));
  // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
  var skusToCheck = keys_default()(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });

  var stock = filteredSku.reduce(function (total, sku) {
    return total += sku.stock_num;
  }, 0);
  return stock > 0;
};

/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: skuHelper_getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuRowItem.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SkuRowItemvue_type_script_lang_js = (create({
  name: 'sku-row-item',

  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },

  computed: {
    isChoosed: function isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },
    isChoosable: function isChoosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },

  methods: {
    onSelect: function onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', extends_default()({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuRowItem.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuRowItemvue_type_script_lang_js = (SkuRowItemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuRowItem.vue





/* normalize component */

var SkuRowItem_component = normalizeComponent(
  components_SkuRowItemvue_type_script_lang_js,
  SkuRowItemvue_type_template_id_5a3c6b6e_render,
  SkuRowItemvue_type_template_id_5a3c6b6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuRowItem = (SkuRowItem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuStepper.vue?vue&type=template&id=f386ae92
var SkuSteppervue_type_template_id_f386ae92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-sku-stepper-stock"},[_c('div',{staticClass:"van-sku-stepper-container"},[_c('div',{staticClass:"van-sku__stepper-title"},[_vm._v(_vm._s(_vm.stepperTitle || _vm.$t('title'))+"：")]),_c('stepper',{staticClass:"van-sku__stepper",attrs:{"min":1,"max":_vm.stepperLimit,"disable-input":_vm.disableStepperInput},on:{"overlimit":_vm.onOverLimit,"change":_vm.onChange},model:{value:(_vm.currentNum),callback:function ($$v) {_vm.currentNum=$$v},expression:"currentNum"}})],1),(!_vm.hideStock)?_c('div',{staticClass:"van-sku__stock"},[_vm._v(_vm._s(_vm.$t('remain', _vm.stock)))]):_vm._e(),(_vm.quotaText)?_c('div',{staticClass:"van-sku__quota"},[_vm._v(_vm._s(_vm.quotaText))]):_vm._e()])}
var SkuSteppervue_type_template_id_f386ae92_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuStepper.vue?vue&type=template&id=f386ae92

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/stepper/index.vue?vue&type=template&id=5a672c1a
var steppervue_type_template_id_5a672c1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('button',{class:_vm.b('minus', { disabled: _vm.minusDisabled }),on:{"click":function($event){_vm.onChange('minus')}}}),_c('input',{class:_vm.b('input'),attrs:{"type":"number","disabled":_vm.disabled || _vm.disableInput},domProps:{"value":_vm.currentValue},on:{"input":_vm.onInput,"keypress":_vm.onKeypress}}),_c('button',{class:_vm.b('plus', { disabled: _vm.plusDisabled }),on:{"click":function($event){_vm.onChange('plus')}}})])}
var steppervue_type_template_id_5a672c1a_staticRenderFns = []

// CONCATENATED MODULE: ./packages/stepper/index.vue?vue&type=template&id=5a672c1a

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/is-nan.js
var is_nan = __webpack_require__(60);
var is_nan_default = /*#__PURE__*/__webpack_require__.n(is_nan);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/stepper/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var steppervue_type_script_lang_js = (create({
  name: 'stepper',

  props: {
    value: {},
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data: function data() {
    var value = this.value ? +this.value : +this.defaultValue;
    var correctedValue = this.correctValue(value);
    if (value !== correctedValue) {
      value = correctedValue;
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },


  computed: {
    minusDisabled: function minusDisabled() {
      var min = +this.min;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return min === currentValue || currentValue - step < min || this.disabled;
    },
    plusDisabled: function plusDisabled() {
      var max = +this.max;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return max === currentValue || currentValue + step > max || this.disabled;
    }
  },

  watch: {
    value: function value(val) {
      if (val !== '') {
        val = this.correctValue(+val);
        if (val !== this.currentValue) {
          this.currentValue = val;
        }
      }
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      return is_nan_default()(value) ? this.min : Math.max(this.min, Math.min(this.max, value));
    },
    onInput: function onInput(event) {
      var value = event.target.value;

      this.currentValue = value ? this.correctValue(+value) : value;
      event.target.value = this.currentValue;
      this.emitInput();
    },
    onChange: function onChange(type) {
      if (this.minusDisabled && type === 'minus' || this.plusDisabled && type === 'plus') {
        this.$emit('overlimit', type);
        return;
      }

      var step = +this.step;
      var currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? currentValue - step : currentValue + step;
      this.emitInput();
      this.$emit(type);
    },
    onKeypress: function onKeypress(event) {
      if (this.integer && event.keyCode === 46) {
        event.preventDefault();
      }
    },
    emitInput: function emitInput() {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./packages/stepper/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_steppervue_type_script_lang_js = (steppervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/stepper/index.vue





/* normalize component */

var stepper_component = normalizeComponent(
  packages_steppervue_type_script_lang_js,
  steppervue_type_template_id_5a672c1a_render,
  steppervue_type_template_id_5a672c1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var stepper = (stepper_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuStepper.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;


/* harmony default export */ var SkuSteppervue_type_script_lang_js = (create({
  name: 'sku-stepper',

  components: {
    Stepper: stepper
  },

  props: {
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },

  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },


  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },

  computed: {
    stock: function stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.skuStockNum;
    },
    quotaText: function quotaText() {
      var quotaText = this.customStepperConfig.quotaText;

      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = this.$t('quota', this.quota);
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit = void 0;

      // 无限购时直接取库存，有限购时取限购数和库存数中小的那个
      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },

  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;

      handleStepperChange && handleStepperChange(currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuStepper.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuSteppervue_type_script_lang_js = (SkuSteppervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuStepper.vue





/* normalize component */

var SkuStepper_component = normalizeComponent(
  components_SkuSteppervue_type_script_lang_js,
  SkuSteppervue_type_template_id_f386ae92_render,
  SkuSteppervue_type_template_id_f386ae92_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuStepper = (SkuStepper_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuMessages.vue?vue&type=template&id=bf8be7bc
var SkuMessagesvue_type_template_id_bf8be7bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cell-group',{class:_vm.b()},[_vm._l((_vm.messages),function(message,index){return [(message.type === 'image')?_c('cell',{key:(_vm.goodsId + "-" + index),class:_vm.b('image-cell'),attrs:{"label":_vm.$t('onePic'),"required":message.required == '1',"title":message.name}},[_c('sku-img-uploader',{attrs:{"upload-img":_vm.messageConfig.uploadImg,"max-size":_vm.messageConfig.uploadMaxSize},model:{value:(_vm.messageValues[index].value),callback:function ($$v) {_vm.$set(_vm.messageValues[index], "value", $$v)},expression:"messageValues[index].value"}})],1):_c('field',{key:(_vm.goodsId + "-" + index),attrs:{"required":message.required == '1',"label":message.name,"placeholder":_vm.getPlaceholder(message),"type":_vm.getType(message)},model:{value:(_vm.messageValues[index].value),callback:function ($$v) {_vm.$set(_vm.messageValues[index], "value", $$v)},expression:"messageValues[index].value"}})]})],2)}
var SkuMessagesvue_type_template_id_bf8be7bc_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuMessages.vue?vue&type=template&id=bf8be7bc

// CONCATENATED MODULE: ./packages/utils/validate/email.js
/* eslint-disable */
function email(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./packages/utils/validate/number.js
function number(value) {
  return (/^\d+$/.test(value)
  );
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuImgUploader.vue?vue&type=template&id=88196ad6
var SkuImgUploadervue_type_template_id_88196ad6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('van-uploader',{attrs:{"disabled":!!_vm.paddingImg,"after-read":_vm.afterReadFile,"max-size":_vm.maxSize * 1024 * 1024},on:{"oversize":function($event){_vm.$toast(_vm.$t('maxSize', _vm.maxSize))}}},[_c('div',{class:_vm.b('header')},[(_vm.paddingImg)?_c('div',[_vm._v(_vm._s(_vm.$t('uploading')))]):[_c('icon',{attrs:{"name":"photograph"}}),_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t(_vm.value ? 'rephoto' : 'photo')))]),_vm._v(" "+_vm._s(_vm.$t('or'))+"\n        "),_c('icon',{attrs:{"name":"photo"}}),_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t(_vm.value ? 'reselect' : 'select')))])]],2)]),(_vm.paddingImg || _vm.imgList.length > 0)?_c('div',{staticClass:"van-clearfix"},[_vm._l((_vm.imgList),function(img,index){return _c('div',{class:_vm.b('img')},[_c('img',{attrs:{"src":img}}),_c('icon',{class:_vm.b('delete'),attrs:{"name":"clear"},on:{"click":function($event){_vm.$emit('input', '')}}})],1)}),(_vm.paddingImg)?_c('div',{class:_vm.b('img')},[_c('img',{attrs:{"src":_vm.paddingImg}}),_c('loading',{class:_vm.b('uploading'),attrs:{"type":"spinner","color":"black"}})],1):_vm._e()],2):_vm._e()],1)}
var SkuImgUploadervue_type_template_id_88196ad6_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuImgUploader.vue?vue&type=template&id=88196ad6

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/uploader/index.vue?vue&type=template&id=2b375464
var uploadervue_type_template_id_2b375464_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_vm._t("default"),_c('input',_vm._b({ref:"input",class:_vm.b('input'),attrs:{"type":"file","accept":_vm.accept,"disabled":_vm.disabled},on:{"change":_vm.onChange}},'input',_vm.$attrs,false))],2)}
var uploadervue_type_template_id_2b375464_staticRenderFns = []

// CONCATENATED MODULE: ./packages/uploader/index.vue?vue&type=template&id=2b375464

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/uploader/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var uploadervue_type_script_lang_js = (create({
  name: 'uploader',

  inheritAttrs: false,

  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },

  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return;
      }

      if (Array.isArray(files)) {
        promise_default.a.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({ file: files, content: content }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new promise_default.a(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files);
        this.$refs.input && (this.$refs.input.value = '');
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/uploader/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_uploadervue_type_script_lang_js = (uploadervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/uploader/index.vue





/* normalize component */

var uploader_component = normalizeComponent(
  packages_uploadervue_type_script_lang_js,
  uploadervue_type_template_id_2b375464_render,
  uploadervue_type_template_id_2b375464_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploader = (uploader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuImgUploader.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SkuImgUploadervue_type_script_lang_js = (create({
  name: 'sku-img-uploader',

  components: {
    VanUploader: uploader
  },

  props: {
    value: String,
    uploadImg: {
      type: Function,
      required: true
    },
    maxSize: {
      type: Number,
      default: 6
    }
  },

  data: function data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },


  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },

  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);
        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuImgUploader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuImgUploadervue_type_script_lang_js = (SkuImgUploadervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuImgUploader.vue





/* normalize component */

var SkuImgUploader_component = normalizeComponent(
  components_SkuImgUploadervue_type_script_lang_js,
  SkuImgUploadervue_type_template_id_88196ad6_render,
  SkuImgUploadervue_type_template_id_88196ad6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuImgUploader = (SkuImgUploader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuMessages.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SkuMessagesvue_type_script_lang_js = (create({
  name: 'sku-messages',

  components: {
    SkuImgUploader: SkuImgUploader,
    Field: field
  },

  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },

  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },


  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },

  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },

  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return { value: '' };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }
      if (message.type === 'id_no') {
        return 'text';
      }
      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages['message_' + index] = value;
      });

      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];
        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[message.name] = value;
      });

      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || this.$t('placeholder.' + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? 'upload' : 'fill';
            return this.$t(textType) + message.name;
          }
        } else {
          if (message.type === 'tel' && !number(value)) {
            return this.$t('number');
          }
          if (message.type === 'email' && !email(value)) {
            return this.$t('email');
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return this.$t('id_no');
          }
        }

        if (value.length > 200) {
          return message.name + ' ' + this.$t('overlimit');
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuMessages.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuMessagesvue_type_script_lang_js = (SkuMessagesvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuMessages.vue





/* normalize component */

var SkuMessages_component = normalizeComponent(
  components_SkuMessagesvue_type_script_lang_js,
  SkuMessagesvue_type_template_id_bf8be7bc_render,
  SkuMessagesvue_type_template_id_bf8be7bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuMessages = (SkuMessages_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuActions.vue?vue&type=template&id=283f8982
var SkuActionsvue_type_template_id_283f8982_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[(_vm.showAddCartBtn)?_c('van-button',{attrs:{"bottom-action":"","text":_vm.$t('cart')},on:{"click":function($event){_vm.skuEventBus.$emit('sku:addCart')}}}):_vm._e(),_c('van-button',{attrs:{"type":"primary","bottom-action":"","text":_vm.buyText || _vm.$t('buy')},on:{"click":function($event){_vm.skuEventBus.$emit('sku:buy')}}})],1)}
var SkuActionsvue_type_template_id_283f8982_staticRenderFns = []

// CONCATENATED MODULE: ./packages/sku/components/SkuActions.vue?vue&type=template&id=283f8982

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/components/SkuActions.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SkuActionsvue_type_script_lang_js = (create({
  name: 'sku-actions',

  components: {
    VanButton: packages_button
  },

  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
}));
// CONCATENATED MODULE: ./packages/sku/components/SkuActions.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SkuActionsvue_type_script_lang_js = (SkuActionsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/components/SkuActions.vue





/* normalize component */

var SkuActions_component = normalizeComponent(
  components_SkuActionsvue_type_script_lang_js,
  SkuActionsvue_type_template_id_283f8982_render,
  SkuActionsvue_type_template_id_283f8982_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SkuActions = (SkuActions_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sku/Sku.vue?vue&type=script&lang=js



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable camelcase */













var Skuvue_type_script_lang_js_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;


/* harmony default export */ var Skuvue_type_script_lang_js = (create({
  name: 'sku',

  components: {
    Popup: packages_popup,
    SkuHeader: SkuHeader,
    SkuRow: SkuRow,
    SkuRowItem: SkuRowItem,
    SkuStepper: SkuStepper,
    SkuMessages: SkuMessages,
    SkuActions: SkuActions
  },

  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    stepperTitle: String,
    hideStock: Boolean,
    getContainer: Function,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    closeOnClickOverlay: Boolean,
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return promise_default.a.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },


  watch: {
    show: function show(val) {
      this.$emit('input', val);
      if (!val) {
        var selectedSkuValues = skuHelper_getSelectedSkuValues(this.sku.tree, this.selectedSku);

        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },

  computed: {
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      }

      // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下
      var maxHeight = window.innerHeight - this.bodyOffsetTop;

      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return keys_default()(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      } else if (this.isSkuCombSelected) {
        return skuHelper_getSkuComb(this.sku.list, this.selectedSku);
      }
      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    }
  },

  created: function created() {
    var skuEventBus = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a();
    this.skuEventBus = skuEventBus;

    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);

    this.resetSelectedSku(this.skuTree);
    // 组件初始化后的钩子，抛出skuEventBus
    this.$emit('after-sku-create', skuEventBus);
  },


  methods: {
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {};
      // 重置selectedSku
      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      });
      // 只有一个sku规格值时默认选中
      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;
        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this.sku.list, _this.selectedSku, { key: key, valueId: valueId })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return this.$t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      }

      return this.$t('spec');
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? extends_default()({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : extends_default()({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));

      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;


      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        packages_toast(this.$t('least'));
      } else if (action === 'plus') {
        if (limitType === Skuvue_type_script_lang_js_QUOTA_LIMIT) {
          var msg = this.$t('quota', quota);
          if (quotaUsed > 0) msg += '\uFF0C' + this.$t('purchase', quotaUsed);
          packages_toast(msg);
        } else {
          packages_toast(this.$t('inventory'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();
      if (error) {
        packages_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  }
}));
// CONCATENATED MODULE: ./packages/sku/Sku.vue?vue&type=script&lang=js
 /* harmony default export */ var sku_Skuvue_type_script_lang_js = (Skuvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/sku/Sku.vue





/* normalize component */

var Sku_component = normalizeComponent(
  sku_Skuvue_type_script_lang_js,
  Skuvue_type_template_id_e40da5f2_render,
  Skuvue_type_template_id_e40da5f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Sku = (Sku_component.exports);
// CONCATENATED MODULE: ./packages/sku/index.js










Sku.SkuActions = SkuActions;
Sku.SkuHeader = SkuHeader;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;

/* harmony default export */ var sku = (Sku);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/slider/index.vue?vue&type=template&id=632f9b6d
var slidervue_type_template_id_632f9b6d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ disabled: _vm.disabled }),on:{"click":function($event){$event.stopPropagation();return _vm.onClick($event)}}},[_c('div',{class:_vm.b('bar'),style:(_vm.barStyle)},[_c('span',{class:_vm.b('button'),on:{"touchstart":_vm.onTouchStart,"touchmove":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onTouchMove($event)},"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}})])])}
var slidervue_type_template_id_632f9b6d_staticRenderFns = []

// CONCATENATED MODULE: ./packages/slider/index.vue?vue&type=template&id=632f9b6d

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/slider/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var slidervue_type_script_lang_js = (create({
  name: 'slider',

  mixins: [touch],

  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },

  computed: {
    barStyle: function barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      };
    }
  },

  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;

      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) return;

      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      if (this.disabled) return;

      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  }
}));
// CONCATENATED MODULE: ./packages/slider/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_slidervue_type_script_lang_js = (slidervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/slider/index.vue





/* normalize component */

var slider_component = normalizeComponent(
  packages_slidervue_type_script_lang_js,
  slidervue_type_template_id_632f9b6d_render,
  slidervue_type_template_id_632f9b6d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var slider = (slider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/step/index.vue?vue&type=template&id=8fe63eaa
var stepvue_type_template_id_8fe63eaa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline",class:_vm.b([_vm.$parent.direction, ( _obj = {}, _obj[_vm.status] = _vm.status, _obj )])},[_c('div',{class:_vm.b('title'),style:(_vm.titleStyle)},[_vm._t("default")],2),_c('div',{class:_vm.b('circle-container')},[(_vm.status !== 'process')?_c('i',{class:_vm.b('circle')}):_c('icon',{style:({ color: _vm.$parent.activeColor }),attrs:{"name":"checked"}})],1),_c('div',{class:_vm.b('line')})])
var _obj;}
var stepvue_type_template_id_8fe63eaa_staticRenderFns = []

// CONCATENATED MODULE: ./packages/step/index.vue?vue&type=template&id=8fe63eaa

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/step/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var stepvue_type_script_lang_js = (create({
  name: 'step',

  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },


  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    titleStyle: function titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./packages/step/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_stepvue_type_script_lang_js = (stepvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/step/index.vue





/* normalize component */

var step_component = normalizeComponent(
  packages_stepvue_type_script_lang_js,
  stepvue_type_template_id_8fe63eaa_render,
  stepvue_type_template_id_8fe63eaa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var step = (step_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/index.vue?vue&type=template&id=29a95c41
var stepsvue_type_template_id_29a95c41_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b([_vm.direction])},[(_vm.title || _vm.description)?_c('div',{class:_vm.b('status')},[(_vm.icon || _vm.$slots.icon)?_c('div',{class:_vm.b('icon')},[_vm._t("icon",[_c('icon',{class:_vm.iconClass,attrs:{"name":_vm.icon}})])],2):_vm._e(),_c('div',{class:_vm.b('message')},[_c('div',{class:_vm.b('title'),domProps:{"textContent":_vm._s(_vm.title)}}),_c('div',{staticClass:"van-ellipsis",class:_vm.b('desc'),domProps:{"textContent":_vm._s(_vm.description)}})]),_vm._t("message-extra")],2):_vm._e(),_c('div',{class:_vm.b('items', { alone: !_vm.title && !_vm.description })},[_vm._t("default")],2)])}
var stepsvue_type_template_id_29a95c41_staticRenderFns = []

// CONCATENATED MODULE: ./packages/steps/index.vue?vue&type=template&id=29a95c41

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var stepsvue_type_script_lang_js = (create({
  name: 'steps',

  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },

  data: function data() {
    return {
      steps: []
    };
  }
}));
// CONCATENATED MODULE: ./packages/steps/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_stepsvue_type_script_lang_js = (stepsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/steps/index.vue





/* normalize component */

var steps_component = normalizeComponent(
  packages_stepsvue_type_script_lang_js,
  stepsvue_type_template_id_29a95c41_render,
  stepsvue_type_template_id_29a95c41_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var steps = (steps_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/submit-bar/index.vue?vue&type=template&id=24146d47
var submit_barvue_type_template_id_24146d47_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b()},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tip || _vm.$slots.tip),expression:"tip || $slots.tip"}],class:_vm.b('tip')},[_vm._v("\n    "+_vm._s(_vm.tip)),_vm._t("tip")],2),_c('div',{class:_vm.b('bar')},[_vm._t("default"),_c('div',{class:_vm.b('price')},[(_vm.hasPrice)?[_c('span',[_vm._v(_vm._s(_vm.label || _vm.$t('label')))]),_c('span',{class:_vm.b('price-integer')},[_vm._v(_vm._s(_vm.currency)+_vm._s(_vm.priceInterger)+".")]),_c('span',{class:_vm.b('price-decimal')},[_vm._v(_vm._s(_vm.priceDecimal))])]:_vm._e()],2),_c('van-button',{attrs:{"type":_vm.buttonType,"disabled":_vm.disabled,"loading":_vm.loading},on:{"click":_vm.onSubmit}},[_vm._v("\n      "+_vm._s(_vm.loading ? '' : _vm.buttonText)+"\n    ")])],2)])}
var submit_barvue_type_template_id_24146d47_staticRenderFns = []

// CONCATENATED MODULE: ./packages/submit-bar/index.vue?vue&type=template&id=24146d47

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/submit-bar/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var submit_barvue_type_script_lang_js = (create({
  name: 'submit-bar',

  components: {
    VanButton: packages_button
  },

  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    },
    priceInterger: function priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal: function priceDecimal() {
      var decimal = Math.floor(this.price % 100);
      return (decimal < 10 ? '0' : '') + decimal;
    }
  },

  methods: {
    onSubmit: function onSubmit() {
      if (!this.disabled && !this.loading) {
        this.$emit('submit');
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/submit-bar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_submit_barvue_type_script_lang_js = (submit_barvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/submit-bar/index.vue





/* normalize component */

var submit_bar_component = normalizeComponent(
  packages_submit_barvue_type_script_lang_js,
  submit_barvue_type_template_id_24146d47_render,
  submit_barvue_type_template_id_24146d47_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var submit_bar = (submit_bar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/index.vue?vue&type=template&id=08a29079
var tabvue_type_template_id_08a29079_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSelected),expression:"isSelected"}],class:_vm.b('pane')},[(_vm.slotInited)?_vm._t("default"):_vm._e()],2)}
var tabvue_type_template_id_08a29079_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tab/index.vue?vue&type=template&id=08a29079

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/index.vue?vue&type=script&lang=js
//
//
//
//
//
//




/* harmony default export */ var tabvue_type_script_lang_js = (create({
  name: 'tab',

  mixins: [find_parent],

  props: {
    title: String,
    disabled: Boolean
  },

  data: function data() {
    return {
      slotInited: false
    };
  },


  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected: function isSelected() {
      return this.index === this.parent.curActive;
    }
  },

  watch: {
    'parent.curActive': function parentCurActive() {
      if (this.isSelected) {
        this.slotInited = true;
      }
    }
  },

  created: function created() {
    this.findParent('van-tabs');
    this.parent.tabs.push(this);
  },
  destroyed: function destroyed() {
    this.parent.tabs.splice(this.index, 1);
  }
}));
// CONCATENATED MODULE: ./packages/tab/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tabvue_type_script_lang_js = (tabvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tab/index.vue





/* normalize component */

var tab_component = normalizeComponent(
  packages_tabvue_type_script_lang_js,
  tabvue_type_template_id_08a29079_render,
  tabvue_type_template_id_08a29079_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab = (tab_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/index.vue?vue&type=template&id=3a0c943f
var tabbarvue_type_template_id_3a0c943f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"van-hairline--top-bottom",class:_vm.b({ fixed: _vm.fixed })},[_vm._t("default")],2)}
var tabbarvue_type_template_id_3a0c943f_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tabbar/index.vue?vue&type=template&id=3a0c943f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar/index.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var tabbarvue_type_script_lang_js = (create({
  name: 'tabbar',

  data: function data() {
    return {
      items: []
    };
  },


  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },

  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      this.$emit('input', active);
      this.$emit('change', active);
    }
  }
}));
// CONCATENATED MODULE: ./packages/tabbar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tabbarvue_type_script_lang_js = (tabbarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tabbar/index.vue





/* normalize component */

var tabbar_component = normalizeComponent(
  packages_tabbarvue_type_script_lang_js,
  tabbarvue_type_template_id_3a0c943f_render,
  tabbarvue_type_template_id_3a0c943f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabbar = (tabbar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar-item/index.vue?vue&type=template&id=f89450e8
var tabbar_itemvue_type_template_id_f89450e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b({ active: _vm.active }),on:{"click":_vm.onClick}},[_c('div',{class:_vm.b('icon', { dot: _vm.dot })},[_vm._t("icon",[(_vm.icon)?_c('icon',{attrs:{"name":_vm.icon}}):_vm._e()],{active:_vm.active}),(_vm.isDef(_vm.info))?_c('div',{staticClass:"van-icon__info"},[_vm._v(_vm._s(_vm.info))]):_vm._e()],2),_c('div',{class:_vm.b('text')},[_vm._t("default",null,{active:_vm.active})],2)])}
var tabbar_itemvue_type_template_id_f89450e8_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tabbar-item/index.vue?vue&type=template&id=f89450e8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabbar-item/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var tabbar_itemvue_type_script_lang_js = (create({
  name: 'tabbar-item',

  mixins: [router_link],

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },


  methods: {
    isDef: utils["d" /* isDef */],

    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./packages/tabbar-item/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tabbar_itemvue_type_script_lang_js = (tabbar_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tabbar-item/index.vue





/* normalize component */

var tabbar_item_component = normalizeComponent(
  packages_tabbar_itemvue_type_script_lang_js,
  tabbar_itemvue_type_template_id_f89450e8_render,
  tabbar_itemvue_type_template_id_f89450e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabbar_item = (tabbar_item_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/index.vue?vue&type=template&id=c20fbeac
var tabsvue_type_template_id_c20fbeac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b([_vm.type])},[_c('div',{ref:"wrap",class:[
      _vm.b('wrap', [_vm.position, { scrollable: _vm.scrollable }]),
      { 'van-hairline--top-bottom': _vm.type === 'line' }
    ]},[_c('div',{ref:"nav",class:_vm.b('nav', [_vm.type])},[(_vm.type === 'line')?_c('div',{class:_vm.b('line'),style:(_vm.lineStyle)}):_vm._e(),_vm._l((_vm.tabs),function(tab,index){return _c('div',{ref:"tabs",refInFor:true,staticClass:"van-tab",class:{
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled
        },on:{"click":function($event){_vm.onClick(index)}}},[(tab.$slots.title)?_c('van-node',{attrs:{"node":tab.$slots.title}}):_c('span',{staticClass:"van-ellipsis"},[_vm._v(_vm._s(tab.title))])],1)})],2)]),_c('div',{ref:"content",class:_vm.b('content')},[_vm._t("default")],2)])}
var tabsvue_type_template_id_c20fbeac_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tabs/index.vue?vue&type=template&id=c20fbeac

// CONCATENATED MODULE: ./packages/utils/node.js
/**
 * VNode helper
 */
/* harmony default export */ var node = ({
  name: 'van-node',
  functional: true,
  props: {
    node: Array
  },
  render: function render(h, ctx) {
    return ctx.props.node;
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var tabsvue_type_script_lang_js = (create({
  name: 'tabs',

  mixins: [touch],

  components: {
    VanNode: node
  },

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data: function data() {
    return {
      tabs: [],
      position: 'content-top',
      curActive: 0,
      lineStyle: {}
    };
  },


  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    }
  },

  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        utils_scroll.setScrollTop(this.scrollEl, utils_scroll.getElementTop(this.$el));
      }
    },
    sticky: function sticky(isSticky) {
      this.scrollHandler(isSticky);
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(function () {
      if (_this.sticky) {
        _this.scrollHandler(true);
      }
      if (_this.swipeable) {
        _this.swipeableHandler(true);
      }
      _this.scrollIntoView();
    });
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    if (this.sticky) {
      this.scrollHandler(false);
    }
    /* istanbul ignore next */
    if (this.swipeable) {
      this.swipeableHandler(false);
    }
  },


  methods: {
    // whether to bind sticky listener
    scrollHandler: function scrollHandler(init) {
      this.scrollEl = this.scrollEl || utils_scroll.getScrollEventTarget(this.$el);
      (init ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
      if (init) {
        this.onScroll();
      }
    },


    // whether to bind content swipe listener
    swipeableHandler: function swipeableHandler(init) {
      var content = this.$refs.content;

      var action = init ? on : off;
      action(content, 'touchstart', this.touchStart);
      action(content, 'touchmove', this.touchMove);
      action(content, 'touchend', this.onTouchEnd);
      action(content, 'touchcancel', this.onTouchEnd);
    },


    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;

      var minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },


    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = utils_scroll.getScrollTop(this.scrollEl);
      var elTopToPageTop = utils_scroll.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'content-bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'page-top';
      } else {
        this.position = 'content-top';
      }
    },


    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      this.$nextTick(function () {
        if (!_this2.$refs.tabs) {
          return;
        }

        var tab = _this2.$refs.tabs[_this2.curActive];
        var width = _this2.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        _this2.lineStyle = {
          width: width + 'px',
          transform: 'translateX(' + left + 'px)',
          transitionDuration: _this2.duration + 's'
        };
      });
    },


    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      this.curActive = active;
      this.$emit('input', active);
    },


    // emit event when clicked
    onClick: function onClick(index) {
      var _tabs$index = this.tabs[index],
          title = _tabs$index.title,
          disabled = _tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.$emit('click', index, title);
        this.setCurActive(index);
      }
    },


    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;


      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
    },


    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to) {
      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);
      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          Object(raf["b" /* raf */])(animate);
        }
      };
      animate();
    }
  }
}));
// CONCATENATED MODULE: ./packages/tabs/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tabsvue_type_script_lang_js = (tabsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tabs/index.vue





/* normalize component */

var tabs_component = normalizeComponent(
  packages_tabsvue_type_script_lang_js,
  tabsvue_type_template_id_c20fbeac_render,
  tabsvue_type_template_id_c20fbeac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/index.vue?vue&type=template&id=5ebaeab2
var tagvue_type_template_id_5ebaeab2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"van-hairline--surround",class:_vm.b(( _obj = {
    mark: _vm.mark,
    plain: _vm.plain
  }, _obj[_vm.type] = _vm.type, _obj ))},[_vm._t("default")],2)
var _obj;}
var tagvue_type_template_id_5ebaeab2_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tag/index.vue?vue&type=template&id=5ebaeab2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tagvue_type_script_lang_js = (create({
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
}));
// CONCATENATED MODULE: ./packages/tag/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tagvue_type_script_lang_js = (tagvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tag/index.vue





/* normalize component */

var tag_component = normalizeComponent(
  packages_tagvue_type_script_lang_js,
  tagvue_type_template_id_5ebaeab2_render,
  tagvue_type_template_id_5ebaeab2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tag = (tag_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-select/index.vue?vue&type=template&id=72c96afe
var tree_selectvue_type_template_id_72c96afe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.b(),style:({ height: _vm.mainHeight + 'px' })},[_c('div',{class:_vm.b('nav')},_vm._l((_vm.items),function(item,index){return _c('div',{staticClass:"van-ellipsis",class:_vm.b('nitem', { active: _vm.mainActiveIndex === index }),on:{"click":function($event){_vm.$emit('navclick', index)}}},[_vm._v("\n      "+_vm._s(item.text)+"\n    ")])})),_c('div',{class:_vm.b('content'),style:({ height: _vm.itemHeight + 'px' })},_vm._l((_vm.subItems),function(item){return _c('div',{key:item.id,staticClass:"van-ellipsis",class:_vm.b('item', { active: _vm.activeId === item.id }),on:{"click":function($event){_vm.onItemSelect(item)}}},[_vm._v("\n      "+_vm._s(item.text)+"\n      "),(_vm.activeId === item.id)?_c('icon',{class:_vm.b('selected'),attrs:{"name":"success"}}):_vm._e()],1)}))])}
var tree_selectvue_type_template_id_72c96afe_staticRenderFns = []

// CONCATENATED MODULE: ./packages/tree-select/index.vue?vue&type=template&id=72c96afe

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-select/index.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tree_selectvue_type_script_lang_js = (create({
  name: 'tree-select',

  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight: function mainHeight() {
      var maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight: function itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },

  methods: {
    onItemSelect: function onItemSelect(data) {
      this.$emit('itemclick', extends_default()({}, data));
    }
  }
}));
// CONCATENATED MODULE: ./packages/tree-select/index.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_tree_selectvue_type_script_lang_js = (tree_selectvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/tree-select/index.vue





/* normalize component */

var tree_select_component = normalizeComponent(
  packages_tree_selectvue_type_script_lang_js,
  tree_selectvue_type_template_id_72c96afe_render,
  tree_selectvue_type_template_id_72c96afe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tree_select = (tree_select_component.exports);
// CONCATENATED MODULE: ./packages/waterfall/directive.js



var CONTEXT = '@@Waterfall';
var OFFSET = 300;

// 绑定事件到元素上
// 读取基本的控制变量
function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }
  this.el[CONTEXT].binded = true;

  this.scrollEventListener = utils_scroll.debounce(handleScrollEvent.bind(this), 200);
  this.scrollEventTarget = utils_scroll.getScrollEventTarget(this.el);

  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;
      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;

  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);

  this.scrollEventListener();
}

// 处理滚动函数
function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget;
  // 已被禁止的滚动处理
  if (this.disabled) return;

  var targetScrollTop = utils_scroll.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = utils_scroll.getVisibleHeight(scrollEventTarget);
  // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离
  var targetBottom = targetScrollTop + targetVisibleHeight;

  // 如果无元素高度，考虑为元素隐藏，直接返回
  if (!targetVisibleHeight) return;

  // 判断是否到了底
  var needLoadMoreToLower = false;
  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget) + utils_scroll.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }
  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({ target: scrollEventTarget, top: targetScrollTop });
  }

  // 判断是否到了顶
  var needLoadMoreToUpper = false;
  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }
  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({ target: scrollEventTarget, top: targetScrollTop });
  }
}

// 绑定事件
function startBind(el) {
  var context = el[CONTEXT];

  context.vm.$nextTick(function () {
    if (utils_scroll.isAttached(el)) {
      doBindEvent.call(el[CONTEXT]);
    }
  });
}

// 确认何时绑事件监听函数
function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

/* harmony default export */ var directive = (function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }
      el[CONTEXT].cb[type] = binding.value;

      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];
      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
});;
// CONCATENATED MODULE: ./packages/waterfall/index.js


directive.install = function (Vue) {
  if (false) {}
  Vue.directive('WaterfallLower', directive('lower'));
  Vue.directive('WaterfallUpper', directive('upper'));
};

/* harmony default export */ var waterfall = (directive);
// CONCATENATED MODULE: ./packages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return packages_install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Actionsheet", function() { return actionsheet; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return address_edit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AddressList", function() { return address_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Area", function() { return packages_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Badge", function() { return badge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BadgeGroup", function() { return badge_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return packages_button; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Cell", function() { return cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CellSwipe", function() { return cell_swipe; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return packages_checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactCard", function() { return contact_card; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return contact_edit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return contact_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CouponCell", function() { return coupon_cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CouponList", function() { return coupon_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return packages_dialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return goods_action; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsActionBigBtn", function() { return goods_action_big_btn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GoodsActionMiniBtn", function() { return goods_action_mini_btn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return packages_image_preview; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "List", function() { return packages_list; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Locale", function() { return packages_locale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Picker", function() { return picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popup", function() { return packages_popup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Progress", function() { return packages_progress; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Radio", function() { return packages_radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Rate", function() { return packages_rate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Sku", function() { return sku; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Step", function() { return step; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return swipe; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Switch", function() { return packages_switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Toast", function() { return packages_toast; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Waterfall", function() { return waterfall; });
// This file is auto gererated by build/bin/build-entry.js





































































var version = '1.1.2';
var components = [actionsheet, address_edit, address_list, packages_area, badge, badge_group, packages_button, card, cell, cell_group, cell_swipe, packages_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, coupon_cell, coupon_list, datetime_picker, packages_dialog, field, goods_action, goods_action_big_btn, goods_action_mini_btn, icon, packages_image_preview, packages_list, loading, packages_locale, nav_bar, notice_bar, number_keyboard, pagination, panel, password_input, picker, packages_popup, packages_progress, pull_refresh, packages_radio, radio_group, packages_rate, row, search, sku, slider, step, stepper, steps, submit_bar, swipe, swipe_item, packages_switch, switch_cell, tab, tabbar, tabbar_item, tabs, tag, packages_toast, tree_select, uploader];

var packages_install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  packages_install(window.Vue);
}



/* harmony default export */ var packages_0 = __webpack_exports__["default"] = ({
  install: packages_install,
  version: version
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(5).Number.isNaN;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(30);
var perform = __webpack_require__(44);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(9);
var core = __webpack_require__(5);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(46);
var promiseResolve = __webpack_require__(43);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(11);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(14);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(45).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(19);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(19);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(28);
var call = __webpack_require__(76);
var isArrayIter = __webpack_require__(75);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(56);
var getIterFn = __webpack_require__(74);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var global = __webpack_require__(6);
var ctx = __webpack_require__(28);
var classof = __webpack_require__(47);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(12);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(78);
var forOf = __webpack_require__(77);
var speciesConstructor = __webpack_require__(46);
var task = __webpack_require__(45).set;
var microtask = __webpack_require__(72)();
var newPromiseCapabilityModule = __webpack_require__(30);
var perform = __webpack_require__(44);
var promiseResolve = __webpack_require__(43);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(71)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(70)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(55);
__webpack_require__(50);
__webpack_require__(79);
__webpack_require__(68);
__webpack_require__(67);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(5);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(33);
var $keys = __webpack_require__(21);

__webpack_require__(81)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(40);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(59);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(49).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(12);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(11);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(53);
var META = __webpack_require__(90).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(36);
var setToStringTag = __webpack_require__(22);
var uid = __webpack_require__(25);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(32);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(89);
var isArray = __webpack_require__(88);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(12);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(40);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(52);
var gOPNExt = __webpack_require__(87);
var $GOPD = __webpack_require__(86);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(21);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
__webpack_require__(48);
__webpack_require__(85);
__webpack_require__(84);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95);
var step = __webpack_require__(94);
var Iterators = __webpack_require__(19);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(22);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(39);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(50);
module.exports = __webpack_require__(32).f('iterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(56);
var toAbsoluteIndex = __webpack_require__(103);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(33);
var IObject = __webpack_require__(57);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(105) });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(5).Object.assign;


/***/ })
/******/ ]);
});
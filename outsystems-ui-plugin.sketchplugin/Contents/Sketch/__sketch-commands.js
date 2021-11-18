var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch-commands.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@skpm/promise/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@skpm/promise/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* from https://github.com/taylorhakes/promise-polyfill */

function promiseFinally(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

function noop() {}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError("Promises must be constructed via new");
  if (typeof fn !== "function") throw new TypeError("not a function");
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (
      newValue &&
      (typeof newValue === "object" || typeof newValue === "function")
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === "function") {
        doResolve(then.bind(newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value, self);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) {
          Promise._multipleResolvesFn("resolve", self, value);
          return;
        }
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) {
          Promise._multipleResolvesFn("reject", self, reason);
          return;
        }
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) {
      Promise._multipleResolvesFn("reject", self, ex);
      return;
    }
    done = true;
    reject(self, ex);
  }
}

Promise.prototype["catch"] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype["finally"] = promiseFinally;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.all accepts an array"));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === "object" || typeof val === "function")) {
          var then = val.then;
          if (typeof then === "function") {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === "object" && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.race accepts an array"));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn = setImmediate;

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err, promise) {
  if (
    typeof process !== "undefined" &&
    process.listenerCount &&
    (process.listenerCount("unhandledRejection") ||
      process.listenerCount("uncaughtException"))
  ) {
    process.emit("unhandledRejection", err, promise);
    process.emit("uncaughtException", err, "unhandledRejection");
  } else if (typeof console !== "undefined" && console) {
    console.warn("Possible Unhandled Promise Rejection:", err);
  }
};

Promise._multipleResolvesFn = function _multipleResolvesFn(
  type,
  promise,
  value
) {
  if (typeof process !== "undefined" && process.emit) {
    process.emit("multipleResolves", type, promise, value);
  }
};

module.exports = Promise;


/***/ }),

/***/ "./node_modules/mocha-js-delegate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mocha-js-delegate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* globals MOClassDescription, NSObject, NSSelectorFromString, NSClassFromString, MOPropertyDescription */

module.exports = function MochaDelegate(definition, superclass) {
  var uniqueClassName =
    'MochaJSDelegate_DynamicClass_' + NSUUID.UUID().UUIDString()

  var delegateClassDesc = MOClassDescription.allocateDescriptionForClassWithName_superclass_(
    uniqueClassName,
    superclass || NSObject
  )

  // Storage
  var handlers = {}
  var ivars = {}

  // Define an instance method
  function setHandlerForSelector(selectorString, func) {
    var handlerHasBeenSet = selectorString in handlers
    var selector = NSSelectorFromString(selectorString)

    handlers[selectorString] = func

    /*
      For some reason, Mocha acts weird about arguments: https://github.com/logancollins/Mocha/issues/28
      We have to basically create a dynamic handler with a likewise dynamic number of predefined arguments.
    */
    if (!handlerHasBeenSet) {
      var args = []
      var regex = /:/g
      while (regex.exec(selectorString)) {
        args.push('arg' + args.length)
      }

      // eslint-disable-next-line no-eval
      var dynamicFunction = eval(
        '(function (' +
          args.join(', ') +
          ') { return handlers[selectorString].apply(this, arguments); })'
      )

      delegateClassDesc.addInstanceMethodWithSelector_function(
        selector,
        dynamicFunction
      )
    }
  }

  // define a property
  function setIvar(key, value) {
    var ivarHasBeenSet = key in handlers

    ivars[key] = value

    if (!ivarHasBeenSet) {
      delegateClassDesc.addInstanceVariableWithName_typeEncoding(key, '@')
      var description = MOPropertyDescription.new()
      description.name = key
      description.typeEncoding = '@'
      description.weak = true
      description.ivarName = key
      delegateClassDesc.addProperty(description)
    }
  }

  this.getClass = function() {
    return NSClassFromString(uniqueClassName)
  }

  this.getClassInstance = function(instanceVariables) {
    var instance = NSClassFromString(uniqueClassName).new()
    Object.keys(ivars).forEach(function(key) {
      instance[key] = ivars[key]
    })
    Object.keys(instanceVariables || {}).forEach(function(key) {
      instance[key] = instanceVariables[key]
    })
    return instance
  }
  // alias
  this.new = this.getClassInstance

  // Convenience
  if (typeof definition === 'object') {
    Object.keys(definition).forEach(
      function(key) {
        if (typeof definition[key] === 'function') {
          setHandlerForSelector(key, definition[key])
        } else {
          setIvar(key, definition[key])
        }
      }
    )
  }

  delegateClassDesc.registerClass()
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/browser-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/browser-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function parseHexColor(color) {
  // Check the string for incorrect formatting.
  if (!color || color[0] !== '#') {
    if (
      color &&
      typeof color.isKindOfClass === 'function' &&
      color.isKindOfClass(NSColor)
    ) {
      return color
    }
    throw new Error(
      'Incorrect color formating. It should be an hex color: #RRGGBBAA'
    )
  }

  // append FF if alpha channel is not specified.
  var source = color.substr(1)
  if (source.length === 3) {
    source += 'F'
  } else if (source.length === 6) {
    source += 'FF'
  }
  // Convert the string from #FFF format to #FFFFFF format.
  var hex
  if (source.length === 4) {
    for (var i = 0; i < 4; i += 1) {
      hex += source[i]
      hex += source[i]
    }
  } else if (source.length === 8) {
    hex = source
  } else {
    return NSColor.whiteColor()
  }

  var r = parseInt(hex.slice(0, 2), 16) / 255
  var g = parseInt(hex.slice(2, 4), 16) / 255
  var b = parseInt(hex.slice(4, 6), 16) / 255
  var a = parseInt(hex.slice(6, 8), 16) / 255

  return NSColor.colorWithSRGBRed_green_blue_alpha(r, g, b, a)
}

module.exports = function (browserWindow, panel, webview) {
  // keep reference to the subviews
  browserWindow._panel = panel
  browserWindow._webview = webview
  browserWindow._destroyed = false

  browserWindow.destroy = function () {
    return panel.close()
  }

  browserWindow.close = function () {
    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      var shouldClose = true
      browserWindow.emit('close', {
        get defaultPrevented() {
          return !shouldClose
        },
        preventDefault: function () {
          shouldClose = false
        },
      })
      if (shouldClose) {
        panel.delegate().utils.parentWindow.endSheet(panel)
      }
      return
    }

    if (!browserWindow.isClosable()) {
      return
    }

    panel.performClose(null)
  }

  function focus(focused) {
    if (!browserWindow.isVisible()) {
      return
    }
    if (focused) {
      NSApplication.sharedApplication().activateIgnoringOtherApps(true)
      panel.makeKeyAndOrderFront(null)
    } else {
      panel.orderBack(null)
      NSApp.mainWindow().makeKeyAndOrderFront(null)
    }
  }

  browserWindow.focus = focus.bind(this, true)
  browserWindow.blur = focus.bind(this, false)

  browserWindow.isFocused = function () {
    return panel.isKeyWindow()
  }

  browserWindow.isDestroyed = function () {
    return browserWindow._destroyed
  }

  browserWindow.show = function () {
    // This method is supposed to put focus on window, however if the app does not
    // have focus then "makeKeyAndOrderFront" will only show the window.
    NSApp.activateIgnoringOtherApps(true)

    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      return panel.delegate().utils.parentWindow.beginSheet_completionHandler(
        panel,
        __mocha__.createBlock_function('v16@?0q8', function () {
          browserWindow.emit('closed')
        })
      )
    }

    return panel.makeKeyAndOrderFront(null)
  }

  browserWindow.showInactive = function () {
    return panel.orderFrontRegardless()
  }

  browserWindow.hide = function () {
    return panel.orderOut(null)
  }

  browserWindow.isVisible = function () {
    return panel.isVisible()
  }

  browserWindow.isModal = function () {
    return false
  }

  browserWindow.maximize = function () {
    if (!browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }
  browserWindow.unmaximize = function () {
    if (browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }

  browserWindow.isMaximized = function () {
    if ((panel.styleMask() & NSResizableWindowMask) !== 0) {
      return panel.isZoomed()
    }
    var rectScreen = NSScreen.mainScreen().visibleFrame()
    var rectWindow = panel.frame()
    return (
      rectScreen.origin.x == rectWindow.origin.x &&
      rectScreen.origin.y == rectWindow.origin.y &&
      rectScreen.size.width == rectWindow.size.width &&
      rectScreen.size.height == rectWindow.size.height
    )
  }

  browserWindow.minimize = function () {
    return panel.miniaturize(null)
  }

  browserWindow.restore = function () {
    return panel.deminiaturize(null)
  }

  browserWindow.isMinimized = function () {
    return panel.isMiniaturized()
  }

  browserWindow.setFullScreen = function (fullscreen) {
    if (fullscreen !== browserWindow.isFullscreen()) {
      panel.toggleFullScreen(null)
    }
  }

  browserWindow.isFullscreen = function () {
    return panel.styleMask() & NSFullScreenWindowMask
  }

  browserWindow.setAspectRatio = function (aspectRatio /* , extraSize */) {
    // Reset the behaviour to default if aspect_ratio is set to 0 or less.
    if (aspectRatio > 0.0) {
      panel.setAspectRatio(NSMakeSize(aspectRatio, 1.0))
    } else {
      panel.setResizeIncrements(NSMakeSize(1.0, 1.0))
    }
  }

  browserWindow.setBounds = function (bounds, animate) {
    if (!bounds) {
      return
    }

    // Do nothing if in fullscreen mode.
    if (browserWindow.isFullscreen()) {
      return
    }

    const newBounds = Object.assign(browserWindow.getBounds(), bounds)

    // TODO: Check size constraints since setFrame does not check it.
    // var size = bounds.size
    // size.SetToMax(GetMinimumSize());
    // gfx::Size max_size = GetMaximumSize();
    // if (!max_size.IsEmpty())
    //   size.SetToMin(max_size);

    var cocoaBounds = NSMakeRect(
      newBounds.x,
      0,
      newBounds.width,
      newBounds.height
    )
    // Flip Y coordinates based on the primary screen
    var screen = NSScreen.screens().firstObject()
    cocoaBounds.origin.y = NSHeight(screen.frame()) - newBounds.y

    panel.setFrame_display_animate(cocoaBounds, true, animate)
  }

  browserWindow.getBounds = function () {
    const cocoaBounds = panel.frame()
    var mainScreenRect = NSScreen.screens().firstObject().frame()
    return {
      x: cocoaBounds.origin.x,
      y: Math.round(NSHeight(mainScreenRect) - cocoaBounds.origin.y),
      width: cocoaBounds.size.width,
      height: cocoaBounds.size.height,
    }
  }

  browserWindow.setContentBounds = function (bounds, animate) {
    // TODO:
    browserWindow.setBounds(bounds, animate)
  }

  browserWindow.getContentBounds = function () {
    // TODO:
    return browserWindow.getBounds()
  }

  browserWindow.setSize = function (width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setBounds({ width: width, height: height }, animate)
  }

  browserWindow.getSize = function () {
    var bounds = browserWindow.getBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setContentSize = function (width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setContentBounds(
      { width: width, height: height },
      animate
    )
  }

  browserWindow.getContentSize = function () {
    var bounds = browserWindow.getContentBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setMinimumSize = function (width, height) {
    const minSize = CGSizeMake(width, height)
    panel.setContentMinSize(minSize)
  }

  browserWindow.getMinimumSize = function () {
    const size = panel.contentMinSize()
    return [size.width, size.height]
  }

  browserWindow.setMaximumSize = function (width, height) {
    const maxSize = CGSizeMake(width, height)
    panel.setContentMaxSize(maxSize)
  }

  browserWindow.getMaximumSize = function () {
    const size = panel.contentMaxSize()
    return [size.width, size.height]
  }

  browserWindow.setResizable = function (resizable) {
    return browserWindow._setStyleMask(resizable, NSResizableWindowMask)
  }

  browserWindow.isResizable = function () {
    return panel.styleMask() & NSResizableWindowMask
  }

  browserWindow.setMovable = function (movable) {
    return panel.setMovable(movable)
  }
  browserWindow.isMovable = function () {
    return panel.isMovable()
  }

  browserWindow.setMinimizable = function (minimizable) {
    return browserWindow._setStyleMask(minimizable, NSMiniaturizableWindowMask)
  }

  browserWindow.isMinimizable = function () {
    return panel.styleMask() & NSMiniaturizableWindowMask
  }

  browserWindow.setMaximizable = function (maximizable) {
    if (panel.standardWindowButton(NSWindowZoomButton)) {
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(maximizable)
    }
  }

  browserWindow.isMaximizable = function () {
    return (
      panel.standardWindowButton(NSWindowZoomButton) &&
      panel.standardWindowButton(NSWindowZoomButton).isEnabled()
    )
  }

  browserWindow.setFullScreenable = function (fullscreenable) {
    browserWindow._setCollectionBehavior(
      fullscreenable,
      NSWindowCollectionBehaviorFullScreenPrimary
    )
    // On EL Capitan this flag is required to hide fullscreen button.
    browserWindow._setCollectionBehavior(
      !fullscreenable,
      NSWindowCollectionBehaviorFullScreenAuxiliary
    )
  }

  browserWindow.isFullScreenable = function () {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorFullScreenPrimary
  }

  browserWindow.setClosable = function (closable) {
    browserWindow._setStyleMask(closable, NSClosableWindowMask)
  }

  browserWindow.isClosable = function () {
    return panel.styleMask() & NSClosableWindowMask
  }

  browserWindow.setAlwaysOnTop = function (top, level, relativeLevel) {
    var windowLevel = NSNormalWindowLevel
    var maxWindowLevel = CGWindowLevelForKey(kCGMaximumWindowLevelKey)
    var minWindowLevel = CGWindowLevelForKey(kCGMinimumWindowLevelKey)

    if (top) {
      if (level === 'normal') {
        windowLevel = NSNormalWindowLevel
      } else if (level === 'torn-off-menu') {
        windowLevel = NSTornOffMenuWindowLevel
      } else if (level === 'modal-panel') {
        windowLevel = NSModalPanelWindowLevel
      } else if (level === 'main-menu') {
        windowLevel = NSMainMenuWindowLevel
      } else if (level === 'status') {
        windowLevel = NSStatusWindowLevel
      } else if (level === 'pop-up-menu') {
        windowLevel = NSPopUpMenuWindowLevel
      } else if (level === 'screen-saver') {
        windowLevel = NSScreenSaverWindowLevel
      } else if (level === 'dock') {
        // Deprecated by macOS, but kept for backwards compatibility
        windowLevel = NSDockWindowLevel
      } else {
        windowLevel = NSFloatingWindowLevel
      }
    }

    var newLevel = windowLevel + (relativeLevel || 0)
    if (newLevel >= minWindowLevel && newLevel <= maxWindowLevel) {
      panel.setLevel(newLevel)
    } else {
      throw new Error(
        'relativeLevel must be between ' +
          minWindowLevel +
          ' and ' +
          maxWindowLevel
      )
    }
  }

  browserWindow.isAlwaysOnTop = function () {
    return panel.level() !== NSNormalWindowLevel
  }

  browserWindow.moveTop = function () {
    return panel.orderFrontRegardless()
  }

  browserWindow.center = function () {
    panel.center()
  }

  browserWindow.setPosition = function (x, y, animate) {
    return browserWindow.setBounds({ x: x, y: y }, animate)
  }

  browserWindow.getPosition = function () {
    var bounds = browserWindow.getBounds()
    return [bounds.x, bounds.y]
  }

  browserWindow.setTitle = function (title) {
    panel.setTitle(title)
  }

  browserWindow.getTitle = function () {
    return String(panel.title())
  }

  var attentionRequestId = 0
  browserWindow.flashFrame = function (flash) {
    if (flash) {
      attentionRequestId = NSApp.requestUserAttention(NSInformationalRequest)
    } else {
      NSApp.cancelUserAttentionRequest(attentionRequestId)
      attentionRequestId = 0
    }
  }

  browserWindow.getNativeWindowHandle = function () {
    return panel
  }

  browserWindow.getNativeWebViewHandle = function () {
    return webview
  }

  browserWindow.loadURL = function (url) {
    // When frameLocation is a file, prefix it with the Sketch Resources path
    if (/^(?!https?|file).*\.html?$/.test(url)) {
      if (typeof __command !== 'undefined' && __command.pluginBundle()) {
        url =
          'file://' + __command.pluginBundle().urlForResourceNamed(url).path()
      }
    }

    if (/^file:\/\/.*\.html?$/.test(url)) {
      // ensure URLs containing spaces are properly handled
      url = NSString.alloc().initWithString(url)
      url = url.stringByAddingPercentEncodingWithAllowedCharacters(
        NSCharacterSet.URLQueryAllowedCharacterSet()
      )
      webview.loadFileURL_allowingReadAccessToURL(
        NSURL.URLWithString(url),
        NSURL.URLWithString('file:///')
      )
      return
    }

    const properURL = NSURL.URLWithString(url)
    const urlRequest = NSURLRequest.requestWithURL(properURL)

    webview.loadRequest(urlRequest)
  }

  browserWindow.reload = function () {
    webview.reload()
  }

  browserWindow.setHasShadow = function (hasShadow) {
    return panel.setHasShadow(hasShadow)
  }

  browserWindow.hasShadow = function () {
    return panel.hasShadow()
  }

  browserWindow.setOpacity = function (opacity) {
    return panel.setAlphaValue(opacity)
  }

  browserWindow.getOpacity = function () {
    return panel.alphaValue()
  }

  browserWindow.setVisibleOnAllWorkspaces = function (visible) {
    return browserWindow._setCollectionBehavior(
      visible,
      NSWindowCollectionBehaviorCanJoinAllSpaces
    )
  }

  browserWindow.isVisibleOnAllWorkspaces = function () {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorCanJoinAllSpaces
  }

  browserWindow.setIgnoreMouseEvents = function (ignore) {
    return panel.setIgnoresMouseEvents(ignore)
  }

  browserWindow.setContentProtection = function (enable) {
    panel.setSharingType(enable ? NSWindowSharingNone : NSWindowSharingReadOnly)
  }

  browserWindow.setAutoHideCursor = function (autoHide) {
    panel.setDisableAutoHideCursor(autoHide)
  }

  browserWindow.setVibrancy = function (type) {
    var effectView = browserWindow._vibrantView

    if (!type) {
      if (effectView == null) {
        return
      }

      effectView.removeFromSuperview()
      panel.setVibrantView(null)
      return
    }

    if (effectView == null) {
      var contentView = panel.contentView()
      effectView = NSVisualEffectView.alloc().initWithFrame(
        contentView.bounds()
      )
      browserWindow._vibrantView = effectView

      effectView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
      effectView.setBlendingMode(NSVisualEffectBlendingModeBehindWindow)
      effectView.setState(NSVisualEffectStateActive)
      effectView.setFrame(contentView.bounds())
      contentView.addSubview_positioned_relativeTo(
        effectView,
        NSWindowBelow,
        null
      )
    }

    var vibrancyType = NSVisualEffectMaterialLight

    if (type === 'appearance-based') {
      vibrancyType = NSVisualEffectMaterialAppearanceBased
    } else if (type === 'light') {
      vibrancyType = NSVisualEffectMaterialLight
    } else if (type === 'dark') {
      vibrancyType = NSVisualEffectMaterialDark
    } else if (type === 'titlebar') {
      vibrancyType = NSVisualEffectMaterialTitlebar
    } else if (type === 'selection') {
      vibrancyType = NSVisualEffectMaterialSelection
    } else if (type === 'menu') {
      vibrancyType = NSVisualEffectMaterialMenu
    } else if (type === 'popover') {
      vibrancyType = NSVisualEffectMaterialPopover
    } else if (type === 'sidebar') {
      vibrancyType = NSVisualEffectMaterialSidebar
    } else if (type === 'medium-light') {
      vibrancyType = NSVisualEffectMaterialMediumLight
    } else if (type === 'ultra-dark') {
      vibrancyType = NSVisualEffectMaterialUltraDark
    }

    effectView.setMaterial(vibrancyType)
  }

  browserWindow._setBackgroundColor = function (colorName) {
    var color = parseHexColor(colorName)
    webview.setValue_forKey(false, 'drawsBackground')
    panel.backgroundColor = color
  }

  browserWindow._invalidate = function () {
    panel.flushWindow()
    panel.contentView().setNeedsDisplay(true)
  }

  browserWindow._setStyleMask = function (on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setStyleMask(panel.styleMask() | flag)
    } else {
      panel.setStyleMask(panel.styleMask() & ~flag)
    }
    // Change style mask will make the zoom button revert to default, probably
    // a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._setCollectionBehavior = function (on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setCollectionBehavior(panel.collectionBehavior() | flag)
    } else {
      panel.setCollectionBehavior(panel.collectionBehavior() & ~flag)
    }
    // Change collectionBehavior will make the zoom button revert to default,
    // probably a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._showWindowButton = function (button) {
    var view = panel.standardWindowButton(button)
    view.superview().addSubview_positioned_relative(view, NSWindowAbove, null)
  }
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  JS_BRIDGE: '__skpm_sketchBridge',
  JS_BRIDGE_RESULT_SUCCESS: '__skpm_sketchBridge_success',
  JS_BRIDGE_RESULT_ERROR: '__skpm_sketchBridge_error',
  START_MOVING_WINDOW: '__skpm_startMovingWindow',
  EXECUTE_JAVASCRIPT: '__skpm_executeJS',
  EXECUTE_JAVASCRIPT_SUCCESS: '__skpm_executeJS_success_',
  EXECUTE_JAVASCRIPT_ERROR: '__skpm_executeJS_error_',
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/dispatch-first-click.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tagsToFocus =
  '["text", "textarea", "date", "datetime-local", "email", "number", "month", "password", "search", "tel", "time", "url", "week" ]'

module.exports = function (webView, event) {
  var point = webView.convertPoint_fromView(event.locationInWindow(), null)
  return (
    'var el = document.elementFromPoint(' + // get the DOM element that match the event
    point.x +
    ', ' +
    point.y +
    '); ' +
    'if (el && el.tagName === "SELECT") {' + // select needs special handling
    '  var event = document.createEvent("MouseEvents");' +
    '  event.initMouseEvent("mousedown", true, true, window);' +
    '  el.dispatchEvent(event);' +
    '} else if (el && ' + // some tags need to be focused instead of clicked
    tagsToFocus +
    '.indexOf(el.type) >= 0 && ' +
    'el.focus' +
    ') {' +
    'el.focus();' + // so focus them
    '} else if (el) {' +
    'el.dispatchEvent(new Event("click", {bubbles: true}))' + // click the others
    '}'
  )
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/execute-javascript.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/execute-javascript.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function (webview, browserWindow) {
  function executeJavaScript(script, userGesture, callback) {
    if (typeof userGesture === 'function') {
      callback = userGesture
      userGesture = false
    }
    var fiber = coscript.createFiber()

    // if the webview is not ready yet, defer the execution until it is
    if (
      webview.navigationDelegate().state &&
      webview.navigationDelegate().state.wasReady == 0
    ) {
      return new Promise(function (resolve, reject) {
        browserWindow.once('ready-to-show', function () {
          executeJavaScript(script, userGesture, callback)
            .then(resolve)
            .catch(reject)
          fiber.cleanup()
        })
      })
    }

    return new Promise(function (resolve, reject) {
      var requestId = Math.random()

      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS + requestId,
        function (res) {
          try {
            if (callback) {
              callback(null, res)
            }
            resolve(res)
          } catch (err) {
            reject(err)
          }
          fiber.cleanup()
        }
      )
      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_ERROR + requestId,
        function (err) {
          try {
            if (callback) {
              callback(err)
              resolve()
            } else {
              reject(err)
            }
          } catch (err2) {
            reject(err2)
          }
          fiber.cleanup()
        }
      )

      webview.evaluateJavaScript_completionHandler(
        module.exports.wrapScript(script, requestId),
        null
      )
    })
  }

  return executeJavaScript
}

module.exports.wrapScript = function (script, requestId) {
  return (
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    '(' +
    requestId +
    ', ' +
    JSON.stringify(script) +
    ')'
  )
}

module.exports.injectScript = function (webView) {
  var source =
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    ' = function(id, script) {' +
    '  try {' +
    '    var res = eval(script);' +
    '    if (res && typeof res.then === "function" && typeof res.catch === "function") {' +
    '      res.then(function (res2) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res2);' +
    '      })' +
    '      .catch(function (err) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '      })' +
    '    } else {' +
    '      window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res);' +
    '    }' +
    '  } catch (err) {' +
    '    window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '  }' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/fitSubview.js":
/*!***************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/fitSubview.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addEdgeConstraint(edge, subview, view, constant) {
  view.addConstraint(
    NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
      subview,
      edge,
      NSLayoutRelationEqual,
      view,
      edge,
      1,
      constant
    )
  )
}
module.exports = function fitSubviewToView(subview, view, constants) {
  constants = constants || []
  subview.setTranslatesAutoresizingMaskIntoConstraints(false)

  addEdgeConstraint(NSLayoutAttributeLeft, subview, view, constants[0] || 0)
  addEdgeConstraint(NSLayoutAttributeTop, subview, view, constants[1] || 0)
  addEdgeConstraint(NSLayoutAttributeRight, subview, view, constants[2] || 0)
  addEdgeConstraint(NSLayoutAttributeBottom, subview, view, constants[3] || 0)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* let's try to match the API from Electron's Browser window
(https://github.com/electron/electron/blob/master/docs/api/browser-window.md) */
var EventEmitter = __webpack_require__(/*! events */ "events")
var buildBrowserAPI = __webpack_require__(/*! ./browser-api */ "./node_modules/sketch-module-web-view/lib/browser-api.js")
var buildWebAPI = __webpack_require__(/*! ./webview-api */ "./node_modules/sketch-module-web-view/lib/webview-api.js")
var fitSubviewToView = __webpack_require__(/*! ./fitSubview */ "./node_modules/sketch-module-web-view/lib/fitSubview.js")
var dispatchFirstClick = __webpack_require__(/*! ./dispatch-first-click */ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js")
var injectClientMessaging = __webpack_require__(/*! ./inject-client-messaging */ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js")
var movableArea = __webpack_require__(/*! ./movable-area */ "./node_modules/sketch-module-web-view/lib/movable-area.js")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")
var setDelegates = __webpack_require__(/*! ./set-delegates */ "./node_modules/sketch-module-web-view/lib/set-delegates.js")

function BrowserWindow(options) {
  options = options || {}

  var identifier = options.identifier || String(NSUUID.UUID().UUIDString())
  var threadDictionary = NSThread.mainThread().threadDictionary()

  var existingBrowserWindow = BrowserWindow.fromId(identifier)

  // if we already have a window opened, reuse it
  if (existingBrowserWindow) {
    return existingBrowserWindow
  }

  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (options.modal && !options.parent) {
    throw new Error('A modal needs to have a parent.')
  }

  // Long-running script
  var fiber = coscript.createFiber()

  // Window size
  var width = options.width || 800
  var height = options.height || 600
  var mainScreenRect = NSScreen.screens().firstObject().frame()
  var cocoaBounds = NSMakeRect(
    typeof options.x !== 'undefined'
      ? options.x
      : Math.round((NSWidth(mainScreenRect) - width) / 2),
    typeof options.y !== 'undefined'
      ? NSHeight(mainScreenRect) - options.y
      : Math.round((NSHeight(mainScreenRect) - height) / 2),
    width,
    height
  )

  if (options.titleBarStyle && options.titleBarStyle !== 'default') {
    options.frame = false
  }

  var useStandardWindow = options.windowType !== 'textured'
  var styleMask = NSTitledWindowMask

  // this is commented out because the toolbar doesn't appear otherwise :thinking-face:
  // if (!useStandardWindow || options.frame === false) {
  //   styleMask = NSFullSizeContentViewWindowMask
  // }
  if (options.minimizable !== false) {
    styleMask |= NSMiniaturizableWindowMask
  }
  if (options.closable !== false) {
    styleMask |= NSClosableWindowMask
  }
  if (options.resizable !== false) {
    styleMask |= NSResizableWindowMask
  }
  if (!useStandardWindow || options.transparent || options.frame === false) {
    styleMask |= NSTexturedBackgroundWindowMask
  }

  var panel = NSPanel.alloc().initWithContentRect_styleMask_backing_defer(
    cocoaBounds,
    styleMask,
    NSBackingStoreBuffered,
    true
  )

  // this would be nice but it's crashing on macOS 11.0
  // panel.releasedWhenClosed = true

  var wkwebviewConfig = WKWebViewConfiguration.alloc().init()
  var webView = WKWebView.alloc().initWithFrame_configuration(
    CGRectMake(0, 0, options.width || 800, options.height || 600),
    wkwebviewConfig
  )
  injectClientMessaging(webView)
  webView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)
  setDelegates(browserWindow, panel, webView, options)

  if (options.windowType === 'desktop') {
    panel.setLevel(kCGDesktopWindowLevel - 1)
    // panel.setCanBecomeKeyWindow(false)
    panel.setCollectionBehavior(
      NSWindowCollectionBehaviorCanJoinAllSpaces |
        NSWindowCollectionBehaviorStationary |
        NSWindowCollectionBehaviorIgnoresCycle
    )
  }

  if (
    typeof options.minWidth !== 'undefined' ||
    typeof options.minHeight !== 'undefined'
  ) {
    browserWindow.setMinimumSize(options.minWidth || 0, options.minHeight || 0)
  }

  if (
    typeof options.maxWidth !== 'undefined' ||
    typeof options.maxHeight !== 'undefined'
  ) {
    browserWindow.setMaximumSize(
      options.maxWidth || 10000,
      options.maxHeight || 10000
    )
  }

  // if (options.focusable === false) {
  //   panel.setCanBecomeKeyWindow(false)
  // }

  if (options.transparent || options.frame === false) {
    panel.titlebarAppearsTransparent = true
    panel.titleVisibility = NSWindowTitleHidden
    panel.setOpaque(0)
    panel.isMovableByWindowBackground = true
    var toolbar2 = NSToolbar.alloc().initWithIdentifier(
      'titlebarStylingToolbar'
    )
    toolbar2.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar2)
  }

  if (options.titleBarStyle === 'hiddenInset') {
    var toolbar = NSToolbar.alloc().initWithIdentifier('titlebarStylingToolbar')
    toolbar.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar)
  }

  if (options.frame === false || !options.useContentSize) {
    browserWindow.setSize(width, height)
  }

  if (options.center) {
    browserWindow.center()
  }

  if (options.alwaysOnTop) {
    browserWindow.setAlwaysOnTop(true)
  }

  if (options.fullscreen) {
    browserWindow.setFullScreen(true)
  }
  browserWindow.setFullScreenable(!!options.fullscreenable)

  let title = options.title
  if (options.frame === false) {
    title = undefined
  } else if (
    typeof title === 'undefined' &&
    typeof __command !== 'undefined' &&
    __command.pluginBundle()
  ) {
    title = __command.pluginBundle().name()
  }

  if (title) {
    browserWindow.setTitle(title)
  }

  var backgroundColor = options.backgroundColor
  if (options.transparent) {
    backgroundColor = NSColor.clearColor()
  }
  if (!backgroundColor && options.frame === false && options.vibrancy) {
    backgroundColor = NSColor.clearColor()
  }

  browserWindow._setBackgroundColor(
    backgroundColor || NSColor.windowBackgroundColor()
  )

  if (options.hasShadow === false) {
    browserWindow.setHasShadow(false)
  }

  if (typeof options.opacity !== 'undefined') {
    browserWindow.setOpacity(options.opacity)
  }

  options.webPreferences = options.webPreferences || {}

  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.devTools !== false,
      'developerExtrasEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.javascript !== false,
      'javaScriptEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(!!options.webPreferences.plugins, 'plugInsEnabled')
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.minimumFontSize || 0,
      'minimumFontSize'
    )

  if (options.webPreferences.zoomFactor) {
    webView.setMagnification(options.webPreferences.zoomFactor)
  }

  var contentView = panel.contentView()

  if (options.frame !== false) {
    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)
  } else {
    // In OSX 10.10, adding subviews to the root view for the NSView hierarchy
    // produces warnings. To eliminate the warnings, we resize the contentView
    // to fill the window, and add subviews to that.
    // http://crbug.com/380412
    contentView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
    fitSubviewToView(contentView, contentView.superview())

    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)

    // The fullscreen button should always be hidden for frameless window.
    if (panel.standardWindowButton(NSWindowFullScreenButton)) {
      panel.standardWindowButton(NSWindowFullScreenButton).setHidden(true)
    }

    if (!options.titleBarStyle || options.titleBarStyle === 'default') {
      // Hide the window buttons.
      panel.standardWindowButton(NSWindowZoomButton).setHidden(true)
      panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true)
      panel.standardWindowButton(NSWindowCloseButton).setHidden(true)

      // Some third-party macOS utilities check the zoom button's enabled state to
      // determine whether to show custom UI on hover, so we disable it here to
      // prevent them from doing so in a frameless app window.
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(false)
    }
  }

  if (options.vibrancy) {
    browserWindow.setVibrancy(options.vibrancy)
  }

  // Set maximizable state last to ensure zoom button does not get reset
  // by calls to other APIs.
  browserWindow.setMaximizable(options.maximizable !== false)

  panel.setHidesOnDeactivate(options.hidesOnDeactivate !== false)

  if (options.remembersWindowFrame) {
    panel.setFrameAutosaveName(identifier)
    panel.setFrameUsingName_force(panel.frameAutosaveName(), false)
  }

  if (options.acceptsFirstMouse) {
    browserWindow.on('focus', function (event) {
      if (event.type() === NSEventTypeLeftMouseDown) {
        browserWindow.webContents
          .executeJavaScript(dispatchFirstClick(webView, event))
          .catch(() => {})
      }
    })
  }

  executeJavaScript.injectScript(webView)
  movableArea.injectScript(webView)
  movableArea.setupHandler(browserWindow)

  if (options.show !== false) {
    browserWindow.show()
  }

  browserWindow.on('closed', function () {
    browserWindow._destroyed = true
    threadDictionary.removeObjectForKey(identifier)
    var observer = threadDictionary[identifier + '.themeObserver']
    if (observer) {
      NSApplication.sharedApplication().removeObserver_forKeyPath(
        observer,
        'effectiveAppearance'
      )
      threadDictionary.removeObjectForKey(identifier + '.themeObserver')
    }
    fiber.cleanup()
  })

  threadDictionary[identifier] = panel

  fiber.onCleanup(function () {
    if (!browserWindow._destroyed) {
      browserWindow.destroy()
    }
  })

  return browserWindow
}

BrowserWindow.fromId = function (identifier) {
  var threadDictionary = NSThread.mainThread().threadDictionary()

  if (threadDictionary[identifier]) {
    return BrowserWindow.fromPanel(threadDictionary[identifier], identifier)
  }

  return undefined
}

BrowserWindow.fromPanel = function (panel, identifier) {
  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (!panel || !panel.contentView) {
    throw new Error('needs to pass an NSPanel')
  }

  var webView = null
  var subviews = panel.contentView().subviews()
  for (var i = 0; i < subviews.length; i += 1) {
    if (
      !webView &&
      !subviews[i].isKindOfClass(WKInspectorWKWebView) &&
      subviews[i].isKindOfClass(WKWebView)
    ) {
      webView = subviews[i]
    }
  }

  if (!webView) {
    throw new Error('The panel needs to have a webview')
  }

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)

  return browserWindow
}

module.exports = BrowserWindow


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/inject-client-messaging.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function (webView) {
  var source =
    'window.originalPostMessage = window.postMessage;' +
    'window.postMessage = function(actionName) {' +
    '  if (!actionName) {' +
    "    throw new Error('missing action name')" +
    '  }' +
    '  var id = String(Math.random()).replace(".", "");' +
    '    var args = [].slice.call(arguments);' +
    '    args.unshift(id);' +
    '  return new Promise(function (resolve, reject) {' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
    '" + id] = resolve;' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_ERROR +
    '" + id] = reject;' +
    '    window.webkit.messageHandlers.' +
    CONSTANTS.JS_BRIDGE +
    '.postMessage(JSON.stringify(args));' +
    '  });' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/movable-area.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/movable-area.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports.injectScript = function (webView) {
  var source =
    '(function () {' +
    "document.addEventListener('mousedown', onMouseDown);" +
    '' +
    'function shouldDrag(target) {' +
    '  if (!target || (target.dataset || {}).appRegion === "no-drag") { return false }' +
    '  if ((target.dataset || {}).appRegion === "drag") { return true }' +
    '  return shouldDrag(target.parentElement)' +
    '};' +
    '' +
    'function onMouseDown(e) {' +
    '  if (e.button !== 0 || !shouldDrag(e.target)) { return }' +
    '  window.postMessage("' +
    CONSTANTS.START_MOVING_WINDOW +
    '");' +
    '};' +
    '})()'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView.configuration().userContentController().addUserScript(script)
}

module.exports.setupHandler = function (browserWindow) {
  var initialMouseLocation = null
  var initialWindowPosition = null
  var interval = null

  function moveWindow() {
    // if the user released the button, stop moving the window
    if (!initialWindowPosition || NSEvent.pressedMouseButtons() !== 1) {
      clearInterval(interval)
      initialMouseLocation = null
      initialWindowPosition = null
      return
    }

    var mouse = NSEvent.mouseLocation()
    browserWindow.setPosition(
      initialWindowPosition.x + (mouse.x - initialMouseLocation.x),
      initialWindowPosition.y + (initialMouseLocation.y - mouse.y), // y is inverted
      false
    )
  }

  browserWindow.webContents.on(CONSTANTS.START_MOVING_WINDOW, function () {
    initialMouseLocation = NSEvent.mouseLocation()
    var position = browserWindow.getPosition()
    initialWindowPosition = {
      x: position[0],
      y: position[1],
    }

    interval = setInterval(moveWindow, 1000 / 60) // 60 fps
  })
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/parseWebArguments.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (webArguments) {
  var args = null
  try {
    args = JSON.parse(webArguments)
  } catch (e) {
    // malformed arguments
  }

  if (
    !args ||
    !args.constructor ||
    args.constructor !== Array ||
    args.length == 0
  ) {
    return null
  }

  return args
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/set-delegates.js":
/*!******************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/set-delegates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var ObjCClass = __webpack_require__(/*! mocha-js-delegate */ "./node_modules/mocha-js-delegate/index.js")
var parseWebArguments = __webpack_require__(/*! ./parseWebArguments */ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js")
var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

// We create one ObjC class for ourselves here
var WindowDelegateClass
var NavigationDelegateClass
var WebScriptHandlerClass
var ThemeObserverClass

// TODO: events
// - 'page-favicon-updated'
// - 'new-window'
// - 'did-navigate-in-page'
// - 'will-prevent-unload'
// - 'crashed'
// - 'unresponsive'
// - 'responsive'
// - 'destroyed'
// - 'before-input-event'
// - 'certificate-error'
// - 'found-in-page'
// - 'media-started-playing'
// - 'media-paused'
// - 'did-change-theme-color'
// - 'update-target-url'
// - 'cursor-changed'
// - 'context-menu'
// - 'select-bluetooth-device'
// - 'paint'
// - 'console-message'

module.exports = function (browserWindow, panel, webview, options) {
  if (!ThemeObserverClass) {
    ThemeObserverClass = new ObjCClass({
      utils: null,

      'observeValueForKeyPath:ofObject:change:context:': function (
        keyPath,
        object,
        change
      ) {
        const newAppearance = change[NSKeyValueChangeNewKey]
        const isDark =
          String(
            newAppearance.bestMatchFromAppearancesWithNames([
              'NSAppearanceNameAqua',
              'NSAppearanceNameDarkAqua',
            ])
          ) === 'NSAppearanceNameDarkAqua'

        this.utils.executeJavaScript(
          "document.body.classList.remove('__skpm-" +
            (isDark ? 'light' : 'dark') +
            "'); document.body.classList.add('__skpm-" +
            (isDark ? 'dark' : 'light') +
            "')"
        )
      },
    })
  }

  if (!WindowDelegateClass) {
    WindowDelegateClass = new ObjCClass({
      utils: null,
      panel: null,

      'windowDidResize:': function () {
        this.utils.emit('resize')
      },

      'windowDidMiniaturize:': function () {
        this.utils.emit('minimize')
      },

      'windowDidDeminiaturize:': function () {
        this.utils.emit('restore')
      },

      'windowDidEnterFullScreen:': function () {
        this.utils.emit('enter-full-screen')
      },

      'windowDidExitFullScreen:': function () {
        this.utils.emit('leave-full-screen')
      },

      'windowDidMove:': function () {
        this.utils.emit('move')
        this.utils.emit('moved')
      },

      'windowShouldClose:': function () {
        var shouldClose = 1
        this.utils.emit('close', {
          get defaultPrevented() {
            return !shouldClose
          },
          preventDefault: function () {
            shouldClose = 0
          },
        })
        return shouldClose
      },

      'windowWillClose:': function () {
        this.utils.emit('closed')
      },

      'windowDidBecomeKey:': function () {
        this.utils.emit('focus', this.panel.currentEvent())
      },

      'windowDidResignKey:': function () {
        this.utils.emit('blur')
      },
    })
  }

  if (!NavigationDelegateClass) {
    NavigationDelegateClass = new ObjCClass({
      state: {
        wasReady: 0,
      },
      utils: null,

      // // Called when the web view begins to receive web content.
      'webView:didCommitNavigation:': function (webView) {
        this.utils.emit('will-navigate', {}, String(String(webView.URL())))
      },

      // // Called when web content begins to load in a web view.
      'webView:didStartProvisionalNavigation:': function () {
        this.utils.emit('did-start-navigation')
        this.utils.emit('did-start-loading')
      },

      // Called when a web view receives a server redirect.
      'webView:didReceiveServerRedirectForProvisionalNavigation:': function () {
        this.utils.emit('did-get-redirect-request')
      },

      // // Called when the web view needs to respond to an authentication challenge.
      // 'webView:didReceiveAuthenticationChallenge:completionHandler:': function(
      //   webView,
      //   challenge,
      //   completionHandler
      // ) {
      //   function callback(username, password) {
      //     completionHandler(
      //       0,
      //       NSURLCredential.credentialWithUser_password_persistence(
      //         username,
      //         password,
      //         1
      //       )
      //     )
      //   }
      //   var protectionSpace = challenge.protectionSpace()
      //   this.utils.emit(
      //     'login',
      //     {},
      //     {
      //       method: String(protectionSpace.authenticationMethod()),
      //       url: 'not implemented', // TODO:
      //       referrer: 'not implemented', // TODO:
      //     },
      //     {
      //       isProxy: !!protectionSpace.isProxy(),
      //       scheme: String(protectionSpace.protocol()),
      //       host: String(protectionSpace.host()),
      //       port: Number(protectionSpace.port()),
      //       realm: String(protectionSpace.realm()),
      //     },
      //     callback
      //   )
      // },

      // Called when an error occurs during navigation.
      // 'webView:didFailNavigation:withError:': function(
      //   webView,
      //   navigation,
      //   error
      // ) {},

      // Called when an error occurs while the web view is loading content.
      'webView:didFailProvisionalNavigation:withError:': function (
        webView,
        navigation,
        error
      ) {
        this.utils.emit('did-fail-load', error)
      },

      // Called when the navigation is complete.
      'webView:didFinishNavigation:': function () {
        if (this.state.wasReady == 0) {
          this.state.wasReady = 1
          this.utils.emitBrowserEvent('ready-to-show')
        }
        this.utils.emit('did-navigate')
        this.utils.emit('did-frame-navigate')
        this.utils.emit('did-stop-loading')
        this.utils.emit('did-finish-load')
        this.utils.emit('did-frame-finish-load')
      },

      // Called when the web view’s web content process is terminated.
      'webViewWebContentProcessDidTerminate:': function () {
        this.utils.emit('dom-ready')
      },

      // Decides whether to allow or cancel a navigation.
      // webView:decidePolicyForNavigationAction:decisionHandler:

      // Decides whether to allow or cancel a navigation after its response is known.
      // webView:decidePolicyForNavigationResponse:decisionHandler:
    })
  }

  if (!WebScriptHandlerClass) {
    WebScriptHandlerClass = new ObjCClass({
      utils: null,
      'userContentController:didReceiveScriptMessage:': function (_, message) {
        var args = this.utils.parseWebArguments(String(message.body()))
        if (!args) {
          return
        }
        if (!args[0] || typeof args[0] !== 'string') {
          return
        }
        args[0] = String(args[0])

        this.utils.emit.apply(this, args)
      },
    })
  }

  var themeObserver = ThemeObserverClass.new({
    utils: {
      executeJavaScript(script) {
        webview.evaluateJavaScript_completionHandler(script, null)
      },
    },
  })

  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    "document.addEventListener('DOMContentLoaded', function() { document.body.classList.add('__skpm-" +
      (typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark()
        ? 'dark'
        : 'light') +
      "') }, false)",
    0,
    true
  )
  webview.configuration().userContentController().addUserScript(script)

  NSApplication.sharedApplication().addObserver_forKeyPath_options_context(
    themeObserver,
    'effectiveAppearance',
    NSKeyValueObservingOptionNew,
    null
  )

  var threadDictionary = NSThread.mainThread().threadDictionary()
  threadDictionary[browserWindow.id + '.themeObserver'] = themeObserver

  var navigationDelegate = NavigationDelegateClass.new({
    utils: {
      setTitle: browserWindow.setTitle.bind(browserWindow),
      emitBrowserEvent() {
        try {
          browserWindow.emit.apply(browserWindow, arguments)
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
      emit() {
        try {
          browserWindow.webContents.emit.apply(
            browserWindow.webContents,
            arguments
          )
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
    },
    state: {
      wasReady: 0,
    },
  })

  webview.setNavigationDelegate(navigationDelegate)

  var webScriptHandler = WebScriptHandlerClass.new({
    utils: {
      emit(id, type) {
        if (!type) {
          webview.evaluateJavaScript_completionHandler(
            CONSTANTS.JS_BRIDGE_RESULT_SUCCESS + id + '()',
            null
          )
          return
        }

        var args = []
        for (var i = 2; i < arguments.length; i += 1) args.push(arguments[i])

        var listeners = browserWindow.webContents.listeners(type)

        Promise.all(
          listeners.map(function (l) {
            return Promise.resolve().then(function () {
              return l.apply(l, args)
            })
          })
        )
          .then(function (res) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
                id +
                '(' +
                JSON.stringify(res) +
                ')',
              null
            )
          })
          .catch(function (err) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_ERROR +
                id +
                '(' +
                JSON.stringify(err) +
                ')',
              null
            )
          })
      },
      parseWebArguments: parseWebArguments,
    },
  })

  webview
    .configuration()
    .userContentController()
    .addScriptMessageHandler_name(webScriptHandler, CONSTANTS.JS_BRIDGE)

  var utils = {
    emit() {
      try {
        browserWindow.emit.apply(browserWindow, arguments)
      } catch (err) {
        if (
          typeof process !== 'undefined' &&
          process.listenerCount &&
          process.listenerCount('uncaughtException')
        ) {
          process.emit('uncaughtException', err, 'uncaughtException')
        } else {
          console.error(err)
          throw err
        }
      }
    },
  }
  if (options.modal) {
    // find the window of the document
    var msdocument
    if (options.parent.type === 'Document') {
      msdocument = options.parent.sketchObject
    } else {
      msdocument = options.parent
    }
    if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate()
    }
    utils.parentWindow = msdocument.windowForSheet()
  }

  var windowDelegate = WindowDelegateClass.new({
    utils: utils,
    panel: panel,
  })

  panel.setDelegate(windowDelegate)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/promise/index.js */ "./node_modules/@skpm/promise/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/webview-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/webview-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "events")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")

// let's try to match https://github.com/electron/electron/blob/master/docs/api/web-contents.md
module.exports = function buildAPI(browserWindow, panel, webview) {
  var webContents = new EventEmitter()

  webContents.loadURL = browserWindow.loadURL

  webContents.loadFile = function (/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.downloadURL = function (/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.getURL = function () {
    return String(webview.URL())
  }

  webContents.getTitle = function () {
    return String(webview.title())
  }

  webContents.isDestroyed = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.focus = browserWindow.focus
  webContents.isFocused = browserWindow.isFocused

  webContents.isLoading = function () {
    return !!webview.loading()
  }

  webContents.isLoadingMainFrame = function () {
    // TODO:
    return !!webview.loading()
  }

  webContents.isWaitingForResponse = function () {
    return !webview.loading()
  }

  webContents.stop = function () {
    webview.stopLoading()
  }
  webContents.reload = function () {
    webview.reload()
  }
  webContents.reloadIgnoringCache = function () {
    webview.reloadFromOrigin()
  }
  webContents.canGoBack = function () {
    return !!webview.canGoBack()
  }
  webContents.canGoForward = function () {
    return !!webview.canGoForward()
  }
  webContents.canGoToOffset = function (offset) {
    return !!webview.backForwardList().itemAtIndex(offset)
  }
  webContents.clearHistory = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.goBack = function () {
    webview.goBack()
  }
  webContents.goForward = function () {
    webview.goForward()
  }
  webContents.goToIndex = function (index) {
    var backForwardList = webview.backForwardList()
    var backList = backForwardList.backList()
    var backListLength = backList.count()
    if (backListLength > index) {
      webview.loadRequest(NSURLRequest.requestWithURL(backList[index]))
      return
    }
    var forwardList = backForwardList.forwardList()
    if (forwardList.count() > index - backListLength) {
      webview.loadRequest(
        NSURLRequest.requestWithURL(forwardList[index - backListLength])
      )
      return
    }
    throw new Error('Cannot go to index ' + index)
  }
  webContents.goToOffset = function (offset) {
    if (!webContents.canGoToOffset(offset)) {
      throw new Error('Cannot go to offset ' + offset)
    }
    webview.loadRequest(
      NSURLRequest.requestWithURL(webview.backForwardList().itemAtIndex(offset))
    )
  }
  webContents.isCrashed = function () {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setUserAgent = function (/* userAgent */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.getUserAgent = function () {
    const userAgent = webview.customUserAgent()
    return userAgent ? String(userAgent) : undefined
  }
  webContents.insertCSS = function (css) {
    var source =
      "var style = document.createElement('style'); style.innerHTML = " +
      css.replace(/"/, '\\"') +
      '; document.head.appendChild(style);'
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview.configuration().userContentController().addUserScript(script)
  }
  webContents.insertJS = function (source) {
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview.configuration().userContentController().addUserScript(script)
  }
  webContents.executeJavaScript = executeJavaScript(webview, browserWindow)
  webContents.setIgnoreMenuShortcuts = function () {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setAudioMuted = function (/* muted */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.isAudioMuted = function () {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setZoomFactor = function (factor) {
    webview.setMagnification_centeredAtPoint(factor, CGPointMake(0, 0))
  }
  webContents.getZoomFactor = function (callback) {
    callback(Number(webview.magnification()))
  }
  webContents.setZoomLevel = function (level) {
    // eslint-disable-next-line no-restricted-properties
    webContents.setZoomFactor(Math.pow(1.2, level))
  }
  webContents.getZoomLevel = function (callback) {
    // eslint-disable-next-line no-restricted-properties
    callback(Math.log(Number(webview.magnification())) / Math.log(1.2))
  }
  webContents.setVisualZoomLevelLimits = function (/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setLayoutZoomLevelLimits = function (/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  // TODO:
  // webContents.undo = function() {
  //   webview.undoManager().undo()
  // }
  // webContents.redo = function() {
  //   webview.undoManager().redo()
  // }
  // webContents.cut = webview.cut
  // webContents.copy = webview.copy
  // webContents.paste = webview.paste
  // webContents.pasteAndMatchStyle = webview.pasteAsRichText
  // webContents.delete = webview.delete
  // webContents.replace = webview.replaceSelectionWithText

  webContents.send = function () {
    const script =
      'window.postMessage({' +
      'isSketchMessage: true,' +
      "origin: '" +
      String(__command.identifier()) +
      "'," +
      'args: ' +
      JSON.stringify([].slice.call(arguments)) +
      '}, "*")'
    webview.evaluateJavaScript_completionHandler(script, null)
  }

  webContents.getNativeWebview = function () {
    return webview
  }

  browserWindow.webContents = webContents
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/remote.js":
/*!*******************************************************!*\
  !*** ./node_modules/sketch-module-web-view/remote.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSThread */
var threadDictionary = NSThread.mainThread().threadDictionary()

module.exports.getWebview = function (identifier) {
  return __webpack_require__(/*! sketch-module-web-view/lib */ "./node_modules/sketch-module-web-view/lib/index.js").fromId(identifier) // eslint-disable-line
}

module.exports.isWebviewPresent = function isWebviewPresent(identifier) {
  return !!threadDictionary[identifier]
}

module.exports.sendToWebview = function sendToWebview(identifier, evalString) {
  if (!module.exports.isWebviewPresent(identifier)) {
    return
  }

  var panel = threadDictionary[identifier]
  var webview = null
  var subviews = panel.contentView().subviews()
  for (var i = 0; i < subviews.length; i += 1) {
    if (
      !webview &&
      !subviews[i].isKindOfClass(WKInspectorWKWebView) &&
      subviews[i].isKindOfClass(WKWebView)
    ) {
      webview = subviews[i]
    }
  }

  if (!webview || !webview.evaluateJavaScript_completionHandler) {
    throw new Error('Webview ' + identifier + ' not found')
  }

  webview.evaluateJavaScript_completionHandler(evalString, null)
}


/***/ }),

/***/ "./resources/webview.html":
/*!********************************!*\
  !*** ./resources/webview.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "file://" + String(context.scriptPath).split(".sketchplugin/Contents/Sketch")[0] + ".sketchplugin/Contents/Resources/_webpack_resources/a216cbe7b021d3bed9d80dc058b2df7f.html";

/***/ }),

/***/ "./resources/webview_about.html":
/*!**************************************!*\
  !*** ./resources/webview_about.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "file://" + String(context.scriptPath).split(".sketchplugin/Contents/Sketch")[0] + ".sketchplugin/Contents/Resources/_webpack_resources/1398198e8a23f1329409b0b29be5f2d9.html";

/***/ }),

/***/ "./src/sketch-commands.js":
/*!********************************!*\
  !*** ./src/sketch-commands.js ***!
  \********************************/
/*! exports provided: default, onDocumentChanged, onShutdown, onRenameLayer, about, outsystemsui_sketch, outsystemsui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDocumentChanged", function() { return onDocumentChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRenameLayer", function() { return onRenameLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsystemsui_sketch", function() { return outsystemsui_sketch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsystemsui", function() { return outsystemsui; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-module-web-view */ "./node_modules/sketch-module-web-view/lib/index.js");
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketch-module-web-view/remote */ "./node_modules/sketch-module-web-view/remote.js");
/* harmony import */ var sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_3__);





var Page = __webpack_require__(/*! sketch/dom */ "sketch/dom").Page;

var Document = __webpack_require__(/*! sketch/dom */ "sketch/dom").Document;

var webviewIdentifier = 'design-to-code.webview';
var webviewABoutIdentifier = 'design-to-code.webview_about'; //settings for webview window

var options = {
  identifier: webviewIdentifier,
  width: 450,
  height: 800,
  show: false,
  resizable: true,
  minimizable: true,
  maximizable: false,
  alwaysOnTop: true,
  titleBarStyle: "hiddenInset"
};
var browserWindow = new sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default.a(options); //exportable functions

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var webContents = browserWindow.webContents; // only show the window when the page has loaded to avoid a white flash

  browserWindow.once('ready-to-show', function () {
    browserWindow.show();
  });
  browserWindow.loadURL(__webpack_require__(/*! ../resources/webview.html */ "./resources/webview.html")); //webview to load

  sketch_ui__WEBPACK_IMPORTED_MODULE_3___default.a.message('Plugin is starting...'); //show a message in sketch giving feedback that plugin is starting
  //when webview finishes loading

  webContents.on('did-finish-load', function () {
    var thisDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

    if (thisDocument === "undefined" || thisDocument === undefined) {
      browserWindow.webContents.executeJavaScript('showDownloadUIKit()').then(function (res) {}).catch(function (error) {
        console.log('There has been a problem with your "did-finish-load" operation from plugin: ' + error.message);
        throw error;
      });
    } else {
      browserWindow.webContents.executeJavaScript('updateStylesOnInit(' + generateArrayColors() + ')').then(function (res) {}).catch(function (error) {
        console.log('There has been a problem with your "did-finish-load" operation from plugin: ' + error.message);
        throw error;
      });
    }
  }); // add a handler for a call from web content's javascript

  webContents.on('updateAllStyles', function (s) {
    browserWindow.webContents.executeJavaScript('updateCSS(' + generateArrayColors() + ')').then(function (res) {}).catch(function (error) {
      console.log('There has been a problem with your "updateAllStyles" function from plugin: ' + error.message);
      throw error;
    });
  });
  webContents.on('externalLinkClicked', function (url) {
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
  });
}); //When Document Changed send alert to webview

function onDocumentChanged(context) {
  browserWindow.webContents.executeJavaScript('documentChanged(' + generateArrayColors() + ')').then(function (res) {}).catch(function (error) {
    console.log('There has been a problem with your "onDocumentChanged" function from plugin: ' + error.message);
    throw error;
  });
} // When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open

function onShutdown() {
  var existingWebview = Object(sketch_module_web_view_remote__WEBPACK_IMPORTED_MODULE_2__["getWebview"])(webviewIdentifier);

  if (existingWebview) {
    existingWebview.close();
  }
} //Get all values from Sketch and return in a string

function generateArrayColors() {
  var thisDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument(); //try{var =}catch{=0;}
  //brand pallete


  try {
    var primary_color = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Brand/Primary/Base")[0].style.fills[0].color);
  } catch (_unused) {
    primary_color = 0;
  }

  try {
    var secondary_color = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Brand/Secondary/Base")[0].style.fills[0].color);
  } catch (_unused2) {
    secondary_color = 0;
  } //semantic pallete


  try {
    var color_info = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Info/Base")[0].style.fills[0].color);
  } catch (_unused3) {
    color_info = 0;
  }

  try {
    var color_info_light = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Info/Light")[0].style.fills[0].color);
  } catch (_unused4) {
    color_info_light = 0;
  }

  try {
    var color_success = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Success/Base")[0].style.fills[0].color);
  } catch (_unused5) {
    color_success = 0;
  }

  try {
    var color_success_light = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Success/Light")[0].style.fills[0].color);
  } catch (_unused6) {
    color_success_light = 0;
  }

  try {
    var color_warning = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Warning/Base")[0].style.fills[0].color);
  } catch (_unused7) {
    color_warning = 0;
  }

  try {
    var color_warning_light = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Warning/Light")[0].style.fills[0].color);
  } catch (_unused8) {
    color_warning_light = 0;
  }

  try {
    var color_error = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Error/Base")[0].style.fills[0].color);
  } catch (_unused9) {
    color_error = 0;
  }

  try {
    var color_error_light = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Error/Light")[0].style.fills[0].color);
  } catch (_unused10) {
    color_error_light = 0;
  } //neutral pallete


  try {
    var color_neutral_0 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 0")[0].style.fills[0].color);
  } catch (_unused11) {
    color_neutral_0 = 0;
  }

  try {
    var color_neutral_1 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 1")[0].style.fills[0].color);
  } catch (_unused12) {
    color_neutral_1 = 0;
  }

  try {
    var color_neutral_2 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 2")[0].style.fills[0].color);
  } catch (_unused13) {
    color_neutral_2 = 0;
  }

  try {
    var color_neutral_3 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 3")[0].style.fills[0].color);
  } catch (_unused14) {
    color_neutral_3 = 0;
  }

  try {
    var color_neutral_4 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 4")[0].style.fills[0].color);
  } catch (_unused15) {
    color_neutral_4 = 0;
  }

  try {
    var color_neutral_5 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 5")[0].style.fills[0].color);
  } catch (_unused16) {
    color_neutral_5 = 0;
  }

  try {
    var color_neutral_6 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 6")[0].style.fills[0].color);
  } catch (_unused17) {
    color_neutral_6 = 0;
  }

  try {
    var color_neutral_7 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 7")[0].style.fills[0].color);
  } catch (_unused18) {
    color_neutral_7 = 0;
  }

  try {
    var color_neutral_8 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 8")[0].style.fills[0].color);
  } catch (_unused19) {
    color_neutral_8 = 0;
  }

  try {
    var color_neutral_9 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 9")[0].style.fills[0].color);
  } catch (_unused20) {
    color_neutral_9 = 0;
  }

  try {
    var color_neutral_10 = trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 10")[0].style.fills[0].color);
  } catch (_unused21) {
    color_neutral_10 = 0;
  } //extended base pallete - red


  try {
    var color_red_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Darkest")[0].style.fills[0].color);
  } catch (_unused22) {
    color_red_darkest = 0;
  }

  try {
    var color_red_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Darker")[0].style.fills[0].color);
  } catch (_unused23) {
    color_red_darker = 0;
  }

  try {
    var color_red_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Dark")[0].style.fills[0].color);
  } catch (_unused24) {
    color_red_dark = 0;
  }

  try {
    var color_red = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Base")[0].style.fills[0].color);
  } catch (_unused25) {
    color_red = 0;
  }

  try {
    var color_red_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Light")[0].style.fills[0].color);
  } catch (_unused26) {
    color_red_light = 0;
  }

  try {
    var color_red_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Lighter")[0].style.fills[0].color);
  } catch (_unused27) {
    color_red_lighter = 0;
  }

  try {
    var color_red_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Lightest")[0].style.fills[0].color);
  } catch (_unused28) {
    color_red_lightest = 0;
  } //extended base pallete - orange


  try {
    var color_orange_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Darkest")[0].style.fills[0].color);
  } catch (_unused29) {
    color_orange_darkest = 0;
  }

  try {
    var color_orange_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Darker")[0].style.fills[0].color);
  } catch (_unused30) {
    color_orange_darker = 0;
  }

  try {
    var color_orange_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Dark")[0].style.fills[0].color);
  } catch (_unused31) {
    color_orange_dark = 0;
  }

  try {
    var color_orange = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Base")[0].style.fills[0].color);
  } catch (_unused32) {
    color_orange = 0;
  }

  try {
    var color_orange_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Light")[0].style.fills[0].color);
  } catch (_unused33) {
    color_orange_light = 0;
  }

  try {
    var color_orange_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Lighter")[0].style.fills[0].color);
  } catch (_unused34) {
    color_orange_lighter = 0;
  }

  try {
    var color_orange_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Lightest")[0].style.fills[0].color);
  } catch (_unused35) {
    color_orange_lightest = 0;
  } //extended base pallete - yellow


  try {
    var color_yellow_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Darkest")[0].style.fills[0].color);
  } catch (_unused36) {
    color_yellow_darkest = 0;
  }

  try {
    var color_yellow_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Darker")[0].style.fills[0].color);
  } catch (_unused37) {
    color_yellow_darker = 0;
  }

  try {
    var color_yellow_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Dark")[0].style.fills[0].color);
  } catch (_unused38) {
    color_yellow_dark = 0;
  }

  try {
    var color_yellow = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Base")[0].style.fills[0].color);
  } catch (_unused39) {
    color_yellow = 0;
  }

  try {
    var color_yellow_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Light")[0].style.fills[0].color);
  } catch (_unused40) {
    color_yellow_light = 0;
  }

  try {
    var color_yellow_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Lighter")[0].style.fills[0].color);
  } catch (_unused41) {
    color_yellow_lighter = 0;
  }

  try {
    var color_yellow_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Lightest")[0].style.fills[0].color);
  } catch (_unused42) {
    color_yellow_lightest = 0;
  } //extended base pallete - lime


  try {
    var color_lime_darkest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Darkest')[0].style.fills[0].color);
  } catch (_unused43) {
    color_lime_darkest = 0;
  }

  try {
    var color_lime_darker = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Darker')[0].style.fills[0].color);
  } catch (_unused44) {
    color_lime_darker = 0;
  }

  try {
    var color_lime_dark = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Dark')[0].style.fills[0].color);
  } catch (_unused45) {
    color_lime_dark = 0;
  }

  try {
    var color_lime = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Base')[0].style.fills[0].color);
  } catch (_unused46) {
    color_lime = 0;
  }

  try {
    var color_lime_light = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Light')[0].style.fills[0].color);
  } catch (_unused47) {
    color_lime_light = 0;
  }

  try {
    var color_lime_lighter = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Lighter')[0].style.fills[0].color);
  } catch (_unused48) {
    color_lime_lighter = 0;
  }

  try {
    var color_lime_lightest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Lightest')[0].style.fills[0].color);
  } catch (_unused49) {
    color_lime_lightest = 0;
  } //extended base pallete - green


  try {
    var color_green_darkest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Darkest')[0].style.fills[0].color);
  } catch (_unused50) {
    color_green_darkest = 0;
  }

  try {
    var color_green_darker = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Darker')[0].style.fills[0].color);
  } catch (_unused51) {
    color_green_darker = 0;
  }

  try {
    var color_green_dark = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Dark')[0].style.fills[0].color);
  } catch (_unused52) {
    color_green_dark = 0;
  }

  try {
    var color_green = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Base')[0].style.fills[0].color);
  } catch (_unused53) {
    color_green = 0;
  }

  try {
    var color_green_light = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Light')[0].style.fills[0].color);
  } catch (_unused54) {
    color_green_light = 0;
  }

  try {
    var color_green_lighter = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Lighter')[0].style.fills[0].color);
  } catch (_unused55) {
    color_green_lighter = 0;
  }

  try {
    var color_green_lightest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Lightest')[0].style.fills[0].color);
  } catch (_unused56) {
    color_green_lightest = 0;
  } //extended base pallete - teal


  try {
    var color_teal_darkest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Darkest')[0].style.fills[0].color);
  } catch (_unused57) {
    color_teal_darkest = 0;
  }

  try {
    var color_teal_darker = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Darker')[0].style.fills[0].color);
  } catch (_unused58) {
    color_teal_darker = 0;
  }

  try {
    var color_teal_dark = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Dark')[0].style.fills[0].color);
  } catch (_unused59) {
    color_teal_dark = 0;
  }

  try {
    var color_teal = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Base')[0].style.fills[0].color);
  } catch (_unused60) {
    color_teal = 0;
  }

  try {
    var color_teal_light = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Light')[0].style.fills[0].color);
  } catch (_unused61) {
    color_teal_light = 0;
  }

  try {
    var color_teal_lighter = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Lighter')[0].style.fills[0].color);
  } catch (_unused62) {
    color_teal_lighter = 0;
  }

  try {
    var color_teal_lightest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Lightest')[0].style.fills[0].color);
  } catch (_unused63) {
    color_teal_lightest = 0;
  } //extended base pallete - cyan


  try {
    var color_cyan_darkest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Darkest')[0].style.fills[0].color);
  } catch (_unused64) {
    color_cyan_darkest = 0;
  }

  try {
    var color_cyan_darker = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Darker')[0].style.fills[0].color);
  } catch (_unused65) {
    color_cyan_darker = 0;
  }

  try {
    var color_cyan_dark = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Dark')[0].style.fills[0].color);
  } catch (_unused66) {
    color_cyan_dark = 0;
  }

  try {
    var color_cyan = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Base')[0].style.fills[0].color);
  } catch (_unused67) {
    color_cyan = 0;
  }

  try {
    var color_cyan_light = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Light')[0].style.fills[0].color);
  } catch (_unused68) {
    color_cyan_light = 0;
  }

  try {
    var color_cyan_lighter = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Lighter')[0].style.fills[0].color);
  } catch (_unused69) {
    color_cyan_lighter = 0;
  }

  try {
    var color_cyan_lightest = trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Lightest')[0].style.fills[0].color);
  } catch (_unused70) {
    color_cyan_lightest = 0;
  } //extended base pallete - blue


  try {
    var color_blue_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Darkest")[0].style.fills[0].color);
  } catch (_unused71) {
    color_blue_darkest = 0;
  }

  try {
    var color_blue_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Darker")[0].style.fills[0].color);
  } catch (_unused72) {
    color_blue_darker = 0;
  }

  try {
    var color_blue_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Dark")[0].style.fills[0].color);
  } catch (_unused73) {
    color_blue_dark = 0;
  }

  try {
    var color_blue = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Base")[0].style.fills[0].color);
  } catch (_unused74) {
    color_blue = 0;
  }

  try {
    var color_blue_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Light")[0].style.fills[0].color);
  } catch (_unused75) {
    color_blue_light = 0;
  }

  try {
    var color_blue_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Lighter")[0].style.fills[0].color);
  } catch (_unused76) {
    color_blue_lighter = 0;
  }

  try {
    var color_blue_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Lightest")[0].style.fills[0].color);
  } catch (_unused77) {
    color_blue_lightest = 0;
  } //extended base pallete - indigo


  try {
    var color_indigo_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Darkest")[0].style.fills[0].color);
  } catch (_unused78) {
    color_indigo_darkest = 0;
  }

  try {
    var color_indigo_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Darker")[0].style.fills[0].color);
  } catch (_unused79) {
    color_indigo_darker = 0;
  }

  try {
    var color_indigo_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Dark")[0].style.fills[0].color);
  } catch (_unused80) {
    color_indigo_dark = 0;
  }

  try {
    var color_indigo = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Base")[0].style.fills[0].color);
  } catch (_unused81) {
    color_indigo = 0;
  }

  try {
    var color_indigo_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Light")[0].style.fills[0].color);
  } catch (_unused82) {
    color_indigo_light = 0;
  }

  try {
    var color_indigo_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Lighter")[0].style.fills[0].color);
  } catch (_unused83) {
    color_indigo_lighter = 0;
  }

  try {
    var color_indigo_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Lightest")[0].style.fills[0].color);
  } catch (_unused84) {
    color_indigo_lightest = 0;
  } //extended base pallete - violet


  try {
    var color_violet_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Darkest")[0].style.fills[0].color);
  } catch (_unused85) {
    color_violet_darkest = 0;
  }

  try {
    var color_violet_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Darker")[0].style.fills[0].color);
  } catch (_unused86) {
    color_violet_darker = 0;
  }

  try {
    var color_violet_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Dark")[0].style.fills[0].color);
  } catch (_unused87) {
    color_violet_dark = 0;
  }

  try {
    var color_violet = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Base")[0].style.fills[0].color);
  } catch (_unused88) {
    color_violet = 0;
  }

  try {
    var color_violet_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Light")[0].style.fills[0].color);
  } catch (_unused89) {
    color_violet_light = 0;
  }

  try {
    var color_violet_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Lighter")[0].style.fills[0].color);
  } catch (_unused90) {
    color_violet_lighter = 0;
  }

  try {
    var color_violet_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Lightest")[0].style.fills[0].color);
  } catch (_unused91) {
    color_violet_lightest = 0;
  } //extended base pallete - grape


  try {
    var color_grape_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Darkest")[0].style.fills[0].color);
  } catch (_unused92) {
    color_grape_darkest = 0;
  }

  try {
    var color_grape_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Darker")[0].style.fills[0].color);
  } catch (_unused93) {
    color_grape_darker = 0;
  }

  try {
    var color_grape_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Dark")[0].style.fills[0].color);
  } catch (_unused94) {
    color_grape_dark = 0;
  }

  try {
    var color_grape = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Base")[0].style.fills[0].color);
  } catch (_unused95) {
    color_grape = 0;
  }

  try {
    var color_grape_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Light")[0].style.fills[0].color);
  } catch (_unused96) {
    color_grape_light = 0;
  }

  try {
    var color_grape_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Lighter")[0].style.fills[0].color);
  } catch (_unused97) {
    color_grape_lighter = 0;
  }

  try {
    var color_grape_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Lightest")[0].style.fills[0].color);
  } catch (_unused98) {
    color_grape_lightest = 0;
  } //extended base pallete - pink


  try {
    var color_pink_darkest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Darkest")[0].style.fills[0].color);
  } catch (_unused99) {
    color_pink_darkest = 0;
  }

  try {
    var color_pink_darker = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Darker")[0].style.fills[0].color);
  } catch (_unused100) {
    color_pink_darker = 0;
  }

  try {
    var color_pink_dark = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Dark")[0].style.fills[0].color);
  } catch (_unused101) {
    color_pink_dark = 0;
  }

  try {
    var color_pink = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Base")[0].style.fills[0].color);
  } catch (_unused102) {
    color_pink = 0;
  }

  try {
    var color_pink_light = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Light")[0].style.fills[0].color);
  } catch (_unused103) {
    color_pink_light = 0;
  }

  try {
    var color_pink_lighter = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Lighter")[0].style.fills[0].color);
  } catch (_unused104) {
    color_pink_lighter = 0;
  }

  try {
    var color_pink_lightest = trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Lightest")[0].style.fills[0].color);
  } catch (_unused105) {
    color_pink_lightest = 0;
  } //shadows/elevation


  var shadow_none = "none";
  var shadow_xs = createAttribute_Shadow('Shadows/XS');
  var shadow_s = createAttribute_Shadow('Shadows/S');
  var shadow_m = createAttribute_Shadow('Shadows/M');
  var shadow_l = createAttribute_Shadow('Shadows/L');
  var shadow_xl = createAttribute_Shadow('Shadows/XL'); //spacing

  var space_none = 0;

  try {
    var space_xs = thisDocument.getLayersNamed("Spacing/XS")[0].frame.width;
  } catch (_unused106) {
    space_xs = 0;
  }

  try {
    var space_s = thisDocument.getLayersNamed("Spacing/S")[0].frame.width;
  } catch (_unused107) {
    space_s = 0;
  }

  try {
    var space_base = thisDocument.getLayersNamed("Spacing/Base")[0].frame.width;
  } catch (_unused108) {
    space_base = 0;
  }

  try {
    var space_m = thisDocument.getLayersNamed("Spacing/M")[0].frame.width;
  } catch (_unused109) {
    space_m = 0;
  }

  try {
    var space_l = thisDocument.getLayersNamed("Spacing/L")[0].frame.width;
  } catch (_unused110) {
    space_l = 0;
  }

  try {
    var space_xl = thisDocument.getLayersNamed("Spacing/XL")[0].frame.width;
  } catch (_unused111) {
    space_xl = 0;
  }

  try {
    var space_xxl = thisDocument.getLayersNamed("Spacing/XXL")[0].frame.width;
  } catch (_unused112) {
    space_xxl = 0;
  } //border sizes


  var border_size_none = 0;

  try {
    var border_size_s = thisDocument.getLayersNamed("Border/S")[0].style.borders[0].thickness;
  } catch (_unused113) {
    border_size_s = 0;
  }

  try {
    var border_size_m = thisDocument.getLayersNamed("Border/M")[0].style.borders[0].thickness;
  } catch (_unused114) {
    border_size_m = 0;
  }

  try {
    var border_size_l = thisDocument.getLayersNamed("Border/L")[0].style.borders[0].thickness;
  } catch (_unused115) {
    border_size_l = 0;
  } //border radius


  var border_radius_none = 0;

  try {
    var border_radius_soft = thisDocument.getLayersNamed("Border/Shapes/Soft")[0].points[0].cornerRadius;
  } catch (_unused116) {
    border_radius_soft = 0;
  }

  try {
    var border_radius_rounded = thisDocument.getLayersNamed("Border/Shapes/Rounded")[0].points[0].cornerRadius;
  } catch (_unused117) {
    border_radius_rounded = 0;
  }

  var border_radius_circle = "100%"; //layout stuff

  try {
    var header_color = trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Header Background")[0].style.fills[0].color);
  } catch (_unused118) {
    header_color = 0;
  }

  try {
    var color_background_body = trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Content Background")[0].style.fills[0].color);
  } catch (_unused119) {
    color_background_body = 0;
  }

  try {
    var color_background_login = trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Login Background")[0].style.fills[0].color);
  } catch (_unused120) {
    color_background_login = 0;
  }

  try {
    var header_size = thisDocument.getLayersNamed("Layout/Navigation/Top Menu/Desktop")[0].frame.height;
  } catch (_unused121) {
    header_size = 0;
  } //typography


  try {
    var font_family = thisDocument.getLayersNamed("Typography | Typeface")[0].style.fontFamily;
  } catch (_unused122) {
    font_family = 0;
  }

  var fontValue = 0;

  try {
    fontValue = thisDocument.getLayersNamed("Typography | FontWeight/Light")[0].style.fontWeight;
  } catch (_unused123) {
    fontValue = 0;
  }

  var font_light = validateFontWeight(fontValue);

  try {
    fontValue = thisDocument.getLayersNamed("Typography | FontWeight/Regular")[0].style.fontWeight;
  } catch (_unused124) {
    fontValue = 0;
  }

  var font_regular = validateFontWeight(fontValue);

  try {
    fontValue = thisDocument.getLayersNamed("Typography | FontWeight/Semibold")[0].style.fontWeight;
  } catch (_unused125) {
    fontValue = 0;
  }

  var font_semi_bold = validateFontWeight(fontValue);

  try {
    fontValue = thisDocument.getLayersNamed("Typography | FontWeight/Bold")[0].style.fontWeight;
  } catch (_unused126) {
    fontValue = 0;
  }

  var font_bold = validateFontWeight(fontValue); //font sizes desktop

  try {
    var font_size_display_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/Display")[0].style.fontSize;
  } catch (_unused127) {
    font_size_display_desktop = 0;
  }

  try {
    var font_size_h1_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H1")[0].style.fontSize;
  } catch (_unused128) {
    font_size_h1_desktop = 0;
  }

  try {
    var font_size_h2_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H2")[0].style.fontSize;
  } catch (_unused129) {
    font_size_h2_desktop = 0;
  }

  try {
    var font_size_h3_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H3")[0].style.fontSize;
  } catch (_unused130) {
    font_size_h3_desktop = 0;
  }

  try {
    var font_size_h4_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H4")[0].style.fontSize;
  } catch (_unused131) {
    font_size_h4_desktop = 0;
  }

  try {
    var font_size_h5_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H5")[0].style.fontSize;
  } catch (_unused132) {
    font_size_h5_desktop = 0;
  }

  try {
    var font_size_h6_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/H6")[0].style.fontSize;
  } catch (_unused133) {
    font_size_h6_desktop = 0;
  }

  try {
    var font_size_base_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body")[0].style.fontSize;
  } catch (_unused134) {
    font_size_base_desktop = 0;
  }

  try {
    var font_size_s_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body S")[0].style.fontSize;
  } catch (_unused135) {
    font_size_s_desktop = 0;
  }

  try {
    var font_size_xs_desktop = thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body XS")[0].style.fontSize;
  } catch (_unused136) {
    font_size_xs_desktop = 0;
  } //font sizes tablet


  try {
    var font_size_display_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/Display")[0].style.fontSize;
  } catch (_unused137) {
    font_size_display_tablet = 0;
  }

  try {
    var font_size_h1_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H1")[0].style.fontSize;
  } catch (_unused138) {
    font_size_h1_tablet = 0;
  }

  try {
    var font_size_h2_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H2")[0].style.fontSize;
  } catch (_unused139) {
    font_size_h2_tablet = 0;
  }

  try {
    var font_size_h3_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H3")[0].style.fontSize;
  } catch (_unused140) {
    font_size_h3_tablet = 0;
  }

  try {
    var font_size_h4_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H4")[0].style.fontSize;
  } catch (_unused141) {
    font_size_h4_tablet = 0;
  }

  try {
    var font_size_h5_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H5")[0].style.fontSize;
  } catch (_unused142) {
    font_size_h5_tablet = 0;
  }

  try {
    var font_size_h6_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/H6")[0].style.fontSize;
  } catch (_unused143) {
    font_size_h6_tablet = 0;
  }

  try {
    var font_size_base_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body")[0].style.fontSize;
  } catch (_unused144) {
    font_size_base_tablet = 0;
  }

  try {
    var font_size_s_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body S")[0].style.fontSize;
  } catch (_unused145) {
    font_size_s_tablet = 0;
  }

  try {
    var font_size_xs_tablet = thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body XS")[0].style.fontSize;
  } catch (_unused146) {
    font_size_xs_tablet = 0;
  } //font sizes phone


  try {
    var font_size_display_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/Display")[0].style.fontSize;
  } catch (_unused147) {
    font_size_display_phone = 0;
  }

  try {
    var font_size_h1_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H1")[0].style.fontSize;
  } catch (_unused148) {
    font_size_h1_phone = 0;
  }

  try {
    var font_size_h2_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H2")[0].style.fontSize;
  } catch (_unused149) {
    font_size_h2_phone = 0;
  }

  try {
    var font_size_h3_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H3")[0].style.fontSize;
  } catch (_unused150) {
    font_size_h3_phone = 0;
  }

  try {
    var font_size_h4_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H4")[0].style.fontSize;
  } catch (_unused151) {
    font_size_h4_phone = 0;
  }

  try {
    var font_size_h5_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H5")[0].style.fontSize;
  } catch (_unused152) {
    font_size_h5_phone = 0;
  }

  try {
    var font_size_h6_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/H6")[0].style.fontSize;
  } catch (_unused153) {
    font_size_h6_phone = 0;
  }

  try {
    var font_size_base_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/Body")[0].style.fontSize;
  } catch (_unused154) {
    font_size_base_phone = 0;
  }

  try {
    var font_size_s_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/Body S")[0].style.fontSize;
  } catch (_unused155) {
    font_size_s_phone = 0;
  }

  try {
    var font_size_xs_phone = thisDocument.getLayersNamed("Typography | Font Size/Phone/Body XS")[0].style.fontSize;
  } catch (_unused156) {
    font_size_xs_phone = 0;
  } //extra stuff that we need to send to plugin


  try {
    var search_input_padding = thisDocument.getLayersNamed("03. Interaction / 11. Search/Desktop")[0].layers[1].frame.x;
  } catch (_unused157) {
    search_input_padding = 0;
  }

  try {
    var alert_border_radius = thisDocument.getLayersNamed("Symbol | Content / Card / Background")[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused158) {
    alert_border_radius = 0;
  }

  try {
    var btn_border_radius = thisDocument.getLayersNamed("07. Widgets/01. Buttons/Primary Button/Default")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused159) {
    btn_border_radius = 0;
  }

  try {
    var form_control_data_input = thisDocument.getLayersNamed("07. Widgets/ 06. Input / Desktop / Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused160) {
    form_control_data_input = 0;
  }

  try {
    var tag_border_radius = thisDocument.getLayersNamed("02. Content / 08. Tag / Default")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused161) {
    tag_border_radius = 0;
  }

  try {
    var search_border_radius = thisDocument.getLayersNamed("03. Interaction / 11. Search/Desktop")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused162) {
    search_border_radius = 0;
  }

  try {
    var choices_item = thisDocument.getLayersNamed("03. Interaction / 07. Dropdown Tags / Isolated/ Active")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused163) {
    choices_item = 0;
  }

  try {
    var choices_inner = thisDocument.getLayersNamed("03. Interaction/06. Dropdown Search/Desktop/Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused164) {
    choices_inner = 0;
  }

  try {
    var checkbox = thisDocument.getLayersNamed("07. Widgets/03. Checkbox / Checkbox / Normal")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused165) {
    checkbox = 0;
  }

  try {
    var button_group = thisDocument.getLayersNamed("07. Widgets/03. Checkbox / Checkbox / Normal")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused166) {
    button_group = 0;
  }

  try {
    var calendar = thisDocument.getLayersNamed("03. Interaction / 04. Date Picker / Pieces / Selected Day")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused167) {
    calendar = 0;
  }

  try {
    var pagination = thisDocument.getLayersNamed("04. Navigation / 05. Pagination / Shape 5+/ Mobile")[0].overrides[2].affectedLayer.points[0].cornerRadius;
  } catch (_unused168) {
    pagination = 0;
  }

  try {
    var dropdown = thisDocument.getLayersNamed("07. Widgets/04. Dropdown/Desktop/Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;
  } catch (_unused169) {
    dropdown = 0;
  } //get colors for login form box


  try {
    var color_background_login_form = trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center")[0].layers[1].layers[0].layers[0].style.fills[0].color);
  } catch (_unused170) {
    color_background_login_form = 0;
  }

  try {
    var color_animated_text_login_form = trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center")[0].layers[1].layers[5].layers[1].style.textColor);
  } catch (_unused171) {
    color_animated_text_login_form = 0;
  }

  try {
    var color_label_login_form = trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Checkbox Text")[0].style.textColor);
  } catch (_unused172) {
    color_label_login_form = 0;
  }

  try {
    var color_link_login_form = trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Link")[0].style.textColor);
  } catch (_unused173) {
    color_link_login_form = 0;
  }

  try {
    var color_title_login_form = trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Title")[0].style.textColor);
  } catch (_unused174) {
    color_title_login_form = 0;
  } //array with all values that will be sent yo webview


  var array_value = {
    primary_color: primary_color,
    secondary_color: secondary_color,
    color_info: color_info,
    color_info_light: color_info_light,
    color_success: color_success,
    color_success_light: color_success_light,
    color_warning: color_warning,
    color_warning_light: color_warning_light,
    color_error: color_error,
    color_error_light: color_error_light,
    color_neutral_0: color_neutral_0,
    color_neutral_1: color_neutral_1,
    color_neutral_2: color_neutral_2,
    color_neutral_3: color_neutral_3,
    color_neutral_4: color_neutral_4,
    color_neutral_5: color_neutral_5,
    color_neutral_6: color_neutral_6,
    color_neutral_7: color_neutral_7,
    color_neutral_8: color_neutral_8,
    color_neutral_9: color_neutral_9,
    color_neutral_10: color_neutral_10,
    color_red_darkest: color_red_darkest,
    color_red_darker: color_red_darker,
    color_red_dark: color_red_dark,
    color_red: color_red,
    color_red_light: color_red_light,
    color_red_lighter: color_red_lighter,
    color_red_lightest: color_red_lightest,
    color_orange_darkest: color_orange_darkest,
    color_orange_darker: color_orange_darker,
    color_orange_dark: color_orange_dark,
    color_orange: color_orange,
    color_orange_light: color_orange_light,
    color_orange_lighter: color_orange_lighter,
    color_orange_lightest: color_orange_lightest,
    color_yellow_darkest: color_yellow_darkest,
    color_yellow_darker: color_yellow_darker,
    color_yellow_dark: color_yellow_dark,
    color_yellow: color_yellow,
    color_yellow_light: color_yellow_light,
    color_yellow_lighter: color_yellow_lighter,
    color_yellow_lightest: color_yellow_lightest,
    color_lime_darkest: color_lime_darkest,
    color_lime_darker: color_lime_darker,
    color_lime_dark: color_lime_dark,
    color_lime: color_lime,
    color_lime_light: color_lime_light,
    color_lime_lighter: color_lime_lighter,
    color_lime_lightest: color_lime_lightest,
    color_green_darkest: color_green_darkest,
    color_green_darker: color_green_darker,
    color_green_dark: color_green_dark,
    color_green: color_green,
    color_green_light: color_green_light,
    color_green_lighter: color_green_lighter,
    color_green_lightest: color_green_lightest,
    color_teal_darkest: color_teal_darkest,
    color_teal_darker: color_teal_darker,
    color_teal_dark: color_teal_dark,
    color_teal: color_teal,
    color_teal_light: color_teal_light,
    color_teal_lighter: color_teal_lighter,
    color_teal_lightest: color_teal_lightest,
    color_cyan_darkest: color_cyan_darkest,
    color_cyan_darker: color_cyan_darker,
    color_cyan_dark: color_cyan_dark,
    color_cyan: color_cyan,
    color_cyan_light: color_cyan_light,
    color_cyan_lighter: color_cyan_lighter,
    color_cyan_lightest: color_cyan_lightest,
    color_blue_darkest: color_blue_darkest,
    color_blue_darker: color_blue_darker,
    color_blue_dark: color_blue_dark,
    color_blue: color_blue,
    color_blue_light: color_blue_light,
    color_blue_lighter: color_blue_lighter,
    color_blue_lightest: color_blue_lightest,
    color_indigo_darkest: color_indigo_darkest,
    color_indigo_darker: color_indigo_darker,
    color_indigo_dark: color_indigo_dark,
    color_indigo: color_indigo,
    color_indigo_light: color_indigo_light,
    color_indigo_lighter: color_indigo_lighter,
    color_indigo_lightest: color_indigo_lightest,
    color_violet_darkest: color_violet_darkest,
    color_violet_darker: color_violet_darker,
    color_violet_dark: color_violet_dark,
    color_violet: color_violet,
    color_violet_light: color_violet_light,
    color_violet_lighter: color_violet_lighter,
    color_violet_lightest: color_violet_lightest,
    color_grape_darkest: color_grape_darkest,
    color_grape_darker: color_grape_darker,
    color_grape_dark: color_grape_dark,
    color_grape: color_grape,
    color_grape_light: color_grape_light,
    color_grape_lighter: color_grape_lighter,
    color_grape_lightest: color_grape_lightest,
    color_pink_darkest: color_pink_darkest,
    color_pink_darker: color_pink_darker,
    color_pink_dark: color_pink_dark,
    color_pink: color_pink,
    color_pink_light: color_pink_light,
    color_pink_lighter: color_pink_lighter,
    color_pink_lightest: color_pink_lightest,
    shadow_none: shadow_none,
    shadow_xs: shadow_xs,
    shadow_s: shadow_s,
    shadow_m: shadow_m,
    shadow_l: shadow_l,
    shadow_xl: shadow_xl,
    space_none: space_none,
    space_s: space_s,
    space_xs: space_xs,
    space_base: space_base,
    space_m: space_m,
    space_l: space_l,
    space_xl: space_xl,
    space_xxl: space_xxl,
    border_size_none: border_size_none,
    border_size_s: border_size_s,
    border_size_m: border_size_m,
    border_size_l: border_size_l,
    border_radius_none: border_radius_none,
    border_radius_soft: border_radius_soft,
    border_radius_rounded: border_radius_rounded,
    border_radius_circle: border_radius_circle,
    header_color: header_color,
    color_background_body: color_background_body,
    header_size: header_size,
    color_background_login: color_background_login,
    font_family: font_family,
    font_light: font_light,
    font_regular: font_regular,
    font_semi_bold: font_semi_bold,
    font_bold: font_bold,
    font_size_display_desktop: font_size_display_desktop,
    font_size_h1_desktop: font_size_h1_desktop,
    font_size_h2_desktop: font_size_h2_desktop,
    font_size_h3_desktop: font_size_h3_desktop,
    font_size_h4_desktop: font_size_h4_desktop,
    font_size_h5_desktop: font_size_h5_desktop,
    font_size_h6_desktop: font_size_h6_desktop,
    font_size_base_desktop: font_size_base_desktop,
    font_size_s_desktop: font_size_s_desktop,
    font_size_xs_desktop: font_size_xs_desktop,
    font_size_display_tablet: font_size_display_tablet,
    font_size_h1_tablet: font_size_h1_tablet,
    font_size_h2_tablet: font_size_h2_tablet,
    font_size_h3_tablet: font_size_h3_tablet,
    font_size_h4_tablet: font_size_h4_tablet,
    font_size_h5_tablet: font_size_h5_tablet,
    font_size_h6_tablet: font_size_h6_tablet,
    font_size_base_tablet: font_size_base_tablet,
    font_size_s_tablet: font_size_s_tablet,
    font_size_xs_tablet: font_size_xs_tablet,
    font_size_display_phone: font_size_display_phone,
    font_size_h1_phone: font_size_h1_phone,
    font_size_h2_phone: font_size_h2_phone,
    font_size_h3_phone: font_size_h3_phone,
    font_size_h4_phone: font_size_h4_phone,
    font_size_h5_phone: font_size_h5_phone,
    font_size_h6_phone: font_size_h6_phone,
    font_size_base_phone: font_size_base_phone,
    font_size_s_phone: font_size_s_phone,
    font_size_xs_phone: font_size_xs_phone,
    search_input_padding: search_input_padding,
    alert_border_radius: alert_border_radius,
    btn_border_radius: btn_border_radius,
    form_control_data_input: form_control_data_input,
    tag_border_radius: tag_border_radius,
    search_border_radius: search_border_radius,
    choices_item: choices_item,
    choices_inner: choices_inner,
    checkbox: checkbox,
    button_group: button_group,
    calendar: calendar,
    pagination: pagination,
    dropdown: dropdown,
    color_background_login_form: color_background_login_form,
    color_animated_text_login_form: color_animated_text_login_form,
    color_label_login_form: color_label_login_form,
    color_link_login_form: color_link_login_form,
    color_title_login_form: color_title_login_form
  };
  return JSON.stringify(array_value); //string to send to webview
} //transform font weight in a valid CSS value


function validateFontWeight(fontWeight) {
  switch (fontWeight) {
    case 1:
      return "100";

    case 2:
      return "200";

    case 3:
      return "300";

    case 4:
      return "400";

    case 5:
      return "500";

    case 6:
      return "600";

    case 7:
      return "700";

    case 8:
      return "800";

    default:
      return "900";
  }
} //remove last two chars from a decimal value (alpha channel from sketch) because we don't need them


function trimHexadecimal(hexadecimal) {
  return hexadecimal.slice(0, -2);
} //create the final shadow attribute. Should receive a shadow array


function createAttribute_Shadow(sharedLayerID) {
  var thisDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

  try {
    var x = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].x;
    var y = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].y;
    var blur = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].blur;
    var color = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].color; //return sharedLayerID;

    return x + "px " + y + "px " + blur + "px " + hexToRGBA(color);
  } catch (error) {
    return "0px 0px 0px rgba(0,0,0,1)";
  }
}
/* Get alpha value from hexadecimal */


var getAlphafloat = function getAlphafloat(a, alpha) {
  if (typeof a !== "undefined") {
    return a / 255;
  }

  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }

  return alpha;
}; //variables for hexToRGBA function


var isValidHex = function isValidHex(hex) {
  return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
};

var getChunksFromString = function getChunksFromString(st, chunkSize) {
  return st.match(new RegExp(".{".concat(chunkSize, "}"), "g"));
};

var convertHexUnitTo256 = function convertHexUnitTo256(hexStr) {
  return parseInt(hexStr.repeat(2 / hexStr.length), 16);
};
/* Convert Hexadecimal to RGBA */


var hexToRGBA = function hexToRGBA(hex, alpha) {
  if (!isValidHex(hex)) {
    throw new Error("Invalid HEX");
  }

  var chunkSize = Math.floor((hex.length - 1) / 3);
  var hexArr = getChunksFromString(hex.slice(1), chunkSize);

  var _hexArr$map = hexArr.map(convertHexUnitTo256),
      _hexArr$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_hexArr$map, 4),
      r = _hexArr$map2[0],
      g = _hexArr$map2[1],
      b = _hexArr$map2[2],
      a = _hexArr$map2[3];

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(getAlphafloat(a, alpha).toFixed(2), ")");
};
/*************************/

/*    Extra Functions    */

/*************************/
//When name of layer changed


function onRenameLayer(context) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_3___default.a.alert("Watch out...", "Changing some layers names can make plugin to stop working.");
} //About

function about(context) {
  //UI.alert("Design to Code - Sketch Plugin", "Plugin developed by Hi Interactive in partnership width OutSystems.");
  var optionsAbout = {
    identifier: webviewABoutIdentifier,
    width: 800,
    height: 600,
    show: false,
    resizable: true,
    minimizable: true,
    maximizable: false,
    alwaysOnTop: true,
    titleBarStyle: "hiddenInset"
  };
  var aboutWindow = new sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default.a(optionsAbout);
  var webContentsAbout = aboutWindow.webContents;
  aboutWindow.once('ready-to-show', function () {
    aboutWindow.show();
  });
  aboutWindow.loadURL(__webpack_require__(/*! ../resources/webview_about.html */ "./resources/webview_about.html")); //webview to load
} //Download OS UI Sketch

function outsystemsui_sketch(context) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_3___default.a.message('Hello Sketch');
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("sketch://add-library?url=https://design-plugins.hi-interactive.pt/sketch.xml"));
} //More about OS UI

function outsystemsui(context) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_3___default.a.message('Hello Sketch');
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://outsystemsui.outsystems.com/OutsystemsUiWebsite/"));
}

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['outsystemsui'] = __skpm_run.bind(this, 'outsystemsui');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['about'] = __skpm_run.bind(this, 'about');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
globalThis['onDocumentChanged'] = __skpm_run.bind(this, 'onDocumentChanged');
globalThis['onRenameLayer'] = __skpm_run.bind(this, 'onRenameLayer')

//# sourceMappingURL=__sketch-commands.js.map
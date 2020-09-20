(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (global) {

    // minimal symbol polyfill for IE11 and others
    if (typeof Symbol !== 'function') {
        var Symbol = function(name) {
            return name;
        }

        Symbol.nonNative = true;
    }

    const STATE_PLAINTEXT = Symbol('plaintext');
    const STATE_HTML      = Symbol('html');
    const STATE_COMMENT   = Symbol('comment');

    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;

    function striptags(html, allowable_tags, tag_replacement) {
        html            = html || '';
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return striptags_internal(html, context);
    }

    function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return function striptags_stream(html) {
            return striptags_internal(html || '', context);
        };
    }

    striptags.init_streaming_mode = init_striptags_stream;

    function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);

        return {
            allowable_tags : allowable_tags,
            tag_replacement: tag_replacement,

            state         : STATE_PLAINTEXT,
            tag_buffer    : '',
            depth         : 0,
            in_quote_char : ''
        };
    }

    function striptags_internal(html, context) {
        let allowable_tags  = context.allowable_tags;
        let tag_replacement = context.tag_replacement;

        let state         = context.state;
        let tag_buffer    = context.tag_buffer;
        let depth         = context.depth;
        let in_quote_char = context.in_quote_char;
        let output        = '';

        for (let idx = 0, length = html.length; idx < length; idx++) {
            let char = html[idx];

            if (state === STATE_PLAINTEXT) {
                switch (char) {
                    case '<':
                        state       = STATE_HTML;
                        tag_buffer += char;
                        break;

                    default:
                        output += char;
                        break;
                }
            }

            else if (state === STATE_HTML) {
                switch (char) {
                    case '<':
                        // ignore '<' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // we're seeing a nested '<'
                        depth++;
                        break;

                    case '>':
                        // ignore '>' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // something like this is happening: '<<>>'
                        if (depth) {
                            depth--;

                            break;
                        }

                        // this is closing the tag in tag_buffer
                        in_quote_char = '';
                        state         = STATE_PLAINTEXT;
                        tag_buffer   += '>';

                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
                            output += tag_buffer;
                        } else {
                            output += tag_replacement;
                        }

                        tag_buffer = '';
                        break;

                    case '"':
                    case '\'':
                        // catch both single and double quotes

                        if (char === in_quote_char) {
                            in_quote_char = '';
                        } else {
                            in_quote_char = in_quote_char || char;
                        }

                        tag_buffer += char;
                        break;

                    case '-':
                        if (tag_buffer === '<!-') {
                            state = STATE_COMMENT;
                        }

                        tag_buffer += char;
                        break;

                    case ' ':
                    case '\n':
                        if (tag_buffer === '<') {
                            state      = STATE_PLAINTEXT;
                            output    += '< ';
                            tag_buffer = '';

                            break;
                        }

                        tag_buffer += char;
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }

            else if (state === STATE_COMMENT) {
                switch (char) {
                    case '>':
                        if (tag_buffer.slice(-2) == '--') {
                            // close the comment
                            state = STATE_PLAINTEXT;
                        }

                        tag_buffer = '';
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }
        }

        // save the context for future iterations
        context.state         = state;
        context.tag_buffer    = tag_buffer;
        context.depth         = depth;
        context.in_quote_char = in_quote_char;

        return output;
    }

    function parse_allowable_tags(allowable_tags) {
        let tag_set = new Set();

        if (typeof allowable_tags === 'string') {
            let match;

            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
                tag_set.add(match[1]);
            }
        }

        else if (!Symbol.nonNative &&
                 typeof allowable_tags[Symbol.iterator] === 'function') {

            tag_set = new Set(allowable_tags);
        }

        else if (typeof allowable_tags.forEach === 'function') {
            // IE11 compatible
            allowable_tags.forEach(tag_set.add, tag_set);
        }

        return tag_set;
    }

    function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);

        return match ? match[1].toLowerCase() : null;
    }

    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function module_factory() { return striptags; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    else {}
}(this));


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  headers: {
    type: "array",
    "default": []
  },
  visibleHeaders: {
    type: "array",
    "default": Array(6).fill(true)
  },
  listType: {
    type: "string",
    "default": "ul"
  },
  title: {
    type: "string",
    "default": "Table of contents"
  },
  collapsible: {
    type: "boolean",
    "default": false
  },
  initialCollapse: {
    type: "boolean",
    "default": false
  },
  titleBg: {
    type: "string"
  },
  titleColor: {
    type: "string"
  },
  contentBg: {
    type: "string"
  },
  contentColor: {
    type: "string"
  },
  contentHoverColor: {
    type: "string"
  },
  contentGap: {
    type: "number"
  },
  contentGapUnit: {
    type: "string",
    "default": "px"
  },
  indent: {
    type: "number"
  },
  displayTitle: {
    type: "boolean",
    "default": true
  },
  titleAlign: {
    type: "string",
    "default": "left"
  },
  titleFontFamily: {
    type: "string"
  },
  titleSizeUnit: {
    type: "string",
    "default": "px"
  },
  titleFontSize: {
    type: "number"
  },
  titleFontWeight: {
    type: "string",
    "default": "normal"
  },
  titleTextTransform: {
    type: "string"
  },
  titleTextDecoration: {
    type: "string"
  },
  titleLetterSpacing: {
    type: "number"
  },
  titleLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  contentFontFamily: {
    type: "string"
  },
  contentSizeUnit: {
    type: "string",
    "default": "px"
  },
  contentFontSize: {
    type: "number"
  },
  contentFontWeight: {
    type: "string",
    "default": "normal"
  },
  contentTextTransform: {
    type: "string"
  },
  contentLetterSpacing: {
    type: "number"
  },
  contentLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  contentLineHeight: {
    type: "number"
  },
  contentLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  isSmooth: {
    type: "boolean",
    "default": true
  },
  seperator: {
    type: "boolean",
    "default": false
  },
  seperatorColor: {
    type: "string",
    "default": "black"
  },
  seperatorSize: {
    type: "number"
  },
  seperatorStyle: {
    type: "string",
    "default": "solid"
  },
  bulletColor: {
    type: "string"
  },
  borderWidth: {
    type: "number"
  },
  borderColor: {
    type: "string",
    "default": "black"
  },
  borderStyle: {
    type: "string",
    "default": "solid"
  },
  titlePaddingTop: {
    type: "number",
    "default": 0
  },
  titlePaddingRight: {
    type: "number",
    "default": 0
  },
  titlePaddingBottom: {
    type: "number",
    "default": 0
  },
  titlePaddingLeft: {
    type: "number",
    "default": 0
  },
  titlePaddingUnit: {
    type: "string",
    "default": "px"
  },
  scrollToTop: {
    type: "boolean",
    "default": false
  },
  arrowHeight: {
    type: "number"
  },
  arrowWidth: {
    type: "number"
  },
  arrowBg: {
    type: "string"
  },
  arrowColor: {
    type: "string"
  },
  hOffset: {
    type: "number"
  },
  vOffset: {
    type: "number"
  },
  blur: {
    type: "number"
  },
  spread: {
    type: "number"
  },
  shadowColor: {
    type: "string",
    "default": "black"
  },
  contentPaddingTop: {
    type: "number",
    "default": 0
  },
  contentPaddingRight: {
    type: "number",
    "default": 0
  },
  contentPaddingBottom: {
    type: "number",
    "default": 0
  },
  contentPaddingLeft: {
    type: "number",
    "default": 0
  },
  contentPaddingUnit: {
    type: "string",
    "default": "px"
  },
  radius: {
    type: "number"
  },
  radiusUnit: {
    type: "string",
    "default": "px"
  },
  listSeperatorWidth: {
    type: "number"
  },
  listSeperatorStyle: {
    type: "string",
    "default": "none"
  },
  listSeperatorColor: {
    type: "string"
  },
  hasUnderline: {
    type: "boolean",
    "default": false
  },
  topSpace: {
    type: "number",
    "default": 25
  },
  contentHeight: {
    type: "number",
    "default": 200
  },
  contentHeightUnit: {
    type: "string",
    "default": "px"
  },
  contentWidth: {
    type: "number",
    "default": 200
  },
  contentWidthUnit: {
    type: "string",
    "default": "px"
  },
  isSticky: {
    type: "boolean",
    "default": false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ALIGNS, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION, BORDER_STYLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGNS", function() { return ALIGNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var ALIGNS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Left"),
  value: "left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center"),
  value: "center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Right"),
  value: "right"
}];
var TEXT_TRANSFORM = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lowercase"),
  value: "lowercase"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Capitalize"),
  value: "capitalize"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lighter"),
  value: "lighter"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Normal"),
  value: "normal"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bold"),
  value: "bold"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Initial"),
  value: "initial"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overline"),
  value: "overline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Through"),
  value: "line-through"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline"),
  value: "underline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline Oveline"),
  value: "underline overline"
}];
var BORDER_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dashed"),
  value: "dashed"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Solid"),
  value: "solid"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dotted"),
  value: "dotted"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Double"),
  value: "double"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Groove"),
  value: "groove"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
  value: "inset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset"),
  value: "outset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ridge"),
  value: "ridge"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list */ "./src/list.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */





/*
 * External dependencies
 */


/**
 * Internal dependencies
 */






function getArrayFromBlocks(headerBlocks) {
  var headerList = [];

  if (headerBlocks.length > 0) {
    headerBlocks.map(function (block) {
      var header = {};

      if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isCoreHeading"])(block) || Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isKadenceHeading"])(block) || Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isQubelyHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.level),
          content: block.attributes.content,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isEbHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.tagName[1]),
          content: block.attributes.content,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isUaHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.level),
          content: block.attributes.headingTitle,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.headingTitle),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.headingTitle))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isQubelyText"])(block)) {
        if (block.attributes.enableTitle) {
          header = {
            level: parseInt(block.attributes.titleLevel),
            content: block.attributes.title,
            text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title),
            link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title))
          };
        }
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isStackableHeader"])(block)) {
        if (block.attributes.showTitle) {
          header = {
            level: parseInt(block.attributes.titleTag[1]),
            content: block.attributes.title,
            text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title),
            link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title))
          };
        }
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isStackableHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.titleTag[1]),
          content: block.attributes.title,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isOtterHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.tag[1]),
          content: block.attributes.content,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isGetwidHeader"])(block)) {
        // Ignore getwid span and p tag
        if (block.attributes.titleTag[0] === "h") {
          header = {
            level: parseInt(block.attributes.titleTag[1]),
            content: block.attributes.content,
            text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content),
            link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.content))
          };
        }
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isGenerateBlocksHeader"])(block)) {
        // Ignore tags other than heading, check empty content
        if (block.attributes.element[0] === "h" && block.attributes.content.length > 0) {
          var content = block.attributes.content.find(function (item) {
            return typeof item === "string";
          });

          if (content) {
            header = {
              level: parseInt(block.attributes.element[1]),
              conetnt: content,
              text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(content),
              link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(content))
            };
          }
        }
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isCreativeBlockHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.tag[1]),
          content: block.attributes.headingText,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.headingText),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.headingText))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isEasyBlocksHeading"])(block)) {
        header = {
          level: 2,
          // Only suports h2
          content: block.attributes.title,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isDiHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.HeadTag[1]),
          content: block.attributes.HeadContent,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.HeadContent),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.HeadContent))
        };
      } else if (Object(_helper__WEBPACK_IMPORTED_MODULE_7__["isElegantHeading"])(block)) {
        header = {
          level: parseInt(block.attributes.headingTag[1]),
          content: block.attributes.title,
          text: striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title),
          link: Object(_helper__WEBPACK_IMPORTED_MODULE_7__["parseTocSlug"])(striptags__WEBPACK_IMPORTED_MODULE_5___default()(block.attributes.title))
        };
      }

      headerList.push(header);
    });
  }

  return headerList;
} // Custom hook for dynamic header list


var useHeader = function useHeader() {
  var allBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select("core/block-editor").getBlocks();
  }); // console.log(allBlocks);

  var headerBlocks = allBlocks.filter(function (block) {
    return _helper__WEBPACK_IMPORTED_MODULE_7__["supportedHeaders"].includes(block.name);
  });
  var headerList = getArrayFromBlocks(headerBlocks);
  return headerList;
};

function Edit(_ref) {
  var isSelected = _ref.isSelected,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var headers = attributes.headers,
      title = attributes.title,
      collapsible = attributes.collapsible,
      listType = attributes.listType,
      titleBg = attributes.titleBg,
      titleColor = attributes.titleColor,
      contentBg = attributes.contentBg,
      contentColor = attributes.contentColor,
      displayTitle = attributes.displayTitle,
      titleAlign = attributes.titleAlign,
      titleFontFamily = attributes.titleFontFamily,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontSize = attributes.titleFontSize,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      seperator = attributes.seperator,
      seperatorSize = attributes.seperatorSize,
      seperatorColor = attributes.seperatorColor,
      seperatorStyle = attributes.seperatorStyle,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      borderStyle = attributes.borderStyle,
      titlePaddingTop = attributes.titlePaddingTop,
      titlePaddingRight = attributes.titlePaddingRight,
      titlePaddingBottom = attributes.titlePaddingBottom,
      titlePaddingLeft = attributes.titlePaddingLeft,
      titlePaddingUnit = attributes.titlePaddingUnit,
      scrollToTop = attributes.scrollToTop,
      arrowHeight = attributes.arrowHeight,
      arrowWidth = attributes.arrowWidth,
      arrowBg = attributes.arrowBg,
      arrowColor = attributes.arrowColor,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      contentPaddingTop = attributes.contentPaddingTop,
      contentPaddingRight = attributes.contentPaddingRight,
      contentPaddingBottom = attributes.contentPaddingBottom,
      contentPaddingLeft = attributes.contentPaddingLeft,
      contentPaddingUnit = attributes.contentPaddingUnit,
      radius = attributes.radius,
      radiusUnit = attributes.radiusUnit;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var headerList = useHeader();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
      setAttributes({
        headers: headerList
      });
    }
  }, [headerList]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var goTop = document.createElement("div");
    goTop.setAttribute("class", "eb-toc-go-top dashicons dashicons-arrow-up-alt2");
    goTop.style.right = "300px";
    document.body.insertBefore(goTop, document.body.lastChild);
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var scrollElement = document.querySelector(".eb-toc-go-top");

    if (scrollToTop) {
      scrollElement.classList.add("show-scroll");
      scrollElement.classList.remove("hide-scroll");
    } else {
      scrollElement.classList.add("hide-scroll");
      scrollElement.classList.remove("show-scroll");
    }
  }, [scrollToTop]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var scrollElement = document.querySelector(".eb-toc-go-top");

    if (scrollElement) {
      if (arrowHeight) scrollElement.style.height = arrowHeight + "px";
      if (arrowWidth) scrollElement.style.width = arrowWidth + "px";
      if (arrowBg) scrollElement.style.background = arrowBg;
      if (arrowColor) scrollElement.style.color = arrowColor;
    }
  }, [arrowHeight, arrowWidth, arrowBg, arrowColor]);
  var wrapperStyle = {
    border: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    background: contentBg,
    boxShadow: "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(shadowColor || "black"),
    borderRadius: radius + radiusUnit
  };
  var titleStyle = {
    display: displayTitle ? "block" : "none",
    fontFamily: titleFontFamily,
    fontSize: titleFontSize + titleSizeUnit,
    fontWeight: titleFontWeight,
    textTransform: titleTextTransform,
    textDecoration: titleTextDecoration,
    letterSpacing: titleLetterSpacing + titleLetterSpacingUnit,
    lineHeight: titleLineHeight + titleLineHeightUnit,
    textAlign: titleAlign,
    cursor: collapsible ? "pointer" : "default",
    color: titleColor,
    background: titleBg,
    borderBottom: seperator ? "".concat(seperatorSize || 0, "px ").concat(seperatorStyle, " ").concat(seperatorColor) : "none",
    padding: "".concat(titlePaddingTop || 0).concat(titlePaddingUnit, " ").concat(titlePaddingRight || 0).concat(titlePaddingUnit, " ").concat(titlePaddingBottom || 0).concat(titlePaddingUnit, " ").concat(titlePaddingLeft || 0).concat(titlePaddingUnit)
  };
  var contentStyle = {
    color: contentColor,
    display: visible ? "block" : "none",
    background: contentBg,
    padding: "".concat(contentPaddingTop || 0).concat(contentPaddingUnit, " ").concat(contentPaddingRight || 0).concat(contentPaddingUnit, " ").concat(contentPaddingBottom || 0).concat(contentPaddingUnit, " ").concat(contentPaddingLeft || 0).concat(contentPaddingUnit)
  };
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    title: "Unordered",
    icon: "editor-ul",
    isActive: listType === "ul",
    onClick: function onClick() {
      return setAttributes({
        listType: "ul"
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    title: "Ordered",
    icon: "editor-ol",
    isActive: listType === "ol",
    onClick: function onClick() {
      return setAttributes({
        listType: "ol"
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToolbarButton"], {
    title: "None",
    icon: "minus",
    isActive: listType === "none",
    onClick: function onClick() {
      return setAttributes({
        listType: "none"
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return collapsible && setVisible(!visible);
    }
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "eb-toc-title",
    style: titleStyle,
    placeholder: "Table of content",
    value: title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  })), headers.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: contentStyle
  }, /*#__PURE__*/React.createElement(_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes
  })) : /*#__PURE__*/React.createElement("p", null, "Add header to generate table of contents"))];
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: supportedHeaders, isCoreHeading, isEbHeading, isKadenceHeading, isUaHeading, isQubelyHeading, isQubelyText, isStackableHeader, isStackableHeading, isOtterHeading, isGetwidHeader, isGenerateBlocksHeader, isCreativeBlockHeading, isEasyBlocksHeading, isDiHeading, isElegantHeading, parseTocSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedHeaders", function() { return supportedHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoreHeading", function() { return isCoreHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEbHeading", function() { return isEbHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKadenceHeading", function() { return isKadenceHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUaHeading", function() { return isUaHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQubelyHeading", function() { return isQubelyHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQubelyText", function() { return isQubelyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStackableHeader", function() { return isStackableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStackableHeading", function() { return isStackableHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOtterHeading", function() { return isOtterHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGetwidHeader", function() { return isGetwidHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGenerateBlocksHeader", function() { return isGenerateBlocksHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreativeBlockHeading", function() { return isCreativeBlockHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasyBlocksHeading", function() { return isEasyBlocksHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiHeading", function() { return isDiHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElegantHeading", function() { return isElegantHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTocSlug", function() { return parseTocSlug; });
var supportedHeaders = ["core/heading", "essential-blocks/heading", "block/heading", "uagb/advanced-heading", "kadence/advancedheading", "qubely/heading", "qubely/text", "ugb/header", "ugb/heading", "themeisle-blocks/advanced-heading", "getwid/advanced-heading", "generateblocks/headline", "creative-blocks/heading", "essential-gutenberg-blocks/title-subtitle", "di-blocks/headline", "elegant-blocks-plugin/heading"];
function isCoreHeading(block) {
  return block.name === "core/heading";
}
function isEbHeading(block) {
  return block.name === "essential-blocks/heading" || block.name === "block/heading";
}
function isKadenceHeading(block) {
  return block.name === "kadence/advancedheading";
}
function isUaHeading(block) {
  return block.name === "uagb/advanced-heading";
}
function isQubelyHeading(block) {
  return block.name === "qubely/heading";
}
function isQubelyText(block) {
  return block.name === "qubely/text";
}
function isStackableHeader(block) {
  return block.name === "ugb/header";
}
function isStackableHeading(block) {
  return block.name === "ugb/heading";
}
function isOtterHeading(block) {
  return block.name === "themeisle-blocks/advanced-heading";
}
function isGetwidHeader(block) {
  return block.name === "getwid/advanced-heading";
}
function isGenerateBlocksHeader(block) {
  return block.name === "generateblocks/headline";
}
function isCreativeBlockHeading(block) {
  return block.name === "creative-blocks/heading";
}
function isEasyBlocksHeading(block) {
  return block.name === "essential-gutenberg-blocks/title-subtitle";
}
function isDiHeading(block) {
  return block.name === "di-blocks/headline";
}
function isElegantHeading(block) {
  return block.name === "elegant-blocks-plugin/heading";
}
function parseTocSlug(slug) {
  if (!slug) {
    return slug;
  }

  var parsedSlug = slug.toString().toLowerCase().replace(/&(amp;)/g, "") // Remove &
  .replace(/&(mdash;)/g, "") // Remove long dash
  .replace(/\u2013|\u2014/g, "") // Remove long dash
  .replace(/[&]nbsp[;]/gi, "-") // Replace inseccable spaces
  .replace(/\s+/g, "-") // Replace spaces with -
  .replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "") // Remove special chars
  .replace(/\-\-+/g, "-") // Replace multiple - with single -
  .replace(/^-+/, "") // Trim - from start of text
  .replace(/-+$/, ""); // Trim - from end of text

  return decodeURI(encodeURIComponent(parsedSlug));
}

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return icon; });
function icon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1_",
    x1: "-6.254",
    x2: "50.81",
    y1: "45.89",
    y2: "11.805",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.7 18.8H55.599999999999994V21.7H17.7z",
    className: "st0"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2_",
    x1: "-13.111",
    x2: "43.953",
    y1: "34.411",
    y2: "0.326",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8.7 18.5H12.299999999999999V22.1H8.7z",
    className: "st1"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3_",
    x1: "-1.304",
    x2: "55.76",
    y1: "54.177",
    y2: "20.092",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.7 30.1H55.599999999999994V33H17.7z",
    className: "st2"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4_",
    x1: "-8.161",
    x2: "48.903",
    y1: "42.698",
    y2: "8.613",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8.7 29.7H12.299999999999999V33.3H8.7z",
    className: "st3"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5_",
    x1: "2.815",
    x2: "59.879",
    y1: "61.073",
    y2: "26.988",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.9 41.3H48.9V44.199999999999996H17.9z",
    className: "st4"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6_",
    x1: "-3.143",
    x2: "53.921",
    y1: "51.098",
    y2: "17.013",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9 41H12.6V44.6H9z",
    className: "st5"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7_",
    x1: "-0.708",
    x2: "56.356",
    y1: "55.175",
    y2: "21.09",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M60.5 68.9H5.6c-3 0-5.5-2.5-5.5-5.5V6.6c0-3 2.5-5.5 5.5-5.5h54.9c3 0 5.5 2.5 5.5 5.5v56.8c0 3-2.5 5.5-5.5 5.5zM5.6 4.1c-1.4 0-2.5 1.1-2.5 2.5v56.8c0 1.4 1.1 2.5 2.5 2.5h54.9c1.4 0 2.5-1.1 2.5-2.5V6.6c0-1.4-1.1-2.5-2.5-2.5H5.6z",
    className: "st6"
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/icon.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/table-of-contents-block", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Table Of Contents", "create-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Example block written with ESNext standard and JSX support – build step required.", "table-of-contents-block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_color_control_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/color-control/index */ "./util/color-control/index.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var visibleHeaders = attributes.visibleHeaders,
      collapsible = attributes.collapsible,
      initialCollapse = attributes.initialCollapse,
      listType = attributes.listType,
      bulletColor = attributes.bulletColor,
      titleBg = attributes.titleBg,
      titleColor = attributes.titleColor,
      contentBg = attributes.contentBg,
      contentColor = attributes.contentColor,
      contentHoverColor = attributes.contentHoverColor,
      indent = attributes.indent,
      contentGap = attributes.contentGap,
      contentGapUnit = attributes.contentGapUnit,
      displayTitle = attributes.displayTitle,
      titleAlign = attributes.titleAlign,
      titleFontFamily = attributes.titleFontFamily,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontSize = attributes.titleFontSize,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      contentFontFamily = attributes.contentFontFamily,
      contentSizeUnit = attributes.contentSizeUnit,
      contentFontSize = attributes.contentFontSize,
      contentFontWeight = attributes.contentFontWeight,
      contentTextTransform = attributes.contentTextTransform,
      contentTextDecoration = attributes.contentTextDecoration,
      contentLetterSpacing = attributes.contentLetterSpacing,
      contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
      contentLineHeight = attributes.contentLineHeight,
      contentLineHeightUnit = attributes.contentLineHeightUnit,
      isSmooth = attributes.isSmooth,
      seperator = attributes.seperator,
      seperatorSize = attributes.seperatorSize,
      seperatorColor = attributes.seperatorColor,
      seperatorStyle = attributes.seperatorStyle,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      borderStyle = attributes.borderStyle,
      titlePaddingTop = attributes.titlePaddingTop,
      titlePaddingRight = attributes.titlePaddingRight,
      titlePaddingBottom = attributes.titlePaddingBottom,
      titlePaddingLeft = attributes.titlePaddingLeft,
      titlePaddingUnit = attributes.titlePaddingUnit,
      scrollToTop = attributes.scrollToTop,
      arrowHeight = attributes.arrowHeight,
      arrowWidth = attributes.arrowWidth,
      arrowBg = attributes.arrowBg,
      arrowColor = attributes.arrowColor,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      contentPaddingTop = attributes.contentPaddingTop,
      contentPaddingRight = attributes.contentPaddingRight,
      contentPaddingBottom = attributes.contentPaddingBottom,
      contentPaddingLeft = attributes.contentPaddingLeft,
      contentPaddingUnit = attributes.contentPaddingUnit,
      radius = attributes.radius,
      radiusUnit = attributes.radiusUnit,
      listSeperatorWidth = attributes.listSeperatorWidth,
      listSeperatorStyle = attributes.listSeperatorStyle,
      listSeperatorColor = attributes.listSeperatorColor,
      hasUnderline = attributes.hasUnderline,
      isSticky = attributes.isSticky,
      contentHeight = attributes.contentHeight,
      contentWidth = attributes.contentWidth,
      topSpace = attributes.topSpace;
  var TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
  var TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
  var TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
  var TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
  var TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
  var TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
  var CONTENT_GAP_STEP = contentGapUnit === "em" ? 0.1 : 1;
  var CONTENT_GAP_MAX = contentGapUnit === "em" ? 10 : 100;
  var CONTENT_SIZE_STEP = contentSizeUnit === "em" ? 0.1 : 1;
  var CONTENT_SIZE_MAX = contentSizeUnit === "em" ? 10 : 100;
  var CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
  var CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;
  var CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
  var CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
    key: "controls"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Visible Headers")
  }, visibleHeaders.map(function (header, index) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: "H".concat(index + 1),
      checked: header,
      onChange: function onChange() {
        return setAttributes({
          visibleHeaders: [].concat(_toConsumableArray(visibleHeaders.slice(0, index)), [!visibleHeaders[index]], _toConsumableArray(visibleHeaders.slice(index + 1)))
        });
      }
    });
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Sticky contents"),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Always show contents on sidebar"),
    checked: isSticky,
    onChange: function onChange() {
      return setAttributes({
        isSticky: !isSticky
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Title"),
    checked: displayTitle,
    onChange: function onChange() {
      return setAttributes({
        displayTitle: !displayTitle
      });
    }
  }), displayTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Collapsible"),
    checked: collapsible,
    onChange: function onChange() {
      return setAttributes({
        collapsible: !collapsible
      });
    }
  }), displayTitle && collapsible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Initial Collapse"),
    checked: initialCollapse,
    onChange: function onChange() {
      return setAttributes({
        initialCollapse: !initialCollapse
      });
    }
  }), displayTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title Seperator"),
    checked: seperator,
    onChange: function onChange() {
      return setAttributes({
        seperator: !seperator
      });
    }
  })), isSticky && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Sticky settings")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Space"),
    value: topSpace,
    onChange: function onChange(topSpace) {
      return setAttributes({
        topSpace: topSpace
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Content Height"),
    value: contentHeight,
    onChange: function onChange(contentHeight) {
      return setAttributes({
        contentHeight: contentHeight
      });
    },
    min: 0,
    max: 1000
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Content Width"),
    value: contentWidth,
    onChange: function onChange(contentWidth) {
      return setAttributes({
        contentWidth: contentWidth
      });
    },
    min: 0,
    max: 1000
  })), displayTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Align"),
    className: "eb-base-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_3__["ALIGNS"].map(function (align, index) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isSmall: true,
      isPrimary: titleAlign === align.value,
      isSecondary: titleAlign !== align.value,
      onClick: function onClick() {
        return setAttributes({
          titleAlign: align.value
        });
      }
    }, align.label);
  }))), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Color"),
    color: titleBg,
    onChange: function onChange(titleBg) {
      return setAttributes({
        titleBg: titleBg
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Color"),
    color: titleColor,
    onChange: function onChange(titleColor) {
      return setAttributes({
        titleColor: titleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        value: titleFontFamily,
        onChange: function onChange(titleFontFamily) {
          return setAttributes({
            titleFontFamily: titleFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: titleSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleSizeUnit) {
          return setAttributes({
            titleSizeUnit: titleSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: titleFontSize,
        onChange: function onChange(titleFontSize) {
          return setAttributes({
            titleFontSize: titleFontSize
          });
        },
        step: TITLE_SIZE_STEP,
        min: 0,
        max: TITLE_SIZE_MAX
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
        value: titleFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["FONT_WEIGHTS"],
        onChange: function onChange(titleFontWeight) {
          return setAttributes({
            titleFontWeight: titleFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
        value: titleTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_TRANSFORM"],
        onChange: function onChange(titleTextTransform) {
          return setAttributes({
            titleTextTransform: titleTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
        value: titleTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DECORATION"],
        onChange: function onChange(titleTextDecoration) {
          return setAttributes({
            titleTextDecoration: titleTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: titleLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLetterSpacingUnit) {
          return setAttributes({
            titleLetterSpacingUnit: titleLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
        value: titleLetterSpacing,
        onChange: function onChange(titleLetterSpacing) {
          return setAttributes({
            titleLetterSpacing: titleLetterSpacing
          });
        },
        min: 0,
        max: TITLE_SPACING_MAX,
        step: TITLE_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: titleLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLineHeightUnit) {
          return setAttributes({
            titleLineHeightUnit: titleLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: titleLineHeight,
        onChange: function onChange(titleLineHeight) {
          return setAttributes({
            titleLineHeight: titleLineHeight
          });
        },
        min: 0,
        max: TITLE_LINE_HEIGHT_MAX,
        step: TITLE_LINE_HEIGHT_STEP
      }));
    }
  })), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: titlePaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "%",
      value: "%"
    }, {
      label: "em",
      value: "em"
    }],
    onClick: function onClick(titlePaddingUnit) {
      return setAttributes({
        titlePaddingUnit: titlePaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: titlePaddingTop,
    right: titlePaddingRight,
    bottom: titlePaddingBottom,
    left: titlePaddingLeft,
    onChange: function onChange(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes({
        titlePaddingTop: top,
        titlePaddingRight: right,
        titlePaddingBottom: bottom,
        titlePaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Content Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Display Underline"),
    checked: hasUnderline,
    onChange: function onChange() {
      return setAttributes({
        hasUnderline: !hasUnderline
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Indent"),
    value: indent,
    onChange: function onChange(indent) {
      return setAttributes({
        indent: indent
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: contentGapUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "%",
      value: "%"
    }, {
      label: "em",
      value: "em"
    }],
    onClick: function onClick(contentGapUnit) {
      return setAttributes({
        contentGapUnit: contentGapUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Content Gap"),
    value: contentGap,
    onChange: function onChange(contentGap) {
      return setAttributes({
        contentGap: contentGap
      });
    },
    min: 0,
    max: CONTENT_GAP_MAX,
    step: CONTENT_GAP_STEP
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Color"),
    color: contentBg,
    onChange: function onChange(contentBg) {
      return setAttributes({
        contentBg: contentBg
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Color"),
    color: contentColor,
    onChange: function onChange(contentColor) {
      return setAttributes({
        contentColor: contentColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hover Color"),
    color: contentHoverColor,
    onChange: function onChange(contentHoverColor) {
      return setAttributes({
        contentHoverColor: contentHoverColor
      });
    }
  }), listType !== "none" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bullet Points Color"),
    color: bulletColor,
    onChange: function onChange(bulletColor) {
      return setAttributes({
        bulletColor: bulletColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        value: contentFontFamily,
        onChange: function onChange(contentFontFamily) {
          return setAttributes({
            contentFontFamily: contentFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: contentSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentSizeUnit) {
          return setAttributes({
            contentSizeUnit: contentSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: contentFontSize,
        onChange: function onChange(contentFontSize) {
          return setAttributes({
            contentFontSize: contentFontSize
          });
        },
        step: CONTENT_SIZE_STEP,
        min: 0,
        max: CONTENT_SIZE_MAX
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
        value: contentFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["FONT_WEIGHTS"],
        onChange: function onChange(contentFontWeight) {
          return setAttributes({
            contentFontWeight: contentFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
        value: contentTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_TRANSFORM"],
        onChange: function onChange(contentTextTransform) {
          return setAttributes({
            contentTextTransform: contentTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
        value: contentTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_3__["TEXT_DECORATION"],
        onChange: function onChange(contentTextDecoration) {
          return setAttributes({
            contentTextDecoration: contentTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: contentLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLetterSpacingUnit) {
          return setAttributes({
            contentLetterSpacingUnit: contentLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
        value: contentLetterSpacing,
        onChange: function onChange(contentLetterSpacing) {
          return setAttributes({
            contentLetterSpacing: contentLetterSpacing
          });
        },
        min: 0,
        max: CONTENT_SPACING_MAX,
        step: CONTENT_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: contentLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLineHeightUnit) {
          return setAttributes({
            contentLineHeightUnit: contentLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: contentLineHeight,
        onChange: function onChange(contentLineHeight) {
          return setAttributes({
            contentLineHeight: contentLineHeight
          });
        },
        min: 0,
        max: CONTENT_LINE_HEIGHT_MAX,
        step: CONTENT_LINE_HEIGHT_STEP
      }));
    }
  })), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: contentPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "%",
      value: "%"
    }, {
      label: "em",
      value: "em"
    }],
    onClick: function onClick(contentPaddingUnit) {
      return setAttributes({
        contentPaddingUnit: contentPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: contentPaddingTop,
    right: contentPaddingRight,
    bottom: contentPaddingBottom,
    left: contentPaddingLeft,
    onChange: function onChange(_ref5) {
      var top = _ref5.top,
          right = _ref5.right,
          bottom = _ref5.bottom,
          left = _ref5.left;
      return setAttributes({
        contentPaddingTop: top,
        contentPaddingRight: right,
        contentPaddingBottom: bottom,
        contentPaddingLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Style"),
    value: listSeperatorStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_3__["BORDER_STYLES"],
    onChange: function onChange(listSeperatorStyle) {
      return setAttributes({
        listSeperatorStyle: listSeperatorStyle
      });
    }
  }), listSeperatorStyle !== "none" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Color"),
    color: listSeperatorColor,
    onChange: function onChange(listSeperatorColor) {
      return setAttributes({
        listSeperatorColor: listSeperatorColor
      });
    }
  }), listSeperatorStyle !== "none" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Size"),
    value: listSeperatorWidth,
    onChange: function onChange(listSeperatorWidth) {
      return setAttributes({
        listSeperatorWidth: listSeperatorWidth
      });
    },
    min: 0,
    max: 100
  })), seperator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Size"),
    value: seperatorSize,
    onChange: function onChange(seperatorSize) {
      return setAttributes({
        seperatorSize: seperatorSize
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Color"),
    color: seperatorColor,
    onChange: function onChange(seperatorColor) {
      return setAttributes({
        seperatorColor: seperatorColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Seperator Style"),
    value: seperatorStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_3__["BORDER_STYLES"],
    onChange: function onChange(seperatorStyle) {
      return setAttributes({
        seperatorStyle: seperatorStyle
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Smooth Scroll"),
    checked: isSmooth,
    onChange: function onChange() {
      return setAttributes({
        isSmooth: !isSmooth
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll To Top"),
    checked: scrollToTop,
    onChange: function onChange() {
      return setAttributes({
        scrollToTop: !scrollToTop
      });
    }
  }), scrollToTop && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Arrow Height"),
    value: arrowHeight,
    onChange: function onChange(arrowHeight) {
      return setAttributes({
        arrowHeight: arrowHeight
      });
    },
    min: 0,
    max: 100
  }), scrollToTop && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Arrow Width"),
    value: arrowWidth,
    onChange: function onChange(arrowWidth) {
      return setAttributes({
        arrowWidth: arrowWidth
      });
    },
    min: 0,
    max: 100
  }), scrollToTop && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Arrow Background"),
    color: arrowBg,
    onChange: function onChange(arrowBg) {
      return setAttributes({
        arrowBg: arrowBg
      });
    }
  }), scrollToTop && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Arrow Color"),
    color: arrowColor,
    onChange: function onChange(arrowColor) {
      return setAttributes({
        arrowColor: arrowColor
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Width"),
    value: borderWidth,
    onChange: function onChange(borderWidth) {
      return setAttributes({
        borderWidth: borderWidth
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Style"),
    value: borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_3__["BORDER_STYLES"],
    onChange: function onChange(borderStyle) {
      return setAttributes({
        borderStyle: borderStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: radiusUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(radiusUnit) {
      return setAttributes({
        radiusUnit: radiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius"),
    value: radius,
    onChange: function onChange(radius) {
      return setAttributes({
        radius: radius
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color"),
    color: shadowColor,
    onChange: function onChange(shadowColor) {
      return setAttributes({
        shadowColor: shadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
    value: hOffset,
    onChange: function onChange(hOffset) {
      return setAttributes({
        hOffset: hOffset
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
    value: vOffset,
    onChange: function onChange(vOffset) {
      return setAttributes({
        vOffset: vOffset
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Blur"),
    value: blur,
    onChange: function onChange(blur) {
      return setAttributes({
        blur: blur
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spread"),
    value: spread,
    onChange: function onChange(spread) {
      return setAttributes({
        spread: spread
      });
    },
    min: 0,
    max: 30
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          visibleHeaders = _this$props$attribute.visibleHeaders,
          headers = _this$props$attribute.headers,
          listType = _this$props$attribute.listType,
          listColor = _this$props$attribute.listColor,
          contentColor = _this$props$attribute.contentColor,
          indent = _this$props$attribute.indent,
          contentGap = _this$props$attribute.contentGap,
          contentGapUnit = _this$props$attribute.contentGapUnit,
          contentFontFamily = _this$props$attribute.contentFontFamily,
          contentSizeUnit = _this$props$attribute.contentSizeUnit,
          contentFontSize = _this$props$attribute.contentFontSize,
          contentFontWeight = _this$props$attribute.contentFontWeight,
          contentTextTransform = _this$props$attribute.contentTextTransform,
          contentLetterSpacing = _this$props$attribute.contentLetterSpacing,
          contentLetterSpacingUnit = _this$props$attribute.contentLetterSpacingUnit,
          contentLineHeight = _this$props$attribute.contentLineHeight,
          contentLineHeightUnit = _this$props$attribute.contentLineHeightUnit,
          listSeperatorWidth = _this$props$attribute.listSeperatorWidth,
          listSeperatorStyle = _this$props$attribute.listSeperatorStyle,
          listSeperatorColor = _this$props$attribute.listSeperatorColor,
          hasUnderline = _this$props$attribute.hasUnderline; // Style objects

      var listStyle = {
        listStyle: listType === "none" && "none",
        color: listType !== "none" && listColor,
        marginLeft: indent
      };
      var listItemStyle = {
        fontFamily: contentFontFamily,
        fontSize: contentFontSize + contentSizeUnit,
        fontWeight: contentFontWeight,
        letterSpacing: contentLetterSpacing + contentLetterSpacingUnit,
        lineHeight: contentLineHeight + contentLineHeightUnit,
        textTransform: contentTextTransform
      };
      var linkStyle = {
        color: contentColor,
        textDecoration: hasUnderline ? "underline" : "none"
      };
      var ListTag = listType === "ol" ? "ol" : "ul";

      var makeHeaderArray = function makeHeaderArray(origHeaders) {
        var arrays = [];
        origHeaders.filter(function (header) {
          return visibleHeaders[header.level - 1];
        }).forEach(function (header) {
          var last = arrays.length - 1;

          if (arrays.length === 0 || arrays[last][0].level < header.level) {
            arrays.push([header]);
          } else if (arrays[last][0].level === header.level) {
            arrays[last].push(header);
          } else {
            while (arrays[last][0].level > header.level) {
              if (arrays.length > 1) {
                arrays[arrays.length - 2].push(arrays.pop());
                last = arrays.length - 1;
              } else break;
            }

            if (arrays[last][0].level === header.level) {
              arrays[last].push(header);
            }
          }
        });

        while (arrays.length > 1 && arrays[arrays.length - 1][0].level > arrays[arrays.length - 2][0].level) {
          arrays[arrays.length - 2].push(arrays.pop());
        }

        return arrays[0];
      };

      var filterArray = function filterArray(origHeaders) {
        var arrays = [];
        headers.forEach(function (heading, key) {
          if (visibleHeaders[heading.level - 1]) {
            arrays.push(heading);
          }
        });
        return makeHeaderArray(arrays);
      };

      var counter = 0;
      var ul_counter = 0;

      var parseList = function parseList(list) {
        var items = [];
        list.forEach(function (item) {
          if (Array.isArray(item)) {
            items.push(parseList(item));
          } else {
            items.push( /*#__PURE__*/React.createElement("li", {
              key: counter,
              style: _objectSpread(_objectSpread({}, listItemStyle), {}, {
                paddingTop: counter > 0 && contentGap / 2 + contentGapUnit,
                paddingBottom: counter < list.length && contentGap / 2 + contentGapUnit,
                borderBottom: counter < list.length && "".concat(listSeperatorWidth, "px ").concat(listSeperatorStyle, " ").concat(listSeperatorColor)
              })
            }, /*#__PURE__*/React.createElement("a", {
              href: "#".concat(item.link),
              dangerouslySetInnerHTML: {
                __html: item.text
              },
              style: linkStyle
            })));
            counter++;
          }
        });
        ul_counter++;
        return /*#__PURE__*/React.createElement(ListTag, {
          key: counter + "-" + ul_counter,
          className: "eb-toc__list",
          style: listStyle
        }, items);
      };

      if (visibleHeaders != "undefined" && headers && headers.length > 0 && headers.filter(function (header) {
        return visibleHeaders[header.level - 1];
      }).length > 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "eb-toc__list-wrap"
        }, parseList(filterArray(headers)));
      } else {
        return /*#__PURE__*/React.createElement("p", {
          className: "eb_table-of-contents-placeholder"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Add a header to begin generating the table of contents"));
      }
    }
  }]);

  return List;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/*
 * WordPress dependencies
 */

/*
 * Internal dependencies
 */


function save(_ref) {
  var attributes = _ref.attributes;
  var displayTitle = attributes.displayTitle,
      title = attributes.title,
      titleFontFamily = attributes.titleFontFamily,
      titleFontSize = attributes.titleFontSize,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      titleAlign = attributes.titleAlign,
      titleColor = attributes.titleColor,
      titleBg = attributes.titleBg,
      contentColor = attributes.contentColor,
      contentHoverColor = attributes.contentHoverColor,
      contentBg = attributes.contentBg,
      collapsible = attributes.collapsible,
      initialCollapse = attributes.initialCollapse,
      seperator = attributes.seperator,
      seperatorSize = attributes.seperatorSize,
      seperatorStyle = attributes.seperatorStyle,
      seperatorColor = attributes.seperatorColor,
      visibleHeaders = attributes.visibleHeaders,
      headers = attributes.headers,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      borderStyle = attributes.borderStyle,
      titlePaddingTop = attributes.titlePaddingTop,
      titlePaddingRight = attributes.titlePaddingRight,
      titlePaddingBottom = attributes.titlePaddingBottom,
      titlePaddingLeft = attributes.titlePaddingLeft,
      titlePaddingUnit = attributes.titlePaddingUnit,
      isSmooth = attributes.isSmooth,
      scrollToTop = attributes.scrollToTop,
      arrowHeight = attributes.arrowHeight,
      arrowWidth = attributes.arrowWidth,
      arrowBg = attributes.arrowBg,
      arrowColor = attributes.arrowColor,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      contentPaddingTop = attributes.contentPaddingTop,
      contentPaddingRight = attributes.contentPaddingRight,
      contentPaddingBottom = attributes.contentPaddingBottom,
      contentPaddingLeft = attributes.contentPaddingLeft,
      contentPaddingUnit = attributes.contentPaddingUnit,
      radius = attributes.radius,
      radiusUnit = attributes.radiusUnit,
      topSpace = attributes.topSpace,
      contentHeight = attributes.contentHeight,
      contentWidth = attributes.contentWidth,
      contentWidthUnit = attributes.contentWidthUnit,
      isSticky = attributes.isSticky;
  var wrapperStyle = {
    border: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(borderColor),
    background: !isSticky ? contentBg : undefined,
    boxShadow: "".concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(shadowColor || "black"),
    borderRadius: radius + radiusUnit,
    position: isSticky ? "fixed" : undefined,
    top: isSticky ? topSpace + "%" : undefined,
    width: isSticky ? contentWidth + contentWidthUnit : undefined,
    zIndex: isSticky ? 999 : undefined
  };
  var titleStyle = {
    display: displayTitle ? "block" : "none",
    fontFamily: titleFontFamily,
    fontSize: titleFontSize + titleSizeUnit,
    fontWeight: titleFontWeight,
    textTransform: titleTextTransform,
    textDecoration: titleTextDecoration,
    letterSpacing: titleLetterSpacing + titleLetterSpacingUnit,
    lineHeight: titleLineHeight + titleLineHeightUnit,
    textAlign: titleAlign,
    cursor: collapsible ? "pointer" : "default",
    color: titleColor,
    background: titleBg,
    borderBottom: seperator ? "".concat(seperatorSize || 0, "px ").concat(seperatorStyle, " ").concat(seperatorColor) : "none",
    padding: "".concat(titlePaddingTop || 0).concat(titlePaddingUnit, " ").concat(titlePaddingRight || 0).concat(titlePaddingUnit, " ").concat(titlePaddingBottom || 0).concat(titlePaddingUnit, " ").concat(titlePaddingLeft || 0).concat(titlePaddingUnit)
  };
  var contentStyle = {
    color: contentColor,
    background: contentBg,
    padding: "".concat(contentPaddingTop || 0).concat(contentPaddingUnit, " ").concat(contentPaddingRight || 0).concat(contentPaddingUnit, " ").concat(contentPaddingBottom || 0).concat(contentPaddingUnit, " ").concat(contentPaddingLeft || 0).concat(contentPaddingUnit),
    overflow: isSticky ? "scroll" : undefined,
    height: isSticky ? contentHeight : undefined
  };

  if (headers.length === 0) {
    return /*#__PURE__*/React.createElement("div", null);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "eb-toc-container",
    style: wrapperStyle,
    "data-collapsible": collapsible,
    "data-initial-collapse": initialCollapse,
    "data-scroll-top": scrollToTop,
    "data-arrow-height": arrowHeight,
    "data-arrow-width": arrowWidth,
    "data-arrow-bg": arrowBg,
    "data-arrow-color": arrowColor,
    "data-sticky": isSticky,
    "data-text-color": contentColor,
    "data-hover-color": contentHoverColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-toc-header"
  }, isSticky && /*#__PURE__*/React.createElement("span", {
    className: "eb-toc-close"
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
    tagName: "div",
    className: "eb-toc-title",
    value: title,
    style: titleStyle
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-toc-wrapper",
    style: contentStyle,
    "data-headers": JSON.stringify(headers),
    "data-visible": JSON.stringify(visibleHeaders),
    "data-smooth": isSmooth
  }, /*#__PURE__*/React.createElement(_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: attributes
  })), isSticky && /*#__PURE__*/React.createElement("button", {
    className: "eb-toc-button"
  }, displayTitle && title ? title : "Table of Contents"));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32,
          width: 32,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/React.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/React.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/React.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/React.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/React.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return DimensionsControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['react-compound-slider'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1 = warning;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning$2 = emptyFunction_1;

{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
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

  warning$2 = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1$1 = warning$2;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

{
  var invariant$1 = invariant_1;
  var warning$3 = warning_1$1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
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
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$3(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$3(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';









var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1$1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
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
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
      warning_1$1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      warning_1$1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1$1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var ascending = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

var bisector = function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
};

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

var ticks = function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
};

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function discrete() {
  var x0 = 0;
  var x1 = 1;

  var domain = [0.5];
  var range = [0, 1];

  var n = 1;

  function scale(x) {
    return range[bisectRight(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;

    domain = new Array(n);

    while (++i < n) {
      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    }

    return scale;
  }

  scale.domain = function (val) {
    if (!val) {
      return [x0, x1];
    }

    x0 = +val[0];
    x1 = +val[1];

    return rescale();
  };

  scale.range = function (val) {
    if (!val) {
      return range.slice();
    }

    range = val.slice();
    n = range.length - 1;

    return rescale();
  };

  return scale;
}

function interpolateValue(a, b) {
  return a = +a, b -= a, function i(t) {
    return a + b * t;
  };
}

function deinterpolateValue(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : function () {
    return b;
  }; // eslint-disable-line
}

function initialize(domain, range) {
  var d0 = domain[0];
  var d1 = domain[1];

  var r0 = range[0];
  var r1 = range[1];

  if (d1 < d0) {
    d0 = deinterpolateValue(d1, d0);
    r0 = interpolateValue(r1, r0);
  } else {
    d0 = deinterpolateValue(d0, d1);
    r0 = interpolateValue(r0, r1);
  }

  return function (x) {
    return r0(d0(x));
  };
}

var coerceNumeric = function coerceNumeric(d) {
  return +d;
};

function linear() {
  var domain = [0, 1];
  var range = [0, 1];

  var output = void 0;

  function rescale() {
    output = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = initialize(domain, range)))(+x);
  }

  scale.domain = function (val) {
    if (!val) {
      return domain.slice();
    }

    domain = val.map(coerceNumeric);

    return rescale();
  };

  scale.range = function (val) {
    if (!val) {
      return range.slice();
    }

    range = val.map(coerceNumeric);

    return rescale();
  };

  scale.ticks = function (count) {
    var d = domain;

    return ticks(d[0], d[d.length - 1], count ? 10 : count);
  };

  return rescale();
}

var callAll = function callAll() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(undefined, args);
    });
  };
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Rail = function (_Component) {
  inherits(Rail, _Component);

  function Rail() {
    var _temp, _this, _ret;

    classCallCheck(this, Rail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getRailProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return babelHelpers.extends({}, props, {
        onMouseDown: callAll(props.onMouseDown, emitMouse),
        onTouchStart: callAll(props.onTouchStart, emitTouch)
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  Rail.prototype.render = function render() {
    var getRailProps = this.getRailProps,
        children = this.props.children;


    var renderedChildren = children({ getRailProps: getRailProps });
    return renderedChildren && React__default.Children.only(renderedChildren);
  };

  return Rail;
}(React.Component);

Rail.propTypes = {
  /** @ignore */
  emitMouse: propTypes.func,
  /** @ignore */
  emitTouch: propTypes.func,
  /**
   * A function to render the rail. `({ getRailProps }): element`
   */
  children: propTypes.func.isRequired
};

var Ticks = function (_Component) {
  inherits(Ticks, _Component);

  function Ticks() {
    classCallCheck(this, Ticks);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Ticks.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        values = _props.values,
        scale = _props.scale,
        count = _props.count,
        emitMouse = _props.emitMouse,
        emitTouch = _props.emitTouch;

    var ticks = (values ? values : scale.ticks(count)).map(function (value) {
      return {
        id: '$$-' + value,
        value: value,
        percent: scale(value)
      };
    });

    var renderedChildren = children({ ticks: ticks, emitMouse: emitMouse, emitTouch: emitTouch });
    return renderedChildren && React__default.Children.only(renderedChildren);
  };

  return Ticks;
}(React.Component);

Ticks.propTypes = {
  /** @ignore */
  scale: propTypes.func,
  /**
   * Approximate number of ticks you want to render.
   * If you supply your own ticks using the values prop this prop has no effect.
   */
  count: propTypes.number,
  /**
   * The values prop should be an array of unique numbers.
   * Use this prop if you want to specify your own tick values instead of ticks generated by the slider.
   * The numbers should be valid numbers in the domain and correspond to the step value.
   * Invalid values will be coerced to the closet matching value in the domain.
   */
  values: propTypes.array,
  /** @ignore */
  emitMouse: propTypes.func,
  /** @ignore */
  emitTouch: propTypes.func,
  /**
   * A function to render the ticks.
   * The function receives an object with an array of ticks.
   * `({ ticks  }): element`
   */
  children: propTypes.func.isRequired
};

Ticks.defaultProps = {
  count: 10
};

var Tracks = function (_Component) {
  inherits(Tracks, _Component);

  function Tracks() {
    var _temp, _this, _ret;

    classCallCheck(this, Tracks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getTrackProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return babelHelpers.extends({}, props, {
        onMouseDown: callAll(props.onMouseDown, emitMouse),
        onTouchStart: callAll(props.onTouchStart, emitTouch)
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  Tracks.prototype.render = function render() {
    var getTrackProps = this.getTrackProps,
        _props = this.props,
        children = _props.children,
        left = _props.left,
        right = _props.right,
        scale = _props.scale,
        handles = _props.handles;


    var domain = scale.domain();
    var tracks = [];

    for (var i = 0; i < handles.length + 1; i++) {
      var source = handles[i - 1];
      var target = handles[i];

      if (i === 0 && left === true) {
        source = { id: '$', value: domain[0], percent: 0 };
      } else if (i === handles.length && right === true) {
        target = { id: '$', value: domain[1], percent: 100 };
      }

      if (source && target) {
        tracks.push({
          id: source.id + '-' + target.id,
          source: source,
          target: target
        });
      }
    }

    var renderedChildren = children({ tracks: tracks, getTrackProps: getTrackProps });
    return renderedChildren && React__default.Children.only(renderedChildren);
  };

  return Tracks;
}(React.Component);

Tracks.propTypes = {
  /**
   * Boolean value to control whether the left most track is included in the tracks array.
   */
  left: propTypes.bool,
  /**
   * Boolean value to control whether the right most track is included in the tracks array.
   */
  right: propTypes.bool,
  /** @ignore */
  scale: propTypes.func,
  /** @ignore */
  handles: propTypes.array,
  /** @ignore */
  emitMouse: propTypes.func,
  /** @ignore */
  emitTouch: propTypes.func,
  /**
   * A function to render the tracks. The function receives an object with an array of tracks and a function to get track props. `({ tracks, getTrackProps }): element`
   */
  children: propTypes.func.isRequired
};

Tracks.defaultProps = {
  left: true,
  right: true
};

var Handles = function (_Component) {
  inherits(Handles, _Component);

  function Handles() {
    var _temp, _this, _ret;

    classCallCheck(this, Handles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getHandleProps = function (id) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return babelHelpers.extends({}, props, {
        onMouseDown: callAll(props.onMouseDown, function (e) {
          return emitMouse(e, id);
        }),
        onTouchStart: callAll(props.onTouchStart, function (e) {
          return emitTouch(e, id);
        })
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  Handles.prototype.render = function render() {
    var getHandleProps = this.getHandleProps,
        _props = this.props,
        children = _props.children,
        handles = _props.handles;


    var renderedChildren = children({ handles: handles, getHandleProps: getHandleProps });
    return renderedChildren && React__default.Children.only(renderedChildren);
  };

  return Handles;
}(React.Component);

Handles.propTypes = {
  /** @ignore */
  handles: propTypes.array,
  /** @ignore */
  emitMouse: propTypes.func,
  /** @ignore */
  emitTouch: propTypes.func,
  /**
   * A function to render the handles.
   * The function receives an object with an array of handles and functions to get handle props
   * `({ handles, getHandleProps }): element`
   */
  children: propTypes.func.isRequired
};

// Default mode allows crossing.
function mode1(prev, next) {
  return next;
}

// Prevent duplicate values and crossing
function mode2(prev, next) {
  for (var i = 0; i < prev.length; i++) {
    if (prev[i].key !== next[i].key) {
      return prev;
    }

    if (next[i - 1] && next[i].val === next[i - 1].val) {
      return prev;
    }

    if (next[i + 1] && next[i].val === next[i + 1].val) {
      return prev;
    }
  }

  return next;
}

function getSortByVal(reversed) {
  return function sortByVal(a, b) {
    if (a.val > b.val) {
      return reversed ? -1 : 1;
    }

    if (b.val > a.val) {
      return reversed ? 1 : -1;
    }

    return 0;
  };
}

function updateValues(values, active, nxt, reversed) {
  var index = values.findIndex(function (v) {
    return v.key === active;
  });

  if (index !== -1) {
    var _values$index = values[index],
        key = _values$index.key,
        val = _values$index.val;


    if (val !== nxt) {
      return [].concat(values.slice(0, index), [{ key: key, val: nxt }], values.slice(index + 1)).sort(getSortByVal(reversed));
    }
  }

  return values;
}

function getSliderDomain(slider, vertical) {
  if (!slider) {
    return [0, 0];
  }

  var s = slider.getBoundingClientRect();
  return vertical ? [s.top, s.bottom] : [s.left, s.right];
}

function precision(num) {
  var m = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

  if (!m) {
    return 0;
  }

  return Math.max(0, (m[1] ? m[1].length : 0) - (m[2] ? +m[2] : 0));
}

function getStepRange(min, max, step) {
  var fixed = precision(step);

  var pMin = +min.toFixed(fixed);
  var pMax = +max.toFixed(fixed);

  var range = [];

  var next = pMin;

  while (next <= pMax) {
    range.push(next);
    next = +(next + step).toFixed(fixed);
  }

  return range;
}

function isNotValidTouch(_ref) {
  var type = _ref.type,
      touches = _ref.touches;

  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

var prfx = "react-compound-slider:";

var noop = function noop() {};

var compare = function compare(b) {
  return function (m, d, i) {
    return m && b[i] === d;
  };
};

var equal = function equal(a, b) {
  return a === b || a.length === b.length && a.reduce(compare(b), true);
};

var Slider$1 = function (_PureComponent) {
  inherits(Slider, _PureComponent);

  function Slider(props) {
    classCallCheck(this, Slider);

    var _this = possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.slider = null;

    _this.valueToPerc = linear();
    _this.valueToStep = discrete();
    _this.pixelToStep = discrete();

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onMove = _this.onMove.bind(_this);

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onStart = _this.onStart.bind(_this);

    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    return _this;
  }

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        defaultValues = _props.defaultValues,
        values = _props.values,
        domain = _props.domain,
        step = _props.step,
        reversed = _props.reversed;


    warning_1(defaultValues === undefined, prfx + " defaultValues is deprecated. Use 'values' prop.");

    this.updateRange(domain, step, reversed);
    this.updateValues(values || defaultValues, reversed);
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(next) {
    var domain = next.domain,
        step = next.step,
        reversed = next.reversed,
        values = next.values,
        forceUpdate = next.forceUpdate;
    var props = this.props;


    if (domain[0] !== props.domain[0] || domain[1] !== props.domain[1] || step !== props.step || reversed !== props.reversed) {
      this.updateRange(domain, step, reversed);
      var remapped = this.reMapValues(reversed);
      if (values === undefined || values === props.values) {
        next.onChange(remapped);
        next.onUpdate(remapped);
      }
    }

    if (!equal(values, props.values) || forceUpdate) {
      this.updateValues(values, reversed);
    }
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("touchend", this.onTouchEnd);
  };

  Slider.prototype.reMapValues = function reMapValues(reversed) {
    var values = this.state.values;

    return this.updateValues(values.map(function (d) {
      return d.val;
    }), reversed);
  };

  Slider.prototype.updateValues = function updateValues$$1() {
    var _this2 = this;

    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var reversed = arguments[1];

    var values = arr.map(function (x) {
      var val = _this2.valueToStep(x);

      warning_1(x === val, prfx + " Invalid value encountered. Changing " + x + " to " + val + ".");

      return val;
    }).map(function (val, i) {
      return { key: "$$-" + i, val: val };
    }).sort(getSortByVal(reversed));

    this.setState(function () {
      return { values: values };
    });

    return values.map(function (d) {
      return d.val;
    });
  };

  Slider.prototype.updateRange = function updateRange(_ref, step, reversed) {
    var min = _ref[0],
        max = _ref[1];

    var range = getStepRange(min, max, step);

    this.valueToStep.range(range.slice()).domain([min - step / 2, max + step / 2]);

    if (reversed === true) {
      this.valueToPerc.domain([min, max]).range([100, 0]);
      range.reverse();
    } else {
      this.valueToPerc.domain([min, max]).range([0, 100]);
    }

    this.pixelToStep.range(range);

    warning_1(max > min, prfx + " Max must be greater than min (even if reversed). Max is " + max + ". Min is " + min + ".");

    warning_1(range.length <= 10001, prfx + " Increase step value. Found " + range.length.toLocaleString() + " values in range.");

    var last = range.length - 1;

    warning_1(range[reversed ? last : 0] === min && range[reversed ? 0 : last] === max, prfx + " The range is incorrectly calculated. Check domain (min, max) and step values.");
  };

  Slider.prototype.onMouseDown = function onMouseDown(e, key) {
    this.onStart(e, key, false);
  };

  Slider.prototype.onTouchStart = function onTouchStart(e, key) {
    if (isNotValidTouch(e)) {
      return;
    }
    this.onStart(e, key, true);
  };

  Slider.prototype.onStart = function onStart(e, key, isTouch) {
    var values = this.state.values;


    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();

    var active = values.find(function (value) {
      return value.key === key;
    });

    if (active) {
      this.active = key;
      isTouch ? this.addTouchEvents() : this.addMouseEvents();
    } else {
      this.active = null;
      this.requestMove(e, isTouch);
    }
  };

  Slider.prototype.requestMove = function requestMove(e, isTouch) {
    var prev = this.state.values,
        _props2 = this.props,
        vertical = _props2.vertical,
        reversed = _props2.reversed;
    var slider = this.slider;


    this.pixelToStep.domain(getSliderDomain(slider, vertical));

    var step = void 0;

    if (isTouch) {
      step = this.pixelToStep(getTouchPosition(vertical, e));
    } else {
      step = this.pixelToStep(vertical ? e.clientY : e.pageX);
    }

    var active = null;
    var lowest = Infinity;

    for (var i = 0; i < prev.length; i++) {
      var diff = Math.abs(this.valueToStep(prev[i].val) - step);

      if (diff < lowest) {
        active = prev[i].key;
        lowest = diff;
      }
    }

    if (active) {
      var next = updateValues(prev, active, step, reversed);
      this.onMove(prev, next, true);
    }
  };

  Slider.prototype.addMouseEvents = function addMouseEvents() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  };

  Slider.prototype.addTouchEvents = function addTouchEvents() {
    document.addEventListener("touchmove", this.onTouchMove);
    document.addEventListener("touchend", this.onTouchEnd);
  };

  Slider.prototype.onMouseMove = function onMouseMove(e) {
    var prev = this.state.values,
        _props3 = this.props,
        vertical = _props3.vertical,
        reversed = _props3.reversed;
    var active = this.active,
        slider = this.slider;


    this.pixelToStep.domain(getSliderDomain(slider, vertical));

    var step = this.pixelToStep(vertical ? e.clientY : e.pageX);
    var next = updateValues(prev, active, step, reversed);

    this.onMove(prev, next);
  };

  Slider.prototype.onTouchMove = function onTouchMove(e) {
    var prev = this.state.values,
        _props4 = this.props,
        vertical = _props4.vertical,
        reversed = _props4.reversed;
    var active = this.active,
        slider = this.slider;


    if (isNotValidTouch(e)) {
      return;
    }

    this.pixelToStep.domain(getSliderDomain(slider, vertical));

    var step = this.pixelToStep(getTouchPosition(vertical, e));
    var next = updateValues(prev, active, step, reversed);

    this.onMove(prev, next);
  };

  Slider.prototype.onMove = function onMove(prev, next, submit) {
    var _props5 = this.props,
        mode = _props5.mode,
        onUpdate = _props5.onUpdate,
        onChange = _props5.onChange;


    if (next !== prev) {
      var values = void 0;

      switch (mode) {
        case 1:
          values = mode1(prev, next);
          break;
        case 2:
          values = mode2(prev, next);
          break;
        default:
          values = next;
          warning_1(false, prfx + " Invalid mode value.");
      }

      this.setState({ values: values });

      onUpdate(values.map(function (d) {
        return d.val;
      }));

      if (submit) {
        onChange(values.map(function (d) {
          return d.val;
        }));
      }
    }
  };

  Slider.prototype.onMouseUp = function onMouseUp() {
    var values = this.state.values,
        onChange = this.props.onChange;

    this.active = null;
    onChange(values.map(function (d) {
      return d.val;
    }));

    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  };

  Slider.prototype.onTouchEnd = function onTouchEnd() {
    var values = this.state.values,
        onChange = this.props.onChange;

    this.active = null;
    onChange(values.map(function (d) {
      return d.val;
    }));

    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("touchend", this.onTouchEnd);
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var values = this.state.values,
        _props6 = this.props,
        className = _props6.className,
        rootStyle = _props6.rootStyle;


    var handles = values.map(function (_ref2) {
      var key = _ref2.key,
          val = _ref2.val;

      return { id: key, value: val, percent: _this3.valueToPerc(val) };
    });

    var children = React__default.Children.map(this.props.children, function (child) {
      if (child.type === Rail || child.type === Ticks || child.type === Tracks || child.type === Handles) {
        return React__default.cloneElement(child, {
          scale: _this3.valueToPerc,
          handles: handles,
          emitMouse: _this3.onMouseDown,
          emitTouch: _this3.onTouchStart
        });
      }

      return child;
    });

    return React__default.createElement(
      "div",
      {
        style: rootStyle || {},
        className: className,
        ref: function ref(d) {
          return _this3.slider = d;
        }
      },
      children
    );
  };

  return Slider;
}(React.PureComponent);

Slider$1.propTypes = {
  /**
   * CSS class name applied to the root div of the slider.
   */
  className: propTypes.string,
  /**
   * An object with any inline styles you want applied to the root div.
   */
  rootStyle: propTypes.object,
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain: propTypes.array,
  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: propTypes.array,
  /**
   * DEPRECATED - Use 'values' prop
   */
  defaultValues: propTypes.array,
  /**
   * The step value for the slider.
   */
  step: propTypes.number,
  /**
   * The interaction mode. Value of 1 will allow handles to cross.
   * Value of 2 will keep the sliders from crossing and separated by a step.
   */
  mode: propTypes.oneOf([1, 2]),
  /**
   * Set to true if the slider is displayed vertically to tell the slider to use the height to calculate positions.
   */
  vertical: propTypes.bool,
  /**
   * Reverse the display of slider values.
   */
  reversed: propTypes.bool,
  /**
   * Function called with the values at each update (caution: high-volume updates when dragging).
   */
  onUpdate: propTypes.func,
  /**
   * Function called with the values when interaction stops.
   */
  onChange: propTypes.func,
  /**
   * Component children to render
   */
  children: propTypes.any,
  forceUpdate: propTypes.bool
};

Slider$1.defaultProps = {
  mode: 1,
  step: 0.1,
  domain: [0, 100],
  vertical: false,
  reversed: false,
  onUpdate: noop,
  onChange: noop,
  forceUpdate: false
};

Slider$1.Rail = Rail;
Slider$1.Ticks = Ticks;
Slider$1.Tracks = Tracks;
Slider$1.Handles = Handles;

exports['default'] = Slider$1;
exports.Rail = Rail;
exports.Ticks = Ticks;
exports.Tracks = Tracks;
exports.Handles = Handles;

Object.defineProperty(exports, '__esModule', { value: true });

})));

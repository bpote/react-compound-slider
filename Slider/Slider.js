"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scales = require("./scales");

var _Rail = require("../Rail");

var _Rail2 = _interopRequireDefault(_Rail);

var _Ticks = require("../Ticks");

var _Ticks2 = _interopRequireDefault(_Ticks);

var _Tracks = require("../Tracks");

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Handles = require("../Handles");

var _Handles2 = _interopRequireDefault(_Handles);

var _modes = require("./modes");

var _utils = require("./utils");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Slider = function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.slider = null;

    _this.valueToPerc = (0, _scales.linear)();
    _this.valueToStep = (0, _scales.discrete)();
    _this.pixelToStep = (0, _scales.discrete)();

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


    (0, _warning2.default)(defaultValues === undefined, prfx + " defaultValues is deprecated. Use 'values' prop.");

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

  Slider.prototype.updateValues = function updateValues() {
    var _this2 = this;

    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var reversed = arguments[1];

    var values = arr.map(function (x) {
      var val = _this2.valueToStep(x);

      (0, _warning2.default)(x === val, prfx + " Invalid value encountered. Changing " + x + " to " + val + ".");

      return val;
    }).map(function (val, i) {
      return { key: "$$-" + i, val: val };
    }).sort(utils.getSortByVal(reversed));

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

    var range = utils.getStepRange(min, max, step);

    this.valueToStep.range(range.slice()).domain([min - step / 2, max + step / 2]);

    if (reversed === true) {
      this.valueToPerc.domain([min, max]).range([100, 0]);
      range.reverse();
    } else {
      this.valueToPerc.domain([min, max]).range([0, 100]);
    }

    this.pixelToStep.range(range);

    (0, _warning2.default)(max > min, prfx + " Max must be greater than min (even if reversed). Max is " + max + ". Min is " + min + ".");

    (0, _warning2.default)(range.length <= 10001, prfx + " Increase step value. Found " + range.length.toLocaleString() + " values in range.");

    var last = range.length - 1;

    (0, _warning2.default)(range[reversed ? last : 0] === min && range[reversed ? 0 : last] === max, prfx + " The range is incorrectly calculated. Check domain (min, max) and step values.");
  };

  Slider.prototype.onMouseDown = function onMouseDown(e, key) {
    this.onStart(e, key, false);
  };

  Slider.prototype.onTouchStart = function onTouchStart(e, key) {
    if (utils.isNotValidTouch(e)) {
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


    this.pixelToStep.domain(utils.getSliderDomain(slider, vertical));

    var step = void 0;

    if (isTouch) {
      step = this.pixelToStep(utils.getTouchPosition(vertical, e));
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
      var next = utils.updateValues(prev, active, step, reversed);
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


    this.pixelToStep.domain(utils.getSliderDomain(slider, vertical));

    var step = this.pixelToStep(vertical ? e.clientY : e.pageX);
    var next = utils.updateValues(prev, active, step, reversed);

    this.onMove(prev, next);
  };

  Slider.prototype.onTouchMove = function onTouchMove(e) {
    var prev = this.state.values,
        _props4 = this.props,
        vertical = _props4.vertical,
        reversed = _props4.reversed;
    var active = this.active,
        slider = this.slider;


    if (utils.isNotValidTouch(e)) {
      return;
    }

    this.pixelToStep.domain(utils.getSliderDomain(slider, vertical));

    var step = this.pixelToStep(utils.getTouchPosition(vertical, e));
    var next = utils.updateValues(prev, active, step, reversed);

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
          values = (0, _modes.mode1)(prev, next);
          break;
        case 2:
          values = (0, _modes.mode2)(prev, next);
          break;
        default:
          values = next;
          (0, _warning2.default)(false, prfx + " Invalid mode value.");
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

    var children = _react2.default.Children.map(this.props.children, function (child) {
      if (child.type === _Rail2.default || child.type === _Ticks2.default || child.type === _Tracks2.default || child.type === _Handles2.default) {
        return _react2.default.cloneElement(child, {
          scale: _this3.valueToPerc,
          handles: handles,
          emitMouse: _this3.onMouseDown,
          emitTouch: _this3.onTouchStart
        });
      }

      return child;
    });

    return _react2.default.createElement(
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
}(_react.PureComponent);

Slider.propTypes = {
  /**
   * CSS class name applied to the root div of the slider.
   */
  className: _propTypes2.default.string,
  /**
   * An object with any inline styles you want applied to the root div.
   */
  rootStyle: _propTypes2.default.object,
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain: _propTypes2.default.array,
  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: _propTypes2.default.array,
  /**
   * DEPRECATED - Use 'values' prop
   */
  defaultValues: _propTypes2.default.array,
  /**
   * The step value for the slider.
   */
  step: _propTypes2.default.number,
  /**
   * The interaction mode. Value of 1 will allow handles to cross.
   * Value of 2 will keep the sliders from crossing and separated by a step.
   */
  mode: _propTypes2.default.oneOf([1, 2]),
  /**
   * Set to true if the slider is displayed vertically to tell the slider to use the height to calculate positions.
   */
  vertical: _propTypes2.default.bool,
  /**
   * Reverse the display of slider values.
   */
  reversed: _propTypes2.default.bool,
  /**
   * Function called with the values at each update (caution: high-volume updates when dragging).
   */
  onUpdate: _propTypes2.default.func,
  /**
   * Function called with the values when interaction stops.
   */
  onChange: _propTypes2.default.func,
  /**
   * Component children to render
   */
  children: _propTypes2.default.any,
  forceUpdate: _propTypes2.default.bool
};

Slider.defaultProps = {
  mode: 1,
  step: 0.1,
  domain: [0, 100],
  vertical: false,
  reversed: false,
  onUpdate: noop,
  onChange: noop,
  forceUpdate: false
};

exports.default = Slider;
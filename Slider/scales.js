'use strict';

exports.__esModule = true;
exports.discrete = discrete;
exports.linear = linear;

var _d3Array = require('d3-array');

function discrete() {
  var x0 = 0;
  var x1 = 1;

  var domain = [0.5];
  var range = [0, 1];

  var n = 1;

  function scale(x) {
    return range[(0, _d3Array.bisect)(domain, x, 0, n)];
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

    return (0, _d3Array.ticks)(d[0], d[d.length - 1], count ? 10 : count);
  };

  return rescale();
}
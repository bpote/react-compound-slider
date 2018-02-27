"use strict";

exports.__esModule = true;
exports.mode1 = mode1;
exports.mode2 = mode2;
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
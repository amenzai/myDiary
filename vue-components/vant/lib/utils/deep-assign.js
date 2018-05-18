'use strict';

exports.__esModule = true;
exports.default = assign;

var _ = require('./');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val) || hasOwnProperty.call(to, key) && !(0, _.isDef)(to[key])) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObj)(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  return to;
}
import { isDef, isObj } from './';

var hasOwnProperty = Object.prototype.hasOwnProperty;


function assignKey(to, from, key) {
  var val = from[key];

  if (!isDef(val) || hasOwnProperty.call(to, key) && !isDef(to[key])) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

export default function assign(to, from) {
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  return to;
}
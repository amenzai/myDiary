var QueryString = exports;

QueryString.escape = encodeURIComponent;

QueryString.unescape = function(s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
};

QueryString.stringify = function(obj, sep, eq, arrayKey) {
  if (!isPlainObject(obj)) return '';
  sep = sep || '&';
  eq = eq || '=';
  arrayKey = arrayKey || false;
  var buf = [],
    key, val;
  var escape = QueryString.escape;
  for (key in obj) {
    if (!hasOwnProperty.call(obj, key)) continue;
    val = obj[key];
    key = QueryString.escape(key);

    if (isPrimitive(val)) {
      buf.push(key, eq, escape(val + ''), sep);
    } else if (isArray(val) && val.length) {
      for (var i = 0; i < val.length; i++) {
        if (isPrimitive(val[i])) {
          buf.push(
            key,
            (arrayKey ? escape('[]') : '') + eq,
            escape(val[i] + ''),
            sep);
        }
      }
    } else {
      buf.push(key, eq, sep);
    }
  }

  buf.pop();
  return buf.join('');
};


QueryString.parse = function(str, sep, eq) {
  if (typeof str === 'undefined') {
    str = document.location.search
  }
  var ret = {};

  if (typeof str !== 'string' || trim(str).length === 0) {
    return ret;
  }

  str = str.replace(/^\?/, '');

  var pairs = str.split(sep || '&');
  eq = eq || '=';
  var unescape = QueryString.unescape;

  for (var i = 0; i < pairs.length; i++) {

    var pair = pairs[i].split(eq);
    var key = unescape(trim(pair[0]));
    var val = unescape(trim(pair.slice(1).join(eq)));

    var m = key.match(/^(\w+)\[\]$/);
    if (m && m[1]) {
      key = m[1];
    }

    if (hasOwnProperty.call(ret, key)) {
      if (!isArray(ret[key])) {
        ret[key] = [ret[key]];
      }
      ret[key].push(val);
    } else {
      ret[key] = m ? [val] : val;
    }
  }

  return ret;
};

// Helpers

var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray || function(val) {
  return toString.call(val) === '[object Array]';
};
var trim = String.prototype.trim ?
  function(str) {
    return (str == null) ?
      '' :
      String.prototype.trim.call(str);
  } :
  function(str) {
    return (str == null) ?
      '' :
      str.toString().replace(/^\s+/, '').replace(/\s+$/, '');
  };

function isPlainObject(o) {
  return o &&
    toString.call(o) === '[object Object]' &&
    'isPrototypeOf' in o;
}

function isPrimitive(o) {
  return o !== Object(o);
}

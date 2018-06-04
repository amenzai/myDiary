'use strict';

exports.__esModule = true;
exports.default = mobile;
function mobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return (/^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value)
  );
}
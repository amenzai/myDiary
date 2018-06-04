'use strict';

exports.__esModule = true;

exports.default = function (sfc) {
  sfc.components = (0, _assign2.default)(sfc.components || {}, {
    Icon: _icon2.default,
    Loading: _loading2.default,
    Cell: _cell2.default,
    CellGroup: _cellGroup2.default
  });
  return (0, _createBasic2.default)(sfc);
};

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _createBasic = require('./create-basic');

var _createBasic2 = _interopRequireDefault(_createBasic);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var _cellGroup = require('../cell-group');

var _cellGroup2 = _interopRequireDefault(_cellGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a component with common options
 */
;
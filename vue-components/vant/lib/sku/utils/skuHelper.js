'use strict';

exports.__esModule = true;
exports.isSkuChoosable = exports.getSelectedSkuValues = exports.getSkuComb = exports.isAllSelected = exports.normalizeSkuTree = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
var normalizeSkuTree = exports.normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
};

// 判断是否所有的sku都已经选中
var isAllSelected = exports.isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = (0, _keys2.default)(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
};

// 根据已选择的sku获取skuComb
var getSkuComb = exports.getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (skuComb) {
    return (0, _keys2.default)(selectedSku).every(function (skuKeyStr) {
      return String(skuComb[skuKeyStr]) === String(selectedSku[skuKeyStr]); // eslint-disable-line
    });
  });
  return skuComb[0];
};

// 获取已选择的sku名称
var getSelectedSkuValues = exports.getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return (0, _keys2.default)(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== _constants.UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (skuValue) {
        return skuValue.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }
    return selectedValues;
  }, []);
};

// 判断sku是否可选
var isSkuChoosable = exports.isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _Object$assign2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId;
  // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = (0, _assign2.default)({}, selectedSku, (_Object$assign2 = {}, _Object$assign2[key] = valueId, _Object$assign2));
  // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中
  var skusToCheck = (0, _keys2.default)(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });

  var stock = filteredSku.reduce(function (total, sku) {
    return total += sku.stock_num;
  }, 0);
  return stock > 0;
};

exports.default = {
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable
};
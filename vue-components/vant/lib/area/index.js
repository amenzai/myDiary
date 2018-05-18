'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('picker', { ref: "picker", class: _vm.b(), attrs: { "show-toolbar": "", "value-key": "name", "title": _vm.title, "loading": _vm.loading, "columns": _vm.columns, "item-height": _vm.itemHeight, "visible-item-count": _vm.visibleItemCount }, on: { "change": _vm.onChange, "confirm": function confirm($event) {
          _vm.$emit('confirm', $event);
        }, "cancel": function cancel($event) {
          _vm.$emit('cancel', $event);
        } } });
  },

  name: 'area',

  components: {
    Picker: _picker2.default
  },

  props: {
    value: {},
    title: String,
    loading: Boolean,
    areaList: Object,
    itemHeight: Number,
    visibleItemCount: Number,
    // 省市县显示列数，3-省市县，2-省市，1-省
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    listValid: function listValid() {
      return this.areaList && (0, _utils.isObj)(this.areaList.province_list);
    },
    columns: function columns() {
      var columns = [];

      if (!this.listValid) {
        return columns;
      }

      var code = this.value || '';
      var columnsNum = +this.columnsNum;

      columns.push({
        values: this.getList('province')
      });

      if (columnsNum > 1) {
        columns.push({
          values: this.getList('city', code.slice(0, 2))
        });
      }

      if (columnsNum > 2) {
        columns.push({
          values: this.getList('county', code.slice(0, 4))
        });
      }

      return columns;
    }
  },

  mounted: function mounted() {
    this.setIndex();
  },

  watch: {
    value: function value() {
      this.setIndex();
    },
    areaList: function areaList() {
      this.setIndex();
    }
  },

  methods: {
    setIndex: function setIndex() {
      var _this = this;

      this.$nextTick(function () {
        var code = _this.value || '';
        var picker = _this.$refs.picker;

        picker && picker.setIndexes([_this.getIndex('province', code), _this.getIndex('city', code), _this.getIndex('county', code)]);
      });
    },

    // 根据省市县类型和对应的`code`获取对应列表
    getList: function getList(type, code) {
      var result = [];

      if (this.listValid && (type === 'province' || code)) {
        var areaList = this.areaList;

        var list = type === 'province' ? areaList.province_list : type === 'city' ? areaList.city_list : areaList.county_list;

        result = (0, _keys2.default)(list).map(function (code) {
          return {
            code: code,
            name: list[code]
          };
        });

        if (type !== 'province' && code) {
          result = result.filter(function (item) {
            return item.code.indexOf(code) === 0;
          });
        }
      }

      result.unshift({
        code: '-1',
        name: this.$t(type)
      });

      return result;
    },

    // 获取对应省市县在列表中的索引
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var areaList = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < areaList.length; i++) {
        if (areaList[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      var code = values[index].code;
      // 处理省变化
      if (index === 0) {
        picker.setColumnValues(1, this.getList('city', code.slice(0, 2)));
        picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      } else if (index === 1) {
        picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      }
      this.$emit('change', picker, values, index);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    }
  }
});
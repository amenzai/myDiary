import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _extends from 'babel-runtime/helpers/extends';

/* eslint-disable camelcase */
import create from '../utils/create';
import { isObj } from '../utils';
import Field from '../field';
import VanButton from '../button';
import Popup from '../popup';
import Toast from '../toast';
import Dialog from '../dialog';
import VanArea from '../area';
import AddressEditDetail from './Detail';
import SwitchCell from '../switch-cell';
import validateMobile from '../utils/validate/mobile';

var defaultAddress = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
};

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('cell-group', [_c('field', { attrs: { "maxlength": "15", "placeholder": _vm.$t('name'), "label": _vm.$t('label.name'), "error": _vm.errorInfo.name }, on: { "focus": function focus($event) {
          _vm.onFocus('name');
        } }, model: { value: _vm.data.name, callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        }, expression: "data.name" } }), _c('field', { attrs: { "type": "tel", "label": _vm.$t('tel'), "placeholder": _vm.$t('telPlaceholder'), "error": _vm.errorInfo.tel }, on: { "focus": function focus($event) {
          _vm.onFocus('tel');
        } }, model: { value: _vm.data.tel, callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        }, expression: "data.tel" } }), _c('cell', { class: _vm.b('area'), attrs: { "clickable": "", "title": _vm.$t('area') }, on: { "click": function click($event) {
          _vm.showArea = true;
        } } }, [_c('span', [_vm._v(_vm._s(_vm.data.province || _vm.$t('province')))]), _c('span', [_vm._v(_vm._s(_vm.data.city || _vm.$t('city')))]), _c('span', [_vm._v(_vm._s(_vm.data.county || _vm.$t('county')))])]), _c('address-edit-detail', { attrs: { "value": _vm.data.address_detail, "is-error": _vm.errorInfo.address_detail, "show-search-result": _vm.showSearchResult, "search-result": _vm.searchResult }, on: { "focus": function focus($event) {
          _vm.onFocus('address_detail');
        }, "blur": function blur($event) {
          _vm.detailFocused = false;
        }, "input": _vm.onChangeDetail, "select-search": function selectSearch($event) {
          _vm.$emit('select-search', $event);
        } } }), _vm.showPostal ? _c('field', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], staticClass: "van-hairline--top", attrs: { "type": "tel", "label": _vm.$t('label.postal'), "placeholder": _vm.$t('placeholder.postal'), "maxlength": "6", "error": _vm.errorInfo.postal_code }, on: { "focus": function focus($event) {
          _vm.onFocus('postal_code');
        } }, model: { value: _vm.data.postal_code, callback: function callback($$v) {
          _vm.$set(_vm.data, "postal_code", $$v);
        }, expression: "data.postal_code" } }) : _vm._e(), _vm._t("default"), _vm.showSetDefault ? _c('switch-cell', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], attrs: { "title": _vm.$t('defaultAddress') }, model: { value: _vm.data.is_default, callback: function callback($$v) {
          _vm.$set(_vm.data, "is_default", $$v);
        }, expression: "data.is_default" } }) : _vm._e()], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hideBottomFields, expression: "!hideBottomFields" }], class: _vm.b('buttons') }, [_c('van-button', { attrs: { "block": "", "loading": _vm.isSaving, "type": "primary" }, on: { "click": _vm.onSave } }, [_vm._v("\n      " + _vm._s(_vm.$t('save')) + "\n    ")]), _vm.isEdit ? _c('van-button', { attrs: { "block": "", "loading": _vm.isDeleting }, on: { "click": _vm.onDelete } }, [_vm._v("\n      " + _vm._s(_vm.$t('deleteAddress')) + "\n    ")]) : _vm._e()], 1), _c('popup', { attrs: { "position": "bottom" }, model: { value: _vm.showArea, callback: function callback($$v) {
          _vm.showArea = $$v;
        }, expression: "showArea" } }, [_c('van-area', { ref: "area", attrs: { "loading": !_vm.areaListLoaded, "value": _vm.data.area_code, "area-list": _vm.areaList }, on: { "confirm": _vm.onAreaConfirm, "cancel": function cancel($event) {
          _vm.showArea = false;
        } } })], 1)], 1);
  },

  name: 'address-edit',

  components: {
    Field: Field,
    Popup: Popup,
    VanArea: VanArea,
    VanButton: VanButton,
    SwitchCell: SwitchCell,
    AddressEditDetail: AddressEditDetail
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultAddress);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },

  data: function data() {
    return {
      showArea: false,
      data: _extends({}, defaultAddress, this.addressInfo),
      detailFocused: false,
      errorInfo: {
        name: false,
        tel: false,
        address_detail: false,
        postal_code: false
      }
    };
  },


  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return isObj(this.areaList) && _Object$keys(this.areaList).length;
    },
    isEdit: function isEdit() {
      return this.showDelete || !!this.data.id;
    }
  },

  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultAddress, val);

        this.setAreaCode(val.area_code);
      },

      deep: true
    },

    areaList: function areaList() {
      this.setAreaCode(this.data.area_code);
    }
  },

  created: function created() {
    this.setAreaCode(this.data.area_code);
  },


  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'address_detail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.address_detail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      if (values.length !== 3 || values.some(function (value) {
        return +value.code === -1;
      })) {
        return Toast(this.$t('areaEmpty'));
      }
      this.data.area_code = values[2].code;
      this.assignAreaValues(values);
      this.showArea = false;
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      if (values.length >= 3) {
        _Object$assign(this.data, {
          province: values[0].name,
          city: values[1].name,
          county: values[2].name
        });
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'area_code', 'address_detail'];

      if (this.showPostal) {
        items.push('postal_code');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessageByKey(item);
        if (msg) {
          _this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key];
      var $t = this.$t;


      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : $t('nameOverlimit') : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'area_code':
          return value && +value !== -1 ? '' : $t('areaEmpty');
        case 'address_detail':
          return value ? value.length <= 200 ? '' : $t('addressOverlimit') : $t('addressEmpty');
        case 'postal_code':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (this.isDeleting) {
        return;
      }

      Dialog.confirm({
        message: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },


    // get values of area component
    getArea: function getArea() {
      var area = this.$refs.area;

      return area ? area.getValues() : [];
    },


    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      var _this3 = this;

      this.data.area_code = code || '';
      this.$nextTick(function () {
        _this3.$nextTick(function () {
          var area = _this3.$refs.area;

          if (area) {
            _this3.assignAreaValues(area.getValues());
          }
        });
      });
    }
  }
});
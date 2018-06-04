
import create from '../utils/create';
import Field from '../field';
import { isAndroid } from '../utils';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "root" }, [_c('field', { attrs: { "label": _vm.$t('label'), "placeholder": _vm.$t('placeholder'), "maxlength": "200", "type": "textarea", "autosize": "", "rows": "1", "value": _vm.value, "error": _vm.isError }, on: { "click-icon": _vm.onIconClick, "input": function input($event) {
          _vm.$emit('input', $event);
        }, "focus": _vm.onFocus, "blur": _vm.onBlur } }, [_c('div', { attrs: { "slot": "icon" }, slot: "icon" }, [_vm.showIcon && _vm.isAndroid ? _c('span', { class: _vm.b('finish') }, [_vm._v(_vm._s(_vm.$t('complete')))]) : _vm.showIcon ? _c('icon', { attrs: { "name": "clear" } }) : _vm._e()], 1)]), _vm.showSearchList ? _c('cell-group', { attrs: { "border": false } }, _vm._l(_vm.searchResult, function (express) {
      return _c('cell', { key: express.name + express.address, attrs: { "title": express.name, "label": express.address, "icon": "location", "clickable": "" }, on: { "click": function click($event) {
            _vm.onSelect(express);
          } } });
    })) : _vm._e()], 1);
  },

  name: 'address-edit-detail',

  components: {
    Field: Field
  },

  props: {
    value: {},
    isError: Boolean,
    searchResult: Array,
    showSearchResult: Boolean
  },

  data: function data() {
    return {
      isAndroid: isAndroid(),
      isFocused: false
    };
  },


  computed: {
    showSearchList: function showSearchList() {
      return this.showSearchResult && this.isFocused && this.searchResult.length > 0;
    },
    showIcon: function showIcon() {
      return this.value && this.isFocused;
    }
  },

  methods: {
    onFocus: function onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
      this.$refs.root.scrollIntoView();
    },
    onBlur: function onBlur(e) {
      var _this = this;

      // wait for click event finished
      setTimeout(function () {
        _this.isFocused = false;
        _this.$emit('blur', e);
      }, 100);
    },
    onIconClick: function onIconClick() {
      if (this.isAndroid) {
        this.$refs.root.querySelector('.van-field__control').blur();
      } else {
        this.$emit('input', '');
      }
    },
    onSelect: function onSelect(express) {
      this.$emit('input', ((express.address || '') + ' ' + (express.name || '')).trim());
      this.$emit('select-search', express);
    },
    isString: function isString(str) {
      return typeof str === 'string';
    }
  }
});
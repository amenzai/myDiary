
import create from '../utils/create';
import Popup from '../mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b(), on: { "touchstart": _vm.onTouchStart, "touchend": _vm.onTouchEnd, "touchcancel": _vm.onTouchEnd } }, [_c('swipe', { ref: "swipe", attrs: { "initial-swipe": _vm.startPosition } }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', { key: index }, [_c('img', { class: _vm.b('image'), attrs: { "src": item } })]);
    }))], 1);
  },

  name: 'image-preview',

  mixins: [Popup],

  components: {
    Swipe: Swipe,
    SwipeItem: SwipeItem
  },

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      images: [],
      startPosition: 0
    };
  },


  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();

      var deltaTime = new Date() - this.touchStartTime;
      var _$refs$swipe = this.$refs.swipe,
          offsetX = _$refs$swipe.offsetX,
          offsetY = _$refs$swipe.offsetY;

      // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
});
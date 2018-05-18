
import create from '../utils/create';
import Clickoutside from '../utils/clickoutside';
import Touch from '../mixins/touch';

var THRESHOLD = 0.15;

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "clickoutside", rawName: "v-clickoutside:touchstart", value: _vm.onClick, expression: "onClick", arg: "touchstart" }], class: _vm.b(), on: { "click": function click($event) {
          _vm.onClick('cell');
        }, "touchstart": _vm.startDrag, "touchmove": _vm.onDrag, "touchend": _vm.endDrag, "touchcancel": _vm.endDrag } }, [_c('div', { class: _vm.b('wrapper'), style: _vm.wrapperStyle, on: { "transitionend": function transitionend($event) {
          _vm.swipe = false;
        } } }, [_vm.leftWidth ? _c('div', { class: _vm.b('left'), on: { "click": function click($event) {
          $event.stopPropagation();_vm.onClick('left');
        } } }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', { class: _vm.b('right'), on: { "click": function click($event) {
          $event.stopPropagation();_vm.onClick('right');
        } } }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },

  name: 'cell-swipe',

  mixins: [Touch],

  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },

  directives: {
    Clickoutside: Clickoutside
  },

  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },


  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: 'translate3d(' + this.offset + 'px, 0, 0)',
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },

  methods: {
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;

      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

      // right
      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus();
        // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      this.touchMove(event);
      var deltaX = this.deltaX;


      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      };
    },
    endDrag: function endDrag() {
      this.draging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      };
    },
    onClick: function onClick() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'outside';

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
});
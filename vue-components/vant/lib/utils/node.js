'use strict';

exports.__esModule = true;
/**
 * VNode helper
 */
exports.default = {
  name: 'van-node',
  functional: true,
  props: {
    node: Array
  },
  render: function render(h, ctx) {
    return ctx.props.node;
  }
};
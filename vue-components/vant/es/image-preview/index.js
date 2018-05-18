import Vue from 'vue';
import VueImagePreview from './image-preview';

var instance = void 0;

var initInstance = function initInstance() {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images) {
  var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!instance) {
    initInstance();
  }

  instance.images = images;
  instance.startPosition = startPosition;
  instance.value = true;
  instance.$on('input', function (show) {
    instance.value = show;
  });

  return instance;
};

ImagePreview.install = function () {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
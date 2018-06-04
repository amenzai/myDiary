'use strict';

exports.__esModule = true;
exports.Waterfall = exports.Uploader = exports.TreeSelect = exports.Toast = exports.Tag = exports.Tabs = exports.TabbarItem = exports.Tabbar = exports.Tab = exports.SwitchCell = exports.Switch = exports.SwipeItem = exports.Swipe = exports.SubmitBar = exports.Steps = exports.Stepper = exports.Step = exports.Slider = exports.Sku = exports.Search = exports.Row = exports.Rate = exports.RadioGroup = exports.Radio = exports.PullRefresh = exports.Progress = exports.Popup = exports.Picker = exports.PasswordInput = exports.Panel = exports.Pagination = exports.NumberKeyboard = exports.NoticeBar = exports.NavBar = exports.Locale = exports.Loading = exports.List = exports.Lazyload = exports.ImagePreview = exports.Icon = exports.GoodsActionMiniBtn = exports.GoodsActionBigBtn = exports.GoodsAction = exports.Field = exports.Dialog = exports.DatetimePicker = exports.CouponList = exports.CouponCell = exports.ContactList = exports.ContactEdit = exports.ContactCard = exports.CollapseItem = exports.Collapse = exports.Col = exports.Circle = exports.CheckboxGroup = exports.Checkbox = exports.CellSwipe = exports.CellGroup = exports.Cell = exports.Card = exports.Button = exports.BadgeGroup = exports.Badge = exports.Area = exports.AddressList = exports.AddressEdit = exports.Actionsheet = exports.version = exports.install = undefined;

var _actionsheet = require('./actionsheet');

var _actionsheet2 = _interopRequireDefault(_actionsheet);

var _addressEdit = require('./address-edit');

var _addressEdit2 = _interopRequireDefault(_addressEdit);

var _addressList = require('./address-list');

var _addressList2 = _interopRequireDefault(_addressList);

var _area = require('./area');

var _area2 = _interopRequireDefault(_area);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _badgeGroup = require('./badge-group');

var _badgeGroup2 = _interopRequireDefault(_badgeGroup);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _cellGroup = require('./cell-group');

var _cellGroup2 = _interopRequireDefault(_cellGroup);

var _cellSwipe = require('./cell-swipe');

var _cellSwipe2 = _interopRequireDefault(_cellSwipe);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = require('./checkbox-group');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

var _col = require('./col');

var _col2 = _interopRequireDefault(_col);

var _collapse = require('./collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _collapseItem = require('./collapse-item');

var _collapseItem2 = _interopRequireDefault(_collapseItem);

var _contactCard = require('./contact-card');

var _contactCard2 = _interopRequireDefault(_contactCard);

var _contactEdit = require('./contact-edit');

var _contactEdit2 = _interopRequireDefault(_contactEdit);

var _contactList = require('./contact-list');

var _contactList2 = _interopRequireDefault(_contactList);

var _couponCell = require('./coupon-cell');

var _couponCell2 = _interopRequireDefault(_couponCell);

var _couponList = require('./coupon-list');

var _couponList2 = _interopRequireDefault(_couponList);

var _datetimePicker = require('./datetime-picker');

var _datetimePicker2 = _interopRequireDefault(_datetimePicker);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _goodsAction = require('./goods-action');

var _goodsAction2 = _interopRequireDefault(_goodsAction);

var _goodsActionBigBtn = require('./goods-action-big-btn');

var _goodsActionBigBtn2 = _interopRequireDefault(_goodsActionBigBtn);

var _goodsActionMiniBtn = require('./goods-action-mini-btn');

var _goodsActionMiniBtn2 = _interopRequireDefault(_goodsActionMiniBtn);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _imagePreview = require('./image-preview');

var _imagePreview2 = _interopRequireDefault(_imagePreview);

var _lazyload = require('./lazyload');

var _lazyload2 = _interopRequireDefault(_lazyload);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _navBar = require('./nav-bar');

var _navBar2 = _interopRequireDefault(_navBar);

var _noticeBar = require('./notice-bar');

var _noticeBar2 = _interopRequireDefault(_noticeBar);

var _numberKeyboard = require('./number-keyboard');

var _numberKeyboard2 = _interopRequireDefault(_numberKeyboard);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

var _passwordInput = require('./password-input');

var _passwordInput2 = _interopRequireDefault(_passwordInput);

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _pullRefresh = require('./pull-refresh');

var _pullRefresh2 = _interopRequireDefault(_pullRefresh);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = require('./radio-group');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _rate = require('./rate');

var _rate2 = _interopRequireDefault(_rate);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _sku = require('./sku');

var _sku2 = _interopRequireDefault(_sku);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _step = require('./step');

var _step2 = _interopRequireDefault(_step);

var _stepper = require('./stepper');

var _stepper2 = _interopRequireDefault(_stepper);

var _steps = require('./steps');

var _steps2 = _interopRequireDefault(_steps);

var _submitBar = require('./submit-bar');

var _submitBar2 = _interopRequireDefault(_submitBar);

var _swipe = require('./swipe');

var _swipe2 = _interopRequireDefault(_swipe);

var _swipeItem = require('./swipe-item');

var _swipeItem2 = _interopRequireDefault(_swipeItem);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _switchCell = require('./switch-cell');

var _switchCell2 = _interopRequireDefault(_switchCell);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbarItem = require('./tabbar-item');

var _tabbarItem2 = _interopRequireDefault(_tabbarItem);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

var _treeSelect = require('./tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _uploader = require('./uploader');

var _uploader2 = _interopRequireDefault(_uploader);

var _waterfall = require('./waterfall');

var _waterfall2 = _interopRequireDefault(_waterfall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is auto gererated by build/bin/build-entry.js
var version = '1.1.2';
var components = [_actionsheet2.default, _addressEdit2.default, _addressList2.default, _area2.default, _badge2.default, _badgeGroup2.default, _button2.default, _card2.default, _cell2.default, _cellGroup2.default, _cellSwipe2.default, _checkbox2.default, _checkboxGroup2.default, _circle2.default, _col2.default, _collapse2.default, _collapseItem2.default, _contactCard2.default, _contactEdit2.default, _contactList2.default, _couponCell2.default, _couponList2.default, _datetimePicker2.default, _dialog2.default, _field2.default, _goodsAction2.default, _goodsActionBigBtn2.default, _goodsActionMiniBtn2.default, _icon2.default, _imagePreview2.default, _list2.default, _loading2.default, _locale2.default, _navBar2.default, _noticeBar2.default, _numberKeyboard2.default, _pagination2.default, _panel2.default, _passwordInput2.default, _picker2.default, _popup2.default, _progress2.default, _pullRefresh2.default, _radio2.default, _radioGroup2.default, _rate2.default, _row2.default, _search2.default, _sku2.default, _slider2.default, _step2.default, _stepper2.default, _steps2.default, _submitBar2.default, _swipe2.default, _swipeItem2.default, _switch2.default, _switchCell2.default, _tab2.default, _tabbar2.default, _tabbarItem2.default, _tabs2.default, _tag2.default, _toast2.default, _treeSelect2.default, _uploader2.default];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.install = install;
exports.version = version;
exports.Actionsheet = _actionsheet2.default;
exports.AddressEdit = _addressEdit2.default;
exports.AddressList = _addressList2.default;
exports.Area = _area2.default;
exports.Badge = _badge2.default;
exports.BadgeGroup = _badgeGroup2.default;
exports.Button = _button2.default;
exports.Card = _card2.default;
exports.Cell = _cell2.default;
exports.CellGroup = _cellGroup2.default;
exports.CellSwipe = _cellSwipe2.default;
exports.Checkbox = _checkbox2.default;
exports.CheckboxGroup = _checkboxGroup2.default;
exports.Circle = _circle2.default;
exports.Col = _col2.default;
exports.Collapse = _collapse2.default;
exports.CollapseItem = _collapseItem2.default;
exports.ContactCard = _contactCard2.default;
exports.ContactEdit = _contactEdit2.default;
exports.ContactList = _contactList2.default;
exports.CouponCell = _couponCell2.default;
exports.CouponList = _couponList2.default;
exports.DatetimePicker = _datetimePicker2.default;
exports.Dialog = _dialog2.default;
exports.Field = _field2.default;
exports.GoodsAction = _goodsAction2.default;
exports.GoodsActionBigBtn = _goodsActionBigBtn2.default;
exports.GoodsActionMiniBtn = _goodsActionMiniBtn2.default;
exports.Icon = _icon2.default;
exports.ImagePreview = _imagePreview2.default;
exports.Lazyload = _lazyload2.default;
exports.List = _list2.default;
exports.Loading = _loading2.default;
exports.Locale = _locale2.default;
exports.NavBar = _navBar2.default;
exports.NoticeBar = _noticeBar2.default;
exports.NumberKeyboard = _numberKeyboard2.default;
exports.Pagination = _pagination2.default;
exports.Panel = _panel2.default;
exports.PasswordInput = _passwordInput2.default;
exports.Picker = _picker2.default;
exports.Popup = _popup2.default;
exports.Progress = _progress2.default;
exports.PullRefresh = _pullRefresh2.default;
exports.Radio = _radio2.default;
exports.RadioGroup = _radioGroup2.default;
exports.Rate = _rate2.default;
exports.Row = _row2.default;
exports.Search = _search2.default;
exports.Sku = _sku2.default;
exports.Slider = _slider2.default;
exports.Step = _step2.default;
exports.Stepper = _stepper2.default;
exports.Steps = _steps2.default;
exports.SubmitBar = _submitBar2.default;
exports.Swipe = _swipe2.default;
exports.SwipeItem = _swipeItem2.default;
exports.Switch = _switch2.default;
exports.SwitchCell = _switchCell2.default;
exports.Tab = _tab2.default;
exports.Tabbar = _tabbar2.default;
exports.TabbarItem = _tabbarItem2.default;
exports.Tabs = _tabs2.default;
exports.Tag = _tag2.default;
exports.Toast = _toast2.default;
exports.TreeSelect = _treeSelect2.default;
exports.Uploader = _uploader2.default;
exports.Waterfall = _waterfall2.default;
exports.default = {
  install: install,
  version: version
};
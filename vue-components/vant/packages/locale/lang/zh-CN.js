export default {
  name: '名字',
  tel: '联系电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  complete: '完成',
  contact: '联系人',
  province: '选择省份',
  city: '选择城市',
  county: '选择地区',
  loadingTip: '加载中...',
  nameEmpty: '请填写名字',
  nameOverlimit: '名字过长，请重新输入',
  telInvalid: '请填写正确的手机号码或电话号码',
  telPlaceholder: '手机或固定电话',
  vanContactCard: {
    addText: '添加订单联系人信息'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanContactEdit: {
    delete: '删除联系人',
    confirmDelete: '确定要删除这个联系人么'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券码',
    tips: '使用优惠',
    reduce: '省',
    count: count => `您有 ${count} 个可用优惠`
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    disabled: '不可用优惠',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    unlimited: '无使用门槛',
    discount: discount => `${discount}折`,
    condition: (condition) => `满${condition}元可用`
  },
  vanAddressEdit: {
    area: '收件地区',
    addressText: '收货',
    areaEmpty: '请选择收件地区',
    addressOverlimit: '详细地址不能超过200个字符',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    deleteAddress: '删除收货地址',
    confirmDelete: '确定要删除这个收货地址么',
    label: {
      name: '收货人',
      postal: '邮政编码'
    },
    placeholder: {
      postal: '邮政编码(选填)'
    }
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '如街道、楼层、门牌号等'
  },
  vanAddressList: {
    address: '收货地址',
    add: '新增收货地址'
  },
  vanSku: {
    unavailable: '商品已经无法购买啦',
    spec: '请选择完整的规格',
    least: '至少选择一件',
    quota: quota => `限购${quota}件`,
    inventory: '库存不足',
    purchase: count => `您已购买${count}件`
  },
  vanSkuActions: {
    cart: '加入购物车',
    buy: '立即购买'
  },
  vanSkuMessages: {
    fill: '请填写',
    upload: '请上传',
    number: '请填写正确的数字格式留言',
    email: '请填写正确的邮箱',
    'id_no': '请填写正确的身份证号码',
    overlimit: '写的太多了，不要超过200字',
    onePic: '仅限一张',
    placeholder: {
      'id_no': '输入18位身份证号码',
      text: '输入文本',
      tel: '输入数字',
      email: '输入邮箱',
      date: '点击选择日期',
      time: '点击选择时间',
      textarea: '点击填写段落文本'
    }
  },
  vanSkuImgUploader: {
    or: '或',
    uploading: '正在上传...',
    rephoto: '重拍',
    photo: '拍照',
    reselect: '重新选择照片',
    select: '选择照片',
    maxSize: maxSize => `最大可上传图片为${maxSize}MB，请尝试压缩图片尺寸`
  },
  vanSkuStepper: {
    title: '购买数量',
    remain: count => `剩余${count}件`,
    quota: quota => `每人限购${quota}件`
  }
};

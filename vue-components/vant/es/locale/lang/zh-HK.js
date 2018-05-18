export default {
  name: '姓名',
  tel: '聯絡電話',
  save: '儲存',
  confirm: '確認',
  cancel: '取消',
  complete: '完成',
  contact: '聯絡人',
  province: '選擇省份',
  city: '選擇城市',
  county: '選擇地區',
  loadingTip: '加載中...',
  nameEmpty: '請填寫姓名',
  nameOverlimit: '姓名過長，請重新輸入',
  telInvalid: '請填寫正確的電話號碼',
  telPlaceholder: '電話號碼',
  vanContactCard: {
    addText: '添加訂單聯絡人信息'
  },
  vanContactList: {
    addText: '新增聯絡人'
  },
  vanContactEdit: {
    delete: '刪除聯絡人',
    confirmDelete: '確定要刪除這個聯絡人嗎'
  },
  vanPagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  vanSubmitBar: {
    label: '合計：'
  },
  vanCouponCell: {
    title: '優惠券碼',
    tips: '使用優惠',
    reduce: '省',
    count: function count(_count) {
      return '\u60A8\u6709 ' + _count + ' \u500B\u53EF\u7528\u512A\u60E0';
    }
  },
  vanCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    disabled: '不可用優惠',
    placeholder: '請輸入優惠碼'
  },
  vanCouponItem: {
    unlimited: '無使用門檻',
    discount: function discount(_discount) {
      return _discount + '\u6298';
    },
    condition: function condition(_condition) {
      return '\u6EFF' + _condition + '\u5143\u53EF\u7528';
    }
  },
  vanAddressEdit: {
    area: '收件地區',
    addressText: '收貨',
    areaEmpty: '請選擇收件地區',
    addressOverlimit: '詳細地址不能超過200個字元',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼格式不正確',
    defaultAddress: '設為默認收貨地址',
    deleteAddress: '刪除收貨地址',
    confirmDelete: '確定要刪除這個收貨地址麼',
    label: {
      name: '收貨人',
      postal: '郵政編碼'
    },
    placeholder: {
      postal: '郵政編碼(選填)'
    }
  },
  vanAddressEditDetail: {
    label: '詳細地址',
    placeholder: '如街道、樓層、門牌號等'
  },
  vanAddressList: {
    address: '收貨地址',
    add: '新增收貨地址'
  },
  vanSku: {
    unavailable: '商品已經無法購買啦',
    spec: '請選擇完整的規格',
    least: '至少選擇一件',
    quota: function quota(_quota) {
      return '\u9650\u8CFC' + _quota + '\u4EF6';
    },
    inventory: '庫存不足',
    purchase: function purchase(count) {
      return '\u60A8\u5DF2\u8CFC\u8CB7' + count + '\u4EF6';
    }
  },
  vanSkuActions: {
    cart: '加入購物車',
    buy: '立即購買'
  },
  vanSkuMessages: {
    fill: '請填寫',
    upload: '請上傳',
    number: '請填寫正確的數字格式留言',
    email: '請填寫正確的電郵地址',
    'id_no': '請填寫正確的身份證號碼',
    overlimit: '寫的太多了，不要超過200字',
    onePic: '僅限一張',
    placeholder: {
      'id_no': '輸入身份證號碼',
      text: '輸入文本',
      tel: '輸入數字',
      email: '輸入電郵地址',
      date: '點擊選擇日期',
      time: '點擊選擇時間',
      textarea: '點擊填寫段落文本'
    }
  },
  vanSkuImgUploader: {
    or: '或',
    uploading: '正在上傳...',
    rephoto: '重拍',
    photo: '拍照',
    reselect: '重新選擇照片',
    select: '選擇照片',
    maxSize: function maxSize(_maxSize) {
      return '\u6700\u5927\u53EF\u4E0A\u50B3\u5716\u7247\u70BA' + _maxSize + 'MB\uFF0C\u8ACB\u5617\u8A66\u58D3\u7E2E\u5716\u7247\u5C3A\u5BF8';
    }
  },
  vanSkuStepper: {
    title: '購買數量',
    remain: function remain(count) {
      return '\u5269\u9918' + count + '\u4EF6';
    },
    quota: function quota(_quota2) {
      return '\u6BCF\u4EBA\u9650\u8CFC' + _quota2 + '\u4EF6';
    }
  }
};
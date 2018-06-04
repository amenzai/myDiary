﻿export default {
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
    count: count => `您有 ${count} 個可用優惠`
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
    discount: discount => `${discount}折`,
    condition: (condition) => `滿${condition}元可用`
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
    quota: quota => `限購${quota}件`,
    inventory: '庫存不足',
    purchase: count => `您已購買${count}件`
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
    maxSize: maxSize => `最大可上傳圖片為${maxSize}MB，請嘗試壓縮圖片尺寸`
  },
  vanSkuStepper: {
    title: '購買數量',
    remain: count => `剩餘${count}件`,
    quota: quota => `每人限購${quota}件`
  }
};

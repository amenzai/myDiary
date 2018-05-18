'use strict';

exports.__esModule = true;
exports.default = {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  complete: 'Complete',
  contact: 'Name',
  province: 'Province',
  city: 'City',
  county: 'District',
  loadingTip: 'Loading...',
  nameEmpty: 'Name can not be empty',
  nameOverlimit: 'Name length exceeds limit',
  telInvalid: 'Malformed phone number',
  telPlaceholder: 'Phone',
  vanContactCard: {
    addText: 'Add contact info'
  },
  vanContactList: {
    addText: 'Add new contact'
  },
  vanContactEdit: {
    delete: 'Delete',
    confirmDelete: 'Are you sure you want to delete this contact?'
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next'
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Select coupon',
    reduce: 'Reduce',
    count: function count(_count) {
      return 'You have ' + _count + ' offers';
    }
  },
  vanCouponList: {
    empty: 'No coupons',
    exchange: 'Exchange',
    close: 'Close',
    disabled: 'Unavailable',
    placeholder: 'Coupon code'
  },
  vanCouponItem: {
    unlimited: 'Unlimited',
    discount: function discount(_discount) {
      return _discount * 10 + '% off';
    },
    condition: function condition(_condition) {
      return 'At least ' + _condition;
    }
  },
  vanAddressEdit: {
    area: 'Area',
    areaEmpty: 'Please select a receiving area',
    addressOverlimit: 'The length of the address can not exceed 200 characters',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
    deleteAddress: 'Delete the address',
    confirmDelete: 'Are you sure you want to delete this address?',
    label: {
      name: 'Receiver',
      postal: 'Postal'
    },
    placeholder: {
      postal: 'Postal code (optional)'
    }
  },
  vanAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address'
  },
  vanAddressList: {
    address: 'Address',
    add: 'Add new address'
  },
  vanSku: {
    unavailable: 'The product is no longer available for purchase',
    spec: 'Please select the full specification',
    least: 'Choose at least one',
    quota: function quota(_quota) {
      return 'Buy up to ' + _quota + ' items';
    },
    inventory: 'Inventory shortage',
    purchase: function purchase(count) {
      return 'You have purchased ' + count + ' items';
    }
  },
  vanSkuActions: {
    cart: 'Add to cart',
    buy: 'Buy'
  },
  vanSkuMessages: {
    fill: 'Please fill',
    upload: 'Please upload',
    number: 'Please fill in the correct number format message',
    email: 'Please fill in the correct email message',
    idcard: 'Please fill in the correct ID number message',
    overlimit: 'not more than 200 words',
    onePic: 'only one picture',
    placeholder: {
      'id_no': 'Idcard Number',
      text: 'Text',
      tel: 'Number',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      textarea: 'Text'
    }
  },
  vanSkuImgUploader: {
    or: 'Or',
    uploading: 'Uploading...',
    rephoto: 'Take Again',
    photo: 'Take',
    reselect: 'Reselect',
    select: 'Select Photo',
    maxSize: function maxSize(_maxSize) {
      return 'The upload limit is up to ' + _maxSize + 'MB\uFF0Cplease try to compress the photo';
    }
  },
  vanSkuStepper: {
    title: 'Quantity',
    remain: function remain(count) {
      return 'Remain ' + count + ' items';
    },
    quota: function quota(_quota2) {
      return 'Buy up to ' + _quota2 + ' items';
    }
  }
};
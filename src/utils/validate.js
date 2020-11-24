import { Toast } from 'vant'

// 验证手机号
export function phoneValid(phone) {
  let reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/
  if (phone == '' || phone == undefined) {
    Toast({
      message:'请输入手机号码',
      duration: 1500
    })
    return false
  } else if (!reg.test(phone)) {
    Toast({
      message:'手机格式不正确',
      duration: 1500
    })
    return false
  } else {
    return true
  }
}

// 验证密码
export function pwdValidSame(nPwd, cPwd) {
  if (nPwd == '' || nPwd == undefined) {
    Toast({
      message:'请输入密码',
      duration: 1500
    })
    return false
  } else if (!(nPwd == cPwd)) {
    Toast({
      message:'两次输入的密码不一致',
      duration: 1500
    })
    return false
  } else {
    return true
  }
}

// 验证不为空
export function required(value, message) {
  if (value) {
    return true
  } else {
    Toast({
      message,
      duration: 1500
    })
    return false
  }
}

// 验证金额
export function priceValid(num) {
  let reg = /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/
  if (!reg.test(num)) {
    Toast({
      message: '数值必须为整数或小数，小数点后不超过2位',
      duration: 1500
    })
    return false
  } else if (parseFloat(num).toFixed(2) <= 0) {
    Toast({
      message: '数值必须大于0',
      duration: 1500
    })
    return false
  } else {
    return true
  }
}
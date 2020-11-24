/**
 * 日期格式化(时间戳或Date对象转日期字符串)
 * @author 小炜 2019-07-11
 * @param {Numder|Date} date - 时间戳或Date对象
 * @returns {String} - 日期字符串: 2019-07-29
 */
export function dateFormat(date) {
  if (!(date instanceof Date)) { // 判断是否是 Date 对象
    // 时间戳转换为 Date 对象
    date = new Date(parseInt(date) * 1000)
  }
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  return year + '-' + turnNum(month) + '-' + turnNum(day) + ' ' + turnNum(hours) + ':' + turnNum(minutes) + ':' + turnNum(seconds)
}
/**
 * 小于10的正整数前面添加0
 * @author 小炜 2019-07-29
 * @param {Numder} val - 正整数
 * @returns {String}
 */
function turnNum(val) {
  if (val >= 0 && val <= 9) {
    val = '0' + val
  }
  return val
}
/**
 * 日期字符串或Date对象转时间戳
 * @author 小炜 2019-07-11
 * @param {String|Date} strDate - 日期字符串或Date对象
 * @returns {Numder} - 时间戳
 */
export function strtotime(strDate) {
  if (strDate instanceof Date) { // 判断是否是 Date 对象
    return strDate.getTime()
  } else {
    let dateTemp = strDate.split(' ')
    let arrDate = dateTemp[0].split('-')
    let arrTime = dateTemp[1].split(':')
    let date = new Date(
      arrDate[0],
      arrDate[1]-1,
      arrDate[2],
      arrTime[0],
      arrTime[1],
      arrTime[2]
    )
    return date.getTime()
  }
}

/**
 * 动态添加script标签(字符串中获取到script的内容或者src地址添加到页面中)
 * @author 小炜 2019-07-29
 * @param {String} str - 带script标签的js字符串
 */
export function addStrScript(str) {
  // 去除字符串的换行
  str = str.replace(/[\r\n]/g, '')
  // 取出字符串中的所有script标签
  let scriptArr = str.match(/<script[^>]*>(.*?)<\/script>/gi)
  // 循环取出script标签中的内容或者src
  if (scriptArr) {
    for (let i = 0, len = scriptArr.length; i < len; i++) {
      let scriptSrc = scriptArr[i]
      let scriptDom = document.createElement('script')
      scriptDom.type = 'text/javascript'
      if (scriptSrc.includes('src=')) {
        // match() 方法通过正则匹配返回一个数组 [1]获取数组下标1的内容(src中的路径)
        // eslint-disable-next-line no-useless-escape
        let src = scriptSrc.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)[1]
        // 赋值scriptDom的src地址
        scriptDom.src = src
      } else {
        let content = scriptSrc.match(/<script[^>]*>(.*?)<\/script>/i)[1]
        // 赋值scriptDom的内容
        scriptDom.appendChild(document.createTextNode(content))
      }
      document.body.appendChild(scriptDom)
    }
  }
}

/**
 * 设置网页关键字及描述
 * @author 小炜 2019-07-29
 * @param {String} key - 页面关键字
 * @param {desc} desc - 页面描述
 */
export function webDesc(key, desc) {
  document.querySelector('meta[name="keywords"]').setAttribute('content', key)
  document.querySelector('meta[name="description"]').setAttribute('content', desc)
}

/**
 * 对象数组拆分成数组，或者字符串
 * @author 小炜 2019-06-11
 * @param {Array} array - 需要拆分的对象数组
 * @param {String} key - 对象的key
 * @param {String} type - 返回的数据类型传入 str 返回字符串，不传返回数组
 * @returns {Array/String} - 拆分的数组或字符串
 */
export function splitObjArr(array, key, type) {
  let arr = array.map(item => item[key])
  return type == 'str' ? arr.toString() : arr
}

/**
 * 获取url问号后面的参数，传入属性获取值
 * @author 小炜 2019-07-29
 * @param {String} attr - 参数key
 * @returns {String} 参数值
 */
export function urlQueryVal(attr) {
  let reg = new RegExp('(^|&)' + attr + '=([^&]*)(&|$)', 'i')
  // window.location.search 获取从问号 (?) 开始的 URL（查询部分）
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  }
  return null
}

/**
 * 获取url问号后面的参数，获取全部返回一个对象
 * @author 小炜 2019-07-29
 * @returns {Object} 参数值
 */
export function urlQuery() {
  // encodeURI(uri) URI 进行编码
  // decodeURI(uri) URI 进行解码
  let url = window.location.search //获取url中"?"符后的字符串
  let theRequest = {}
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  return theRequest
}
/**
 * 数组去重，对象数组去不了
 * @author 小炜 2019-08-21
 */
export function dedupe(array) {
  return [...new Set(array)]
}
import request from '@/utils/request'

// 发送验证码（在组件中使用到不要更改函数名）
export function api_sendSms(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// 文件上传（在组件中使用到不要更改函数名）
export function api_upload(data) {
  return request({
    url: '/api/upload/fileUp',
    method: 'post',
    data
  })
}

// vrs-field3 选择联系人需要的接口 - 组织架构
export function api_contact(data) {
  return request({
    url: '/api/examine/team',
    method: 'post',
    data
  })
}
// vrs-field3 选择联系人需要的接口 - 组织架构搜索
export function api_contactSearch(data) {
  return request({
    url: '/api/examine/search',
    method: 'post',
    data
  })
}


// get请求列子
export function api_get(params) {
  return request({
    url: '',
    method: 'get',
    params
  })
}
// post请求列子
export function api_post(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}
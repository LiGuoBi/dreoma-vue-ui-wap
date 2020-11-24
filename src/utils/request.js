import axios from 'axios'
import { Toast } from 'vant'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://eibk.com', // api的base_url
  timeout: 5000 // 请求超时时间
})

// 请求数据拦截
service.interceptors.request.use(
  config => {
    config.headers['token'] = 'JaB5LpWsq0g7LR1l1bFFRQrsy5fePFqs'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应数据拦截
service.interceptors.response.use(
  response => {
    const code = response.data.code
    // code 等于0说明请求数据成功
    if (code !== 0) {
      // 请求失败的情况，可以在这里写失败的情况
      // 提示
      Toast.clear()
      Toast({
        message: response.data.msg,
        duration: 1500
      })
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
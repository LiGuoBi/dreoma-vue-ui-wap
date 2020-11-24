import router from './router'
import store from './store'
import { api_wxUrl, api_wxLogin } from '@/api/user'

// 路由前置守卫-判断是否有token
const whiteList = [] // 不重定向白名单
router.beforeEach(async (to, from, next) => {
  // 判断有没有 Token
  if (store.state.token) {
    // todo 获取用户信息
    next()
  } else {
    // 判断是否是免登录白名单，是就直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else { // 不是免登录，就去登录
      // 获取url参数 code, 没有返回 null
      let code = to.query.code
      if (code) { // 有code
        // 登录获取 token
        let { data } = await api_wxLogin({code})
        store.commit('set_token', data.token)
        if (data.status === 1) {
          // 登录成功保存token
          next()
        } else {
          // 跳转注册页面
          next({ path: '/registered'})
        }
      } else { // 没有code 跳转微信授权获取
        // 获取微信授权页地址
        let res = await api_wxUrl({
          mix_url: to.fullPath
        })
        window.location.href = res.data
        // let redirectUrl = encodeURIComponent(window.location.href)
      }
    }
  }
})
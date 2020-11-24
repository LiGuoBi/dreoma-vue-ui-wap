import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/cookie.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: {},
    regData: {}
  },
  mutations: {
    set_token(state, token) {
      setToken(token)
      state.token = token
    },
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {

  }
})

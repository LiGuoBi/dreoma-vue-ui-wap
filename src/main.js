import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Icon,
  CellGroup,
  Cell,
  Popup,
  Picker,
  Tab,
  Tabs,
  Panel,
  Collapse,
  CollapseItem,
  Toast,
  Button,
  Lazyload,
  Uploader,
  Checkbox,
  Switch
} from 'vant'
Vue.use(Icon)
  .use(CellGroup)
  .use(Cell)
  .use(Popup)
  .use(Picker)
  .use(Panel)
  .use(Tab)
  .use(Tabs)
  .use(Collapse)
  .use(CollapseItem)
  .use(Toast)
  .use(Button)
  .use(Lazyload)
  .use(Uploader)
  .use(Checkbox)
  .use(Switch)

// 在 vant Toast 的基础上封装轻提示
Vue.prototype.$vrsToast = function (str, type) {
	if (type == 'loading') {
		this.$toast({
      type: 'loading',
      message: str,
      forbidClick: true,
      duration: 0,
      loadingType: 'spinner'
    })
	} else {
    this.$toast.clear()
    this.$toast({
      message: str,
      duration: 1500
    })
	}
}
// 加载中的提示
// this.$vrsToast('加载中...', 'loading')
// 轻提示
// this.$vrsToast('成功提示')

// router守卫 实现微信登录
// import './wxLogin'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

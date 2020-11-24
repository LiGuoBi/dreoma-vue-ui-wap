import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      path: '',
      redirect: '/home',
      hidden: true // 如果设置为true，则项目不会显示在侧边栏中
    },
    {
      path: '/home',
      component: layout,
      redirect: '/home/index',
      hidden: true,
      children: [{
        path: 'index',
        name: 'home',
        component: () => import('@/views/home/index'),
      }]
    },
    {
      path: '/common',
      component: layout,
      redirect: '/common/header',
      meta: {
        title: '通用模块'
      },
      children: [{
          path: 'header',
          name: 'header',
          component: () => import('@/views/common/header'),
          meta: {
            title: '顶栏'
          }
        },
        {
          path: 'footer',
          name: 'footer',
          component: () => import('@/views/common/footer'),
          meta: {
            title: '底栏'
          }
        },
        {
          path: 'nav',
          name: 'nav',
          component: () => import('@/views/common/nav'),
          meta: {
            title: '导航'
          }
        },
        {
          path: 'tab',
          name: 'tab',
          component: () => import('@/views/common/tab'),
          meta: {
            title: 'tab切换'
          }
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: () => import('@/views/common/carousel'),
          meta: {
            title: '轮播图'
          }
        },
        {
          path: 'title',
          name: 'title',
          component: () => import('@/views/common/title'),
          meta: {
            title: '通用标题'
          }
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/common/list'),
          meta: {
            title: '列表'
          }
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('@/views/common/detail'),
          meta: {
            title: '详情(富文本)'
          }
        },
        {
          path: 'count-bar',
          name: 'count-bar',
          component: () => import('@/views/common/count-bar'),
          meta: {
            title: '统计'
          }
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/views/common/button'),
          meta: {
            title: '按钮'
          }
        },
        {
          path: 'form',
          name: 'form',
          component: () => import('@/views/common/form'),
          meta: {
            title: '表单'
          }
        },
        {
          path: 'tag',
          name: 'tag',
          component: () => import('@/views/common/tag'),
          meta: {
            title: '标签(tag)'
          }
        },
        {
          path: 'popup',
          name: 'popup',
          component: () => import('@/views/common/popup'),
          meta: {
            title: '弹窗(popup)'
          }
        },
        {
          path: 'picker',
          name: 'picker',
          component: () => import('@/views/common/picker'),
          meta: {
            title: '选择器(配合弹窗使用)'
          }
        },
        {
          path: 'steps',
          name: 'steps',
          component: () => import('@/views/common/steps'),
          meta: {
            title: '步骤条'
          }
        }
      ]
    },
    {
      path: '/about',
      component: layout,
      redirect: '/about/join',
      meta: {
        title: '企业介绍'
      },
      children: [{
          path: 'course',
          name: 'course',
          component: () => import('@/views/about/course'),
          meta: {
            title: '发展历程'
          }
        },
        {
          path: 'join',
          name: 'join',
          component: () => import('@/views/about/join'),
          meta: {
            title: '加入我们'
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/about/contact'),
          meta: {
            title: '联系我们'
          }
        }
      ]
    },
    {
      path: '/mall',
      component: layout,
      redirect: '/mall/list',
      meta: {
        title: '商城'
      },
      children: [{
          path: 'list',
          name: 'goods-list',
          component: () => import('@/views/mall/goods-list'),
          meta: {
            title: '产品列表'
          }
        },
      ]
    },
    {
      path: '/my',
      component: layout,
      redirect: '/my/header',
      meta: {
        title: '个人中心(我的)'
      },
      children: [
        {
          path: 'header',
          name: 'my-header',
          component: () => import('@/views/my/header'),
          meta: {
            title: '用户信息(头部)'
          }
        },
        {
          path: 'cell',
          name: 'my-cell',
          component: () => import('@/views/my/cell'),
          meta: {
            title: '单元格(cell)'
          }
        },
        {
          path: 'card',
          name: 'my-card',
          component: () => import('@/views/my/card'),
          meta: {
            title: '卡片(card)'
          }
        },
        {
          path: 'msg-list',
          name: 'my-msg-list',
          component: () => import('@/views/my/msg-list'),
          meta: {
            title: '消息列表'
          }
        },
        {
          path: 'order-list',
          name: 'my-order-list',
          component: () => import('@/views/my/order-list'),
          meta: {
            title: '订单列表'
          }
        },
        {
          path: 'order-detail',
          name: 'my-order-detail',
          component: () => import('@/views/my/order-detail'),
          meta: {
            title: '订单详情'
          }
        },
        {
          path: 'address-list',
          name: 'my-address-list',
          component: () => import('@/views/my/address-list'),
          meta: {
            title: '收货地址列表'
          }
        },
        {
          path: 'address-edit',
          name: 'my-address-edit',
          component: () => import('@/views/my/address-edit'),
          meta: {
            title: '编辑/添加收货地址'
          }
        },
      ]
    }
  ]
})
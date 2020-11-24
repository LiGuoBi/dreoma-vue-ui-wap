<!--
  name: 顶栏样式3
  author: 小炜
  desc:
    获取路由meta添加的标题
    不在首页显示返回按钮
    菜单使用 vant 的 popup (弹窗)实现，需要引入popup组件
-->
<template>
  <header class="vrs-header3 flex-v">
    <div class="vrs-icon vrs-back" v-if="back" @click="backHandle">
      <img src="./img/icon1.png" alt="返回图标">
    </div>
    <div class="vrs-title flex-item">标题</div>
    <div class="vrs-icon" @click="navShow = true">
      <img src="./img/icon2.png" alt="菜单图标">
    </div>
    <van-popup class="vrs-nav-popup" position="right" v-model="navShow">
      <div class="vrs-nav">

        <router-link class="vrs-nav-item flex-v" v-for="(nav, index) in navs" :key="index" :to="nav.to">
          <img class="nav-icon off" :src="nav.iconOff">
          <img class="nav-icon on" :src="nav.iocnOn">
          <span class="vrs-text">{{nav.text}}</span>
        </router-link>

      </div>
    </van-popup>
  </header>
</template>

<script>
export default {
  name: 'vrs-header3',
  data() {
    return {
      title: '',
      navShow: false,
      navs: [
        {
          text: '首页',
          to: '/home',
          iconOff: require('./img/nav1.png'),
          iocnOn: require('./img/nav1-on.png')
        },
        {
          text: '学习宣传',
          to: '/',
          iconOff: require('./img/nav2.png'),
          iocnOn: require('./img/nav2-on.png')
        }
      ]
    }
  },
  created() {
    this.title = this.$route.meta.title
  },
  computed: {
    back() {
      // 首页不显示返回按钮
      return this.$route.path != '/home'
    }
  },
  methods: {
    backHandle() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-header3 {
  height: 0.88rem;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #ebedf0;
  padding: 0 0.3rem;
  .vrs-icon {
    @include wh(0.32rem);
  }
  .vrs-back {
    margin-right: 0.2rem;
  }
  .vrs-title {
    color: #000;
    font-size: 0.32rem;
  }
  .vrs-nav-popup {
    width: 4rem;
    height: 100%;
  }
  .vrs-nav {
    padding-top: 0.6rem;
  }
  .vrs-nav-item {
    height: 0.88rem;
    padding-left: 0.7rem;
    border-left: 0.1rem solid transparent;
    color: #555555;
    font-size: 0.3rem;
    .nav-icon {
      width: 0.3rem;
      &.off {
        display: block;
      }
      &.on {
        display: none;
      }
    }
    .vrs-text {
      margin-left: 0.2rem;
    }
    &.active {
      border-left: 0.1rem solid #EC4A2D;
      color: #EC4A2D;
      .nav-icon {
        &.off {
          display: none;
        }
        &.on {
          display: block;
        }
      }
    }
  }
}
</style>
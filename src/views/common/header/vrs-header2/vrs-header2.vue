<!--
  name: 顶栏样式二
  author: 杨栋芬
  desc: 获取路由meta添加的标题
-->
<template>
  <header class="vrs-header2">
    <div class="vrs-icon vrs-left-icon" v-if="back" @click="backHandle">
      <img src="./img/icon-3.png">
    </div>
    <div class="vrs-icon vrs-left-icon" v-if="home" @click="homeHandle">
      <img src="./img/icon-2.png">
    </div>
    <div class="vrs-title">{{ title }}</div>
    <div class="vrs-icon vrs-nav-btn" @click="navShow = !navShow">
      <img src="./img/icon-1.png">
    </div>
    <transition name="vrs-head-nav-fade">
      <div class="vrs-header-nav" v-show="navShow">
        <router-link class="vrs-item" to="/home">首页</router-link>
        <router-link class="vrs-item" to="/home">关于我们</router-link>
        <router-link class="vrs-item" to="/home">高端定制</router-link>
        <router-link class="vrs-item" to="/home">定制展示</router-link> 
      </div>
    </transition>
    <div class="vrs-cover" v-show="navShow" @click="navHide"></div>
  </header>
</template>

<script>

export default {
  name: 'vrs-header2',
  components: {},
  data() {
    return {
      back: false,
      home: false,
      title: '',
      navShow: false
    }
  },
  created() {
    this.initHead(this.$route)
  },
  computed: {},
  methods: {
    // 通过路由地址判断header显示内容
    initHead(route) {
      this.title = route.meta.title
      const routeDepth = route.path.split('/').length
      // 路由层级大于2显示返回按钮
      if (routeDepth > 2) {
        this.back = true
        this.home = false
      } else {
        // 路由不在首页，显示回到首页按钮
        this.home = route.path != '/home'
        this.back = false
      }
    },
    backHandle() {
      this.$router.go(-1)
    },
    homeHandle() {
			this.$router.push('/home')
    },
    navHide() {
      this.navShow = false
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-header2 {
  height: 0.88rem;
  position: relative;
  background-color: #000;
  color: #fff;
  .vrs-title {
    text-align: center;
    font-size: $fs-lg;
    line-height: 0.88rem;
  }
  .vrs-icon {
    position: absolute;
    top: 0.09rem;
    padding: 0.2rem;
    img {
      @include wh(0.3rem);
    }
  }
  .vrs-nav-btn {
    right: 0;
  }
  .vrs-left-icon {
    left: 0;
  }
}
.vrs-header-nav {
  position: absolute;
  min-width: 1.7rem;
  top: 0.88rem;
  right: 0;
  box-shadow: 0px 2px 8px 0 rgba(10,59,119,0.2);
  background-color: #fff;
  z-index: 99;
  .vrs-item {
    + .vrs-item {
      border-top: 1px solid #f3f3f3;
    }
    padding: 0 0.2rem;
    height: 0.74rem;
    line-height: 0.74rem;
    text-align: center;
    color: #7D51FF;
    &.active {
      color: #fff;
      background-color: #7D51FF;
    }
  }
}
.vrs-cover {
  position: fixed;
  top: 0.88rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 98;
}
// 导航切换
.vrs-head-nav-fade-enter-active {
  transition: all 0.4s ease;
}
.vrs-head-nav-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.vrs-head-nav-fade-enter,
.vrs-head-nav-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
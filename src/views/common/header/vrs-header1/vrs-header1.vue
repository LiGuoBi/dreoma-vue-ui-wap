<!-- 头部 -->
<template>
  <header class="vrs-header1">
    <div class="vrs-icon left-icon" v-if="back" @click="backHandle">
      <img src="./img/pic1.png" />
    </div>
    <div class="vrs-title">{{ title }}</div>
    <div class="vrs-icon vrs-nav-btn" @click="navShow = !navShow">
      <img src="./img/pic2.png" />
    </div>
    <transition name="header1-nav-fade">
      <div class="vrs-header1-nav" v-show="navShow">
        <router-link class="vrs-item" to="/">导航1</router-link>
        <router-link class="vrs-item" to="/">导航2</router-link>
        <router-link class="vrs-item" to="/">导航3</router-link>
      </div>
    </transition>
    <div class="vrs-cover" v-show="navShow" @click="navShow = !navShow"></div>
  </header>
</template>

<script>
export default {
  name: 'vrs-header1',
  components: {},
  data() {
    return {
      title: '',
      navShow: false,
      back: false
    }
  },
  created() {
    this.title = this.$route.meta.title
    const routeDepth = this.$route.path.split('/').length
    if (routeDepth > 2) this.back = true
  },
  methods: {
    backHandle() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-header1 {
  height: 0.88rem;
  position: relative;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #e5e5e5;
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
    &.vrs-nav-btn {
      right: 0;
    }
    &.left-icon {
      left: 0;
    }
  }
  .vrs-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 98;
  }
}
.vrs-header1-nav {
  position: absolute;
  min-width: 1.7rem;
  top: 0.88rem;
  right: 0;
  box-shadow: 0px 2px 8px 0 rgba(10, 59, 119, 0.2);
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
    color: #0066ff;
    &.active {
      color: #fff;
      background-color: #0066ff;
    }
  }
}
// 导航切换
.header1-nav-fade-enter-active {
  transition: all 0.5s ease;
}
.header1-nav-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.header1-nav-fade-enter,
.header1-nav-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
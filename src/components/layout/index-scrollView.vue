<!-- UI展示页面布局 -->
<template>
  <div id="layout">
    <!-- 头部 -->
    <header class="header" v-if="header">
      <div class="icon left-icon" @click="backHandle">
        <img src="@/assets/img/back.png" />
      </div>
      <div class="title">{{ title }}</div>
    </header>

    <div class="scrollView">
      <div class="layout-main">
        <!-- 路由视图 -->
        <transition :name="transitionName">
          <keep-alive include="home">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      transitionName: 'slide-fade-left'
    }
  },
  computed: {
    header() {
      return this.$route.name != 'home'
    },
    title() {
      return this.$route.meta.title
    }
  },
  methods: {
    backHandle() {
      this.transitionName = 'slide-fade-right'
      setTimeout(() => {
        this.transitionName = 'slide-fade-left'
      }, 1000)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss'>
#layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .scrollView {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
  }
  .layout-main {
    position: relative;
    padding-bottom: 1px;
    min-height: calc(100vh - 0.88rem);
  }

  .header {
    height: 0.88rem;
    position: relative;
    background-color: #fff;
    color: #000;
    border-bottom: 1px solid #e5e5e5;
    .title {
      text-align: center;
      font-size: $fs-lg;
      line-height: 0.88rem;
    }
    .icon {
      position: absolute;
      top: 0.09rem;
      padding: 0.2rem;
      img {
        @include wh(0.3rem);
      }
    }
    .nav-btn {
      right: 0;
    }
    .left-icon {
      left: 0;
    }
  }
}
</style>
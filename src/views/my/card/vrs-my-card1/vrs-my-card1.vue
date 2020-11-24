<!-- 
  name: 我的-卡片导航1
  author: 小炜
 -->
<template>
  <div class="vrs-my-card1">
    <!-- <div class="vrs-nav-item flex-v">
      <img class="vrs-icon" src="./img/my-card1-2.png">
      <div class="flex-item">缴费明细</div>
      <span class="vrs-info">6</span>
      <img class="vrs-arrow" src="./img/my-card1-1.png">
    </div> -->

    <div class="vrs-nav-item flex-v" v-for="(nav, index) in navs" :key="index">
      <img class="vrs-icon" :src="nav.icon">
      <div class="flex-item">{{nav.title}}</div>
      <span class="vrs-info" v-if="nav.info">{{nav.info}}</span>
      <img class="vrs-arrow" src="./img/my-card1-1.png">
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'vrs-my-card1',
  components: {},
  data() {
    return {
      navs: [
        {
          icon: require('./img/my-card1-2.png'),
          title: '缴费明细',
          info: '3'
        },
        {
          icon: require('./img/my-card1-3.png'),
          title: '我的订单',
        },
        {
          icon: require('./img/my-card1-4.png'),
          title: '我的咨询',
          info: '5'
        },
        {
          icon: require('./img/my-card1-5.png'),
          title: '我的维权帮扶'
        },
        {
          icon: require('./img/my-card1-6.png'),
          title: '我的活动'
        },
        {
          icon: require('./img/my-card1-7.png'),
          title: '消息中心',
          info: '10'
        },
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-my-card1 {
  width: 6.9rem;
  margin: 0 auto;
  border-radius: 0.16rem;
  background-color: #fff;
  overflow: hidden;
  .vrs-nav-item {
    + .vrs-nav-item {
      border-top: 1px solid #EEEEEE;
    }
    height: 1rem;
    padding: 0 0.3rem;
    .vrs-icon {
      @include wh(0.4rem);
      margin-right: 0.2rem;
    }
    .vrs-arrow {
      @include wh(0.16rem, 0.28rem);
      margin-left: 0.14rem;
    }
    .vrs-info {
      background-color: #EC4A2D;
      color: #fff;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      min-width: 16px;
      border-radius: 8px;
      text-align: center;
      font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
      padding: 0 4px;
    }
  }
}
</style>
<!-- 
  name: 我的-头部1
  author: 小炜
 -->
<template>
  <div class="vrs-my-header1">
    <div class="vrs-user-info bg" :style="{'background-image': 'url('+ require('./img/my-header1-1.png') +')'}">
      <div class="vrs-personal flex-v">
        <img class="avatar vrs-avatar" src="./img/my-header1-3.png">
        <div class="flex-item single-txt vrs-name">小炜</div>
      </div>
      <img class="vrs-mall-link" src="./img/my-header1-2.png" @click="toMall">
    </div>
    <!-- 财富 -->
    <div class="vrs-my-asset flex">
      <div class="flex-item flex-c column">
        <img class="vrs-icon" src="./img/my-header1-4.png">
        <span class="vrs-unit">金币</span>
        <span class="vrs-money">2088</span>
        <router-link class="vrs-btn" tag="button" to="/">充值</router-link>
      </div>
      <div class="flex-item flex-c column">
        <img class="vrs-icon" src="./img/my-header1-5.png">
        <span class="vrs-unit">积分</span>
        <span class="vrs-money">4088</span>
        <router-link class="vrs-btn" tag="button" to="/">明细</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-my-header1',
  data() {
    return {

    }
  },
  computed: {},
  methods: {
    toMall() {
      // 商城点击事件
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-my-header1 {
  .vrs-user-info {
    position: relative;
    height: 4.2rem;
    z-index: 1;
    .vrs-mall-link {
      position: absolute;
      top: 0.3rem;
      right: 0;
      z-index: 3;
      @include wh(2.04rem, 0.68rem);
    }
    .vrs-personal {
      padding: 0.6rem 0.3rem 0;
    }
    .vrs-avatar {
      @include wh(1.3rem);
      border: 0.1rem solid rgba(255, 255, 255, 0.3);
    }
    .vrs-name {
      color: #fff;
      font-size: 0.34rem;
      margin-left: 0.24rem;
    }
  }
  .vrs-my-asset {
    width: 6.9rem;
    height: 3rem;
    border-radius: 0.16rem;
    background-color: #fff;
    margin: -1.76rem auto 0;
    box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
    position: relative;
    z-index: 2;
    .vrs-icon {
      @include wh(0.5rem);
    }
    .vrs-unit {
      margin-top: 0.2rem;
      font-size: 0.26rem;
    }
    .vrs-money {
      font-size: 0.4rem;
      padding: 0.1rem 0 0.14rem;
    }
    .vrs-btn {
      width: 1.2rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #EC4A2D;
      color: #EC4A2D;
    }
  }
}
</style>
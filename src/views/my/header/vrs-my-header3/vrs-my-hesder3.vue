<!-- 
    name:我的头部3
    author:杨栋芬
 -->
<template>
  <div class="vrs-my-header3">
    <div class="vrs-top bg" :style="{'background-image': 'url('+ banner +')'}"></div>
    <div class="vrs-main">
      <div class="vrs-info flex-v">
        <img class="avatar vrs-avatar" src="./img/avatar.png" />
        <div class="vrs-gold flex-item">
          <p>我的金币</p>
          <P class="vrs-money single-txt">998金币</P>
        </div>
        <button class="vrs-recharge">充值</button>
      </div>
      <div class="vrs-desc flex-v between">
        <div class="vrs-detail flex-v">
          <img class="vrs-img" src="./img/icon-1.png" />
          <span>金币明细</span>
        </div>
        <div class="vrs-detail flex-v">
          <img class="vrs-img" src="./img/icon-2.png" />
          <span>兑换记录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-my-header3',
  components: {},
  data() {
    return {
      banner: require('./img/banner.png')
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-my-header3 {
  .vrs-top {
    height: 3.2rem;
  }
  .vrs-main {
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0.3rem;
    margin: -0.8rem 0.3rem 0;
    position: relative;
    z-index: 2;
    background-color: #fff;
  }
  .vrs-info {
    .vrs-avatar {
      @include wh(1.1rem);
      padding-right: 0.35rem;
    }
    .vrs-gold {
      font-size: 0.26rem;
      color: #555;
    }
    .vrs-money {
      font-size: 0.4rem;
      color: #ec4a2d;
      padding-top: 0.1rem;
      max-width: 3rem;
    }
    .vrs-recharge {
      background: #ec4a2d;
      border-radius: 0.24rem;
      padding: 0.05rem 0.4rem;
      font-size: 0.28rem;
      color: #fff;
    }
  }
  .vrs-desc {
    padding: 0.5rem 0.5rem 0;
    .vrs-detail {
      font-size: 0.24rem;
      color: #555;
    }
    .vrs-img {
      @include wh(0.4rem);
      padding-right: 0.2rem;
    }
  }
}
</style>
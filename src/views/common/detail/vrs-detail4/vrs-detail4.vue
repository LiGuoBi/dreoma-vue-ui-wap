<!--
  name: 卡片详情4
  author: 杨栋芬
-->
<template>
  <div class="vrs-datail4">
    <img class="vrs-top" src="./img/payment.png" />
    <div class="vrs-main">
      <div class="vrs-card">
        <p class="vrs-title">会费</p>
        <p class="vrs-amount">
          <span>缴费金额：</span>
          <span class="vrs-price">998元</span>
        </p>
        <p class="vrs-amount">缴费期限：2019-06-28—2019-07-28</p>
        <p class="vrs-amount">会费周期：2019-06-28—2020-07-28</p>
      </div>
      <div class="vrs-card">
        <p class="vrs-title">会费说明</p>
        <div class="vrs-amount lh">
          会费为一个团体主要经济来源，但不一定是唯一的来源。根据会的性质、使命、
          及团体成员的权利与义务不同，会费的来源、收取方式、管理方式、用途有着不同的区别。 
          如某些社会团体会费的管理方式主要是采取政府部门不统一制定社会团体的会费标准。
        </div>
      </div>
      <button class="vrs-submit">立即缴费</button>
      <button class="vrs-submit gray">已缴费</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-detail4',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-datail4 {
  .vrs-top {
    height: 3.2rem;
  }
  .vrs-title {
    font-size: 0.32rem;
    color: #333;
  }
  .vrs-card {
    + .vrs-card {
      margin-top: 0.3rem;
    }
    background: #ffffff;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0.4rem 0.3rem;
  }
  .vrs-main {
    position: relative;
    margin: -0.6rem 0.3rem 0;
    z-index: 2;
    .vrs-amount {
      font-size: 0.24rem;
      color: #888;
      padding-top: 0.24rem;
    }
    .vrs-price {
      color: #ec4a2d;
      font-size: 0.3rem;
    }
    .vrs-submit {
      @include wh(6.5rem, 0.9rem);
      background: #ec4a2d;
      margin: 0.9rem auto 0;
      font-size: 0.34rem;
      color: #ffffff;
      border-radius: 0.08rem;
      &.gray {
        background: #C6C6C6;
      }
    }
  }
}
</style>
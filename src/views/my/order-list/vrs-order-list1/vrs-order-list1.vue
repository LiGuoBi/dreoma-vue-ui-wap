<!--
  name: 订单列表1
  author: 小炜
-->
<template>
  <div class="vrs-order-list1">
    <div class="vrs-order-item" v-for="(item,index) in 2" :key="index">
      <div class="vrs-head flex-v between">
        <span class="order-code">订单编号：2374738785</span>
        <span class="vrs-red">待付款</span>
      </div>
      <div class="vrs-line"></div>
      <div class="vrs-item flex-v" v-for="(item,index) in 2" :key="index">
        <img class="vrs-images cover" src="./img/goods-1.png" />
        <div class="flex-item">
          <p class="vrs-title multiline-txt">稻花香东北大米&nbsp;10公斤</p>
          <p class="vrs-price">98金币</p>
        </div>
        <div class="vrs-num">x1</div>
      </div>
      <div class="vrs-line"></div>
      <div class="vrs-foot">
        <div class="vrs-price flex l-end">
          <span>共计：</span>
          <span class="vrs-red">187金币</span>
        </div>
        <div class="vrs-btn-wrap flex l-end">
          <button class="vrs-btn gray-btn">取消订单</button>
          <button class="vrs-btn">付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-order-list1',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-order-list1 {
  padding: 0.2rem 0.3rem 0;
  .vrs-order-item {
    + .vrs-order-item {
      margin-top: 0.2rem;
    }
    background: #fff;
    border-radius: 0.08rem;
    .vrs-line {
      @include wh(100%, 1px);
      background-color: #eee;
    }
    .vrs-red {
      color: #ec4a2d;
    }
  }
  .vrs-head {
    height: 0.9rem;
    font-size: 0.28rem;
    margin: 0 0.2rem;
  }
  .vrs-item {
    margin: 0.2rem 0;
    padding: 0.2rem;
    .vrs-images {
      @include wh(1.5rem);
      margin-right: 0.2rem;
    }
    .vrs-title {
      line-height: 0.4rem;
      max-height: 0.8rem;
      margin-bottom: 0.16rem;
    }
    .vrs-price {
      font-size: 0.36rem;
      color: #ec4a2d;
    }
    .vrs-num {
      font-size: 0.3rem;
      color: #888;
      margin-left: 0.2rem;
    }
  }
  .vrs-foot {
    padding: 0.4rem 0.2rem;
    .vrs-price {
      font-size: 0.36rem;
      color: #333;
    }
    .vrs-btn-wrap {
      padding-top: 0.3rem;
    }
    .vrs-btn {
      min-width: 1.35rem;
      height: 0.5rem;
      padding: 0 0.2rem;
      font-size: 0.24rem;
      border-radius: 0.25rem;
      margin-left: 0.1rem;
      white-space: nowrap;
      border: 1px solid #ec4a2d;
      color: #ec4a2d;
      &.gray-btn {
        border: 1px solid #c6c6c6;
        color: #c6c6c6;
      }
    }
  }
}
</style>
<!--
  name: 列表样式6
  author: 杨栋芬
-->
<template>
  <div class="vrs-list6">
    <div class="vrs-item" v-for="(item,index) in 1" :key="index">
      <div class="vrs-title">
        会费
        <span class="vrs-txt-red">988元</span>
      </div>
      <div class="vrs-time">缴费期限：2019-06-28—2019-07-28</div>
      <div class="vrs-look flex-v between">
        <p class="vrs-info">查看详情&nbsp;&gt;</p>
        <button class="vrs-donation">去缴费</button>
        <!-- <button class="vrs-donation vrs-dis">已缴费</button> -->
      </div>
      <!-- <div class="vrs-cover flex-c lh">
        <span>不在缴费期内</span>
      </div> -->
    </div>

    <div class="vrs-item">
      <div class="vrs-title">
        会费
        <span class="vrs-txt-red">988元</span>
      </div>
      <div class="vrs-time">缴费期限：2019-06-28—2019-07-28</div>
      <div class="vrs-look flex-v between">
        <p class="vrs-info">查看详情&nbsp;&gt;</p>
        <!-- <button class="vrs-donation">去缴费</button> -->
        <button class="vrs-donation vrs-dis">已缴费</button>
      </div>
      <div class="vrs-cover flex-c lh">
        <span>不在缴费期内</span>
      </div>
    </div>

    <div class="vrs-item">
      <div class="vrs-title">为相依为命的独居姐弟捐款</div>
      <div class="vrs-time">缴费期限：2019-06-28—2019-07-28</div>
      <div class="vrs-look flex-v between">
        <p class="vrs-info">查看详情&nbsp;&gt;</p>
        <button class="vrs-donation">去捐款</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vrs-list6',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list6 {
  padding: 0.2rem 0.3rem;
  .vrs-item {
    + .vrs-item {
      margin-top: 0.3rem;
    }
    position: relative;
    background: #fff;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border-radius: 0.16rem;
    padding: 0.4rem 0.3rem;
    .vrs-title {
      font-size: 0.32rem;
      line-height: 0.46rem;
    }
    .vrs-txt-red {
      color: #ec4a2d;
      padding: 0 0.1rem;
    }
    .vrs-time {
      padding: 0.18rem 0;
      font-size: 0.24rem;
      color: #888;
    }
  }
  .vrs-cover {
    position: absolute;
    @include wh(100%);
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0.34rem;
    color: #fff;
    padding: 0.3rem;
    top: 0;
    left: 0;
    text-align: center;
  }
  .vrs-look {
    font-size: 0.28rem;
    .vrs-info {
      color: #3c91fa;
    }
    .vrs-donation {
      height: 0.48rem;
      line-height: 0.48rem;
      text-align: center;
      white-space: nowrap;
      background-color: #ec4a2d;
      border-radius: 0.24rem;
      color: #fff;
      padding: 0 0.2rem;
      &.vrs-dis {
        background-color: #fff5f4;
        color: #ec4a2d;
      }
    }
  }
}
</style>
<!-- 
  name: 文章详情页2
  author: 小炜
 -->
<template>
  <div class="vrs-detail2">
    <div class="vrs-title">数字货币交易所还是一门好生意</div>
    <p class="vrs-date">2019-06-21 07:30</p>
    <div class="vrs-rich-text">
      左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，
      许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，
      监管所带来的不确定性也越来越大。
    </div>
    <div class="vrs-bottom-bar flex">
      <div class="flex-item flex-v">
        <img class="vrs-icon" src="./img/detail2-1.png" alt="detail2-1">
        <span>999</span>
      </div>
      <div class="flex-item flex-c">
        <img class="vrs-icon" src="./img/detail2-2.png" alt="detail2-2">
        <!-- <img class="vrs-icon" src="./img/detail2-3.png" alt="detail2-3"> -->
        <span>9999</span>
      </div>
      <div class="flex-item flex-v l-end">
        <!-- <img class="vrs-icon" src="./img/detail2-4.png" alt="detail2-4"> -->
        <img class="vrs-icon" src="./img/detail2-5.png" alt="detail2-5">
        <span>收藏</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vrs-detail2',
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-detail2 {
  position: relative;
  padding: 0.3rem 0.3rem 1.3rem;
  .vrs-bottom-bar {
    // 根据 vrs-detail2 定位，实际使用时请根据浏览器定位 fixed
    // position: fixed;
    position: absolute;
    width: 100%;
    height: 1rem;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #EEE;
    padding: 0 0.3rem;
    .vrs-icon {
      @include wh(0.38rem);
      margin-right: 0.1rem;
    }
  }
  .vrs-title {
    font-size: 0.48rem;
    line-height: 0.7rem;
  }
  .vrs-date {
    color: #9B9B9B;
    padding: 0.2rem 0;
  }
  .vrs-rich-text {
    line-height: 0.44rem;
  }
}
</style>
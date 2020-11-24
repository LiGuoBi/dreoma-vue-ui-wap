<!-- 
  name: 导航3
  author: 杨栋芬
 -->
<template>
  <div class="vrs-nav3">
    <img class="vrs-banner" src="./img/banner.png" />
    <div class="vrs-list">
      <div class="vrs-item flex-v" v-for="(item,index) in 2" :key="index">
        <img class="vrs-mark" src="./img/icon-1.png" />
        <div class="vrs-dec flex-item">
          <div class="vrs-main-dec">代表提案</div>
          <div class="vrs-subtitle">有问题&nbsp;找工会</div>
        </div>
        <div class="vrs-look">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-nav3',
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-nav3 {
  .vrs-banner {
    height: 3.2rem;
  }
  .vrs-list {
    margin: -0.8rem 0.3rem 0.2rem;
    position: relative;
    z-index: 2;
  }
  .vrs-item {
    width: 100%;
    height: 1.8rem;
    background: #fff;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    .vrs-mark {
      @include wh(1.2rem);
      border-radius: 0.25rem;
      margin-right: 0.3rem;
    }
    .vrs-dec {
      .vrs-main-dec {
        font-size: 0.32rem;
        color: #333;
        padding-bottom: 0.1rem;
      }
      .vrs-subtitle {
        font-size: 0.28rem;
        color: #888;
      }
    }
    .vrs-look {
      background: #fff5f4;
      border-radius: 0.24rem;
      min-width: 1.4rem;
      height: 0.48rem;
      padding: 0 0.15rem;
      font-size: 0.28rem;
      white-space: nowrap;
      line-height: 0.48rem;
      text-align: center;
      color: #ec4a2d;
      margin: auto 0;
    }
  }
}
</style>
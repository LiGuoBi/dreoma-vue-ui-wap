<!-- 
  name: 列表4
  author: 小炜
 -->
<template>
  <div class="vrs-list4">
    <div class="vrs-item4" v-for="i in 3" :key="i">
      <img class="vrs-pic" v-lazy="require('./img/list4-2.png')">
      <div class="vrs-title single-txt">多币种灵活组合，助您优化资产</div>
      <div class="flex-v">
        <img class="vrs-time-icon" src="./img/list4-1.png">
        <p class="flex-item vrs-time">2019-07-01 12:00—2019-07-01 16:00</p>
        <!-- 判断状态 -->
        <span v-if="i == 1" class="vrs-green">进行中</span>
        <span v-if="i == 2" class="vrs-red">未开始</span>
        <span v-if="i == 3" class="vrs-gray">已结束</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list4',
  // props: {
  //   list: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list4 {
  background-color: #F7F8FA;
}
.vrs-item4 {
  + .vrs-item4 {
    margin-top: 0.2rem;
  }
  background-color: #fff;
  padding: 0.4rem 0.3rem;
  .vrs-pic {
    height: 3.45rem;
    width: 6.9rem;
    border-radius: 0.16rem;
    object-fit: cover;
  }
  .vrs-title {
    font-size: 0.34rem;
    padding: 0.5rem 0 0.3rem;
    font-weight: bold;
  }
  .vrs-time-icon {
    @include wh(0.9rem, 0.4rem);
    margin-right: 0.2rem;
  }
  .vrs-time {
    font-size: 0.24rem;
    color: #999;
  }
  .vrs-gray {
    color: #888888;
  }
  .vrs-red {
    color: #EC4A2D;
  }
  .vrs-green {
    color: #52AD36;
  }
}
</style>
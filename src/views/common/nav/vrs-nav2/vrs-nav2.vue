<!--
  name: 导航2
  author: 杨栋芬
-->
<template>
  <div class="vrs-nav2">
    <div class="vrs-item flex-c" v-for="(item,index) in 2" :key="index">
      <div class="vrs-title flex-item">代表提案</div>
      <img src="./img/icon-1.png" class="vrs-icon" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-nav2',
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
.vrs-nav2 {
  overflow: hidden;
  .vrs-item {
    height: 1.2rem;
    background: #ffffff;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0 0.3rem;
    margin: 0.2rem 0.3rem;
    font-size: 0.28rem;
    color: #333333;
    .vrs-icon {
      @include wh(0.17rem, 0.3rem);
    }
  }
}
</style>
<!--
  name: 列表样式7
  author: 杨栋芬
-->
<template>
  <div class="vrs-list7 flex-wrap">
    <div class="vrs-item" v-for="(item,index) in 4" :key="index">
      <img class="vrs-cover" src="./img/cover.png" />
      <div class="vrs-time flex-v">
        <img class="vrs-img" src="./img/play2.png" />
        <span class="vrs-date">06:32</span>
      </div>
      <p class="multiline-txt vrs-title">这是标题</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list7',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list7 {
  padding: 0 0 0.1rem 0.2rem;
  .vrs-item {
    position: relative;
    width: 3.45rem;
    height: 4.9rem;
    margin-top: 0.4rem;
    background: #ffffff;
    box-shadow: 0 2px 0.08rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
    overflow: hidden;
    margin-right: 0.2rem;
  }
  .vrs-cover {
    object-fit: cover;
    height: 3.45rem;
  }
  .vrs-time {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    padding: 0 0.1rem;
    height: 0.34rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.18rem;
    .vrs-img {
      width: 0.131rem;
      height: 0.16rem;
      margin-right: 0.1rem;
    }
    .vrs-date {
      font-size: 0.22rem;
      line-height: 0.32rem;
      color: #ffffff;
    }
  }
  .vrs-title {
    padding: 0.22rem 0.13rem 0 0.18rem;
    font-size: 0.28rem;
    line-height: 0.48rem;
    max-height: 0.96rem;
    color: #ffc048;
  }
}
</style>
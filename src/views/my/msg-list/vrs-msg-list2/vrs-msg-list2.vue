<!--
  name: 消息列表样式2
  author: 杨栋芬
  desc: 列表样式2
-->
<template>
  <div class="vrs-msg-list2">
    <div class="vrs-item" v-for="(item,index) in 2" :key="index">
      <div class="vrs-title">审批标题审批标题审批标题审批标题审批标题</div>
      <div class="vrs-time">2019-07-12 09:12</div>
      <div class="vrs-foot flex">
        <div class="vrs-status flex-item">未审批</div>
        <!-- <div class="vrs-status flex-item green-txt">未审批</div> -->
        <!-- <div class="vrs-status flex-item red-txt">未审批</div> -->

        <button class="vrs-mark">修改</button>
        <button class="vrs-mark red-btn">修改</button>
        <button class="vrs-mark green-btn">修改</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-msg-list2',
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
.vrs-msg-list2 {
  padding: 0.2rem 0.3rem;
  .vrs-item {
    background-color: #fff;
    border-radius: 0.08rem;
    margin-bottom: 0.1rem;
    padding: 0.4rem 0.2rem 0.2rem;
    .vrs-title {
      color: #000000;
      line-height: 0.4rem;
    }
    .vrs-time {
      color: #888888;
      padding: 0.2rem 0;
      border-bottom: 1px solid #eee;
    }
  }
  .vrs-foot {
    padding-top: 0.25rem;
  }
  .vrs-status {
    font-size: 0.26rem;
    color: #fbad20;
    margin: auto 0;
    &.green-txt {
      color: #61c579;
    }
    &.red-txt {
      color: #ec4a2d;
    }
  }
  .vrs-mark {
    min-width: 1.35rem;
    height: 0.5rem;
    border-radius: 25px;
    margin-left: 0.1rem;
    white-space: nowrap;
    padding: 0 0.2rem;
    border: 1px solid #fbad20;
    color: #fbad20;
    &.green-btn {
      border: 1px solid #61c579;
      color: #61c579;
    }
    &.red-btn {
      border: 1px solid #ec4a2d;
      color: #ec4a2d;
    }
  }
}
</style>
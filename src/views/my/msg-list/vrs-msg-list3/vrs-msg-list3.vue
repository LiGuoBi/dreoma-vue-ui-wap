<!--
  name: 消息列表样式3
  author: 杨栋芬
  desc: 列表样式3
-->
<template>
  <div class="vrs-msg-list3">
    <div class="vrs-item" v-for="(item,index) in 2" :key="index">
      <div class="vrs-title single-txt">关于此次大会的一些建议</div>
      <div class="flex-v">
        <div class="vrs-dec flex-item single-txt">
          <span class="vrs-txt">发件人：李成海</span>
          <span>2019-07-12 12:23</span>
        </div>
        <div class="vrs-mark">未读</div>
        <!-- <div class="vrs-mark green-btn">已读</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-msg-list3',
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
.vrs-msg-list3 {
  overflow: hidden;
  .vrs-item {
    height: 1.8rem;
    background: #fff;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0.4rem 0.3rem 0;
    margin: 0.2rem 0.3rem;
    .vrs-title {
      font-size: 0.32rem;
      color: #333;
      padding-bottom: 0.18rem;
    }
    .vrs-dec {
      font-size: 0.24rem;
      color: #888;
    }
    .vrs-txt {
      margin-right: 0.1rem;
    }
    .vrs-mark {
      min-width: 1.4rem;
      height: 0.48rem;
      line-height: 0.48rem;
      font-size: 0.28rem;
      text-align: center;
      padding: 0 0.2rem;
      border-radius: 0.24rem;
      margin-left: 0.1rem;
      white-space: nowrap;
      color: #ec4a2d;
      background-color: #fff5f4;
      &.green-btn{
        color: #61c579;
        background-color: #f4fff5;
      }
    }
  }
}
</style>
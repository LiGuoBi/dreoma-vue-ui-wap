<!--
  name: 消息列表样式4
  author: 小炜
-->
<template>
  <div class="vrs-msg-list4">
    <div class="vrs-item flex-v" v-for="item in 4" :key="item">
      <div class="flex-item ovh">
        <p class="vrs-title single-txt">金币充值</p>
        <p class="vrs-date">2019-06-16 12:23</p>
      </div>
      <div class="vrs-green-txt" v-if="item % 2 == 0">+99</div>
      <div class="vrs-red-txt" v-else>-99</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-msg-list4',
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
.vrs-msg-list4 {
  padding: 0.2rem 0.3rem 0;
  .vrs-item {
    margin-bottom: 0.1rem;
    height: 1.4rem;
    background: #fff;
    border-radius: 0.08rem;
    padding: 0.3rem 0.2rem;
  }
  .vrs-red-txt {
    color: #EC4A2D;
  }
  .vrs-green-txt {
    color: #61c579;
  }
  .vrs-title {
    margin-bottom: 0.1rem;
  }
  .vrs-date {
    font-size: 0.24rem;
    color: #888;
  }
}
</style>
<!-- 
  name: 卡片风格的详情3
  author: 小炜
 -->
<template>
  <div class="vrs-detail3">
    <div class="vrs-card">
      <div class="vrs-card-title bg">标题</div>
      <div class="vrs-rich-text lh">
        为了保障经济困难的公民获得必要的法律服务，促进和规范法律援助工作，制定本条例。
        符合本条例规定的公民，可以依照本条例获得法律咨询、代理、刑事辩护等无偿法律服务。
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-detail3',
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
.vrs-detail3 {
  background-color: #FFF5F4;
  padding: 0.3rem;
  .vrs-card {
    background-color: #fff;
    border-radius: 0.16rem;
    padding: 0 0.3rem 0.3rem;
  }
  .vrs-card-title {
    @include wh(2.4rem, 0.5rem);
    line-height: 0.5rem;
    text-align: center;
    color: #fff;
    margin: 0 auto 0.3rem;
    background-image: url(data:image/png;base64,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);
  }
  .vrs-rich-text {
    color: #555555;
  }
}
</style>
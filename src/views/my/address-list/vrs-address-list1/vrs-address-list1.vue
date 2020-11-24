<!-- 
  name: 收货地址列表
  author: 小炜
 -->
<template>
  <div class="vrs-address-list1">
    <div class="vrs-card vrs-add flex-v">
      <i class="bg vrs-place-icon"></i>
      <span class="flex-item">添加收货地址</span>
      <i class="bg vrs-arrow-right"></i>
    </div>
    <div class="vrs-card vrs-item flex-v" v-for="item in 4" :key="item">
      <div class="flex-item">
        <div class="flex-v">
          <span class="vrs-txt">张炜迪</span>
          <span class="vrs-txt vrs-phone">13577151539</span>
          <span class="vrs-tag">默认</span>
        </div>
        <div class="vrs-address">云南省昆明市西山区福海街道日新中路润城第二大道34号725室</div>
      </div>
      <span class="vrs-line"></span>
      <div class="vrs-edit-btn">编辑</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-address-list1',
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
.vrs-address-list1 {
  padding: 0.2rem 0.3rem;
  .vrs-card {
    background: #fff;
    border-radius: 0.08rem;
  }
  .vrs-add {
    height: 1.2rem;
    padding: 0 0.2rem;
    margin-bottom: 0.2rem;
  }
  .vrs-place-icon {
    @include wh(0.4rem);
    background-image: url(data:image/png;base64,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);
    margin-right: 0.26rem;
  }
  .vrs-arrow-right {
    @include wh(0.12rem, 0.22rem);
    margin-left: 0.2rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAGDP02MAAAABGdBTUEAALGPC/xhBQAAAV9JREFUOBF9k0lSwzAQRW1j9hzH9ilImMIJCHFl2OcUDMWwhlCEY7DwcKZ44LUSGQnLqEql1v/9v6Ru2/PMked5Y+51nGXZTsUErQY1UHnI1hbabWDG3UYCgEsLwPFGAUVRpCoAWXUpZVme9g7tWAJk52aCb5IS43DdNM0mMAkUO8CTOI73uADcbWEmiXdkAYdN0LbtN+TSRXoHq/kgiXI2RFZcYipk7x3YVkEQ2EqsJijspkmNeyCZVp3UBfAcMe2WCuMEhcB3LSTzt0lCDAz1DJJHvu9vKdsx65Kq3w/k2+/m0me06ZPkkDlPkuTxr7BXKEngxAuWD047Yk058VlwGU7BnlKf04QT3xFKl2858fVfgQjlE6vr+k1EzOmggOpd4bqRRHQzrvUiBj2Bvj9cSNPTKIqeJFGPToDjGMctRIjrAscHnWSuvvxIPOxLeoDjCsc7M8EZU3/nD+BK/gFGYMmAFuGb7AAAAABJRU5ErkJggg==);
  }
  .vrs-item {
    margin-top: 0.1rem;
    padding: 0.3rem 0 0.3rem 0.3rem;
  }
  .vrs-txt {
    padding-right: 0.2rem;
  }
  .vrs-phone {
    font-size: 0.24rem;
    color: #888;
  }
  .vrs-tag {
    font-size: 0.2rem;
    padding: 1px 0.1rem;
    background: #FFF5F4;
    border: 1px solid #EC4A2D;
    color: #EC4A2D;
    border-radius: 0.08rem;
  }
  .vrs-address {
    padding-top: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.34rem;
  }
  .vrs-line {
    width: 1px;
    height: 0.55rem;
    background-color: #c6c6c6;
    margin-left: 0.2rem;
  }
  .vrs-edit-btn {
    padding: 0.25rem;
    color: #EC4A2D;
    font-size: 0.24rem;
  }
}
</style>
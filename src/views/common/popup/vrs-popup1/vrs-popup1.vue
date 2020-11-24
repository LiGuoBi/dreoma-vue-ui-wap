<!--
  name: 弹窗1
  author: 小炜
 -->
<template>
  <div>
    <van-button type="primary" @click="showPopup">显示弹窗1</van-button>

    <van-popup class="vrs-popup1" v-model="show">
      <img src="./img/popup1-1.png" class="vrs-icon">
      <p class="vrs-title">注册申请提交成功</p>
      <p class="vrs-desc">
        请耐心等待后台工作人员审核<br/>
        审核通过后，即可登录本系统
      </p>
      <p class="vrs-tips">（审核一般会在8小时以内）</p>
      <img
        class="vrs-close-icon"
        src="./img/close-icon.png"
        alt="close"
        @click="lack = false"
      />
    </van-popup>

  </div>
</template>

<script>
export default {
  name: 'vrs-popup1',
  data() {
    return {
      show: false
    }
  },
  computed: {},
  methods: {
    showPopup() {
      this.show = true
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-popup1 {
  width: 6.4rem;
  border-radius: 0.3rem;
  padding: 1rem 0 0.9rem;
  text-align: center;
  .vrs-icon {
    @include wh(2.5rem);
    margin: 0 auto;
  }
  .vrs-title {
    font-size: 0.4rem;
    line-height: 0.56rem;
    padding: 0.5rem 0 0.14rem;
  }
  .vrs-desc {
    line-height: 0.45rem;
    color: #555;
    font-size: $fs-lg;
  }
  .vrs-tips {
    font-size: 0.3rem;
    color: #888;
    padding-top: 0.2rem;
  }
  .vrs-close-icon {
    position: absolute;
    @include wh(0.78rem);
    top: 0.2rem;
    right: 0.2rem;
  }
}
</style>
<!--
  name: 弹窗1
  author: 小炜
 -->
<template>
  <div>
    <van-button type="primary" @click="showPopup">显示弹窗2</van-button>

    <van-popup class="vrs-popup2" v-model="show">
      <img src="./img/popup2-1.png" class="vrs-icon">
      <p class="vrs-title">审核未通过</p>
      <p class="vrs-desc">
        原因：未选择正确的部门
      </p>
      <button class="vrs-btn">重新注册</button>
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
  name: 'vrs-popup2',
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
.vrs-popup2 {
  width: 6.4rem;
  border-radius: 0.3rem;
  padding: 1rem 0 0.9rem;
  text-align: center;
  .vrs-icon {
    @include wh(2.5rem);
    margin: 0 auto;
  }
  .vrs-title {
    font-weight: bold;
    font-size: 0.4rem;
    line-height: 0.56rem;
    padding: 0.5rem 0 0.14rem;
  }
  .vrs-desc {
    line-height: 0.45rem;
    color: #555;
    font-size: $fs-lg;
  }
  .vrs-btn {
    width: 3.4rem;
    height: 0.8rem;
    background-color: #EC4A2D;
    margin: 0.3rem auto 0;
    color: #fff;
    border-radius: 0.4rem;
  }
  .vrs-close-icon {
    position: absolute;
    @include wh(0.78rem);
    top: 0.2rem;
    right: 0.2rem;
  }
}
</style>
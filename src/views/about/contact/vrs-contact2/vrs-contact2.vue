<!--
  name: 联系我们样式二
  author: 杨栋芬
-->
<template>
  <div class="vrs-contact2">
    <div class="vrs-info flex-v">
      <img class="vrs-icon" src="./img/tel.png" />
      <p class="vrs-tel">电话：</p>
      <p>0871-31283812</p>
    </div>
    <div class="vrs-info flex-v">
      <img class="vrs-icon" src="./img/email.png" />
      <p class="vrs-tel">邮箱：</p>
      <p>shengxian@gmail.com</p>
    </div>
    <div class="vrs-info flex-v">
      <img class="vrs-icon" src="./img/qq.png" />
      <p class="vrs-tel">QQ群：</p>
      <p>14321412351</p>
    </div>
    <div class="vrs-code flex-l">
      <div class="vrs-wx-code">
        <img class="vrs-img" src="./img/code.png" />
        <div class="vrs-name">微信二维码</div>
      </div>
      <div class="vrs-wx-code">
        <img class="vrs-img" src="./img/code.png" />
        <div class="vrs-name">微信公众号</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-contact2',
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
.vrs-contact2 {
  .vrs-info {
    margin: 0 0.3rem;
    padding: 0.3rem 0;
    border-bottom: 1px solid #eee;
    font-size: 0.28rem;
    color: #888;
    .vrs-icon {
      @include wh(0.3rem);
      margin-right: 0.25rem;
    }
    .vrs-tel {
      color: #333;
    }
  }
  .vrs-code {
    padding-top: 0.9rem;
  }
  .vrs-wx-code {
    padding: 0 0.4rem;
    .vrs-img {
      border: 1px solid #C6C6C6;
      @include wh(2.4rem);
    }
    .vrs-name {
      text-align: center;
      font-size: 0.32rem;
      color: #555;
      margin-top: 0.2rem;
    }
  }
}
</style>
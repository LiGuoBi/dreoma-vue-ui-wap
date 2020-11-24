<!-- 
  name: 我的-消息列表1
  author: 小炜
 -->
<template>
  <div class="vrs-msg-list1">
    <!-- 活动消息 -->
    <div class="vrs-msg-item1">
      <div class="vrs-title-wrap flex-v">
        <img class="vrs-icon" src="./img/msg-list1-1.png">
        <span class="vrs-title flex-item">活动消息</span>
        <span class="vrs-date">2019-07-05</span>
      </div>
      <div class="vrs-desc-wrap flex-v">
        <p class="flex-item">7月建党活动报名窗口已开启！</p>
        <span class="vrs-dot"></span>
      </div>
      <router-link class="vrs-to-link" to="">查看详情 &gt;</router-link>
    </div>
    <!-- 订单消息 -->
    <div class="vrs-msg-item1">
      <div class="vrs-title-wrap flex-v">
        <img class="vrs-icon" src="./img/msg-list1-2.png">
        <span class="vrs-title flex-item">订单消息</span>
        <span class="vrs-date">2019-07-05</span>
      </div>
      <div class="vrs-desc-wrap flex-v">
        <p class="flex-item">商品兑换成功！</p>
        <span class="vrs-dot"></span>
      </div>
      <router-link class="vrs-to-link" to="">查看详情 &gt;</router-link>
    </div>
    <!-- 系统消息 -->
    <div class="vrs-msg-item1">
      <div class="vrs-title-wrap flex-v">
        <img class="vrs-icon" src="./img/msg-list1-3.png">
        <span class="vrs-title flex-item">系统消息</span>
        <span class="vrs-date">2019-07-05</span>
      </div>
      <div class="vrs-desc-wrap">
        欢迎来到滇峰会工会系统！
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vrs-msg-list1',
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
.vrs-msg-list1 {
  padding: 0.2rem 0.3rem;

}
.vrs-msg-item1 {
  + .vrs-msg-item1 {
    margin-top: 0.2rem;
  }
  background-color: #fff;
  border-radius: 0.16rem;
  padding: 0.3rem 0.2rem 0.2rem;
  .vrs-icon {
    @include wh(0.34rem);
  }
  .vrs-title {
    font-size: 0.3rem;
    font-weight: bold;
    margin-left: 0.26rem;
  }
  .vrs-date {
    font-size: 0.22rem;
    color: #C6C6C6;
  }
  .vrs-desc-wrap {
    margin-top: 0.2rem;
    color: #888888;
    line-height: 0.4rem;
  }
  .vrs-dot {
    @include wh(8px);
    border-radius: 4px;
    background-color: #EC4A2D;
  }
  .vrs-to-link {
    color: #EC4A2D;
    font-size: 0.26rem;
    line-height: 0.38rem;
    margin-top: 0.1rem;
  }
}
</style>
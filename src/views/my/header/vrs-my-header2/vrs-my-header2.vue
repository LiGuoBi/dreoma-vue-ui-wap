<!-- 
  name: 我的-头部2
  author: 杨栋芬
 -->
<template>
  <div class="vrs-my-header2">
    <div class="vrs-banner bg"></div>
    <div class="vrs-info">
      <img class="avatar vrs-avatar" src="./img/del-1.png" />
      <div class="vrs-name lh tc">这是昵称</div>
      <div class="flex-c">
        <div class="vrs-desc single-txt">
          <span>当前积分：</span>
          <span class="vrs-orange">12345456</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-my-header2',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-my-header2 {
  .vrs-banner {
    background-image: url("./img/member.png");
    height: 3.37rem;
  }
  .vrs-info {
    padding: 1px 0 0.4rem;
    background: #fff;
    box-shadow: 0.02rem 0.02rem 0.04rem 0.02rem rgba(0, 0, 0, 0.08);
    border-radius: 0.2rem;
    position: relative;
    z-index: 2;
    margin: -1.7rem 0.3rem 0;
    .vrs-avatar {
      margin: -1.1rem auto 0;
      @include wh(1.8rem);
      border: 0.1rem solid rgba(255, 255, 255, 0.3);
    }
    .vrs-name {
      padding: 0.2rem 0.3rem 0.3rem;
      font-size: 0.32rem;
      color: #000;
    }
    .vrs-desc {
      padding: 0 0.5rem;
      line-height: 0.6rem;
      font-size: 0.28rem;
      background: #fdf5e7;
      border-radius: 0.5rem;
      color: #888;
      min-width: 4.3rem;
      max-width: 6.2rem;
      text-align: center;
    }
    .vrs-orange {
      font-size: 0.34rem;
      color: #ffa520;
    }
  }
}
</style>
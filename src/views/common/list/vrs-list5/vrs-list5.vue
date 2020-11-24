<!--
  name: 列表样式5
  author: 杨栋芬
-->
<template>
  <div class="vrs-list5">
    <div class="vrs-item" v-for="(item,index) in 2" :key="index">
      <div class="vrs-info">
        <img class="vrs-avatar avatar" src="./img/avatar.png" />
        <div class="vrs-name">范林众</div>
        <div class="vrs-firm">云南博帆律师所</div>
        <div class="vrs-dec">法学学士，毕业于云南大学法学专业，具有扎实的法学功底，娴熟的法律实务技巧,是一名集智慧、专业、责任于一体的专业律师。</div>
      </div>
      <div class="vrs-contact">
        <div class="vrs-phone flex-v">
          <img class="vrs-icon" src="./img/tel.png" />
          <span class="vrs-txt">138 5688 6788</span>
        </div>
        <div class="vrs-phone flex-v">
          <img class="vrs-icon" src="./img/ard.png" />
          <span class="vrs-txt">昆明市西山区日新路润城第二大道</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list5',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list5 {
  padding: 0.3rem;
  background: #fff5f4;
  .vrs-item {
    + .vrs-item {
      margin-top: 0.3rem;
    }
    background: #ffffff;
    border-radius: 0.16rem;
  }
  .vrs-info {
    padding: 0.3rem;
    text-align: center;
    font-size: 0.26rem;
    .vrs-avatar {
      margin: 0 auto;
    }
    .vrs-name {
      font-size: 0.32rem;
      color: #333;
      padding: 0.15rem 0 0.1rem;
    }
    .vrs-firm {
      color: #888;
    }
    .vrs-dec {
      color: #555;
      text-align: justify;
      line-height: 0.4rem;
      padding-top: 0.2rem;
    }
  }
  .vrs-contact {
    padding: 0.3rem 0.3rem 0;
    border-top: 1px dashed #c6c6c6;
    .vrs-phone {
      padding-bottom: 0.25rem;
    }
    .vrs-icon {
      @include wh(0.4rem);
      margin-right: 0.2rem;
    }
    .vrs-txt {
      font-size: 0.3rem;
      color: #555;
      line-height: 0.4rem;
    }
  }
}
</style>
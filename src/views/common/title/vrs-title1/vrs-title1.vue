<!-- 
  name: title1
  author: 小炜
 -->
<template>
  <div class="vrs-title1 flex-v" @click="toLink">
    <img class="vrs-icon" :src="icon">
    <div class="flex-item vrs-title-txt">{{title}}</div>
    <span class="vrs-more-txt">查看更多</span>
    <img class="vrs-more-icon" src="./img/title1-2.png">
  </div>
</template>

<script>
export default {
  name: 'vrs-title1',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    to: [String, Object]
  },
  computed: {
    iconSrc() {
      return ''
    }
  },
  methods: {
    toLink() {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-title1 {
  padding: 0.3rem;
  background-color: #fff;
  .vrs-icon {
    @include wh(0.32rem);
  }
  .vrs-title-txt {
    padding-left: 0.2rem;
    font-weight: bold;
    font-size: 0.32rem;
  }
  .vrs-more-txt {
    color: #999;
  }
  .vrs-more-icon {
    @include wh(0.09rem, 0.21rem);
    margin-left: 0.1rem;
  }
}
</style>
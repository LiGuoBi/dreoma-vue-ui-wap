<!--
  name: 列表一
  author: 杨栋芬
-->
<template>
  <div class="vrs-list1">
    <div class="vrs-show-img flex-wrap">
      <div class="vrs-single" v-for="(item,index) in highList" :key="index">
        <div class="vrs-img-box">
          <img class="vrs-size" :src="`${item.thumb}?imageView2/1/w/140/h/140/q/75|imageslim`">
        </div>
        <div class="vrs-text tc">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list1',
  components: {},
  data() {
    return {
      highList: [
        { title: '若水', thumb: require('./img/list1-1.png') },
        { title: '若水', thumb: require('./img/list1-3.png') },
        { title: '若水', thumb: require('./img/list1-2.png') },
        { title: '若水', thumb: require('./img/list1-3.png') },
        { title: '若水', thumb: require('./img/list1-1.png') },
        { title: '若水', thumb: require('./img/list1-3.png') },
      ]
    }
  },
  mounted() {
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list1 {
  padding: 0 0.3rem;
}
.vrs-show-img {
  .vrs-single {
    width: 1.6rem;
    margin-bottom: 0.25rem;
    margin-right: 0.166rem;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .vrs-img-box {
      border: 1px solid rgba(0, 0, 0, 0.7);
      border-radius: 100%;
      @include wh(100%, 1.6rem);
      text-align: center;
      .vrs-size {
        @include wh(1.3rem, 1.3rem);
        border-radius: 100%;
        margin: 0 auto;
        margin-top: 0.12rem;
      }
    }
    .vrs-text {
      margin-top: 0.2rem;
    }
  }
}
</style>
<!--
  name: 轮播图3
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="vrs-swiper3 swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
        <img class="pich" :src="item.cover" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-swiper3',
  components: {},
  data () {
    return {
      banner: []
    }
  },
  computed: {},
  methods: {
    initSwiper () {
      this.swiper = new Swiper('.vrs-swiper3', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 5
      })
    }
  },
  created () {
    this.banner = [
      { cover: require('./img/cover-1.png') },
      { cover: require('./img/cover-2.png') },
      { cover: require('./img/cover-1.png') },
      { cover: require('./img/cover-2.png') },
      { cover: require('./img/cover-1.png') },
      { cover: require('./img/cover-2.png') },
    ]
    this.$nextTick(() => {
      this.initSwiper()
    })
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper3 {
  position: relative;
  min-width: 100%;
  .swiper-slide {
    @include wh(2.2rem, 1.2rem);
  }
}
</style>
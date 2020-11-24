<!--
  name: 轮播样式6
  author: 小炜
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="swiper-container vrs-swiper6">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <img class="vrs-slide-img" :src="slide.cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-swiper6',
  data() {
    return {
      swiper: {},
      slides: []
    }
  },
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.slides = [
        { cover: require('./img/swiper6.png') },
        { cover: require('./img/swiper6.png') },
        { cover: require('./img/swiper6.png') }
      ]
      this.$nextTick(() => {
        this.initSwiper()
      })
    }, 500)
  },
  computed: {},
  methods: {
    initSwiper() {
      // script 链接的方式引入，不用import引入
      this.swiper = new Swiper('.vrs-swiper6', {
        centeredSlides: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        loop: true,
        speed: 500,
        on: {
          progress: function() {
            for (var i = 0, len = this.slides.length; i < len; i++) {
              var slide = this.slides.eq(i)
              var slideProgress = this.slides[i].progress
              var scale = 1 - Math.abs(slideProgress) / 12
              slide.transform('scale(' + scale + ')')
            }
          },
          setTransition: function(translate) {
            for (var i = 0, len = this.slides.length; i < len; i++)
              this.slides.eq(i).transition(translate)
          }
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper6 {
  .swiper-slide {
    border-radius: 0.16rem;
    width: 6rem;
    height: 3rem;
    overflow: hidden;
  }
  .vrs-slide-img {
    height: 100%;
    object-fit: cover;
  }
}
</style>
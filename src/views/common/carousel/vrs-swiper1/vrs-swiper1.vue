<!--
  name: 轮播图1
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="vrs-swiper1 swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper1-slide swiper-slide" v-for="(item, index) in banner" :key="index">
        <img class="pich" :src="item.covers" />
        <div class="title single-txt">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-swiper1',
  components: {},
  data () {
    return {
      banner: []
    }
  },
  computed: {},
  methods: {
    initSwiper () {
      this.swiper = new Swiper('.vrs-swiper1', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: false,
        // autoHeight: true,
        on: {
          progress: function () {
            for (var i = 0, len = this.slides.length; i < len; i++) {
              var slide = this.slides.eq(i)
              var slideProgress = this.slides[i].progress
              var modify = 1
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
              }
              var translate = slideProgress * modify * 100 + 'px'
              var scale = 1 - Math.abs(slideProgress) / 5
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
              slide.transform('translateX(' + translate + ') scale(' + scale + ')')
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1)
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0)
              }
            }
          },
          setTransition: function (transition) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i)
              slide.transition(transition)
            }
          }
        }
      })
    }
  },
  created () {
    this.banner = [
      { covers: require('./img/cover-1.png'), title: 'banner-1' },
      { covers: require('./img/cover-2.png'), title: 'banner-2' },
      { covers: require('./img/cover-3.png'), title: 'banner-3' },
    ]
    this.$nextTick(() => {
      this.initSwiper()
    })
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper1 {
  width: 6.9rem;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  .swiper1-slide {
    position: relative;
    width: 4rem;
    height: 5.4rem;
    background: #ffffff;
    box-shadow: 0 0.04rem 0.2rem 0 rgba(0, 0, 0, 0.2) !important;
    border-radius: 0.1rem;
    overflow: hidden;
  }
  .title {
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    background: rgba(0, 77, 255, 0.7);
    font-size: 0.28rem;
    color: #ffffff;
    padding: 0 0.2rem;
    position: absolute;
    bottom: 0;
  }
}
</style>
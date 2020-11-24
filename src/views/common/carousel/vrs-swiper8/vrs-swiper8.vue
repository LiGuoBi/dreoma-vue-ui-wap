<!--
  name: 轮播样式8
  author: 小炜
-->
<template>
  <div class="swiper-container vrs-swiper8">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <img class="vrs-slide-img" :src="slide.cover" />
      </div>
    </div>
    <div class="swiper-pagination vrs-swiper8-page"></div>
  </div>
</template>

<script>
export default {
  name: 'vrs-swiper8',
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
        { cover: 'http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg' },
        { cover: 'http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg' },
        { cover: 'http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg' }
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
      this.swiper = new Swiper('.vrs-swiper8', {
        slidesPerView: 'auto',
        pagination: {
          el: '.vrs-swiper8-page',
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper8 {
  padding: 0.6rem 0 1rem;
  .swiper-slide {
    border-radius: 0.16rem;
    width: 5.6rem;
    height: 2.8rem;
    overflow: hidden;
    margin-left: 0.3rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }
  .swiper-slide:last-child {
    margin-right: 0.3rem;
  }
  .vrs-slide-img {
    height: 100%;
    object-fit: cover;
  }
}
</style>

<style lang="scss">
.vrs-swiper8-page {
  bottom: 0.45rem !important;
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #EC4A2D;
    opacity: 1;
    transition: all 0.2s;
    &.swiper-pagination-bullet-active {
      width: 15px;
    }
  }
}
</style>
<!-- 
  name: 轮播样式7
  author: 小炜
 -->
<template>
  <div class="vrs-swiper7 flex-v">
    <div class="vrs-icon">
      <img src="./img/swiper7-1.png">
    </div>
    <div class="swiper-container flex-item" id="vrs-swiper7">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <p class="single-txt">{{slide.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-swiper7',
  data() {
    return {
      slides: []
    }
  },
  computed: {},
  created() {
    this.slides = [
      { content: '工会系统将于8月正式上线！', id: '1', type: '2' },
      { content: '工会系统将于8月正式上线！', id: '2', type: '3' },
    ]
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  methods: {
    initSwiper() {
      new Swiper('#vrs-swiper7', {
        direction: 'vertical',
        loop: true,
        autoplay: true
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper7 {
  padding: 0.2rem 0.3rem;
  .vrs-icon {
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 0.3rem;
  }
  .swiper-container {
    height: 0.8rem;
    line-height: 0.8rem;
  }
}
</style>
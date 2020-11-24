<!--
  name: 轮播样式五
  author: 杨栋芬
  desc: 轮播切换，点击显示大图，查看大图需要引入组件ImagePreview
-->
<template>
  <div class="swiper-container vrs-swiper5">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide vrs-happy-slide"
        v-for="(value, index) in swiperList"
        :key="index"
      >
        <img
          class="pich"
          :src="`${value.thumb}?imageView2/1/w/400/h/540/q/75|imageslim`"
          @click="onPreview(value.thumb)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  name: 'vrs-swiper5',
  components: {},
  data() {
    return {
      swiper: {},
      swiperList: [
        { thumb: require('./img/swiper5-1.png') },
        { thumb: require('./img/swiper5-3.png') },
        { thumb: require('./img/swiper5-2.png') },
        { thumb: require('./img/swiper5-1.png') },
        { thumb: require('./img/swiper5-2.png') },
        { thumb: require('./img/swiper5-3.png') }
      ]
    }
  },
  computed: {},
  methods: {
    init() {
      this.swiper = new Swiper('.vrs-swiper5', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10
      })
    },
    onPreview(src) {
      ImagePreview({
        images: [src],
        showIndex: false //是否显示页码
      })
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  }
}
</script>

<style lang='scss' scoped>
.vrs-happy-slide {
  @include wh(4rem, 6rem);
}
</style>
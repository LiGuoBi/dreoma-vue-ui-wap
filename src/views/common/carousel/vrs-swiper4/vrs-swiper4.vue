<!--
  name: 轮播图4
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="vrs-swiper4">
    <div class="swiper4 swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide tel" v-for="(item, index) in list" :key="index">
          <p><span class="s1">{{ item.phone }}</span><span>{{ item.create_time }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-swiper4',
  components: {},
  data () {
    return {
      list: []
    }
  },
  computed: {},
  methods: {
    initSwiper () {
      this.swiper = new Swiper('.swiper4', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 5,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      })
    }
  },
  created () {
    this.list = [
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' },
      { phone: '180****8888', create_time: '2018-12-31' }
    ]
    this.$nextTick(() => {
      this.initSwiper()
    })
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper4 {
  padding-left: 0.32rem;
  font-size: $fs-lg;
  line-height: $fs-lg;
  color: #111111;
  .swiper4 {
    height: 3.42rem;
    width: 100%;
  }
  .tel {
    line-height: 0.58rem;
    .s1 {
      margin-right: 1rem;
    }
  }
}
</style>
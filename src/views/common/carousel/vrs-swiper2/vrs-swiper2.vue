<!--
  name: 轮播图2
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="vrs-swiper2">
    <div class="case">
      <div class="case-bg flex">
        <div class="case-inner">
          <div class="caseTxt flex">
            <button class="case-btn single-txt">{{ content.title }}</button>
            <p class="case-txt multiline-txt">{{ content.description }}</p>
          </div>
        </div>
      </div>
      <div class="case-swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="case-swiper-slide swiper-slide" v-for="(item, index) in mySwiper" :key="index">
            <div class="avatar ovh">
              <img :src="item.cover" />
            </div>
            <span class="multiline-txt">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-swiper2',
  data () {
    return {
      content: {},
      mySwiper: [],
      swiper_Id: 0,
      timeout: ''
    }
  },
  methods: {
    initSwiper () {
      let vueThis = this
      let loopedSlides = 3 // loopedSlides 不能大于轮播数组长度
      let slideLen = vueThis.mySwiper.length // 获取轮播数组长度
      // 判断是否开启 loop
      let loop = slideLen >= loopedSlides

      let swiperOption = {
        watchSlidesProgress: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoHeight: true,
        loop: loop,
        // 在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置大于可视slide个数2个即可)。
        loopedSlides: loopedSlides,
        on: {
          progress: function () {
            for (var i = 0, len = this.slides.length; i < len; i++) {
              var slide = this.slides.eq(i)
              var slideProgress = this.slides[i].progress
              var modify = 1
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
              }
              var translate = slideProgress * modify * 39 + 'px'
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
          },
          slideChange: function () {
            clearTimeout(vueThis.timeout)
            vueThis.timeout = setTimeout(() => {
              let index = 0
              // 开启loop需要重新计算swiperSlide的真实下标
              if (loop) {
                // 获取swiperSlide真实下标 getSwiperIndex(swiper当前下标, loopedSlides个数, 数组长度)
                index = vueThis.getSwiperIndex(this.activeIndex, loopedSlides, slideLen)
              } else {
                // 没有开启loop模式直接赋值
                index = this.activeIndex
              }
              vueThis.swiper_Id = vueThis.mySwiper[index].id // 通过下标获取Id
              vueThis.apiMethod() // 请求详情数据
            }, 200)
          }
        }
      }
      this.swiper = new Swiper('.case-swiper', swiperOption)
    },
    // 获取swiper真实下标todo
    getSwiperIndex (activeIndex, slide, len) {
      var index = 0 // 数组下标
      if (activeIndex >= slide && activeIndex < (slide + len)) {
        index = activeIndex - slide
      } else if (activeIndex < slide) {
        index = activeIndex - slide + len
      } else if (activeIndex == (slide + len)) {
        index = 0
      }
      return index
    },
    async apiMethod () {
      // let res = await api_index_caseDetail({ id: this.swiper_Id })
      // this.content = res.data
      if (this.swiper_Id == 0) {
        this.content = { title: '标题1', description: '内容1' }
      } else if (this.swiper_Id == 1) {
        this.content = { title: '标题2', description: '内容2' }
      } else if (this.swiper_Id == 2) {
        this.content = { title: '标题3', description: '内容3' }
      }
    },
  },
  async created () {
    // let res = await api_index_case();
    // this.mySwiper = res.data
    this.mySwiper = [{
      id: 0, cover: require('./img/cover-1.png'), title: 'name-1'
    }, {
      id: 1, cover: require('./img/cover-2.png'), title: 'name-2'
    }, {
      id: 2, cover: require('./img/cover-3.png'), title: 'name-3'
    }]
    this.$nextTick(() => {
      this.initSwiper()
    })
    this.swiper_Id = this.mySwiper[0].id
    this.apiMethod()
  }
}
</script>

<style lang="scss" scoped>
.vrs-swiper2 {
  .case-bg {
    height: 5.2rem;
    background: rgba(0, 77, 255, 0.68);
    padding-top: 0.3rem;
  }
  .case-inner {
    height: 4rem;
    width: 6.2rem;
    background: $white;
    margin: 0 auto;
  }
  .pich {
    width: 2.68rem;
  }
  .caseTxt {
    flex-direction: column;
    padding: 0 0.15rem;
    font-size: 0.2rem;
    line-height: 0.36rem;
    color: #333333;
    p {
      margin: 0.36rem 0 0 0.25rem;
    }
    .multiline-txt {
      height: 2.52rem;
      line-height: 0.36rem;
      -webkit-line-clamp: 7;
    }
  }
  .case-btn {
    position: relative;
    left: -0.6rem;
    height: 0.64rem;
    width: 3.16rem;
    font-size: 0.32rem;
    color: #ffffff;
    line-height: 0.64rem;
    letter-spacing: 1.6px;
    background: #ff9f00;
    border-radius: 0.1rem;
    margin: 0.14rem 0 0.1rem;
  }
  .case-swiper {
    width: 6.9rem;
    padding: 0.6rem 0;
    margin: -1.1rem auto 0;
  }
  .avatar {
    height: 1.36rem;
    width: 1.33rem;
    margin: 0.277rem auto 0.146rem;
  }
  .case-swiper-slide {
    .multiline-txt {
      height: 0.4rem;
      line-height: 0.4rem;
      -webkit-line-clamp: 1;
    }
    height: 2.62rem;
    width: 3.02rem;
    background: #ffffff;
    border: 2px solid #f9f9f9;
    box-shadow: 0 0 60px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    text-align: center;
    font-size: $fs-lg;
    color: #454545;
  }
}
</style>

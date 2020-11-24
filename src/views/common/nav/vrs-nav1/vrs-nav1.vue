<!--
  name: 导航1
  author: 小炜
-->
<template>
  <div class="swiper-container vrs-nav1">
    <div class="swiper-wrapper">
      <div class="swiper-slide flex-v" v-for="(swiper, index) in swiperNav" :key="index">
        <div class="vrs-item" v-for="nav in swiper" :key="nav.id" @click="navHandle(nav.to, index)">
          <img class="vrs-icon" :src="nav.icon">
          <p class="vrs-text single-txt">{{nav.name}}</p>
        </div>
      </div>
    </div>
    <div class="swiper-pagination vrs-nav1-page"></div>
  </div>
</template>

<script>
export default {
  name: 'vrs-nav1',
  data() {
    return {
      navs: [
        {
          icon: require('./img/nav1-1.png'),
          name: '学习宣传',
          to: '/home'
        },
        {
          icon: require('./img/nav1-2.png'),
          name: '工会活动',
          to: ''
        },
        {
          icon: require('./img/nav1-3.png'),
          name: '业务办理',
          to: ''
        },
        {
          icon: require('./img/nav1-4.png'),
          name: '维权帮扶',
          to: ''
        },
        {
          icon: require('./img/nav1-1.png'),
          name: '学习宣传',
          to: ''
        },
        {
          icon: require('./img/nav1-2.png'),
          name: '工会活动',
          to: ''
        },
        {
          icon: require('./img/nav1-3.png'),
          name: '业务办理',
          to: ''
        },
        {
          icon: require('./img/nav1-4.png'),
          name: '维权帮扶',
          to: ''
        },
        {
          icon: require('./img/nav1-1.png'),
          name: '学习宣传',
          to: ''
        }
      ]
    }
  },
  computed: {
    swiperNav() {
      let len = this.navs.length, navs = [], arr = []
      this.navs.forEach((item, index) => {
        index++
        arr.push(item)
        if (index % 4 == 0) {
          navs.push(arr)
          arr = []
        }
        if (index == len && arr.length > 0) {
          navs.push(arr)
        }
      })
      return navs
    }
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    navHandle(to) {
      this.$router.push(to)
    },
    initSwiper() {
      new Swiper('.vrs-nav1', {
        pagination: {
          el: '.vrs-nav1-page',
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-nav1 {
  padding: 0.4rem 0 0.7rem;
  .vrs-item {
    width: 25%;
    .vrs-icon {
      @include wh(1rem);
      margin: 0 auto;
    }
    .vrs-text {
      padding-top: 0.2rem;
      text-align: center;
    }
  }
}
</style>

<style lang="scss">
.vrs-nav1-page {
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

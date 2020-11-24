<!--
  name: 统计样式二
  author: 杨栋芬
  desc: 运行依赖：需要安装conutup 需要引入countUp组件
-->
<template>
    <div class="flex-v" id="vrs-count-bar2">
      <div class="vrs-partner-list flex-item"  v-for="(item,index) in list" :key="index">
        <img :src="item.img">
        <div class="vrs-border">
          <p class="vrs-value">
            <count-up
              class="vrs-num"
              :startnum="0"
              :endnum="item.num"
              :duration="0"
              separator=","
              suffix
              :start='item.start'
            ></count-up>
            <span>{{item.unit}}</span>
          </p>
          <p class="vrs-title">{{item.title}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import countUp from '@/components/countUp.vue'
export default {
  name: 'vrs-count-bar2',
  data() {
    return {
      list: [
        {num: 100, unit:'+', title:'行业经验', img:require('./img/ab-0.png')},
        {num: 4000, unit:'+', title:'行业经验', img:require('./img/ab-2.png')},
        {num: 50, unit:'+', title:'行业经验', img:require('./img/ab-1.png')},
        ],
    }
  },
  components: {
    countUp
  },
  methods: {
    scrollHandler() {
      let scrollH = document.documentElement.scrollTop || document.body.scrollTop  // 滚动条高度
      let visibleH = window.innerHeight // 网页可见区域高
      let countupDom = document.getElementById('vrs-count-bar2')
      let setTop = 0
      if (countupDom) countupDom.offsetTop // 元素到顶部的距离
      let distance = setTop - visibleH
      if (scrollH > distance) {
        this.list = this.list.map(item => {
          item.start = true
          return item
        })
      }
    }
  },
  // 过滤器
  filters: {
    turnType(value) {
      if (value) {
        if (typeof value == Number) {
          return value
        } else {
          return parseInt(value)
        }
      } else {
        return 0
      }
    }
  },
  created() {
    this.list.forEach(item => {
        item.start = false
      })
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler())
  },
  destroyed() {
    // 清除滚动事件
    window.removeEventListener('scroll', this.scrollHandler())
  }
}
</script>

<style lang="scss" scoped>
.vrs-partner-list {
  text-align: center;
  &:first-child .vrs-border {
    border-left: 0rem solid #e6e6e6;
  }
  .vrs-border {
    border-left: 0.01rem solid #e6e6e6;
  }

  img {
    @include wh(0.5rem, 0.5rem);
    object-fit: contain;
    margin: 0 auto 0.1rem;
  }
  .vrs-title {
    text-align: center;
  }
  .vrs-value {
    margin: 0.15rem 0;
    i {
      font-style: normal;
      margin-right: 0.1rem;
    }
    .vrs-num {
      font-size: 0.28rem;
    }
    span {
      margin-left: 0.05rem;
    }
  }
}
</style>

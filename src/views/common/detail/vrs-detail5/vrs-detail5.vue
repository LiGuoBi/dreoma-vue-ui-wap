<!--
  name: 卡片详情5
  author: 杨栋芬
-->
<template>
  <div class="vrs-datail5">
    <img class="vrs-top" src="./img/payment.png" />
    <div class="vrs-main">
      <div class="vrs-card lh">
        <p class="vrs-title">捐款说明</p>
        <p class="vrs-desc">捐款描述：2019-06-28—2019-07-28</p>
        <div class="rich-text" v-html="content"></div>
      </div>
      <div class="vrs-amount flex-v">
        <span class="vrs-name">捐款金额</span>
        <input class="flex-item vrs-in" type="text" placeholder="0.00" v-model="price" />
        <span class="vrs-txt-red">元</span>
      </div>
      <button class="vrs-submit" @click="payHandle">立即捐款</button>
      <div class="vrs-record">
        <div class="vrs-title">— 我的捐款记录 —</div>
        <div class="vrs-item flex-v between">
          <span class="vrs-txt-red">200</span>
          <span class="vrs-time">2019-07-08 11:23</span>
        </div>
        <div class="vrs-item flex-v between">
          <span class="vrs-txt-red">200</span>
          <span class="vrs-time">2019-07-08 11:23</span>
        </div>
      </div>
      <div class="vrs-record">
        <div class="vrs-title">— 我的捐款记录 —</div>
        <div class="vrs-item flex-c">
          <span class="vrs-time">你还没有捐款~</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceValid } from '@/utils/validate'
export default {
  name: 'vrs-detail5',
  components: {},
  data() {
    return {
      price: '',
      content: `
        <p> 
          加瓦姐弟，在四川大山的一个村子里相依为命。没有亲人照料的二人家里充满了垃圾，
          让人无处落脚；食物放置久了，都发霉变质了，上面的苍蝇会因为陌生人的到来四处乱飞。
        </p>
      `,
    }
  },
  computed: {},
  methods: {
    payHandle() {
      if (priceValid(this.price)) {
        alert(this.price)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-datail5 {
  .vrs-top {
    height: 3.2rem;
  }
  .vrs-main {
    position: relative;
    margin: -0.6rem 0.3rem 0;
    z-index: 2;
    .vrs-txt-red {
      color: #ec4a2d;
    }
    .vrs-submit {
      @include wh(6.5rem, 0.9rem);
      background: #ec4a2d;
      margin: auto;
      font-size: 0.34rem;
      color: #ffffff;
    }
  }
  // 卡片
  .vrs-card {
    + .vrs-card {
      margin-top: 0.3rem;
    }
    background: #ffffff;
    color: #888;
    font-size: 0.24rem;
    box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
    border-radius: 0.16rem;
    padding: 0.4rem 0.3rem;
    .vrs-title {
      font-size: 0.32rem;
      color: #333;
    }
    .vrs-desc {
      padding: 0.16rem 0 0.2rem;
    }
  }
  // 金额输入
  .vrs-amount {
    @include wh(6.5rem, 0.9rem);
    border: 1px solid rgba(151, 151, 151, 0.6);
    margin: 0.7rem auto 0.5rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    .vrs-in {
      width: 100%;
      margin-left: 0.4rem;
      margin-right: 0.2rem;
    }
  }
  // 记录
  .vrs-record {
    padding: 0.7rem 0.2rem 0;
    font-size: 0.32rem;
    .vrs-title {
      padding-bottom: 0.5rem;
      text-align: center;
    }
    .vrs-item {
      + .vrs-item {
        padding-top: 0.14rem;
      }
      line-height: 0.46rem;
    }
    .vrs-time {
      font-size: 0.28rem;
      color: #888;
    }
  }
}
</style>
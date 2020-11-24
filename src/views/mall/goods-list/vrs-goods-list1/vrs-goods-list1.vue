<!-- 
  name: 产品列表1
  author: 杨栋芬
  description：带购物车的产品列表
 -->
<template>
  <div class="vrs-goods-list1">
    <!-- 顶部信息 -->
    <div class="vrs-top bg" :style="{'background-image': 'url('+ require('./img/banner.png') +')'}"></div>
    <div class="vrs-card">
      <div class="vrs-user flex-v">
        <img class="avatar vrs-avatar" src="./img/avatar.png" />
        <div class="vrs-gold flex-item">
          <p>我的金币</p>
          <P class="vrs-money single-txt">998金币</P>
        </div>
        <button class="vrs-btn">充值</button>
      </div>
      <div class="vrs-menu flex-v between">
        <div class="vrs-link flex-v">
          <img class="vrs-icon" src="./img/icon-1.png" />
          <span>金币明细</span>
        </div>
        <div class="vrs-link flex-v">
          <img class="vrs-icon" src="./img/icon-2.png" />
          <span>兑换记录</span>
        </div>
      </div>
    </div>
    <!-- 顶部信息 end -->
    <!-- 产品列表 -->
    <div class="vrs-goods-item1 flex" v-for="(item,index) in goodsList" :key="index">
      <img class="vrs-img cover" :src="item.image" @click="goodsPopup(index)" />
      <div class="vrs-info flex-item">
        <p class="multiline-txt vrs-title" @click="goodsPopup(index)" >{{item.title}}</p>
        <p class="vrs-price">{{item.price}}金币</p>
        <div class="vrs-stepper flex-v">
          <template v-if="item.buyNum">
            <img class="vrs-icon" src="./img/icon-jian.png" @click="addCart(item, -1)" />
            <span class="vrs-num">{{item.buyNum}}</span>
          </template>
          <img class="vrs-icon" src="./img/icon-jia.png" @click="addCart(item, 1)" />
        </div>
      </div>
    </div>
    <!-- 产品列表 end -->
    <!-- tabbar -->
    <div class="vrs-cart-bar flex-v">
      <!-- 购物车 -->
      <div class="vrs-mark" @click="cartPopup">
        <img class="vrs-icon" src="./img/cart.png" />
        <span class="vrs-sum" v-if="goodsSum" >{{goodsSum}}</span>
      </div>
      <div class="flex-item">
        <p class="vrs-price">{{priceSum}}金币</p>
        <p class="vrs-my-money">现有：998金币</p>
      </div>
      <button class="vrs-buy">立即购买</button>
    </div>
    <!-- tabbar end -->
    <!-- 购物车列表-弹窗 -->
    <van-popup v-model="showCart" position="bottom" class="vrs-popup-box cart">
      <div class="vrs-head flex-v between">
        <span>已选商品</span>
        <div class="flex" @click="emptyCart">
          <img class="vrs-close" src="./img/icon-del.png" />
          <span class="vrs-clear-txt">清空</span>
        </div>
      </div>
      <div class="vrs-scroll">
        <div class="vrs-cart-item flex-v" v-for="(item,index) in cartList" :key="index">
          <p class="vrs-name flex-item single-txt">{{item.title}}</p>
          <p class="vrs-gold">{{item.price}}金币</p>
          <div class="vrs-stepper flex-v">
            <img class="vrs-icon" src="./img/icon-jian.png" @click="addCart(item, -1)" />
            <span class="vrs-num">{{item.buyNum}}</span>
            <img class="vrs-icon" src="./img/icon-jia.png" @click="addCart(item, 1)" />
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 购物车列表-弹窗 end -->
    <!-- 商品详情弹窗 -->
    <van-popup v-model="showGoods" position="bottom" class="vrs-popup-box goods">
      <div class="vrs-head flex-v between">
        <span>商品详情</span>
        <img class="vrs-close" src="./img/icon-close.png" @click="showGoods = false" />
      </div>
      <div class="vrs-scroll">
        <div class="vrs-goods-detail1">
          <img class="vrs-pic" :src="goodsDetail.image" alt="goods">
          <p class="vrs-title">{{goodsDetail.title}}</p>
          <p class="vrs-price">{{goodsDetail.price}}金币</p>
          <p class="vrs-desc lh">{{goodsDetail.content}}</p>
        </div>
      </div>
    </van-popup>
    <!-- 商品详情弹窗 end -->
  </div>
</template>

<script>
export default {
  name: 'vrs-goods-list1',
  data() {
    return {
      goodsList: [
        { id: 1, buyNum: 1, price: 100, title: '稻花香东北大米 100公斤', image: require('./img/goods-1.png') },
        { id: 2, buyNum: 0, price: 10, title: '稻花香东北大米 10公斤', image: require('./img/goods-1.png') },
        { id: 3, buyNum: 3, price: 6, title: '稻花香东北大米 6公斤', image: require('./img/goods-1.png') },
        { id: 4, buyNum: 0, price: 1, title: '稻花香东北大米 1公斤', image: require('./img/goods-1.png') }
      ],
      cartList: [],
      showCart: false, //显示购物车
      showGoods: false, // 显示商品详情
      goodsDetail: {},
      goodsSum: 0, //商品总数
      priceSum: 0, //总价
    }
  },
  created() {
    // 获取购物车列表
    this.goodsList.forEach(item => {
      if (item.buyNum > 0) {
        this.cartList.push(item)
      }
    })
    this.calcNum()
  },
  computed: {},
  methods: {
    // 加入购物车 (js 赋值的两个数组、对象会相互影响)
    addCart(goods, num) {
      goods.buyNum += num
      // 商品数量为0，移出购物车
      if (goods.buyNum == 0) {
        this.cartList.splice(this.cartList.findIndex(item => goods.id == item.id), 1)
        // 购物车列表没有数据，关闭弹窗
        if (this.cartList.length == 0) {
          this.showCart = false
        }
      // 商品是否在购物车中，没有就添加
      } else if (!this.cartList.some(item => goods.id == item.id)) {
        this.cartList.push(goods)
      }
      this.calcNum()
    },
    // 清空购物车
    emptyCart() {
      this.goodsList.forEach(item => {
        item.buyNum = 0
      })
      this.cartList = []
      this.priceSum = 0
      this.goodsSum = 0
      this.showCart = false
    },
    // 计算总价
    calcNum() {
      let goodsSum = 0, priceSum = 0
      this.cartList.forEach(item => {
        goodsSum += item.buyNum
        priceSum += item.price * item.buyNum
      })
      this.goodsSum = goodsSum
      this.priceSum = priceSum
    },
    //展示购物车
    cartPopup() {
      if (this.goodsSum) {
        this.showCart = true
      }
    },
    goodsPopup(index) {
      this.goodsDetail = this.goodsList[index]
      this.showGoods = true
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-goods-list1 {
  position: relative;
  padding-bottom: 1.4rem;
  // 顶部样式
  .vrs-top {
    height: 3.2rem;
  }
}
// card
.vrs-card {
  box-shadow: 0 0.02rem 0.04rem 0.04rem rgba(0, 0, 0, 0.08);
  border-radius: 0.16rem;
  padding: 0.3rem;
  margin: -0.8rem 0.3rem 0.3rem;
  position: relative;
  z-index: 2;
  background-color: #fff;
  .avatar {
    @include wh(1.1rem);
    margin-right: 0.35rem;
  }
  .vrs-gold {
    font-size: 0.26rem;
    color: #555;
  }
  .vrs-money {
    font-size: 0.4rem;
    color: #ec4a2d;
    padding-top: 0.1rem;
    max-width: 3rem;
  }
  .vrs-btn {
    background: #ec4a2d;
    border-radius: 0.24rem;
    height: 0.48rem;
    width: 1.4rem;
    font-size: 0.28rem;
    color: #fff;
  }
  .vrs-menu {
    padding: 0.5rem 0.5rem 0;
  }
  .vrs-link {
    font-size: 0.24rem;
    color: #555;
  }
  .vrs-icon {
    @include wh(0.4rem);
    padding-right: 0.2rem;
  }
}
// 商品列表样式
.vrs-goods-item1 {
  margin: 0 0.3rem;
  background: #fff;
  border-radius: 0.08rem;
  padding: 0.2rem;
  + .vrs-goods-item1 {
    margin-top: 0.1rem;
  }
  .vrs-img {
    @include wh(1.5rem);
    margin-right: 0.2rem;
  }
  .vrs-info {
    font-size: 0.28rem;
    color: #333;
    max-width: 4.5rem;
    position: relative;
  }
  .vrs-price {
    font-size: 0.36rem;
    line-height: 0.5rem;
    color: #ec4a2d;
  }
  .vrs-title {
    line-height: 0.4rem;
    max-height: 0.8rem;
  }
  .vrs-stepper {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
// 步进器
.vrs-stepper {
  .vrs-icon {
    @include wh(0.44rem);
  }
  .vrs-num {
    padding: 0 0.2rem;
    text-align: center;
  }
}
// 底部bar
.vrs-cart-bar {
  // 根据 vrs-detail2 定位，实际使用时请根据浏览器定位 fixed
  // position: fixed;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 0.3rem;
  height: 1.1rem;
  width: 100%;
  background-color: #fff;
  .vrs-mark {
    position: relative;
    padding: 0.1rem 0.5rem 0.1rem 0.1rem;
  }
  .vrs-icon {
    @include wh(0.5rem);
  }
  .vrs-sum {
    position: absolute;
    top: 0;
    left: 0.46rem;
    background-color: #ec4a2d;
    color: #fff;
    font-size: 10px;
    height: 16px;
    line-height: 14px;
    min-width: 16px;
    border-radius: 8px;
    text-align: center;
    font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
    padding: 0 4px;
    border: 1px solid #fff;
  }
  .vrs-price {
    font-size: 0.32rem;
    color: #ec4a2d;
    padding-bottom: 0.1rem;
  }
  .vrs-my-money {
    font-size: 0.22rem;
    color: #888;
  }
  .vrs-buy {
    @include wh(2.4rem, 0.8rem);
    background: #ec4a2d;
    color: #fff;
    border-radius: 0.12rem;
    font-size: 0.32rem;
  }
}
// 购物车/商品详情弹窗
.vrs-popup-box {
  display: flex;
  flex-direction: column;
  &.cart {
    height: 50%;
  }
  &.goods {
    height: 9.3rem;
  }
  .vrs-head {
    background: #eceff0;
    padding: 0 0.3rem;
    height: 0.8rem;
    color: #555;
  }
  .vrs-close {
    @include wh(0.3rem);
  }
  .vrs-clear-txt {
    margin-left: 0.2rem;
  }
  .vrs-scroll {
    flex: 1;
    overflow-y: auto;
  }
}
.vrs-cart-item {
  padding: 0.3rem 0;
  margin: 0 0.3rem;
  border-bottom: 1px solid #eee;
  .vrs-name {
    color: #333;
  }
  .vrs-gold {
    color: #ec4a2d;
    margin: 0 0.3rem;
  }
}
.vrs-goods-detail1 {
  padding: 0.3rem;
  .vrs-pic {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }
  .vrs-title {
    font-size: 0.32rem;
    padding-top: 0.5rem;
    line-height: 0.48rem;
  }
  .vrs-price {
    color: #EC4A2D;
    font-size: 0.36rem;
    padding: 0.1rem 0 0.3rem;
  }
  .vrs-desc {
    color: #666;
    padding-top: 0.20rem;
    border-top: 1px solid #eee;
  }
}
</style>
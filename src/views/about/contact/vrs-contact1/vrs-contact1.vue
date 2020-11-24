<!--
  name: 联系我们样式一
  author: 杨栋芬
  desc: 需要在main.js中引入vant组件Popup和Picker
-->
<template>
  <div class="vrs-contact1">
    <div class="vrs-info-box">
      <img class="pich" src="./img/bg.jpg" />
      <div class="vrs-gradient"></div>
      <div class="vrs-entry1"></div>
      <div class="vrs-entry2"></div>
      <div class="vrs-entry3">
        <div class="vrs-title flex">
          <div class="vrs-img">
            <img class="pich" src="./img/icon-13.png" />
          </div>预约量身
        </div>
        <div class="form-list">
          <input class="vrs-custom-type" type="text" placeholder="您的称呼（杨先生）" v-model="name" />
          <input class="vrs-custom-type" type="text" placeholder="您的电话" v-model="tel" />
          <div class="vrs-custom-type  vrs-input flex-v between" @click="show = true">
            <div>{{column_id}}</div>
            <div class="vrs-arrow">
              <img class="pich" src="./img/arrow.png" alt style="width: 10px;height: auto;" />
            </div>
          </div>
          <button class="vrs-button" @click="onSave">提交</button>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        title="定制类型"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <div class="vrs-fiexed-error" v-if="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'vrs-contact1',
  components: {},
  data() {
    return {
      message: '',
      name: '',
      tel: '',
      column_id: '杭州',
      list: [
        {
          description: '卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色。',
          id: 28,
          thumb: require('./img/bg.jpg'),
          title: '气质男装'
        },
        {
          description: '卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色，卓尔非凡，彰显男儿本色。',
          id: 29,
          thumb: require('./img/bg.jpg'),
          title: '时尚女装'
        },
      ],
      animate: false,
      timer: null,
      show: false,
      columns: []
    }
  },
  created() {
    this.list.forEach((value) => {
      this.columns.push(value.title)
    })
    this.column_id = this.list[0].title
  },
  methods: {
    showMeaasge(err) {
      this.message = err
      setTimeout(() => {
        this.message = ''
      }, 500)
    },
    onSave() {
      if (!this.name) this.showMeaasge('请输入姓名')
      else if (!this.tel) this.showMeaasge('请输入电话')
      else {
        this.showMeaasge('提交成功！')
        this.marqueeList = []
        this.name = ''
        this.tel = ''
      }
    },
    onConfirm(value) {
      this.column_id = value
      this.show = false
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-contact1 {
  .vrs-title {
    height: 0.28rem;
    color: rgba(125, 81, 255, 1);
    .vrs-img {
      @include wh(0.4rem, 100%);
      margin-right: 0.06rem;
    }
  }
}
.vrs-info-box {
  width: 100%;
  height: 10.66rem;
  position: relative;
  .vrs-gradient {
    position: absolute;
    top: 0px;
    left: 0px;
    background: linear-gradient(
      360deg,
      rgba(125, 81, 255, 1) 0%,
      rgba(41, 132, 254, 0.2) 100%
    );
    opacity: 0.6021;
  }
  .vrs-entry1 {
    @include wh(5.74rem, 5.62rem);
    position: absolute;
    left: 0.62rem;
    top: 3.86rem;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 0.16rem;
  }
  .vrs-entry2 {
    @include wh(5.74rem, 6rem);
    position: absolute;
    left: 0.74rem;
    top: 3.66rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 0.16rem;
  }
  .vrs-entry3 {
    @include wh(5.74rem, 6.4rem);
    position: absolute;
    left: 0.88rem;
    top: 3.46rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0.16rem;
    padding: 0.6rem 0.6rem 0.5rem;
    .vrs-custom-type {
      padding: 0 0.2rem;
      margin-top: 0.4rem;
      border-radius: 0.12rem;
      color: #111;
      border: 1px solid rgba(0, 0, 0, 1);
      line-height: 0.88rem;
    }
    input {
      @include wh(4rem, 0.88rem);
      &::-webkit-input-placeholder {
        color: #8d8d8d;
      }
    }
    .vrs-input {
      @include wh(4.45rem, 0.88rem);
    }
    .custom-type {
      padding-right: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include wh(4.54rem, 0.92rem);
      color: #717171;
    }
    .vrs-button {
      @include wh(2.2rem, 0.7rem);
      color: $white;
      background: rgba(125, 81, 255, 1);
      box-shadow: 0px 0.12rem 0.4rem 0px rgba(0, 0, 0, 0.16);
      border-radius: 0.34rem;
      margin: 0.46rem 1.04rem 0rem;
    }
  }
}
.vrs-arrow {
  @include wh(0.2rem, 0.2rem);
  margin-top: 0.1rem;
}
.vrs-fiexed-error {
  position: fixed;
  color: #fff;
  top: 30%;
  left: 32%;
  background: rgba($color: #000, $alpha: 0.7);
  padding: 0.2rem 0.4rem;
  font-size: 0.28rem;
}
</style>
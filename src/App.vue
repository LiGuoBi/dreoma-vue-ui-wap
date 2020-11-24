<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>

    <!-- <van-panel class="item-panel" title="产品列表1">
      <div class="com-wrap" style="background: #F7F8FA;">
        
      </div>
      <div slot="footer">
        <dl class="tip-box">
          <dt>TIP：产品列表1</dt>
          <dd>组件名称：</dd>
        </dl>
      </div>
    </van-panel> -->
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-fade-left'
    }
  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-fade-right' : 'slide-fade-left'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/common.scss";

body {
  background-color: #f8f8f8;
}

.item-list {
  padding-top: 0.4rem;
}

.item-panel {
  + .item-panel {
    margin-top: 0.4rem;
  }
  .com-wrap {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    &.pad-lr {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
  }
  .tip-box {
    background-color: #f3f5f7;
    border-left: 0.1rem solid #42b983;
    padding: 0.2rem;
    dt {
      padding-bottom: 0.1rem;
    }
    dd {
      line-height: 0.44rem;
    }
  }
  .mt30 {
    margin-top: 0.3rem;
  }
  .vrs-cs-button {
    @include wh(100%, 0.88rem);
    background: #ffa520;
    border-radius: 0.5rem;
    color: #fff;
    margin-top: 0.3rem;
    font-size: 0.32rem;
    text-align: center;
    border: 1px solid #ffa520;
  }
}
</style>

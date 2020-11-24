<!-- tab切换 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="tab切换样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-tab1 />
      </div>

      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：简单Tab切换</dt>
          <dd>组件位置：@/views/common/tab/vrs-tab1/vrs-tab1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="tab切换样式二">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-tab2 />
      </div>

      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件：需要在main.js中引入vant组件Tab和Tabs</dd>
          <dd>组件地址：https://youzan.github.io/vant/1.x/#/zh-CN/tab</dd>
          <dd>组件位置：@/views/common/tab/vrs-tab2/vrs-tab2.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsTab1 from './vrs-tab1/vrs-tab1'
import vrsTab2 from './vrs-tab2/vrs-tab2'
export default {
  name: 'tab',
  components: {
    vrsTab1,
    vrsTab2
  }
}
</script>
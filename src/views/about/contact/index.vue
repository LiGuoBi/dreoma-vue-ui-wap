<!-- 联系我们 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="联系我们样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-contact1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件：需要在main.js中引入vant组件Popup和Picker</dd>
          <dd>组件地址：https://youzan.github.io/vant/1.x/#/zh-CN/popup</dd>
          <dd>组件位置：@/views/common/carousel/vrs-contact1/vrs-contact1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="联系我们样式二">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-contact2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件：联系我们样式二</dd>
        </dl>
      </div>
    </van-panel>
  </div>
</template>

<script>
import vrsContact1 from './vrs-contact1/vrs-contact1'
import vrsContact2 from './vrs-contact2/vrs-contact2'
export default {
  name: 'contact',
  components: {
    vrsContact1,
    vrsContact2
  }
}
</script>
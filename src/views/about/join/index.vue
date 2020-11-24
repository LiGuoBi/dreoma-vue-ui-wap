<!-- 加入我们 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="加入我们样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-join1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件：需要在main.js中引入vant组件Collapse和CollapseItem</dd>
          <dd>组件地址：https://youzan.github.io/vant/1.x/#/zh-CN/collapse</dd>
          <dd>组件位置：@/views/about/join/vrs-join1/vrs-join1.vue</dd>
        </dl>
      </div>
    </van-panel>
  </div>
</template>

<script>
import vrsJoin1 from './vrs-join1/vrs-join1'
export default {
  name: 'join',
  components: {
    vrsJoin1
  }
}
</script>
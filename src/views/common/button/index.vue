<!-- 按钮 -->
<template>
  <div class="item-list">
    
    <van-panel class="item-panel" title="button1">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <vrs-button1>默认按钮</vrs-button1>
        <br>
        <vrs-button1 class="round">圆形按钮</vrs-button1>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-button1</dd>
        </dl>
      </div>
    </van-panel>

    
  </div>
</template>

<script>
import vrsButton1 from './vrs-button1/vrs-button1'
export default {
  name: 'rs-button',
  components: {
    vrsButton1
  },
}
</script>
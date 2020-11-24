<template>
  <div>
    <van-panel class="item-panel" title="底栏样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-footer1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：列表样式一</dt>
          <dd>组件位置：@/views/common/footer-com/vrs-footer-com1/vrs-footer-com1.vue</dd>
        </dl>
      </div>
    </van-panel>
  </div>
</template>

<script>
import vrsFooter1 from './vrs-footer1/vrs-footer1'
export default {
  name: 'rs-footer',
  components: {
    vrsFooter1
  }
}
</script>
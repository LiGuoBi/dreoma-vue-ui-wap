<!-- 弹窗 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="steps1: 业务办理流程">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <vrs-steps1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：业务办理流程</dt>
          <dd></dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsSteps1 from './vrs-steps1/vrs-steps1'
export default {
  name: 'steps',
  components: {
    vrsSteps1
  }
}
</script>
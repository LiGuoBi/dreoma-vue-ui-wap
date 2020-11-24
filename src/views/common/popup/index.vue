<!-- 弹窗 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="弹窗1">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <vrs-popup1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：提交审核提示</dt>
          <dd>复制html和css使用，不用复制整个组件，js自己写，依赖于van-popup组件</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="弹窗2">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <vrs-popup2/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：审核不通过弹窗</dt>
          <dd>复制html和css使用，不用复制整个组件，js自己写，依赖于van-popup组件</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsPopup1 from './vrs-popup1/vrs-popup1'
import vrsPopup2 from './vrs-popup2/vrs-popup2'
export default {
  name: 'popup',
  components: {
    vrsPopup1,
    vrsPopup2
  }
}
</script>
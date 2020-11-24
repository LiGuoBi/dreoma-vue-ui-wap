<!-- my-card -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="卡片(card)1">
      <div class="com-wrap" style="background-color: #F7F8FA;">
        <!-- 组件 -->
        <vrs-my-card1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：卡片导航</dt>
          <dd>组件名称: vrs-my-card1.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsMyCard1 from './vrs-my-card1/vrs-my-card1'
export default {
  name: 'my-card',
  components: {
    vrsMyCard1
  }
}
</script>
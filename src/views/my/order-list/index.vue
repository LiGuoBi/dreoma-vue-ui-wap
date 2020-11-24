<!-- 我的-订单列表 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="vrs-order-list1:订单列表">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-order-list1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>订单列表1</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsOrderList1 from './vrs-order-list1/vrs-order-list1'
export default {
  name: 'order-list',
  components: {
    vrsOrderList1
  }
}
</script>
<!-- 商城-产品列表 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="goods-list1: 商城带购物车">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-goods-list1></vrs-goods-list1>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：goods-list1</dt>
          <dd>描述：带购物车的产品列表</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsGoodsList1 from './vrs-goods-list1/vrs-goods-list1'
export default {
  name: 'mall',
  components: {
    vrsGoodsList1
  }
}
</script>
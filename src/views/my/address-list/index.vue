<!-- 我的-收货地址列表 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="vrs-address-list1: 收货地址列表">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-address-list1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：收货地址列表1</dt>
          <dd>组件名称：vrs-address-list.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsAddressList1 from './vrs-address-list1/vrs-address-list1'
export default {
  name: 'address-list',
  components: {
    vrsAddressList1
  }
}
</script>
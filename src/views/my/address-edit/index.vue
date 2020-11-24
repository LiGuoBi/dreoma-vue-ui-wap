<!-- 我的-收货地址添加/编辑 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="vrs-address-edit1">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-address-edit1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>依赖组件：van-switch、van-popup、vrs-picker1</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsAddressEdit1 from './vrs-address-edit1/vrs-address-edit1'
export default {
  name: 'address-edit',
  components: {
    vrsAddressEdit1
  }
}
</script>
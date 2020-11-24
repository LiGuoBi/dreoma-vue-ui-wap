<!-- 选择器 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="选择器1">
      <div class="com-wrap" style="background: rgba(0, 0, 0, 0.4);">
        <!-- 组件 -->
        <vrs-picker1
          value="河北省,秦皇岛市,青龙满族自治县,八道河镇"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
        <!-- 53,5301,530113,530113106 -->
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：地区选择器四级联动</dt>
          <dd>与 van-popup 弹出层组件配合使用</dd>
          <dd>props: value key</dd>
          <dd>value:当前选中的地址</dd>
          <dd>value-key: 当前选中的地址的类型 code name 默认:name</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import { splitObjArr } from '@/utils/tool'
import vrsPicker1 from './vrs-picker1/vrs-picker1'
export default {
  name: 'picker',
  components: {
    vrsPicker1
  },
  data() {
    return {}
  },
  methods: {
    onCancel() {
      alert('您点击了取消')
    },
    onConfirm(values) {
      console.log(values)
      alert(splitObjArr(values, 'name', 'str'))
    }
  }
}
</script>
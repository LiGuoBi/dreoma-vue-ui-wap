<!-- tags标签类 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="标签1(tag)">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-tag1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-tag1.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsTag1 from './vrs-tag1/vrs-tag1'
export default {
  name: 'tag',
  components: {
    vrsTag1
  }
}
</script>
<!-- 发展历程 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="发展历程1">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-course1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：item(odd,even)设置奇偶样式</dt>
          <dd>组件位置：@/views/about/course/vrs-course1/vrs-course1.vue</dd>
        </dl>
      </div>
    </van-panel>
  </div>
</template>

<script>
import vrsCourse1 from './vrs-course1/vrs-course1'
export default {
  name: 'course',
  components: { vrsCourse1 }
}
</script>
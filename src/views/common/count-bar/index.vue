<template>
  <div class="item-list">

    <van-panel class="item-panel" title="统计样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-count-bar1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：数据循环获取</dt>
          <dd>组件位置：@/views/common/count-bar/vrs-count-bar1/vrs-count-bar1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="统计样式二">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-count-bar2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>运行依赖：需要安装conutup</dd>
          <dd>引用：需要引入countUp组件</dd>
          <dd>countUp位置：@/components/countUp.vue</dd>
          <dd>组件位置：@/views/common/count-bar/vrs-count-bar2/vrs-count-bar2.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsCountBar1 from './vrs-count-bar1/vrs-count-bar1'
import vrsCountBar2 from './vrs-count-bar2/vrs-count-bar2'
export default {
  name: 'footerCom',
  components: {
    vrsCountBar1,
    vrsCountBar2
  }
}
</script>
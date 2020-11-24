<!-- 标题类 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="标题样式1">
      <div class="com-wrap" style="background-color: #f5f5f5;">
        <!-- 组件 -->
        <vrs-title1 :icon="require('./vrs-title1/img/title1-1.png')" title="最新活动" />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：标题样式1</dt>
          <dd>props: </dd>
          <dd>icon: 图标地址(src文件夹下的图片地址需要转换为模块请求[require('地址')])</dd>
          <dd>title: 标题</dd>
          <dd>to: 跳转链接值和router.push一样</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsTitle1 from './vrs-title1/vrs-title1'
export default {
  name: 'rs-title',
  components: {
    vrsTitle1
  }
}
</script>
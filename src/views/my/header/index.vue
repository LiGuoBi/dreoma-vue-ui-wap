<!-- 个人中心头部 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="个人中心头部1">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-my-header1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：个人中心头部1</dt>
          <dd>props:</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="个人中心头部2">
      <div class="com-wrap" style="background: #fffbf5;">
        <!-- 组件 -->
        <vrs-my-header2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：个人中心头部2</dt>
          <dd>props:</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="个人中心头部3">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-my-header3 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：个人中心头部3</dt>
          <dd>props:</dd>
        </dl>
      </div>
    </van-panel>
  </div>
</template>

<script>
import vrsMyHeader1 from './vrs-my-header1/vrs-my-header1'
import vrsMyHeader2 from './vrs-my-header2/vrs-my-header2'
import vrsMyHeader3 from './vrs-my-header3/vrs-my-hesder3'
export default {
  name: 'my-header',
  components: {
    vrsMyHeader1,
    vrsMyHeader2,
    vrsMyHeader3
  }
}
</script>
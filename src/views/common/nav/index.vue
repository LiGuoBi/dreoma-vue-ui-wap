<!-- 导航 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="导航1">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-nav1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>轮播导航</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="导航2">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-nav2/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>导航2</dd>
        </dl>
      </div>
    </van-panel>
    
    <van-panel class="item-panel" title="导航3">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-nav3/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>导航3</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsNav1 from './vrs-nav1/vrs-nav1'
import vrsNav2 from './vrs-nav2/vrs-nav2'
import vrsNav3 from './vrs-nav3/vrs-nav3'
export default {
  name: 'rs-nav',
  components: {
    vrsNav1,
    vrsNav2,
    vrsNav3
  }
}
</script>
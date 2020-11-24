<template>
  <div class="item-list">

    <van-panel class="item-panel" title="顶栏样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-header1 />
      </div>

      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>标题(title)：获取路由meta添加的标题</dd>
          <dd>返回按钮：路由地址层级大于3层显示</dd>
          <dd>组件位置：@/views/common/header1/vrs-header1/var-header1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="顶栏样式二">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-header2 />
      </div>

      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>标题(title)：获取路由meta添加的标题</dd>
          <dd>返回按钮：路由地址层级大于3层显示</dd>
          <dd>组件位置：@/views/common/header-com/vrs-header2/var-header2.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="顶栏样式3">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-header3 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>标题(title)：获取路由meta添加的标题</dd>
          <dd>返回按钮：不在首页才显示</dd>
          <dd>导航：菜单使用 vant 的 popup (弹窗)实现，需要引入popup组件</dd>
          <dd>组件名称：var-header3.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsHeader1 from './vrs-header1/vrs-header1'
import vrsHeader2 from './vrs-header2/vrs-header2'
import vrsHeader3 from './vrs-header3/vrs-header3'
export default {
  name: 'rs-footer',
  components: {
    vrsHeader1,
    vrsHeader2,
    vrsHeader3
  }
}
</script>
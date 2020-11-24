<!-- 详情(富文本) -->
<template>
  <div>
    <van-panel class="item-panel" title="vrs-detail1: 活动详情，投票活动详情、作品详情(投票页)集合">
      <div class="com-wrap" style="background: #FFF5F4;">
        <!-- 组件 -->
        <vrs-detail1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：活动详情页</dt>
          <dd>组件名称：vrs-detail1</dd>
          <dd>活动详情：iframe 嵌入视频，</dd>
          <dd>活动详情带第三方 iframe 嵌入视频，活动[未开始/进行中]显示活动详情，活动[结束]显示活动风采</dd>
          <dd>投票活动详情：</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="文章详情2">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-detail2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：文章详情页</dt>
          <dd>组件名称：vrs-detail2</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="卡片详情3">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-detail3 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：卡片风格的详情模块</dt>
          <dd>组件名称：vrs-detail3</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="卡片详情4">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-detail4 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：卡片风格的详情模块</dt>
          <dd>组件名称：vrs-detail4</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="卡片详情5">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-detail5 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：卡片风格的详情模块</dt>
          <dd>组件名称：vrs-detail5</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsDetail1 from './vrs-detail1/vrs-detail1'
import vrsDetail2 from './vrs-detail2/vrs-detail2'
import vrsDetail3 from './vrs-detail3/vrs-detail3'
import vrsDetail4 from './vrs-detail4/vrs-detail4'
import vrsDetail5 from './vrs-detail5/vrs-detail5'
export default {
  name: 'detail',
  components: {
    vrsDetail1,
    vrsDetail2,
    vrsDetail3,
    vrsDetail4,
    vrsDetail5
  }
}
</script>
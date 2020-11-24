<!-- 轮播图 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="轮播图1" data-rs-plate="轮播图1">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：轮播切换,居中放大,包含标题</dt>
          <dd>组件位置：@/views/common/carousel/vrs-swiper1/vrs-swiper1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图2" data-rs-plate="轮播图2">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：轮播切换,居中放大,包含数据联动</dt>
          <dd>组件位置：@/views/common/carousel/vrs-swiper2/vrs-swiper2.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图3" data-rs-plate="轮播图3">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper3 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：左对齐，单列滚动轮播</dt>
          <dd>组件位置：@/views/common/carousel/vrs-swiper3/vrs-swiper3.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图4" data-rs-plate="轮播图4">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper4 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：垂直轮播展示</dt>
          <dd>组件位置：@/views/common/carousel/vrs-swiper4/vrs-swiper4.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图5" data-rs-plate="轮播图5">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper5 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：轮播切换，点击显示大图</dt>
          <dd>组件：查看大图需要引入ImagePreview</dd>
          <dd>import { ImagePreview } from 'vant'</dd>
          <dd>组件位置：@/views/common/carousel/vrs-swiper5/vrs-swiper5.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图6" data-rs-plate="轮播图6">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper6 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：轮播切换</dt>
          <dd>API: https://www.swiper.com.cn/api/index.html</dd>
          <dd>组件名称：vrs-swiper6</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图7" data-rs-plate="轮播图7">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper7 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：轮播公告</dt>
          <dt>组件名称：vrs-swiper7</dt>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="轮播图8" data-rs-plate="轮播图8">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-swiper8 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dt>组件名称：vrs-swiper8</dt>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsSwiper1 from './vrs-swiper1/vrs-swiper1'
import vrsSwiper2 from './vrs-swiper2/vrs-swiper2'
import vrsSwiper3 from './vrs-swiper3/vrs-swiper3'
import vrsSwiper4 from './vrs-swiper4/vrs-swiper4'
import vrsSwiper5 from './vrs-swiper5/vrs-swiper5'
import vrsSwiper6 from './vrs-swiper6/vrs-swiper6'
import vrsSwiper7 from './vrs-swiper7/vrs-swiper7'
import vrsSwiper8 from './vrs-swiper8/vrs-swiper8'
export default {
  name: 'carousel',
  components: {
    vrsSwiper1,
    vrsSwiper2,
    vrsSwiper3,
    vrsSwiper4,
    vrsSwiper5,
    vrsSwiper6,
    vrsSwiper7,
    vrsSwiper8
  }
}
</script>
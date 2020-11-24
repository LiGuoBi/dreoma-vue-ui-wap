<!-- 列表 -->
<template>
  <div class="item-list">
    <van-panel class="item-panel" title="列表样式一">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-list1 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：列表样式一</dt>
          <dd>组件位置：@/views/common/list/vrs-list1/vrs-list1.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式二">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-list2 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：列表样式二</dt>
          <dd>组件位置：@/views/common/list/vrs-list2/vrs-list2.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式3">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-list3 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-list3.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式4">
      <div class="com-wrap">
        <!-- 组件 -->
        <vrs-list4 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-list4.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式5">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-list5 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-list5.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式6">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-list6 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-list6.vue</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="列表样式7">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-list7 />
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>组件名称：vrs-list7.vue</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsList1 from './vrs-list1/vrs-list1'
import vrsList2 from './vrs-list2/vrs-list2'
import vrsList3 from './vrs-list3/vrs-list3'
import vrsList4 from './vrs-list4/vrs-list4'
import vrsList5 from './vrs-list5/vrs-list5'
import vrsList6 from './vrs-list6/vrs-list6'
import vrsList7 from './vrs-list7/vrs-list7'
export default {
  name: 'list',
  components: {
    vrsList1,
    vrsList2,
    vrsList3,
    vrsList4,
    vrsList5,
    vrsList6,
    vrsList7
  },

  // 使用路由守卫 beforeRouteEnter 代替生命周期 created，实现从详情页面返回保留数据不重新加载
  // 注意需要使用内置组件 keep-alive 缓存此组件
  beforeRouteEnter (to, from, next) {
    // 判断是否是从详情页面返回(通过路由的name判断)
    if (from.name != 'activity-detail') {
      // 重新加载页面数据
      next(vm => {
        // vm == this，重置data数据
        vm.active = 0
        vm.list = []
      })
    } else {
      // 缓存页面数据不做任何操作
      next()
    }
  },

  methods: {
    // 滚动加载通用方法 使用 van-list 组件
    /* onLoad() {
      this.getList()
    },
    async getList() {
      let res = await api_activityList({
        page: this.page,
        page_size: this.pageSize
      })
      // 赋值列表和总数
      this.list = [...this.list, ...res.data.item]
      this.total = res.data.total
      // 加载状态结束
      this.loading = false
      // 判断是否全部加载完毕
      if (this.pageSize * this.page >= this.total) {
        // 数据全部加载完成
        this.finished = true
      } else {
        this.page++
      }
    } */
  }

}
</script>
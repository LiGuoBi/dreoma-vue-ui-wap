<!-- 我的-信息列表 -->
<template>
  <div class="item-list">

    <van-panel class="item-panel" title="消息列表1">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-msg-list1/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>个人中心消息列表1</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="消息列表2">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-msg-list2/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>个人中心消息列表2</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="消息列表3">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-msg-list3/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>个人中心消息列表3</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="vrs-msg-list4: 明细">
      <div class="com-wrap" style="background: #F7F8FA;">
        <!-- 组件 -->
        <vrs-msg-list4/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：</dt>
          <dd>明细列表</dd>
        </dl>
      </div>
    </van-panel>

  </div>
</template>

<script>
import vrsMsgList1 from './vrs-msg-list1/vrs-msg-list1'
import vrsMsgList2 from './vrs-msg-list2/vrs-msg-list2'
import vrsMsgList3 from './vrs-msg-list3/vrs-msg-list3'
import vrsMsgList4 from './vrs-msg-list4/vrs-msg-list4'
export default {
  name: 'my-msg-list',
  components: {
    vrsMsgList1,
    vrsMsgList2,
    vrsMsgList3,
    vrsMsgList4
  }
}
</script>
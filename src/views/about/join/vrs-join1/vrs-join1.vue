<!--
  name: 加入我们样式一
  author: 杨栋芬
  desc: 需要在main.js中引入vant组件Collapse和CollapseItem
-->
<template>
  <div class="vrs-join1">
    <van-collapse v-model="activeNames">
      <van-collapse-item
        v-for="(item,index) in recruitList"
        :key="index"
        :name="index"
        :title="'【'+item.name+'】'"
      >
        <div class="vrs-content">
          <div class="var-recruit-item">
            <div class="flex-v">
              <img src="./img/5-3-1.png" class="vrs-icon">
              <p class="vrs-title">岗位职责</p>
            </div>
            <div class="vrs-dec" v-html="item.responsibility"></div>
          </div>

          <div class="var-recruit-item">
            <div class="flex-v">
              <img src="./img/5-3-2.png" class="vrs-icon">
              <p class="vrs-title">任职资格</p>
            </div>
            <div class="vrs-dec" v-html="item.membership"></div>
          </div>

          <div class="var-recruit-item">
            <div class="flex-v">
              <img src="./img/5-3-3.png" class="vrs-icon">
              <p class="vrs-title">福利待遇</p>
            </div>
            <div class="vrs-dec" v-html="item.remuneration"></div>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: 'vrs-join1',
  components: {},
  data() {
    return {
      activeNames: [0],
      recruitList: [
        {
          id: '1',
          name: '客服专员1',
          responsibility: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>',
          membership: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>',
          remuneration: '<p>2200＋提成，购买五险，提供食宿。茶学、茶艺、茶叶加工等相关专业优先，有茶艺师资格证优先。</p>'
        },
        {
          id: '2',
          name: '客服专员2',
          responsibility: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>',
          membership: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>',
          remuneration: '<p>2200＋提成，购买五险，提供食宿。茶学、茶艺、茶叶加工等相关专业优先，有茶艺师资格证优先。</p>'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.vrs-join1 {
  margin: 0rem 0.2rem;
  .vrs-content {
    padding: 0 0.3rem;
  }
}
.var-recruit-item {
  .vrs-title {
    color: #333333;
    letter-spacing: 0;
    line-height: 0.48rem;
    margin-left: 0.2rem;
  }
  .vrs-dec {
    line-height: 0.48rem;
  }
  .vrs-icon {
    @include wh(0.34rem);
  }
}
</style>
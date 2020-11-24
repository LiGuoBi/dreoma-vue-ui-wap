<!--
  name: tab切换样式二
  author: 杨栋芬
  desc: 需要在main.js中引入vant组件Tab和Tabs
-->
<template>
    <!-- 导航 -->
    <van-tabs v-model="active">
      <van-tab title="了解雪狼">
      </van-tab>
      <van-tab title="新闻动态">
      </van-tab>
      <van-tab title="人才招聘">
      </van-tab>
      <van-tab title="招商合作">
      </van-tab>
    </van-tabs>
</template>

<script>
export default {
  name: 'aboutUs',
  components: {
  },
  data() {
    return {
       active:0,
    }
  },
  computed: {},
  methods: {
  }
}
</script>
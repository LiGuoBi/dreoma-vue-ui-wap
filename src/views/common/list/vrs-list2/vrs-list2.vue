<!--
  name: 列表二
  author: 杨栋芬
  desc: 列表样式二
-->
<template>
  <div class="vrs-list2">
    <div class="vrs-item2" v-for="(value, index) in loadLists" :key="index">
      <router-link to="/" class="flex">
        <img :src="value.image" />
        <div class="vrs-right">
          <p class="vrs-title multiline-txt">{{ value.title }}</p>
          <p class="flex between vrs-time">
            <span class="vrs-blur">阅读量：{{ value.views }}</span>
            <span>{{ value.createtime }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list2',
  data() {
    return {
      imgHeader: '',
      loadLists: [
        {
          image: require('./img/list2-1.png'),
          title: '标题1',
          views: 100,
          createtime: '2019-06-25'
        },
        {
          image: require('./img/list2-2.png'),
          title: '标题2',
          views: 100,
          createtime: '2019-06-25'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list2 {
  padding: 0rem 0.3rem;
}
.vrs-item2 {
  padding-bottom: 0.3rem;
  img {
    @include wh(2rem, 1.6rem);
    margin-right: 0.2rem;
  }
  .vrs-right {
    flex: 1;
    .vrs-title {
      font-size: 0.28rem;
      line-height: 0.44rem;
      margin-bottom: 0.3rem;
      min-height: 0.92rem;
    }
    .vrs-time {
      span {
        font-size: 0.24rem;
        color: rgb(139, 139, 139);
      }
      .vrs-blur {
        color: rgb(83, 65, 250);
      }
    }
  }
}
</style>
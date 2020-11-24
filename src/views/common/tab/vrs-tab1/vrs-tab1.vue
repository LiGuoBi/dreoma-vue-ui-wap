<!--
  name: tab切换样式一
  author:杨栋芬
  desc: 简单tab切换
-->
<template>
  <div class="vrs-tab1 flex-wrap">
    <div
      v-for="(value, index) in tabLists"
      :key="index"
      :class="['vrs-lists', {active: checkId == index}]"
      @click="handelList(index, value.id)"
    >{{value.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'vrs-tab1',
  components: {},
  data() {
    return {
      tabLists: [
        { id: 0, title: '昆明' }, { id: 1, title: '大理' }
      ],
      checkId: 0
    }
  },
  computed: {},
  methods: {
    handelList(index) {
      this.checkId = index
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-tab1 {
  padding: 0 0.3rem;
  .vrs-lists {
    @include wh(1.6rem, 0.7rem);
    border: 1px solid #e3e3e3;
    border-radius: 0.12rem;
    margin-right: 0.16rem;
    margin-bottom: 0.16rem;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.28rem;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    &.hover {
      background-color: rgba(125, 81, 255, 1);
      color: $white;
      cursor: pointer;
    }
    &.active {
      background: rgba(125, 81, 255, 1);
      color: #fff;
      border: none;
    }
  }
}
</style>
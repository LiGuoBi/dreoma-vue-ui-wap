<!--
  name: 统计样式一
  author: 杨栋芬
  desc: 数据循环获取
-->
<template>
  <div class="vrs-count-bar1 bg flex-v">
    <div class="flex-item vrs-item" v-for="(value, index) in list" :key="index">
      <img class="vrs-icon" :src="value.img">
      <p class="vrs-name">{{value.name}}</p>
      <p>{{value.value}} {{value.unit}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-count-bar1',
  components: {},
  data() {
    return {
      list: [
        { img: require('./img/ab-1.png'), name: '行业经验', value: 10, unit: '年' },
        { img: require('./img/ab-2.png'), name: '合作伙伴', value: 500, unit: '+' },
        { img: require('./img/ab-3.png'), name: '用户选择', value: 10000, unit: '+' },        
        ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-count-bar1 {
  background-color: #e3e3e3;
  height: 2rem;
  .vrs-item {
    text-align: center;
  }
  .vrs-icon {
    @include wh(0.46rem);
    margin: 0 auto;
  }
  .vrs-name {
    padding: 0.2rem 0;
  }
}
</style>
<!-- 
  name: 列表3
  author: 小炜
 -->
<template>
  <div class="vrs-list3">
    <div class="vrs-item3 flex-v" v-for="i in 3" :key="i">
      <img class="vrs-pic" v-lazy="require('./img/list3-1.png')">
      <div class="flex-item ovh">
        <p class="vrs-title single-txt">关注民生，聚焦养老关注民生，聚焦养老</p>
        <p class="vrs-desc multiline-txt">
          工会高层高度关注工会员工养老健康问题，走访了20几位工会老年家…
        </p>
        <div class="flex-v vrs-browse">
          <img class="vrs-icon" src="./img/list3.png">
          <span class="flex-item">2348</span>
          <span>2019-06-19 12:23</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-list3',
  data() {
    return {
      list: []
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list3 {
  padding: 0 0.3rem;
}
.vrs-item3 {
  + .vrs-item3 {
    margin-top: 0.3rem;
  }
  .vrs-pic {
    width: 2.3rem;
    height: 1.8rem;
    border-radius: 0.08rem;
    margin-right: 0.2rem;
  }
  .vrs-title {
    font-size: 0.3rem;
    color: #333;
    font-weight: bold;
    line-height: 0.42rem;
    margin-bottom: 0.1rem;
  }
  .vrs-desc {
    height: 0.76rem;
    line-height: 0.38rem;
    font-size: 0.26rem;
    color: #555;
  }
  .vrs-browse {
    padding-top: 0.2rem;
    font-size: 0.24rem;
    color: #888;
    .vrs-icon {
      width: 0.3rem;
      height: 0.22rem;
      margin-right: 0.1rem;
    }
  }
}
</style>
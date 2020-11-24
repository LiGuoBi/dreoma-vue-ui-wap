
<template>
  <div class="vrs-course1">
    <div class="vrs-item flex" v-for="(item, index) in courseList" :key="index">
      <span class="vrs-time">{{item.title}}</span>
      <div class="vrs-stick">
        <i class="vrs-dot"></i>
        <i class="vrs-line"></i>
      </div>
      <div class="vrs-content">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vrs-course1',
  components: {},
  data () {
    return {
      courseList: []
    }
  },
  computed: {},
  methods: {},
  created () {
    this.courseList = [
      { title: '2012年', description: '历程是事物发展变化的连续性在时空的表现事物由于自身的运动' },
      { title: '2012年', description: '历程是事物发展变化的连续性在时空的表现事物由于自身的运动' },
      { title: '2012年', description: '历程是事物发展变化的连续性在时空的表现事物由于自身的运动' },
    ]
  }
}
</script>

<style lang='scss' scoped>
.vrs-course1 {
  .vrs-item {
    height: auto;
    line-height: 0.48rem;
    .vrs-time {
      width: 1.05rem;
      font-size: 0.28rem;
      color: #666666;
    }
    .vrs-stick {
      position: relative;
      margin: 0 0.16rem;
      padding-top: 0.12rem;
    }
    .vrs-dot {
      @include wh(0.2rem);
      display: block;
      border-radius: 100%;
      position: relative;
      z-index: 2;
    }
    .vrs-line {
      position: absolute;
      width: 1px;
      height: 100%;
      background: rgba(190, 166, 124, 1);
      left: 0.1rem;
      top: 0.2rem;
      z-index: 1;
    }
    .vrs-content {
      color: #666666;
      font-size: 0.28rem;
      flex: 1;
      padding-bottom: 0.3rem;
    }
  }
  .vrs-item:nth-of-type(odd) .vrs-dot {
    background: rgba(125, 81, 255, 1);
  }
  .vrs-item:nth-of-type(even) .vrs-dot {
    background: #ff9f00;
  }
}
</style>
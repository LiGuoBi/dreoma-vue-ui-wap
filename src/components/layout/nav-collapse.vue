<!-- 折叠 -->
<template>
  <div class="nav-collapse" :class="{open: foldH !== 0 }">
    <div class="collapse-title flex-v" @click="foldHandle">
      <div class="flex-item">{{title}}</div>
      <van-icon class="collapse-arrow" name="arrow" size="1.5em" />
    </div>
    <div class="collapse-wrapper" :style="{height: foldH == 'auto' ? 'auto' : foldH + 'px'}">
      <div class="collapse-content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-collapse',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      foldH: 0
    }
  },
  created() {
    if (this.open) {
      this.foldH = 'auto'
    }
  },
  methods: {
    foldHandle() {
      let H = this.$refs.content.offsetHeight
      if (this.foldH == 'auto') {
        // 防止高度为auto时，height没有过渡动画。(height:auto无法计算速度，所以会表现为无动画)
        this.foldH = H
        this.$nextTick(() => {
          setTimeout(() => {
            this.foldH = 0
          }, 10)
        })
      } else {
        if (this.foldH > 0) {
          this.foldH = 0
        } else {
          this.foldH = H
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.nav-collapse {
  background-color: #fff;
  margin-bottom: 0.3rem;
  .collapse-title {
    height: 1.2rem;
    padding: 0 0.3rem;
    font-size: $fs-lg;
  }
  .collapse-arrow {
    color: #969799;
    transform: rotate(90deg);
    transition: 0.3s;
  }
  .collapse-wrapper {
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    will-change: height;
  }
  &.open .collapse-arrow {
    transform: rotate(-90deg);
  }
}
</style>
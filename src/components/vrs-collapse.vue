<!-- 折叠 -->
<template>
  <div class="vrs-collapse" :class="{open: foldH !== 0 }">
    <div class="collapse-title" @click="foldHandle">
      <slot name="title"></slot>
    </div>
    <div class="collapse-wrapper" :style="{height: foldH == 'auto' ? 'auto' : foldH + 'px'}">
      <div class="collapse-content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* 
  props:
    open {Boolean} 是否展开
  slot:
    default 折叠面板内容
    title 自定义标题内容(如果需要加上图标旋转动画，可以给图标添加 .collapse-arrow)
*/
export default {
  name: 'vrs-collapse',
  props: {
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
.vrs-collapse {
  .collapse-arrow {
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
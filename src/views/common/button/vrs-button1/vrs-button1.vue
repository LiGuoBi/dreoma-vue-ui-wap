<!--
  name: button1
  author: 小炜
-->
<template>
  <button class="vrs-button1">
    <slot></slot>
  </button>
</template>

<style lang='scss' scoped>
.vrs-button1 {
  width: 100%;
  border-radius: 0.08rem;
  font-size: 0.34rem;
  height: 0.9rem;
  background-color: #EC4A2D;
  color: #fff;
  &.round {
    height: 0.8rem;
    border-radius: 0.4rem;
    width: 3.4rem;
    margin: 0 auto;
  }
  &.square {
    border-radius: 0;
  }
  &.plain {
    border: 1px solid #EC4A2D;
    color: #EC4A2D;
    background-color: transparent;
  }
}
</style>
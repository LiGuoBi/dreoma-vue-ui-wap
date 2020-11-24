<!-- 
  name: 标签1
  author: 小炜
 -->
<template>
  <div class="vrs-tags1 flex-wrap">
    <div class="vrs-tag1 single-txt" v-for="i in 6" :key="i">
      昆明旅游网
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-tag1',
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-tags1 {
  padding: 0 0 0 0.3rem;
}
.vrs-tag1 {
  width: 2.1rem;
  height: 0.76rem;
  line-height: 0.76rem;
  background-color: #F5F5F5;
  text-align: center;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  padding: 0 0.1rem;
}
</style>
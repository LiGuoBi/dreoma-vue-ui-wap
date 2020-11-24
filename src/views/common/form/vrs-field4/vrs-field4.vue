<!--
  name: 表单字段4
  author: 杨栋芬
-->
<template>
  <div class="vrs-field4">
    <div class="vrs-in-box flex-v">
      <img class="vrs-in-label" :src="option.icon" />
      <input
        class="vrs-in flex-item"
        :type="option.type"
        :value="option.value"
        :placeholder="option.tips"
        @input="$emit('change', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field4',
  components: {},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number], // v-model 值
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {
    'option.value': function() {
      this.setValue()
    },
    'option.columns': function() {
      this.setValue()
    }
  },
  created() {
    this.setValue()
  },
  methods: {
    setValue() {
      let val = this.option.value ? this.option.value : ''
      this.$emit('change', val)
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-field4 {
  + .vrs-field4 {
    margin-top: 0.2rem;
  }
  .vrs-in-box {
    border-radius: 0.1rem;
    background: #f8f8f8;
    padding: 0 0.3rem;
  }
  .vrs-in-label {
    @include wh(0.28rem, 0.36rem);
    padding-right: 0.3rem;
  }
  .vrs-in {
    height: 0.88rem;
    width: 100%;
  }
}
</style>
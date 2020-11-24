<!-- 输入框 -->
<template>
  <div class="vrs-field2">
    <div class="vrs-in-label">{{title}}</div>
    <div class="vrs-in-box">
      <input
        class="vrs-in"
        :type="type"
        :value="value"
        :placeholder="tips"
        @input="$emit('change', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field2-input',
  props: {
    title: String,
    type: String,
    tips: String,
    value: [String, Number],
  },
  watch: {
    value: function() {
      this.setValue()
    }
  },
  created() {
    this.setValue()
  },
  methods: {
    // 设置默认值
    setValue() {
      let val = this.value ? this.value : ''
      this.$emit('change', val)
    }
  }
}
</script>
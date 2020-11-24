<!--
  name: 表单字段3 - 输入框
  author: 小炜
-->
<template>
  <div class="vrs-field3 bor flex-v">
    <input
      class="vrs-in"
      :type="type"
      :value="value"
      :placeholder="tips"
      @input="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-input',
  props: {
    type: String,
    tips: String,
    value: [String, Number],
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>
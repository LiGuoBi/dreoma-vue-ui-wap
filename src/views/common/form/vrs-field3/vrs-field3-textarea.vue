<!--
  name: 表单字段3 - 文本域
  author: 小炜
-->
<template>
  <div class="vrs-field3 bor flex-v">
    <div class="vrs-in-area">
      <textarea
        class="lh text"
        :value="value"
        :placeholder="tips"
        @input="$emit('change', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-textarea',
  props: {
    tips: String,
    value: [String, Number],
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>
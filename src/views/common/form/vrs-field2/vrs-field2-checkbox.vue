<!-- 多选框 -->
<template>
  <div class="vrs-field2">
    <div class="vrs-in-label">{{title}}</div>
    <div
      v-for="(item, index) in checkboxs"
      :key="index"
      :class="['vrs-check', {on: item.checked}]"
      @click="onClick(index, item.checked)"
    >
      {{item.value}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field2-checkbox',
  props: {
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxs: []
    }
  },
  watch: {
    value() {
      this.setValue()
    },
    options() {
      this.setValue()
    }
  },
  created() {
    this.setValue()
  },
  methods: {
    // 设置默认值
    setValue() {
      this.checkboxs = this.options.map(item => {
        return {
          value: item,
          checked: this.value.indexOf(item) > -1 ? true : false
        }
      })
      this.$emit('change', this.value)
    },
    onClick(index, checked) {
      // 禁用多选
      if (this.disabled) return

      this.$set(this.checkboxs[index], 'checked', !checked)
      let vals = this.checkboxs.filter(item => item.checked)
      this.$emit('change', vals.map(item => item.value))
    },
  }
}
</script>
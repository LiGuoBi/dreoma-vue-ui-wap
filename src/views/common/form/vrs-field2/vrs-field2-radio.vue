<!-- 单选框 -->
<template>
  <div class="vrs-field2">
    <div class="vrs-in-label">{{title}}</div>
    <div
      v-for="(item, index) in radios"
      :key="index"
      :class="['vrs-check', {on: item.checked}]"
      @click="onClick(item.value)"
    >
      {{item.value}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field2-radio',
  props: {
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radios: []
    }
  },
  watch: {
    value() {
      this.setValue(this.value)
    },
    options() {
      this.setValue(this.value)
    }
  },
  created() {
    this.setValue(this.value)
  },
  methods: {
    onClick(item) {
      // 禁用单选
      if (this.disabled) return
      
      this.setValue(item)
    },
    setValue(val) {
      this.radios = this.options.map(item => {
        return {
          value: item,
          checked: item == val ? true : false
        }
      })
      this.$emit('change', val)
    }
  }
}
</script>
<!--
  name: 表单字段3 - 下拉选择
  author: 小炜
-->
<template>
  <div class="vrs-field3 bor">
    <div class="flex-v vrs-picker" @click="pickerShow = true">
      <input
        class="vrs-in flex-item"
        type="text"
        readonly
        :value="pickerName"
        :placeholder="tips"
      >
      <i class="bg vrs-arrow down"></i>
    </div>
    <van-popup v-model="pickerShow" position="bottom">
      <van-picker
        :columns="options"
        show-toolbar
        title="请选择"
        :value-key="valueKey"
        :default-index="pickerIndex"
        @cancel="pickerShow = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-picker',
  props: {
    tips: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: () => []
    },
    // 选项对象中，文字对应的 key 默认 title
    valueKey: {
      type: String,
      default: 'title'
    },
    value: [String, Number],
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      pickerShow: false, // 弹出
      pickerIndex: 0, // 选中项下标
      pickerName: ''
    }
  },
  watch: {
    value() {
      this.setValue()
    },
    options: function() {
      this.setValue()
    },
  },
  created() {
    this.setValue()
  },
  methods: {
    onConfirm(item, index) {
      this.pickerShow = false
      this.pickerIndex = index
      this.pickerName = item[this.valueKey]
      this.$emit('change', item.id)
    },
    // 设置默认值
    setValue() {
      let val = this.value ? this.value : ''
      if (val) {
        this.pickerIndex = this.options.findIndex(item => item.id == val)
        this.pickerName = this.options[this.pickerIndex][this.valueKey]
      }
      this.$emit('change', val)
    }
  }
}
</script>
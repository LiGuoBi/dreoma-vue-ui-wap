<!-- 选择器 -->
<template>
  <div class="vrs-field2">
    <div class="vrs-in-label">{{title}}</div>
    <div class="vrs-in-box flex-v" @click="pickerShow = true">
      <input
        class="vrs-in flex-item"
        type="text"
        readonly
        :value="pickerName"
        :placeholder="tips"
      >
      <i class="bg vrs-arrow"></i>
    </div>
    <van-popup v-model="pickerShow" position="bottom">
      <van-picker
        :columns="options"
        show-toolbar
        title="请选择"
        :default-index="pickerIndex"
        @cancel="pickerShow = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'vrs-field2-picker',
  props: {
    title: String,
    tips: String,
    options: {
      type: Array,
      default: () => []
    },
    value: [String, Number],
  },
  data() {
    return {
      pickerShow: false, // 弹出
      pickerIndex: 0, // 选中项下标
      pickerName: ''
    }
  },
  watch: {
    value: function() {
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
    // 设置默认值
    setValue() {
      let val = this.value ? this.value : ''
      if (val) {
        this.pickerIndex = this.options.indexOf(val)
        this.pickerName = val
      }
      this.$emit('change', val)
    },
    onConfirm(item, index) {
      this.pickerShow = false
      this.pickerIndex = index
      this.pickerName = item
      this.$emit('change', item)
    }
  }
}
</script>

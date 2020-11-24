<!--
  name: 表单字段2
  author: 小炜
  desc: 调用组件传入不同类型的type值渲染不同的输入组件
-->
<template>
  <!-- select选择 -->
  <vrs-field2-picker
    v-if="option.type == 'select'"
    :title="option.title"
    :tips="option.tips"
    :options="option.columns"
    :value="option.value"
    @change="onChange"
  />
  <!-- 多选框 -->
  <vrs-field2-checkbox
    v-else-if="option.type == 'checkbox'"
    :title="option.title"
    :options="option.columns"
    :value="option.value"
    :disabled="option.disabled"
    @change="onChange"
  />
  <!-- 单选框 -->
  <vrs-field2-radio
    v-else-if="option.type == 'radio'"
    :title="option.title"
    :options="option.columns"
    :value="option.value"
    :disabled="option.disabled"
    @change="onChange"
  />
  <!-- 上传图片 -->
  <vrs-field2-image
    v-else-if="option.type == 'image'"
    :title="option.title"
    :value="option.value"
    @change="onChange"
  />
  <!-- 输入框 -->
  <vrs-field2-input
    v-else
    :title="option.title"
    :type="option.type"
    :tips="option.tips"
    :value="option.value"
    @change="onChange"
  />
</template>

<script>
import vrsField2Input from './vrs-field2-input'
import vrsField2Picker from './vrs-field2-picker'
import vrsField2Checkbox from './vrs-field2-checkbox'
import vrsField2Radio from './vrs-field2-radio'
import vrsField2Image from './vrs-field2-image'
export default {
  name: 'vrs-field2',
  components: {
    vrsField2Input,
    vrsField2Picker,
    vrsField2Checkbox,
    vrsField2Radio,
    vrsField2Image
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number, Boolean, Array], // v-model 值
    option: { // 字段配置数据
      type: Object,
      required: true
    }
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style lang='scss'>
.vrs-field2 {
  + .vrs-field2 {
    margin-top: 0.3rem;
  }
  .vrs-in-label {
    line-height: 0.46rem;
    font-size: 0.3rem;
    color: #888888;
  }
  // 输入框
  .vrs-in-box {
    border: 1px solid #979797;
    border-radius: 0.08rem;
    margin-top: 0.2rem;
    padding: 0 0.2rem;
  }
  .vrs-in {
    height: 0.8rem;
    width: 100%;
  }
  .vrs-arrow {
    @include wh(0.26rem);
    margin-left: 0.2rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTEzVDE1OjIzOjA3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0xM1QxNToyMzo1MSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNy0xM1QxNToyMzo1MSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTM5MWU0Ny1lNDRhLTYwNDUtYWEzOC1iN2ZjYWM0YWZkOWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzUzOTFlNDctZTQ0YS02MDQ1LWFhMzgtYjdmY2FjNGFmZDliIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzUzOTFlNDctZTQ0YS02MDQ1LWFhMzgtYjdmY2FjNGFmZDliIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTM5MWU0Ny1lNDRhLTYwNDUtYWEzOC1iN2ZjYWM0YWZkOWIiIHN0RXZ0OndoZW49IjIwMTktMDctMTNUMTU6MjM6MDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/JVq2AAABF0lEQVRIie3WwW3DIBgF4Pf75Fs7SkbwCNmg9hGxRJcwHO0NukJHcDdIN2huPvF6SIhoElvgEllq/W78Aj4BQiAksUaKVdQN3uCHxl8na21tjNk/ygnnJ3lasbW2BtCJyJu1tsuNGmP6YP4aOG81ySroV+fEjTG9iLz4trcKABCRVwDH3Pg1CuB4tk6wUurgnKty4vdQ51yllDpcYADQWg+58ClUaz34wo/rlAOPQW/g3+Kx6F14KZ6CTsKpeCo6C8fiS1AAEJIQkbk+aNt2VxTFO4CnoNyTlCUoyTh4Bg8ThXo4+nWa2PZk1CfpWfQ4yc+g/JGKApFnfJ2u657HcdwBQFmWQ9M0XynjL2e8Rv7f12eD/z78Df1A/oT9ETg7AAAAAElFTkSuQmCC);
  }
  // 单选 多选
  .vrs-check {
    margin-top: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #F9F9F9;
    border-radius: 0.08rem;
    padding: 0 0.3rem;
    &.on {
      background-color: #FFF5F4;
      color: #EC4A2D;
    }
  }
  // 上传图片
  .van-uploader {
    margin-top: 0.2rem;
    .van-uploader__preview {
      margin: 0 0.25rem 0.25rem 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
    .van-uploader__upload {
      margin: 0;
    }
  }
}
</style>
<!--
  name: 表单字段3 - 上传图片
  author: 小炜
  desc: 选择的图片是本地的，需要在提交时上传
-->
<template>
  <div class="vrs-field3">
    <div class="vrs-file-label">{{title}}</div>
    <van-uploader
      class="vrs-images"
      v-model="fileList"
      multiple
      :max-count="9"
      :max-size="6291456"
      preview-size="2rem"
      @oversize="onOversize"
    />
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-text-img',
  props: {
    title: {
      type: String,
      default: '上传图片'
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      fileList: this.value
    }
  },
  watch: {
    // 监听 value 更新 fileList
    value(newValue) {
      this.fileList = newValue
    },
    // 监听 fileList 更新 value
    fileList(newFile) {
      this.$emit('change', newFile)
    },
  },
  methods: {
    onOversize() {
      this.$vrsToast('图片最大只能上传6MB')
    }
  }
}
</script>
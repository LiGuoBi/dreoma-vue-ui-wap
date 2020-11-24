<!--
  name: 表单字段3 - 文本域和上传图片的结合
  author: 小炜
  desc: 选择的图片是本地的，需要在提交时上传
-->
<template>
  <div class="vrs-field3 bor">
    <div class="vrs-in-area">
      <textarea
        class="lh text"
        :value="content"
        :placeholder="tips"
        @input="$emit('update:content', $event.target.value)"
      ></textarea>
    </div>
    <div class="vrs-img-list">
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="9"
        :max-size="6291456"
        preview-size="1.88rem"
        @oversize="onOversize"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-text-img',
  props: {
    tips: String,
    content: [String, Number],
    imgs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fileList: this.imgs
    }
  },
  watch: {
    // 监听 imgs 更新 fileList
    imgs() {
      this.fileList = this.imgs
    },
    // 监听 fileList 更新 imgs
    fileList: function (newFile) {
      this.$emit('update:imgs', newFile)
    }
  },
  methods: {
    onOversize() {
      this.$vrsToast('图片最大只能上传6MB')
    }
  }
}
</script>
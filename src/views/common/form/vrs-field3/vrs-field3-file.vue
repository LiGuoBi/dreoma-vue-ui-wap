<!--
  name: 表单字段3 - 上传文件
  author: 小炜
  desc: 
-->
<template>
  <div class="vrs-field3" style="margin-top: 0;">
    <div class="vrs-file-label flex-v">
      <span class="flex-item">{{title}}</span>
      <van-uploader
        v-model="fileList"
        :preview-image="false"
        :max-size="6291456"
        :max-count="9"
        multiple
        @oversize="onOversize"
        accept="*"
      >
        <!-- accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt" -->
        <i class="vrs-up-icon bg"></i>
      </van-uploader>
    </div>
    <div class="vrs-file-list">
      <div class="vrs-file flex-v" v-for="(item, index) in fileList" :key="index">
        <i class="vrs-icon bg"></i>
        <div class="flex-item ovh">
          <p class="single-txt">{{item.file.name}}</p>
          <p class="vrs-size">{{item.file.size | fileSize}}</p>
        </div>
        <i class="vrs-close-icon bg" @click="delFile(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-field3-text-img',
  props: {
    title: {
      type: String,
      default: '上传附加'
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
      this.$vrsToast('文件最大只能上传6MB')
    },
    delFile(index) {
      this.fileList.splice(index, 1)
    }
  },
  filters: {
    fileSize(fileByte) {
      var fileSizeByte = fileByte
      var fileSizeMsg = ''
      if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + 'KB'
      else if (fileSizeByte == 1048576) fileSizeMsg = '1MB'
      else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + 'MB'
      else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = '1GB'
      else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
      else fileSizeMsg = '文件超过1TB'
      return fileSizeMsg
    }
  }
}
</script>
<!-- 上传图片 -->
<template>
  <div class="vrs-field2">
    <div class="vrs-in-label">{{title}}</div>
    <van-uploader
      v-model="fileList"
      multiple
      :max-count="9"
      :max-size="6291456"
      :after-read="uploadHandle"
      preview-size="2rem"
      @delete="delImg"
      @oversize="onOversize"
    />
  </div>
</template>

<script>
import { api_upload } from '@/api'
export default {
  name: 'vrs-field2-image',
  props: {
    title: String,
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  watch: {
    value() {
      this.setValue()
    },
  },
  created() {
    this.setValue()
  },
  methods: {
    // 设置默认值
    setValue() {
      this.fileList = this.value
      // 图片ID数组
      this.$emit('change', this.fileList.map(item => item.id))
    },
    uploadHandle() {
      /* 
        因为 fileList 绑定了 v-model 选择完图片就会把还没有上传的图片添加到 fileList
        所以需要取出没有上传的图片，上传完成后再添加到 fileList
        网络图片有id，本地图片没有id
      */
      // 获取需要上传的图片
      let files = this.fileList.filter((item) => !item.id)
      // 获取上传完成的图片
      this.fileList = this.fileList.filter((item) => item.id)
      // 上传图片
      const formData = new FormData()
      files.forEach(element => {
        formData.append('demo[]', element.file)
      })

      this.$vrsToast('上传中...', 'loading')
      api_upload(formData).then(res => {
        this.$vrsToast(res.msg)
        // 上传完成的图片添加到 fileList
        this.fileList = [...this.fileList, ...res.data]
        // 触发当前实例上的事件。附加参数都会传给监听器回调。 
        this.$emit('change', this.fileList.map(item => item.id))
      }, err => {
        console.error(err)
      })
    },
    delImg() {
      this.$emit('change', this.fileList.map(item => item.id))
    },
    onOversize() {
      this.$vrsToast('图片最大只能上传6MB')
    }
  }
}
</script>

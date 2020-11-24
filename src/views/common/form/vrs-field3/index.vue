<!--
  name: 表单字段3
  author: 小炜
  desc:
    封装多个表单组件
    此组件(vrs-field3)只是为了聚合和展示组件的使用方式。使用时不需要复制此组件
    css 样式是一个单独的文件，在使用组件的源文件中引入，或者在全局 APP.vue 中引入 vrs-field3.scss
    选择联系人 数据通过在接口中获取，不是通过传入获得。
-->
<template>
  <div class="vrs-field3-from">
    <vrs-field3-input tips="请输入内容" v-model="text_Key" />
    <!-- 下拉选择 value-key 选项对象中，文字对应的 key 默认 title -->
    <vrs-field3-picker tips="请选择" :options="pickList" value-key="name" v-model="picker_key" />
    <!-- 文本域和图片上传 -->
    <vrs-field3-text-img tips="请输入提案内容" :content.sync="content_key" :imgs.sync="imgList" />
    <!-- 文本域 -->
    <vrs-field3-textarea tips="请输入备注" v-model="text_key"/>
    <!-- 上传图片 -->
    <vrs-field3-image v-model="imagesList" />
    <!-- 上传文件 -->
    <vrs-field3-file v-model="fileList" />
    <!-- 选择联系人-单选 max:最多能选择的联系人，默认值 0 不限制 -->
    <vrs-field3-radio v-model="radioVal" :max="4" />
    <!-- 选择联系人-多选 -->
    <vrs-field3-checkbox v-model="checkboxVal" />

    <van-button class="mt30" size="large" type="danger" @click="formSubmit3">提交3</van-button>
  </div>
</template>

<script>
import vrsField3Input from './vrs-field3-input'
import vrsField3Picker from './vrs-field3-picker'
import vrsField3TextImg from './vrs-field3-text-img'
import vrsField3Textarea from './vrs-field3-textarea'
import vrsField3Image from './vrs-field3-image'
import vrsField3File from './vrs-field3-file'
import vrsField3Radio from './vrs-field3-radio'
import vrsField3Checkbox from './vrs-field3-checkbox'
export default {
  name: 'vrs-field3',
  components: {
    vrsField3Input,
    vrsField3Picker,
    vrsField3TextImg,
    vrsField3Image,
    vrsField3File,
    vrsField3Radio,
    vrsField3Textarea,
    vrsField3Checkbox
  },
  data() {
    return {
      text_Key: '文本框内容',
      picker_key: '4',
      content_key: '文本域内容',
      imgList: [
        {id: '22', url: 'http://img4.imgtn.bdimg.com/it/u=1011025542,1440730234&fm=26&gp=0.jpg'}
      ],
      text_key: '',
      imagesList: [
        {id: '22', url: 'http://img4.imgtn.bdimg.com/it/u=1011025542,1440730234&fm=26&gp=0.jpg'}
      ],
      fileList: [
        {
          file: {
            name: 'XLS 工作表.xls',
            size: 6656,
            type: 'application/vnd.ms-excel',
          },
          id: '61',
          url: 'http://eibk.com/upload/2019-08-12/XLS 工作表.xls'
        }
      ],
      radioVal: [
        {
          avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/2lOPst5oIVwiaroNEEl3O7sxvA2MWLfQCZFxsC0VKSjsmdD9UDv8ScicicIk7ibs4y15Q2EYKWLK1iaqe36xzp8LCZQ/132',
          id: '48',
          nickname: '张炜迪'
        }
      ],
      checkboxVal: [
        {
          avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIKcL5Xx8Dswclk9nDbhsDohLXBgqS5SeibDN3hqEJTSk3pDgIDBNfPyy9UFlQlUFpp94Dmgm13MSA/132',
          id: '51',
          nickname: '杨善涛'
        },
      ],
      pickList: [
        { name: 'javascript', id: 1 },
        { name: 'css3', id: 2 },
        { name: 'html5', id: 3 },
        { name: 'python', id: 4 }
      ]
    }
  },
  created() {
    // setTimeout(() => {
    //   this.checkboxVal = []
    // }, 1000)
  },
  methods: {
    formSubmit3() {
      // 上传图片
      // 拆分upimgs数组获取需要上传的图片和上传完成的图片
      let upimgs = this.imgList.filter((item) => !item.id) // 本地图片
      let webImgs = this.imgList.filter((item) => item.id) // 网络图片
      /* const formData = new FormData()
      upimgs.forEach(element => {
        formData.append('file[]', element.file)
      })
      this.$vrsToast('上传中...', 'loading')
      api_upload(formData).then(res => {
        this.$vrsToast(res.msg)
        webImgs = [...webImgs, ...res.data]
        // 获取到上传的图片，提交表单
      }, err => {
        this.$vrsToast(err.msg)
      }) */

      // 打印提交数据
      console.log(this.text_Key)
      console.log(this.picker_key)
      console.log(this.content_key)
      console.log(upimgs)
      console.log(webImgs)
      console.log(this.imagesList.filter((item) => !item.id)) // 本地图片
      console.log(this.imagesList.filter((item) => item.id)) // 网络图片
      console.log(this.fileList.filter((item) => !item.id)) // 本地文件
      console.log(this.fileList.filter((item) => item.id)) // 网络文件
      console.log(this.text_key)
      console.log(this.radioVal)
      console.log(this.checkboxVal)
    }
  }
}
</script>

<style lang='scss'>
@import './vrs-field3.scss';

.vrs-field3-from {
  padding: 0 0.5rem;
}
</style>
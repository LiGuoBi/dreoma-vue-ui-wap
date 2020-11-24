<!--
  name: 表单字段1
  author: 小炜
  desc: 调用组件传入不同类型的type值渲染不同的输入组件
-->
<template>
  <!-- 验证码 -->
  <div class="vrs-field1" v-if="option.type == 'smsCode'">
    <div class="flex">
      <div class="vrs-in-box flex-item flex-v">
        <span class="vrs-in-label">{{option.title}}</span>
        <input
          class="vrs-in flex-item"
          type="number"
          :placeholder="option.tips"
          @input="$emit('change', $event.target.value)"
        >
      </div>
      <!-- 获取验证码组件 -->
      <get-code class="vrs-code-btn" :mobile="phone" :name="codeName"></get-code>
    </div>
  </div>
  <!-- picker选择 -->
  <div class="vrs-field1" v-else-if="option.type == 'picker'">
    <div class="vrs-in-box flex-v" @click="pickerShow = true">
      <span class="vrs-in-label">{{option.title}}</span>
      <input
        class="vrs-in flex-item"
        type="text"
        readonly
        :value="pickerName"
        :placeholder="option.tips"
      >
      <img class="vrs-down-icon" src="./img/field1.png">
    </div>
    <van-popup v-model="pickerShow" position="bottom">
      <van-picker
        :columns="option.columns"
        show-toolbar
        title="请选择"
        value-key="name"
        :default-index="pickerIndex"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
  <!-- 多行文本 -->
  <div v-else-if="option.type == 'textarea'" class="vrs-field1">
    <div class="vrs-in-box vrs-rich-in-box">
      <div class="vrs-rich-title">{{option.title}}</div>
      <textarea
        class="vrs-rich-in "
        :value="option.value"
        :placeholder="option.tips"
        @input="$emit('change', $event.target.value)"
      ></textarea>
    </div>
  </div>
  <!-- 上传图片 -->
  <div v-else-if="option.type == 'image'" class="vrs-field1">
    <div class="vrs-image-title">{{option.title}}</div>
    <van-uploader
      v-model="fileList"
      multiple
      :max-count="6"
      :max-size="6291456"
      preview-size="2rem"
      @oversize="onOversize"
    />
    <div class="vrs-image-tips">{{option.tips}}</div>
  </div>
  <div v-else class="vrs-field1">
    <!-- <input> type 属性 -->
    <div class="vrs-in-box flex-v">
      <span class="vrs-in-label">{{option.title}}</span>
      <input
        class="vrs-in flex-item"
        :type="option.type"
        :value="option.value"
        :placeholder="option.tips"
        @input="$emit('change', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
import getCode from '@/components/get-code'
export default {
  name: 'vrs-field1',
  components: {
    getCode
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number, Array], // v-model 值
    option: {
      type: Object,
      required: true
    },
    phone: {
      type: String,
      default: ''
    },
    codeName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pickerShow: false,
      pickerName: '',
      pickerIndex: 0,
      fileList: []
    }
  },
  watch: {
    'option.value': function() {
      this.setValue()
    },
    'option.columns': function() {
      this.setValue()
    },
    // 监听 fileList 更新 value
    fileList(newFile) {
      this.$emit('change', newFile)
    },
  },
  created() {
    this.setValue()
  },
  methods: {
    setValue() {
      let val = this.option.value ? this.option.value : ''
      if (this.option.type == 'picker' && val) {
        this.pickerIndex = this.option.columns.findIndex(item => item.id == val)
        this.pickerName = this.option.columns[this.pickerIndex].name
      } else if (this.option.type == 'image') {
        val = val == '' ? [] : val
        this.fileList = val
      }
      this.$emit('change', val)
    },
    // 选择器
    onCancel() {
      this.pickerShow = false
    },
    onConfirm(item) {
      this.pickerShow = false
      this.pickerName = item.name
      this.$emit('change', item.id)
    },
    // 图片
    onOversize() {
      this.$vrsToast('图片最大只能上传6MB')
    }
  }
}
</script>

<style lang="scss">
// 图片
.vrs-field1 {
  .van-uploader__wrapper {
    > div {
      margin: 0 0.24rem 0.24rem 0;
    }
    > div:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>

<style lang='scss' scoped>
.vrs-field1 {
  + .vrs-field1 {
    margin-top: 0.2rem;
  }
  .vrs-in-box {
    border: 1px solid #C6C6C6;
    border-radius: 0.08rem;
  }
  .vrs-in-label {
    width: 1.7rem;
    padding-left: 0.3rem;
    font-size: 0.3rem;
  }
  .vrs-in {
    height: 0.76rem;
    width: 100%;
  }
  .vrs-code-btn {
    display: block;
    width: 2.4rem;
    border-radius: 0.08rem;
    height: 0.8rem;
    background-color: #EC4A2D;
    color: #fff;
    margin-left: 0.2rem;
    font-size: 0.28rem;
    &.active {
      background-color: #999;
    }
  }
  .vrs-down-icon {
    @include wh(0.22rem, 0.14rem);
    margin: 0 0.2rem;
  }

  .vrs-rich-in-box {
    padding: 0 0.3rem;
  }
  .vrs-rich-title {
    border-bottom: 1px solid #EDEDED;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .vrs-rich-in {
    width: 100%;
    display: block;
    margin: 0.2rem 0;
    height: 1.2rem;
    line-height: 0.4rem;
  }
  .vrs-image-title {
    padding: 0.3rem 0;
  }
  .vrs-image-tips {
    color: #C6C6C6;
    padding-top: 0.1rem;
  }
}
</style>

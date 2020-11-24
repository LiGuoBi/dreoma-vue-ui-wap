<!-- 
  name: 添加/编辑收货地址
  author: 小炜
 -->
<template>
  <div class="vrs-address-edit1">
    <div class="vrs-crad">
      <div class="vrs-cell flex-v">
        <span class="vrs-name">收货人</span>
        <input class="vrs-in flex-item" type="text" placeholder="输入您的姓名" v-model="formData.name" />
      </div>
      <div class="vrs-cell flex-v">
        <span class="vrs-name">联系电话</span>
        <input class="vrs-in flex-item" type="tel" placeholder="输入您的联系电话" v-model="formData.phone" />
      </div>
      <div class="vrs-cell flex-v" @click="pickerShow = true">
        <span class="vrs-name">所在地区</span>
        <input class="vrs-in tr flex-item" type="text" placeholder="请选择" :value="formData.area | formatArea" readonly />
        <i class="bg vrs-arrow-right"></i>
      </div>
      <div class="vrs-rich-in">
        <textarea class="vrs-in lh" placeholder="请输入详细地址" v-model="formData.address"></textarea>
      </div>
    </div>
    <div class="vrs-default flex-v between">
      <span>设为默认</span>
      <van-switch v-model="checked" active-color="#40AE36" inactive-color="#eee" size="22px" />
    </div>
    <button class="vrs-button1" @click="save">保存</button>
    <button class="vrs-button1 plain">取消</button>
    <!-- picker 弹窗 -->
    <van-popup v-model="pickerShow" position="bottom">
      <vrs-picker1
        :value="formData.area"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- picker 弹窗 end -->
  </div>
</template>

<script>
import vrsPicker1 from '@/views/common/picker/vrs-picker1/vrs-picker1'
import { splitObjArr } from '@/utils/tool'
export default {
  name: 'vrs-address-edit1',
  components: {
    vrsPicker1
  },
  data() {
    return {
      pickerShow: false,
      checked: true,
      formData: {
        area: '', // 所在地区
      }
    }
  },
  computed: {},
  methods: {
    onCancel() {
      this.pickerShow = false
    },
    onConfirm(values) {
      console.log(values)
      this.formData.area = splitObjArr(values, 'name', 'str')
      this.pickerShow = false
    },
    save() {
      console.log(this.formData)
    }
  },
  filters: {
    formatArea(area) {
      return area.split(',').join('')
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-address-edit1 {
  padding: 0.2rem 0.3rem;
  .vrs-crad {
    background: #fff;
    border-radius: 0.08rem;
  }
  .vrs-cell {
    height: 0.88rem;
    border-bottom: 1px solid #eee;
    padding: 0 0.2rem;
  }
  .vrs-arrow-right {
    @include wh(0.12rem, 0.22rem);
    margin-left: 0.2rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAGDP02MAAAABGdBTUEAALGPC/xhBQAAAV9JREFUOBF9k0lSwzAQRW1j9hzH9ilImMIJCHFl2OcUDMWwhlCEY7DwcKZ44LUSGQnLqEql1v/9v6Ru2/PMked5Y+51nGXZTsUErQY1UHnI1hbabWDG3UYCgEsLwPFGAUVRpCoAWXUpZVme9g7tWAJk52aCb5IS43DdNM0mMAkUO8CTOI73uADcbWEmiXdkAYdN0LbtN+TSRXoHq/kgiXI2RFZcYipk7x3YVkEQ2EqsJijspkmNeyCZVp3UBfAcMe2WCuMEhcB3LSTzt0lCDAz1DJJHvu9vKdsx65Kq3w/k2+/m0me06ZPkkDlPkuTxr7BXKEngxAuWD047Yk058VlwGU7BnlKf04QT3xFKl2858fVfgQjlE6vr+k1EzOmggOpd4bqRRHQzrvUiBj2Bvj9cSNPTKIqeJFGPToDjGMctRIjrAscHnWSuvvxIPOxLeoDjCsc7M8EZU3/nD+BK/gFGYMmAFuGb7AAAAABJRU5ErkJggg==);
  }
  .vrs-name {
    width: 1.5rem;
  }
  .vrs-in {
    height: 100%;
    width: 100%;
  }
  .vrs-rich-in {
    padding: 0.2rem;
    height: 1.6rem;
  }
  .vrs-default {
    height: 0.88rem;
    background-color: #fff;
    margin: 0.2rem 0 0.7rem;
    padding: 0 0.2rem;
  }
  // button1 样式
  .vrs-button1 {
    margin-top: 0.3rem;
    width: 100%;
    border-radius: 0.08rem;
    font-size: 0.34rem;
    height: 0.9rem;
    background-color: #EC4A2D;
    color: #fff;
    &.plain {
      border: 1px solid #EC4A2D;
      color: #EC4A2D;
      background-color: transparent;
    }
  }
}
</style>
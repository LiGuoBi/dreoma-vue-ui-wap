<template>
  <div>

    <van-panel class="item-panel" title="表单字段1">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <template v-for="(field, index) in fields1">
          <!-- 判断验证码类型 添加 phone 属性 -->
          <vrs-field1
            v-if="field.type == 'smsCode'"
            :key="index"
            :option="field"
            :phone="formData1[fields1[0].name]"
            code-name="login"
            v-model="formData1[field.name]"
          />
          <vrs-field1 v-else :key="index" :option="field" v-model="formData1[field.name]" />
        </template>
        <van-button class="mt30" size="large" type="danger" @click="formSubmit1">提交1</van-button>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：表单字段1</dt>
          <dd>依赖组件：van-popup van-picker get-code</dd>
          <dd>
            props: option {Object} 必填, phone {String} 可选, code-name {String} 可选
          </dd>
          <dd>
            option.type为验证码类型时需要的props: phone 手机号、code-name 验证码标识
          </dd>
          <dd>option 对象的数据结构</dd>
          <dd>title: 标题</dd>
          <dd>tips: placeholder 提示</dd>
          <dd>
            type: 输入框类型支持的(text, number, tel, password, smsCode:验证码, picker, textarea, image)
          </dd>
          <dd>name: 提交表单的字段名(key)</dd>
          <dd>value: 输入框的值</dd>
          <dd>columns: picker数据 对象数组{id: '', title: ''}</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="表单字段2">
      <div class="com-wrap" style="padding: 0.3rem 0.5rem">
        <vrs-field2
          v-for="field in fields2"
          :key="field.id"
          :option="field"
          v-model="formData2[field.name]"
        />
        <van-button class="mt30" size="large" type="danger" @click="formSubmit2">提交2</van-button>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：表单字段2</dt>
          <dd>依赖组件：van-popup van-picker van-uploader $vrsToast</dd>
          <dd>props: option {Object} 必填</dd>
          <dd>option 对象的数据结构</dd>
          <dd>title: 标题</dd>
          <dd>tips: placeholder 提示</dd>
          <dd>
            type: 输入框类型支持的(text, number, tel, password, textarea, radio,
            checkbox, select, file, image)
          </dd>
          <dd>name: 提交表单的字段名(key)</dd>
          <dd>value: 默认值(输入框的值为checkbox和image传入数组)</dd>
          <dd>columns: radio, checkbox, select数据</dd>
          <dd>disabled: radio, checkbox 禁用单选多选</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="表单字段3">
      <div class="com-wrap">
        <vrs-field3/>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：表单字段3</dt>
          <dd>使用方式：</dd>
          <dd>vrs-field3目录下的index.vue只是一个表单样式3组件的使用方式展示，在项目中使用时可以删除。</dd>
          <dd>需要用到的全局组件：van-popup、van-picker、van-checkbox、van-uploader、</dd>
          <dd>在用到组件的源文件中引入 vrs-field3.scss 样式文件，或者在全局引入</dd>
          <dd>vrs-field3-input.vue 就像使用input组件一样使用</dd>
          <dd>vrs-field3-text-img.vue 返回的图片是本地地址，还需要在提交表单时上传</dd>
          <dd>注意：选择联系人组件调用到接口需要在请求中设置token，接口来源：学习工会系统</dd>
        </dl>
      </div>
    </van-panel>

    <van-panel class="item-panel" title="表单字段4">
      <div class="com-wrap pad-lr">
        <!-- 组件 -->
        <template v-for="(field, index) in fields4">
          <vrs-field4 :key="index" :option="field" v-model="formData4[field.name]" />
        </template>
        <button class="vrs-cs-button" @click="formSubmit4">提交4</button>
      </div>
      <div slot="footer">
        <!-- 说明 -->
        <dl class="tip-box">
          <dt>TIP：表单字段4</dt>
          <dd>option 对象的数据结构</dd>
          <dd>tips: placeholder 提示</dd>
          <dd>type: input支持的type</dd>
          <dd>name: 提交表单的字段名(key)</dd>
          <dd>value: 默认值</dd>
          <dd>icon: 图标地址</dd>
        </dl>
      </div>
    </van-panel>
    
  </div>
</template>

<script>
import vrsField1 from './vrs-field1/vrs-field1'
import vrsField2 from './vrs-field2/index'
import vrsField3 from './vrs-field3/index'
import vrsField4 from './vrs-field4/vrs-field4'
export default {
  name: 'rs-form',
  components: {
    vrsField1,
    vrsField2,
    vrsField3,
    vrsField4
  },
  data() {
    return {
      // form1字段数据
      fields1: [
        {
          title: '手机号',
          tips: '请输入手机号',
          type: 'tel',
          name: 'phone' // 表单字段
          // value: '', 输入框的值
          // columns: []
        },
        {
          title: '验证码',
          tips: '请输入验证码',
          type: 'smsCode',
          name: 'code'
        },
        {
          title: '手机号2',
          tips: '请输入手机号',
          type: 'tel',
          name: 'phone4' // 表单字段
        },
        {
          title: '所属部门',
          tips: '请选择所属部门',
          type: 'picker',
          name: 'post',
          value: '',
          columns: [
            { id: 1, name: '市场部' },
            { id: 2, name: '技术部' },
            { id: 3, name: '财务' },
            { id: 6, name: '销售部' },
            { id: 7, name: '营销部' }
          ]
        },
        {
          title: '文本域',
          tips: '请输入内容',
          type: 'textarea',
          name: 'textarea_key'
        },
        {
          title: '上传图片',
          tips: '请选择上传1-5张参赛图片，第一种为封面图～',
          type: 'image',
          name: 'image_key',
          value: []
        },
      ],
      formData1: {},
      // form2字段数据
      fields2: [
        {
          title: '文本框',
          tips: '提示内容',
          type: 'text',
          name: 'text_key' // 表单字段
          // value: '', 输入框的值
          // columns: []
        },
        {
          title: '下拉选择',
          tips: '请选择',
          type: 'select',
          name: 'select_key',
          columns: ['java', 'Python', 'php']
        },
        {
          title: '多选框',
          type: 'checkbox',
          name: 'checkbox_key',
          columns: ['技术', 'UI'],
          value: ['UI'], // 默认值
          disabled: false // 禁用
        },
        {
          title: '单选框',
          type: 'radio',
          name: 'radio_key',
          columns: ['高中', '本科'],
        },
        {
          title: '上传图片',
          type: 'image',
          name: 'image_key',
          value: [
            {
              id: '8',
              url: 'https://img.yzcdn.cn/vant/cat.jpeg'
            }
          ]
        }
      ],
      formData2: {},
      // form4字段数据
      fields4:[
        {
          tips: '请输入您的账号',
          type: 'text',
          name: 'account', // 表单字段
          icon: require('./vrs-field4/img/icon-2.png'),
          value: '', //输入框的值
        },
        {
          tips: '请输入您的密码',
          type: 'password',
          name: 'pwd', // 表单字段
          icon: require('./vrs-field4/img/icon-1.png'),
        },
      ],
      formData4: {},
    }
  },
  created(){},
  methods: {
    // form1方法
    formSubmit1() {
      console.log(this.formData1)
    },
    // form2方法
    formSubmit2() {
      console.log(this.formData2)
    },
    formSubmit4() {
      console.log(this.formData4)
    }
  }
}
</script>
<template lang="html">
  <button
    :disabled="codeDis"
    @click="getCode"
    :class="{ active: codeDis }"
  >
    {{ codeTip }}
  </button>
</template>

<script>
/*
  mobile : 发送验证码的手机号
	name : 发送标识
  time : 重新获取验证码的倒计时默认 60秒
  禁用状态下按钮会添加一个 active class
*/
import { phoneValid } from '@/utils/validate.js'
import { api_sendSms } from '@/api'
export default {
  props: {
    mobile: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
    time: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      codeTip: '获取验证码',
      codeDis: false,
      codeTime: 0
    }
  },
  methods: {
    getCode() {
      if (phoneValid(this.mobile)) {
        api_sendSms({
          mobile: this.mobile,
          name: this.name
        }).then(res => {
          this.$toast(res.msg)
          this.codeTime = this.time
          this.codeDis = true
          this.timer()
        }).catch(err => {
          this.$toast(err.msg)
        })
      }
    },
    timer() {
      if (this.codeTime > 0) {
        this.codeTime--
        this.codeTip = this.codeTime + 's后重发'
        setTimeout(this.timer, 1000)
      } else {
        this.codeTip = '获取验证码'
        this.codeDis = false
        this.codeTime = 0
      }
    }
  }
}
</script>

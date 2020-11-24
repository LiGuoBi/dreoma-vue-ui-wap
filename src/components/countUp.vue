<template lang="html">
<!--

  API 【props】
  参数	                   		可选值
  参数： start，说明：是否立即开始动画，类型：Boolean，默认值：true
  参数： startnum，说明：开始数值，类型：Number
  参数： endnum，说明：结束数值，类型：Number
  参数： decimals，说明：小数的位数，类型：Number，默认值：0
  参数： duration，说明：动画执行时间，类型：Number，默认值：2
  参数： use-easing，说明：是否使用easy动画效果，类型：Boolean，默认值：false
  参数： separator，说明：每隔三位的分隔符，类型：String
  参数： prefix，说明：数字前头标识，类型：String
  参数： suffix，说明：数字末尾标识，类型：String
  参数： callback，说明：动画执行完毕调用方法，类型：Function
  $refs：
  通过 ref 属性把组件注册到 $refs 对象上，
  然后通过 this.$refs.ref的值.instance 获取到 CountUp 来操作 CountUp.js 中的方法
  
-->
  <span></span>
</template>

<script>
//  npm安装： npm install --save countup.js
import CountUp from 'countup'
export default {
  name: 'CountUp',
  data(){
    return {
      instance: null
    }
  },
  props: {
    start: {
      type: Boolean,
      default: true
    },
    startnum: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      default: 0
    },
    endnum: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      required: true
    },
    decimals: {
      validator(val) {
        return /^\d*$/.test(val)
      },
      default: 0
    },
    duration: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    separator: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    callback: {
      type: Function
    }
  },
  watch: {
    start(val) {
      val && this.instance.start(() => {
        this.callback && this.callback(this.instance)
      })
    },
    endnum(value) {
      this.instance && this.instance.update && this.instance.update(value)
    }
  },
  methods: {
    init() {
      if (!this.instance) {
        const options = {
          decimal: '.',
          useEasing: this.useEasing,
          separator: this.separator,
          prefix: this.prefix,
          suffix: this.suffix
        }
        this.instance = new CountUp(this.$el, this.startnum, this.endnum, this.decimals, this.duration, options)
        this.start && this.instance.start(() => {
          this.callback && this.callback(this.instance)
        })
      }
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.instance = null
  }
}
</script>

<!--
  name: 表单字段3 - 选择联系人单选
  author: 小炜
-->
<template>
  <div class="vrs-field3">
    <div class="vrs-file-label flex-v between" @click="showPicker">
      <span>{{title}}</span>
      <i class="vrs-add-icon bg"></i>
    </div>
    <!-- 选中列表 -->
    <div class="flex-wrap">
      <template v-for="(item, index) in list">
        <div class="vrs-pick-man" :key="index + 'item'">
          <div class="vrs-avatar-wrap" @click="delPick(index)">
            <img class="avatar cover" :src="item.avatar" alt="avatar">
            <i class="vrs-close-icon bg"></i>
          </div>
          <p class="vrs-name single-txt">{{item.nickname}}</p>
        </div>
        <i class="bg vrs-radio-arrow" v-if="index < list.length - 1" :key="index + 'arrow'"></i>
      </template>
    </div>
    <!-- 选中列表 -->
    <!-- 弹窗 -->
    <van-popup class="vrs-popup-pick" v-model="canPopup">
      <div class="vrs-picker-page">
        <div class="vrs-page-head flex-v">
          <i class="bg vrs-back-icon" @click="hidePicker"></i>
          <div class="vrs-search-wrap flex-item flex">
            <input class="flex-item vrs-search-in" type="text" placeholder="搜索" v-model="keyword" @keyup.enter="searchSubmit">

            <!-- 通过监听 keyword 来触发搜索事件 -->
            <!-- <button class="vrs-search-btn vrs-btn flex-c" @click="searchSubmit">
              <i class="bg vrs-search-icon"></i>
              <span>搜索</span>
            </button> -->

          </div>
        </div>
        <div class="vrs-scrollView">
          <!-- 面包屑 -->
          <div class="vrs-breadcrumb">
            <div class="vrs-scroll">
              <template v-for="(item, index) in record">
                <div class="vrs-item on" v-if="index < record.length - 1" :key="index" @click="getContact(item)">
                  <span>{{item.name}}</span>
                  <i class="bg vrs-arrow right"></i>
                </div>
                <div class="vrs-item" v-else :key="index">
                  <span>{{item.name}}</span>
                </div>
              </template>
            </div>
          </div>
          <!-- 面包屑 end -->
          
          <template v-if="isData">
            <!-- 部门列表 -->
            <ul class="vrs-group-list">
              <li class="flex-v" v-for="item in groupList" :key="item.id" @click="getContact(item)">
                <div class="vrs-group-item flex-item flex-v">
                  <span class="flex-item single-txt">{{item.name}}</span>
                  <i class="bg vrs-arrow right"></i>
                </div>
              </li>
            </ul>
            <!-- 部门列表 end -->
            <!-- 用户列表 -->
            <ul class="vrs-user-list" v-if="userListShow">
              <li class="vrs-user-item flex-v" v-for="item in userList" :key="item.id" @click="setPick(item)">
                <img class="avatar cover" :src="item.avatar" alt="avatar">
                <div class="flex-item single-txt">{{item.nickname}}</div>
              </li>
            </ul>
            <!-- 用户列表 end -->
          </template>
          <div v-else class="vrs-no-data">
            暂无成员
          </div>

          <!-- 搜索结果 -->
          <transition name="fade">
            <div class="vrs-result" v-if="resultShow">
              <ul class="vrs-user-list" v-if="isData">
                <li class="vrs-user-item flex-v" v-for="item in searchList" :key="item.id" @click="setPick(item)">
                  <img class="avatar cover" :src="item.avatar" alt="avatar">
                  <div class="flex-item single-txt">{{item.nickname}}</div>
                </li>
              </ul>
              <div v-else class="vrs-no-data">
                找不到关于“{{searchTips}}”的联系人
              </div>
            </div>
          </transition>
          <!-- 搜索结果 end -->
        </div>
      </div>
    </van-popup>
    <!-- 弹窗 end -->
  </div>
</template>

<script>
import { api_contact, api_contactSearch } from '@/api'

let timeout = null
export default {
  name: 'vrs-field3-radio',
  props: {
    title: {
      type: String,
      default: '选择联系人'
    },
    max: {
      type: Number,
      default: 0
    },
    list: Array,
  },
  model: {
    prop: 'list',
    event: 'change'
  },
  data() {
    return {
      canPopup: false,
      groupList: [], // 部门
      userList: [], // 员工
      record: [],  // 面包屑
      isData: true,
      resultShow: false,
      searchList: [], // 搜索列表
      keyword: '',
      searchTips: ''
    }
  },
  computed: {
    userListShow() {
      return this.userList.length > 0
    }
  },
  watch: {
    keyword() {
      // 每次当用户点击/输入的时候，把前一个定时器清除
      // 然后创建一个新的 setTimeout
      // 防止短时间内重复调用 searchSubmit()
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.searchSubmit()
      }, 300)
    }
  },
  methods: {
    // 显示选择器初始化数据
    showPicker() {
      // 判断是否限制最多选择人数
      if (this.max > 0) {
        if (this.list.length >= this.max) {
          this.$toast({
            message: `最多只能选择${this.max}个联系人`,
            duration: 1500
          })
          return
        }
      }
      this.canPopup = true
      this.getContact({name: '通讯录', id: 0})
    },
    // 隐藏选择器重置数据
    hidePicker() {
      this.canPopup = false
      this.resetData()
    },
    // 删除选中项
    delPick(index) {
      this.list.splice(index, 1)
      // this.$emit('change', this.list)
    },
    // 设置选中项
    setPick(user) {
      // 限制如果数组中没有才添加
      /* if (!this.list.some(item => item.id == user.id)) {
        this.list.push(user)
        // this.$emit('change', this.list)
      } */
      // 不限制添加
      this.list.push(user)
      // this.$emit('change', this.list)
      
      // 关闭弹窗
      this.canPopup = false
      this.resetData()
    },
    // 重置数据
    resetData() {
      this.isData = true
      this.record = []
      this.groupList = []
      this.userList = []
      this.keyword = ''
      this.searchList = []
    },
    // 获取联系人列表
    async getContact(group) {
      // 判断是否有记录，有后退，没有添加
      let index = this.record.findIndex(item => group.id == item.id)
      if (index > -1) {
        this.record.splice(index + 1)
      } else {
        this.record.push(group)
      }
      this.isData = true
      this.$vrsToast('加载中...', 'loading')
      let res = await api_contact({pid: this.record[this.record.length - 1].id, is_all: 0})
      // 赋值部门列表和用户列表
      this.groupList = res.data.group
      this.userList = res.data.users
      // 判断是否有数据
      this.isData = this.groupList.length > 0 || this.userList.length > 0
      // 关闭加载中提示
      this.$toast.clear()
    },
    async searchSubmit() {
      if (this.keyword == '') {
        // 隐藏搜索列表，判断部门、用户列表是否有数据
        this.resultShow = false
        this.isData = this.groupList.length > 0 || this.userList.length > 0
        return
      }
      this.isData = true
      this.resultShow = true
      this.searchTips = this.keyword
      this.$vrsToast('加载中...', 'loading')
      let res = await api_contactSearch({keyword: this.keyword})
      this.searchList = res.data
      this.isData = this.searchList.length > 0
      this.$toast.clear()
    }
  }
}
</script>
<!--
  name: 表单字段3 - 选择联系人多选
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
      <div class="vrs-pick-man checkbox" v-for="(item, index) in list" :key="index">
        <div class="vrs-avatar-wrap" @click="delPick(index)">
          <img class="avatar cover" :src="item.avatar" alt="avatar" />
          <i class="vrs-close-icon bg"></i>
        </div>
        <p class="vrs-name single-txt">{{item.nickname}}</p>
      </div>
    </div>
    <!-- 选中列表 end -->
    <!-- 弹窗 -->
    <van-popup class="vrs-popup-pick" v-model="canPopup">
      <div class="vrs-picker-page">
        <div class="vrs-page-head flex-v">
          <i class="bg vrs-back-icon" @click="hidePicker"></i>
          <div class="vrs-search-wrap flex-item flex">
            <input class="flex-item vrs-search-in" type="text" placeholder="搜索" v-model="keyword" />
            <!-- <button class="vrs-search-btn vrs-btn flex-c">
              <i class="bg vrs-search-icon"></i>
              <span>搜索</span>
            </button>-->
          </div>
        </div>

        <div class="vrs-scrollView">
          <!-- 面包屑 -->
          <div class="vrs-breadcrumb">
            <div class="vrs-scroll">
              <template v-for="(item, index) in record">
                <div
                  class="vrs-item on"
                  v-if="index < record.length - 1"
                  :key="index"
                  @click="getContact(item)"
                >
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
          <!-- 当前部门全选 -->
          <div class="vrs-select-all flex-v" @click="all(curGroup)">
            <van-checkbox class="vrs-checkbox" v-model="curGroup.checked" checked-color="#EC4A2D" />
            <span>全选</span>
          </div>
          <!-- 当前部门全选 end -->
          <template v-if="isData">
            <!-- 部门列表 -->
            <ul class="vrs-group-list">
              <li
                class="flex-v"
                v-for="item in groupList"
                :key="item.id"
                @click="all(item)"
              >
                <van-checkbox
                  class="vrs-checkbox"
                  checked-color="#EC4A2D"
                  v-model="item.checked"
                />
                <div class="vrs-group-item flex-item flex-v">
                  <span class="flex-item single-txt">{{item.name}}</span>
                  <button
                    class="vrs-sub-grade flex-c"
                    :class="{'dis': item.checked}"
                    @click.stop="getContact(item)"
                  >
                    <i class="bg vrs-icon"></i>
                    <span>下级</span>
                  </button>
                </div>
              </li>
            </ul>
            <!-- 部门列表 end -->
            <!-- 用户列表 -->
            <ul class="vrs-user-list" v-if="userListShow">
              <li
                class="vrs-user-item flex-v"
                v-for="item in userList"
                :key="item.id"
                @click="setPick(item)"
              >
                <van-checkbox class="vrs-checkbox" checked-color="#EC4A2D" v-model="item.checked" />
                <img class="avatar cover" :src="item.avatar" alt="avatar" />
                <div class="flex-item single-txt">{{item.nickname}}</div>
              </li>
            </ul>
            <!-- 用户列表 end -->
          </template>
          <div v-else class="vrs-no-data">暂无成员</div>

          <!-- 搜索结果 -->
          <transition name="fade">
            <div class="vrs-result" v-if="resultShow">
              <ul class="vrs-user-list" v-if="isData">
                <li
                  class="vrs-user-item flex-v"
                  v-for="item in searchList"
                  :key="item.id"
                  @click="setPick(item)"
                >
                  <van-checkbox class="vrs-checkbox" checked-color="#EC4A2D" v-model="item.checked" />
                  <img class="avatar cover" :src="item.avatar" alt="avatar" />
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
        <div class="vrs-foot flex-v between">
          <span>已选择：{{selectedList.length}}人</span>
          <button class="vrs-foot-btn vrs-btn" @click="confirm">确定</button>
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
    list: Array
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
      selectedList: [], // 选中列表
      record: [], // 面包屑
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
    },
    curGroup() {
      return this.record[this.record.length - 1] || {}
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
      this.canPopup = true
      this.selectedList = this.list
      this.getContact({ name: '通讯录', id: 0, checked: false })
    },
    // 隐藏选择器重置数据
    hidePicker() {
      this.canPopup = false
      // 重置数据
      this.isData = true
      this.record = []
      this.groupList = []
      this.userList = []
      this.keyword = ''
      this.searchList = []
    },
    // 获取联系人列表
    async getContact(group) {
      // checked 为 true 就 return
      if (group.checked) {
        return
      }
      // 判断是否有记录，有后退，没有添加
      let index = this.record.findIndex(item => group.id == item.id)
      if (index > -1) {
        this.record.splice(index + 1)
      } else {
        this.record.push(group)
      }
      this.isData = true
      this.$vrsToast('加载中...', 'loading')
      let res = await api_contact({pid: this.curGroup.id, is_all: 0})
      // 赋值部门列表和用户列表
      this.groupList = res.data.group.map(item => ({ ...item, checked: false }))
      this.userList = res.data.users.map(user => {
        return {
          ...user,
          checked: this.selectedList.some(item => item.id == user.id)
        }
      })
      // 判断是否有数据
      this.isData = this.groupList.length > 0 || this.userList.length > 0
      // 关闭加载中提示
      this.$toast.clear()
    },
    // 提交搜素，获取用户列表
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
      this.searchList = res.data.map(user => {
        return {
          ...user,
          checked: this.selectedList.some(item => item.id == user.id)
        }
      })
      this.isData = this.searchList.length > 0
      this.$toast.clear()
    },
    // 全选部门下的所有用户
    async all(group) {
      this.$vrsToast('加载中...', 'loading')
      // 切换选中状态
      group.checked = !group.checked
      // 设置选中状态
      if (this.curGroup.id == group.id) {
        // 全选当前-需要更改当前部门下的部门列表和用户列表的选中状态
        this.groupList.forEach(item => {
          item.checked = group.checked
        })
        this.userList.forEach(item => {
          item.checked = group.checked
        })
      } else {
        // 全选下级-需要更改当前部门的全选状态
        this.setAllStatus()
      }
      // 获取选中数据
      let res = await api_contact({
        pid: group.id,
        is_all: 1
      })
      // 设置选中项
      if (group.checked) {
        // 筛选出需要添加的用户(添加过的不添加)
        let users = res.data.users.filter(user => !this.selectedList.some(item => user.id == item.id))
        this.selectedList = [...this.selectedList, ...users]
      } else {
        // 筛选出不需要删除的用户
        // this.selectedList = this.selectedList.filter(user => {
        //   return !res.data.users.some(item => user.id == item.id)
        // })
        this.selectedList = this.selectedList.filter(user => !res.data.users.some(item => user.id == item.id))
      }
      this.$toast.clear()
    },
    // 设置当前部门的全选状态
    setAllStatus() {
      this.curGroup.checked = this.groupList.every(item => item.checked) && this.userList.every(item => item.checked)
    },
    // 设置选中项
    setPick(user) {
      user.checked = !user.checked
      if (user.checked) {
        this.selectedList.push(user)
      } else {
        this.selectedList.splice(this.selectedList.findIndex(item => user.id == item.id), 1)
      }
      this.setAllStatus()
    },
    // 删除选中项，更新 list
    delPick(index) {
      this.selectedList.splice(index, 1)
      this.$emit('change', this.selectedList)
    },
    // 确认选择的人数
    confirm() {
      this.hidePicker()
      this.$emit('change', this.selectedList)
    }
  }
}
</script>
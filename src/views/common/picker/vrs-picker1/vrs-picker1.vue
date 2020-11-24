<!-- 
  name: 地区选择(四级联动)1
  author: 小炜
 -->
<template>
  <div class="vrs-picker1">
    <div class="vrs-head">
      所在地区
      <i class="vrs-close" @click="closeHandle"></i>
    </div>
    <div class="vrs-main">
      <ul class="vrs-tabs flex">
        <li
          class="vrs-item single-txt"
          :class="{on: tabIndex == index}"
          v-for="(item, index) in tabs"
          :key="item.code"
          @click="onTab(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul class="vrs-list" ref="scrollList">
        <li
          class="vrs-item"
          :class="{on: tabs[tabIndex].index === index}"
          v-for="(item, index) in column"
          ref="listItem"
          :key="item.code"
          @click="onList(item, index)"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import area from './area'

// 递归获取select列
function getCol(columns, tabs, tabIndex, index) {
  let item = columns.find((item) =>{
    return item.code == tabs[index].code
  })
  if (tabIndex == index) {
    return item.children
  } else {
    return getCol(item.children, tabs, tabIndex, index + 1)
  }
}

// 递归 通过code获取选中值
function getValue(columns, codes, key, codeLen, index, tabs) {
  let colIndex = columns.findIndex((item) =>{
    return item[key] == codes[index]
  })
  tabs.push({
    name: columns[colIndex].name,
    code: columns[colIndex].code,
    index: colIndex
  })
  if (codeLen === index + 1) {
    return {tabs, column: columns, tabIndex: index}
  } else {
    return getValue(columns[colIndex].children, codes, key, codeLen, index + 1, tabs)
  }
}

export default {
  name: 'vrs-picker1',
  props: {
    value: { // 当前选中的地址
      type: String,
      default: ''
    },
    valueKey: {
      type: String,
      default: 'name'
    }
  },
  data() {
    return {
      column: [],
      tabs: [
        { name: '请选择', code: '0', index: -1 }
      ],
      tabIndex: 0
    }
  },
  computed: {
    len() {
      return this.tabs.length
    }
  },
  created() {
    this.setValue()
  },
  watch: {
    value(newVal) {
      let tabsStr = this.tabs.map(item => item[this.valueKey]).toString()
      // 当前地址 newVal 和 tabs 的值不相同就更新数据
      if (newVal != tabsStr) {
        this.setValue()
      }
    }
  },
  methods: {
    // 根据 props 传入的 value 设置数据
    setValue() {
      if (this.value) {
        let codes = this.value.split(',')
        let { tabs, tabIndex, column } = getValue(area, codes, this.valueKey, codes.length, 0, [])
        this.tabs = tabs
        this.tabIndex = tabIndex
        this.column = column
        this.setScrollTo()
      } else {
        this.column = area
      }
    },
    // 设置列表的滚动位置
    setScrollTo() {
      this.$nextTick(() => {
        let liH = this.$refs.listItem[0].offsetHeight
        this.$refs.scrollList.scrollTo(0, liH * this.tabs[this.tabIndex].index)
      })
    },
    onTab(item, index) {
      // 点击选中下标 return
      if (this.tabIndex === index) {
        return
      }
      // 设置列表的值和选中下标
      if (index === 0) {
        this.column = area
      } else {
        this.column = getCol(area, this.tabs, index - 1, 0)
      }
      this.tabIndex = index
      this.setScrollTo()
    },
    onList(item, index) {
      // 判断是否有下级
      if (item.children) {
        this.$refs.scrollList.scrollTo(0,0)
        this.column = item.children
        // 判断是否是替换选择
        if ((this.len - 1) > this.tabIndex) {
          this.tabs.splice(this.tabIndex, this.len - this.tabIndex, {
            name: item.name,
            code: item.code,
            index: index
          }, {
            name: '请选择',
            code: '0',
            index: -1 
          })
        } else {
          this.tabs.splice(this.len - 1, 0, {
            name: item.name,
            code: item.code,
            index: index
          })
        }
        this.tabIndex++
      } else {
        // 没有下级返回选中地址
        this.tabs.splice(this.len - 1, 1, {
          name: item.name,
          code: item.code,
          index: index
        })
        this.$emit('confirm', this.tabs)
      }
    },
    closeHandle() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-picker1 {
  background-color: #fff;
  .vrs-head {
    position: relative;
    overflow: hidden;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    color: #333;
    background-color: #f3f2f8;
  }
  .vrs-close {
    position: absolute;
    top: 0;
    right: 0;
    @include wh(0.8rem);
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      @include wh(0.4rem);
      margin-top: -0.2rem;
      margin-left: -0.2rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTGZmZmZmZmVlZWZmZmRkZGZmZmJiYmVlZWZmZmVlZWZmZst3r9QAAAALdFJOUwDqMFSVKb4OgEL4DOKGowAAALhJREFUKM9jYKAz4HSTWpgyAVWsQno3EGxsRxZjBosBRQ2QBL13Q8EWhBgbTGz3rgRMhUhKmXcjAZiphciC4lDBbmTBHVBBkHssgcRGZZCroJ4BKVBQ3L1blBNhKAuIKcokvTFAEcRyQLgSKAIUB7EgLmXcDVEKUbhbACzIBfF2AETh7gW4BbFqx2oRVicxY3M8O6o3C/AECNagwxrIWKMDKeJ2J+CPYuyJAWuyAap1k96YYkDvZA0ALePd7o1YB+oAAAAASUVORK5CYII=);
      background-size: cover;
    }
  }
  .vrs-tabs {
    padding-left: 0.2rem;
    border-bottom: 1px solid #e5e5e5;
    .vrs-item {
      min-width: 1rem;
      margin-right: 0.2rem;
      line-height: 0.88rem;
      text-align: center;
      border-bottom: 1px solid transparent;
      &.on {
        border-bottom: 1px solid #e93b3d;
        color: #e93b3d;
      }
    }
  }
  .vrs-list {
    height: 6rem;
    padding: 0.1rem 0.2rem;
    overflow: hidden;
    overflow-y: auto;
    .vrs-item {
      padding: 0.24rem 0;
      position: relative;
      &.on {
        color: #e93b3d;
        &::after {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -0.2rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTOI4O+Q4O+U4O+M4O+Q4O9QqKuQ6OuM4O+M4O+Q4POQ4O+Q5PDV0FdEAAAAMdFJOUwATzlLwxgYvspbce5OGaEkAAAB7SURBVCjPY2AY5oAtFIsg51EsgjaOmGLsPgaYglKnsejuacAU4z4lgMUad0wxRmzWpJ5E5oVCjJoThiwYowgik4+gWCN0CMQtOYxqgw5QKeOaDahWgJRynEB3DFDpnoXorhE6JHykAMPdOiqHMR0udGYCFi+GJgznZAYA9rcWsb62p8AAAAAASUVORK5CYII=);
          background-size: cover;
        }
      }
    }
  }
}
</style>
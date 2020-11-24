# 若水前端ui框架-PC端[dreoma-vue-ui-wap]


## 项目设置
```
npm install
```


### 编译和热重新开发以进行开发
```
npm run serve
```


### 编译并缩小生产
```
npm run build
```


### 运行测试
```
npm run test
```


### 提示和修复文件
```
npm run lint
```


### 自定义配置
See [配置参考](https://cli.vuejs.org/config/).

- - - -

### Markdown
- [文档](http://www.markdown.cn/)
- [菜鸟教程](https://www.runoob.com/markdown/md-tutorial.html)
- [GitHub](https://github.com/mzlogin/markdown-intro/blob/master/README.md)


### 依赖插件
- [ui组件库-vant](https://youzan.github.io/vant/#/zh-CN/intro)
- [ajax使用-axios](http://www.axios-js.com/zh-cn/)
- [数据持久化(缓存)-js-cookie](https://github.com/js-cookie/js-cookie)
- [数字加载动画](http://inorganik.github.io/countUp.js/)

- - - -



## 框架规范


### css选择器中避免使用标签名
``` css
/* bad */
img {}

/* good */
.head-box {}
```


### id和class的命名
> CSS命名由小写的英文单词或组合命名，单词与单词之间通过“-”连接，不要用驼峰。

``` css
/* bad */
.logoImg {}

/* good */
.logo-img {}
/* 框架的样式必须加上 vrs- 前缀 */
.vrs-logo-img {}
```

> CSS 文件命名规范

name | 说明
---- | ----
index | 一般用于首页建立样式
head/header | 头部样式，当多个页面头部设计风格相同时使用
foot/footer | 底部样式，当多个页面底部设计风格相同时使用
base/global/common | 页面样式基础，全局公用样式，页面中必须包含
layout | 布局、版面样式
module | 模块，用于产品类页，也可与其它样式配合使用
master | 主要的样式表
columns | 专栏样式
themes | 主体样式
forms | 表单样式
mend | 补丁，基于已有样式进行的私有化修补

> CSS 选择器命名规范

name | 说明
---- | ----
logo | 标记网站logo标志
page | 代表整个页面，用于最外层
container | 页面外围控制整体布局宽度
wrap/wrapper/box | 外套，将所有元素包在一起的一个外围包，用于最外层
head/header | 页头区域，用于头部
foot/footer | 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部
main | 网站中的主要区域，主体内容
column | 栏目
sidebar | 侧栏
navbar, navigation, nav-wrapper | 导航条或导航包，代表横向导航
nav | 导航：top-nav 顶部导航、main-nav 主导航、
sidebar | 边导航：left-sidebar 左导航、right-sidebar 右导航
menu | 菜单：links-menu 链接菜单
drop | 下拉
dorpmenu | 下拉菜单
sub | 子级：sub-nav 子导航、sub-menu 子菜单、sub-page 二级页面子页面
content | 内容，网站中最重要的内容区域
title | 标题
name | 名字 名称
summary | 摘要
desc | 描述
rich-text | 富文本
banner/focus | 标语、广告条、顶部广告条
bar | 条：login-bar 登录条、search-bar 搜索条、tool-bar 工具条
register | 注册
shop/store | 店铺、商店
icon | 图标
image/pic/photo | 图片、照片
label | 输入框标题
hot | 热门热点：hot-search 热门搜索
list | 列表：news-list 新闻列表
item | 列表项： goods-item 商品项
scroll | 滚动
tab | 标签页 tab-bar 标签栏
tag | 标记
sitemap | 网站地图
msg/message | 提示信息
tips | 小技巧
note | 注释
guild | 指南
btn | 按钮
current/cur | 当前的
on/active | 选中状态
joinus | 加入
order | 订单：buy-order 购物订单
status | 状态
arr/arrow | 箭头
service | 服务
breadcrumb | 面包屑导航 (即页面所处位置导航提示)
download | 下载
vote | 投票
site-info | 网站信息: site-info-credits 信誉、site-info-legal 法律信息
partner | 合作伙伴
friendlink | 友情链接
copyright | 版权信息
overlay | 遮罩层
toast | 轻提示
popup | 弹窗
card | 卡片带圆角的盒子
cell | 单元格


### 合理的使用ID
``` css
/* bad */
#content .title {
  font-size: 2em;
}

/* good */
.content .title {
  font-size: 2em;
}
```


### 0后面不带单位
``` css
/* bad */
.test {
  padding-bottom: 0px;
  margin: 0em;
}

/* good */
.test {
  padding-bottom: 0;
  margin: 0;
}
```


### css类名嵌套最多三层
``` css
/* bad */
.head-wrap .head .title .text img {}

/* good */
.head-wrap .text {}
```


### 属性格式
- 尽量使用缩写属性
- 属性名的冒号后使用一个空格。出于一致性的原因，属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。
- 每个选择器和属性声明总是使用新的一行。
- 属性选择器或属性值用双引号（””），而不是单引号（”）括起来。
- URI值（url()）不要使用引号。



### 组件的name必须添加-使用文件名
``` javascript
// bad
export default {
  name: ''
}

// good
export default {
  name: 'vrs-count-bar2'
}
```


### 文件名命名规范使用连字符的方式(kebab-case)
```
// bad
mycomponent.vue
myComponent.vue
MyComponent.vue

// good
my-component.vue
```


### 自闭合组件
> 在单文件组件中没有内容的组件应该是自闭合的。

``` html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```


### Prop 名大小写
> 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

``` js
// bad
export default {
  props: {
    'greeting-text': String
  }
}

// good
export default {
  props: {
    greetingText: String
  }
}
```
``` html
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```


### Props 换行
> 多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

``` html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```


### 指令缩写
> 指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

``` html
<!-- bad -->
<input
  v-bind:value="value"
  v-on:input="onInput"
>

<!-- good -->
<input
  :value="value"
  @input="onInput"
>
```


### Props 顺序
> 标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

``` html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```


### 组件选项的顺序
> 组件选项应该有统一的顺序。

``` js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
```


### 组件选项中的空行
> 组件选项较多时，建议在属性之间添加空行。

``` js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
}
```


### 单文件组件顶级标签的顺序

> 单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

``` html
<template>
  ...
</template>

<script>
  /* ... */
</script>

<style>
  /* ... */
</style>
```

### 相关链接 
 - [vue风格指南](https://cn.vuejs.org/v2/style-guide/#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)
 - [vant风格指南](https://youzan.github.io/vant/#/zh-CN/style-guide#dan-wen-jian-zu-jian-ding-ji-biao-qian-de-shun-xu)



### 一个制表符等于2个空格


### 空格

> 函数 括号 () 与花括号 {} 之间加空格

``` js
// bad
function fn(){
  // ...
}

// good
function fn() {
  // ...
}
```

> 箭头函数 => 前后加空格

``` js
// bad
let fn = ()=>{}

// good
let fn = () => {}
```

> 对象、数组属性

- key与值之间加空格
- 逗号后加空格
- 对象是一行开头和结尾加空格
- 对象是多行花括号独占一行，属性占一行，最后一个属性结尾不要逗号,

``` js
// bad
let obj = {name:'css',age:1}

// good
let obj = { name: 'css', age: 1 }
let obj2 = {
  name: 'css',
  age: 1
}
```

> 赋值 = 前后加空格

``` js
// bad
let title='标题'

// good
let title = '标题'
```

> 条件判断语句、循环语句

- 运算符前后加空格
- 括号 () 前后加空格
- else、else if 前后加空格

``` js
// bad
if(1>2){
  // ...
}else{
  // ...
}
for(let i=0;i<5;i++){
  // ...
}

// good
if ( 1 > 2 ) {
  // ...
} else {
  // ...
}
for (let i = 0; i < 5; i++) {
  // ...
}
```


### 字符串使用单引号、结尾不要分号
``` js
// bad
let name = "";

// good
let name = ''
```


### 变量名和方法名使用小驼峰式命名法：首字母小写 userInfo
> 变量名和方法名前缀表，get和set不推荐用作变量名的前缀

| 前缀 | 含义 | 返回值 |
| ---- | ---- | ---- |
| can | 判断是否可执行某个动作 (权限) | 函数返回一个布尔值。true：可执行；false：不可执行 |
| has | 判断是否含有某个值 | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is | 判断是否为某个值 | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get | 获取某个值 | 函数返回一个非布尔值 |
| set | 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象 |

``` js
// 是否可阅读
function canRead() {
  return true
}
// 获取姓名
function getName() {
  return this.name
}
```


### 注释规范参考[JSDoc](https://www.html.cn/doc/jsdoc/about-commandline.html)
``` javascript
// @author 作者
// @param 函数的参数
// @returns 返回值
/**
 * 函数的描述
 * @author 小炜 2019-07-30
 * @param {String} attr - 参数key
 * @returns {String} 参数值
 */
function fn(attr) {
  return ''
}
```

### 标签语义化(SEO)
> 语义化是指：根据元素其被创造出来时的初始意义来使用它。
> 意思就是用正确的标签干正确的事，而不是只有div和span。

- 一个页面中，可以定义多个 `<header> <footer>` 元素。
  - 页面头部：`<header></header>`
  - 页面底部: `<footer></footer>`
- 导航：`<nav></nav>`
- 标题使用：`<h1></h1><h2></h2>`
  - 一个页面只能使用一个 `<h1>` 标签
  - 一个页面有多个标题可以使用 `<h2>` 标签
- 组件或者模块：`<section></section>`
- 主体：`<main></main>`
- 文章：`<article></article>`


### js避免全局命名空间污染和严格模式 `'use strict'`

> 防止全局命名空间被污染，将代码包裹成一个 [IIFE(Immediately-Invoked Function Expression)](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)，创建独立隔绝的定义域。也使得内存在执行完后立即释放。

> IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）

> 严格模式应该在独立的 IIFE 中应用它。避免在脚本第一行使用它而导致所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。

##### bad
``` js
// x 和 y 变量是全局变量
var x = 10, y = 100
console.log(window.x + ' ' + window.y)
```
##### good
``` js 
(function(log, w){
  // 严格模式
  'use strict'
  var x = 10, y = 100
  // 无法从外部访问变量 x y 输出 'true true'
  log((w.x === undefined) + ' ' + (w.y === undefined))
}(window.console.log, window))
```

### js 赋值的两个数组、对象会相互影响，可使用 扩展运算符(三个点)... 解决
##### bad
``` js
// 数组
let arr1 = [1, 2, 3, 4]
let arr2 = arr1
arr2[0] = 5
// 对象
let obj1 = {name: '小炜', id: 1}
let obj2 = obj1
obj2.name = '狂三'
// 修改arr2/obj2的值arr1/obj1以会跟着改变
```
##### good
``` js
// 数组
let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]
// 或者
// let [ ...arr2 ] = arr1
arr2[0] = 5
// 对象
let obj1 = {name: '小炜', id: 1}
let obj2 = {...obj1}
// 或者
let { ...obj2 } = obj1
// 或者 
obj2.name = '狂三'
```
<!-- 导航页 -->
<template>
  <div class="nav-page">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </div>
    <!-- 路由列表循环导航 -->
    <template v-for="(route, index) in routes">
      <nav-collapse v-if="!route.hidden" :key="index" :title="route.meta.title" :data-rs-click="route.meta.title">
        <van-cell-group :data-rs-plate="route.meta.title">
          <template v-for="link in route.children">
            <van-cell
              :key="link.name"
              is-link
              :title="link.meta.title"
              :to="resolvePath(route.path, link.path)"
              :data-rs-click="link.meta.title"
            />
          </template>
        </van-cell-group>
      </nav-collapse>
    </template>

  </div>
</template>

<script>
import path from 'path'
import navCollapse from '@/components/layout/nav-collapse'
export default {
  name: 'home',
  components: {
    navCollapse
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {
    resolvePath(basePath, routePath) {
      // path.resolve 把一个路径或路径片段的序列解析为一个绝对路径
      return path.resolve(basePath, routePath)
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-page {
  padding: 0.6rem 0.4rem 0.2rem;
  .logo {
    width: 4rem;
    margin: 0 auto 0.4rem;
  }
}
</style>
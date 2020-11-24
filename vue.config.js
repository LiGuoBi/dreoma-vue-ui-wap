module.exports = {
  productionSourceMap: false,
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: '@import "@/assets/css/variables.scss";'
      }
    }
  },
  configureWebpack: {
    // 配置不需要打包的文件，可以通过 import 引用。
    // 以就是通过 script 标签引入的 js。webpack 编译打包时不处理它，却可以引用到它。
    externals: {
      /* "vue": "Vue",
      "vue-router": "VueRouter",
      "axios": "axios", */
    }
  }
}

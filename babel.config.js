module.exports = {
  presets: [
    '@vue/app'
  ],
  // vant(有赞)按需引入的配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}

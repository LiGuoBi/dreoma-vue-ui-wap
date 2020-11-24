module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不要分号
    'semi': [2, 'never'],
    // 不必要的转义字符
    'no-useless-escape': 0,
    // 要求尽可能地使用单引号
    'quotes': [2, 'single']
  },
  /**
    globals : 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量
    推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。
  */
  globals: {
    Swiper: false
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

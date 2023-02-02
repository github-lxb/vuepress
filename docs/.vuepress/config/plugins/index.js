const dayjs = require('dayjs')

module.exports = ctx => ({
  // 最后更新时间插件（内置）
  '@vuepress/last-updated': {
    transformer: timestamp => {
      return dayjs(timestamp).format('YYYY-MM-DD HH:mm')
    }
  },
  // 代码复制插件
  'vuepress-plugin-code-copy': true,
})
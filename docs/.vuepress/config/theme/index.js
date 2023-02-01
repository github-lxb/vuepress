const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = ctx => {
  return {
    // 导航栏 Logo
    logo: '/image/logo.png',
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // 在所有页面中启用自动生成子侧边栏
    subSidebar: 'auto',
    // 显示所有页面的标题链接
    displayAllHeaders: true,
    // 搜索框
    algolia: ctx.isProd
      ? {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        algoliaOptions: {
          facetFilters: ['tags:v1']
        }
      }
      : null,
  }
}
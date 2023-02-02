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
    // 最后更新时间（基于 git 提交的 UNIX 时间戳，显示在每一页的底部）
    lastUpdated: '最后更新时间',
    // 在所有页面中启用自动生成子侧边栏（自定义主题中的设置）
    subSidebar: 'auto',
    // 项目开始时间，在首页底部展示（自定义主题中的设置）
    startYear: '2018',
    // 博客配置（自定义主题中的设置）
    blogConfig: {
      category: {
        location: 5,
        text: '人员',
        icon: 'reco-github'
      },
    },
    // 关闭 404 腾讯公益（自定义主题中的设置）
    noFoundPageByTencent: false,
  }
}
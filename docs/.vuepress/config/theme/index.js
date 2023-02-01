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
    // 在所有页面中启用自动生成子侧边栏（自定义主题中的设置）
    subSidebar: 'auto',
  }
}
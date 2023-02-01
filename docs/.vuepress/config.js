const themeConfig = require('./config/theme')

module.exports = ctx => ({
  // 网站的标题，它将会被用作所有页面标题的前缀
  title: '产品开发部知识库',
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '分享你所学到的知识受益于他人及自己',
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/image/logo.png'
      }
    ],
    [
      'meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  // 自定义主题（基于 vuepress-theme-reco：https://vuepress-theme-reco.recoluan.com/views/1.x/）
  theme: 'reco',
  // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
  themeConfig: themeConfig(ctx),
  // 插件
  plugins: {},
  // Markdown
  markdown: {
    // 是否在每个代码块的左侧显示行号
    lineNumbers: true
  },
  // 用于修改内部的 Webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/docs/.vuepress/public'
      }
    }
  }
})
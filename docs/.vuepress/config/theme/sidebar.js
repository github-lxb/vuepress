// 侧边栏

module.exports = {
  // 指南
  '/guide/': [
    {
      title: '指南',
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'typescript-as-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: '深入',
      collapsable: false,
      children: [
        'front-matter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}
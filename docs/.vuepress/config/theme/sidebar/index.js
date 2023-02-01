// 侧边栏（使用多侧边栏的方式）

module.exports = {
  // 指南
  '/guide/': [
    {
      title: '指南',
      collapsable: false,
      children: [
        '',
        'getting-started',
      ]
    },
    {
      title: '深入',
      collapsable: false,
      children: [
        'front-matter',
        'permalinks',
      ]
    }
  ],
  '/front/js/': [
    '',
    {
      title: '数据类型',
      collapsable: true,
      children: [
        'types/',
        'types/null-undefined-boolean',
        'types/number',
        'types/string',
        'types/object',
        'types/function',
        'types/array',
      ]
    },
    {
      title: '运算符',
      collapsable: true,
      children: [
        'operators/arithmetic',
        'operators/comparison',
        'operators/boolean',
        'operators/bit',
        'operators/priority',
      ]
    },
    {
      title: '异步操作',
      collapsable: true,
      children: [
        'async/',
        'async/promise',
        'async/timer',
      ]
    },
  ],
}
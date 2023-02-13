// 侧边栏（使用多侧边栏的方式）

module.exports = {
  '/guide/': [
    '',
    'getting-started',
    'directory-structure',
    'front-matter',
    'theme-config',
    'attention',
    'deploy',
    'example',
  ],
  '/test/': [
    '',
    'test1',
    'test2',
    'test3',
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
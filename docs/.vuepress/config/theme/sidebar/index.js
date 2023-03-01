// 侧边栏（使用多侧边栏的方式）

module.exports = {
  '/share/guide/': [
    {
      title: '基础',
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'front-matter',
      ]
    },
    {
      title: '进阶',
      collapsable: false,
      children: [
        'theme-config',
        'attention',
        'deploy',
        'example',
      ]
    },
  ],
  '/share/git/': [
    {
      title: 'Git介绍和使用',
      collapsable: false,
      children: [
        '',
        'gitflow',
        'changyong'
      ]
    }
  ],
  '/standard/': [
    {
      title: 'Git开发规范',
      collapsable: false,
      children: [
        '',
        'tijiaoguifan'
      ]
    }
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
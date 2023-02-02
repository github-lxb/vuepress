---
title: 主题配置
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---

## 导航栏

导航栏包含页面标题、搜索框、 导航栏链接、多语言切换、仓库链接等。

### 导航栏 Logo

```js
// docs/.vuepress/config/theme/index.js
module.exports = {
  logo: '/public/logo.png'
}
```

### 导航栏链接

```js
// docs/.vuepress/config/theme/nav/index.js
module.exports = [
  {
    text: '指南',
    link: '/guide/'
  },
  {
    text: '前端',
    // 配置 icon
    icon: 'iconfont icon-html5',
    // 下拉列表
    items: [
      {
        text: 'js',
        link: '/front/js/'
      },
      {
        text: 'css',
        link: '/front/css/'
      },
      {
        text: 'html',
        link: '/front/html/'
      }
    ]
  },
  {
    text: 'GitHub',
    // 配置外链
    link: 'https://github.com/',
    icon: 'reco-github'
  },
]
```

## 侧边栏

```js
// docs/.vuepress/config/theme/sidebar/index.js
module.exports = {
  '/guide/': [
    // '' 代表当前目录下的 README.md 文件
    '',
    'getting-started',
    'directory-structure',
    'front-matter',
    'theme-config',
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
```

* 导航栏与侧边栏中的内部路径可以省略 .md 拓展名，前提是不以 `/` 结尾。
* 以 `/` 结尾的的路径代表目录，将会自动匹配该文件下的 `*/README.md` 文件

## 最后更新时间

获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部

```js
// docs/.vuepress/config/theme/index.js
module.exports = {
  lastUpdated: '最后更新时间'
}
```

该配置是内置的 `@vuepress/last-updated` 插件提供的，可自定义显示格式

```js
// docs/.vuepress/config/plugins/index.js
const dayjs = require('dayjs')
module.exports = ctx => ({
  // 最后更新时间插件（内置）
  '@vuepress/last-updated': {
    transformer: timestamp => {
      return dayjs(timestamp).format('YYYY-MM-DD HH:mm')
    }
  },
})
```

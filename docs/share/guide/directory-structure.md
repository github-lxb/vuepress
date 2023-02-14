---
title: 目录结构
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── .temp (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   ├── config (可选的)
│   │   │   ├── plugins
│   │   │   |   └── index.js
│   │   │   ├── theme
│   │   │   |   └── nav
│   │   │   |   |   └── index.js
│   │   │   |   └── sidebar
│   │   │   |   |   └── index.js
│   │   │   |   └── index.js
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等，源代码的根目录，相当于 `vue` 项目的 `src` 目录。
- `docs/.vuepress/.temp`: 开发时自动生成的临时文件。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/config`: config.js中拆分出来的配置，存放主题、插件配置。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。


对于上述的目录结构，默认页面路由地址如下：

|   文件的相对路径    |  页面路由地址   |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

* `.md` 文件最终会被编译成 `.html` 文件
* 当前路由地址没指定到文件时，默认的对应文件为 `README.md` 或 `index.md`，但是这两个文件不建议同时存在
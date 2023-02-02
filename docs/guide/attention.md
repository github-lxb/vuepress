---
title: 注意事项
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---

## 基础路径

如果你的网站会被部署到一个非根路径，你将需要在 .vuepress/config.js 中设置 base，举例来说，如果你打算将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 的值就应该被设置为 `'/bar/'` (应当总是以斜杠开始，并以斜杠结束)。

## 公共文件

有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。


## 静态资源引用

* 因为将来不确定该项目是否会被部署到一个非根路径，所以在引用静态资源时得兼容
* 推荐使用 **相对路径** 来引用（在当前目录下创建一个静态资源目录，例如：`![图片](./assets/img.png)`）。

### markdown语法的图片

```markdown
![logo](/image/logo)
```
其中最开始的 `/` 会指到 `docs/.vuepress/public` 目录下，这种写法在部署到一个非根路径的网站时会有问题

```markdown
![logo](~@alias/image/logo)
```
这是 **绝对路径** 的写法，`@alias` 是在项目配置文件中定义的别名，会指到 `docs/.vuepress/public` 目录下，绝对路径引用时使用这种方式

### html 标签

VuePress 提供了内置的一个 helper `$withBase`（它被注入到了 Vue 的原型上）

```markdown
<img :src="$withBase('/foo.png')" alt="foo">
```

值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。


## stylus 文件中引用一般的 css 样式表

由于背后的行为，不论是在 `palette.styl` 或是 `index.styl` ，都不能透过 `@import / @require` 相对路径引用一般的 .css 样式表，只能通过绝对路径引用

1. 在项目配置文件中配置样式表的目录

  ```js
  // config.js
  alias: {
    'styles': path.resolve(__dirname, './styles')
  }
  ```

2. 使用绝对路径引用 css 样式表

  ```stylus
  @require '~styles/style.css'
  ```

## 如何添加 iconfont 字体图标

1. 下载字体文件到 `public/fonts` 目录
2. `styles` 目录下增加 `iconfont.styl` 文件
3. 使用 `{ text: '首页', link: '/', icon: 'iconfont icon-myIcon' }`



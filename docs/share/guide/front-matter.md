---
title: Front Matter
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---

front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。示例如下：

```
---
title: Front Matter
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
tags:
 - js
 - html
 - java
---
```

在这些三条虚线之间，设置的是预定义变量，可以理解为针对当前页面的配置信息，以上的这几个配置建议每篇文章都写上

## title

作用于浏览器标签页的标题、当前文档的标题，左侧侧边栏的标题。 

在写文章时，不建议使用 `markdown` 的一级标题，例如：`# 这是一级标题`，因为该主题会生成两个标题，建议文章中最大标题为 `二级标题`

## author

展示作者名称

## date

展示文档创建日期

## categories

该配置是由 `vuepress-theme-reco` 主题提供，原意是对博客文章的分类归纳，目前用来对人员的归纳，可以设置多个

## tags

该配置是由 `vuepress-theme-reco` 主题提供，该文章的标签，可以设置多个

## 其他的变量

另外还有一些`Vuepress` 默认主题的变量例如`prev`, `next`，请移步 [官方文档](https://vuepress.vuejs.org/zh/guide/frontmatter.html)
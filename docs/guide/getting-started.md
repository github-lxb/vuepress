---
title: 快速上手
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---


1. 创建并进入一个新目录

   ```sh
   mkdir vuepress-starter && cd vuepress-starter
   ```

2. 初始化

   ```sh
   yarn init -y
   ```

3. 将 VuePress 安装为本地依赖（不推荐全局安装）

   ```sh
   yarn add -D vuepress
   ```

4. 在 `package.json` 文件中增加脚本

   ```json
   "scripts": {
     "dev": "vuepress dev docs --temp ./docs/.vuepress/.temp",
     "build": "vuepress build docs",
     "deploy": "./deploy.sh"
   },
   ```
   * `dev`：运行开发环境，`--temp ./docs/.vuepress/.temp` 是因为在页面中使用 `front matter` 配置时，不会热更新的解决办法
   * `build`：打包编译
   * `deploy`：部署静态网页


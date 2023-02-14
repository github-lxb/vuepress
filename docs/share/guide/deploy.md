---
title: 部署
author: 李旭斌
date: 2023-02-02
categories:
 - 李旭斌
---

## GitHub Pages

部署到 github 的静态网站，使用免费

1. 发布到 `https://<USERNAME>.github.io/`，这是一个专门存放静态网页的仓库，项目配置文件中的 `base` 属性要设置为 '/'
2. 发布到 `https://<USERNAME>.github.io/<REPO>/`，`<REPO>`代表你项目的名称，则项目配置文件中的 `base` 属性要设置为对应的名称

在项目中，创建 `deploy.sh` 文件，并在 `package`文件中增加脚本

```sh {13,20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

```json
"scripts": {
  "deploy": "./deploy.sh"
},
   ```

执行 `yarn deploy`
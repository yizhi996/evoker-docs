#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
pnpm build

# 进入构建文件夹
cd ./.vitepress/dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yizhi996/nzoth-docs.git main:gh-pages

cd -
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'interview.limingkang.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:lenyuqin/interview.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://lenyuqin:${GITHUB_TOKEN}@github.com/lenyuqin/interview.git
  git config --global user.name "lenyuqin"
  git config --global user.email "1151475385@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist


##!/usr/bin/env sh
#
## 确保脚本抛出遇到的错误
#set -e
#
## 生成静态文件
#npm install
#npm run build
#
## 进入生成的文件夹
#cd docs/.vuepress/dist
#
## deploy to github
#echo 'interview.limingkang.com' > CNAME
##if [ -z "$GITHUB_TOKEN" ]; then
##  msg='deploy'
##  githubUrl=git@github.com:lenyuqin/interview.git
##else
#msg='来自github actions的自动部署'
#githubUrl=https://lenyuqin:${GITHUB_TOKEN}@github.com/lenyuqin/interview.git
#git config --global user.name "lenyuqin"
#git config --global user.email "1151475385@qq.com"
##fi
#git init
#git add -A
#git commit -m "${msg}"
#git push -f $githubUrl master:gh-pages # 推送到github
#
#cd - # 退回开始所在目录
#rm -rf docs/.vuepress/dist

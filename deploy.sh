#!/bin/bash

# 設定
PROJECT_NAME="20250601Table"
DEPLOY_DIR="../gh-pages"

echo "清除舊部署目錄..."
rm -rf $DEPLOY_DIR
git worktree prune

echo "建立 gh-pages 分支工作區..."
git worktree add -B gh-pages $DEPLOY_DIR origin/gh-pages

echo "編譯 Nuxt 靜態網站..."
npm run generate

echo "拷貝產出內容到 gh-pages..."
rm -rf $DEPLOY_DIR/*
cp -r .output/public/* $DEPLOY_DIR/

echo "提交部署內容..."
cd $DEPLOY_DIR
git add .
git commit -m "deploy @ $(date +'%Y-%m-%d %H:%M:%S')" || echo "📝 無變更可提交"
git push origin gh-pages

echo "部署完成！打開你的網站："
echo "https://reese-chang.github.io/$PROJECT_NAME/"

# 回到原本目錄
cd -

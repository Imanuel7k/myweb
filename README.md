# ℵ₁

井的个人博客，使用 Astro 构建并部署到 GitHub Pages。

## 写作

新文章放在 `src/content/posts/{slug}/index.md`，图片放在同目录的 `images/` 中。

```yaml
---
title: "文章标题"
date: 2026-09-09
description: "文章摘要"
categories: ["哲学"]
tags: []
draft: true
---
```

`draft: true` 的文章不会出现在网站、RSS 或站点地图中。发布时改为 `false` 或删除该字段。

## 本地预览

```bash
npm install
npm run dev
```

## 检查与构建

```bash
npm run check
npm run build
```

`npm run build` 会生成静态网站。推送到 `main` 分支后，GitHub Actions 自动部署到 GitHub Pages。

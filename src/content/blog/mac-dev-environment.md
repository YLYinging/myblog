---
title: "Mac 开发环境：我的基础工具清单"
description: "把终端、编辑器、版本管理和本地开发环境安排得更顺手。"
pubDate: 2026-10-22
category: 工具
tags: [macOS, VS Code, Git]
---

## 开始之前

一个稳定的开发环境不需要安装大量工具，重要的是每个工具都有明确用途。

## 命令行与版本管理

在终端检查是否已经安装 Git：

```bash
git --version
```

初次使用 Git，可以设置提交作者信息：

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 代码编辑器

VS Code 适合编辑网页、Markdown 和轻量级项目。建议从官方扩展市场按需安装，而不是一次性装很多插件。

## Node.js 与 npm

开发 Astro 或前端项目，需要先安装兼容版本的 Node.js。安装后执行：

```bash
node --version
npm --version
```

在项目文件夹执行 `npm install`，再执行 `npm run dev` 启动开发服务器。

## 提高可维护性

- 学习笔记统一用 Markdown 编写。
- 项目配置文件也加入 Git 版本管理。
- 敏感凭证放在本地环境变量中，不要提交到公开仓库。
- 定期整理废弃的工具和依赖。

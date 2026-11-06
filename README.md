# My Space 3.0 · Astro + Markdown + GitHub Pages

苹果风格个人网站：主页、学习笔记、文章详情、标签归档、关键词搜索、深色模式、项目与关于页。

## 0. 重要提醒

这是完整的 Astro **源码项目**，不是直接双击 HTML 就能运行的版本。需要 Node.js 和依赖安装。

## 1. Mac 本地开发

1. 安装 Node.js 22 LTS 或更新的受支持版本（推荐使用 nvm），确认 `node -v`、`npm -v`。
2. 用 VS Code 打开本项目根目录。
3. 在终端依次执行：

```bash
npm install
npm run dev
```

4. 打开终端显示的本地地址（一般是 `http://localhost:4321/my-space/`）。
5. 发布前执行 `npm run build` 进行构建检查。

## 2. 新增文章（无需改 HTML）

1. 在 `src/content/blog/` 中新建例如 `springboot-basics.md`。
2. 输入下面的内容：

```md
---
title: "Spring Boot 入门笔记"
description: "第一次搭建 Spring Boot 项目。"
pubDate: 2026-11-06
category: Java
tags: [Java, Spring Boot]
draft: false
---

## 第一节

这里是文章正文。支持代码块、图片和链接。
```

3. 保存文件，文章便会自动出现在列表、搜索结果和对应标签归档中。

`draft: true` 会将文章从公开页面隐藏。文件名决定文章 URL：`springboot-basics.md` → `/blog/springboot-basics/`（仓库部署时还带仓库名前缀）。

## 3. 如何修改个人信息、项目和配色

- 网站名称和作者昵称：`src/site.ts`。
- 首页内容：`src/pages/index.astro`。
- 项目：`src/pages/projects.astro`。
- 学习笔记列表：`src/pages/blog/index.astro`。
- 关于页面：`src/pages/about.astro`。
- 风格和深色模式：`src/styles/global.css`。

GitHub 主页默认使用 `src/site.ts` 中的地址，也可以通过 `PUBLIC_GITHUB_PROFILE` 覆盖。公开邮箱使用 `PUBLIC_CONTACT_EMAIL`，留空时会隐藏邮件链接。这两个变量可在本地 `.env` 或 GitHub 仓库的 Actions variables 中配置。

## 4. GitHub Pages 自动部署

1. 在 GitHub 新建一个公开仓库，建议叫 `my-space`。
2. 将项目根目录所有文件推送到仓库 `main` 分支，**保留 `.github/workflows/deploy.yml`**。
3. 打开仓库 `Settings → Pages`，Source 选择 **GitHub Actions**（不是 Deploy from a branch）。
4. 在 Actions 中看到 `Deploy My Space to GitHub Pages` 成功后访问 `https://你的用户名.github.io/my-space/`。

```bash
git init
git add .
git commit -m "Launch My Space Astro"
git branch -M main
git remote add origin https://github.com/你的用户名/my-space.git
git push -u origin main
```

此后每次更新 Markdown：

```bash
git add .
git commit -m "Add new article"
git push
```

GitHub Actions 会自动重新构建并发布。工作流会根据仓库 owner 和仓库名自动设置 URL 前缀，支持普通项目仓库。如果使用自定义域名，请配置 Actions variable `PUBLIC_SITE_URL` 和 Pages 域名。发布构建会使用实际地址生成站点地图 `sitemap.xml` 和分享预览。

## 5. 注意事项

- 文章搜索是**浏览器端筛选已构建的文章**，不需要后台数据库。
- 留言、登录和可视化后台编辑不包含在这一版中；GitHub Pages 本身不运行 Java 服务端。
- `npm install` 需要可用的 npm 网络连接；建议安装依赖后将生成的 `package-lock.json` 提交，以提高后续构建的可复现性。当前工作流使用 `npm install`，允许首次无锁文件部署。
- 推荐用 `npm run build` 验证后再部署。

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

## 2. 在内容文件夹里写 Markdown

| 想更新的模块 | 写入目录 | 可以照着写 |
| --- | --- | --- |
| 学习笔记 | `src/content/blog/notes/` | [Java 集合笔记](src/content/blog/notes/java-collections.md) |
| 技术分享 | `src/content/blog/tech/` | [Linux 排错指南](src/content/blog/tech/linux-troubleshooting.md) |
| 项目 | `src/content/projects/` | [Java 后端练习项目](src/content/projects/java-backend.md) |
| 最近在做 | `src/content/updates/` | [首页改版动态](src/content/updates/home-refresh.md) |

开发服务器运行时，保存后刷新对应页面即可预览。正式网站在下一次构建部署后更新。

### 学习笔记和技术分享

新建 `springboot-basics.md`，用开头的字段设置标题、摘要和分类。

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

已发布的文章会进入学习笔记列表、搜索、标签归档和 RSS。技术分享目录里的文章会同时出现在「技术分享」。学习笔记目录里的文章也可以用 `techShare: true` 加入分享栏目。用 `shareGroup` 指定展示分组，可选 `troubleshooting`（排错指南）、`tools`（工具配置）和 `retrospective`（项目复盘）。省略时显示在「更多实践」。

Java 笔记可以用 `seriesOrder: 1`、`seriesOrder: 2` 等指定文末「下一篇」的阅读顺序。未编号的笔记排在编号笔记之后，按发布日期和文章 ID 排序。

`draft: true` 会隐藏内容。建议用小写英文和连字符命名，两个文章目录里的文件名要唯一。`springboot-basics.md` 的文章地址是 `/blog/springboot-basics/`，正式网站还会加上仓库路径前缀。

### 项目和最近在做

项目文件至少填写 `title` 和 `description`，正文会显示在项目页。可以用 `status` 标明进度，用 `order` 控制展示顺序，数字越小越靠前。

动态文件填写 `title`、`date` 和 `description`，正文写具体进展。首页显示日期最新的一条，全部动态可在「最近在做」页面查看。项目和动态也支持用 `draft: true` 暂存。

## 3. 如何修改个人信息、项目和配色

- 网站名称和作者昵称：`src/site.ts`。
- 首页内容：`src/pages/index.astro`。
- 项目内容：`src/content/projects/`。
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

### 精选技术分享与项目顺序

在技术分享文章的 frontmatter 中设置 `featured: true`，首页与技术分享页会使用同一篇精选。多篇标记时选择发布日期最新的一篇；没有标记时使用最新技术分享。草稿和未加入技术分享的学习笔记不会进入精选。

项目先展示已完成或进行中的内容（包括持续迭代），再展示计划；各组内继续使用 `order` 排序。首页计划仅显示标题和状态，详情在项目页查看。

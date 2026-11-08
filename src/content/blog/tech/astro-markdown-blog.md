---
title: "用 Astro + Markdown 搭建个人博客"
description: "将文章与页面样式分离，用一个 Markdown 文件发布一篇新文章。"
pubDate: 2026-11-06
category: 前端
tags: [Astro, Markdown, GitHub Pages]
shareGroup: retrospective
---

## 为什么采用 Astro？

对于主要展示文章和作品的个人网站，预先生成静态 HTML 可以降低部署复杂度。Astro 支持内容集合、组件化页面和 Markdown 内容管理。

## 新增一篇文章

在 `src/content/blog/notes/` 新建一个 `.md` 文件，例如 `my-first-note.md`：

```markdown
---
title: "我的第一篇笔记"
description: "记录一个小的技术收获。"
pubDate: 2026-11-06
category: Java
tags: [Java, 学习]
---

## 今天学到了什么？

这里开始写文章正文。
```

保存后，开发服务器会自动检测文章变化。

## 内容和样式分离

你只需要关注 Markdown 中的文章标题、分类、标签和正文。网站会按照统一模板生成文章详情页和列表卡片。

## 自动部署

把代码推送到 GitHub 的 `main` 分支后，仓库中的 GitHub Actions 工作流会构建静态页面并发布到 GitHub Pages。

有关具体配置步骤，请参考项目里的 `README.md`。

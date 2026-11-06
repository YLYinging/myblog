---
title: "Linux 常用命令与排错清单"
description: "从文件、进程到网络和日志，用常见命令快速定位问题。"
pubDate: 2026-10-29
category: DevOps
tags: [Linux, DevOps, 工具]
---

## 先确认当前环境

遇到服务器问题时，不要急着修改配置。先了解当前目录、用户和系统状况：

```bash
pwd
whoami
uname -a
```

## 检查磁盘与内存

```bash
df -h
free -h
```

`df -h` 查看文件系统的空间占用；`free -h` 可用于 Linux 上查看内存情况。

## 排查进程与端口

```bash
ps aux | grep java
ss -tuln
```

检查端口后，再核对服务配置和防火墙设置。不要直接关闭不了解的系统进程。

## 查看日志

```bash
journalctl -u your-service --since "1 hour ago"
tail -n 100 app.log
```

先找最近一次异常，再结合时间顺序排查依赖服务、连接与应用日志。

## 排查顺序

1. 确认现象可以稳定复现。
2. 查看日志时间和错误信息。
3. 确认进程、端口、磁盘和网络。
4. 做最小修改并验证。
5. 记录解决方案，方便以后复盘。

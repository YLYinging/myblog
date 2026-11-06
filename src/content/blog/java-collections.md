---
title: "Java 集合框架入门：List、Set 与 Map"
description: "理解常见集合接口的不同特点，选择更适合场景的数据结构。"
pubDate: 2026-11-03
category: Java
tags: [Java, 后端, 数据结构]
---

## 为什么需要集合？

数组适合存储固定长度的数据，但在实际开发中，我们经常需要动态添加、删除和查找元素。Java 集合框架为不同需求提供了统一接口。

## List：有序且允许重复

`List` 按插入顺序保存元素，支持通过索引访问。常用实现包括 `ArrayList` 和 `LinkedList`。

```java
List<String> languages = new ArrayList<>();
languages.add("Java");
languages.add("Python");
System.out.println(languages.get(0)); // Java
```

`ArrayList` 基于动态数组，在大多数普通列表场景中是一个合理的起点。

## Set：元素不重复

需要去重时可以考虑 `Set`。`HashSet` 通常不承诺遍历顺序；需要保持插入顺序时可考虑 `LinkedHashSet`。

```java
Set<String> tags = new HashSet<>();
tags.add("Java");
tags.add("Java");
System.out.println(tags.size()); // 1
```

## Map：按键查找数据

`Map<K,V>` 存储键值对。例如根据用户 ID 查找用户名：

```java
Map<Integer, String> users = new HashMap<>();
users.put(101, "Alice");
System.out.println(users.get(101));
```

## 如何选择？

- 需要保留重复元素与顺序：优先考虑 `List`。
- 需要去重：考虑 `Set`。
- 需要通过键快速查找：考虑 `Map`。

这是一篇入门示例笔记，后续可以补充源码分析、时间复杂度与性能测试。

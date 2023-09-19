---
slug: /giokit
title: 插件介绍
---

## GioKit - GrowingIO SDK 使用辅助工具

GioKit 是一个辅助客户快速稳定接入使用 GrowingIO SDK 的工具。目前支持 WebJS、iOS 和 Android，它能够快速检测 SDK 是否集成成功，并能够在面板中实时反馈接入的 SDK 信息，具体包括以下功能：

### WebJS

- 日志 - 查看 Gio 事件日志和浏览器 console.log|info|error|debug；手动执行 JS 命令行
- 网络 - 查看 XMLHttpRequest、Fetch 和 sendBeacon 请求
- 存储 - 查看 Cookies、LocalStorage 和 SessionStorage
- 页面和设备 - 查看当前页面在浏览器和 Gio SDK 解析下的页面数据；查看设备相关信息
- 事件调试 - 查看并调试 Gio 事件，实时查看 Gio 事件数据
- 快速初始化 - 通过可视化表单快速生成适合自己业务的 Gio SDK 初始化代码
- 运行状态 - 快速查看当前 SDK 的集成和配置状态

> 目前 GioKit 还处于开发试用阶段，更多功能即将上线，敬请期待。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

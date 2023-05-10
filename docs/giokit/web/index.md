---
slug: /giokit/web
title: 功能介绍
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ImageLoader from '@site/src/components/ImageLoader';

## 简介

WebJS GioKit 具有兼容性强、功能丰富、界面美观、使用简单等优点，无需依赖其他环境，可与`VConsole`等其他调试工具同时使用。主要有 `日志`、`网络请求`、`存储`、`页面和设备`、`事件调试`、`事件模拟`、`快速初始化`、`运行状态` 8 大模块功能。后续会持续迭代并新增其他功能，敬请期待。

GioKit 同时适配 PC 端和移动端。

:::caution 注意
WebJS GioKit 暂仅支持 3.8.0 以上版本的 SDK，其他版本 SDK 接入可能会遇到无法使用或 SDK 报错的问题。
:::

<ImageLoader path="img/giokit/web/pc-overview" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-overview" height="50%" width="30%" />

## 功能介绍

### 日志

`Gio`、`Log`、`Info`、`Warn`、`Error` 级别的日志输出，提供手动执行 JS 命令行、搜索、清空功能。
<ImageLoader path="img/giokit/web/pc-log" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-log" height="50%" width="30%" />

### 网络请求

查看 `XMLHttpRequest`、`Fetch` 和 `sendBeacon` 请求内容，其中 Gio 的上报请求使用橙色`G`标志进行突出标记以方便区分。请求状态实时更新，使用不同颜色标记请求时长。
<ImageLoader path="img/giokit/web/pc-network" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-network" height="50%" width="30%" />

### 存储

查看 `Cookies`、`LocalStorage` 和 `SessionStorage` 数据内容，提供 新增、编辑、删除、搜索 功能。
<ImageLoader path="img/giokit/web/pc-storage" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-storage" height="50%" width="30%" />

### 页面和设备

查看当前页面在浏览器和 Gio SDK 解析下的页面数据；查看设备、浏览器相关信息。
<ImageLoader path="img/giokit/web/pc-system" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-system" height="50%" width="30%" />

### 事件调试

Gio 事件实时监控，不用打开面板即可感知 Gio 事件的产生。可快速查看上报事件详情，极大地方便事件的校验。
<ImageLoader path="img/giokit/web/pc-monitor" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-monitor" height="50%" width="30%" />
<br /><br />
<ImageLoader path="img/giokit/web/pc-debug" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-debug" height="50%" width="30%" />

### 事件模拟

通过可视化工具本地模拟预览一个指定类型事件。
<ImageLoader path="img/giokit/web/pc-mockevent" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-mockevent" height="50%" width="30%" />

### 快速初始化

通过可视化表单快速生成适合您业务场景需要的功能性初始化代码，极大地降低开发者的理解上手难度和代码出错概率，快速完成 SDK 的接入，提高效率。
<ImageLoader path="img/giokit/web/pc-quickinit" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-quickinit" height="50%" width="30%" />

### 运行状态

可全面快速地了解当前 SDK 的集成和运行状态，帮助快速定位基础问题。
<ImageLoader path="img/giokit/web/pc-status" width="65%" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ImageLoader path="img/giokit/web/n-status" height="50%" width="30%" />

---
slug: /giokit
title: "GioKit"
---

## GioKit - GrowingIO SDK 使用辅助工具

GioKit 是一个辅助客户快速稳定接入使用 GrowingIO SDK 的工具。目前支持 WebJS、iOS 和 Android，它能够快速检测 SDK 是否集成成功，并能够在面板中实时反馈接入的 SDK 信息，具体包括以下功能：

### Android/iOS

- SDK 自检 - SDK 集成检测，包括初始化参数，配置参数等
- SDK 信息 - 全面的 SDK 集成信息与 App 基本信息，方便截图分享
- 代码埋点 - APP 手动埋点检测(仅 Android)，展示埋点事件所在的函数
- 事件库 - 实时埋点数据浏览，包括数据发送状态，发送数据详情
- XPath 跟踪 - 圈选辅助工具，可以展示元素的 XPath 路径
- 网络记录 - 埋点事件请求抓包工具，实时查看埋点数据上传进度
- 实时事件 - 埋点事件实时触发展示，点击可快速查看埋点数据内容

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

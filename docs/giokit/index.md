---
slug: /giokit
title: 插件介绍
---

GioKit - GrowingIO SDK 使用辅助工具

GioKit 是一个辅助客户快速稳定接入使用 GrowingIO SDK 的工具。目前支持 iOS 和 Android，它能够快速检测 SDK 是否集成成功，并能够在面板中实时反馈接入的 SDK 信息，具体包括以下功能：

- SDK 自检 - SDK 集成检测，包括初始化参数，配置参数等
- SDK 信息 - 全面的 SDK 集成信息与 App 基本信息，方便截图分享
- 代码埋点  - APP手动埋点检测(仅Android)，展示埋点事件所在的函数
- 事件库 - 实时埋点数据浏览，包括数据发送状态，发送数据详情
- XPath跟踪 - 圈选辅助工具，可以展示元素的XPath路径
- 网络记录 - 埋点事件请求抓包工具，实时查看埋点数据上传进度

> 目前 GioKit 还处于开发试用阶段，更多功能即将上线，敬请期待。


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

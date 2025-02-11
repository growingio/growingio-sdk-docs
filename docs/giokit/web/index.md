---
slug: /giokit/web
title: 功能介绍
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 简介

WebJS GioKit 具有兼容性强、功能丰富、使用简单等优点，无需依赖其他环境，可与`VConsole`等其他调试工具同时使用。目前有两个版本，一是代码自主集成，适用于无法使用谷歌浏览器插件的场景。例如在移动端展示的H5等界面；二是谷歌浏览器插件版本，与圈选热图功能合为一体的综合性插件。

## 版本介绍

代码集成版本功能丰富，兼容性强，可支持 3.8.0 以上（含4.x）版本的 SDK。但存在代码侵入性强，开发依赖程度高的问题，不利于快速进行数据校验。且因其使用的是js加载运行的方式，可能会存在页面跳转时事件捕获遗漏的技术瓶颈问题。

<ImageLoader path="img/giokit/web/overview-h5" height="50%" width="30%" />

浏览器插件版本功能简洁，简单易上手，无需开发进行代码集成，可与圈选、热图一起使用。但目前仅支持 4.x 版本的 SDK。

<ImageLoader path="img/giokit/web/overview-chrome" height="50%" width="30%" />

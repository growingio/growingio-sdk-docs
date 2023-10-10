---
slug: /webjs
title: "WebJS SDK"
---

## 简介

GrowingIO WebJS SDK 支持 IE11 浏览器、360 浏览器、谷歌浏览器、搜狗浏览器、火狐浏览器、QQ 浏览器、Safari 浏览器、Maxthon、Mobile 端浏览器，并且全面支持 H5，覆盖市面上主流的浏览器。只要在 layout 文件里面加入几行代码，就可以集成 GrowingIO 的 JS SDK，可以采集用户的行为数据。

当 SDK 加载后，会自动开始采集以下三类数据：

* **用户访问数据：** 网站访客在何时何地访问了哪个网页，收集包括域名、页面路径、浏览器、操作系统、屏幕分辨率、访问来源、用户唯一标识 ID、访问唯一标识 ID、访问时间、页面标题等信息。
* **行为数据：**用户在网站上的交互行为，比如点击链接、修改选择，都会被自动采集，内容包括交互元素的页面信息、交互行为类型、交互元素的标记 ID、交互元素的内容、交互元素的超链接、交互元素的位置信息。SDK 不采集除搜索框外任何用户在表单里输入的信息。
* **内容数据：**当用户访问网站时，用户看到的内容即页面出现的元素，会被自动采集，包括内容所在的页面信息、元素的标记 ID、文本内容、超链接、位置信息。

关于更详细的相关实现、无埋点以及一些实践的案例，请查看[小百科](/docs/webjs/encyclopedia)。

## 平台兼容性

<font size="4" color="#FC5F3A">由于4.x版本的SDK调整了无埋点逻辑和上报数据的测量协议，因此4.x版本的SDK要求平台版本最低4.2.0，如果您使用的平台版本低于4.2.0，请使用对应版本的SDK。否则可能会出现数据无法上报或报错的问题。</font>

### Saas

如果您使用的平台是 **GrowingIO官网** ，即使用 **2.x 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，但版本号低于4.2.0** ，即使用 **3.0.x-3.8.x 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号大于等于4.2.0** ，您可以继续参考本文档使用。

如果您使用的平台版本不在上述范围内，请咨询我们的技术支持。

### CDP(OP)私有部署

如果您使用的平台版本是 **13.6版本** ，即使用 **0.6.x-1.2 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **2.0-2.11.x 或 4.0-4.2.0以下（不含）** ，即使用 **3.0-3.8.x 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号高于等于4.2.0** ，您可以继续参考本文档使用。

如果您使用的平台版本不在上述范围内，请咨询我们的技术支持。

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>InternetExplorer | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| 11 | >= 15| >= 54 | >= 51 | >= 10 | >= 38 | >= 10 |

## 升级指南

为了帮助原先使用各个低版本的用户快速升级到4.0，我们单独为您详细介绍了如何快速升级。

详情介绍请见[升级指南](/docs/webjs/upgrade)
<br/><br/>

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

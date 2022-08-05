---
slug: /webjs
title: Web JS SDK
---

## 3.3

具备以下特性：

* 埋点能力，开发同学调用API主动采集埋点事件
* 无埋点能力，自动采集用户行为事件，可通过开关控制
* 小程序打通，方便于小程序打通访问用户
* 原生打通，方便于原生App打通访问用户
* Web可视化圈选支持
* Hybrid可视化圈选支持

## 3.8

具备以下特性：

* 埋点能力，开发同学可调用API主动采集自定义事件。
* 插件无埋点能力，自动采集用户行为事件，可通过开关和插件控制。
* 小程序打通，方便于小程序打通访问用户。
* 原生打通，方便于原生App打通访问用户。
* 插件半自动埋点浏览能力。
* 可依据使用场景自由搭配SDK插件。
* 支持CDN和npm集成。
* 支持自定义插件开发。（实验性功能，暂未开放）

**<font color="#FC5F3A">注意：</font>**<br/>

:::info
WebJS SDK 3.8 目前还在公测阶段，发布的均为RC版本，建议在测试环境充分测试并观察一段时间使用，谨慎上生产。

WebJS SDK 3.3 仍然为目前最稳定版本。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

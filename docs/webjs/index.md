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
WebJS SDK 3.8 已经发布正式版本，已经在多家客户环境得到验证并稳定运行，可放心使用。如果您有升级的条件请尽快升级至3.8。

WebJS SDK 3.3 目前仍然可以使用，但还是建议使用3.8版本，功能更丰富，场景更完善。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

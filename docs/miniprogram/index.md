---
slug: /miniprogram/
title: 小程序 SDK
---


## 小程序SDK 3.3

支持 `微信小程序`、`支付宝小程序`。

目前具备以下特性：

- 埋点能力，开发同学可调用API主动采集自定义事件。
- 无埋点能力，自动采集用户行为事件，可通过开关控制。

**<font color="#FC5F3A">注意：</font>**<br/>
小程序SDK 3.3不支持`uniapp vue3`、`taro3 vue3`和`remax`，如果您使用了这些框架，请使用小程序SDK 3.8。

## 小程序SDK 3.8

支持 `微信小程序`、`阿里(支付宝)小程序`、`百度小程序`、`字节(抖音头条)小程序`、`QQ小程序`、`淘宝小程序`、`快手小程序`、`快应用`。

目前具备以下特性：

- 埋点能力，开发同学可调用API主动采集自定义事件。
- 插件无埋点能力，自动采集用户行为事件，可通过开关和插件控制。
- 插件半自动埋点浏览能力，除快应用外，其他小程序均支持半自动埋点浏览事件。
- 新增uni-app vue3、taro3 vue3、remax的支持。
- 新增淘宝小程序、快手小程序的适配。
- 新增淘宝小程序云函数和云应用转发方式的适配。
- 可依据使用场景自由搭配SDK插件。
- 支持自定义插件开发。（实验性功能，暂未开放）

**<font color="#FC5F3A">注意：</font>**<br/>

:::info
小程序SDK 3.8 已经发布正式版本，已经在多家客户环境得到验证并稳定运行，可放心使用。如果您有升级的条件请尽快升级至3.8。

小程序SDK 3.3 目前仍然可以使用，但还是建议使用3.8版本，功能更丰富，场景更完善。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

---
slug: /miniprogram/
title: 小程序 SDK 
---


**小程序SDK 3.3 **支持 `微信小程序`、`支付宝小程序` 平台，后续会逐步支持其他平台。

目前具备以下特性：
- 埋点能力，开发同学调用API主动采集埋点事件
- 无埋点能力，自动采集用户行为事件，可通过开关控制

  
**小程序SDK3.8**支持 微信小程序、支付宝小程序、百度小程序、字节(抖音头条)小程序、QQ小程序、淘宝小程序、快应用。

京东小程序、快手小程序 正在抓紧适配中，敬请期待。

目前具备以下特性：

- 埋点能力，开发同学可调用Api主动采集自定义事件。
- 插件无埋点能力，自动采集用户行为事件，可通过开关和插件控制。
- 插件半自动埋点浏览能力，除快应用外，其他小程序均支持半自动埋点浏览事件。
- 可依据使用场景自由搭配SDK插件。
- 支持自定义插件开发。（实验性功能，暂未开放）
- 新增uni-app vue3、taro3 vue3、remax的支持。
- 新增淘宝小程序云函数和云应用转发方式的适配。

:::info
目前小程序SDK3.8还在公测阶段，发布的均为RC版本，版本中适配有一些客户的需求，会在这部分客户中试运行。小程序SDK3.3还是目前的稳定版本，如果3.3版本可以满足需求，建议使用 3.3版本。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

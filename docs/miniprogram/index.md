---
slug: /miniprogram
title: 小程序 SDK
---


小程序SDK支持 `微信小程序`、`支付宝小程序` 平台，后续会逐步支持其他平台。

目前具备以下特性：
- 埋点能力，开发同学调用API主动采集埋点事件
- 无埋点能力，自动采集用户行为事件，可通过开关控制

## 选择小程序平台

我们针对微信小程序和支付宝小程序分别进行了SDK的打包。

如果您使用`uni-app`、`Taro`等多平台框架开发同时需要产出多端，也并不清楚如何集成SDK，请联系我们。

请在左侧【如何集成】菜单中选择对应文档进行集成。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

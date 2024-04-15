---
slug: /miniprogram/3.3
title: 小程序 SDK (3.3)
---


小程序SDK 3.3 版本支持 `微信小程序`、`支付宝小程序`。

目前具备以下特性：

- 埋点能力，开发同学调用API主动采集埋点事件
- 无埋点能力，自动采集用户行为事件，可通过开关控制

:::caution
**注：小程序SDK 3.3版本已不再维护，请尽快升级至3.8或4.0版本，具体升级步骤请咨询我们的技术支持。**
:::

## 选择小程序平台

我们针对微信小程序和支付宝小程序分别进行了SDK的打包。

请在左侧【集成】菜单中选择对应文档进行集成。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

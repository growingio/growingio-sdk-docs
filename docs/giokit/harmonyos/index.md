---
slug: /giokit/harmonyos
title: 功能介绍
---


import useBaseUrl from '@docusaurus/useBaseUrl';

## SDK 简介
**GrowingIO HarmonyOS NEXT SDK ToolsKit** GrowingToolsKit 旨在帮助用户提高集成 GrowingIO SDK 效率，在使用 SDK 的开发过程中，便于排查问题，为用户提供最好的埋点服务。

### SDK 信息

收集了 SDK 以及应用的所有基本信息，您可以在这里查看对比所配置内容是否符合预期。如有任何问题，还可截长图发送给技术支持协助排查。

### 事件库

以列表形式展示自插件启用后所有的埋点数据及其发送状态，点击单条数据可查看数据详情。数据格式请移步[测量协议](/knowledge/measurement)。数据关注点请参考[校验时需关注字段和说明](/knowledge/debugverify#校验时需关注字段和说明)。

### 网络记录

该界面会显示 SDK 产生的所有网络请求，包括请求数量，请求大小和请求错误的个数。同时在详情页内可以查看使用了加密库之后的请求数据。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

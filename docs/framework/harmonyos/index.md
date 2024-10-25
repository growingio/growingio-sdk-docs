---
slug: /framework/HarmonyOS
title: "HarmonyOS NEXT SDK"
---

**GrowingIO HarmonyOS NEXT SDK** 自动采集用户访问事件，并支持手动调用相应埋点 APIs 采集埋点事件。

> 支持 HarmonyOS NEXT，基于 OpenHarmony API 12

## 集成准备
### 获取 SDK 初始化必传参数：Account ID、DataSource ID、URL Scheme、Host
:::info
AccountID：项目 ID，代表一个项目<br/>
DataSourceID：数据源 ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>
Host：采集数据上报的服务器地址，非平台地址<br/>

Account ID、DataSource ID、URL Scheme 需要在 GrowingIO 平台上新建数据源，或从已创建的数据源中获取，如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showappdatasourceid" />


:::tip 开源信息
HarmonyOS NEXT SDK 代码已在 [Github](https://github.com/growingio/growingio-sdk-harmonyos) 上开源，可以详细查看代码实现细节，欢迎 star, fork。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

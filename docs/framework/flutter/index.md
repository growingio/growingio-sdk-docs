---
slug: /framework/flutter
title: Flutter SDK
---

Flutter SDK 提供了 [无埋点SDK](/docs/framework/flutter/index.md) 和 [埋点SDK](/docs/framework/flutter/index.md) 两个版本：
* 埋点SDK 只自动采集用户访问事件，需要开发人员调用相应埋点 API 采集埋点事件;
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

## 版本记录
|    版本    | 说明 |  日期  |
|:-------:| :----  |  :-------:  |
| v2.0.1 | 稳定性优化，包括：<br/>- 在导航返回时补发 page<br/>- 重命名 advertModule/advertConfig 为 adsModule/adsConfig<br/>- 添加 analytics adapter 模块<br/>- 升级 iOS SDK 版本为 4.2.0 | 2024-03-19 |
| v2.0.0 | 新版本 与 GrowingIO SDK 4.0 同步，添加新的接口和参数<br/>- Flutter 的 Page 不再基于 Router，由 mixin 类实现，更加清晰的生命周期逻辑和代码结构；<br/>- 圈选的元素只有在定义为 Page 的页面下才能发送元素；<br/>- 无埋点点击事件现在异步发送。 | 2024-01-25 |

:::info
**Dart SDK**： >=2.16.0 
**Flutter 版本**：>=2.10.0<br/>
:::

## 集成准备
### 获取SDK初始化必传参数：Account ID、DataSource ID、URL Scheme、Host
:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>
Host：采集数据上报的服务器地址<br/>

Account ID、DataSource ID、URL Scheme 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持<br/>
Host 需要服务端部署，如不清楚请联系您的专属项目经理或技术支持
:::
##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showappdatasourceid" />


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```


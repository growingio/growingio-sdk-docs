---
slug: /framework/flutter
title: Flutter SDK
---

Flutter SDK 提供了 [无埋点SDK](/docs/framework/flutter/index.md) 和 [埋点SDK](/docs/framework/flutter/index.md) 两个版本：
* 埋点SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。


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
![新建数据源](/img/createapplication.png)
##### 查看
![查看数据源](/img/showappdatasourceid.png)


:::info
**Dart SDK**： >=2.14.0 
**Flutter 版本**：>=2.5.0<br/>
:::

## 版本记录

### 1.0.0 - 2023-03-10
这是 Growingio Flutter sdk Library 的第一个正式版，它包含了以下内容：
- 全新的 Flutter 埋点插件，能几乎支持原生的全部功能；
- 通过 Flutter Aspect 支持SDK的无埋点功能；
- 支持 Flutter 无埋点页面事件，能够基于 Navigation 路由机制发送页面事件；
- 支持 Flutter 无埋点点击事件，能够在用户点击时发送点击事件；
- 支持 Flutter 圈选，将可交互 Widget 与无埋点事件绑定。


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```


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
| v1.1.3 | - 修复 iOS 在元素位置信息为 NaN 情况下出现圈选界面不刷新<br/>- 修复 UrlScheme 多环境配置 | 2023-10-18 |
| V1.1.0 | - 原生SDK升级至 3.5.0；<br/>- 修复由于Android SDK 升级导致的Android Flutter plugin 类的签名不匹配；<br/>- 修复 iOS 从前台到挂起状态下直接杀死 App 异常崩溃捕获。 | 2023-07-26 |
| V1.0.0 | 这是 Growingio Flutter sdk Library 的第一个正式版，它包含了以下内容：<br/>- 全新的 Flutter 埋点插件，能几乎支持原生的全部功能；<br/>- 通过 Flutter Aspect 支持SDK的无埋点功能；<br/>- 支持 Flutter 无埋点页面事件，能够基于 Navigation 路由机制发送页面事件；<br/>- 支持 Flutter 无埋点点击事件，能够在用户点击时发送点击事件；<br/>- 支持 Flutter 圈选，将可交互 Widget 与无埋点事件绑定。 | 2023-04-07 |

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


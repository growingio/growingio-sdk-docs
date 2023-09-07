---
slug: /ios
title: iOS SDK
---


iOS SDK 提供了 [无埋点SDK](/docs/3.x/ios/Introduce#无埋点-sdk-集成) 和 [埋点SDK](/docs/3.x/ios/Introduce#埋点-sdk-集成) 两个版本：
* 埋点 SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点 SDK 具备 埋点 SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

无埋点 SDK（包括埋点 SDK）代码托管在 [Github](https://github.com/growingio/growingio-sdk-ios-autotracker)

欢迎 star，fork 一波。
:::info
**开发环境:** <br/>
Xcode 9.0 及以上  
iOS 8.0 及以上

**根据需要选择集成** [<font color='red'>无埋点SDK</font>](/docs/3.x/ios/Introduce#无埋点-sdk-集成)  或 [<font color='red'>埋点SDK</font>](/docs/3.x/ios/Introduce#埋点-sdk-集成)
:::


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

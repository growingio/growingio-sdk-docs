---
slug: /ios
title: "Apple SDK"
---

Apple SDK 提供了无埋点 SDK 和埋点 SDK 两个版本：
* 埋点 SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点 SDK 具备 埋点 SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

:::info
开发环境：
Xcode 14.3 及以上

确保您的项目的目标平台不得低于以下版本：
* iOS 10
* macOS 10.12
* watchOS 7.0
* tvOS 12.0
* visionOS 1.0
:::

:::tip 开源信息
Apple SDK 代码已在 [Github](https://github.com/growingio/growingio-sdk-ios-autotracker) 上开源，可以详细查看代码实现细节，欢迎 star, fork。
:::


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

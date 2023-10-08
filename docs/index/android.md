---
slug: /android
title: "Android SDK"
---

Android SDK 提供了 [无埋点SDK](/docs/android/Introduce#集成无埋点sdk) 和 [埋点SDK](/docs/android/Introduce#集成埋点sdk) 两个版本：
* 埋点SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

:::tip 开源信息
无埋点SDK（包括埋点 SDK）代码已在 [Github](https://github.com/growingio/growingio-sdk-android-autotracker) 上开源，可以详细查看代码实现细节，欢迎 star, fork。 <br/>
同时其 [SDK DEMO](https://github.com/growingio/growingio-sdk-android-demo) 也已正式发布, 该 Demo 介绍了大部分SDK中所具有的功能和使用方法，欢迎体验使用。
:::


:::info
**Gradle插件版本**： 3.2.1及以上  
**Android系统版本**：Android 4.2及以上<br/>
**根据需要选择集成**  [<font color='red'>无埋点SDK</font>](/docs/android/Introduce#集成无埋点sdk)  或  [<font color='red'>埋点SDK</font>](/docs/android/Introduce#集成埋点sdk)
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

---
slug: /android
title: "Android SDK"
---

Android SDK 提供了 [无埋点SDK](/docs/android/Introduce#集成无埋点sdk) 和 [埋点SDK](/docs/android/Introduce#集成埋点sdk) 两个版本：
* 埋点SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

:::tip 开源信息
无埋点SDK（包括埋点 SDK）代码已在 [Github](https://github.com/growingio/growingio-sdk-android-autotracker) 上开源，可以详细查看代码实现细节，欢迎 star, fork。
:::

:::info
**Gradle插件版本**： 3.2.1及以上  
**Android系统版本**：Android 4.2及以上<br/>
**根据需要选择集成**  [<font color='red'>无埋点SDK</font>](/docs/android/Introduce#集成无埋点sdk)  或  [<font color='red'>埋点SDK</font>](/docs/android/Introduce#集成埋点sdk)
:::

### SDK DEMO
从 4.0 版本开始，[Android SDK Demo](https://github.com/growingio/growingio-sdk-android-demo) 将同步更新。该App是为了让开发者能够简单快速上手GrowingIO SDK而参考使用的Demo，里面基本覆盖了SDK中所有的功能介绍，欢迎体验使用。

<div align="center">
    <img src="https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/feature.jpg" width="24.5%" alt="feature" />  
    <img src="https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/ui.jpg" width="24.5%" alt="ui" />  
    <img src="https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/logcat.jpg" width="24.5%" alt="feature" />  
    <img src="https://raw.githubusercontent.com/growingio/growingio-sdk-android-demo/master/images/detail.jpg" width="24.5%" alt="feature" />  

</div> 

<br/>
<br/>
<br/>

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

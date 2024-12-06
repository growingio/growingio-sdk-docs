---
slug: /android
title: "Android SDK"
---

GrowingIO Autotracker Android SDK 可以通过 [如何集成教程](/docs/android/Introduce) 来集成SDK，SDK同时具备埋点和无埋点功能：
* 埋点功能：只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点功能：具备自动采集基本用户行为事件，如页面访问，点击事件等。

:::tip SDK下载信息
类型：统计类 <br/>
开发者：北京易数科技有限公司 <br/>
无埋点包名：com.growingio.android.sdk.autotrack <br/>
最新版本：4.3.2 <br/>
更新时间：2024-10-29 <br/>
下载地址：[Maven官方仓库](https://repo1.maven.org/maven2/com/growingio/android/) <br/>
个人信息处理规则：[隐私协议](https://accounts.growingio.com/user-privacy) <br/>
使用说明：[SDK集成文档](/docs/android/Introduce) <br/>
合规说明：[SDK合规说明](/knowledge/compliance/androidCompliance) <br/>
:::

:::tip 开源信息
GrowingIO Autotracker Android SDK 代码已在 [Github](https://github.com/growingio/growingio-sdk-android-autotracker) 上开源，可以详细查看代码实现细节，欢迎 star, fork。
:::

:::info
**Gradle插件版本**： 3.2.1及以上  
**Android系统版本**：Android 4.2及以上<br/>
**根据需要选择开启功能**：  _[全部功能](/docs/android/Introduce)_  或  _[只需要埋点功能](/docs/android/Introduce#只开启埋点功能)_
:::

### SDK DEMO
从 4.0 版本开始，[Android SDK Demo](https://github.com/growingio/growingio-sdk-android-demo) 将同步更新。该App是为了让开发者能够简单快速上手GrowingIO SDK而参考使用的Demo，里面基本覆盖了SDK中常用的功能介绍，欢迎体验使用。

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

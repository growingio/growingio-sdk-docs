---
sidebar_position: 10
title: 数据转发模块
---

为了方便给已经集成了其他第三方厂商数据采集SDK的客户快速转入我们的采集SDK，我们提供了针对各个第三方的数据转发服务来作为一个过度的方案。

目前已支持 Google Analytics 3 和 Firebase Analytics 两家数据转发，后续会继续支持。

采集 SDK 版本 >=3.4.1 且只适用于无埋点SDK

:::caution
适用于应用中已经集成 GA 或者 FA 分析SDK的项目；
需要添加 analytics-ga 或 analytics-fa 模块依赖。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| adapter  | 只适用于无埋点SDK<br />需要手动集成 | 无 | 无 | >=3.4.1 |

### 依赖方式
<Tabs
  groupId="code-language"
  defaultValue="common"
  values={[
    {label: '依赖', value: 'common'},
    {label: 'BoM', value: 'bom'},
  ]
}>

<TabItem value="common">

```groovy
dependencies {
  // 支持 Firebase Analytics
  implementation 'com.growingio.android:analytics-fa:3.4.1'

  // 支持 Google Analytics 3
  implementation 'com.growingio.android:analytics-ga:3.4.1'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.6')

  implementation 'com.growingio.android:analytics-fa'
  implementation 'com.growingio.android:analytics-ga'
}
```

</TabItem>
</Tabs>

:::caution
数据转发模块不会随着SDK版本升级，只有固定的版本号 ==3.4.1。
:::

### 使用方式

<Tabs groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点', value: 'autotrack'},
    {label: '埋点', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
// 初始化SDK时，将模块注册到SDK中 
GrowingAutotracker.startWithConfiguration(this,
        new CdpAutotrackConfiguration("accountId", "urlScheme")
        // ...
        .addPreloadComponent(new GoogleAnalyticsLibraryModule())) //Google Analytics 3
        // 或者
        .addPreloadComponent(new FirebaseAnalyticsLibraryModule())) //Firebase Analytics

);
```

</TabItem>
<TabItem value="track">

```java
// 初始化SDK时，将模块注册到SDK中 
GrowingTracker.startWithConfiguration(this,
        new CdpTrackConfiguration("accountId", "urlScheme")
        //...
        .addPreloadComponent(new GoogleAnalyticsLibraryModule())) //Google Analytics 3
        // 或者
        .addPreloadComponent(new FirebaseAnalyticsLibraryModule())) //Firebase Analytics
);
```

</TabItem>
</Tabs>

同时需要在无埋点插件配置里启用对应的转发服务

```groovy
growingAutotracker {
    analyticsAdapter {
        firebaseAnalytics true //Firebase Analytics
        googleAnalytics true //Google Analytics 3
    }
}


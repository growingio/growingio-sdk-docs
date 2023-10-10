---
sidebar_position: 10
title: Flutter 模块
---

[GrowingIO Flutter SDK Plugin](/docs/framework/flutter/) 需要通过 `MethodChannel` 来与原生SDK进行通信，所以原生需要集成该 Flutter 模块来接收来自Flutter的消息或者发送消息到Flutter中。

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| flutter  | 需要手动集成 | `EventFlutter` | `Void` | - |

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
	implementation 'com.growingio.android:flutter:3.5.1'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.5.1')

  implementation 'com.growingio.android:flutter'
}
```

</TabItem>
</Tabs>

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
GrowingAutotracker.startWithConfiguration(this,
                new AutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new FlutterLibraryGioModule()));
```

</TabItem>
<TabItem value="track">

```java
GrowingTracker.startWithConfiguration(this,
                new TrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new FlutterLibraryGioModule()));
```

</TabItem>
</Tabs>

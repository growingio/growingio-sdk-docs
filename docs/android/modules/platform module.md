---
sidebar_position: 12
title: 系统信息模块
---

GrowingIO SDK 默认系统为Android，通过系统信息模块可以进一步区分当前系统（目前仅支持Harmony）

:::info
客户可以使用自定义模块的方式扩展SDK的系统信息识别方式，作用于系统和系统版本。

可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20android%20sdk)
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| platform  | 需要手动集成 |`PlatformHelper` | `PlatformInfo` | - |

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
	implementation 'com.growingio.android:platform:4.0.0'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.0.0')

  implementation 'com.growingio.android:platform'
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
// 初始化无埋点SDK时, 调用方法注册系统信息模块
GrowingAutotracker.startWithConfiguration(this,
                new AutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new PlatformLibraryGioModule()));
```

</TabItem>
<TabItem value="track">

```java
// 初始化埋点SDK时, 调用方法注册系统信息模块
GrowingTracker.startWithConfiguration(this,
                new TrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new PlatformLibraryGioModule()));
```

</TabItem>
</Tabs>
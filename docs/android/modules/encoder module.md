---
sidebar_position: 3
title: 加密模块
---

GrowingIO SDK 加密模块默认使用 snappy 数据压缩和 xor 简单加密方式，作用于数据网络上传的阶段。

:::info
客户可以使用自定义模块的方式扩展SDK的加密方式（需要和服务端配合）。

可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20android%20sdk)
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| encoder  | 需要手动集成 |`EventEncoder` | `EventEncoder` | >=3.3.0 |

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
	implementation 'com.growingio.android:encoder:3.4.7'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.7')

  implementation 'com.growingio.android:encoder'
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
// 初始化无埋点SDK时, 调用方法注册加密模块
GrowingAutotracker.startWithConfiguration(this,
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new EncoderLibraryGioModule()));
```

</TabItem>
<TabItem value="track">

```java
// 初始化埋点SDK时, 调用方法注册加密模块
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new EncoderLibraryGioModule()));
```

</TabItem>
</Tabs>


### 示例
数据结果如下图所示：
![数据上传样式](/img/modules/growingio_encoder_module.jpg)

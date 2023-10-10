---
sidebar_position: 4
title: Json 模块
---

GrowingIO SDK 数据模块默认使用 [Google Protobuf](https://developers.google.cn/protocol-buffers) 格式保存和上传事件数据。如需要使用Json格式保存和上传事件数据，需要集成本模块。

:::caution
使用 Protobuf 格式保存和上传事件数据兼容 json 格式，但是迁移会导致APP本地数据库内未上传的事件数据丢失，后续产生的新数据则不受影响。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| json  | 手动集成 | `EventFormatData` | `EventByteArray` | - |

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
	implementation 'com.growingio.android:json:3.5.1'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.5.1')

  implementation 'com.growingio.android:json'
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
                .addPreloadComponent(new JsonLibraryModule()));
```

</TabItem>
<TabItem value="track">

```java
GrowingTracker.startWithConfiguration(this,
                new TrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new JsonLibraryModule()));
```

</TabItem>
</Tabs>
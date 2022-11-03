---
sidebar_position: 4
title: Protobuf 模块
---

GrowingIO SDK protobuf 数据模块使用 [Google Protobuf](https://developers.google.cn/protocol-buffers) 格式保存和上传事件数据。

:::caution
使用 Protobuf 格式保存和上传事件数据，集成即生效；与其他格式,如json 互不兼容，迁移将导致APP本地数据库内未上传的事件数据丢失，后续产生的新数据则不受影响。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| protobuf  | 需要手动集成 | `EventFormatData` | `EventByteArray` | >=3.3.3 |

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
	implementation 'com.growingio.android:protobuf:3.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.3')

  implementation 'com.growingio.android:protobuf'
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
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new ProtobufLibraryModule()));
```

</TabItem>
<TabItem value="track">

```java
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new ProtobufLibraryModule()));
```

</TabItem>
</Tabs>

### 示例
数据结果如下图所示：
![数据上传样式](/img/modules/growingio_protobuf_module.jpg)

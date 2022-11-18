---
sidebar_position: 8
title: 广告模块
---

广告模块包括激活事件和深度链接，激活事件是当用户应用第一次打开时有且仅发一次的事件，深度链接是提供客户通过活动网页等形式提供App渠道的跳转和下载。

:::caution
深度链接功能，将在SDK 3.4.4 版本上线。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| advert  | 需要手动集成 |`Activate` | `AdvertResult` | >=3.4.3 |

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
	implementation 'com.growingio.android:advert:3.4.4'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.4')

  implementation 'com.growingio.android:advert'
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
// 初始化无埋点SDK时, 调用方法注册广告模块
GrowingAutotracker.startWithConfiguration(this,
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule()));
```

</TabItem>
<TabItem value="track">

```java
// 初始化埋点SDK时, 调用方法注册广告模块
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule()));
```

</TabItem>
</Tabs>


### 示例

#### 发送激活事件
当应用安装后第一次打开将会发送激活事件。

```json
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "dataSourceId": "939c0b26233d3ed1",
    ║   "eventType": "ACTIVATE",
    ║   // ....
    ║   "sdkVersion": "3.4.3",
    ║   "attributes": {
    ║     "userAgent": "Dalvik/2.1.0 (Linux; U; Android 11; M2007J17C Build/RKQ1.200826.002)"
    ║   },
    ║   "oaid": "6052643e41307986",
    ║   "androidId": "14410697e822c2b0"
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```

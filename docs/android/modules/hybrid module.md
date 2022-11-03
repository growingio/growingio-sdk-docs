---
sidebar_position: 2
title: H5混合模块
---

应用内嵌H5页面如果也需要进行数据采集，H5页面需要集成 Web JS SDK

若需要 H5页面 Web JS SDK 采集的数据与APP 中 GIO SDK采集的用户等数据打通，请参考：<br/>
WebJS 3.3：[APP内嵌H5页面使用集成](/docs/webjs/3.3/integrate#app内嵌h5页面使用集成)<br/>
WebJS 3.8：[Hybrid内嵌页打通插件](/docs/webjs/3.8/plugins#hybrid内嵌页打通插件giohybridadapter)

如果集成的是[**无埋点SDK**](/docs/android/Introduce#集成无埋点sdk)， 不需要做设置，SDK 会自动注入桥接代码，实现数据打通。

如果集成的是[**埋点SDK**](/docs/android/Introduce#集成埋点sdk)，则项目需要添加 hybrid 模块依赖(和 SDK 依赖同级)

:::tip
hybrid 模块目前支持系统Webview，[X5WebView](https://x5.tencent.com/docs/webview.html)，[UCWebView](https://help.aliyun.com/document_detail/49762.html)
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| hybrid  | 埋点SDK中，手动集成<br />无埋点中自动注入 | 1. `HybridBridge` <br /> 2. `HybridDom` | 1. `Boolean` <br /> 2.`HybridJson` | >=3.3.0 |

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
	implementation 'com.growingio.android:hybrid:3.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.3')

  implementation 'com.growingio.android:hybrid'
}
```

</TabItem>
</Tabs>

### 使用方式
在埋点SDK中需要手动集成 Hybrid 模块才能实现与内嵌 H5 的数据互通。

**埋点SDK示例代码：**

```java
// 在初始化SDK时，可以提前注册hybrid模块
// hybrid模块需要依赖对应 hybrid模块包 hybrid
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new HybridLibraryGioModule()));
```

需要在 WebView 初始化之后调用桥接代码，实现访问用户数据打通:

**埋点SDK示例代码：**

```java
GrowingTracker.get().bridgeWebView(webview)
```

### 结果

**1. H5页面 Web JS SDK 采集的数据与APP 中 GIO SDK采集的用户等数据打通规则：**
- 两者 accountId 一致时，H5与APP打通，此时H5页面上采集的数据仅由 APP 中 GIO SDK 发送
- 两者 accountId 不一致时，H5页面上采集的数据同时由 Web JS SDK 和 APP 中 GIO SDK发送
满足打通设置时，H5 页面调用 setUserID，cleanUserID 会调用 APP 的 setLoginUserID，cleanUserID。

**2. 打通成功效果**

>
当触发了打通规则，实现打通设置后，h5内嵌页采集的数据经 APP 中 GIO SDK发送数据。以下字段变化如下：<br/>
deviceId: 使用原生App的deviceId<br/>
sessionId: 使用原生App的sessionId<br/>
gioId: 使用原生App的gioId <br/>
userId: 使用原生App的userId<br/>
userKey: 使用原生App的userKey<br/>
dataSourceId: 使用原生App的dataSourceId<br/>
platform: 使用原生App的platform<br/>
domain: 使用H5页面的域名<br/>

用户行为与采集数据描述：用户点击APP内嵌H5页面，由APP原生页面进入H5页面，H5页面集成的采集SDK会把采集的数据转发给APP集成的SDK，再进行上报；H5页面的行为数据中的以上用户信息字段会用APP SDK 采集的用户信息，实现H5页面用户与APP用户信息关联。

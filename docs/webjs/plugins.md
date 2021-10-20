---
title: 内置插件
sidebar_position: 5
---

GrowingIO Web SDK将各种功能以插件的形式接入，具有更高的扩展性。在内部提供了如埋点，无埋点，hybrid打通，hybrid圈选，小程序打通，web圈选等插件。

具体插件功能简介如下

## 1. 通用接口插件

插件名：common-plugin

提供了动态配置和部分功能接口，如下。

```typescript
setTrackerScheme(scheme: string): void;
setTrackHost(host: string): void;
enableDebug(debug: boolean): void;
setDataCollect(dataCollect: boolean): void;
setAutoTrack(enable: boolean): void;
getVisitorId(): string;
setUserId(userId: string): void;
clearUserId(): void;
```

## 2. 事件序号插件

插件名：sequence-plugin

监听时机：onLoad，onComposeAfter

提供了全局事件和分类事件编号的能力。直接在合成的事件上添加`globalSequenceId, eventSequenceId`两个字段。这两个字段一旦生成就会一直递增下去，除非主动清除对应的cookie值。

| 字段名             | 类型     | 说明                           |
| ------------------ | -------- | ------------------------------ |
| `globalSequenceId` | `number` | 代表所有类型事件上报总数的计数 |
| `eventSequenceId`  | `number` | 代表当前类型事件上报数的计数   |

## 3. 埋点插件

插件名：custom-track-plugin

提供了埋点功能接口，如下。

```typescript
track(eventId: string, variables: object[, item: object], callback: ValueFunction<Response>): void;
setUserAttributes(properties: Properties, callback: ValueFunction<Response>): void;
```

## 4. 无埋点插件

插件名：action-track-plugin

监听时机：onLoad

也可以通过配置autotrack配置控制是否采集。提供无埋点能力，发送的事件包括`VIEW_CLICK`, `VIEW_CHANGE`, `FORM_SUBMIT`。

## 5. spa页面支持插件

插件名：spa-page-track-plugin

监听时机：onStart

提供了在单页应用中监听路由变化发送page的能力。

## 6. Hybrid打通插件

插件名：hybrid-support-plugin

监听时机：onLoad

该插件提供H5页面 Web JS SDK 采集的数据与APP 中 GIO SDK采集的数据打通能力，打通规则如下：

* 当Web JS SDK 与APP GIO SDK集成使用的 projectId 一致时，H5页面上采集的数据仅由 APP 中 GIO SDK 发送；

* 当Web JS SDK 与APP GIO SDK集成使用的 projectId 不一致时，H5页面上采集的数据同时由 Web JS SDK 和 APP 中 GIO SDK发送；
  
:::info
发送数据中 projectId,  datasourceId, host 与 发送数据SDK 中的对应字段保持一致
:::

### APP 中 GIO SDK 打通设置
#### iOS APP
如果集成的是无埋点SDK， 不需要做设置，SDK 会自动注入桥接代码，实现数据打通；

如果集成的是埋点SDK，则需要通过一下设置实现数据打通：
在您的Podfile文件中添加
```c
pod 'GrowingAnalytics-cdp/Hybrid'
```
打开终端，切换到项目目录
执行 `pod install` 或 `pod update`
#### Android APP
如果集成的是无埋点SDK， 不需要做设置，SDK 会自动注入桥接代码，实现数据打通；

如果集成的是埋点SDK，则需要设置桥接代码，实现数据打通：
```java
GrowingTracker.get().bridgeWebView(webview)
```
## 7. 小程序内嵌页打通插件

插件名：embed-h5-plugin

监听时机：onLoad

该插件提供内嵌页 Web JS SDK 采集的数据与小程序 SDK 采集的数据打通能力。插件从url的search中获取来自小程序的gioInfo, 打通规则如下：

* 当满足“小程序 SDK 和内嵌页中Web JS SDK 的 projectId，appId 一致”条件时，可实现两边的数据打通，

* 当不满足“小程序 SDK 和内嵌页中Web JS SDK 的 projectId，appId 一致”条件时，无法实现两边数据打通

在打通后内嵌页中的setUserId将无效，只能使用从小程序继承来的登录用户ID。
:::info 注意
若小程序中改变了userId，但内嵌页并没有更新，则内嵌页的数据将无最新userId
:::
### 打通设置

#### 小程序端

针对在webview上的地址，需要补充`gioInfo`相关字段，具体方式可参考如下

```jsx
// page.js
const gio = gioGlobal.gio;
Page({
  data: {
    url: `https://www.growingio.com/?foo=1&${gio('getGioInfo')}`
  }
});

// page.wxml
<view>
  <web-view src="{{url}}"></web-view>
</view>
```

**`gio('getGioInfo')`返回一个如下形式的字符串：**

```json
giou=e83e8ea2-9604-4c55-882c-172925d0dc1f&gios=ea64c5a5-7163-4a1e-9887-3af9bd467c3b&giocs1=&giouserkey=&gioprojectid=pid11&gioappid=wx33&gioplatform=MinP&giodatasourceid=ds22
```
:::info 
以上数据是小程序中传到内嵌页的数据

giou 是访问用户ID
gios 是 sessionID 
giocs1 是登录用户ID
giouserkey 是用户KEY
gioprojectid 是 projectId
gioappid 是 小程序appid
gioplatform 是应用平台
giodatasourceid 是 datasourceId
:::
#### Web端

在集成时使用和小程序相同的projectId和appid即可，如小程序的projectId为pid11，appid为wx33

```js
gdp('init', 'pid11', 'ds22', 'wx33', {
    host: 'your apiServerHost',
    version: '1.0.0'
});
```

### 触发成功效果

当触发了打通规则后，h5内嵌页中发数时以下字段的变化如下：

```tex
deviceId: 使用小程序的deviceId
sessionId: 使用小程序的sessionId
gioId: 使用小程序的gioId （web版本：3.3.11，小程序版本：3.2.5）
userId: 使用小程序的userId
userKey: 使用小程序的userKey
dataSourceId: 使用小程序的dataSourceId
platform: 使用小程序的platform
domain: 使用小程序的appId
```

## 8. web圈选插件

插件名：web-circle-plugin

监听时机：onStart

提供了web注入web圈选脚本的能力。

## 9. hybrid圈选插件

插件名：hybrid-circle-plugin

监听时机：onStart

提供了在native app中直接获取hybrid页面可视区可圈选元素的能力。

## 10. 弹窗插件

插件名：marketing-plugin

监听时机：onLoad，onComposeAfter

向外暴露`plugin`接口，用于弹窗sdk的接入。具体详见[Web 弹窗 SDK 接入](https://docs.growingio.com/op/developer-manual/sdkintegrated/mp/js-sdk/web-tan-chuang-sdk)。


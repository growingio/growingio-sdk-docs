---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有小程序SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**            | **参数类型**  | **默认值** | **说明**                                             |
| --------------------- | ------------- | ---------- | ---------------------------------------------------- |
| `autotrack`           | `boolean`     | `true`     | 是否开启无埋点采集（需配合无埋点插件使用）           |
| `comAsPage`           | `boolean`     | `false`    | 是否将 Component 组件 当做 Page 处理                 |
| `compress`            | `boolean`     | `false`    | 是否数据加密                                         |
| `dataCollect`         | `boolean`     | `true`     | 是否开启数据采集                                     |
| `debug`               | `boolean`     | `false`    | 是否开启调试模式                                     |
| `enableEventStore`    | `boolean`     | `false`    | 是否开启事件存储(SDK 版本>= 3.3.2)                   |
| `enableIdMapping`     | `boolean`     | `false`    | 是否开启多用户身份上报(SDK 版本>= 3.3.0)             |
| `extraParams`         | `string[]`    | `-`        | 额外的打通参数(SDK 版本>= 3.3.3)             |
| `followShare`         | `boolean`     | `true`     | 是否跟踪分享数据                                     |
| `forceLogin`          | `boolean`     | `false`    | 是否开启强制登录模式                                 |
| `getLocation`         | `object`      | `-`        | 获取位置配置项                                       |
| `getLocation.autoGet` | `boolean`     | `false`    | 自动获取用户位置信息                                 |
| `getLocation.type`    | `wgs84/gcj02` | `wgs84`    | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系     |
| `host`                | `string`      | `-`        | 数据上报的服务端地址(无需携带协议头)**(必填)**       |
| `ignoreFields`        | `string[]`    | `-`        | 上报忽略字段                                         |
| `taro`                | `any`         | `-`        | 使用 Taro 开发时使用的实例                           |
| `version`             | `string`      | `-`        | 小程序应用版本(建议填写)                             |
| `vue`                 | `any`         | `-`        | 使用 uni-app/mpvue/WePY 开发时使用的实例             |

## 配置项详解

### autotrack

默认情况下，SDK开启无埋点采集。如果您不需要无埋点采集，可以通过指定 `autotrack: false` 进行关闭。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

### compress

默认情况下，SDK关闭数据加密，如果您认为不足够安全，可以通过指定 `compress: true` 打开数据加密。需配合加密插件使用。

**注意：开启加密后抓包工具无法抓取上报的明文数据，但debug模式开启时开发者工具中仍能看到未加密的上报数据。**

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

### debug

在开发时设置 debug: true，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

### enableEventStore

默认情况下，SDK关闭事件存储功能。此功能在小程序storage中存储SDK已上报的事件数据，用于运营SDK消费，**隔天清空**。<br/>
**如果您不使用运营SDK可忽略此配置；如果您使用运营SDK，必须开启此配置项，设置为 `true`。**

### extraParams

在H5页面与小程序的用户信息保持一致时，上报数据除默认字段以外可增加以下小程序SDK字段。使用时可通过调用[`getGioInfo`](./commonlyApi#7与h5打通用户数据getgioinfo)。
:::info**注意：需Web SDK >=3.3.3版本一起配合使用！Web SDK升级后无需做额外配置，自动适配上报。**
支持字段：<br/>
appChannel 是小程序的场景值<br/>
deviceBrand 是设备品牌<br/>
deviceModel 是设备型号<br/>
deviceType 是设备类型<br/>
networkState 是网络类型<br/>
platformVersion 是操作系统版本<br/>
language 是语言<br/>
screenHeight 是屏幕高度<br/>
screenWidth 是屏幕宽度
:::



### followShare

默认情况下，SDK开启跟踪分享数据功能，详细的进行转发分享的统计，来帮助您更好的分析。如您不需要此功能，可以通过指定 `followShare: false` 来关闭跟踪分享。

在分享回调方法中，添加 `contentType` 和 `contentId` 字段。例：
```js
onShareAppMessage: function() {
    return {
        title: '自定义转发标题',
        path: 'xxxxxx',
        contentType: '内容类型',
        contentId: '内容ID'
    }
}
```

### forceLogin

默认情况下，SDK通过自动生成的 uid 上报标识用户。如您需要根据 openId 标识用户，可以通过指定 `forceLogin: true` 来打开强制登录模式。
打开后SDK会暂停上报数据，待用户登录获取 openId，调用 `identify` 方法设置 访问用户id 为 openId 后继续数据采集，以此来关联用户。

```js
gdp('identify', openId);
```

:::caution 注意：
如果用户在打开您的微信小程后没有使用微信授权登录，但是小程序配置了forceLogin为true，会导致SDK不能采集数据，访问数据将大幅减少。如果您不能确定是否要设置这个参数，请先咨询我们。
:::

### getLocation

默认情况下，SDK不会自动在小程序启动时获取用户的地理位置信息。如您需要在小程序打开时获取用户地理位置信息，可以通过指定 `autoGet: true` 来打开此功能。同时您可能需要配置项目的`permission`字段：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)
```js
getLocation: {          //是否自动获取用户的地理位置信息, 并设置获取方式
   autoGet: true,       //默认不自动获取
   type: 'wgs84'        //支持 wgs84（标准坐标系） | gcj02（火星坐标系）, 默认wgs84
},
```
如果您默认没有打开此功能，当用户访问至某一功能需要位置信息时，可以手动调用获取地理位置接口，自动补发VISIT，采集位置信息，提升用户地域分布的分析准确性。
```js
gdp('getLocation');      // 获取用户的地理位置信息并上报
```
**注意：**<br/>
**1、如果您初始化开启getLocation配置，用户打开小程序即需要授权；手动调用getLocation方法时，需要用户授权。**<br/>
**2、如果您初始化开启getLocation配置或手动调用getLocation方法，都需要配置项目中的`permission`字段：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)**

### ignoreFields

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。
:::info
支持字段：<br/>
deviceBrand 是设备品牌<br/>
deviceModel 是设备型号<br/>
deviceType 是设备类型<br/>
networkState 是网络类型<br/>
screenHeight 是屏幕高度<br/>
screenWidth 是屏幕宽度
:::


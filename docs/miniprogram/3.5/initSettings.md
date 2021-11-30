---
sidebar_position: 3
title: 集成配置
---

## 配置一览表

下表中列出了所有小程序SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**            | **参数类型**  | **默认值** | **说明**                                                                |
| --------------------- | ------------- | ---------- | ------------------------------------------------------------------- |
| `autotrack`           | `boolean`     | `true`     | 是否开启无埋点采集（需配合无埋点插件使用）                                 |
| `comAsPage`           | `boolean`     | `false`    | 是否将 Component 组件 当做 Page 处理                                   |
| `dataCollect`         | `boolean`     | `true`     | 是否开启数据采集                                                       |
| `debug`               | `boolean`     | `false`    | 是否开启调试模式                                                       |
| `followShare`         | `boolean`     | `true`     | 是否跟踪分享数据                                                       |
| `forceLogin`          | `boolean`     | `false`    | 是否开启强制登录模式                                                   |
| `getLocation`         | `object`      | `-`        | 获取位置配置项                                                        |
| `getLocation.autoGet` | `boolean`     | `false`    | 自动获取用户位置信息                                                   |
| `getLocation.type`    | `wgs84/gcj02` | `wgs84`    | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系                          |
| `host`                | `string`      | `-`        | 数据上报的服务端地址(无需携带协议头)**(必填)**                            |
| `ignoreFields`        | `string[]`    | `-`        | 上报忽略字段                                                          |
| `mpvue`               | `any`         | `-`        | 使用 mpvue 开发时使用的实例**(>=3.5.0)**                               |
| `singleSend`          | `boolean`     | `false`    | 是否每次只发送一个事件**(>=3.5.0)**                                     |
| `taroVue`             | `any`         | `-`        | 使用 Taro3vue2 开发时使用的实例**(需配合 Taro 插件使用)(>=3.5.0)**        |
| `taro`                | `any`         | `-`        | 使用 Taro 开发时使用的实例**(需配合 Taro 插件使用)**                      |
| `uniVue`              | `any`         | `-`        | 使用 uni-app 开发时使用的实例**(需配合 uni-app 插件使用)(>=3.5.0)**       |
| `version`             | `string`      | `-`        | 小程序应用版本(建议填写)                                                |
| `wepy`                | `any`         | `-`        | 使用 WePY 开发时使用的实例**(需配合 wepy 插件使用)(>=3.5.0)**             |

## 配置项详解

### autotrack

默认情况下，SDK开启无埋点采集。如果您不需要无埋点采集，可以通过以下两种方式进行关闭：

**方式一：**使用 ***含*** 无埋点插件的SDK，指定 `autotrack: false` 进行关闭。<br/>
**方式二：**使用 ***不含*** 无埋点插件的SDK即可。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

### debug

在开发时设置 debug: true，打开开发者工具控制台，即可看到实时采集的数据。

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

**支持的字段：`deviceBrand` , `deviceModel` , `deviceType` , `networkState` , `screenHeight` , `screenWidth`**

### singleSend

默认情况下，SDK上报发送请求时，1秒内产生的数据会打包成数组批量发送给服务端。但是天猫小程序使用云函数转发仅支持对象格式，因次我们需要开启单发，每次发送一个事件数据(单个事件数据格式为对象)。

**此配置项需要服务端支持，如您不确定是否需要用到，请咨询我们。**

### 其他

**`mpvue` , `taroVue` , `taro` , `uniVue` , `wepy`**为小程序开发时使用的框架实例，请对号入座使用。

##### 解惑：为什么以前使用一个`vue`字段即可，现在需要拆分为多个？
##### 由于我们将不同的框架适配拆分为不同的独立插件，故而变量名不能共用一个。

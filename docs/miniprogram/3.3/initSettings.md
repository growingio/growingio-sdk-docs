---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有小程序SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**            | **参数类型**  | **默认值** | **说明**                                             |
| --------------------- | ------------- | ---------- | ---------------------------------------------------- |
| `autotrack`           | `boolean`     | `true`     | 是否开启无埋点采集           |
| `comAsPage`           | `boolean`     | `false`    | 是否将 Component 组件 当做 Page 处理                 |
| `compress`            | `boolean`     | `false`    | 是否数据加密                                         |
| `dataCollect`         | `boolean`     | `true`     | 是否开启数据采集                                     |
| `debug`               | `boolean`     | `false`    | 是否开启调试模式                                     |
| `enableEventStore`    | `boolean`     | `false`    | 是否开启事件存储;若使用有GIO运营SDK需设置为 true(SDK版本>=3.3.2)                   |
| `enableIdMapping`     | `boolean`     | `false`    | 是否开启多用户身份上报(>= 3.3.0)                     |
| `extraParams`         | `string[]`    | `-`        | 与H5数据打通时额外获取的字段(>= 3.3.0)             |
| `followShare`         | `boolean`     | `true`     | 是否跟踪分享数据                                     |
| `forceLogin`          | `boolean`     | `false`    | 是否开启强制登录模式；设置为true时需与接口identify一起使用                                 |
| `getLocation`         | `object`      | `-`        | 获取位置配置项(3.3.6版本中移除)                       |
| `getLocation.autoGet` | `boolean`     | `false`    | 自动获取用户位置信息(3.3.6版本中移除)                   |
| `getLocation.type`    | `wgs84/gcj02` | `wgs84`    | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系(3.3.6版本中移除) |
| `host`                | `string`      | `-`        | 数据上报的服务端地址(无需携带协议头)**(必填)**       |
| `ignoreFields`        | `string[]`    | `-`        | 上报忽略字段                                         |
| `taro`                | `any`         | `-`        | 使用 Taro 开发时使用的实例                           |
| `version`             | `string`      | `-`        | 小程序应用版本(建议填写)                             |
| `vue`                 | `any`         | `-`        | 使用 uni-app/mpvue/WePY 开发时使用的实例             |

## 配置项详解

### autotrack

默认情况下，SDK开启无埋点采集。如果您不需要无埋点采集，可以通过指定 `autotrack: false` 进行关闭。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

### comAsPage

有时您可能会使用 Component 来代替 Page 进行代码编写。此时你需要设置 `comAsPage: true` 来将 Component 当做 Page 处理发送 PAGE 事件。

**注意：一旦开启此配置，小程序中所有Component组件都会被视为一个页面，组件生命周期 attached 一旦触发即发送PAGE事件。**

### compress

默认情况下，SDK关闭数据加密，如果您认为不足够安全，可以通过指定 `compress: true` 打开数据加密。

**注意：开启加密后抓包工具无法抓取上报的明文数据，但debug模式开启时开发者工具中仍能看到未加密的上报数据。**

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

### debug

在开发时设置 debug: true，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

### enableEventStore

默认情况下，SDK关闭事件存储功能。此功能在小程序storage中存储SDK已上报的事件数据，用于运营SDK消费，**隔天清空**。<br/>
**如果您不使用运营SDK可忽略此配置；如果您使用运营SDK，必须开启此配置项，设置为 `true`。**

### enableIdMapping

默认情况下，SDK关闭多用户身份上报开关。开启多用户身份上报后，同一访问用户对应不同身份的登录用户ID会被识别为一个用户，需要在设置登录用户ID时设置userKey。[使用详情](/docs/miniprogram/3.3/commonlyApi#2%E3%80%81%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E7%94%A8%E6%88%B7idsetuserid)

### extraParams

在H5页面与小程序的用户信息保持一致时，上报数据除[默认字段](/docs/webjs/plugins#打通成功效果-1)以外，可增加以下小程序SDK字段。使用时可通过调用[`getGioInfo`](./commonlyApi#7与h5打通用户数据getgioinfo)。

```text
appChannel        小程序的场景值
deviceBrand       设备品牌
deviceModel       设备型号
deviceType        设备类型
networkState      网络类型
platformVersion   操作系统版本
language          语言
screenHeight      屏幕高度
screenWidth       屏幕宽度
```

参考示例：

```js
gio('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {
  version: '1.0.1',
  debug: true,
  extraParams: [
  'appChannel',
  'deviceBrand',
  'deviceModel',
  'deviceType',
  'networkState',
  'platformVersion',
  'language',
  'screenHeight',
  'screenWidth'
  ],
});
```

**注意：内嵌页集成的Web JS SDK 版本需>=3.3.3，Web JS SDK升级后无需做额外配置，自动适配上报。**

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

默认情况下，SDK会自动生成访问用户ID来标识访问用户。如您需要使用 openId 或 unionId 标识访问用户，可以通过指定 `forceLogin: true` 来打开强制登录模式。

强制登录模式适用于打开小程序就调用 `wx.login` ([参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)) 获取 openId 或 unionId 的小程序。 开启此模式并调用 `identity` 上报 openid 或 unionId，会将上报的 Id 作为访问用户ID，有助于访问用户数据关联性分析。

设置`forceLogin`为`true`后，SDK会暂停上报数据，待调用 `wx.login`后获取 openId 或 unionId，调用 `identify` 方法后开始数据上报。**调用 `identify` 会替换事件数据的 deviceId 为设定值（一般是小程序openId 或 unionId），包括调用`identify`之前触发的事件。**

```js
gdp('identify', openId);
```

:::caution 注意：
如果打开小程序后没有调用 `wx.login` 获取 openId 或 unionId，没有调用 `identify` 方法，但是小程序SDK配置了 `forceLogin` 为 `true`，会导致SDK不能上报数据，访问数据将大幅减少。如果您不能确定是否要设置这个参数，请先咨询我们技术支持。<br/>
如果小程序首页中使用的是内嵌H5页面，需要使用[内嵌H5用户数据打通](/docs/miniprogram/3.3/commonlyApi#与h5打通用户数据getgioinfo)功能。该场景下，需要在小程序冷启动时，使用开屏页(在小程序首页 page 前增加一个 page 开屏页)。
:::

### getLocation

默认情况下，SDK不会自动在小程序启动时获取用户的地理位置信息。如您需要在小程序打开时获取用户地理位置信息，可以通过指定 `autoGet: true` 来打开此功能。同时您需要配置项目的`permission`字段[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)和对应的权限申请[参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)。

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
**1、使用此功能必须保证您的小程序项目有对应的权限，如果您的小程序项目没有获取位置信息的权限导致上线审批被驳回，请使用3.3最新版不带`getLocation`相关内容的SDK`3.3.6`。**<br/>
**2、我们在`3.3.6`版本中移除了getLocation相关的逻辑，如果您需要此功能，请使用`3.3.5`版本(在版本记录中下载)。**<br/>
**3、如果您初始化开启getLocation配置，用户打开小程序即需要授权；手动调用getLocation方法时，需要用户授权。**

### ignoreFields

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。

```text
deviceBrand       设备品牌
deviceModel       设备型号
deviceType        设备类型
networkState      网络类型
screenHeight      屏幕高度
screenWidth       屏幕宽度
```

参考示例：

```js
gio('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {
  version: '1.0.1',
  debug: true,
  ignoreFields: [
  'deviceBrand',
  'deviceModel',
  'deviceType',
  'networkState',
  'screenHeight',
  'screenWidth'
  ],
});
```

---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有小程序SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**            | **参数类型**   | **默认值** | **说明**                                       |
|-----------------------|----------------|------------|----------------------------------------------|
| `autotrack`           | `boolean`      | `true`     | 是否开启无埋点采集，集成无埋点插件后默认开启无埋点采集|
| `cml`                 | `any`          | `-`        | 使用 Chameleon 开发时使用的实例，参考集成示例代码 |
| `comAsPage`           | `boolean`      | `false`    | 是否将 Component 组件 当做 Page 处理           |
| `compress`            | `boolean`      | `true`     | 是否数据加密，集成加密插件后默认开启加密          |
| `dataCollect`         | `boolean`      | `true`     | 是否开启数据采集                               |
| `debug`               | `boolean`      | `false`    | 是否开启调试模式                               |
| `enableIdMapping`     | `boolean`      | `false`    | 是否开启多用户身份上报                         |
| `extraParams`         | `string[]`     | `-`        | 与H5数据打通时额外获取的字段                   |
| `followShare`         | `boolean`      | `true`     | 是否跟踪分享数据                               |
| `forceLogin`          | `boolean`      | `false`    | 是否开启强制登录模式                           |
| `getLocation`         | `object`       | `-`        | 获取位置配置项(见下两项)                       |
| `getLocation.autoGet` | `boolean`      | `false`    | 自动获取用户位置信息                           |
| `getLocation.type`    | `wgs84/gcj02`  | `wgs84`    | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系   |
| `gtouchHost`          | `string`       | `-`        | 运营SDK获取图片资源请求地址                     |
| `host`                | `string`       | `-`        | 数据上报的服务端地址(无需携带协议头)**(必填)**    |
| `ignoreFields`        | `string[]`     | `-`        | 上报忽略字段                                   |
| `remax`               | `any`          | `-`        | 使用 Remax 开发时使用的实例，参考集成示例代码     |
| `scheme`              | `http / https` | `https`    | 网络协议                                       |
| `subpackage`          | `boolean`      | `false`    | 标记当前当前项目是否为分包                     |
| `taro`                | `any`          | `-`        | 使用 Taro 开发时使用的实例，参考集成示例代码     |
| `taroVue`             | `any`          | `-`        | 使用 Taro3vue2/3 开发时使用的实例，参考集成示例代码|
| `tbConfig`            | `object`       | `-`        | 淘宝小程序配置项                               |
| `uniVue`              | `any`          | `-`        | 使用 uni-app 开发时使用的实例，参考集成示例代码  |
| `version`             | `string`       | `-`        | 小程序发版版本号(建议填写)                    |
| `wepy`                | `any`          | `-`        | 使用 WePY 开发时使用的实例，参考集成示例代码      |

## 配置项详解

### autotrack

默认情况下，SDK不加载无埋点插件。当在 SDK 中加载了无埋点插件时会自动开启无埋点采集。如果您不需要无埋点采集，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 无埋点插件的SDK，初始化指定 `autotrack: false` 进行关闭。

**方式二：**移除无埋点插件即可。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.8/commonlyApi#1开启关闭无埋点数据采集autotrack)

### compress

默认情况下，SDK不加载加密插件。当在 SDK 中加载了加密插件时自动开启数据加密。如果您不需要数据加密，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 加密插件的SDK，初始化指定 `compress: false` 进行关闭。

**方式二：**移除加密插件即可。

**<font color="#FC5F3A">注意：</font>**<br/>
**1、开启加密后抓包工具无法抓取上报的明文数据，但debug模式开启时开发者工具中仍能看到未加密的上报数据。**<br/>
**2、淘宝小程序由于需要云函数明文校验请求字段，所以在淘宝小程序中，数据加密会自动关闭，不论您是否开启配置项或加载了加密插件。**

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.8/commonlyApi#2开启关闭数据采集datacollect)

### debug

在开发时设置 `debug: true`，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.8/commonlyApi#3开启关闭调试模式debug)

### enableIdMapping

默认情况下，SDK关闭多用户身份上报。开启多用户身份上报后，同一访问用户对应不同身份的登录用户ID会被识别为一个用户，需要在设置登录用户ID时设置userKey。[参考文档](/docs/miniprogram/3.8/commonlyApi#2设置登录用户idsetuserid)

### extraParams

当调用[`getGioInfo`](./commonlyApi#7与h5打通用户数据getgioinfo)时，除了默认字段以外，可增加以下小程序SDK字段。

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

#### 示例

```js
gdp('init', '91eaf9b283361032', 'ae45f95742195faa', 'wx123456', {
  version: '1.0.1',
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

**<font color="#FC5F3A">注意：</font>**<br/>
**内嵌页集成的Web JS SDK 版本需>=3.3.3，Web JS SDK升级后无需做额外配置，自动适配上报。**

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
适用于打开小程序就调用 `wx.login` 获取 openId 或 unionId 的小程序<br/>
如果打开小程序后没有调用 `wx.login` 获取 openId 或 unionId，没有调用 `identify` 方法，但是小程序SDK配置了 `forceLogin` 为 `true`，会导致SDK不能上报数据，访问数据将大幅减少。如果您不能确定是否要设置这个参数，请先咨询我们技术支持。
:::

### getLocation

默认情况下，SDK不会自动在小程序启动时获取用户的地理位置信息。如您需要在小程序打开时获取用户地理位置信息，可以通过指定 `autoGet: true` 来打开此功能。同时您可能需要配置项目的`permission`字段：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)

```js
getLocation: {          //是否自动获取用户的地理位置信息, 并设置获取方式
   autoGet: true,       //默认为false不自动获取
   type: 'wgs84'        //支持 wgs84（标准坐标系） | gcj02（火星坐标系）, 默认wgs84
},
```

如果您默认没有打开此功能，当用户访问至某一功能需要位置信息时，可以手动调用获取地理位置接口 [参考文档](/docs/miniprogram/3.8/commonlyApi#6地理位置getlocation)。

**<font color="#FC5F3A">注意：</font>**<br/>
**如果您初始化开启getLocation配置，用户打开小程序即需要授权。**

### ignoreFields

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。支持字段如下：

```text
deviceBrand       设备品牌
deviceModel       设备型号
deviceType        设备类型
networkState      网络类型
screenHeight      屏幕高度
screenWidth       屏幕宽度
```

#### 示例

```js
gdp('init', '91eaf9b283361032', 'ae45f95742195faa', 'wx123456', {
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

**<font color="#FC5F3A">注意：</font>**<br/>
**如果extraParams和ignoreFields中同时指定了同一字段，getGioInfo将不再获取到指定的字段，即ignoreFields优先级更高。**

### scheme

默认情况下，网络协议为`https`，但考虑到在开发小程序的过程中可能需要使用`http`协议的测试服务，因此我们提供了临时修改网络协议的配置。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.8/commonlyApi#5修改请求协议scheme)

**<font color="#FC5F3A">注意：</font>**<br/>
**上线时请注意移除此配置项，因为小程序官方是强制使用https协议进行通信的。**

### subpackage

当且仅当您开发小程序时使用独立开发的分包（即主包与分包不在同一项目中时），需要在主包项目中与分包项目中分别集成SDK，并在**分包项目**中初始化时开启此项，可以使得主包与分包打通用户和页面数据，合并为一个SDK运行逻辑。

开启此项后分包独立运行时可能会不发送PAGE事件，属于正常现象。放入主包后会正常发送PAGE事件，建议在主包中调试校验Gio事件是否正确。

**<font color="#FC5F3A">注意：</font>**<br/>
**使用此功能需主包分包同时注册分包集成插件。[参考文档](/docs/miniprogram/3.8/plugins#多项目打通插件giomultiintegrate)**

### tbConfig

淘宝小程序必填项。您需要指定为云函数单发或者为云应用配置服务信息。其中云函数配置与云应用配置方式字段互斥，只能选择其中一种方式进行配置，配置字段均为**必填**，请求类型均为POST。

两种方式的区别为：云函数直接发送数据至Gio平台，但域名及所有字段需要申请淘宝白名单；云应用为发送至客户服务端，然后再转发至Gio平台。

云应用调用时，SDK给指定云服务接口地址发送上报数据外，还会在params中额外带上`host`, `accountId`, `stm`字段用于服务端拼接Gio转发地址。

**云函数配置方式：**

```js
tbConfig: {
  cloudFuncSend: true,             // 是否使用云函数进行数据单发，默认为 false
  cloudFuncName: 'httpTunnel'      // 调用的云函数名称，默认为 httpTunnel
  cloudFuncHandler: 'main'         // 指定云函数的handler，默认为 main
}
```

**云应用配置方式：**

```js
tbConfig: {
  cloudAppId: 'xxxxxx',                 // 云应用Id，无默认值
  path: 'your cloudApp interface path', // 云应用数据接口，无默认值
}
```

### 其他

**`cml` , `taroVue` , `taro` , `uniVue` , `wepy` , `remax`**为小程序开发时使用的框架实例，请参考集成使用。

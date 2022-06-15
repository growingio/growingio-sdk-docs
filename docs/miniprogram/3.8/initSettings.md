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
| `uploadInterval`      | `number`       | `1000`     | SDK上报数据的节流间隔时间(单位：ms)                           |
| `version`             | `string`       | `-`        | 小程序发版版本号(建议填写)                    |
| `wepy`                | `any`          | `-`        | 使用 WePY 开发时使用的实例，参考集成示例代码      |

## 配置项详解

### autotrack

默认情况下，SDK不加载无埋点插件。当在 SDK 中加载了无埋点插件时会自动开启无埋点采集。如果您不需要无埋点采集，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 无埋点插件的SDK，初始化设置 `autotrack: false` 进行关闭。

**方式二：**移除无埋点插件即可。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.8/commonlyApi#1开启关闭无埋点数据采集autotrack)

### comAsPage

有时您可能会使用 Component 来代替 Page 进行代码编写。此时你需要设置 `comAsPage: true` 来将 Component 当做 Page 处理发送 PAGE 事件。

**<font color="#FC5F3A">注意：</font>**<br/>
**一旦开启此配置，小程序中所有Component组件都会被视为一个页面，组件生命周期 attached 一旦触发即发送PAGE事件。**

### compress

默认情况下，SDK不加载加密插件。当在 SDK 中加载了加密插件时自动开启数据加密。如果您不需要数据加密，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 加密插件的SDK，初始化设置 `compress: false` 进行关闭。

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
language          语言
networkState      网络类型
operatingSystem   系统类型
platformVersion   操作系统版本
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
    'language',
    'networkState',
    'operatingSystem',
    'platformVersion',
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
如果打开小程序后没有调用 `wx.login` 获取 openId 或 unionId，没有调用 `identify` 方法，但是小程序SDK配置了 `forceLogin` 为 `true`，会导致SDK不能上报数据，访问数据将大幅减少。如果您不能确定是否要设置这个参数，请先咨询我们技术支持。<br/>
如果小程序首页中使用的是内嵌H5页面，需要使用[内嵌H5用户数据打通](/docs/miniprogram/3.8/commonlyApi#8与h5打通用户数据getgioinfo)功能。该场景下，需要在小程序冷启动时，使用开屏页(在小程序首页 page 前增加一个 page 开屏页)。
:::

### ignoreFields

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。支持字段如下：

```text
deviceBrand       设备品牌
deviceModel       设备型号
networkState      网络类型
operatingSystem   系统类型
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
    'operatingSystem',
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

当且仅当您开发小程序时使用独立开发的分包 **（即主包与分包不在同一项目中且不同框架时）**，需要在主包项目中与分包项目中分别集成SDK，并在**分包项目**中初始化时开启此项，可以使得主包与分包打通用户和页面数据，合并为一个SDK运行逻辑。

开启此项后分包独立运行时可能会不发送PAGE和无埋点事件（但埋点事件会发送），属于正常现象。放入主包后会正常发送PAGE事件，建议在主包中调试校验Gio事件是否正确。

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

### uploadInterval

为了SDK采集数据尽可能地减小对小程序的性能影响，我们为数据上报设置了1秒的节流限制以减少SDK并发上报的请求数量。在埋点量大或触发时机频繁时尤其适用。但这也有可能会在用户过快地结束小程序访问时丢失最后行为数据的极端情况。所以提供了`uploadInterval`配置项允许您自行评估影响并合理地设置。

**单位：ms；允许设值范围 0 ~ 2000；默认1000（即1秒）。**

**影响参考：**

数值越小，节流限制越小，发送时间越接近事件产生时间；设为 0 则产生事件立即上报。虽然行为数据上报及时，但是发起请求的次数会明显增多，大量埋点产生时可能会挤占一部分请求资源，从而导致业务接口的请求被短暂阻塞，进而影响页面数据加载。

相反，数值越大，节流限制越大，发送时间越远离事件产生时间；设为 2000 则产生事件后会推入请求队列进行计时，直至下一次事件产生的间隔超过2秒或者2秒内没有事件产生才上报数据（请求队列中存储的事件数达到50条时会强制发送一次）。虽然请求次数会变少，但是一旦用户操作过快杀掉了小程序进程或者退出了小程序，最后的行为数据可能就被丢失无法上报。

我们推荐使用 1秒（即默认值）的间隔限制，最大程度上减少性能影响同时兼顾数据上报准确性。

**<font color="#FC5F3A">注意：</font>**
**SDK版本>=3.8.0-rc.10支持**

### 其他

**`cml` , `taroVue` , `taro` , `uniVue` , `wepy` , `remax`**为小程序开发时使用的框架实例，请参考集成使用。

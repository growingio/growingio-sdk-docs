---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有小程序SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**            | **参数类型**  | **默认值** | **说明**                                                             |
|-----------------------|---------------|------------|--------------------------------------------------------------------|
| `autotrack`           | `boolean`     | `true`     | 是否开启无埋点采集（需配合无埋点插件使用）                             |
| `cml`                 | `any`         | `-`        | 使用 Chameleon 开发时使用的实例**(需配合 Chameleon 插件使用)**                         |
| `comAsPage`           | `boolean`     | `false`    | 是否将 Component 组件 当做 Page 处理                                 |
| `compress`            | `boolean`     | `false`    | 是否数据加密(淘宝小程序不支持)                                        |
| `dataCollect`         | `boolean`     | `true`     | 是否开启数据采集                                                     |
| `debug`               | `boolean`     | `false`    | 是否开启调试模式                                                     |
| `enableIdMapping`     | `boolean`     | `false`    | 是否开启多用户身份上报**(>= 3.3.0)**                                     |
| `extraParams`         | `string[]`    | `-`        | 与H5数据打通时额外获取的字段**(>= 3.3.0)**                               |
| `followShare`         | `boolean`     | `true`     | 是否跟踪分享数据                                                     |
| `forceLogin`          | `boolean`     | `false`    | 是否开启强制登录模式                                                 |
| `getLocation`         | `object`      | `-`        | 获取位置配置项(见下两项)                                              |
| `getLocation.autoGet` | `boolean`     | `false`    | 自动获取用户位置信息                                                 |
| `getLocation.type`    | `wgs84/gcj02` | `wgs84`    | 坐标系类型。wgs84：标准坐标系；gcj02：火星坐标系                         |
| `host`                | `string`      | `-`        | 数据上报的服务端地址(无需携带协议头)**(必填)**                       |
| `ignoreFields`        | `string[]`    | `-`        | 上报忽略字段                                                         |
| `remax`               | `any`         | `-`        | 使用 Remax 开发时使用的实例**(>=3.5.0)**                             |
| `scheme`              | `http / https`| `https`    | 网络协议                                                         |
| `subpackage`          | `boolean`     | `false`    | 标记当前当前初始化是否为分包初始化**(需配合 多项目打通 插件使用)(>=3.5.0)**   |
| `taro`                | `any`         | `-`        | 使用 Taro 开发时使用的实例**(需配合 Taro 插件使用)**                 |
| `taroVue`             | `any`         | `-`        | 使用 Taro3vue2/3 开发时使用的实例**(需配合 Taro 插件使用)(>=3.5.0)** |
| `tbConfig`            | `object`      | `-`        | 淘宝小程序配置项，详见说明**(需配合 淘宝小程序 插件使用)(>=3.5.0)**             |
| `uniVue`              | `any`         | `-`        | 使用 uni-app 开发时使用的实例**(需配合 uni-app 插件使用)(>=3.5.0)**  |
| `version`             | `string`      | `-`        | 小程序应用版本(建议填写)                                             |
| `wepy`                | `any`         | `-`        | 使用 WePY 开发时使用的实例**(需配合 wepy 插件使用)(>=3.5.0)**        |

## 配置项详解

### autotrack

默认情况下，SDK开启无埋点采集。如果您不需要无埋点采集，可以通过以下两种方式进行关闭：

**方式一：**使用 ***含*** 无埋点插件的SDK，指定 `autotrack: false` 进行关闭。<br/>
**方式二：**使用 ***不含*** 无埋点插件的SDK即可。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.5/commonlyApi#1开启关闭无埋点数据采集autotrack)

### compress

默认情况下，SDK关闭数据加密，如果您认为不足够安全，可以通过指定 `compress: true` 打开数据加密。需配合加密插件使用。

**<font color="#FC5F3A">注意：</font>**<br/>
**1、开启加密后抓包工具无法抓取上报的明文数据，但debug模式开启时开发者工具中仍能看到未加密的上报数据。**<br/>
**2、淘宝小程序由于需要云函数明文校验请求字段不能加密上报，所以在淘宝小程序时，`compress` 会自动失效。**

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.5/commonlyApi#2开启关闭数据采集datacollect)

### debug

在开发时设置 debug: true，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.5/commonlyApi#3开启关闭调试模式debug)

### enableIdMapping

默认情况下，SDK关闭多用户身份上报开关。开启多用户身份上报后，同一访问用户对应不同身份的登录用户ID会被识别为一个用户，需要在设置登录用户ID时设置userKey。[参考文档](/docs/miniprogram/3.5/commonlyApi#2设置登录用户idsetuserid)

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

参考示例：

```js
gdp('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {
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
   autoGet: true,       //默认为false不自动获取
   type: 'wgs84'        //支持 wgs84（标准坐标系） | gcj02（火星坐标系）, 默认wgs84
},
```

如果您默认没有打开此功能，当用户访问至某一功能需要位置信息时，可以手动调用获取地理位置接口，自动补发VISIT，采集位置信息，提升用户地域分布的分析准确性。

```js
gdp('getLocation');      // 获取用户的地理位置信息并上报
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1、如果您初始化开启getLocation配置，用户打开小程序即需要授权；手动调用getLocation方法时，需要用户授权。**<br/>
**2、如果您初始化开启getLocation配置或手动调用getLocation方法，都需要配置项目中的`permission`字段：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)**
**3、由于小程序API对getLocation的调用频率限制，部分事件能可能会丢失位置信息，属于正常情况。**

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

参考示例：

```js
gdp('init', '91eaf9b283361032','ae45f95742195faa','wx123456', {
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

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/miniprogram/3.5/commonlyApi#5修改请求协议scheme)

**<font color="#FC5F3A">注意：</font>**<br/>
**上线时请注意移除此配置项，因为小程序官方是强制使用https协议进行通信的。**

### subpackage

当且仅当您开发小程序时使用独立开发的分包（即主包与分包不在同一项目中时），需要在主包项目中与分包项目中分别集成SDK，并在**`分包`**项目中初始化时开启此项，可以使得主包与分包打通用户数据，合并为一个SDK运行逻辑。

**<font color="#FC5F3A">注意：</font>**<br/>
**使用此功能需主包分包同时注册分包集成插件。[参考文档](/docs/miniprogram/3.5/plugins#多项目打通插件giomultiintegrate)**

### tbConfig

淘宝小程序必填项。您需要指定为云函数单发或者为云应用配置服务信息。其中云函数配置与云应用配置方式字段互斥，只能选择其中一种方式进行配置，配置字段均为**必填**，请求类型均为POST。

两种方式的区别为：云函数直接发送数据至Gio平台，且域名及所有字段需要申请淘宝白名单；云应用为发送至客户聚石塔服务端，然后再转发至Gio平台。

云应用调用时，SDK给指定云服务接口地址发送上报数据外，还会在params中额外带上`host`, `projectId`, `stm`字段用于服务端拼接Gio转发地址。

**云函数配置方式：**

```js
tbConfig: {
  cloudFuncSend: true,             // 是否使用云函数进行数据单发，默认为 false
  cloudFuncName: 'httpTunnel'      // 调用的云函数名称，默认为 httpTunnel
  cloudFuncHandler: 'main'         // 指定云函数的handler默认为 main
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

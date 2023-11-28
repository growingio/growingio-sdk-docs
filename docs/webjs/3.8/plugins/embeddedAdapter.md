---
sidebar_position: 3
title: 小程序内嵌页打通
---
## 简介（gioEmbeddedAdapter）

当您的H5页面作为小程序内嵌页使用，且有需要打通用户信息，将H5访问视为小程序访问的一部分，合并采集数据至小程序项目分析时使用的插件。

### 打通逻辑(规则)

为方便描述，下文中来自小程序SDK`getGioInfo`获取的URL参数（参数详情[参考文档](/docs/miniprogram/3.8/commonlyApi#9与h5打通用户数据getgioinfo)）称 `小程序参数`；WebJS SDK初始化配置的参数 称 `H5参数`。

**H5参数的`appId`、`accountId`分别与小程序参数的值(小程序参数中称为`gioappid`、`gioprojectid`)对应一致，即视为打通数据。**

## 集成

全量集成SDK时无需再次集成此插件，已内置小程序内嵌页打通功能，直接进行第3步修改初始化代码即可。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEmbeddedAdapter.js"></script>
```

#### npm集成引入

```js
import gioEmbeddedAdapter from "gio-webjs-sdk-cdp/plugins/gioEmbeddedAdapter"
```

### 2、注册

```js
gdp('registerPlugins', [gioEmbeddedAdapter]);
gdp('init', xxxx);
```

### 3、修改初始化代码

在init方法中传入**主体小程序的 `accountId` 和 `appId` 字段**。

```js
gdp('init', 'your miniprogram accountId', 'your dataSourceId', 'your miniprogram appId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
```

## 打通影响

1、H5内嵌页中的 `setUserId、clearUserId` 方法调用将无效，只能使用从小程序继承来的登录用户ID。

2、H5内嵌页上报事件字段值的变化如下：

```text
deviceId     ->   小程序的 deviceId
sessionId    ->   小程序的 sessionId
gioId        ->   小程序的 gioId
userId       ->   小程序的 userId
userKey      ->   小程序的 userKey
dataSourceId ->   小程序的 dataSourceId
platform     ->   小程序的 platform
domain       ->   小程序的 appId
```

除了以上字段，如果小程序SDK初始化时设置了 `extraParams` [参考文档](3.8/initSettings#extraparams) ，其中的参数也会在H5内嵌页事件中进行上报。

## 注意

1、使用时确保相同 appId 的主体小程序在 `webview` 的 `src` 中已拼接 `getGioInfo` 的地址参数。[参考文档](/docs/miniprogram/3.8/commonlyApi#9与h5打通用户数据getgioinfo)

2、打通时小程序参数会携带小程序是否采集数据的状态。因此小程序的数据采集开关也能**一次性**地控制H5的数据上报。

3、数据打通后，WebJS SDK会自动无感知地删除地址参数中携带的Gio参数，如果您需要在H5页面中获取Gio参数，请在WebJS SDK初始化之前或从cookie中获取。

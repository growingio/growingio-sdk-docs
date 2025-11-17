---
sidebar_position: 2
title: 小程序内嵌页打通
---
## 简介（gioEmbeddedAdapter）

当您的H5页面作为小程序内嵌页使用，且有需要打通用户信息，将H5访问视为小程序访问的一部分，合并采集数据至小程序项目分析时使用的插件。

### 打通逻辑(规则)

为方便描述，下文中来自小程序SDK`getGioInfo`获取的URL参数（参数详情[参考文档](/docs/miniprogram/commonlyApi#12与h5打通用户数据getgioinfo)）称 `小程序参数`；WebJS SDK初始化配置的参数 称 `H5参数`。

**H5参数的`appId`、`accountId`分别与小程序参数的值(小程序参数中称为`gioappid`、`gioprojectid`)对应一致，即视为打通数据。**

## 集成

本插件为标品功能，全量集成SDK时（即使用gdp-full.js）时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioEmbeddedAdapter.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

#### npm集成引入

```js
import gioEmbeddedAdapter from "gio-webjs-sdk/plugins/gioEmbeddedAdapter"
```

### 2、注册

```js
gdp('registerPlugins', [gioEmbeddedAdapter]);
gdp('init', xxxx);
```

### 3、修改初始化代码

在init方法中传入**主体小程序的 `accountId` 和 `appId` 字段**。

```js
gdp('init', 'your miniprogram accountId', 'your dataSourceId', {
  appId: 'your miniprogram appId',
  serverUrl: 'your server url',
  version: 'your website version'
});
```

## 小程序圈选

如果您的小程序内嵌页在打通时需要与小程序一起圈选事件，则需要配置 `circleServerUrl` ，配置方法如下：

### 方式一：在注册插件时配置

```js
gdp('registerPlugins', [{ ...gioEmbeddedAdapter, options: { circleServerUrl: '' } }]);
gdp('init', xxxx);
```

### 方式二：在SDK初始化时配置

```js
gdp('init', 'your miniprogram accountId', 'your dataSourceId', {
  embeddedAdapter: {
    circleServerUrl: ''
  },
  ...其他配置项
});
```

**<font color="#FC5F3A">注意：</font>该配置项仅OP私有部署的客户需要填写，Saas客户请忽略。如果同时在注册插件时和在SDK初始化时配置时，优先使用SDK初始化配置。**

## 打通影响

1、H5内嵌页中的 `setUserId、clearUserId` 方法调用将无效，只能使用从小程序继承来的登录用户ID。

2、H5内嵌页上报事件字段值的变化如下：

```text
deviceId     ->   小程序的 deviceId
sessionId    ->   小程序的 sessionId
userId       ->   小程序的 userId
userKey      ->   小程序的 userKey
dataSourceId ->   小程序的 dataSourceId
platform     ->   小程序的 platform
domain       ->   小程序的 appId
```

除了以上字段，如果小程序SDK初始化时设置了 `extraParams` [参考文档](/docs/miniprogram/initSettings#extraparams) ，其中的参数也会在H5内嵌页事件中进行上报。

## 注意

1、使用时确保相同 appId 的主体小程序在 `webview` 的 `src` 中已拼接 `getGioInfo` 的地址参数。[参考文档](/docs/miniprogram/commonlyApi#12与h5打通用户数据getgioinfo)

2、打通时小程序参数会携带小程序是否采集数据的状态。因此小程序的数据采集开关也能 **一次性** 地控制H5的数据上报。

3、数据打通后，WebJS SDK会自动无感知地删除地址参数中携带的Gio参数，如果您需要在H5页面中获取Gio参数，请在WebJS SDK初始化之前或从cookie中获取。或者关闭自动重写参数配置项`rewriteQuery`允许参数保留在地址参数中。[参考文档](/docs/webjs/initSettings#rewritequery)

4、由于微信小程序中的webview与微信内浏览器共用存储，因此如果您的H5站点需要同时允许在小程序内嵌和微信浏览器中打开时，注意判断当前环境以决定是否注册本插件。在小程序中注册打通插件，在浏览器环境下不要注册插件。否则很可能因为共用存储导致浏览器环境下的数据被SDK误认为打通了小程序而出现数据错乱。[微信官方参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3-4)

5、需要作为小程序内嵌页进行新版的小程序圈选时，无需做额外处理，升级SDK和本插件至4.3.0及以上版本即可。

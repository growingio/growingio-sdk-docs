---
sidebar_position: 4
title: 小程序内嵌页打通
---
### 简介

当您的web页面作为小程序内嵌页使用且有需要打通用户信息，将采集信息合并至小程序项目分析时使用的插件。

集成该插件后，SDK会自动处理来自小程序SDK `getGioInfo`的参数。

### 集成

全量集成SDK时无需再次集成插件，直接进行第3步修改初始化代码即可。

#### 1、引入

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEmbeddedAdapter.js"></script>
```

npm集成引入：

```js
import gioEmbeddedAdapter from "gio-webjs-sdk-cdp/plugins/gioEmbeddedAdapter"
```

#### 2、注册

```js
gdp('registerPlugins', [gioEmbeddedAdapter]);
gdp('init', xxxx);
```

#### 3、修改初始化代码

在init方法中传入**主体小程序的 `accountId` 和 `appId` 字段**。

```js
gdp('init', 'your miniprogram accountId', 'your dataSourceId', 'your miniprogram appId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
```

### 注意

使用时确保相同 appId 的主体小程序在 `webview` 的 `src` 中已拼接 `getGioInfo` 的地址参数。[参考文档](/docs/miniprogram/3.8/commonlyApi#9与h5打通用户数据getgioinfo)

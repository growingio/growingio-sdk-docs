---
sidebar_position: 5
title: 插件
---

以下我们列出了所有WebJS SDK支持的插件，请按需加载使用。

一般只要您加载了插件功能会自动加载并启用，如果您不想使用其中的功能，移除对应插件即可。

所有的插件默认打包为 es5 ，因此您不用担心浏览器兼容问题。

### 数据加密压缩插件（gioCompress）

上报请求的数据进行加密压缩。

**<font color="#FC5F3A">注意：</font>**<br/>
默认情况下，加载该插件后自动开启加密压缩功能。初始化配置项 `compress` 依然有效并能控制该功能是否启用，请留意`compress`是否在开启状态。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioCompress.js"></script>
```

npm集成引入：

```js
import gioCompress from "gio-webjs-sdk-cdp/plugins/gioCompress.js"
```

### 无埋点插件（gioEventAutoTracking）

自动采集 `click`、`change`、`submit` 事件的插件。

**点击事件(click)：** 对应 `VIEW_CLICK` 事件。自动上报，当页面中有原生点击事件触发时上报。

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当页面中有原生变更事件触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当页面中有原生表单提交事件触发时上报。

**<font color="#FC5F3A">注意：</font>**<br/>
1）默认情况下，加载该插件后自动开启无埋点功能。初始化配置项 `autotrack` 依然有效并能控制该功能是否启用，请留意`autotrack`是否在开启状态。

2）一般情况下，此插件应与Web圈选辅助插件（GioWebCircle）同时集成使用。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEventAutoTracking.js"></script>
```

npm集成引入：

```js
import gioEventAutoTracking from "gio-webjs-sdk-cdp/plugins/gioEventAutoTracking.js"
```

### Web圈选辅助插件（gioWebCircle）

当您的web页面使用无埋点时，可以对页面节点进行无埋点圈选以获取分析数据。此时，您需要在SDK中集成此插件，以支持圈选工具的通信连接。

**<font color="#FC5F3A">注意：</font>**<br/>
1）此插件并非圈选工具，只是一个圈选工具和WebJS SDK通信的套件。如果您需要进行圈选，需要在SDK中集成此插件，并下载圈选工具进行配合使用。

2）一般情况下，此插件应与无埋点插件（gioEventAutoTracking）同时集成使用。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioWebCircle.js"></script>
```

npm集成引入：

```js
import gioWebCircle from "gio-webjs-sdk-cdp/plugins/gioWebCircle.js"
```

### 小程序内嵌页打通插件（gioEmbeddedAdapter）

当您的web页面作为小程序内嵌页使用且有需要打通用户信息，将采集信息合并至小程序项目分析时使用的插件。

集成该插件后，SDK会自动处理来自小程序SDK `getGioInfo`的参数。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEmbeddedAdapter.js"></script>
```

npm集成引入：

```js
import gioEmbeddedAdapter from "gio-webjs-sdk-cdp/plugins/gioEmbeddedAdapter.js"
```

### Hybrid内嵌页打通插件（gioHybridAdapter）

当您的web页面作为Hybrid内嵌页使用将采集信息合并至Native项目分析时使用的插件。

集成该插件后，SDK会自动将web页面采集的数据转发给Native端进行处理。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioHybridAdapter.js"></script>
```

npm集成引入：

```js
import gioHybridAdapter from "gio-webjs-sdk-cdp/plugins/gioHybridAdapter.js"
```

### Hybrid内嵌页圈选辅助插件（gioHybridCircle）

当您的web页面作为Hybrid内嵌页使用且有圈选需求时，自动处理圈选逻辑的插件。

集成该插件后，SDK会自动将web页面中的Dom结构转发给Native端进行处理。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioHybridCircle.js"></script>
```

npm集成引入：

```js
import gioHybridCircle from "gio-webjs-sdk-cdp/plugins/gioHybridCircle.js"
```

### 半自动埋点浏览插件（gioImpressionTracking）

支持半自动埋点浏览事件功能的插件，加载插件后自动开启。(IE11不支持)

使用方法请[参考文档](/docs/webjs/3.8/commonlyApi#半自动埋点浏览事件)。

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioImpressionTracking.js"></script>
```

npm集成引入：

```js
import gioImpressionTracking from "gio-webjs-sdk-cdp/plugins/gioImpressionTracking.js"
```

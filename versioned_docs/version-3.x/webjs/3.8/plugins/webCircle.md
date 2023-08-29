---
sidebar_position: 6
title: Web圈选辅助
---

## 简介（gioWebCircle）

当您的web页面使用无埋点时，可以对页面节点进行无埋点圈选以获取分析数据。此时，您需要在SDK中集成此插件，以支持圈选工具的通信连接。

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioWebCircle.js"></script>
```

#### npm集成引入

```js
import gioWebCircle from "gio-webjs-sdk-cdp/plugins/gioWebCircle"
```

### 2、注册

```js
gdp('registerPlugins', [gioWebCircle]);
gdp('init', xxxx);
```

## 注意

1、此插件并非圈选工具，只是一个圈选工具和WebJS SDK通信的套件。如果您需要进行圈选，需要在SDK中集成此插件，并下载圈选工具进行配合使用。

2、一般情况下，此插件应与无埋点插件（gioEventAutoTracking）同时集成使用。

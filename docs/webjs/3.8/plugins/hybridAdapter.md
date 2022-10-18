---
sidebar_position: 4
title: App内嵌页打通
---

## 简介（gioHybridAdapter）

当您的web页面作为App内嵌页使用，将采集信息合并至Native项目分析时使用的插件。

集成该插件后，SDK会自动将web页面采集的数据转发给Native端进行处理。

## 集成

全量集成SDK时无需再次集成插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioHybridAdapter.js"></script>
```

#### npm集成引入

```js
import gioHybridAdapter from "gio-webjs-sdk-cdp/plugins/gioHybridAdapter"
```

### 2、注册

```js
gdp('registerPlugins', [gioHybridAdapter]);
gdp('init', xxxx);
```

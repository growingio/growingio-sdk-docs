---
sidebar_position: 4
title: 无埋点
---

## 简介（gioEventAutoTracking）

自动采集 `click`、`change`事件的插件。

**点击事件(click)：** 对应 `VIEW_CLICK` 事件。自动上报，当页面中有点击事件触发时上报。

**表单变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当页面中有元素变更事件触发时上报。

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioEventAutoTracking.js"></script>
```

#### npm集成引入

```js
import gioEventAutoTracking from "gio-webjs-sdk/plugins/gioEventAutoTracking"
```

### 2、注册

```js
gdp('registerPlugins', [gioEventAutoTracking]);
gdp('init', xxxx);
```

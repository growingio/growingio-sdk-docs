---
sidebar_position: 1
title: 无埋点
---

## 简介（gioEventAutoTracking）

自动采集 `click`、`change`、`submit` 事件的插件。

**点击事件(click)：** 对应 `VIEW_CLICK` 事件。自动上报，当页面中有点击事件触发时上报。

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当页面中有变更事件触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当页面中有表单提交事件触发时上报。

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEventAutoTracking.js"></script>
```

#### npm集成引入

```js
import gioEventAutoTracking from "gio-webjs-sdk-cdp/plugins/gioEventAutoTracking"
```

### 2、注册

```js
gdp('registerPlugins', [gioEventAutoTracking]);
gdp('init', xxxx);
```

## 注意

1、初始化配置项 `autotrack` 依然有效并能控制该功能是否启用，请留意初始化配置项 `autotrack` 是否在开启状态。[参考文档](/docs/webjs/3.8/initSettings#autotrack)

2、一般情况下，此插件应与Web圈选辅助插件（GioWebCircle）同时集成使用。

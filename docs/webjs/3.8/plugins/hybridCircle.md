---
sidebar_position: 7
title: App内嵌页圈选辅助
---

### 简介

当您的web页面作为Hybrid内嵌页使用且有圈选需求时，自动处理圈选逻辑的插件。

集成该插件后，SDK会自动将web页面中的Dom结构转发给Native端进行处理。

### 集成

全量集成SDK时无需再次集成插件。

#### 1、引入

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioHybridCircle.js"></script>
```

npm集成引入：

```js
import gioHybridCircle from "gio-webjs-sdk-cdp/plugins/gioHybridCircle"
```

#### 2、注册

```js
gdp('registerPlugins', [gioHybridCircle]);
gdp('init', xxxx);
```

### 注意

此插件依赖Hybrid内嵌页打通插件，因此，您必须先集成Hybrid内嵌页打通插件。

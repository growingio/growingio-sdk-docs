---
sidebar_position: 3
title: App内嵌页打通
---

## 简介（gioHybridAdapter）

当您的web页面作为App内嵌页使用，将采集信息合并至Native项目分析时使用；且当有圈选需求时，自动处理圈选逻辑的插件。

集成该插件后，SDK会自动将web页面采集的数据转发给Native端进行处理。

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioHybridAdapter.js"></script>
```

#### npm集成引入

```js
import gioHybridAdapter from "gio-webjs-sdk/plugins/gioHybridAdapter"
```

### 2、注册

```js
gdp('registerPlugins', [gioHybridAdapter]);
gdp('init', xxxx);
```

### 3、修改初始化代码

在init方法中传入**主体移动端的 `accountId` 和 `packageName` 字段**。

```js
gdp('init', 'your app accountId', 'your dataSourceId', {
  packageName: 'your app packageName',
  serverUrl: 'your server url',
  version: 'your website version'
});
```

## 打通影响

1、web端调用 `setUserId`、`clearUserId` 将会直接影响移动端上报的数据。

2、web端不再发送事件，转而由移动端生成和发送事件。

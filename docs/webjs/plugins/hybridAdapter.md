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

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

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

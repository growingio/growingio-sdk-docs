---
sidebar_position: 4
title: 数据加密压缩
---
## 简介（gioCompress）

上报请求的数据进行加密压缩。

## 集成

本插件为标品功能，全量集成SDK时（即使用gdp-full.js）时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioCompress.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

#### npm集成引入

```js
import gioCompress from "gio-webjs-sdk/plugins/gioCompress"
```

### 2、注册

```js
gdp('registerPlugins', [gioCompress]);
gdp('init', xxxx);
```

## 注意

数据加密开启时，仅上报的请求中数据会压缩加密，`debug`模式下（指初始化开启debug）控制台中打印的日志仍然为明文。因此，上线时请注意关闭初始化配置项`debug`。

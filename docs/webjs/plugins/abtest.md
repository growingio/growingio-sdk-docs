---
sidebar_position: 6
title: A/B测试
---

## 简介（gioABTest）

用于A/B测试功能的插件。

## 集成

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioABTest.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

#### npm集成引入

```js
import gioABTest from "gio-webjs-sdk/plugins/gioABTest"
```

### 2、准备配置项

| **字段名**        | **参数类型** | **默认值** | **说明**                        |
| ----------------- | ------------ | ---------- | ------------------------------- |
| `abServerUrl`     | `string`     | `-`        | 必填，ABTest 分流服务的请求地址 |
| `requestInterval` | `number`     | `5`        | 选填，单位分钟，请求间隔        |
| `requestTimeout`  | `number`     | `1000`     | 选填，单位毫秒，请求超时时长    |

### 3、添加插件配置项并注册

```js
gdp('registerPlugins', [{ ...gioABTest, options: { abServerUrl: 'server url' }}]);
gdp('init', xxxx);
```

### 4、api调用

```js
gdp('getABTest', 实验层Id, (result: any) => {
  console.log(result);
});
```

<details>
  <summary>点击查看如何获取layerId(实验层ID)</summary>

  <ImageLoader path="img/common/get_abtesting_layer_id" />

</details>

## 注意

当您的web页面作为移动端内嵌页/小程序内嵌页且打通时，A/B测试插件会使用移动端/小程序的`dataSourceId`去获取数据。

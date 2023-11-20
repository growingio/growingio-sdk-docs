---
sidebar_position: 1
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

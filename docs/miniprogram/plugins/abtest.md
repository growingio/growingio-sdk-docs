---
sidebar_position: 5
title: A/B测试
---

## 简介（gioABTest）

用于A/B测试功能的插件。

## 集成

### 1、引入

#### 下载集成引入

- 下载插件并复制至项目中：
  **<font size="3"><https://assets.giocdn.com/sdk/minip/4.0.0/plugins/gioABTest.js></font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

```js
import gioABTest from './utils/plugins/gioABTest';
```

#### npm 集成引入

```js
import gioABTest from 'gio-miniprogram-sdk/plugins/gioABTest';
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
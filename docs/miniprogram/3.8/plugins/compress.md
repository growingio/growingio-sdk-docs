---
sidebar_position: 3
title: 数据加密压缩
---

## 简介（gioCompress）

上报请求的数据进行加密压缩。

## 集成

### 1、引入

#### 下载集成引入

- 下载插件并复制至项目中：
  **<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.15/plugins/gioCompress.js></font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioCompress from './utils/plugins/gioCompress';
```

#### npm 集成引入

```js
import gioCompress from 'gio-webjs-sdk-cdp/plugins/gioCompress';
```

### 2、注册

```js
gdp('registerPlugins', [gioCompress]);
gdp('init', xxxx);
```

## 注意

1、默认情况下，加载该插件后自动开启数据加密压缩功能。

2、初始化配置项 `compress` 依然有效并能控制该功能是否启用，请留意初始化配置项 `compress` 是否在开启状态。[参考文档](/docs/miniprogram/3.8/initSettings#compress)

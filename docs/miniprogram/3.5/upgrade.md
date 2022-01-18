---
sidebar_position: 6
title: 版本升级
---

## 从3.0升级到3.5

首先确认您使用的版本为3.0.0以上，如果您为2.x版本且有升级需要，请先联系您的项目经理。

### 初始化

1、下载最新版SDK并替换。

2、找到初始化代码，修改引用方式：
```js
const gdp = require('./utils/gio/sdk.js').default;
//          修改为 ↓↓↓
import gdp from "./utils/gio/sdk.js";

如果您想保留原有 require 的引用方式，请删除`default`，使用 `const gdp = require('./utils/gio/sdk.js');` 即可。
```
3、检查初始化方式，如果使用 `setConfig` 方法初始化，请[参考文档](/docs/miniprogram/3.5/integration/wx)修改；如果使用 `init` 方法则跳过。

4、检查配置项，移除`usePlugin`配置，如果没有则跳过。
```js
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    // usePlugin: true,  移除此配置
    ...other settings
});
```
5、如果您是支付宝小程序，请参考[集成支付宝小程序](/docs/miniprogram/3.5/integration/alipay)进行修改。

### 页面

1、检查onShow事件中是否存在 `gio('collectImp', this)；` 语句，存在则删除，不存在则跳过。

2、检查页面中是否存在 半自动曝光事件(可在代码中全局搜索`growing_collect_imp`)，存在则[参考文档](/docs/miniprogram/3.5/internally#半自动曝光事件)进行对比修改，不存在则跳过。

### 建议性修改

1、如果您使用了[动态配置接口](/docs/miniprogram/3.5/commonlyApi#动态配置接口)，建议按新版使用方式进行修改。

2、在<3.5.0的旧版本中，可能您的 **`gdp`** 是在 **小程序的全局变量`globalData`** 存储后取出。在3.5.0的版本开始，您可以直接从 **全局`global`或者是`$global`对象** 中取出，从而免去了繁杂的存取值流程。例：
```js
const { gio } = global;
Page({ ... });
```

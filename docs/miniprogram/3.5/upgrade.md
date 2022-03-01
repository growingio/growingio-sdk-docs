---
sidebar_position: 7
title: 3.0升级到3.5
---

本文讲介绍如何从3.0版本的SDK无缝升级到3.5版本。请确认您使用的版本为3.0.0以上，如果您为2.x版本且有升级需要，请先联系您的项目经理。

### 初始化

1、下载最新版对应框架的SDK并替换。下载地址[参考集成](/miniprogram/3.5/integration/wx)

2、找到初始化代码，修改引用方式。

```js
const gdp = require('./utils/gio/sdk.js').default;
//          修改为 ↓↓↓
import gdp from './utils/gio/sdk.js';

如果您想保留原有 require 的引用方式，请删除`default`，使用 `const gdp = require('./utils/gio/sdk.js');` 即可。
```

3、检查初始化方式，如果使用 `setConfig` 方法初始化，请[参考文档](/docs/miniprogram/3.5/integration/wx)修改；如果使用 `init` 方法进行初始化则跳过此步骤。

4、检查配置项，移除`usePlugin`、`enableEventStore`配置，如果没有则跳过此步骤。

5、检查配置项，如果您是`uni-app vue2`、`taro3 vue2`、`WePY`开发的小程序，请移除 **`vue`** 配置，并[参考文档](/docs/miniprogram/3.5/integration/wx)添加对应的实例参数。如果不是则跳过此步骤。

```js
// 例如您使用uni-app vue2开发，则按如下修改：

gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    // vue: Vue,  移除此配置
    uniVue: Vue, // 新增此配置
    ...other settings
});
```

### 页面

如果您是支付宝小程序或淘宝小程序，请恢复对`App({})`、`Page({})`和`Component({})`的原生写法。如果不是则跳过此步骤。

```js
$global.GioApp({ ... });
// 修改回原始写法 ↓↓↓
App({ ... });

$global.GioPage({ ... });
// 修改回原始写法 ↓↓↓
Page({ ... });

$global.GioComponent({ ... });
// 修改回原始写法 ↓↓↓
Component({ ... });
```

### 其他

如果您调用了`gioGlobal`中的内容，请尝试从`global（支付宝和淘宝小程序是 $global）`中重新获取，`gioGlobal`已经被弃用。

### 建议性修改

1、如果您使用了旧版[动态配置接口](/docs/miniprogram/3.5/commonlyApi#动态配置接口)的调用方式，建议按新版使用方式进行修改。

2、在3.0的旧版本中，可能您的 **`gdp`** 方法是需要您通过手动挂载在例如`globalData`、`vue`、`gioGlobal`此类全局对象后再取出。从3.5.0的版本开始，您可以直接在页面中从 **`global（支付宝和淘宝小程序是 $global）`**对象中取出，从而免去了繁杂的存取值流程。例：

```js
const { gdp } = global;
Page({ ... });
```

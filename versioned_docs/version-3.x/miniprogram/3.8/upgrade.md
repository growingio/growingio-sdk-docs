---
sidebar_position: 7
title: 3.3升级到3.8
---

本文讲介绍如何从 3.3 版本的 SDK 无缝升级到 3.8 版本。请确认您使用的版本为 3.3.0 以上，如果您为 2.x 版本且有升级需要，请先联系您的项目经理。

#### 在升级之前，请充分阅读 3.8 版本的文档内容后再进行升级操作

### 初始化

1、下载最新版对应框架的 SDK 并替换，请参考集成文档选择正确的开发方式下载。

2、找到初始化代码，修改引用方式。如果您想保留原有 require 的引用方式跳过本步骤即可。

```js
const gdp = require('./utils/gio/sdk.js').default;
//          修改为 ↓↓↓
import gdp from './utils/gio/sdk.js';
```

3、检查初始化方式，如果使用 `setConfig` 方法初始化，请参考集成文档重新集成；如果使用 `init` 方法进行初始化则跳过此步骤。

4、检查配置项，移除`usePlugin`、`enableEventStore`、`getLocation`（含 autoGet 和 type）、`comAsPage`配置，如果没有则跳过此步骤。

5、检查配置项，如果您是`uni-app vue2`、`taro3 vue2`、`WePY`开发的小程序，请移除 **`vue`** 配置，并参考集成文档添加对应的实例参数。如果不是则跳过此步骤。例：

```js
gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: 'miniProgram version',
    host: 'your serverHost',
    // vue: Vue,  移除此配置
    uniVue: Vue, // 新增此配置
    ...other settings
});
```

### 页面

1）如果您是阿里(支付宝)小程序或淘宝小程序，请恢复对`App({})`、`Page({})`和`Component({})`的原生写法。如果不是则跳过此步骤。

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

2）检查页面中是否调用`getLocation`方法，存在则[参考文档](/docs/miniprogram/3.8/commonlyApi#8地理位置setlocation)修改为`setLocation`。如果没有则跳过此步骤。

### 其他

1）如果您调用了`gioGlobal`中的内容，请尝试从`global（阿里(支付宝)小程序和淘宝小程序是 $global）`中重新获取，`gioGlobal`已经被弃用。

2）如果您在 3.3 版本就开启并使用了 无埋点 和 加密 功能，请在升级至 3.8 版本时，注册对应插件，请参考[插件扩展](/docs/miniprogram/3.8/integration/wechat#插件扩展)和[插件介绍](/docs/miniprogram/3.8/plugins)。

### 建议性修改

1、如果您使用了旧版[动态配置接口](/docs/miniprogram/3.8/commonlyApi#动态配置接口)的调用方式，建议按新版使用方式进行修改。

2、在<3.8 的旧版本中，可能您的 **`gdp`** 方法是需要您通过手动挂载在例如`globalData`、`vue`、`gioGlobal`此类全局对象后再取出。从 3.8 的版本开始，您可以直接在页面中从 **`global（阿里(支付宝)小程序和淘宝小程序是 $global）`**对象中取出，从而免去了繁杂的存取值流程。例：

```js
const { gdp } = global;
Page({ ... });
```

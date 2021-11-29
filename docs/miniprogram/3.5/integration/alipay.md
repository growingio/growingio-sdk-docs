---
sidebar_position: 2
title: 支付宝(天猫)小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本文档同时适用支付宝(天猫)小程序SDK和合集SDK。

变更记录：[查看Changelog](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)
## 准备工作
1、在平台中新建项目并获取**`projectId`和`dataSourceId`**。

2、在小程序中获取**`appId`**。

3、[点击下载SDK](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)，存放在项目中，下文中以`utils/gio`目录为例。

## 集成

对于支付宝(天猫)小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

<Tabs
  groupId="1"
  defaultValue="原生"
  values={[
    {label: 'Native原生', value: 'Native原生'},
    {label: 'uni-app(vue2)', value: 'uni-app(vue2)'},
    {label: 'Taro2', value: 'Taro2'},
    {label: 'Taro3(react)', value: 'Taro3(react)'},
    {label: 'Taro3(vue2)', value: 'Taro3(vue2)'},
  ]
}>
  <TabItem value="Native原生">

```js
// app.js
import gdp from "./utils/gio/sdk.js";

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    ...other settings
});

App({ ... });
```
  </TabItem>
  <TabItem value="uni-app(vue2)">

```js
// main.js
import Vue from 'vue';
import App from './App.vue';
import gdp from './utils/gio/sdk.js';

...your codes

App.mpType = 'app';

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    uniVue: Vue,
    ...other settings
});

const app = new Vue(App);
app.$mount();
```
  </TabItem>
  <TabItem value="Taro2">

```js
// app.jsx
import Taro, { Component } from '@tarojs/taro';
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    taro: Taro,
    ...other settings
});

class App extends Component { ... }
```
  </TabItem>
  <TabItem value="Taro3(react)">

```js
// app.js
import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    taro: Taro,
    ...other settings
});

class App extends Component { ... }
export default App;
```
  </TabItem>
  <TabItem value="Taro3(vue2)">

```js
// app.js
import Vue from 'vue';
import Taro from '@tarojs/taro';
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    taro: Taro, // 注意Taro3vue2中taro和taroVue都需要传
    taroVue: Vue, // 注意Taro3vue2中taro和taroVue都需要传
    ...other settings
});

const App = { ... };
export default App;

```
  </TabItem>
</Tabs>

***更多配置项请在[集成配置](/docs/miniprogram/3.5/initSettings)菜单中查看***

## 添加白名单

### 支付宝小程序

由于支付宝小程序对网络请求的限制[参考文档](https://opendocs.alipay.com/mini/008gq6)

您需要在「支付宝小程序管理中心-小程序详情-设置-开发设置-服务器域名白名单」中添加request合法域名，如下图：

![request合法域名](/img/miniprogram/alipay_white_list.png)

### 天猫小程序

由于天猫小程序使用云函数代理的形式进行网络请求，要求严格。因此需要具体域名和字段需要与我们沟通确认后由开发主体申请白名单 [参考文档](https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1)

***注意不要轻易随意尝试申请！请与我们充分沟通需求后实践。***

这里我们给出白名单申请完成后在代码中的简单实现：
```js
// server目录中
创建名为 `httpTunnel` 的云函数。
// index.js
exports.gioTrack = async (context) => {
  ...
  context.cloud.httpApi.invoke({ ... });
  ...
};
```

## 数据校验

### 支付宝(天猫)小程序
请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/wx_debug.png)

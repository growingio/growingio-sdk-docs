---
sidebar_position: 2
title: 支付宝小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

变更记录：[查看Changelog](/docs/miniprogram/version)

## 准备工作

1、在平台中新建项目并获取**`projectId`和`dataSourceId`**。

2、在小程序中获取**`appId`**。

3、[点击下载SDK]，存放在项目中，下文中以`utils/gio`目录为例。

## 集成

对于支付宝小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

如果您使用跨平台框架开发且有多端（特指小程序，快应用、App和Web除外）同时需要集成SDK的需求时，只需在框架代码中集成一次即可。例：

>使用uni-app同时开发微信小程序和支付宝小程序，只需集成一次即可。

<Tabs
  groupId="1"
  defaultValue="Native原生"
  values={[
    {label: 'Native原生', value: 'Native原生'},
    {label: 'uni-app', value: 'uni-app'},
    {label: 'Taro', value: 'Taro'},
    {label: 'Remax', value: 'Remax'},
  ]
}>
  <TabItem value="Native原生">

```js
// app.js
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    ...other settings
});

App({ ... });
```

  </TabItem>
  <TabItem value="uni-app">
  <Tabs
      groupId="2"
      defaultValue="uni-app(vue2)"
      values={[
        {label: 'uni-app(vue2)', value: 'uni-app(vue2)'},
        {label: 'uni-app(vue3)', value: 'uni-app(vue3)'},
      ]
    }>
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

// 注意vue2中app实例在初始化之后
const app = new Vue(App);
app.$mount();

```

  </TabItem>
  <TabItem value="uni-app(vue3)">

```js
// main.js
import App from './App.vue';
import { createApp } from 'vue';
import gdp from './utils/gio/sdk.js';

export function createApp() {
  // 注意vue3中app实例在初始化之前
  const app = createApp(App);
  ...your codes

  gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
      version: 'miniProgram version',
      host: 'api.growingio.com',
      uniVue: app,
      ...other settings
  });

  return { app };
}
```

  </TabItem>
  </Tabs>

  </TabItem>
  <TabItem value="Taro">
  <Tabs
    groupId="3"
    defaultValue="Taro2"
    values={[
      {label: 'Taro2', value: 'Taro2'},
      {label: 'Taro3(react)', value: 'Taro3(react)'},
      {label: 'Taro3(vue2)', value: 'Taro3(vue2)'},
      {label: 'Taro3(vue3)', value: 'Taro3(vue3)'},
    ]
  }>
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
Taro.render(<App />, document.getElementById('app'));
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
    taro: Taro, // 注意taro和taroVue都需要传
    taroVue: Vue, // 注意taro和taroVue都需要传
    ...other settings
});

// 注意vue2中App实例在初始化之后
const App = { ... };
export default App;
```

  </TabItem>
  <TabItem value="Taro3(vue3)">

```js
// app.js
import { createApp } from 'vue';
import Taro from '@tarojs/taro';
import gdp from './utils/gio/sdk.js';

...your codes

// 注意vue3中App实例在初始化之前
const App = createApp({ ... });

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    taro: Taro, // 注意taro和taroVue都需要传
    taroVue: App, // 注意taro和taroVue都需要传
    ...other settings
});

export default App;
```

  </TabItem>
  </Tabs>
  </TabItem>
  <TabItem value="Remax">

```js
// app.js
import * as remax from 'remax';
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    remax
    ...other settings
});

const App = (props) => props.children;

export default App;
```

  </TabItem>
</Tabs>

```js
如果您想保留原有 require 的引用方式，请删除`default`，使用 `const gdp = require('./utils/gio/sdk.js');` 即可。
```

***更多配置项请在[集成配置](/docs/miniprogram/3.5/initSettings)菜单中查看***

## 添加白名单

由于支付宝小程序对网络请求的限制[参考文档](https://opendocs.alipay.com/mini/008gq6)，您需要在「支付宝小程序管理中心-小程序详情-设置-开发设置-服务器域名白名单」中添加request合法域名。[支付宝小程序管理中心](https://open.alipay.com/mini/dev/list)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中调试器->控制台标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/alipay_debug.png)

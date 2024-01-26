---
sidebar_position: 8
title: 京东小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

对于京东小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

如果您使用跨平台框架开发且有多端（特指小程序，快应用、App 和 Web 除外）同时需要集成 SDK 的需求时，只需在框架代码中集成一次即可。例：

> 使用 uni-app 同时开发京东小程序和阿里(支付宝)小程序，只需集成一次即可。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的小程序中获取**`appId`**。

3、在下列选项中选择对应的开发方式，并下载对应的 SDK 文件存放在项目中或使用 npm 的方式集成。

## 集成SDK

<Tabs
groupId="1"
defaultValue="原生"
values={[
{label: '原生', value: '原生'},
{label: 'uni-app', value: 'uni-app'},
{label: 'Taro', value: 'Taro'},
{label: '小部件', value: '小部件'},
]
}>
<TabItem value="原生">

#### 1、加载 SDK

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

京东原生 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.0.1/gio-jingdong.js](https://assets.giocdn.com/sdk/minip/4.0.1/gio-jingdong.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

参考示例代码在 app.js 小程序主文件中引用SDK并在 App 实例之前调用`init`方法进行初始化。

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

##### 示例代码

```js
// app.js
import gdp from './utils/gio/gio-jingdong.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
    ...other settings
});

App({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-jingdong.js').default;
```

  </TabItem>
  <TabItem value="uni-app">

#### 1、加载 SDK

##### 方式一：下载本地集成

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

uniapp 框架 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.0.1/gio-uniapp.js](https://assets.giocdn.com/sdk/minip/4.0.1/gio-uniapp.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk --save
```

#### 2、使用`init`方法进行初始化

参考示例代码在 main.js 小程序主文件中引用SDK并调用`init`方法进行初始化。

**注意`init`方法所处位置（vue2 和 vue3 中分别与 app 实例的相对位置不同）**

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

##### 示例代码

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
// 下载集成方式
import gdp from './utils/gio/gio-uniapp.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-uniapp';

App.mpType = 'app';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
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
// 下载集成方式
import gdp from './utils/gio/gio-uniapp.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-uniapp';

export function createApp() {
  // 注意vue3中app实例在初始化之前
  const app = createApp(App);

  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
      version: 'your miniProgram version',
      // OP私有部署客户请填写serverUrl，Saas客户请忽略
      serverUrl: 'your server url'
      uniVue: app,
      ...other settings
  });

  return { app };
}
```

  </TabItem>
  </Tabs>

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-uniapp.js').default;
```

  </TabItem>

  <TabItem value="Taro">

#### 1、加载 SDK

##### 方式一：下载本地集成

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

Taro 框架 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.0.1/gio-taro.js](https://assets.giocdn.com/sdk/minip/4.0.1/gio-taro.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk --save
```

#### 2、使用`init`方法进行初始化

参考示例代码在 app.js 小程序主文件中引用SDK并调用`init`方法进行初始化。

**注意`init`方法所处位置（vue2 和 vue3 中分别与 app 实例的相对位置不同）。使用 vue 开发时`taro`和`taroVue`都要传。**

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

##### 示例代码

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
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-taro';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
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
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-taro';

const taroRuntime = require('@tarojs/runtime');
gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
    taro: taroRuntime,
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
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-taro';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
    // 注意taro和taroVue都需要传
    taro: Taro,
    taroVue: Vue,
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
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/gio-taro';

const taroRuntime = require('@tarojs/runtime');

// 注意vue3中App实例在初始化之前
const App = createApp({ ... });

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
    // 注意taro和taroVue都需要传
    taro: taroRuntime,
    taroVue: App,
    ...other settings
});

export default App;
```

  </TabItem>
  </Tabs>

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-taro.js').default;
```

  </TabItem>
  <TabItem value="小部件">

#### 1、加载 SDK

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

京东原生 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.0.1/gio-jingdong.js](https://assets.giocdn.com/sdk/minip/4.0.1/gio-jingdong.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

参考示例代码在 app.js 小部件主文件中引用SDK并在 App 实例之前调用`init`方法进行初始化。

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

##### 示例代码

```js
// app.js
import gdp from './utils/gio/gio-jingdong.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your widget version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url'
    // 开启插件模式
    pluginMode: true,
    ...other settings
});

Component({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-jingdong.js').default;
```

  </TabItem>
</Tabs>

**更多配置项请在[集成配置](/docs/miniprogram/initSettings)菜单中查看**

## SDK功能插件扩展

**集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。**

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/plugins)。

加载插件后会在初始化之前打印日志。例：

<ImageLoader path="img/miniprogram/plugin_debug" />

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

<ImageLoader path="img/miniprogram/jingdong_debug" />

## 添加白名单

由于京东小程序对网络请求的限制[参考文档](https://mp-docs.jd.com/doc/introduction/accessGuide/1606#heading-2)，您需要将 `https://your serverHost` 在「小程序后台-开发管理-设置-开发设置-服务器域名」中添加为 request 合法域名。[小程序后台](https://mp-console.jd.com/)

**<font color="#FC5F3A">注意：</font>请在正式生产环境发布前完成白名单的添加，未添加白名单可能会出现 SDK 无法上报数据的情况。**

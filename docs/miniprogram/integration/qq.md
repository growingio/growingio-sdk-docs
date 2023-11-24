---
sidebar_position: 5
title: QQ小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

对于 QQ 小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

如果您使用跨平台框架开发且有多端（特指小程序，快应用、App 和 Web 除外）同时需要集成 SDK 的需求时，只需在框架代码中集成一次即可。例：

> 使用 uni-app 同时开发微信小程序和阿里(支付宝)小程序，只需集成一次即可。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的小程序中获取**`appId`**。

3、在下列选项中选择对应的开发框架，并下载对应的 SDK 文件存放在项目中或使用 npm 的方式集成。下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

## 集成

参考示例在 app.js/main.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK 不支持在小程序中任意生命周期中进行初始化。**

<Tabs
groupId="1"
defaultValue="Native 原生"
values={[
{label: 'Native 原生', value: 'Native 原生'},
{label: 'uni-app', value: 'uni-app'},
{label: 'Taro', value: 'Taro'},
]
}>
<TabItem value="Native 原生">

#### 1、加载 SDK

QQ 原生 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.18/gio-qq.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

##### 示例代码

```js
// app.js
import gdp from './utils/gio/gio-qq.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    ...other settings
});

App({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-qq.js').default;
```

  </TabItem>
  <TabItem value="uni-app">

#### 1、加载 SDK

##### 方式一：下载本地集成

uniapp 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.18/gio-uniapp.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk-cdp --save
```

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置（vue2 和 vue3 中分别与 app 实例的相对位置不同）

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
import gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';

App.mpType = 'app';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
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
import gdp from 'gio-miniprogram-sdk-cdp/gio-uniapp';

export function createApp() {
  // 注意vue3中app实例在初始化之前
  const app = createApp(App);

  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
      version: 'miniProgram version',
      host: 'Your ServerHost',
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

Taro 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.18/gio-taro.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk-cdp --save
```

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置（vue2 和 vue3 中分别与 app 实例的相对位置不同）。使用 vue 开发时`taro`和`taroVue`都要传。

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
import gdp from 'gio-miniprogram-sdk-cdp/gio-taro';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    taro: Taro,
    ...other settings
});

class App extends Component { ... }
Taro.render(<App />, document.getElementById('app'));
```

  </TabItem>
  <TabItem value="Taro3(react)">

```text
npm i babel-plugin-setname --save
```

```js
// babel.config.js
module.exports = {
  presets: [['taro', { framework: 'react' }]],
  plugins: [
    [
      'babel-plugin-setname',
      {
        includes: ['src'],
        lower: false, // 从taro2升级至3时请修改为true
      },
    ],
  ],
};
```

```js
// app.js
import React, { Component } from 'react';
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-taro';

const taroRuntime = require('@tarojs/runtime');
gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
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
import gdp from 'gio-miniprogram-sdk-cdp/gio-taro';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
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
// 下载集成方式
import gdp from './utils/gio/gio-taro.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-taro';

// 注意vue3中App实例在初始化之前
const App = createApp({ ... });

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    taro: Taro, // 注意taro和taroVue都需要传
    taroVue: App, // 注意taro和taroVue都需要传
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
</Tabs>

**_更多配置项请在[集成配置](/docs/miniprogram/initSettings)菜单中查看_**

## 插件扩展

集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/plugins)。

加载插件后会在初始化之前打印日志。例：

<ImageLoader path="img/miniprogram/plugin_debug" />

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

<ImageLoader path="img/miniprogram/qq_debug" />

## 添加白名单

由于 QQ 小程序对网络请求的限制[参考文档](https://q.qq.com/wiki/develop/miniprogram/frame/basic_ability/basic_network.html#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)，您需要在「小程序后台-设置-开发设置-服务器域名」中添加 request 合法域名。[QQ 小程序开放平台](https://q.qq.com/#/)

**<font color="#FC5F3A">注意：</font>**<br/>

**请在正式生产环境发布前完成白名单的添加，上线后再添加白名单可能会出现 SDK 无法上报数据的情况。重新发布小程序即可解决。**

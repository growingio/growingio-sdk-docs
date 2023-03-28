---
sidebar_position: 1
title: 微信小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

对于微信小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

如果您使用跨平台框架开发且有多端（特指小程序，快应用、App 和 Web 除外）同时需要集成 SDK 的需求时，只需在框架代码中集成一次即可。例：

> 使用 uni-app 同时开发微信小程序和阿里(支付宝)小程序，只需集成一次即可。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的小程序中获取**`appId`**。

3、在下列选项中选择对应的开发框架，并下载对应的 SDK 文件存放在项目中或使用 npm 的方式集成。下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

## 小程序中集成

参考示例在 app.js/main.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK 不支持在小程序中任意生命周期中进行初始化。**

<Tabs
groupId="1"
defaultValue="Native 原生"
values={[
{label: 'Native 原生', value: 'Native 原生'},
{label: 'uni-app', value: 'uni-app'},
{label: 'Taro', value: 'Taro'},
{label: 'Chameleon', value: 'Chameleon'},
{label: 'WePY2', value: 'WePY2'},
{label: 'Remax', value: 'Remax'},
]}
>
<TabItem value="Native 原生">

#### 1、加载 SDK

微信原生 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-wechat.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

##### 示例代码

```js
// app.js
import gdp from './utils/gio/gio-wechat.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    ...other settings
});

App({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-wechat.js').default;
```

</TabItem>

<TabItem value="uni-app">

#### 1、加载 SDK

##### 方式一：下载本地集成

uniapp 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-uniapp.js><br/>
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

Taro 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-taro.js><br/>
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
{label: 'Taro2(React)', value: 'Taro2'},
{label: 'Taro3(React)', value: 'Taro3(react)'},
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

  <TabItem value="Chameleon">

#### 1、加载 SDK

##### 方式一：下载本地集成

Chameleon 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-chameleon.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk-cdp --save
```

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

##### 示例代码

```js
// app.cml
import Cml from 'chameleon-runtime';
// 下载集成方式
import gdp from './utils/gio/gio-chameleon.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-chameleon';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    cml: Cml
    ...other settings
});

class App { ... }

export default new App();
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-chameleon.js').default;
```

  </TabItem>
  <TabItem value="WePY2">

#### 1、加载 SDK

##### 方式一：下载本地集成

WePY2 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-wepy.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk-cdp --save
```

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

##### 示例代码

```js
// app.wpy
import wepy from 'wepy';
// 下载集成方式
import gdp from './utils/gio/gio-wepy.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-wepy';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    wepy: wepy,
    ...other settings
});

wepy.app({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-wepy.js').default;
```

  </TabItem>
  <TabItem value="Remax">

#### 1、加载 SDK

##### 方式一：下载本地集成

Remax 框架 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.14/gio-remax.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk-cdp --save
```

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

##### 示例代码

```js
// app.js
import * as remax from 'remax';
// 下载集成方式
import gdp from './utils/gio/gio-remax.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-remax';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    remax: remax,
    ...other settings
});

const App = (props) => props.children;

export default App;
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-remax.js').default;
```

  </TabItem>
</Tabs>

**_更多配置项请在[集成配置](/docs/miniprogram/initSettings)菜单中查看_**

## 小程序插件中集成

[小程序插件](https://developers.weixin.qq.com/miniprogram/introduction/)中集成 SDK 参考小程序集成，在插件入口文件 index.js 或指定的插件 Component 组件的 js 中集成即可。SDK 初始化时会自动切换为插件模式，将当前插件视为一个独立应用发送 VISIT 事件。

```js
// 插件入口文件index.js
import gdp from './utils/gio/sdk.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    ...other settings
});

module.exports = { ... };
```

```js
// myComponent.js
import gdp from './utils/gio/sdk.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    ...other settings
});

Component({ ... });
```

**<font color="#FC5F3A">注意：</font>**由于小程序插件中无法获取到页面信息（即没有 path），因此在小程序插件中集成时，会自动关闭无埋点功能（不论是否加载无埋点插件和开启 autotrack）即只能使用埋点。

## 插件扩展

集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/plugins)。

加载插件后会在初始化之前打印日志。例：

![debugLog](/img/miniprogram/plugin_debug.png)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

![debugLog](/img/miniprogram/wx_debug.png)

## 添加白名单

由于微信小程序对网络请求的限制[参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)，您需要将 `https://your serverHost` 在「小程序后台-开发-开发设置-服务器域名」中添加为 request 合法域名。[小程序后台](https://mp.weixin.qq.com/)
:::caution
如果小程序通过第三方平台发布代码，在发布代码之前，需要调用接口在 requestdomain 中添加`https://your serverHost`，参考[小程序官方第三方说明](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Mini_Program_Basic_Info/Server_Address_Configuration.html)。
:::

**<font color="#FC5F3A">注意：</font>**<br/>

**请在正式生产环境发布前完成白名单的添加，未添加白名单可能会出现 SDK 无法上报数据的情况。**

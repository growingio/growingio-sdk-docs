---
sidebar_position: 3
title: 百度小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

对于百度小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

如果您使用跨平台框架开发且有多端（特指小程序，快应用、App和Web除外）同时需要集成SDK的需求时，只需在框架代码中集成一次即可。例：

>使用uni-app同时开发微信小程序和支付宝小程序，只需集成一次即可。

### 准备工作

1. 在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2. 在您的小程序中获取**`appId`**。

3. 在下列选项中选择正确的开发框架，并下载对应的SDK文件存放在项目中，下文中以`utils/gio`目录为例(目录和SDK文件可自定义重命名)。

### 集成

参考示例在 app.js/main.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK不支持在小程序中任意生命周期中进行初始化。**

<Tabs
  groupId="1"
  defaultValue="Native原生"
  values={[
    {label: 'Native原生', value: 'Native原生'},
    {label: 'uni-app', value: 'uni-app'},
    {label: 'Taro', value: 'Taro'},
    {label: 'Chameleon', value: 'Chameleon'},
  ]
}>
  <TabItem value="Native原生">

#### 百度原生SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-baidu.js>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

```js
// app.js
import gdp from './utils/gio/gio-baidu.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    ...other settings
});

App({ ... });
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-baidu.js).default;
```

  </TabItem>
  <TabItem value="uni-app">

#### uni-app框架SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-uniapp.js>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

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
import gdp from './utils/gio/gio-uniapp.js';

App.mpType = 'app';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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
import gdp from './utils/gio/gio-uniapp.js';

export function createApp() {
  // 注意vue3中app实例在初始化之前
  const app = createApp(App);

  gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-uniapp.js).default;
```

  </TabItem>
  <TabItem value="Taro">

#### Taro框架SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-taro.js>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

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
import gdp from './utils/gio/gio-taro.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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
import gdp from './utils/gio/gio-taro.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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
import gdp from './utils/gio/gio-taro.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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
import gdp from './utils/gio/gio-taro.js';

// 注意vue3中App实例在初始化之前
const App = createApp({ ... });

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
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

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-taro.js).default;
```

  </TabItem>

  <TabItem value="Chameleon">

#### Chameleon框架SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-chameleon.js>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

```js
// app.cml
import Cml from 'chameleon-runtime';
import gdp from './utils/gio/gio-chameleon.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    cml: Cml
    ...other settings
});

class App { ... }

export default new App();
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-chameleon.js).default;
```

  </TabItem>
</Tabs>

***更多配置项请在[集成配置](/docs/miniprogram/3.8/initSettings)菜单中查看***

### 插件扩展

如果您想在原有SDK功能（默认仅有埋点功能）上添加额外的功能，可下载插件包并按需进行扩展。

#### 插件下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/plugins.zip>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

插件文件说明参考文档[插件](/docs/miniprogram/3.8/plugins)

加载插件扩展的步骤为：

1. 下载功能插件，解压放入 plugins 目录中。
2. 在app.js/main.js中引入。
3. 在init语句前调用`registerPlugins`方法按数组形式传值。

```js
import gioImpressionTracking from './utils/plugins/gioImpressionTracking';
import gioCompress from './utils/plugins/gioCompress';

...

gdp('registerPlugins', [gioImpressionTracking, gioCompress]);
gdp('init', xxxxx);
```

加载插件后会在初始化之前打印日志。例：

![debugLog](/img/miniprogram/plugin_debug.png)

### 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/swan_debug.png)

### 添加白名单

由于百度小程序对网络请求的限制[参考文档](https://smartprogram.baidu.com/docs/develop/api/net/net_rule/)，您需要在「智能小程序后台-设置-开发设置-服务器域名」中添加request合法域名。[智能小程序后台](https://smartprogram.baidu.com/developer/index.html)

**<font color="#FC5F3A">注意：</font>**<br/>

**请在正式生产环境发布前完成白名单的添加，上线后再添加白名单可能会出现SDK无法上报数据的情况。重新发布小程序即可解决。**

---
sidebar_position: 1
title: 微信小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 集成准备

#### 获取SDK初始化必传参数：AccountID、DataSourceID、AppId、Host

:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
AppId：小程序应用ID<br/>
Host：采集数据上报的服务器地址<br/>

AccountID、DataSourceID、AppId 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持<br/>
Host 需要服务端部署，如不清楚请联系您的专属项目经理或技术支持
:::

##### 创建

![新建数据源](/img/createapplication.png)

##### 查看

![查看数据源](/img/miniprogram/dataSourceInfo.png)

## 集成

对于微信小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

集成方式参考示例代码，注意不要随意修改初始化代码位置。**SDK不支持在小程序中任意生命周期中进行初始化。**

### 下载SDK

<a href="https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js" download="https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js">点击下载SDK</a>，存放在项目中，下文中以`utils/gio`目录为例。

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

### 原生开发

在根目录app.js文件的顶部添加跟踪代码：

<Tabs
  groupId="1"
  defaultValue="原生"
  values={[
    {label: '原生', value: '原生'},
    {label: '原生+第三方插件', value: '原生+第三方插件'},
  ]
}>
<TabItem value="原生">

```js
// app.js
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    ...其他配置项
});
```

</TabItem>
<TabItem value="原生+第三方插件">

```js
// app.js
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    usePlugin: true,
    ...其他配置项
});
const App = global.GioApp;
```

</TabItem>
</Tabs>

### Taro

在根目录app.jsx文件的顶部添加跟踪代码

<Tabs
  groupId="2"
  defaultValue="2.x"
  values={[
    {label: 'Taro 2.x', value: '2.x'},
    {label: 'Taro 3.x', value: '3.x'},
  ]
}>
<TabItem value="2.x">

```js
// main.js
import Taro from '@tarojs/taro';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    taro: Taro,
    ...其他配置项
});
```

</TabItem>
<TabItem value="3.x">

```bash
npm install babel-plugin-setname --save-dev
```

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      "babel-plugin-setname",
      {
        includes: ["src"],
        lower: false,
      }
    ]
  ]
}
```

```js
// main.js
import Taro from '@tarojs/taro';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    taro: Taro,
    ...其他配置项
});
```

</TabItem>
</Tabs>

### uni-app

```js
// main.js
import Vue from 'vue';
import App from './App.vue';
App.mpType = 'app';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    vue: Vue,
    ...其他配置项
});
```

### WePY

<Tabs
  groupId="4"
  defaultValue="1.x"
  values={[
    {label: 'WePY 1.x', value: '1.x'},
    {label: 'WePY 1.x+第三方插件', value: '1.x+插件'},
    {label: 'WePY 2.x', value: '2.x'},
    {label: 'WePY 2.x+第三方插件', value: '2.x+插件'},
  ]
}>
<TabItem value="1.x">

```js
// app.wpy
import Vue from 'vue';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    vue: Vue,
    ...其他配置项
});
```

</TabItem>
<TabItem value="1.x+插件">

```js
// app.wpy
import Vue from 'vue';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    usePlugin: true,
    vue: Vue,
    ...其他配置项
});
```

</TabItem>
<TabItem value="2.x">

```js
// app.wpy
import Wepy from '@wepy/core';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    wepy: Wepy,
    ...其他配置项
});
```

</TabItem>
<TabItem value="2.x+插件">

```js
// app.wpy
import Wepy from '@wepy/core';
var gdp = require("utils/gio/gio-minp.js").default;

gdp('init','your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    usePlugin: true,
    wepy: Wepy,
    ...其他配置项
});
```

</TabItem>
</Tabs>

***更多配置项请在[集成配置](/docs/miniprogram/3.3/initSettings)菜单中查看***

## 添加白名单

由于微信小程序对网络请求的限制[参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)，您需要在「小程序后台-开发-开发设置-服务器域名」中添加request合法域名。[小程序后台](https://mp.weixin.qq.com/)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/3.0_wx_debug.png)
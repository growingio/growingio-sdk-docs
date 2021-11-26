---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

小程序 SDK 支持 `微信小程序` 平台，后续会逐步支持其他平台。具备以下功能特性：
* 埋点能力，开发同学调用API主动采集自定义事件
* 无埋点能力，自动采集用户行为事件，可通过开关控制

## 小程序SDK集成

>下载SDK： https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js
>
>放入小程序目录（例：/src/utils/目录下，下文中均以此目录为例）

对于微信小程序多样的开发方式，我们给出了主流开发方式的集成方法参考。如您使用了其他开发方式，请咨询我们。

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
var gdp = require("utils/gio-minp.js").default;
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    ...其他配置项
});
```

</TabItem>
<TabItem value="原生+第三方插件">

```js
var gdp = require("utils/gio-minp.js").default;
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
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
在根目录main.js文件的顶部添加跟踪代码

```js
import Taro from '@tarojs/taro';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    taro: Taro,
    ...其他配置项
});
```

</TabItem>
<TabItem value="3.x">

1、添加npm包 `babel-plugin-setname`

```js
npm install babel-plugin-setname --save-dev
```

2、修改babel配置，如 `babel.config.js`

```js
module.exports = {
  plugins: [
    [
      "babel-plugin-setname",
      {
        includes: ["src"],
        callee: '__setname__',
        package: '@gio/setname',
        lower: false,
        test: /^on[A-Z][a-zA-Z]+/
      }
    ]
  ]
}
```

3、在根目录main.js文件的顶部添加跟踪代码

```js
import Taro from '@tarojs/taro';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    taro: Taro,
    ...其他配置项
});
```
</TabItem>
</Tabs>

### uni-app

在根目录main.js文件的顶部添加跟踪代码

```js
import Vue from 'vue';
import App from './App.vue';
App.mpType = 'app';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    vue: Vue,
    ...其他配置项
});
```

### mpvue

<Tabs
  groupId="3"
  defaultValue="mpvue"
  values={[
    {label: 'mpvue', value: 'mpvue'},
    {label: 'mpvue+第三方插件', value: 'mpvue+第三方插件'},
  ]
}>
<TabItem value="mpvue">
在根目录main.js文件的顶部添加跟踪代码

```js
import Vue from 'vue';
import App from './App.vue';
App.mpType = 'app';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    vue: Vue,
    ...其他配置项
});
```
</TabItem>
<TabItem value="mpvue+第三方插件">

1、添加npm包 `imports-loader`

```js
npm install  imports-loader --save-dev
```

2、创建一个新文件 **/src/utils/vue.js** 文件

```js
import Vue from 'imports-loader?global=>undefined,Page=>GioPage,App=>GioApp,Component=>GioComponent!mpvue'
export default Vue
```

3、修改 **/build/webpack.base.conf.js** 配置，添加以下内容

```js
module.exports = {
    resolve: {
        alias: {
            'vue': resolve('src/utils/vue'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            GioPage: [resolve('src/utils/gio-minp/index.js'), 'GioPage'],
            GioApp: [resolve('src/utils/gio-minp/index.js'), 'GioApp'],
            GioComponent: [resolve('src/utils/gio-minp/index.js'), 'GioComponent']
        }),
    ]
};
```

4、添加初始化代码

```js

import Vue from 'vue'; // 这里vue应该指向的是 /src/utils/vue.js
import App from './App.vue';
App.mpType = 'app';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init', 'your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    usePlugin: true,
    vue: Vue,
    ...其他配置项
});
```

</TabItem>
</Tabs>

### WePY

在根目录app.wpy文件的顶部添加跟踪代码

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
import Vue from 'vue';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    vue: Vue,
    ...其他配置项
});
```
</TabItem>
<TabItem value="1.x+插件">

```js
import Vue from 'vue';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
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
import Wepy from '@wepy/core';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    wepy: Wepy,
    ...其他配置项
});
```
</TabItem>
<TabItem value="2.x+插件">

```js
import Wepy from '@wepy/core';
var gdp = require("utils/gio-minp/index.js").default;
gdp('init','your GrowingIO projectId', 'your dataSourceID', 'your AppId', {
    version: '小程序版本',
    host: 'api.growingio.com',
    usePlugin: true,
    wepy: Wepy,
    ...其他配置项
});
```
</TabItem>
</Tabs>


---
sidebar_position: 8
title: 快应用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

目前快应用仅支持原生开发方式。如您使用了其他开发方式，请咨询我们。

### 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的快应用中获取**`packageName`**。

3、下载SDK文件存放在项目中，下文中以`utils/gio`目录为例(目录和SDK文件可自定义重命名)。

### 集成

参考示例在 app.ux 快应用主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK不支持在快应用中任意生命周期中进行初始化。**

#### 1、加载SDK

快应用原生SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.2/gio-quickapp.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在App实例之前。

#### 3、使用`GioApp`方法包裹app文件导出的内容；使用`GioPage`方法包裹page文件导出的内容

##### 示例代码

```js
// app.ux
import gdp from './utils/gio/gio-quickapp.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your packageName', {
    version: 'quickapp version',
    host: 'Your ServerHost',
    ...other settings
});

export default GioApp({ ... }); // 入口文件要包裹GioApp()方法

// pages/xx/index.ux
export default GioPage({ ... }); // 所有的页面文件要包裹GioPage()方法
```

```js
原有 require 的引用方式依然可以使用。
const gdp = require('./utils/gio/gio-quickapp.js').default;
```

***更多配置项请在[集成配置](/docs/miniprogram/3.8/initSettings)菜单中查看***

### 插件扩展

如果您想在原有SDK功能（默认仅有埋点功能）上添加额外的功能，可使用插件并按需进行扩展。

插件文件说明参考文档[插件](/docs/miniprogram/3.8/plugins)。

#### 1、引入插件文件

插件下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.2/plugins.zip><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

下载功能插件，解压放入 plugins 目录中，并在app.js/main.js中引入。

#### 2、调用`registerPlugins`方法注册插件

在init语句前调用`registerPlugins`方法按数组形式传值。

##### 示例代码

```js
import gioImpressionTracking from './utils/plugins/gioImpressionTracking';
import gioCompress from './utils/plugins/gioCompress';

...
// 在init语句前调用`registerPlugins`方法按数组形式传值。
gdp('registerPlugins', [gioImpressionTracking, gioCompress]);
gdp('init', xxxxx);
```

加载插件后会在初始化之前打印日志。例：

![debugLog](/img/miniprogram/plugin_debug.png)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/quickapp_debug.png)

## 其他信息

**暂不支持 `表单提交事件`、`半自动采集浏览事件`、`分享事件`**

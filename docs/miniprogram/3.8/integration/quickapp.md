---
sidebar_position: 8
title: 快应用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

目前快应用仅支持原生开发方式。如您使用了其他开发方式，请咨询我们。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的快应用中获取**`packageName`**。

3、下载 SDK 文件存放在项目中，下文中以`utils/gio`目录为例(目录和 SDK 文件可自定义重命名)。

## 集成

参考示例在 app.ux 快应用主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK 不支持在快应用中任意生命周期中进行初始化。**

#### 1、加载 SDK

快应用原生 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.18/gio-quickapp.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在 App 实例之前。

#### 3、使用`GioApp`方法包裹 app 文件导出的内容；使用`GioPage`方法包裹 page 文件导出的内容

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

**_更多配置项请在[集成配置](/docs/miniprogram/3.8/initSettings)菜单中查看_**

## 插件扩展

集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/3.8/plugins)。

加载插件后会在初始化之前打印日志。例：

<ImageLoader path="img/miniprogram/plugin_debug" />

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

<ImageLoader path="img/miniprogram/quickapp_debug" />

## 其他信息

**暂不支持 `表单提交事件`、`半自动采集浏览事件`、`分享事件`**

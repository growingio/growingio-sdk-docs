---
sidebar_position: 7
title: 快手小程序
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

目前快手小程序仅支持原生开发方式。如您使用了其他开发方式，请咨询我们。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的小程序中获取**`appId`**。

3、下载SDK文件存放在项目中，下文中以`utils/gio`目录为例(目录和SDK文件可自定义重命名)。

## 集成

参考示例在 app.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK不支持在小程序中任意生命周期中进行初始化。**

#### 1、加载SDK

快手原生SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.12/gio-kuaishou.js><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

#### 2、使用`init`方法进行初始化

注意`init`方法所处位置在App实例之前。

##### 示例代码

```js
// app.js
import gdp from './utils/gio/gio-kuaishou.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    ...other settings
});

App({ ... });
```

***更多配置项请在[集成配置](/docs/miniprogram/3.8/initSettings)菜单中查看***

## 插件扩展

集成SDK时，SDK仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/3.8/plugins)。

加载插件后会在初始化之前打印日志。例：

![debugLog](/img/miniprogram/plugin_debug.png)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/kuaishou_debug.jpg)

## 添加白名单

由于快手小程序对网络请求的限制[参考文档](https://mp.kuaishou.com/docs/introduction/develop.html#%E6%9C%8D%E5%8A%A1%E5%9F%9F%E5%90%8D%E9%85%8D%E7%BD%AE)，您需要将 `https://your serverHost` 在「小程序后台-开发-开发者设置-服务器域名」中添加为request合法域名。[小程序后台](https://mp.kuaishou.com/)

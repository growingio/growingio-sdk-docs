---
sidebar_position: 6
title: 淘宝小程序
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

目前淘宝小程序仅支持原生开发方式。如您使用了其他开发方式，请咨询我们。

### 准备工作

1. 在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2. 在您的小程序中获取**`appId`**。

3. 下载SDK文件存放在项目中，下文中以`utils/gio`目录为例(目录和SDK文件可自定义重命名)。

### 集成

参考示例在 app.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。

#### 淘宝原生SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0-rc.1/gio-taobao.js>

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

```js
// app.js
import gdp from './utils/gio/gio-taobao.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    tbConfig: { ... },
    ...other settings
});

App({ ... });
```

**淘宝小程序中，`tbConfig` 为必填项，详情请[参考文档](/docs/miniprogram/3.8/initSettings#tbconfig)**

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

![debugLog](/img/miniprogram/taobao_debug.png)

### 添加白名单

#### 1）使用云函数上报

由于淘宝小程序对使用云函数对外上报的方式要求严格，因此需要具体域名和字段需要与我们沟通确认后由开发主体申请白名单 [参考文档](https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1)

**注意不要轻易尝试申请！会浪费您的申请资源！请与我们充分沟通需求后再实践。**

#### 2）使用云应用转发上报

无需申请白名单。**注意请与我们充分沟通需求后再实践。**

### 云函数上报

这里我们给出云函数上报在代码中的调用实现：

```js
// 1、server目录中创建自定义云函数。注意该云函数名称需要在初始化时填写cloudFuncName。

// 2、index.js
// 注意这里的 main 为示例，名称请自行确定，该名称需要在初始化时填写cloudFuncHandler。
exports.main = async (context) => {
  const { domain, path, params, body } = context.data;
  const result = await context.cloud.httpApi.invoke({
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    domain: context.env === 'online' ? domain : 'your test host',
    path,
    params,
    body: body
  });
  return { success: true, msg: result };
};
```

### 其他信息

由于淘宝小程序底层使用的是支付宝小程序代码，所以在SDK识别上可能会被识别为支付宝小程序。

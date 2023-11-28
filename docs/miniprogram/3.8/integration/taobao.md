---
sidebar_position: 6
title: 淘宝小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

目前淘宝小程序仅支持原生开发方式。如您使用了其他开发方式，请咨询我们。

## 准备工作

1、在 GrowingIO 平台中新数据源并获取**`accountId`和`dataSourceId`**。

2、在您的小程序中获取**`appId`**。

3、下载 SDK 文件存放在项目中，下文中以`utils/gio`目录为例(目录和 SDK 文件可自定义重命名)。

## 小程序中集成

参考示例在 app.js 小程序主文件中添加初始化代码。添加位置参考示例代码，注意不要随意修改初始化代码位置。**SDK 不支持在小程序中任意生命周期中进行初始化。**

#### 1、加载 SDK

##### 方式一：下载本地集成

淘宝原生 SDK 下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.18/gio-taobao.js><br/>
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
// 下载集成方式
import gdp from './utils/gio/gio-taobao.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk-cdp/gio-taobao';


gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    tbConfig: { ... },
    ...other settings
});

App({ ... });
```

**淘宝小程序中，`tbConfig` 为必填项，详情请[参考文档](/docs/miniprogram/3.8/initSettings#tbconfig)**

**_更多配置项请在[集成配置](/docs/miniprogram/3.8/initSettings)菜单中查看_**

## 小部件中集成

参考小程序集成在指定的小部件 Component 组件的 js 中集成即可。SDK 初始化时会自动切换为插件模式，将当前 Component 视为一个独立应用发送 VISIT 事件。

```js
// myComponent.js
import gdp from './utils/gio/sdk.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'Your ServerHost',
    tbConfig: { ... },
    ...other settings
});

Component({ ... });
```

**<font color="#FC5F3A">注意：</font>**由于小部件中无法获取到页面信息（即没有 path），因此在小部件中集成时，会自动关闭无埋点功能（不论是否加载无埋点插件和开启 autotrack）。

## 插件扩展

集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/3.8/plugins)。

加载插件后会在初始化之前打印日志。例：

<ImageLoader path="img/miniprogram/plugin_debug" />

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

<ImageLoader path="img/miniprogram/taobao_debug" />

## 添加白名单

### 使用云函数上报

由于淘宝小程序对使用云函数对外上报的方式要求严格，因此需要具体域名和字段需要与我们沟通确认后由开发主体申请白名单 [参考文档](https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1)

**注意不要轻易尝试申请！会浪费您的申请资源！请与我们充分沟通需求后再实践。**

### 使用云应用转发上报

无需申请白名单。**注意请与我们充分沟通需求后再实践。**

## 云函数上报

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
    body: body,
  });
  return { success: true, msg: result };
};
```

### 其他信息

由于淘宝小程序底层使用的是阿里(支付宝)小程序代码，所以在 SDK 识别上可能会被识别为阿里(支付宝)小程序。

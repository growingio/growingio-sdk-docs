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

3、在下列选项中选择对应的开发方式，并下载对应的 SDK 文件存放在项目中或使用 npm 的方式集成。

## 集成SDK

<Tabs
groupId="1"
defaultValue="原生"
values={[
{label: '原生', value: '原生'},
{label: '小部件', value: '小部件'},
]}
>
<TabItem value="原生">

#### 1、加载 SDK

##### 方式一：下载本地集成

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

淘宝原生 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.3.0/gio-taobao.js](https://assets.giocdn.com/sdk/minip/4.3.0/gio-taobao.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk --save
```

#### 2、使用`init`方法进行初始化

参考示例代码在 app.js 小程序主文件中引用SDK并在 App 实例之前调用`init`方法进行初始化。

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

#### 示例代码

```js
// app.js
import cloud from '@tbmp/mp-cloud-sdk';
// 下载集成方式
import gdp from './utils/gio/gio-taobao.js';
// npm集成方式
import gdp from 'gio-miniprogram-sdk/taobao';


gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your miniProgram version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url',
    // tbConfig 为必填项，详情参考文档
    tbConfig: { cloud, ... },
    ...other settings
});

App({ ... });
```

</TabItem>
<TabItem value="小部件">

#### 1、加载 SDK

##### 方式一：下载本地集成

下载SDK添加至项目目录中，下文中以`utils/gio`目录作为下载集成的示例目录(目录和 SDK 文件可自定义重命名)。

淘宝原生 SDK 下载：[https://assets.giocdn.com/sdk/minip/4.3.0/gio-taobao.js](https://assets.giocdn.com/sdk/minip/4.3.0/gio-taobao.js)<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

##### 方式二：npm 集成

```bash
npm i gio-miniprogram-sdk --save
```

#### 2、使用`init`方法进行初始化

参考示例代码在 app.js 小程序主文件中引用SDK并在 App 实例之前调用`init`方法进行初始化。

**<font size="4" color="#FC5F3A">注意不要随意修改初始化代码位置，SDK 不支持在小程序的任意生命周期中进行初始化。</font>**

#### 示例代码

```js
// myComponent.js
import cloud from '@tbmp/mp-cloud-sdk';
import gdp from './utils/gio/gio-taobao.js';

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'your widget version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url',
    // 开启插件模式
    pluginMode: true,
    // tbConfig 为必填项，详情参考文档
    tbConfig: { cloud, ... },
    ...other settings
});

Component({ ... });
```

</TabItem>
</Tabs>

**淘宝小程序中，`tbConfig` 为必填项，详情请[参考文档](/docs/miniprogram/initSettings#tbconfig)**

**更多配置项请在[集成配置](/docs/miniprogram/initSettings)菜单中查看**

## SDK功能插件扩展

**集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。**

各个插件的介绍和集成方式请见[插件](/docs/miniprogram/plugins)。

加载插件后会在初始化之前打印日志。例：

<ImageLoader path="img/miniprogram/plugin_debug" />

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中 Console 标签中即可实时查看 SDK 上报的 log 数据。如下图：

<ImageLoader path="img/miniprogram/taobao_debug" />

## 添加白名单和上报方式选择

### 使用云函数上报

由于淘宝小程序对使用云函数对外上报的方式要求严格，因此需要具体域名和字段需要与我们沟通确认后由开发主体申请白名单 [参考文档](https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1)

**注意不要轻易尝试申请！会浪费您的申请资源！请与我们充分沟通需求后再实践。**

这里我们给出云函数上报在代码中的调用实现供参考：

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

### 使用云应用转发上报

无需申请白名单。但需要您的服务端提供一个接口地址，将SDK上报的数据通过您的服务端直接转发给我们的数据采集地址，接口开发内容请与我们充分沟通需求后再实践。

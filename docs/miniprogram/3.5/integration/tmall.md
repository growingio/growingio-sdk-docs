---
sidebar_position: 7
title: 天猫小程序
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本文档**仅适用于天猫小程序SDK**。

变更记录：[查看Changelog](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)
## 准备工作
1、在平台中新建项目并获取**`projectId`和`dataSourceId`**。

2、在小程序中获取**`appId`**。

3、[点击下载SDK](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)，存放在项目中，下文中以`utils/gio`目录为例。

## 集成

目前我们仅支持原生开发的天猫小程序。如您使用了其他开发方式，请咨询我们。

```js
// app.js
import gdp from './utils/gio/sdk.js';

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    ...other settings
});

App({ ... });
```

***更多配置项请在[集成配置](/docs/miniprogram/3.5/initSettings)菜单中查看***

## 添加白名单

由于天猫小程序使用云函数代理的形式进行网络请求，要求严格。因此需要具体域名和字段需要与我们沟通确认后由开发主体申请白名单 [参考文档](https://miniapp.open.taobao.com/docV3.htm?docId=118444&docType=1)

***注意不要轻易尝试申请！请与我们充分沟通需求后实践。***

这里我们给出白名单申请完成后在代码中的简单实现：
```js
// 1、server目录中创建名为 `httpTunnel` 的云函数。

// 2、index.js
exports.gioTrack = async (context) => {
  ...
  context.cloud.httpApi.invoke({ ... });
  ...
};

// 3、在SDK初始化配置项中将singleSend设为true
```

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/wx_debug.png)

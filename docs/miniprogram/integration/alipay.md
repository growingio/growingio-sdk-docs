---
sidebar_position: 2
title: 支付宝小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

变更记录：[查看Changelog](/docs/miniprogram/version)
## 准备工作
1、在平台中新建项目并获取**`projectId`和`dataSourceId`**。

2、在小程序中获取**`appId`**。

3、<a href="https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js" download="https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js">点击下载SDK</a>，存放在项目中，下文中以`utils/gio`目录为例。

## 集成

目前我们仅支持原生开发的支付宝小程序。如您使用了其他开发方式，请咨询我们。

```js
// app.js
const gdp = require('./utils/gio/sdk.js').default;

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'api.growingio.com',
    ...other settings
});

// 修改项目中的App和Page，如下：
// App({})改写为:
App($global.trackApp({ ... }))

// 所有的Page({})改写为：
$global.GioPage({ ... })
```

***更多配置项请在[集成配置](/docs/miniprogram/initSettings)菜单中查看***

## 添加白名单

由于支付宝小程序对网络请求的限制[参考文档](https://opendocs.alipay.com/mini/008gq6)，您需要在「支付宝小程序管理中心-小程序详情-设置-开发设置-服务器域名白名单」中添加request合法域名。[支付宝小程序管理中心](https://open.alipay.com/mini/dev/list)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/3.0_my_debug.png)

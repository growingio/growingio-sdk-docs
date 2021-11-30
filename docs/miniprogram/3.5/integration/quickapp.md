---
sidebar_position: 6
title: 快应用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本文档同时适用快应用SDK和全量SDK。

变更记录：[查看Changelog](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)
## 准备工作
1、在平台中新建项目并获取**`projectId`和`dataSourceId`**。

2、在快应用中获取**`packageName`**(即包名)。

3、[点击下载SDK](https://assets.giocdn.com/sdk/cdp/3.0/gio-minp.js)，存放在项目中，下文中以`utils/gio`目录为例。

## 集成

目前我们仅支持原生开发的快应用。如您使用了其他开发方式，请咨询我们。

```js
// app.ux
import gdp from "./utils/gio/sdk.js";

...your codes

gdp('init', 'your GrowingIO projectId', 'your dataSourceId', 'your packageName', {
    version: 'quickapp version',
    host: 'api.growingio.com',
    ...other settings
});

export default GioApp({ ... }); // 入口文件要包裹GioApp()方法

// pages/xx/index.ux
export default GioPage({ ... }); // 所有的页面文件要包裹GioPage()方法
```

***更多配置项请在[集成配置](/docs/miniprogram/3.5/initSettings)菜单中查看***

## 功能点信息

**暂不支持 `表单提交事件`、`半自动曝光事件`、`分享事件`**

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

![debugLog](/img/miniprogram/quickapp_debug.png)

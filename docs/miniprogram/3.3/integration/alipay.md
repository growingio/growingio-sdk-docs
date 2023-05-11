---
sidebar_position: 2
title: 支付宝小程序
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 集成准备

#### 获取SDK初始化必传参数：AccountID、DataSourceID、 AppId、Host

:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
AppId：小程序应用ID<br/>
Host：采集数据上报的服务器地址，非平台地址<br/>

Account ID、DataSource ID、AppId 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建

<ImageLoader path="img/common/createapplication" />

##### 查看

<ImageLoader path="img/miniprogram/dataSourceInfo" />

## 集成

目前我们仅支持原生开发的支付宝小程序。如您使用了其他开发方式，请咨询我们。

集成方式参考示例代码，注意不要随意修改初始化代码位置。**SDK不支持在小程序中任意生命周期中进行初始化。**

:::caution
如果您使用有GrowingIO 小程序运营SDK， 且集成本文档中的SDK版本 >=3.3.2，请在初始化SDK时，增加配置项 `enableEventStore: true`
:::
### 下载SDK

<a href="https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js" download="https://assets.giocdn.com/sdk/cdp/3.0/gio-alip.js">点击下载SDK</a>，存放在项目中，下文中以`utils/gio`目录为例。

##### (如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)

### 引入SDK，添加初始化代码

```js
// app.js
const gdp = require('./utils/gio/gio-alip.js').default;

gdp('init', 'your GrowingIO accountId', 'your dataSourceId', 'your AppId', {
    version: 'miniProgram version',
    host: 'your serverHost',
    ...other settings
});

// 修改项目中的App和Page，如下：
// App({})改写为:
App($global.trackApp({ ... }))

// 所有的Page({})改写为：
$global.GioPage({ ... })
```

***更多配置项请在[集成配置](/docs/miniprogram/3.3/initSettings)菜单中查看***

## 添加白名单

由于支付宝小程序对网络请求的限制[参考文档](https://opendocs.alipay.com/mini/008gq6)，您需要在「支付宝小程序管理中心-小程序详情-设置-开发设置-服务器域名白名单」中添加request合法域名。[支付宝小程序管理中心](https://open.alipay.com/mini/dev/list)

## 数据校验

请在`init`初始化配置项中，将 **`debug`** 设置为 **`true`** 打开调试模式，然后在开发者工具中Console标签中即可实时查看SDK上报的log数据。如下图：

<ImageLoader path="img/miniprogram/3.0_my_debug" />

---
sidebar_position: 5
title: 插件
---

以下我们列出了所有小程序SDK支持的插件，请按需加载以减小小程序整体打包的体积。

一般只要您加载了插件功能会自动加载并启用，如果您不想使用其中的功能，移除对应插件即可。

### 埋点（gioCustomTracking）

提供埋点(手动上报数据接口)事件的插件。

**自定义埋点事件：** 对应 `CUSTOM` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#4自定义埋点)

**登录用户属性事件：** 对应 `LOGIN_USER_ATTRIBUTES` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#5登录用户属性事件)

#### <font color="#FC5F3A">注意：</font>

该功能已内置，无需再加载此插件。

### 无埋点（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change`、`submit` 事件的插件。

**点击事件(tap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的点击事件**触发时上报。

**长按事件(longtap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的长按事件**触发时上报。

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当小程序中**绑定的变更事件**触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当小程序中**绑定的表单提交事件**触发时上报。(快应用不支持)

#### <font color="#FC5F3A">注意：</font>

默认情况下，加载该插件后自动开启无埋点功能。初始化配置项 `autotrack` 依然有效并能控制该功能是否启用，请留意`autotrack`是否在开启状态（默认不配置为开启）。

### 半自动埋点浏览插件（gioImpressionTracking）

支持半自动埋点浏览事件功能的插件，加载插件后自动开启。

使用方法请[参考文档](/docs/miniprogram/3.5/commonlyApi#半自动埋点浏览事件)。

### 数据加密压缩插件（gioCompress）

上报请求的数据进行加密压缩。

#### <font color="#FC5F3A">注意：</font>

默认情况下，加载该插件后自动开启加密压缩功能。初始化配置项 `compress` 依然有效并能控制该功能是否启用，请留意`compress`是否在开启状态（默认不配置为开启）。

### 淘宝小程序上报适配插件（gioTaobaoSendAdapter）

因为淘宝小程序上报数据特殊性，可选择使用云函数或云应用的方式上报数据，插件适配了两种不同的上报方式。

使用方法请[参考文档](/docs/miniprogram/3.5/initSettings#tbconfig)。

#### <font color="#FC5F3A">注意：</font>

淘宝小程序内置插件，其他小程序不可用。

### 多项目打通插件（gioMultiIntegrate）

当且仅当开发小程序时使用独立开发的分包（即主包与分包不在同一项目中且不同框架时）时，插件用于打通用户数据和页面数据，合并为一个SDK运行逻辑。

#### <font color="#FC5F3A">注意：</font>

1）仅支持微信小程序。

2）仅支持用户和页面数据打通与埋点事件，无埋点事件无法支持，使用该插件会自动强制关闭无埋点功能（不论是否加载无埋点插件和开启autotrack）。

3）需要在主包项目中与分包项目中都集成SDK和注册插件，并在分包初始化配置项中设置`subpackage: true`。

### Chameleon适配插件（gioChameleonAdapter）

适配Chameleon框架专用的插件。

### WePY适配插件（gioWepyAdapter）

适配WePY2框架专用的插件。

### uni-app适配插件（gioUniAppAdapter）

适配uni-app框架专用的插件(仅适配小程序，非H5和App)。支持vue2、vue3。

### Taro适配插件（gioTaroAdapter）

适配Taro框架专用的插件。支持Taro2、Taro3 react、Taro3 vue2、Taro3 vue3。

### Remax适配插件（gioRemaxAdapter）

适配Remax框架专用的插件。

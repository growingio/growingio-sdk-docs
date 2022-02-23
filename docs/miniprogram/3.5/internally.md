---
sidebar_position: 5
title: 内置模块(插件)
---

## 无埋点

自动采集 `tap`、`longtap`、`onTabItemTap`、`change`、`submit` 事件的插件。

**点击事件(tap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的点击事件**触发时上报。

**长按事件(longtap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的长按事件**触发时上报。

**TabBar点击事件(onTabItemTap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中原生底部**TabBar点击事件**触发时上报。(快应用不支持)

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当小程序中**绑定的变更事件**触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当小程序中**绑定的表单提交事件**触发时上报。(快应用不支持)

**onError事件(error)：** 对应 `CUSTOM` 事件。自动上报，当小程序中**App onError**触发时上报。(快应用不支持)

## 埋点

提供埋点(手动上报数据接口)事件的插件。

**自定义埋点事件：** 对应 `CUSTOM` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#4自定义埋点)

**登录用户属性事件：** 对应 `LOGIN_USER_ATTRIBUTES` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#5登录用户属性事件)

## 半自动埋点浏览

支持半自动埋点浏览事件功能的插件。

## 数据加密

使用插件并在初始化时开启 **`compress`** 配置时，上报请求的数据进行加密。

## 淘宝小程序单发

因为淘宝小程序上报数据仅能单事件上报的特殊性，使用淘宝小程序插件会使得小程序上报时每次发送一个事件数据。

## Chameleon适配

适配Chameleon框架专用的插件。

## WePY适配

适配WePY2框架专用的插件。

## uni-app适配

适配uni-app框架专用的插件。

## Taro适配

适配Taro框架专用的插件。兼容Taro2.x和Taro3.x。

## Remax适配

适配Remax框架专用的插件。

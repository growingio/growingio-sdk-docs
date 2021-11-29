---
sidebar_position: 7
title: 3.0与3.5对比
---

本文将介绍3.0.0版本与3.5.0版本的差异，方便您充分了解差异并放心的升级。文中将仅列出差异之处，共同之处将不再赘述。

## 初始化

[对应文档](/docs/miniprogram/3.5/initSettings)

**移除项：** `usePlugin`、`vue`、`setConfig`方法、

**新增项：** `mpvue`、`wepy`、`uniVue`、`taroVue`、`singleSend`

## 数据采集API

[对应文档](/docs/miniprogram/3.5/commonlyApi)

**移除项：** `collectImp`

**新增项：** `getOption`、`setOption`

## 功能点优化

1、带有 `autoplay` 属性且值为 `true` 的原生组件（例如：swiper、video）产生的change事件会被自动忽略。

2、半自动曝光事件将无需手动注册，改为自动注册（触发时机为页面onShow）。

3、半自动曝光事件的曝光逻辑为：只要从不可见区域到可见区域即计为一次曝光并上报。

## 功能点新增

1、新增 `getOption` 接口，可轻松获取SDK当前配置。[参考文档](/3.5/commonlyApi#8获取sdk当前配置getoption)

2、新增 `setOption` 接口，统一修改配置的方法。[参考文档](/docs/miniprogram/3.5/commonlyApi#动态配置接口)

## 不兼容改动

1、半自动曝光事件参数配置方式[参考文档](/docs/miniprogram/3.5/internally#半自动曝光事件)


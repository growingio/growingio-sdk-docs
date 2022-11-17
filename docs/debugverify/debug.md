---
sidebar_position: 0
title: 日志输出调试和校验
---

GrowingIO 各SDK均支持日志输出模式，开启后可进行调试和校验。

## 开启日志输出模式

您可以在使用SDK过程开发过程中开启日志输出模式，进行调试和数据校验。

### Android SDK 日志输出模式

请参考初始化配置中的 [`setDebugEnabled`](/docs/android/Configuration#3-setdebugenabled)

### iOS SDK 日志输出模式

请参考初始化配置中的 [`debugEnabled`](/docs/ios/Configuration#2-debugenabled)

### Web JS SDK 日志输出模式

请参考初始化配置中的 [开启 debug 模式](/docs/webjs/3.3/initSettings#debug)

### 小程序 SDK 日志输出模式

请参考初始化配置中的 [开启 debug 模式](/docs/miniprogram/3.3/initSettings#debug)

### 服务端 SDK 日志输出模式

请参考对应SDK的初始化配置。

:::info 提示
服务端 开启日志输出模式时，可以看到日志输出，但是不向平台数据库发送采集数据。
:::

## 校验

日志校验的关注点请参考[校验时需关注字段和说明](/docs/debugverify#校验时需关注字段和说明)。

---
sidebar_position: 2
title: CDP
---

## 简介

由于GrowingIO平台架构的升级，我们提供了新的服务，SDK能力也在不断进化。本文将介绍CDP SDK各版本的差异，方便您充分了解差异并放心的升级。

## 版本说明

**0.6.x-1.2.x版本；**早期私有部署版本使用的SDK，对应OP平台等于或低于13.6版本。

**3.0-3.8.x版本；**中期私有部署版本使用的SDK，对应OP平台13.6(不含)-14.7 和 2.x版本 和 4.2.0以下(不含)的4.x版本。

**4.0版本；**老旧的无埋点逻辑不再满足需求，我们在4.2.0版本的分析云产品上推出了全新的无埋点体系逻辑。采集逻辑更合理，无埋点体验更好。

## 兼容性

<font size="4" color="#FC5F3A">1.2.x、3.x（3.3与3.8互相兼容）、4.0版本互不兼容。</font>如果您不清楚应该使用哪个版本，请咨询我们的技术支持。

## 关于版本维护

0.6.x、1.2.x、3.3版本我们将不再维护，如果遇到问题请尝试升级至3.8版本或联系我们的技术支持；3.8版本会继续开发新功能和维护。

## 差异点

### 初始化相关

**移除：** `autotrack`、`compress` 初始化配置项；`setConfig`、`send` 方法。

* 1、`autotrack`、`compress` 初始化配置项可直接通过加载/卸载对应插件实现，多余配置项会增加理解和使用难度。
* 2、初始化方法 `setConfig` 废弃，仅支持通过 `init` 方法进行初始化；因为它容易歧义误导使用。
* 3、`init` 初始化成功即发送 VISIT 和 PAGE 事件，`send` 方法已被废弃。

**变更：** `enableIdMapping` 初始化配置项。

* `enableIdMapping` 更名为 `idMapping`，仅更名，使用方式不变。

**新增：** `originalSource`、`platform`、`storageType` 初始化配置项。

上述初始化配置项说明请参考[初始化配置](/docs/webjs/initSettings)。

### 数据采集api

**移除：** `setTrackerScheme`、`setTrackerHost`、`enableDebug`、`setDataCollect`、`setAutoTrack` 方法。

以上都是动态修改配置的接口，我们废弃了他们，统一使用 `setOption` 方法。

**变更：** `getVisitorId` 方法。

* `getVisitorId` 更名为 `getDeviceId`，仅更名，调用方式不变。

**新增：** `getOption`、`setOption`、`setGeneralProps`、`clearGeneralProps`、`事件时长统计相关` 方法。

* 1、新增 `getOption` 方法；用于获取当前SDK配置项状态。[参考文档](/docs/webjs/3.8/commonlyApi#9获取sdk当前配置getoption)
* 2、新增 `setOption` 方法；用于统一动态设置SDK配置项。[参考文档](/docs/webjs/3.8/commonlyApi#动态修改配置接口setoption)
* 3、新增 `setGeneralProps` 方法；用于设置埋点通用属性。[参考文档](/docs/webjs/commonlyApi#7设置埋点通用属性setgeneralprops)
* 4、新增 `clearGeneralProps` 方法；用于清除埋点通用属性。[参考文档](/docs/webjs/commonlyApi#8清除埋点通用属性cleargeneralprops)
* 5、新增 `事件时长统计相关` 方法；[参考文档](/docs/webjs/commonlyApi#事件时长统计)

## 优化

1、新增半自动采集浏览功能。[参考文档](/docs/webjs/plugins/impressionTracking)

2、所有api在调用时，允许传入一个回调函数，用于在执行完当前api后执行。[参考文档]

3、全新无埋点逻辑。[参考文档]

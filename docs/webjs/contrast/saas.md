---
sidebar_position: 1
title: Saas
---

## 简介

由于GrowingIO平台架构的升级，我们提供了新的服务，SDK能力也在不断进化。本文将介绍Saas SDK各版本的差异，方便您充分了解差异并放心的升级。

## 版本说明

**2.x版本；**一直以来我们使用的Saas版本为19-25的通用大版本（在此我们称为老Saas），SDK版本为2.x。

**3.8版本；**在2022年，Saas版本迎来代码架构和功能的整合，推出了4.0版本的分析云产品（在此我们称为新Saas）数据处理能力得到大幅提升，功能的到了极大的丰富。SDK 2.0无法满足新增的需求，于是推出并使用了与CDP相同能力的3.8版本。

**4.0版本；**老旧的无埋点逻辑不再满足需求，我们在4.2.0版本的分析云产品上推出了全新的无埋点体系逻辑。采集逻辑更合理，无埋点体验更好。

## 兼容性

<font size="4" color="#FC5F3A">2.0、3.8、4.0版本互不兼容。</font>如果您不清楚应该使用哪个版本，请咨询我们的技术支持。

## 关于版本维护

2.0版本我们将不再维护，如果遇到问题请联系我们的技术支持；3.8版本会继续开发新功能和维护。

## 差异点

由于新saas过渡期（4.0平台）的存量客户较少，在此不再做过多详细的介绍。下面介绍老Saas使用的2.0SDK与新Saas使用的4.0SDK的差异点。

### 架构

在4.0SDK上，我们将各个主模块进行了独立拆分，方法调用都是单向的，这大大降低了代码的耦合度，减少了出现缺陷的风险。

功能上，我们对各个模块进行了重新设计和完全的代码重写，以插件的形式进行拆分，进一步捋清了代码逻辑。移除了大量原有的冗余和过时逻辑，这对于减小SDK占用大小有很大的意义。

### 测量协议

由于我们平台和SDK的大版本更新，我们重新制定了测量协议，上报数据的字段和类型均有所改变，集体请[参考文档]。

### 初始化相关

**移除：** `imp`、`manualImp`、`impAttrSeparator` 配置项；`setConfig`、`config`、`send` 方法。

* 1、初始化配置项 `imp`、`manualImp` 废弃，依据半自动埋点浏览插件控制。
* 2、初始化配置项 `impAttrSeparator` 废弃，不再支持自定义分隔符，仅支持处理json格式数据。
* 3、初始化方法 `setConfig` 废弃，仅支持通过 `init` 方法进行初始化；因为它容易歧义误导使用。
* 4、`config`方法废弃，请通过 `setOption` 动态修改配置项。
* 5、`send` 方法废弃，`init` 初始化成功即发送 VISIT 和 PAGE 事件。

**新增：** `cookieDomain`、`dataCollect`、`debug`、`idMapping`、`ignoreFields`、`originalSource`、`platform`、`scheme`、`storageType` 初始化配置项。

上述初始化配置项说明请参考[初始化配置](/docs/webjs/initSettings)。

### 数据采集api

**移除：** `page.set`、`evar.set`、`visitor.set` 方法。

即移除了 页面级变量、转化变量、访问用户变量 的上报api。

* 1、如果您想继续使用页面级变量（pvar），请将页面级变量放在页面查询参数query中，平台会自动解析处理。
* 2、如果您想继续使用转化变量（evar），请将转化变量放在埋点事件属性中进行上报。
* 3、如果您想继续使用访问用户变量（ppl），请在设置登录用户Id之前调用`setUserAttributes`上报。

**变更：** `people.set`、`getVisitUserId` 方法。

* 1、`people.set` 更名为 `setUserAttributes`，仅更名，调用方式不变。[参考文档](/docs/webjs/commonlyApi#6用户属性setuserattributes)
* 2、`getVisitUserId` 更名为 `getDeviceId`，仅更名，调用方式不变。[参考文档](/docs/webjs/commonlyApi#2获取访问用户idgetdeviceid)

**新增：** `getOption`、`setOption`、`setGeneralProps`、`clearGeneralProps`、`事件时长统计相关` 方法。

* 1、新增 `getOption` 方法；用于获取当前SDK配置项状态。[参考文档](/docs/webjs/commonlyApi#9获取sdk当前配置getoption)
* 2、新增 `setOption` 方法；用于统一动态设置SDK配置项。[参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)
* 3、新增 `setGeneralProps` 方法；用于设置埋点通用属性。[参考文档](/docs/webjs/commonlyApi#7设置埋点通用属性setgeneralprops)
* 4、新增 `clearGeneralProps` 方法；用于清除埋点通用属性。[参考文档](/docs/webjs/commonlyApi#8清除埋点通用属性cleargeneralprops)
* 5、新增 `事件时长统计相关` 方法；[参考文档](/docs/webjs/commonlyApi#事件时长统计)

## 优化

1、所有api在调用时，允许传入一个回调函数，用于在执行完当前api后执行。[参考文档]

2、全新无埋点逻辑。[参考文档]

3、SDK用户信息相关加密存储。

4、存储逻辑优化。

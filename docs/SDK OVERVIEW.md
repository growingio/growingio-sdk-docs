---
id: home
sidebar_position: 1
title: SDK 简介
slug: /
---

### 产品概述

管理学大师彼得·德鲁克说过：“如果你无法度量它，那么你也不能有效增长。”度量的目标是为了改进，尤其是现在的数据化时代，业务增长的前提是有一套可衡量的数据分析体系。所有的数据分析，最终都是为商业服务。一个分析的整个流程，包含了数据采集、数据转化、数据存储、商业智能、商业洞察和商业决策这些阶段。然而，使用传统的分析工具和方法，我们往往会花费超过 80% 的时间在最前面的数据采集、清洗、转化和存储上，而真正能带来巨大商业价值的商业洞察和决策缺只有不到 20% 的时间，整个投入产出比完全倒置。如何能花费尽可能少的时间，又能得到优质全面的数据，是我们必须要去面对和解决的问题。GrowingIO 就是我们给出的答案。

<center><img src={require('/img/conversion.gif').default} alt="SDK Banner" /></center>

GrowingIO 是我们于 2015 年发布的新一代数据分析产品，无需埋点即可采集全量实时用户行为数据，我们希望通过提供一个简单、迅速和规模化的产品，帮助企业快速建立业务数据分析体系，让企业里面的每个人都能用数据去驱动业务增长。千里之行，始于足下，数据采集是数据分析的基础和入口。目前在数据采集方面，GrowingIO 不仅提供了无埋点的轻量级客户端 JavaScript、Apple 和 Android SDK，同时也提供打点的服务端 Java、Python、Go、Ruby、Node 等语言 SDK，方便与企业内部数据打通。


### SDK 支持范围

SDK 包括客户端 SDK 和服务端 SDK。目前客户端 SDK 支持 Android 和 Apple 原生，Web JS，小程序，以及众多第三方混合开发框架。服务端 SDK 支持 Java、PHP、Python、Go。

小程序支持微信小程序、阿里(支付宝)小程序、百度小程序、抖音小程序、QQ 小程序、淘宝小程序、快手小程序、京东小程序、快应用。

### SDK支持的事件类型

|      SDK       | 访问 | 页面浏览 | 元素点击 | 元素变更 | 埋点 | 用户属性 | 激活 | 唤醒 | 应用关闭 |
| :------------: | :--: | :------: | :------: | :------------: | :--: | :------: | :--: | :--: | :------: |
| Android 无埋点 |  ✅  |    ✅    |    ✅    |       ✅       |  ✅  |    ✅    |  ✅  |  ✅  |    ✅    |
|  Android 埋点  |  ✅  |    -     |    -     |       -        |  ✅  |    ✅    |  ✅  |  ✅  |    ✅    |
|     Apple     |  ✅  |    ✅    |    ✅    |       ✅       |  ✅  |    ✅    |  ✅  |  ✅  |    ✅    |
|     Web JS     |  ✅  |    ✅    |    ✅    |       ✅       |  ✅  |    ✅    |  -   |  -   |    -     |
|     小程序     |  ✅  |    ✅    |    ✅    |       ✅       |  ✅  |    ✅    |  -   |  -   |    ✅    |
|   HarmonyOS    |  ✅  |    -     |    -     |       -        |  ✅  |    ✅    |  -   |  -   |    -     |
|  React Native  |  ✅  |    -     |    -     |       -        |  ✅  |    ✅    |  -   |  -   |    -     |
|    Flutter     |  ✅  |    ✅    |    ✅    |       ✅       |  ✅  |    ✅    |  ✅  |  ✅  |    ✅    |

:::info 注意
关于事件类型说明请查看[**事件模型**](/knowledge/basicknowledge/eventModel)

Apple SDK 中，无埋点相关事件如页面浏览、元素点击、元素变更、应用关闭，仅部分平台支持
:::

### 移动端框架版本兼容

| 框架         |   SDK 类别   | App 适配的系统版本  |     框架版本      |
| :----------- | :----------: | :-----------------: | :---------------: |
| 原生 Android | 无埋点、埋点 |    Android 4.2+     |         -         |
|    Apple     | 无埋点、埋点 |       iOS 10.0+<br/> macOS 10.12+<br/> watchOS 7.0+<br/> tvOS 12.0+<br/> visionOS 1.0+        |         -         |
| HarmonyOS     | 埋点 |    HarmonyOS 3.1.0+    |    API 9+     |
| Flutter     |     无埋点、埋点   | 移动端系统同上 |   dart>=2.14.0 sdk>=2.10.5 |
| React Native |     埋点     | 移动端系统同上 | 0.46-0.56、0.59.9 |

### 使用流程

1. 购买产品。
2. 获取 `AccountId` , `UrlScheme` , `ServerHost` 和 `DataSourceId`。
3. 集成SDK。
4. 数据校验。
5. 产品上线，开始分析。

:::info 关于 CDP 产品
GrowingIO CDP 产品是集**服务端数据分析和客户端自动埋点一体化**的产品服务。
:::

### 平台支持功能的版本与 SDK 版本对应关系

| 平台版本  |     功能     |        SDK 版本   |
| :-------: | :----------------: | :---------------------------------: |
|  OP-13.6  |  无埋点、埋点  |      >=3.0.0           |
| OP-14.3.0 |  全量 context 字段传输,服务端通用维度拆解    |    3.2.0      |
| OP-2.0.0  |  支持 user_key,IDMapping  |      3.3.0    |
| OP-2.6.0  | 支持埋点事件属性值、用户变量属性值可传数组类型 | Android SDK 3.3.6<br/>Apple SDK 3.3.6<br/>Web JS SDK 3.3.10<br/>小程序 SDK 3.3.5<br/> |
| OP-2.7.0  |   支持服务端 SDK 埋点事件可传 eventTime 参数   |      Java SDK v1.0.11-cdp<br/> PHP SDK v1.0.2<br/> Python SDK v1.0.1    |
| New SaaS  |  新无埋点、埋点    |    >=4.0.0    |
| OP-4.2  |  新无埋点、埋点    |    >=4.0.0    |
| OP-4.4, OP-2.11.9  |  支持鸿蒙数据源   |    HarmonyOS SDK    |
| OP-4.3 |  支持abtest   |    >=4.0.0    |
| OP-4.8  |  支持abtest预置分群新设备   |    Android SDK 4.4.1<br/>Apple SDK 4.6.0<br/>Web JS SDK 4.2.5<br/>小程序 SDK 4.3.3<br/>    |
| OP-4.9  |  支持鸿蒙无埋点   |    HarmonyOS SDK 2.3.0    |

:::info
如果使用采集数据加密解密功能产品需要升级到 14.3.0 之后， Android SDK 3.3.0 之后， Apple SDK 3.3.0 之后
:::

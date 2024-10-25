---
id: home
sidebar_position: 1
title: SDK 简介
slug: /
---
--------------

## 产品概述

GrowingIO （北京易数科技有限公司）是基于用户行为数据的增长平台，国内领先的数据运营解决方案供应商。为产品、运营、市场、数据团队及管理者等，提供客户数据平台、  产品分析、获客分析，智能运营等产品和咨询服务，帮助企业在数据化升级的路上，提升数据驱动能力，实现更好的增长。

GrowingIO 专注于零售、电商、金融、酒旅航司、教育、内容社区、B2B等行业，成立以来，服务上千家企业级客户，获得迪奥、安踏、喜茶、招商仁和人寿、上汽集团、东航、春航、首旅如家、陌陌、爱奇艺、新东方等客户的青睐。

GrowingIO 帮助客户提升数据驱动能力，实现更好的增长。

![slogan](https://docs.growingio.com/.gitbook/assets/-LGNxeGABUADKiTWTaEM-LIEN5IgjD_lm1zFG-YX-LIEN8O7RZ9ipiI48vpk45_4_conversion_1_.gif)

## SDK 简介

### SDK支持范围

SDK 包括客户端SDK和服务端SDK。目前客户端SDK支持Android和iOS原生，Web JS，小程序，以及众多第三方混合开发框架。服务端SDK支持Java、PHP、Python、Go。

小程序支持微信小程序、阿里(支付宝)小程序、百度小程序、抖音小程序、QQ小程序、淘宝小程序、快手小程序、京东小程序、快应用。

微信小程序支持的开发框架如下：

- 原生 、 原生+第三方插件
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)
- uni-app(vue2)、uni-app(vue3)
- WePY 1.x、WePY 2.x 以及第三方插件
- Chameleon
- Remax

阿里(支付宝)小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)
- uni-app(vue2)、uni-app(vue3)
- Chameleon
- Remax

百度小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)
- uni-app(vue2)、uni-app(vue3)
- Chameleon

抖音小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)
- uni-app(vue2)、uni-app(vue3)
- Remax

QQ小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)

快手小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)

京东小程序支持的开发框架如下：

- 原生
- Taro 2.x 、Taro3(React)、Taro 3.x(vue2)、Taro 3.x(vue3)

各SDK支持的事件类型如下表：

| SDK | 访问 |  页面浏览  | 元素点击 | 输入框改变内容 | 表单提交 | 埋点 | 用户属性 | 激活 | 唤醒 | 应用关闭 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|
|Android无埋点| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|Android埋点  | ✅ | - | - | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
|iOS无埋点    | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
|iOS埋点      | ✅ | - | - | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
|Web JS      | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |  -|
|小程序       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | -  | - | ✅ |
|React Native| ✅ | - | - | - | - | ✅ | ✅ | - | - | - |
|Flutter     | ✅ | ✅ | ✅ | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ |
|Java        | - | - | - | - | - | ✅ | ✅ | - | - | - |
|PHP         | - | - | - | - | - | ✅ | ✅ | - | - | - |
|Python      | - | - | - | - | - | ✅ | ✅ | - | - | - |
|Go          | - | - | - | - | - | ✅ | ✅ | - | - | - |

:::info 注意
关于事件类型说明请查看[**事件模型**](/docs/basicknowledge/eventModel)，事件包含字段信息请查看[**测量协议**](/docs/Measurement%20Protocol) <br/>
服务端SDK支持多维度表，用户融合功能，具体参考服务端SDK<br/>
SDK未支持的服务端开发语言，GrowingIO 提供有 OPEN API，如有需求请联系您的技术支持
:::

### 移动端框架版本兼容

|  框架  | SDK类别 | App适配的系统版本 | 框架版本|
|  :----  | :----:  | : ----: | :----:|
| 原生Android | 无埋点、埋点 | Android 4.2+ | - |
| 原生iOS | 无埋点、埋点 | iOS 8+ |  - |
| React Native | 埋点 | Android 4.2+  iOS 8+ |  0.46-0.56、0.59.9 |
| Flutter | 埋点 | Android 4.2+  iOS 8+ |  - |

---
sidebar_position: 1
title: 介绍
---

## 简介

小程序SDK支持 `微信小程序`、`支付宝小程序` 平台，后续会逐步支持其他平台。

目前具备以下特性：
- 埋点能力，开发同学调用API主动采集埋点事件
- 无埋点能力，自动采集用户行为事件，可通过开关控制

## 选择小程序平台

我们针对微信小程序和支付宝小程序专门分别进行了打包。

如果您使用`uni-app`、`Taro`等多平台框架开发同时需要产出多端，也并不清楚如何集成SDK，请联系我们。

请在左侧集成菜单中自主选择对应文档进行集成。

## GrowingIO平台设置

#### 新建项目并获取 `accountID`、`dataSourceID`、`host`、`appID` 信息

:::info
- `accountID`、`dataSourceID`需要在CDP增长平台上新建数据源，或从已知应用中获取, 如不清楚或无权限请联系您的专属项目经理。
- `host`需要服务端部署，如不清楚请联系您的专属项目经理。
- `appID` 为小程序应用ID。
:::
#### 创建
![新建数据源](/img/createapplication.png)
#### 查看
![查看数据源](/img/miniprogram/dataSourceInfo.png)
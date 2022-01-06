---
sidebar_position: 3
title: 小程序 SDK 合规说明
---
**鉴于您需要使用GIO提供的服务，请您务必于使用GIO服务之前完成合规工作**
## 收集的数据
按照 GDPR 的界定，GrowingIO 属于数据处理方，这是因为 GrowingIO 会按照客户的指示代表客户收集和处理数据。我们的客户则是数据控制方，他们拥有所有相关权利，可以使用接口随时控制是否开启数据收集和处理。

## 合规步骤
### GDPR 
[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO 小程序 SDK 提供设置接口，可在用户未同意隐私协议时，初始化时将`dataCollect`设置为 `false` ，禁止数据采集；<br/>在用户同意隐私协议时，调用`setDataCollect`设置为 `true`，开启数据采集。<br/>在用户同意隐私协议后，初始化时将`dataCollect`设置为 `true` ，开启数据采集。
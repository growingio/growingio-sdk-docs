---
sidebar_position: 4
title: 小程序 SDK 合规说明
---

## 收集的数据

按照 GDPR 的界定，GrowingIO 属于数据处理方，这是因为 GrowingIO 会按照客户的指示代表客户收集和处理数据。我们的客户则是数据控制方，他们拥有所有相关权利，可以使用接口随时控制是否开启数据收集和处理。

收集信息是为了您的小程序向所有用户提供更好的服务。GrowingIO 小程序 SDK 将会收集小程序运行相关的环境信息，包括微信版本号，小程序场景值，设备信息，网络信息。使用小程序的本地存储来存储 SDK 自动生成的访问用户ID（用于标记访问用户）、登录用户Id、session信息。其他用户信息均需用户授权后由开发方上报，包括但不限于：openId、unionId、微信头像、昵称、定位等。

## 合规步骤

### 隐私保护指引

请参考[微信小程序用户隐私保护](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/)

## 数据加密传输说明

默认情况下，基础SDK不包含数据加密功能，可以通过初始化时注册加密插件来开启请求数据加密，以增强数据传输的安全性。

使用请参考[SDK数据加密传输 compress](/docs/3.x/miniprogram/3.3/initSettings#compress)。

## 数据存储发送策略说明

小程序 SDK 采集的用户行为数据默认采用节流 1 秒钟发送的策略，当节流队列里大于50条行为数据后立即打包发送一次。行为数据缓存采用内存缓存，不会在本地存储中存储。如果您需要调整发送策略，请参考初始化配置项 uploadInterval。

当开启强制登录模式(forceLogin 设置为 true)是，在调用 identify 接口之前的所有行为数据都会采用内存缓存。待调用 identify 后立即上报缓存的行为数据。

### GDPR

[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO 作为数据处理方，为符合 GDPR，小程序 SDK 提供设置接口，在用户未同意隐私协议时，初始化时将`dataCollect`设置为 `false` ，禁止数据采集。

在用户同意隐私协议后，调用`setDataCollect`设置为 `true`，开启数据采集。

<b>示例：</b>

```js
var userAgreePolicy = {本地存储中获取是否已同意隐私协议}
gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
  version: '1.0.0',
  dataCollect: userAgreePolicy,
  ... // 其他初始化配置项按需配置
});

// 小程序代码
...

// 弹窗用户同意隐私协议后打开数据采集
if (userAgreePolicy) {
  gdp('setDataCollect', true);
}
// 向本地存储中保存同意状态
...
```

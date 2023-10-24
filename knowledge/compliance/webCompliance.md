---
sidebar_position: 3
title: Web JS SDK 合规说明
---

## 收集的数据

按照 GDPR 的界定，GrowingIO 属于数据处理方，这是因为 GrowingIO 会按照客户的指示代表客户收集和处理数据。我们的客户则是数据控制方，他们拥有所有相关权利，可以使用接口随时控制是否开启数据收集和处理。

收集信息是为了您的网站向所有用户提供更好的服务。GrowingIO Web JS SDK 将会收集使用的浏览器信息，网络信息。

### 关于Cookie

GrowingIO Web JS SDK主要使用 Cookie 来存储SDK 自动生成的访问用户ID（用于标记访问用户）、登录用户Id、sessionId；不获取客户网站Cookie中其他内容。用户可以停用 Cookie 或删除任何单个 Cookie 记录。

GrowingIO Web JS SDK 默认对 Cookie 进行深层加密，保证数据安全性。

### 关于 IP 地址

GrowingIO使用 IP 地址来分析访问者的地理位置，以及确保此服务和我们客户的安全。客户可以采取 IP 掩盖做法，以便 GrowingIO 仅使用所收集的 IP 地址的一部分，而不使用完整的 IP 地址。此外，客户也可以自由使用我们的 IP 替换功能来替换 IP 地址。

## 数据加密传输说明

默认情况下，基础SDK不包含数据加密功能，可以通过初始化时注册加密插件来开启请求数据加密，以增强数据传输的安全性。

使用请参考[SDK数据加密传输 compress](/docs/webjs/plugins/compress)。

## 数据存储发送策略说明

Web JS SDK采集的用户行为数据采用实时发送的策略，不会在内存和本地存储中存储。

## 合规步骤

### GDPR

[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO 作为数据处理方，为符合 GDPR， Web JS SDK 提供设置接口，在用户未同意隐私协议时，初始化时将`dataCollect`设置为 `false` ，禁止数据采集。

在用户同意隐私协议后，调用`setOption`设置`dataCollect`为 `true`，开启数据采集。

<b>示例：</b>

```js
var userAgreePolicy = {本地存储中获取是否已同意隐私协议}
gdp('init', 'your accountId', 'your dataSourceId', {
  version: '1.0.0',
  dataCollect: userAgreePolicy,
  ... // 其他初始化配置项按需配置
});

// 站点代码
...

// 弹窗用户同意隐私协议后打开数据采集
if (userAgreePolicy) {
  gdp('setOption', 'dataCollect', true);
}
// 向本地存储中保存同意状态
...
```

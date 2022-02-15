---
sidebar_position: 3
title: Web JS SDK 合规说明
---
**鉴于您需要使用GIO提供的服务，请您务必于使用GIO服务之前完成合规工作**

## 收集的数据

按照 GDPR 的界定，GrowingIO 属于数据处理方，这是因为 GrowingIO 会按照客户的指示代表客户收集和处理数据。我们的客户则是数据控制方，他们拥有所有相关权利，可以使用接口随时控制是否开启数据收集和处理。

收集信息是为了您的网站向所有用户提供更好的服务。GrowingIO Web JS SDK 将会收集使用的浏览器信息，网络信息。使用 Cookie 来存储 SDK 自动生成的访问用户ID。

### 关于Cookie

GrowingIO Web JS SDK主要使用 Cookie 来存储SDK 自动生成的访问用户ID（用于标记访问用户）；不获取客户网站Cookie中内容。用户可以停用 Cookie 或删除任何单个 Cookie 记录。

### 关于 IP 地址

GrowingIO使用 IP 地址来分析访问者的地理位置，以及确保此服务和我们客户的安全。客户可以采取 IP 掩盖做法，以便 GrowingIO 仅使用所收集的 IP 地址的一部分，而不使用完整的 IP 地址。此外，客户也可以自由使用我们的 IP 替换功能来替换 IP 地址。

## 合规步骤

### GDPR 

[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO 作为数据处理方，为符合 GDPR， Web JS SDK 提供设置接口，可在用户未同意隐私协议时，初始化时将`dataCollect`设置为 `false` ，禁止数据采集；<br/>在用户同意隐私协议时，调用`setDataCollect`设置为 `true`，开启数据采集。<br/>在用户同意隐私协议后，初始化时将`dataCollect`设置为 `true` ，开启数据采集。

```js
// 用户是否同意隐私协议 boolean 类型
var isAgreePolicy = <用户是否同意隐私协议>
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost', 
  version: '1.0.0',
  dataCollect: isAgreePolicy,
  debug: true  // 打开debug调试能力
});
gdp('send');

// 未同意隐私协议时，弹出隐私协议弹框，用户同意隐私协议后
gdp('setDataCollect', true);
```

## 常见问题

### Q：dataCollect 设置 false 之后，发现事件数据不上报

A：SDK关闭数据采集 dataCollect 设置 false 时，所有事件都不采集。只有开启了数据采集 dataCollect 为 ture 时，事件数据才会采集上报


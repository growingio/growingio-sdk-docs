---
sidebar_position: 4
title: 小程序 SDK 合规说明
---

## 收集的数据
按照 GDPR 的界定，GrowingIO 属于数据处理方，这是因为 GrowingIO 会按照客户的指示代表客户收集和处理数据。我们的客户则是数据控制方，他们拥有所有相关权利，可以使用接口随时控制是否开启数据收集和处理。

收集信息是为了您的网站向所有用户提供更好的服务。GrowingIO 小程序 SDK 将会收集小程序运行相关的环境信息，包括微信版本号，小程序场景值，设备信息，网络信息。使用 localstorage 来存储 SDK 自动生成的访问用户ID。采集的用户信息都是客户小程序需要请求用户授权的，譬如： openid，微信头像，昵称，定位。
## 合规步骤
### 隐私保护指引
请参考[微信小程序用户隐私保护](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/)

## 数据加密传输说明
默认情况下，SDK关闭数据加密，可以通过初始化时设置 compress: true 打开数据加密。
使用请参考[SDK数据加密传输 compress](/docs/miniprogram/initSettings#compress)。

## 数据存储发送策略说明
小程序 SDK 采集的用户行为数据采用节流1秒钟(即如果有数据则1秒钟发一次)发送的策略，当节流队列里大于50条行为数据后立即打包发一次，行为数据缓存采用内存缓存。当用户开启强制登录模式(forceLogin 设置为 true)，在调用 identify 接口之前，行为数据采用内存缓存，调用 identify 后立即上报缓存的行为数据。

### GDPR 
[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO 作为数据处理方，为符合 GDPR，小程序 SDK 提供设置接口，可在用户未同意隐私协议时，初始化时将`dataCollect`设置为 `false` ，禁止数据采集。<br/>在用户同意隐私协议后，调用`setDataCollect`设置为 `true`，开启数据采集。

```js
gdp('init', 'your GrowingIO accountId', 'your dataSourceID', 'your AppId', {
  host: 'your apiServerHost', 
  version: '1.0.0',
  dataCollect: false,
  debug: true  // 打开debug调试能力
});


// 如果用户未同意隐私协议，弹出隐私协议弹框，用户同意隐私协议后，设置开启数据采集。
gdp('setDataCollect', true);

// 如果同意隐私协议，设置开启数据采集。可写在 app.js 的 onshow 方法中
gdp('setDataCollect', true);
```


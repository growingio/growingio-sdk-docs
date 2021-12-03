---
title: 常见问题
sidebar_position: 6
---

### 集成SDK后，为什么接收不到数据？
* host 配置错误
* 没有在微信小程序后台添加请求服务器域名
* host是否可以正常访问

### 用户信息保护，以及 GDPR 该怎么设置？
GrowingIO 全面支持 欧盟 《一般数据保护条例》；

使用场景：遵守欧盟法律；控制小程序是否需要采集数据

影响：设置为 false 时 1. 所有数据不采集不上报；2. 元素将无法圈选；3.数据端数据明显下降
两种设置方式：1. 初始化时设置 dataCollect 配置项   2. 调用 setDataCollect 设置
```js
// 用户未同意隐私协议禁止采集数据
gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
  host: 'your apiServerHost‘,
  dataCollect: false
});
// 用户同意隐私协议后开启采集数据 (默认)
gdp('setDataCollect', true);

```

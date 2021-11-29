---
sidebar_position: 6
title: 常见问题 
---

### 集成SDK后，为什么接收不到数据？
* host配置错误
* host地址无法正常访问
  
### JS SDK放在 head 标签中，如果报错，会不会影响页面加载、产品的使用？以及是否可以不放在 head 标签中？

经实际测试和统计，SDK稳定性达到应用级要求，出现报错的几率很低，即使小概率出现报错也不会影响页面加载和用户产品使用；为了确保数据采集的完整性和准确性建议SDK 放在 head 标签中，如果放在其他位置，会存在数据丢失的概率

### H5页面在 官网、小程序、APP 中使用该怎么集成SDK？

* H5 页面集成 Web JS SDK
* 提供与原生App打通访问用户数据： [Hybrid打通插件](/docs/webjs/plugins#6-hybrid打通插件)
* 提供与小程序打通访问用户数据：[小程序内嵌页打通插件](//docs/webjs/plugins#7-小程序内嵌页打通插件)

### 用户信息保护，以及 GDPR 该怎么设置？

GrowingIO 全面支持 欧盟 《一般数据保护条例》； 

使用场景：遵守欧盟法律；控制小程序是否需要采集数据

影响：设置为 false 时 1. 所有数据不采集不上报；2. 元素将无法圈选；3.数据端数据明显下降
两种设置方式：1. 初始化时设置 dataCollect 配置项   2. 调用 setDataCollect 设置
```js
// 用户未同意隐私协议禁止采集数据
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost‘,
  dataCollect: false  
});
// 用户同意隐私协议后开启采集数据 (默认)
gdp('setDataCollect', true); 

```
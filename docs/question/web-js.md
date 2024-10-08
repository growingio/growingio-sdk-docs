---
sidebar_position: 4
title: Web JS 常见问题
---

### 1. H5页面在 官网、小程序、APP 中使用该怎么集成SDK？

**A:**

- H5 页面集成 Web JS SDK
- 提供与原生App打通访问用户数据： [Hybrid打通插件](/docs/webjs/plugins/hybridAdapter)
- 提供与小程序打通访问用户数据：[小程序内嵌页打通插件](/docs/webjs/plugins/embeddedAdapter)

### 3. 跨域问题 has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present

**A:** 需要客户服务端在Nginx添加请求头

```java
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Credentials: true;
```

### 4. dataCollect 设置 false 之后，发现事件数据不上报，为什么？

**A：** SDK关闭数据采集 dataCollect 设置 false 时，所有事件都不采集。只有开启了数据采集 dataCollect 为 ture 时，事件数据才会采集上报

### 5. JSSDK放在 head 标签中，如果报错，会不会影响页面加载、产品的使用？以及是否可以不放在 head 标签中？

**A：** 经实际测试和统计，SDK稳定性达到应用级要求，出现报错的几率很低，即使小概率出现报错也不会影响页面加载和用户产品使用；为了确保数据采集的完整性和准确性建议SDK 放在 head 标签中，如果放在其他位置，会存在数据丢失的概率

### 6. 用户信息保护，以及 GDPR 该怎么设置？

**A：** 参考[Web JS SDK合规说明](/knowledge/compliance/webCompliance)

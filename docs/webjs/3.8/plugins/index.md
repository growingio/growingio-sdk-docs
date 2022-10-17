---
slug: /webjs/3.8/plugins
title: 插件
---

以下我们列出了所有WebJS SDK支持的插件，请按需加载使用。

一般只要您加载了插件功能会自动加载并启用，如果您不想使用其中的功能，移除对应插件即可。

所有的插件默认打包为 es5 ，因此您不用担心基本的浏览器兼容问题。

但由于某些插件（例如半自动埋点浏览）依赖于一些现代浏览器的api，因此存在部分浏览器兼容问题，请注意查看该插件的浏览器兼容性说明。

插件在未明确标明有互斥的情况下可同时多个以数组的形式进行一次性注册。例：

```js
gdp('registerPlugins', [gioEventAutoTracking, gioCompress, gioImpressionTracking]);
```

### 无埋点插件（gioEventAutoTracking）

自动采集 `click`、`change`、`submit` 事件的插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/eventAutoTracking)

### 半自动埋点浏览插件（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件的插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/impressionTracking)

### 小程序内嵌页打通插件（gioEmbeddedAdapter）

当您的web页面作为小程序内嵌页使用且有需要打通用户信息，将采集信息合并至小程序项目分析时使用的插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/embeddedAdapter)

### 数据加密压缩插件（gioCompress）

上报请求的数据进行加密压缩。<br/>
[参考文档](/docs/webjs/3.8/plugins/compress)

### App内嵌页打通插件（gioHybridAdapter）

当您的web页面作为Hybrid内嵌页使用将采集信息合并至Native项目分析时使用的插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/hybridAdapter)

### Web圈选辅助插件（gioWebCircle）

当您的web页面使用无埋点时，可以对页面节点进行无埋点圈选以获取分析数据。此时，您需要在SDK中集成此插件，以支持圈选工具的通信连接。<br/>
[参考文档](/docs/webjs/3.8/plugins/webCircle)

### App内嵌页圈选辅助插件（gioHybridCircle）

当您的web页面作为Hybrid内嵌页使用且有圈选需求时，自动处理圈选逻辑的插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/hybridCircle)

### 性能监控插件（gioPerformance）

提供页面首屏加载监控、错误监控和网络请求监控的全方位性能监控采集插件。<br/>
[参考文档](/docs/webjs/3.8/plugins/performance)

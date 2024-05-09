---
sidebar_position: 5
title: 插件
---

以下我们列出了所有小程序 SDK 支持的插件，请按需加载使用。

一般只要您加载了插件功能会自动加载并启用，如果您不想使用其中的功能，移除对应插件即可。

插件在未明确标明有互斥的情况下可同时多个以数组的形式进行一次性注册。例：

```js
gdp('registerPlugins', [
  gioEventAutoTracking,
  gioCompress,
  gioImpressionTracking,
]);
```

插件合集：
**<font size="3">[https://assets.giocdn.com/sdk/minip/4.2.0/plugins.zip](https://assets.giocdn.com/sdk/minip/4.2.0/plugins.zip)</font>**<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

### 无埋点（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change` 事件的插件。<br />
[参考文档](/docs/miniprogram/plugins/eventAutoTracking)

### 数据加密压缩（gioCompress）

上报请求的数据进行加密压缩。<br />
[参考文档](/docs/miniprogram/plugins/compress)

### 半自动埋点浏览（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件的插件。<br/>
[参考文档](/docs/miniprogram/plugins/impressionTracking)

### A/B测试（gioABTest）

用于A/B测试功能的插件。<br />
[参考文档](/docs/miniprogram/plugins/abtest)

### 多实例（gioMultipleInstances）

当您的小程序需要使用两套不同采集逻辑和数据双发时使用的插件。<br/>
[参考文档](/docs/miniprogram/plugins/multipleInstances)

### 性能监控（gioPerformance）

提供小程序首屏加载监控、错误监控和网络请求监控的全方位性能监控采集插件。<br/>
[参考文档](/docs/miniprogram/plugins/performance)

### 第三方数据转发（gioAdapters）

为了方便给已经集成了其他第三方厂商数据采集 SDK 的客户快速转入我们的采集 SDK，我们提供了针对各个第三方的数据转发服务来作为一个过渡的方案。<br/>
[参考文档](/docs/webjs/plugins/adapters)

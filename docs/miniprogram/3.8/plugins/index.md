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
**<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.12/plugins.zip></font>**<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

## 无埋点插件（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change`、`submit` 事件的插件。<br />
[参考文档](/docs/miniprogram/3.8/plugins/eventAutoTracking)

## 半自动埋点浏览插件（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件的插件。<br/>
[参考文档](/docs/miniprogram/3.8/plugins/impressionTracking)

## 数据加密压缩插件（gioCompress）

上报请求的数据进行加密压缩。<br />
[参考文档](/docs/miniprogram/3.8/plugins/compress)

## 多项目打通插件（gioMultiIntegrate）

当且仅当开发小程序时使用独立开发的分包 **（即主包与分包不在同一项目中且不同框架时）** 时，插件用于打通不同框架间用户数据和页面数据，合并为一个 SDK 运行逻辑。<br />
[参考文档](/docs/miniprogram/3.8/plugins/multiIntegrate)

## 性能监控

提供小程序首屏加载监控、错误监控和网络请求监控的全方位性能监控采集插件。<br/>
[参考文档](/docs/miniprogram/3.8/plugins/performance)

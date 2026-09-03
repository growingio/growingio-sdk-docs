---
sidebar_position: 1
title: 功能插件
slug: /framework/uniappx/plugins
---

SDK 的插件能力需要在初始化成功后通过 `registerPlugins` 显式启用。请在业务调用插件 API 前完成注册。

| 插件 | 适用平台 | 用途 | 文档 |
| --- | --- | --- | --- |
| `gioEventAutoTracking` | Web、Android App、iOS App、微信小程序：点击和变更；HarmonyOS App：仅点击 | 无埋点交互采集 | [无埋点](./event-autotracking.md) |
| `gioABTest` | Web、Android App、iOS App、HarmonyOS App、微信小程序 | 获取实验层变量和自动上报实验命中 | [ABTest](./abtest.md) |
| `gioShareTracking` | 微信小程序 | 采集分享、朋友圈和收藏 | [分享采集](./share-tracking.md) |

`registerPlugins` 会忽略没有 `name` 的插件项。至少成功启用一个可用插件时返回 `true`；重复注册同名插件会被跳过。

## 同时注册多个插件

```js
gdp('registerPlugins', [
  {
    name: 'gioEventAutoTracking'
  },
  {
    name: 'gioABTest',
    options: {
      abServerUrl: 'https://ab.growingio.com'
    } as UTSJSONObject
  },
  {
    name: 'gioShareTracking'
  }
] as Array<UTSJSONObject>)
```

注册时机：初始化之后、业务 API 调用之前。

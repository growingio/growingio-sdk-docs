---
sidebar_position: 1
title: GrowingIO uni-app SDK（HarmonyOS）
slug: /framework/uniapp
---

本文档面向 SDK 使用者，介绍 `gio-uniapp-autotracker` 在传统 uni-app（Vue 3）工程中的集成方式、初始化配置、数据采集 API 和功能插件。

## 简介

`gio-uniapp-autotracker` 是面向传统 uni-app Vue 3 工程的数据采集 SDK，以 ESM JavaScript + `.d.ts` 形式交付，同时提供 npm 包和 `uni_modules` 集成包两种接入渠道。集成后，SDK 会通过全局 Vue mixin 自动接管 App / Page 生命周期，采集 `VISIT`、`PAGE`、`APP_CLOSED` 等基础事件，并通过全局 `gdp(...)` 提供 `track`、用户身份、用户属性、动态开关和地理位置等 API。

业务侧只通过 `gdp()` 调用 SDK，SDK 不向页面暴露 tracker 实例或 `$gio` 对象；只有显式注册的客户插件会在 `install(growingio)` 中收到内部实例。自动页面 / App 生命周期采集不要求页面代码配合。

## 接入前确认

- 业务工程使用 HBuilderX 打开并编译到 HarmonyOS 运行目标。
- 同一个应用内只允许加载一份 SDK，不要同时通过 npm 和 `uni_modules` 引入。
- 无埋点是构建期能力，需要在 `vite.config.ts` 中配置 SDK 的 Vite 插件（且必须排在 `uni()` 之前）；不配置时基础采集和 API 仍可正常使用。
- 根入口会在客户项目中自动声明全局 `gdp`，无需额外的 `.d.ts` 文件。

支持平台：

| 平台 | 状态 |
| --- | --- |
| HarmonyOS App | 可用 |

> Android、iOS 及各小程序平台暂不支持，接入时请勿选择对应编译目标。

HarmonyOS 端说明：

- SDK 通过 `uni` 宿主 API 完成系统信息、网络状态、存储和请求等平台能力调用；宿主缺失必需 API 时初始化会失败。
- 无埋点基于 Vite 构建期模板插桩实现；输入框完成事件按 `blur → confirm → change` 优先级选择插桩，传统 App 不转发输入框的原生 `change`，业务应使用 `@blur` / `@confirm`。
- `.nvue` 页面不在模板插桩范围内，编译时会产生构建告警。
- 每次升级 SDK、Vite 配置或 uni-app 模板后，都应重新编译 HarmonyOS 目标并完成一次真实编译与上报验证。

## 文档导航

| 文档 | 说明 |
| --- | --- |
| [集成](./integration.md) | 安装方式、uni_modules 目录、无埋点构建依赖与平台支持 |
| [初始化配置](./configuration.md) | 入口初始化、全部初始化配置项、会话模型与初始化验证 |
| [数据采集 API](./apis.md) | `track`、用户身份、用户属性、动态开关、地理位置、插件注册 |
| [功能插件](./plugins/index.md) | 无埋点采集 `gioEventAutoTracking` |
| [版本记录](./version.md) | SDK 历史版本与各版本变更内容 |

## 最小接入示例

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-autotracker'

export function createApp() {
  const app = createSSRApp(App)
  gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
  gdp('init', 'account-id', 'data-source-id', {
    uniVue: app,
    serverUrl: 'https://napi.growingio.com',
    dataCollect: true,
  })
  return { app }
}
```

## 公开能力一览

```ts
gdp('registerPlugins', plugins)
gdp('init', accountId, dataSourceId, options)
gdp('track', eventName, attributes?)
gdp('setUserId', userId, userKey?)
gdp('clearUserId')
gdp('identify', deviceId)
gdp('getGioInfo')
gdp('setUserAttributes', attributes)
gdp('setOptions', { dataCollect })
gdp('setLocation', latitude, longitude)
gdp('clearLocation')
```

## 数据发送前提

- SDK 初始化成功后才会接收生命周期和 API 调用；初始化失败时，除 `registerPlugins` 外的 API 调用返回 `false`，`getGioInfo` 返回 `null`。
- `dataCollect: false` 时，事件不会进入上报队列。
- `forceLogin: true` 且 `identify` 尚未调用成功时，事件只入队不上报。
- 调试阶段可设置 `debug: true`，控制台输出 `[GrowingIO Debug]:` 前缀的操作标签与即将派发的协议事件数组；不会输出队列内部元数据，也不会改变隐私、重试或采集行为。

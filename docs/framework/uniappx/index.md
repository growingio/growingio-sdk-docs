---
sidebar_position: 1
title: GrowingIO uni-app x SDK
slug: /framework/uniappx
---

本文档面向 SDK 使用者，介绍 `gio-uniappx-autotracker` 在 uni-app x 工程中的集成方式、初始化配置、常用 API 和功能插件。

## 简介

`gio-uniappx-autotracker` 以 `uni_modules` 插件形式交付，不需要业务工程额外构建 SDK。集成后，SDK 会自动采集访问和页面等基础事件；App 和微信小程序进入后台时会尽力采集 `APP_CLOSED`。SDK 同时提供 `gdp(...)` API 用于自定义事件、用户身份、配置和插件能力。

## 接入前确认

- 业务工程需使用 HBuilderX / uni-app x `5.08` 或更高版本打开和编译；SDK 包内 `package.json` 是版本范围的事实来源。
- 发布包只包含 `uni_modules/gio-uniappx-autotracker`，不包含根目录 demo 和 `uni-link-x` / `uts-openSchema` 示例依赖。业务工程不要依赖这些 demo 专用模块。
- 若手工复制 SDK 并启用无埋点，需安装 SDK 的 Vite 插件依赖；详细步骤见[集成](./integration.md)。仅查看根目录 demo 的运行结果不能替代业务工程目标端的真实编译与上报验证。

覆盖平台：

| 平台 | 状态 |
| --- | --- |
| Web | 可用 |
| Android App | 可用 |
| iOS App | 可用 |
| HarmonyOS App | 可用 |
| 微信小程序 | 可用 |

HarmonyOS App 使用 SDK 包内的 `utssdk/app-harmony` 原生入口。基础生命周期、公开 API、`gioEventAutoTracking` 和 `gioABTest` 均在正式支持范围内；其中无埋点仅支持点击事件，`change` 等变更事件受鸿蒙框架限制不支持。微信小程序专属分享插件不适用。Harmony VDOM 支持 tabBar 点击采集，Harmony Vapor 因框架未提供等价 hook 不支持该项。每次升级 SDK、Vite 配置或模板后，都应重新编译实际 Harmony 目标并完成一次真实上报验证。

## 文档导航

| 文档 | 说明 |
| --- | --- |
| [集成](./integration.md) | 安装目录、发布边界、无埋点构建依赖与平台支持 |
| [初始化配置](./configuration.md) | 入口初始化、初始化配置项、Web 扩展与初始化验证 |
| [数据采集 API](./apis.md) | `track`、用户身份、用户属性、动态开关、地理位置 |
| [功能插件](./plugins/index.md) | 无埋点、ABTest 与微信小程序分享采集 |

## 最小接入示例

```js
import { createSSRApp } from 'vue'
import App from './App.uvue'
import { gdp } from '@/uni_modules/gio-uniappx-autotracker/gdp.uts'

export function createApp() {
  const app = createSSRApp(App)

  gdp('init', {
    app: app,
    projectId: 'YOUR_PROJECT_ID',
    dataSourceId: 'YOUR_DATA_SOURCE_ID',
    appId: 'YOUR_APP_ID',
    serverUrl: 'https://napi.growingio.com',
    appVersion: '1.0.0',
    dataCollect: true,
    debug: false,
    forceLogin: false,
    idMapping: false
  })

  return { app }
}
```

## 公开能力一览

```js
gdp('init', options)
gdp('track', eventName, properties)
gdp('setUserId', userId)
gdp('setUserId', userId, userKey)
gdp('clearUserId')
gdp('identify', assignmentId)
gdp('setUserAttributes', attributes)
gdp('setOptions', options)
gdp('setLocation', latitude, longitude)
gdp('clearLocation')
gdp('registerPlugins', plugins)
gdp('getABTest', layerId, callback)
```

## 身份一致性

- Web 每次构建事件时都会重新读取存储中的 `userId` 和 `userKey`，以感知同域其他标签页或 SDK 实例的身份更新。
- App（Android、iOS、HarmonyOS）和微信小程序首次读取后使用内存缓存；调用 `setUserId`、`clearUserId` 等 SDK API 时，持久化存储和缓存会同步更新。
- 不要直接修改 SDK 的身份存储 key。平台边界和跨标签页生效条件见[身份存储与跨端一致性](./configuration.md#身份存储与跨端一致性)。

## 数据发送前提

SDK 初始化成功后才会接收生命周期和 API 调用。初始化失败时，API 调用返回 `false`。`dataCollect: false` 时，事件不进入上报队列。`forceLogin: true` 且 `identify` 尚未调用成功时，事件队列暂停释放。调试阶段可设置 `debug: true`，通过控制台日志确认初始化、生命周期和上报状态。

---
sidebar_position: 1
title: GrowingIO uni-app SDK（HarmonyOS）
slug: /framework/uniapp
---

GrowingIO uni-app SDK `1.0.0` 仅面向使用传统 uni-app（Vue 3）开发的 HarmonyOS App。

## 简介

SDK 以 ESM JavaScript 和 `.d.ts` 交付，提供 npm 包 `gio-uniapp-sdk` 和 `uni_modules` 模块 `gio-uniapp-autotracker`。集成后，SDK 会通过全局 Vue mixin 监听 App 和页面生命周期，采集 `VISIT`、`PAGE`、`APP_CLOSED` 等基础事件。业务可通过全局 `gdp(...)` 记录自定义事件，设置用户身份、用户属性、采集开关和位置。

业务侧只通过 `gdp()` 调用 SDK，SDK 不向页面暴露 tracker 实例或 `$gio` 对象；只有显式注册的客户插件会在 `install(growingio)` 中收到内部实例。自动页面 / App 生命周期采集不要求页面代码配合。

## 接入前确认

- 业务工程使用 HBuilderX 打开并编译到 HarmonyOS 运行目标。
- 同一个应用内只允许加载一份 SDK，不要同时通过 npm 和 `uni_modules` 引入。
- 模板交互的无埋点采集需要在 `vite.config.ts` 中配置 SDK 的 Vite 插件，并将其排在 uni-app 插件之前。TabBar 点击由已注册的无埋点插件通过页面生命周期采集。
- 根入口会在客户项目中自动声明全局 `gdp`，无需额外的 `.d.ts` 文件。

## 文档导航

| 文档 | 说明 |
| --- | --- |
| [集成](./integration.md) | 鸿蒙工程的安装方式、`uni_modules` 路径和集成验证 |
| [初始化配置](./configuration.md) | 入口初始化、全部初始化配置项、会话模型与初始化验证 |
| [数据采集 API](./apis.md) | `track`、用户身份、用户属性、动态开关、地理位置、插件注册 |
| [功能插件](./plugins/index.md) | 无埋点采集 `gioEventAutoTracking` |
| [版本记录](./version.md) | 各版本变更内容和发布包下载链接 |

## 最小接入示例

以下示例启用基础采集。需要等待用户同意时，请参考[初始化采集开关](./configuration.md#datacollect)。

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-sdk'

export function createApp() {
  const app = createSSRApp(App)
  gdp('init', 'account-id', 'data-source-id', {
    uniVue: app,
  })
  return { app }
}
```

## HarmonyOS App API 一览

```ts
gdp('registerPlugins', plugins)
gdp('init', accountId, dataSourceId, options)
gdp('track', eventName, attributes?)
gdp('setUserId', userId, userKey?)
gdp('clearUserId')
gdp('identify', deviceId)
gdp('setUserAttributes', attributes)
gdp('setOptions', { dataCollect })
gdp('setLocation', latitude, longitude)
gdp('clearLocation')
```

## 数据发送前提

- `init` 返回 `true` 后，SDK 可暂存部分生命周期和 API 调用，待运行时就绪后处理。
- `dataCollect: false` 时，新的行为事件不会进入上报队列。历史队列的发送时机见[采集开关](./apis.md#1开启关闭数据采集datacollect)。
- `forceLogin: true` 且 `identify` 尚未调用成功时，事件只入队不上报。
- 调试阶段可设置 `debug: true`，控制台输出 `[GrowingIO Debug]:` 前缀的操作标签与即将派发的协议事件数组；不会输出队列内部元数据，也不会改变隐私、重试或采集行为。

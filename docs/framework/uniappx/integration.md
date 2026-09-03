---
sidebar_position: 2
title: 集成
---

本文档说明 SDK 的插件目录、发布边界与平台支持。初始化参数请参阅[初始化配置](./configuration.md)。

## 1. 放置插件目录

把 SDK 插件目录完整放入业务工程：

```text
uni_modules/gio-uniappx-autotracker
```

业务工程不需要额外构建 SDK。HBuilderX 会随 uni-app x 工程直接编译 `uni_modules` 下的 UTS 代码；业务工程需使用 HBuilderX / uni-app x `5.08` 或更高版本打开和编译，具体版本范围以 SDK 包内 `package.json` 为准。

SDK 发布包只包含 `uni_modules/gio-uniappx-autotracker`，不包含根目录 demo 和 `uni-link-x` / `uts-openSchema` 示例依赖。请完整复制 SDK 目录，不要从 demo 中挑选或依赖这些示例模块。

发布或复制插件时请保留以下关键文件：

```text
uni_modules/gio-uniappx-autotracker/gdp.uts
uni_modules/gio-uniappx-autotracker/plugin.uts
uni_modules/gio-uniappx-autotracker/package.json
uni_modules/gio-uniappx-autotracker/README.md
uni_modules/gio-uniappx-autotracker/build/vite-plugin.mjs
uni_modules/gio-uniappx-autotracker/utssdk/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/interface.uts
uni_modules/gio-uniappx-autotracker/utssdk/web/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/web/package.json
uni_modules/gio-uniappx-autotracker/utssdk/mp-weixin/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/app-android/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/app-android/config.json
uni_modules/gio-uniappx-autotracker/utssdk/app-ios/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/app-ios/config.json
uni_modules/gio-uniappx-autotracker/utssdk/app-harmony/index.uts
uni_modules/gio-uniappx-autotracker/utssdk/app-harmony/config.json
```

如果需要启用 `gioEventAutoTracking` 无埋点点击/变更采集，还需要在业务工程根目录 `vite.config.js` 配置 SDK 插件。`uni_modules` 目录里的 Vite 插件不会被 HBuilderX 自动加载，业务工程必须显式配置：

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { gioUniappxAutoTrack } from './uni_modules/gio-uniappx-autotracker/build/vite-plugin.mjs'

export default defineConfig({
  plugins: [
    gioUniappxAutoTrack(),
    uni(),
  ],
})
```

插件依赖已在插件目录的 `package.json` 中声明。通过插件市场安装时由安装流程处理；**手工复制且启用无埋点** `uni_modules/gio-uniappx-autotracker` 时，先在该目录执行一次包管理器安装，再启动 HBuilderX 编译：

```bash
cd uni_modules/gio-uniappx-autotracker
npm install --omit=dev
```

不要把生成的 `node_modules` 提交或打进 SDK 发布包；它属于业务工程本地的 Vite 编译依赖。未启用无埋点时，业务工程不会加载 SDK 的 Vite 插件，无需仅为基础采集、ABTest 或微信分享采集安装这些依赖。

## 1.1 平台支持

SDK 正式支持 Web、Android App、iOS App、HarmonyOS App 和微信小程序。HarmonyOS App 直接使用上述 `utssdk/app-harmony` 原生入口；完整复制 SDK 目录即可，不需要业务工程再添加 App JS 回退层。

- 基础自动采集、公开 API、`gioEventAutoTracking` 和 `gioABTest` 均适用于 HarmonyOS App；其中 `gioEventAutoTracking` 仅支持点击事件，变更事件受鸿蒙框架限制不支持。
- `gioShareTracking` 仅适用于微信小程序。
- Harmony VDOM 支持通过 `onTabItemTap` 采集 tabBar 点击；Harmony Vapor 没有框架等价 hook，因此不支持该单项。详情见[无埋点](./plugins/event-autotracking.md#tabbar)。
- 每次升级 SDK、Vite 配置或模板后，都要重新编译实际的 Harmony 目标，并完成一次初始化、页面、交互和上报验证；源码检查不能替代目标端验证。

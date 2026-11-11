---
sidebar_position: 1
title: 功能插件总览
---

SDK 的扩展能力通过插件提供。在 `main.ts` 中先调用 `gdp('registerPlugins', plugins)`，再调用 `gdp('init', ...)`。

```ts
gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
})
```

## 当前可用插件

| 插件名 | 说明 | 适用平台 |
| --- | --- | --- |
| `gioEventAutoTracking` | 无埋点采集，支持模板点击、控件变更和原生 TabBar 点击 | HarmonyOS App |

## 客户插件

业务可以注册自定义插件。首次 `init` 通过同步校验并启动异步初始化后，SDK 按注册顺序调用客户插件的 `install(growingio)`，传入 `GioPluginRuntime` 实例。此时 SDK 可能仍在恢复本地状态。需要等 SDK 就绪的插件逻辑可等待 `growingio.whenReady()` 返回 `true`。

```ts
import gdp, { type GioPlugin } from 'gio-uniapp-sdk'
// uni_modules 接入时从 '@/uni_modules/gio-uniapp-autotracker/index.js' 导入

const myPlugin: GioPlugin = {
  name: 'myPlugin',
  install(growingio) {
    // 通过内部实例扩展 SDK 能力
  },
}

gdp('registerPlugins', [myPlugin])
```

约束：

- 客户插件必须提供非空 `name` 和 `install` 函数。
- 插件名不能重复，重复名称会使整批注册失败。
- 单个客户插件 `install` 抛错不会阻止其他插件安装，仅输出告警。
- 页面代码仍只能调用 `gdp()`；`GioPluginRuntime` 只会作为显式注册插件的安装参数出现。

## 插件文档

- [无埋点采集](./event-autotracking.md)：插件注册与 Vite 构建配置、采集范围、隐私规则、插桩边界

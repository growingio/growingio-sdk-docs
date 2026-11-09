---
sidebar_position: 1
title: 功能插件总览
---

SDK 的扩展能力通过插件提供。插件必须在首次 `gdp('init', ...)` 之前通过 `gdp('registerPlugins', plugins)` 注册：

```ts
gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
})
```

## 当前可用插件

| 插件名 | 说明 | 适用平台 |
| --- | --- | --- |
| `gioEventAutoTracking` | 无埋点采集：点击、输入变更等模板交互事件 | HarmonyOS App |

## 客户插件

除内置插件外，业务可以注册自定义插件，在首次初始化成功后通过 `install(growingio)` 收到内部实例 `GioPluginRuntime`：

```ts
import gdp, { type GioPlugin } from 'gio-uniapp-autotracker'

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

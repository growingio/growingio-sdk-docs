---
sidebar_position: 2
title: 集成
---

本文档说明 SDK 的安装方式、完整的工程集成示例与平台支持。初始化参数请参阅[初始化配置](./configuration.md)，无埋点插件配置请参阅[无埋点采集](./plugins/event-autotracking.md)。

## 1. 环境要求

| 项目 | 要求 |
| --- | --- |
| uni-app 编译基准 | HBuilderX `5.24` / uni-app CLI `3.0.0-5020420260812001`（Vue `3.4.21`） |
| Vue 版本 | Vue 3（工程必须使用 `createSSRApp` 创建应用） |
| 构建工具 | Node ≥ `20.19`（构建机器需要） |
| 编译目标 | HarmonyOS App |

> 不承诺 Vue2、Web、nvue 或 uni-app x 兼容。

## 2. 安装方式

选择以下任意一种方式安装，同一个应用不要同时加载两份 SDK，避免出现重复的初始化实例、队列与存储命名空间：

### 方式一：npm

```bash
pnpm add gio-uniapp-autotracker
```

运行时从包名导入：

```ts
import gdp from 'gio-uniapp-autotracker'
```

### 方式二：uni_modules

从 GitHub Release 下载 `gio-uniapp-autotracker-版本-uni_modules.tgz`，解压后将 `uni_modules/gio-uniapp-autotracker` 完整放入项目根目录。

运行时导入：

```ts
import gdp from '@/uni_modules/gio-uniapp-autotracker/index.js'
```

两种渠道均为 ESM JavaScript + `.d.ts`，共用公共代码，仅包元数据不同。升级 `uni_modules` 时必须完整替换模块目录，不能覆盖安装后留下旧文件。

## 3. uni_modules 目录结构

发布或复制插件时请保留完整目录，不要从发布包中挑选文件：

```text
uni_modules/gio-uniapp-autotracker/
  package.json                 # SDK 清单，事件 sdkVersion 来源
  index.js / index.d.ts        # 运行时入口
  autotrack.js                 # 无埋点运行时模块
  vite.js                      # 构建期插桩插件
```

`package.json` 中的版本号会作为事件的 `sdkVersion` 上报；不要手工修改。

## 4. 完整集成示例

以下示例展示一个标准 uni-app Vue 3 工程接入 SDK 的全部改动点。

### 4.1 工程目录结构

```text
my-uniapp-app/
├── src/                        # CLI 工程；HBuilderX 工程为项目根目录
│   ├── main.ts                 # 步骤 1：注册插件并初始化 SDK
│   ├── App.vue                 # 无需改动，SDK 通过 mixin 接管生命周期
│   ├── pages/
│   │   └── index/
│   │     └── index.vue         # 步骤 2：页面中调用 gdp()
│   ├── manifest.json
│   ├── pages.json
│   └── uni.scss
├── vite.config.ts              # （仅启用无埋点时需要，见功能插件文档）
└── package.json
```

### 4.2 步骤 1：应用入口初始化（src/main.ts）

在 `main.ts` 中注册插件、调用初始化，并把 Vue 应用作为 `uniVue` 传给 SDK：

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-autotracker'

// uni_modules 接入时改为：
// import gdp from '@/uni_modules/gio-uniapp-autotracker/index.js'

export function createApp() {
  const app = createSSRApp(App)

  // registerPlugins 必须在首次 init 之前调用
  gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])

  gdp('init', 'YOUR_ACCOUNT_ID', 'YOUR_DATA_SOURCE_ID', {
    uniVue: app,
    serverUrl: 'https://napi.growingio.com',
    dataCollect: true,
  })

  return { app }
}
```

说明：

- `uniVue` 必须传入 `createSSRApp(App)` 返回的实例；SDK 通过它安装全局生命周期 mixin，`App.vue` 和各页面不需要引入生命周期桥接代码。
- 初始化完成后，所有页面可以直接使用全局 `gdp`，无需逐页导入。
- 不需要额外的 `.d.ts` 文件，根入口已声明全局 `gdp` 类型。
- 初始化配置的完整说明见[初始化配置](./configuration.md)。
- 启用无埋点时，还需在业务工程根目录 `vite.config.ts` 配置 Vite 插件，完整配置方法见[无埋点采集](./plugins/event-autotracking.md)。

### 4.3 步骤 2：页面中调用 SDK

`App.vue` 无需任何改动。页面中直接使用全局 `gdp` 发送自定义事件、管理用户身份：

```vue
<script setup lang="ts">
// 全局 gdp 已由 SDK 声明，无需导入

function onPurchase() {
  gdp('track', 'purchase_completed', {
    sku: 'sku-1001',
    price: 99,
    from_recommend: true,
  })
}

function onLogin(userId: string) {
  gdp('setUserId', userId)
}

function onLogout() {
  gdp('clearUserId')
}
</script>

<template>
  <view>
    <button @tap="onPurchase">购买</button>
    <button @tap="onLogin('user-1001')">登录</button>
  </view>
</template>
```

无埋点启用的交互（白名单组件的 `@click` / `@tap` / `@change`）由编译期插桩自动采集，无需手写埋点；隐私保护与插桩边界见[无埋点采集](./plugins/event-autotracking.md)。

### 4.4 完整改动清单

| 文件 | 改动 |
| --- | --- |
| `package.json` | npm 接入时新增 `gio-uniapp-autotracker` 依赖 |
| `uni_modules/gio-uniapp-autotracker/` | uni_modules 接入时完整复制模块目录 |
| `src/main.ts` | 导入 SDK、注册插件、调用 `init` |
| `vite.config.ts` | 配置 `gioUniappAutoTrack()`（仅启用无埋点时需要，见[无埋点采集](./plugins/event-autotracking.md)） |
| `src/App.vue` | 无需改动 |
| 各页面 | 按需调用 `gdp()`；无埋点交互自动采集 |

## 5. 平台支持

| 平台 | 状态 | 说明 |
| --- | --- | --- |
| HarmonyOS App | 可用 | 基础采集、公开 API 与无埋点均在支持范围 |

> Android App、iOS App 及各小程序平台暂不支持。

HarmonyOS App 注意事项：

- SDK 通过 `uni` 宿主 API 读取系统信息、网络状态、执行存储和上报请求；宿主缺失必需 API（如 `getStorageSync`、`request`、`getDeviceInfo` 等）时初始化会失败。
- 无埋点插桩只作用于 Vue 模板编译产物；`.nvue` 页面不在插桩范围内，编译时会产生构建告警。
- 每次升级 SDK、Vite 配置或 uni-app 模板后，都要重新编译 HarmonyOS 目标，并完成一次初始化、页面浏览、交互和上报验证；自动化测试和编译通过不能替代真实端验证。

## 6. 集成验证

1. 使用 HBuilderX 编译并运行 HarmonyOS 目标。
1. 初始化成功后，进入应用首页，控制台出现 `VISIT` / `PAGE` 事件日志（`debug: true` 时输出 `[GrowingIO Debug]:` 前缀）。
1. 切换页面、点击按钮，验证自动事件与无埋点事件。
1. 调用一次自定义事件并检查网络请求：

```ts
gdp('track', 'integration_test', { source: 'manual' })
```

1. 确认采集服务收到事件后，移除或关闭 `debug` 配置。

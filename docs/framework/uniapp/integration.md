---
sidebar_position: 2
title: 集成
---

以下步骤适用于传统 uni-app（Vue 3）开发的 HarmonyOS App。初始化参数请参阅[初始化配置](./configuration.md)。

## 1. 环境要求

| 项目 | 要求 |
| --- | --- |
| HBuilderX | `5.24` 或更高版本，`1.0.0` 鸿蒙端验收使用 `5.34` |
| 应用工程 | 传统 uni-app Vue 3 工程，使用 `.vue` 页面和 `createSSRApp` |
| 构建工具 | Node.js `20.19.0` 或更高版本 |
| 编译目标 | HarmonyOS App |

## 2. 安装方式

选择以下任意一种方式安装，同一个应用不要同时加载两份 SDK，避免出现重复的初始化实例、队列与存储命名空间：

### 方式一：npm

```bash
pnpm add gio-uniapp-sdk
```

运行时从包名导入：

```ts
import gdp from 'gio-uniapp-sdk'
```

### 方式二：uni_modules

从[版本记录](./version.md)下载 `gio-uniapp-autotracker-版本-uni_modules.tgz`，解压并完整复制模块目录。`gio-uniapp-sdk-版本.tgz` 是 npm 渠道的发布包。

| 工程类型 | 模块目录（相对于项目根目录） |
| --- | --- |
| HBuilderX 创建的工程 | `uni_modules/gio-uniapp-autotracker/` |
| 标准 CLI 工程 | `src/uni_modules/gio-uniapp-autotracker/` |

两种工程的 `@` 都指向应用源码目录，运行时使用同一导入路径。

```ts
import gdp from '@/uni_modules/gio-uniapp-autotracker/index.js'
```

两种渠道均提供 ESM JavaScript 和 `.d.ts`，公开 API 相同。升级 `uni_modules` 时请完整替换模块目录，避免留下旧文件。

## 3. uni_modules 目录结构

发布或复制插件时请保留完整目录，不要从发布包中挑选文件：

```text
gio-uniapp-autotracker/
  package.json                 # SDK 清单，事件 sdkVersion 来源
  index.js / index.d.ts        # 运行时入口
  autotrack.js                 # 无埋点运行时模块
  vite.js                      # 构建期插桩插件
  vite-runtime.js              # 构建期解析与插桩实现
  src/                         # SDK 内部模块
  ...
```

`package.json` 中的版本号会作为事件的 `sdkVersion` 上报；不要手工修改。

## 4. 完整集成示例

以下示例采用编译到 HarmonyOS 的 CLI 工程目录。HBuilderX 创建的工程将 `src/` 内的应用文件放在项目根目录。

### 4.1 工程目录结构

```text
my-uniapp-app/
├── src/
│   ├── main.ts                 # 步骤 1：注册插件并初始化 SDK
│   ├── App.vue                 # 无需改动，SDK 通过 mixin 接管生命周期
│   ├── pages/
│   │   └── index/
│   │     └── index.vue         # 步骤 2：页面中调用 gdp()
│   ├── manifest.json
│   ├── pages.json
│   ├── uni_modules/            # 仅 uni_modules 接入时添加
│   │   └── gio-uniapp-autotracker/
│   └── uni.scss
├── vite.config.ts              # 在这里配置模板无埋点插件
└── package.json
```

### 4.2 步骤 1：应用入口初始化（src/main.ts）

在 `main.ts` 中注册插件、调用初始化，并把 Vue 应用作为 `uniVue` 传给 SDK：

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-sdk'

// uni_modules 接入时改为：
// import gdp from '@/uni_modules/gio-uniapp-autotracker/index.js'

export function createApp() {
  const app = createSSRApp(App)

  // 启用无埋点时，在首次 init 之前注册插件。
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
- 需要等待用户同意时，请在初始化时设置 [`dataCollect: false`](./configuration.md#datacollect)。
- 启用模板交互无埋点时，还需在项目根目录的 `vite.config.ts` 中配置 Vite 插件。[无埋点采集](./plugins/event-autotracking.md)列出了 npm、CLI 工程和 HBuilderX 工程的导入路径。

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
    <button @tap="onLogout">退出登录</button>
  </view>
</template>
```

无埋点启用的交互（白名单组件的 `@click` / `@tap` / `@change`）由编译期插桩自动采集，无需手写埋点；隐私保护与插桩边界见[无埋点采集](./plugins/event-autotracking.md)。

### 4.4 完整改动清单

| 文件 | 改动 |
| --- | --- |
| `package.json` | npm 接入时新增 `gio-uniapp-sdk` 依赖 |
| `src/uni_modules/gio-uniapp-autotracker/` | CLI 工程使用 uni_modules 接入时完整复制模块目录，HBuilderX 创建的工程放在根目录下的 `uni_modules/` |
| `src/main.ts` | 导入 SDK、注册插件、调用 `init` |
| `vite.config.ts` | 启用模板交互无埋点时配置 `gioUniappAutoTrack()`，见[无埋点采集](./plugins/event-autotracking.md) |
| `src/App.vue` | 无需改动 |
| 各页面 | 按需调用 `gdp()`；无埋点交互自动采集 |

## 5. 集成验证

1. 在初始化配置中设置 `debug: true`，使用 HBuilderX 编译并运行 HarmonyOS 目标。
2. 进入应用首页后，查看控制台中带 `[GrowingIO Debug]:` 前缀的 `VISIT` 和 `PAGE` 发送日志。
3. 切换页面并点击已启用无埋点的按钮，验证页面和交互事件。
4. 调用一次自定义事件并检查网络请求。

   ```ts
   gdp('track', 'integration_test', { source: 'manual' })
   ```

5. 确认采集服务收到事件后，移除或关闭 `debug` 配置。

升级 SDK 或修改 Vite 配置、页面模板后，重新编译 HarmonyOS 目标并复验这些步骤。

---
title: 版本记录
sidebar_position: 5
---

npm 包名为 `gio-uniapp-sdk`，`uni_modules` 模块 ID 为 `gio-uniapp-autotracker`。

[在 GitHub 查看所有版本](https://github.com/growingio/growingio-sdk-uniapp-autotracker/releases)

## V1.0.0 - 2026-11-11

🎉 首个版本仅支持传统 uni-app（Vue 3）的 HarmonyOS App。

- 🎉 新增基础采集：通过全局 Vue mixin 自动接管 App / Page 生命周期，采集 `VISIT`、`PAGE`、`APP_CLOSED` 事件。
- 🎉 新增 `gdp()` 数据采集 API：`track`、`setUserId` / `clearUserId`、`identify`、`setUserAttributes`、`setOptions`、`setLocation` / `clearLocation`、`registerPlugins`。
- 🎉 新增 npm 与 `uni_modules` 两种集成渠道，均为 ESM JavaScript + `.d.ts` 交付。
- 🎉 新增初始化配置：`uniVue`、`serverUrl`、`appVersion`、`appChannel`、`sessionExpires`、`dataCollect`、`idMapping`、`forceLogin`、`debug`。
- 🎉 新增 `gioEventAutoTracking` 无埋点插件：基于 Vite 构建期模板插桩，采集白名单组件的静态 `@click` / `@tap` / `@change` 监听，上报 `VIEW_CLICK` / `VIEW_CHANGE`。
- 🎉 无埋点元素标识维度：`xpath` 形如 `id#探针事件名`，探针事件名优先取监听器的业务函数路径，无法提取函数路径时回退到原生事件名。`data-title` 主要用于点击文案，写入 `textValue`。点击事件的 `data-index` 和 `data-src` 分别写入 `index` 和 `hyperlink`。
- 🔒 隐私保护：支持 `data-growing-ignore`、`data-growing-sensitive`、`data-growing-track` 标记；密码框的 `VIEW_CHANGE` 事件省略 `textValue`。无法确认类型的动态 `:type` 输入框会跳过采集。
- 🌟 插桩边界保护：动态事件绑定、自定义组件、有歧义的监听器表达式会跳过对应插桩并产生构建告警。HarmonyOS App 可插桩 Vue 会缓存的直接函数引用，如 `@tap="submit"`。

**下载地址**

- `gio-uniapp-autotracker-1.0.0-uni_modules.tgz`：[下载](https://github.com/growingio/growingio-sdk-uniapp-autotracker/releases/download/v1.0.0/gio-uniapp-autotracker-1.0.0-uni_modules.tgz)
- `gio-uniapp-sdk-1.0.0.tgz`：[下载](https://github.com/growingio/growingio-sdk-uniapp-autotracker/releases/download/v1.0.0/gio-uniapp-sdk-1.0.0.tgz)

[GitHub Release v1.0.0](https://github.com/growingio/growingio-sdk-uniapp-autotracker/releases/tag/v1.0.0)

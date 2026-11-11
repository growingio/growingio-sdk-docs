---
title: 版本记录
sidebar_position: 5
---

`gio-uniapp-autotracker` 的历史版本记录。`uni_modules` 发布包可从 GitHub Release 下载，npm 渠道可直接升级依赖版本。

全部历史版本下载地址：[SDK Releases in Github](https://github.com/growingio/growingio-sdk-uniapp-autotracker/releases)

## V1.0.0 - 2026-11-11

🎉 首个版本发布，支持 HarmonyOS App：

- 🎉 新增基础采集：通过全局 Vue mixin 自动接管 App / Page 生命周期，采集 `VISIT`、`PAGE`、`APP_CLOSED` 事件。
- 🎉 新增 `gdp()` 数据采集 API：`track`、`setUserId` / `clearUserId`、`identify`、`getGioInfo`、`setUserAttributes`、`setOptions`、`setLocation` / `clearLocation`、`registerPlugins`。
- 🎉 新增 npm 与 `uni_modules` 两种集成渠道，均为 ESM JavaScript + `.d.ts` 交付。
- 🎉 新增初始化配置：`uniVue`、`serverUrl`、`appVersion`、`appChannel`、`sessionExpires`、`dataCollect`、`idMapping`、`forceLogin`、`debug`。
- 🎉 新增 `gioEventAutoTracking` 无埋点插件：基于 Vite 构建期模板插桩，采集白名单组件的静态 `@click` / `@tap` / `@change` 监听，上报 `VIEW_CLICK` / `VIEW_CHANGE`。
- 🎉 无埋点元素标识维度：`id` 生成 `id#事件名` 形式的 xpath，`data-title` 写入 `textValue`，`data-index` 写入 `index`，`data-src` 写入 `hyperlink`。
- 🔒 隐私保护：支持 `data-growing-ignore`、`data-growing-sensitive`、`data-growing-track` 标记；密码框保留事件但不上报 `textValue`，`file` 与无法确认类型的动态 `:type` 输入框拒绝整条采集。
- 🌟 插桩边界保护：动态事件绑定、自定义组件、歧义 listener 表达式、直接函数引用及 `.nvue` 页面保持源码原样并产生构建告警，业务行为不变。

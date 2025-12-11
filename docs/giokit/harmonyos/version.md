---
title: 版本记录
sidebar_position: 0
---

## [1.4.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.4.0) (2025-12-11)

### Features 功能

* feat: 作为字节码 har 发布，添加混淆规则保留项配置，适配宿主 App 混淆场景

## [1.3.1](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.3.1) (2025-08-28)

### Bug Fixes 修复

* fix: 添加 UseTsHar 标记，以适配 Sendable 的使用

## [1.3.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.3.0) (2025-08-26)

### Features 功能

* feat: 添加 FPS 监控模块

### Performance 性能优化

* perf: 并发处理事件记录、网络请求记录等耗时功能(需要将项目的 compatibleSdkVersion 升级为 5.0.2(14) 以上)
* perf: 展示事件详情、网络请求包详情时，如果文本过大，则进行适当截取

## [1.2.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.2.0) (2025-04-08)

### Features 功能

* feat: 支持 UseInRelease
* feat: 增加显示是否延迟初始化，是否正确集成无埋点
* chore: buildOption.arkOptions.byteCodeHar 改为 false，不再作为字节码 har 发布

### Bug Fixes 修复

* fix: 修复 GioKit Window 占用焦点导致 router 跳转等功能异常

## [1.1.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.1.0) (2024-11-14)

### Features

* feat: 兼容 SDK 2.1.0(支持 protobuf 数据格式传输)

## [1.0.1](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.0.1) (2024-10-25)

### Bug Fixes

* fix: 替换已废弃的接口 util.TextDecoder().decodeWithStream

## [1.0.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/giokit-1.0.0) (2024-09-10)

* SDK 信息 - 全面的 SDK 集成信息与 App 基本信息，方便截图分享
* 事件库 - 实时埋点数据浏览，包括数据发送状态，发送数据详情
* 网络记录 - 埋点事件请求抓包工具，实时查看埋点数据上传进度
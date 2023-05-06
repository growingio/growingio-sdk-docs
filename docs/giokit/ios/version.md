---
title: 版本记录
sidebar_position: 0
---

## V1.1.3 - 2023/04/27

[v1.1.3](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.1.3)

* feat: 兼容 Protobuf 通过 SwiftPM 集成
* feat: 适配 mac Catalyst

## V1.1.2 - 2023/03/07

[v1.1.2](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.1.2)

* feat: use in release env
* fix: 未开启 APM 监控时，Could not open directory (g_reportsPath) 报错

## V1.1.1 - 2022/12/13

[v1.1.1](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.1.1)

* feat: 支持 SwiftPM
* fix: SDK 信息 - 数据加密配置显示错误
* fix: 移除 SDK 2.0 dbclck/lngclck/tchd 事件兼容

## V1.1.0 - 2022/11/18

[v1.1.0](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.1.0)

* feat: add crashMonitorPlugin
* feat: add launchTimePlugin
* feat: SDK 信息添加 SDK 3.0 下所集成模块显示

## V1.0.8 - 2022/09/07

[v1.0.8](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.8)

* feat: 实时埋点展示新 UI
* feat: 新增通用设置页面，用于管理本地数据

## V1.0.7 - 2022/08/12

[v1.0.7](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.7)

* feat: 添加事件库、网络请求列表删除全部功能
* feat: 新增埋点事件实时展示功能

## V1.0.6 - 2022/06/09

[v1.0.6](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.6)

* feat: 兼容同时存在 2.0 和 3.0 事件
* feat: CUSTOM 事件在列表中显示 eventName

## V1.0.5 - 2022/03/31

[v1.0.5](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.5)

* fix: 仅集成 tracker 时，修复 -[WKWebView growingViewDontTrack]: unrecognized selector sent to instance 崩溃

## V1.0.4 - 2022/03/23

[v1.0.4](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.4)

* fix: 兼容 GrowingTouch 弹窗 CUSTOM 事件上报
* fix: Release 环境下不执行 +load 方法中的 Method Swizzling
* feat: Example 兼容 GrowingAnalytics-cdp

## V1.0.3 - 2021/12/20

[v1.0.3](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.3)

* feat: 新增显示 SDK 2.0 剪贴板权限、ASA 归因分析配置信息
* feat: Demo 添加延迟初始化示例代码
* fix: 修复使用 UIScene 生命周期初始化 SDK 被误判为延迟初始化
* fix: SDK 2.0 activate、reengage 事件请求无法抓取

## V1.0.2 - 2021/12/15

[v1.0.2](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.2)

* feat: 适配 iOS 13 UIScene

* fix: 优化 SDK 信息页面展示效果

## V1.0.1 - 2021/12/10

[v1.0.1](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.1)

* feat: 适配新版 Protobuf 数据库

## V1.0.0 - 2021/11/26

[v1.0.0](https://github.com/growingio/growingio-sdk-ios-toolskit/releases/tag/1.0.0) 

* SDK 自检 - SDK 集成检测，包括初始化参数，配置参数等
* SDK 信息 - 全面的 SDK 集成信息与 App 基本信息，方便截图分享
* 事件库 - 实时埋点数据浏览，包括数据发送状态，发送数据详情
* XPath跟踪 - 圈选辅助工具，可以展示元素的XPath路径
* 网络记录 - 埋点事件请求抓包工具，实时查看埋点数据上传进度

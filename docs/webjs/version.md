---
title: 版本记录
sidebar_position: 0
---

SDK 历史版本下载地址：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

### V4.1.0 - 2024/01/25

- 🐞 修复无埋点事件卡进程导致执行缓慢的问题。
- 🐞 修复半自动埋点浏览事件once失效的问题。
- 🌟 优化半自动埋点浏览事件可用性检查。
- 🌟 优化存储逻辑。
- 🌟 优化上报请求失败时的逻辑。
- 🎉 新增初始化配置项`requestTimeout`，允许手动控制请求超时时长。
- 🎉 新增初始化配置项`trackPage`，允许手动关闭页面访问事件。
- 🎉 新增`updateImpression` api，允许手动更新监听。
- 🎉 新增支持A/B测试与移动端打通。
- 🎉 新增多实例功能。

### V4.0.0 - 2023/10/10

- 🎉 新增A/B测试功能。
- 🎉 发布4.0.0版本。全新的无埋点逻辑；测量协议变更；部分细节逻辑调整。

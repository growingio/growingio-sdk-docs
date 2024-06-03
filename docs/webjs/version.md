---
title: 版本记录
sidebar_position: 0
---

SDK 历史版本下载地址：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

### V4.2.2 - 2024/06/03

- 🎉 新增`setBeforeSendListener` api，允许对部分事件在SDK自动构建完成并在发送前进行拦截修改部分属性。
- 🌟 优化初始化成功提示，可以清晰获知是否与小程序或者移动端打通成功。

### V4.2.1 - 2024/05/27

- 🌟 修改与小程序打通时，忽略打通字段处理逻辑。

### V4.2.0 - 2024/05/08

- 🌟 插件内容单独添加版本号。
- 🌟 修改`setGeneralProps`和`setPageAttributes`的适用范围。
- 🎉 新增`clearPageAttributes` api，允许移除指定字段或所有页面属性。

### V4.1.2 - 2024/04/18

- 🌟 优化埋点属性非法数据处理。
- 🌟 优化初始化逻辑，新增`appId`、`packageName`初始化配置项用于打通。
- 🌟 优化多实例逻辑，允许多实例与小程序和移动端打通。
- 🎉 新增`setPageListener` api，允许手动监听SDK页面变更事件。
- 🎉 新增`setPageAttributes` api，允许在关闭自动页面浏览采集的情况下设置页面属性。
- 🎉 新增`sendPage` api，允许在关闭自动页面浏览采集的情况下手动发送页面浏览事件。
- 🎉 新增埋点、埋点计时、半自动埋点浏览多发功能。

### V4.1.1 - 2024/03/12

- 🐞 修复web圈选时某些特殊情况下vue生成的节点无法识别的问题。

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

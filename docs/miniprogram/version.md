---
sidebar_position: 0
title: 版本记录
---

SDK 历史版本下载地址：[https://github.com/growingio/growingio-sdk-miniprogram-autotracker/releases](https://github.com/growingio/growingio-sdk-miniprogram-autotracker/releases)

### V4.1.0 - 2024/04/21

- 🐞 修复某些低版本微信基础库下可能出现报错的问题。
- 🌟 优化初始化逻辑，以避免和其他第三方SDK和逻辑的冲突导致运行异常。
- 🌟 优化SDK部分内部取值逻辑。
- 🎉 新增多实例能力，埋点、埋点计时、半自动埋点浏览多发功能。

### V4.0.1 - 2023/12/21

- 🐞 修复taro3react集成时可能出现的框架报错的问题。<br/>
**<font size="2">(自该版本起，集成SDK时不再需要`babel-plugin-setname`插件)</font>**
- 🐞 修复taro3react中，点击事件触发异常的问题。
- 🐞 修复支付宝、百度、头条小程序半自动埋点触发异常的问题。
- 🐞 修复淘宝小程序云函数上报请求异常的问题。
- 🐞 修复uniapp-vue3中，使用setup写法的变量被污染导致异常的问题。
- 🌟 优化taro3vue3无埋点事件触发逻辑。
- 🌟 优化请求队列逻辑。
- 🎉 新增初始化配置项允许指定上报请求超时时长。

### V4.0.0 - 2023/10/10

- 🎉 发布4.0.0版本。全新的无埋点逻辑；测量协议变更；部分细节逻辑调整。

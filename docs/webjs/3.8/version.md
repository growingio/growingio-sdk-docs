---
title: 版本记录
sidebar_position: 0
---

SDK 历史版本下载地址：<https://github.com/growingio/growingio-sdk-webjs-autotracker/releases>

### V3.8.3 - 2023/02/21

- 🐞 修复 Native 下圈选偶现报错的问题。
- 🌟 修改移除集成 Native 圈选插件但未圈选时显示过多无用日志。
- 🌟 优化 Saas 与 CDP SDK 共存兼容问题。

### V3.8.2 - 2023/01/05

- 🐞 修复站点在重定向子域名或刷新页面后 setUserId 导致 utm 参数丢失的问题。
- 🌟 修改埋点事件时长、性能分析事件和属性标识符。

### V3.8.1 - 2022/12/27

- 🐞 修复用户访问标记在 cookie 中可能存在超限的问题。
- 🐞 修复补发 visit 事件时丢失原始 utm 参数的问题。
- 🐞 修复 debug 日志样式问题。

### V3.8.0-RC.10 - 2022/12/09

- 🐞 修复部分原生方法被全局污染复写的问题。（Array.includes、Array.find、Array.findIndex、Array.from、String.startsWith、String.endsWith、Number.isNaN）

### V3.8.0-RC.9 - 2022/11/30

- 🐞 修复同域站点中 iframe 页面内外用户信息不一致的问题。
- 🐞 修复重复加载 SDK 时提示 SDK 未集成的问题。
- 🎉 新增指定 cookie 存储域用于隔离多个子域名用户冲突的初始化配置项 cookieDomain。

### V3.8.0-RC.8 - 2022/11/17

- 🐞 修复某些情况下 hash 参数处理错误的问题。
- 🐞 修复 iOS 内嵌页中无埋点圈选报错的问题。
- 🌟 优化上报事件属性标识符字符长度由 50 修改为 100。
- 🎉 新增性能监控功能。[参考文档](https://growingio.github.io/growingio-sdk-docs/docs/webjs/3.8/plugins/performance)

### V3.8.0-RC.7 - 2022/09/29

- 🐞 修复 polyfill 加载错误导致某些第三方组件库运行异常的问题。

### V3.8.0-RC.6 - 2022/09/28

- 🐞 修复 host 字符截取错误的问题。
- 🐞 修复使用 es5 版本的 sdk 内置插件加载失败导致功能失效的问题。

### V3.8.0-RC.5 - 2022/09/16

- 🎉 新增事件时长统计功能。

### V3.8.0-RC.4 - 2022/09/06

- 🐞 修复未加载加密插件且初始化设置 compress 为 true 时数据无法上报的问题。

### V3.8.0-RC.3 - 2022/09/05

- 🐞 修复 esid 字段取值不会累加的问题。
- 🐞 修复 hybrid 集成时 userId 传值类型错误会导致崩溃的问题。
- 🐞 修复 file 协议下 scheme 取值错误导致上报失败的问题。

### V3.8.0-RC.2 - 2022/08/16

- 🐞 修复部分工具类方法在极端取值时运行错误的问题。
- 🐞 修复旧版 api`getVisitorId`的兼容问题。
- 🐞 修复在 iframe 中存储取值错误的问题。
- 🐞 修复从 3.3 升级时从 cookie 中取值错误的问题。
- 🐞 修复 hashtag 关闭时修改 hash 仍然会发 page 的问题。
- 🎉 新增半自动浏览事件单次上报功能。

### V3.8.0-RC.1 - 2022/08/01

- 🎉 发布 3.8.0 第一个 rc 版本。

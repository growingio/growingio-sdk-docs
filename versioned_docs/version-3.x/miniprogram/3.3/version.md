---
title: 版本记录
sidebar_position: 0
---
### V3.3.11 - 2022/09/21

* 🐞 修复无埋点事件执行返回值错误的问题。

### V3.3.10 - 2022/08/03

* 🐞 修复`onShareAppMessage、onShareTimeline`异步返回自定义参数时SDK取值错误导致分享链接错误的问题。

### V3.3.9 - 2022/06/14

* 🐞 修复页面参数分享时丢失的问题

### V3.3.8 - 2022/06/08

* 🎉 新增getDeviceId接口
* 🐞 修复APP_CLOSED事件丢失sessionId的问题
* 🐞 修复 CUSTOM 事件path、query获取逻辑错误问题
* 🐞 修复触发补发 VISIT 事件可能丢失 query 问题

### V3.3.7 - 2022/05/25

* 🐞 修复开启forceLogin时，偶现某个事件的访问用户id取值错误导致用户统计虚高的问题。
* 🎉 新增setLocation方法，以代替移除的getLocation功能。

### V3.3.6 - 2022/04/29

* 🌟 移除getLocation相关逻辑

### V3.3.5 - 2022/04/20

* 🎉 新增埋点事件事件变量值和登录用户属性值支持数组类型

### V3.3.4 - 2022/03/15

* 🐞 修复埋点事件path取值错误的问题

### V3.3.3 - 2021/12/21

* 🐞 修复切换 userId 没有更新session的问题
* 🎉 新增支持采集数据内嵌页userKey与小程序userKey一致
* 🎉 新增初始化配置项[extraParams](/docs/3.x/miniprogram/3.3/initSettings#extraparams)

### V3.3.2 - 2021/12/06

* 🎉 新增 enableEventStore 初始化配置：在未使用运营SDK时关闭事件本地存储，在使用运营SDK时开启事件本地存储。[使用详情](/docs/3.x/miniprogram/3.3/initSettings#enableeventstore)

### V3.3.1 - 2021/11/24

* 🐞 修复小程序切入后台超5分钟visit不发送导致session不会重置的问题

### V3.3.0 - 2021/09/30

* 🎉 新增id mapping 支持。[使用详情](/docs/3.x/miniprogram/3.3/initSettings#enableidmapping)

### V3.2.2 - 2021/06/30

* 🎉 新增autotrack和ignoreFields配置。[autotrack](/docs/3.x/miniprogram/3.3/initSettings#autotrack)，[ignoreFields](/docs/3.x/miniprogram/3.3/initSettings#ignorefields)

### V3.2.1 - 2021/06/22

* 🎉 新增弹窗和资源位支持三方小程序和H5页面跳转

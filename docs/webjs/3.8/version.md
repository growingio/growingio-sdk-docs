---
title: 版本记录
sidebar_position: 0
---

SDK历史版本下载地址：<https://github.com/growingio/growingio-sdk-webjs-autotracker/releases>

## V3.8.0-rc.7 - 2022/09/29

* 🐞 修复polyfill加载错误导致某些第三方组件库运行异常的问题。

## V3.8.0-rc.6 - 2022/09/27

* 🐞 修复host字符截取错误的问题。
* 🐞 修复使用es5版本的sdk内置插件加载失败导致功能失效的问题。

## V3.8.0-rc.5 - 2022/09/15

* 🎉 新增事件时长统计功能。[参考文档](/docs/webjs/3.8/commonlyApi#事件时长统计)

## V3.8.0-rc.4 - 2022/09/06

* 🐞 修复未加载加密插件且初始化设置compress为true时数据无法上报的问题。

## V3.8.0-rc.3 - 2022/09/05

* 🐞 修复esid字段取值不会累加的问题。
* 🐞 修复hybrid集成时userId传值类型错误会导致崩溃的问题。
* 🐞 修复file协议下scheme取值错误导致上报失败的问题。

## V3.8.0-rc.2 - 2022/08/16

* 🐞 修复部分工具类方法在极端取值时运行错误的问题。
* 🐞 修复旧版api`getVisitorId`的兼容问题。
* 🐞 修复在iframe中存储取值错误的问题。
* 🐞 修复从3.3升级时从cookie中取值错误的问题。
* 🐞 修复hashtag关闭时修改hash仍然会发page的问题。
* 🎉 新增半自动浏览事件单次上报功能。

## V3.8.0-rc.1 - 2022/07/27

* 🎉 发布3.8.0第一个rc版本。

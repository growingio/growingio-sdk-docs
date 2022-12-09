---
title: 版本记录
sidebar_position: 0
---
----
## RELEASE CDP-V3.8.0-RC.10

- 🐞 修复部分原生方法被全局污染复写的问题。（Array.includes、Array.find、Array.findIndex、Array.from、String.startsWith、String.endsWith、Number.isNaN）


:::note 

 标签:**[CDP-v3.8.0-rc.10](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.10)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-12-09** 

:::

## RELEASE CDP-V3.8.0-RC.9

- 🐞 修复同域站点中iframe页面内外用户信息不一致的问题。
- 🐞 修复重复加载SDK时提示SDK未集成的问题。
- 🎉 新增指定cookie存储域用于隔离多个子域名用户冲突的初始化配置项 cookieDomain。

:::note 

 标签:**[CDP-v3.8.0-rc.9](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.9)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-11-30** 

:::

## RELEASE CDP-V3.8.0-RC.8

- 🐞 修复某些情况下hash参数处理错误的问题。
- 🐞 修复iOS内嵌页中无埋点圈选报错的问题。
- 🌟 优化上报事件属性标识符字符长度由50修改为100。
- 🎉 新增性能监控功能。[参考文档](https://growingio.github.io/growingio-sdk-docs/docs/webjs/3.8/plugins/performance)

:::note 

 标签:**[CDP-v3.8.0-rc.8](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.8)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-11-17** 

:::

## RELEASE CDP-V3.8.0-RC.7

- 🐞 修复polyfill加载错误导致某些第三方组件库运行异常的问题。

:::note 

 标签:**[CDP-v3.8.0-rc.7](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.7)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-29** 

:::

## RELEASE CDP-V3.8.0-RC.6

- 🐞 修复host字符截取错误的问题。
- 🐞 修复使用es5版本的sdk内置插件加载失败导致功能失效的问题。

:::note 

 标签:**[CDP-v3.8.0-rc.6](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.6)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-28** 

:::

## RELEASE CDP-V3.8.0-RC.5

- 🎉 新增事件时长统计功能。

:::note 

 标签:**[CDP-v3.8.0-rc.5](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.5)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-16** 

:::

## RELEASE CDP-V3.8.0-RC.4

- 🐞 修复未加载加密插件且初始化设置compress为true时数据无法上报的问题。

:::note 

 标签:**[CDP-v3.8.0-rc.4](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.4)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-06** 

:::

## RELEASE CDP-V3.8.0-RC.3

* 🐞 修复esid字段取值不会累加的问题。
* 🐞 修复hybrid集成时userId传值类型错误会导致崩溃的问题。
* 🐞 修复file协议下scheme取值错误导致上报失败的问题。

:::note 

 标签:**[CDP-v3.8.0-rc.3](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.3)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-05** 

:::

## RELEASE CDP-V3.8.0-RC.2

* 🐞 修复部分工具类方法在极端取值时运行错误的问题。
* 🐞 修复旧版api`getVisitorId`的兼容问题。
* 🐞 修复在iframe中存储取值错误的问题。
* 🐞 修复从3.3升级时从cookie中取值错误的问题。
* 🐞 修复hashtag关闭时修改hash仍然会发page的问题。
* 🎉 新增半自动浏览事件单次上报功能。

:::note 

 标签:**[CDP-v3.8.0-rc.2](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-08-16** 

:::

## RELEASE CDP-V3.8.0-RC.1

* 🎉 发布3.8.0第一个rc版本。

:::note 

 标签:**[CDP-v3.8.0-rc.1](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases/tag/CDP-v3.8.0-rc.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-08-01** 

:::

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)
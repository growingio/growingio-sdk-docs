---
title: 版本记录
sidebar_position: 0
---
-----
## V3.3.1 - 2021/10/28

Android [Release 3.3.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.1)

* 修复多线程使用mobile debugger时不稳定的情况
* 修复okhttp3在请求无法访问站点时泄漏的问题
* 优化特定机型unknow contentprovider的问题



## V3.3.0 - 2021/10/09

Android [Release 3.3.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.0) 

* 添加 idmapping 功能
* 增加oaid本地发版配置，适配oaid1.0.27版本
* 修复bug和代码优化



## V3.2.2 - 2021/09/09

Android [Release 3.2.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.2)

* 业务和配置逻辑分离
* 优化多线程前后台判断准确性



## V3.2.1 - 2021/09/01

Android [Release 3.2.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.1) 

* 修复延迟初始化可能导致的session错误
* 多进程session保持同步
* 增加字段过滤和事件过滤
* 更多请访问下方 Release 版本更新页面



## V3.2.0 - 2021/06/21  

Android [Release 3.2.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.0) 

* 通过模块配置实现数据加密
* 修复多进程访问db, 进程锁的使用导致app崩溃的问题
* 更新3.2.0 [测量协议](/docs/Measurement%20Protocol)



## V3.1.0 - 2021/06/04

Android [Release 3.1.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.1.0)

* SDK模块化 -开发者可以根据已有的模块组合自定义SDK,也可以通过已有的模块协议来进行自定义模块的开发。
* 更多详情请到 各自SDK模块化部分查阅
* 支持mobile debugger功能
* 仓库从JCenter迁移到MavenCentral
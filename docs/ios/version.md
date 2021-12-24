---
title: 版本记录
sidebar_position: 0
---
-----

## V3.3.3 - 2021/12/23

[v3.3.3](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.3.3) 

### Bug Fixes

* 支持 App 和 H5 userKey 打通 ([f052d74](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f052d74ad076c0d150b81ce9d570ab5d81973786))


### Features

* 数据存储与发送新增 Protobuf 格式 ([9ce583d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9ce583d669685d9dcfac2f9bbd4b86fe3fcc0429))



## V3.3.2 - 2021/12/07

[v3.3.2](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.3.2) 

* 替换 Demo 中的 UIAlertView API 调用，改用 UIAlertController
* 对dyld部分操作使用纯c实现，避开runtime冲突
* Configuration 增加 EncryptEnabled 配置项



## V3.3.1 - 2021/11/03

[v3.3.1](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.3.1) 

* 修复 hybrid event domain 设置失效
* error log 改为 async，避免线程卡顿



## V3.3.0 - 2021/10/15

[v3.3.0](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.3.0) 

* 新增 Id Mapping 开关
* Configuration 增加 URL Scheme 配置项
* 支持数据加密模块
* 修复 bug 和代码优化



## V3.2.2 - 2021/09/09

[v3.2.2](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.2.2) 

* 增加 5G networkType 判断
* 修复杀死进程 APP_CLOSED 未发送



## V3.2.1 - 2021/09/01

[v3.2.1](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.2.1)

* SDK模块化，支持[自定义](/docs/ios/develop/intro)
* 增加字段过滤和事件过滤
* 兼容可能导致 VISIT、PAGE 事件丢失的边界情况
* 更多请访问 [CHANGELOG.md](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/CHANGELOG.md#3212021-09-01)



## V3.2.0 - 2021/06/01  

[v3.2.0](https://github.com/growingio/growingio-sdk-ios-autotracker/releases/tag/3.2.0)

* 3.2.0 版本发布
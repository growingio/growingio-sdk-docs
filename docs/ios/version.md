---
title: 版本记录
sidebar_position: 0
---
----
## [3.4.5](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.4.4...3.4.5) (2022-11-16)


### Bug Fixes

* delete unused files ([36571d2](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/36571d2066a0d5529d5b576d593af00149729778))
* SwiftPM module Advert / APM public headers path configuration ([5ba2f54](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5ba2f54f300aaae9ab87b4ac8874d15abeb392d8))
* 修复 hybrid 圈选时 H5 元素位置不准确 ([e84da8d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e84da8d9af0851f1c6cae1c94aa60e8d2151bf36))
* 修复延迟初始化下 PAGE 漏发、page.path 不准确 ([f21d432](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f21d432be757617adec2ffcabbe98a285857af50))
* 修复延迟初始化下 VIEW_CLICK、VIEW_CHANGE 事件参数异常，圈选显示截图异常 ([f82c7fb](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f82c7fb0901c1339c6ff46f0498dbf34053cd3e3))
* 兼容 Hybrid 打通时，非字符串类型参数 ([97b388d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/97b388dfa50452e8aff0e2289f0ec6309cfce45c))


### Features

* APM ([fd10b30](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/fd10b30a1d8c013c1ba01eec01e6ecec1d911622))
* APM modules SwiftPM support ([cf65835](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cf65835f5354e0dfbfa921465a2743ff1fd6f790))
* podspec ios_deployment_target 改为 9.0 ([5eb504b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5eb504b887c44b9437316d045e91aa5fc5bbee18))
* 圈选提示 ([a90c42d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a90c42ddb7696fa4a1078773f2e865cd97e60156))

## [3.4.4](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.4.3...3.4.4) (2022-11-03)


### Bug Fixes

* parentView 不可见时，圈选遍历不应该包含 subViews ([69953ff](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/69953ff10b70192950d4d0be77a7d4e4125bdf32))


### Features

* advert module ([b7b974d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/b7b974df786c87b3da40157b4731e68cb71c6f3b))
* advert module (only activate) ([188fd2a](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/188fd2ac9ac91ff8c55799ff4c266533d91551d6))

## [3.4.3](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.4.2-hotfix.1...3.4.3) (2022-09-20)


### Features

* track timer ([be62b64](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/be62b64c8117374abb8129963cfc9a246a72d34c))
* 废弃 WithAttributesBuilder 相关接口 ([17c1caa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/17c1caa3f6a4f574c45ed77a46efcee59614ba52))

## [3.4.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.4.1...3.4.2) (2022-08-09)


### Bug Fixes

* iOS 13 ApplicationState 在收到 UIScene 相关通知时并未转换 ([26e6297](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/26e6297f9c4a3d6c6167cac1874435423b3d4366))
* 避免因 delegate 对象重写 class 方法导致 swizzle 失效 ([049db85](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/049db8541bba347a9e030944978b0e4c959bd941))


### Features

* GrowingEventInterceptor 增加 EventDidWrite 回调，以便新增事件排序 ([a7843f9](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a7843f9e20f6669d32220fbdaa1231edd9298b7c))

## [3.4.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.4.0...3.4.1) (2022-07-07)

### Bug Fixes

* id<GrowingRequestProtocol\> 对象 optional 调用增加 respondsToSelector 判断 ([7d3d81a](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/7d3d81a633dfac994b4e27e34c18a7ec2445304e))

## [3.4.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.6...3.4.0) (2022-06-16)

### Bug Fixes

* EventType 实现应统一到 Builder 类中 ([c10d9b1](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c10d9b1d2cf04cf5a7feaa4b724c3a603b85988e))
* RequestAdapter 初始化函数调整 ([2a026ee](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2a026eefc3da7fcce5bd9350660be51b23a882af))
* SDK 未初始化时多次扫码圈选导致多次注册 UIDeviceOrientationDidChangeNotification ([9c03a47](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9c03a471ace9b01c783a390f120f54a59e150e1d))
* 删除无用的 GrowingLoginRequest (.h, .m) ([5d2e2f0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5d2e2f0aa905bec927847284b696034663cce921))

### Features

* DefaultServices 单独作为 Module ([e89210e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e89210e522d38ee9835ce218778fbee5778d3e1f))
* Protobuf 模块优化，减少 Category 的使用，避免 ld warnings ([5394ca4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5394ca4b2fb1e178466cbd2e00869eb270ae1d2f))
* 适配 iOS 13 UIScene 冷启动 DeepLink 唤起 ([1302b8b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1302b8bee188e087f2c6f49e16f365bda1b6becf))

## [3.3.6](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.5...3.3.6) (2022-04-28)

### Features

* LOGIN_USER_ATTRIBUTES 事件属性支持 `NSArray<ObjectType>` ([6d2e971](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6d2e9712184874b8ed875ae270126393a646b5d7))

## [3.3.5](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.4...3.3.5) (2022-04-12)


### Bug Fixes

* GrowingEventManager 在 loadLocalServices 之前初始化将导致数据库创建失败，事件无法入库 ([758a063](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/758a063966ad06a594c0a1e053b1ae322777e575))
* 日志输出添加前缀 ([190e39a](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/190e39a6b470399fb64d219cb27adb57160fb5f9))


### Features

* CUSTOM 事件属性支持 `NSArray<ObjectType>`，优化参数判断，补充单元测试 ([d2838ab](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d2838ab42b875c9c6d52cf30b1531f5a10f39051))
* 废弃 CUSTOM 事件物品模型关联接口 ([7f15aad](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/7f15aadb8ab9066bd02d0ca8e54520040f2b5d9c))
* 支持 SwiftPM ([1a56430](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1a56430b05cd2ab1c91d1bcaa3dfbaef3a14bd14))
* Hybrid 模块也作为 SwiftPM library 提供给外部，以便仅集成埋点 SDK 时打通 H5 ([67dad16](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/67dad1698d6c2a7dada0ec9002c76559e46a302f))

## [3.3.4](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.3...3.3.4) (2022-03-08)

### Bug Fixes

* 边界情况下，点击退出圈选同时产生事件，可能导致 crash ([0b81173](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0b81173b3ba2dc7f178cf6184c1bcee5f83de1d4))
* 其他稳定性优化

##  [3.3.3](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.2...3.3.3) (2021-12-23)


### Bug Fixes

* update sonar configure ([c21c2b7](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c21c2b7e9465d3b64b4ce18fbbe1b27572cd3428))
* 给 Web 端增加设置和清除 UserKey 的接口 ([f052d74](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f052d74ad076c0d150b81ce9d570ab5d81973786))


### Features

* 数据存储与发送新增 Protobuf 格式 ([9ce583d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9ce583d669685d9dcfac2f9bbd4b86fe3fcc0429))



## [3.3.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.1...3.3.2)  (2021-12-07)



### Bug Fixes

* 替换 Demo 中的 UIAlertView API 调用，改用 UIAlertController ([06bc718](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/06bc718f75752322e596b2f4146f7b6e97326a7a))
* sonar quality optimization ([fb73f06](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/fb73f06f7607244c5b5027a40548cdc8c4b9de4b))
* 对 dyld 部分操作使用纯 C 实现，避开 runtime 冲突 ([71aef51](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/71aef51781f63d630d96a86858ed7a6200588144))


### Features

* 3.3.2 正式版发布 ([8c9f3f9](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/8c9f3f925ca304e68d6c7dc157f8fe2d318ab36b))
* Configuration 增加 EncryptEnabled 配置项 ([1f90d5e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1f90d5e342978c9e4314c495e1782199b9372df7))

##  [3.3.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.0...3.3.1) (2021-11-03)

### Features

* 3.3.1 正式版发布

### Bug Fixes

* 错误的注释、日志内容 ([817c9bf](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/817c9bf833b0e6b9ceab57502fae1558517e8c90))
* error log 改为 async，避免线程卡顿 ([07fc1d3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/07fc1d3430138ec200625849dcf071c545b19688))
* hybrid event domain 设置失效 ([6e871eb](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6e871eb9555d1ddb77fe782328ee7276084be945))



##  [3.3.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.2...3.3.0) (2021-10-15)

### Bug Fixes

* WebView Bridge 注入延后至 loadRequest: ([af0cbd0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/af0cbd017c9d0340332334e96ebfe47962c489c3))


### Features

* 3.3.0 正式版发布
* 新增 Id Mapping 开关 ([4bfc426](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4bfc426194b787520e285ec9cb983373ced4c7b9))
* 新增 version 相关接口 (Private)，提供给 GrowingToolsKit 调用 ([e826d4f](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e826d4fdf1646480085626d7215abdf0760b5383))

## [3.2.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.1...3.2.2)  (2021-09-09)


### Features

* 3.2.2 正式版发布 ([9fbda52](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9fbda524e4d72fadedfdb418f9f13feca30b5719))
* 增加 5G networkType 判断 ([d41ee08](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d41ee0839476349f463f42ec82f3db25f87111ac))

### Bug Fixes

* cdp Interceptor 添加 gioId 失效 ([d2261bf](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d2261bf86e95d57c45dee5b8ca7c9c1c4dac81b5))
* GrowingIgnorePolicy 声明移到 Configuration 中，GrowingAutotracker.h 隐藏 RealAutotracker 导入 ([27b1ac7](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/27b1ac7c385ad05a6dcf72790bce3b394fc8db92))
* 杀死进程 APP_CLOSED 未发送 ([18666a3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/18666a32758189f5d03fe8cb8b870d6a25913e48))


##  [3.2.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.1-beta...3.2.1)(2021-09-01)


### Bug Fixes

* App 退到后台 flush 一次，避免 Page 事件丢失 ([edcabe4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/edcabe45fbd7f7dd3892f570b9534371829926c0))
* debugEnabled 配置为 YES 时实时发送 event 数据 ([cfd27b5](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cfd27b54315fcdbea7630f69e0057d10d8aadeb2))
* SDK 版本最低 8.0，移除 iOS 8.0 以下逻辑代码 ([b890bd1](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/b890bd1efa8c24309f0051db8aceeb01d13ba4f3))
* SessionId 刷新、VISIT 事件发送与安卓 SDK 保持一致 ([36ba895](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/36ba895f180fc44af5e05dcc221ffa16a25a03de))
* setDataCollectionEnabled 补发 VISIT，对外接口统一在 Growing Thread 中处理 ([fbd98b9](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/fbd98b9fc086387f4dcf87ed4f21a27d3df0edf2))
* 去除编译器的 warning 警告 ([7b0fdae](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/7b0fdae94fa03162db22d505349c7d98c4259574))
* 去除警告以及删除圈选的废弃代码 ([2b95f87](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2b95f87c9320047afe9e206d873a8fa26d8900cd))
* 对 nil 判断格式进行调整 ([1c93e84](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1c93e84f3a6048fe7565735d1e0bc76eb58e475e))
* 日志重复打印问题（Xcode console），且在 Release 环境下需不可见（console.app） ([c1a1dfa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c1a1dfa8b6c6f8159607c293d0d17b267ba9f8f7))
* 显示通知中心/系统权限授权弹窗显示应重新计算 backgroundTime ([261433b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/261433b4ef3c2dd3a9df04fea853eb07069f5e06))
* 移除 Spec 文件中多余的库 ([904a605](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/904a60551855880a66db1a2cce1dc8e320a6a997))
* 更多更新内容详见 [CHANGELOG.md](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/CHANGELOG.md)

### Features

* 3.2.1 版本发布 ([55b9c96](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/55b9c9690be2128caa8fe4268f72ec4a871b5982))
* FMDB 数据库 Service ([cd80916](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cd8091667bc18759544c831f94cdae53ca735e39))
* 事件 Policy 逻辑添加，SQL 数据库添加 policy 字段 ([c2bc063](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c2bc0636356a796597f040c3fd40941c929abcc7))

## [3.2.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.1.0...3.2.0) (2021-06-01) 

### Bug Fixes

* 和 CocoaLumberjack 重复定义常量问题处理 ([428e847](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/428e8477203083e04f2bdae148261002abb6de57))
* 删除无效参数 ([548ba97](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/548ba971946fecab335c0c4f85d9c3936aa127ee))
* 添加对 HTTP 请求的数据加密，使用 LZ4 以及位运算 ([88c0709](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/88c0709ac1d1a805e9c700d102efc89b398c6bd5))
* 添加对 IDFA 的配置项，用户可以自行配置是否获取 idfa ([a75cd23](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a75cd2374998403cf81570d888db004ecc166e82))
* 修改 idfa 逻辑沿用了 userIdentifier 的问题 ([eb8db84](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/eb8db841c85b1af966197eaa1cd9e90631abe8ab))
* 修改 location 获取方式 ([4ecf484](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4ecf4843870581b2b60b2b59334fa21cb3cefa57))
* 修改 LZ4 未加载，以及未经过 LZ4 压缩的问题 ([13651c3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/13651c3e8bd6e6f6bc24c0933eda5dc58df34634))
* 修改 TrackConfiguration 的 impressionScale 未在 CopyWithZone 赋值问题 ([cfe22dd](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cfe22dd4611c114bb46415e30007155840a96ab7)), closes [#98](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/98)
* pageGroup 的初始化问题以及 childpages 变更为弱引用 ([147b3fc](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/147b3fc5d051101746c31b29beeed8480980d0ca)), closes [#103](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/103) [#104](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/104)
* pod spec 添加对加密的配置项，默认不开启加密 ([6661fc3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6661fc33fa9480800a3b61e52d05a0e7dfd26526))
* 3.1.1-beta 版本发布 ([bb65cb4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/bb65cb4f28231b8fb5825ae2d0c5932d3cb400f4))
* 修改 setDelegate 对象为 Proxy 时，crash 以及 hook 失效问题 ([21ba793](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/21ba793982b2151ebd17c7fa6e33edd6dc69cf56))

### Features

* 增加 sonarcloud ([60f905e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/60f905e831e98479e8f09912107be847379e55cb))
* iDFA 获取模块重整 ([02bab81](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/02bab816d94bf87bd4504639870c1b08d5b9d1ba))
* release 3.2.0-beta ([115d234](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/115d23402fc8e714dc212fbc3bc2cf3e1c16e0b1))


## [3.1.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.0.2...3.1.0) (2021-04-07)


### Bug Fixes

* 修改头文件导入 ([2f759f1](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2f759f150916bb99857ecee0affc28818f132c6c))
* 添加队列出队，防止 mobiledebugger 无事件时队列数据无法读取 ([f7ddd92](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f7ddd92f1aec49635fdaf413401d60f11dc20898))
* 修改事件缓存机制，适配冷启动情况 ([a42ba83](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a42ba83b8f95d01fec307c389a58e6b0d76e055e))
* 修改网络配置去除多余代码，url 路径使用属性 ([d821b6d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d821b6d362ce9b364d54bb1acda01428aadfbab2))
* log Level capitalization ([391d87d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/391d87d45ab8502696458a70929b50861e48f0eb))
* mobiledebugger ([daadd83](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/daadd830e4e68f62008eb8ca964b0dec41470be3))
* test: updata testcase ([25b586c](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/25b586cf02b6b468c7cdd5ad99714f76da0eb92a))


### Features

* 防止数组遍历时增删操作，发布 3.1.0-beta 版本 ([2e7e70b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2e7e70bf8cc91645abc8bc7014a7ea006572f524))
* add mobiledebugger & mobileloggeradd ([6834cd4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6834cd458a4c6592298f9f7dc7fe4e2725361117))


---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-ios-autotracker/releases)
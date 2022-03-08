---
title: 版本记录
sidebar_position: 0

---

----

## [3.3.4](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.3...3.3.4) (2022-03-08)

### Bug Fixes

- -[NSProxy methodSignatureForSelector:] crash ([be1dd63](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/be1dd63e1033dcef4a8abbbf5c79c4edf1f38fcf))
- 边界情况下，点击退出圈选同时产生事件，可能导致 crash ([0b81173](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0b81173b3ba2dc7f178cf6184c1bcee5f83de1d4))
- 扫码圈选并点击状态栏弹窗退出圈选，再次扫码圈选未启动的 Bug ([ed66f2d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/ed66f2d0a272446d8be93f3168c8c346ceaa4bb8))
- 扫码圈选时，需触摸屏幕才能在 Web 端显示当前画面的 Bug ([79b9668](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/79b9668c908818e45486df8d0e7dc5a2c24c5ac9))
- 删除无用代码，代码规范调整 ([94cd4a1](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/94cd4a15d1af121534ee9aed809d87d32427e747))
- 修改 unregisterModule 时数组没有更新问题 ([e6d3be3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e6d3be3d8aa9e50ea33c2921c48a959895264c6f))
- Category 方法、C 函数、头文件中 Block 定义添加前缀，避免符号冲突 ([9108fec](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9108fec2ef90122499cc494078036b5aab9fc784))
- EventName Check 先判断 NSString 类型，再调用 NSString 分类方法判断是否为空 ([2052927](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2052927e5171ed665a5bd7aabef2cecaa1970985))
- protobuf 不支持 Map 中含 NSNull Value ([8f611e0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/8f611e08ae746a9bcdcd85398bf20e457c12e71d))
- protobuf eventType 判断应使用 isEqualToString ([d0b74e2](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d0b74e296f8773ba87f65d80c6d845209e8787f4))
- setGrowingPageAttributes nil crash ([b152fe4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/b152fe4c9da603b1ccfd9548b07f874957530ad2))

---

## [3.3.3](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.2...3.3.3) (2021-12-23)

### Bug Fixes

* update sonar configure ([c21c2b7](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c21c2b7e9465d3b64b4ce18fbbe1b27572cd3428))
* 给Web端增加设置和清除UserKey的接口 ([f052d74](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f052d74ad076c0d150b81ce9d570ab5d81973786))

### Features

* 数据存储与发送新增 Protobuf 格式 ([9ce583d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9ce583d669685d9dcfac2f9bbd4b86fe3fcc0429))

------

## [3.3.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.1...3.3.2)  (2021-12-07)

### Bug Fixes

* 替换 Demo 中的 UIAlertView API 调用，改用 UIAlertController ([06bc718](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/06bc718f75752322e596b2f4146f7b6e97326a7a))
* sonar quality optimization ([fb73f06](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/fb73f06f7607244c5b5027a40548cdc8c4b9de4b))
* 对dyld部分操作使用纯c实现，避开runtime冲突 ([71aef51](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/71aef51781f63d630d96a86858ed7a6200588144))

### Features

* 3.3.2正式版发布 ([8c9f3f9](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/8c9f3f925ca304e68d6c7dc157f8fe2d318ab36b))
* Configuration 增加 EncryptEnabled 配置项 ([1f90d5e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1f90d5e342978c9e4314c495e1782199b9372df7))

------

## [3.3.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.3.0...3.3.1) (2021-11-03)

### Features

* 3.3.1 正式版发布

### Bug Fixes

* 错误的注释、日志内容 ([817c9bf](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/817c9bf833b0e6b9ceab57502fae1558517e8c90))
* error log 改为 async，避免线程卡顿 ([07fc1d3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/07fc1d3430138ec200625849dcf071c545b19688))
* hybrid event domain 设置失效 ([6e871eb](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6e871eb9555d1ddb77fe782328ee7276084be945))

------

## [3.3.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.2...3.3.0) (2021-10-15)

### Bug Fixes

* WebView Bridge 注入延后至 loadRequest: ([af0cbd0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/af0cbd017c9d0340332334e96ebfe47962c489c3))

### Features

* 3.3.0 正式版发布
* 新增 Id Mapping 开关 ([4bfc426](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4bfc426194b787520e285ec9cb983373ced4c7b9))
* 新增 version 相关接口 (Private)，提供给 GrowingToolsKit 调用 ([e826d4f](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e826d4fdf1646480085626d7215abdf0760b5383))

------

## [3.2.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.1...3.2.2)  (2021-09-09)

### Features

* 3.2.2 正式版发布 ([9fbda52](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9fbda524e4d72fadedfdb418f9f13feca30b5719))
* 增加 5G networkType 判断 ([d41ee08](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d41ee0839476349f463f42ec82f3db25f87111ac))

### Bug Fixes

* cdp Interceptor 添加 gioId 失效 ([d2261bf](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d2261bf86e95d57c45dee5b8ca7c9c1c4dac81b5))
* GrowingIgnorePolicy 声明移到 Configuration 中，GrowingAutotracker.h 隐藏 RealAutotracker 导入 ([27b1ac7](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/27b1ac7c385ad05a6dcf72790bce3b394fc8db92))
* 杀死进程 APP_CLOSED 未发送 ([18666a3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/18666a32758189f5d03fe8cb8b870d6a25913e48))

------

## [3.2.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.2.1-beta...3.2.1)(2021-09-01)

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

### Performance Improvements

* merge commit ba74014 and 4abd0e3 in CocoaLumberjack ([4da828e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4da828e23dc1c0b5907db8b2af727d14bbfcd958))

------

## [3.2.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.1.0...3.2.0) (2021-06-01)

### Bug Fixes

* 和CocoaLumberjack重复定义常量问题处理 ([428e847](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/428e8477203083e04f2bdae148261002abb6de57))
* 删除无效参数 ([548ba97](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/548ba971946fecab335c0c4f85d9c3936aa127ee))
* 添加对HTTP请求的数据加密，使用LZ4以及位运算 ([88c0709](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/88c0709ac1d1a805e9c700d102efc89b398c6bd5))
* 添加对IDFA的配置项，用户可以自行配置是否获取idfa ([a75cd23](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a75cd2374998403cf81570d888db004ecc166e82))
* 修改idfa逻辑沿用了userIdentifier的问题 ([eb8db84](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/eb8db841c85b1af966197eaa1cd9e90631abe8ab))
* 修改location获取方式 ([4ecf484](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4ecf4843870581b2b60b2b59334fa21cb3cefa57))
* 修改LZ4未加载，以及未经过LZ4压缩的问题 ([13651c3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/13651c3e8bd6e6f6bc24c0933eda5dc58df34634))
* 修改TrackConfiguration的impressionScale未在CopyWithZone赋值问题 ([cfe22dd](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cfe22dd4611c114bb46415e30007155840a96ab7)), closes [#98](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/98)
* pageGroup的初始化问题以及childpages变更为弱引用 ([147b3fc](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/147b3fc5d051101746c31b29beeed8480980d0ca)), closes [#103](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/103) [#104](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/104)
* pod spec添加对加密的配置项，默认不开启加密 ([6661fc3](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6661fc33fa9480800a3b61e52d05a0e7dfd26526))
* 3.1.1-beta版本发布 ([bb65cb4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/bb65cb4f28231b8fb5825ae2d0c5932d3cb400f4))
* 修改setDelegate对象为Proxy时，crash以及hook失效问题 ([21ba793](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/21ba793982b2151ebd17c7fa6e33edd6dc69cf56))

### Features

* 增加sonarcloud ([60f905e](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/60f905e831e98479e8f09912107be847379e55cb))
* iDFA获取模块重整 ([02bab81](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/02bab816d94bf87bd4504639870c1b08d5b9d1ba))
* release 3.2.0-beta ([115d234](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/115d23402fc8e714dc212fbc3bc2cf3e1c16e0b1))

------

## [3.1.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.0.2...3.1.0) (2021-04-07)

### Bug Fixes

* 修改头文件导入 ([2f759f1](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2f759f150916bb99857ecee0affc28818f132c6c))
* 添加队列出队，防止mobiledebugger无事件时队列数据无法读取 ([f7ddd92](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f7ddd92f1aec49635fdaf413401d60f11dc20898))
* 修改事件缓存机制，适配冷启动情况 ([a42ba83](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a42ba83b8f95d01fec307c389a58e6b0d76e055e))
* 修改网络配置去除多余代码，url路径使用属性 ([d821b6d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d821b6d362ce9b364d54bb1acda01428aadfbab2))
* log Level capitalization ([391d87d](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/391d87d45ab8502696458a70929b50861e48f0eb))
* mobiledebugger ([daadd83](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/daadd830e4e68f62008eb8ca964b0dec41470be3))
* test: updata testcase ([25b586c](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/25b586cf02b6b468c7cdd5ad99714f76da0eb92a))

### Features

* 防止数组遍历时增删操作，发布3.1.0-beta版本 ([2e7e70b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2e7e70bf8cc91645abc8bc7014a7ea006572f524))
* add mobiledebugger & mobileloggeradd ([6834cd4](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/6834cd458a4c6592298f9f7dc7fe4e2725361117))

------

### 更多发布细节请参考 [Github Releases](https://github.com/growingio/growingio-sdk-ios-autotracker/releases)
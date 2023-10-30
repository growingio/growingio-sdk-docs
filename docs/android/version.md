---
title: 版本记录
sidebar_position: 0
---
----

<details>
<summary>GrowingIO Android SDK 各个版本对应关系</summary>

| GrowingIO SDK  | SDK Plugin    | Giokit      | SDK Demo | Flutter SDK |
| :--------------| :----------:  | :--------:  | :----:   | :----:      |
| 3.5.2          | 3.5.2         | 1.4.0       | 1.0.0    | 1.1.3       |
| 3.4.0-3.4.7    | 3.4.0-3.4.7   | 1.0.0-1.3.0 | ∅        | 1.0.0       |
| 3.1.0-3.3.6    | 3.1.0-3.3.6   | ∅           | ∅        | ∅           |

</details>

## RELEASE-3.5.2

- 加强无埋点对View为空的判断
- 隐藏无埋点配置项的接口

:::note 

 标签:**[v3.5.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.5.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-10-27** 

:::

## RELEASE-3.5.1

### Feature

- 增加初始化配置项 WebViewBridgeEnabled，控制所有 WebView 事件转发

### Bug Fix

- 修复Flutter圈选情况下 WebView 调用js不在主线程的问题

:::note 

 标签:**[v3.5.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.5.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-08-16** 

:::

## RELEASE-3.5.0

### Features

- startWithConfiguration: 初始化时传入 Context 替换原有的Application，Context 可以为 Application 或者 Activity([#193](https://github.com/growingio/growingio-sdk-android-autotracker/pull/193))；
- 删除 deprecated 过期代码，包括以下内容：`FilterEventType`, `FilterFieldType`, `EventAttrBuilder`, advert sdk api , `UploadExceptionEnabled`接口和 `EventFilterInterceptor` 过滤器的 `filterEventGroup` 接口；
- 添加忽略View点击的接口： `ignoreViewClick(view,boolean)`;
- 优化logger的对外输出；
- 优化对ViewTree的监听，只有在需要曝光事件和获取截图的情况下进行监听；
- 无埋点事件优化：滑动状态的控件发送VIEW_CHANGE事件，选中状态的控件textValue上报状态；
-  增加初始化配置setImeiEnabled 默认 false

### Bug Fixes

- 修复在Android O 机型上截图出错的情况（截图时报错）；
- 修复当中间 fragment 未被注入时导致 fragment 的 findParent 为空的问题；
- 修复mobileDebugger logger日志循环接收发送的问题。

:::note 

 标签:**[v3.5.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.5.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-06-21** 

:::

## RELEASE-3.4.7

1. 添加 GrowingIO Flutter SDK 模块，需要与[Growingio Flutter Plugin](https://growingio.github.io/growingio-sdk-docs/docs/framework/flutter)联合使用；
2. 重命名 Protobuf 模块包名=> `com.growingio.android.protobuf`；
3. 添加 CacheEventProvider，用于SDK初始化前存储需要发送的事件；
4. 添加新Saas SDK，设置通用请求接口域名。

:::note 

 标签:**[v3.4.7](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.7)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-04-07** 

:::

## RELEASE-3.4.6

### Features

- 添加 DeepLink 新的广告模块，能够接受外部传入的 URL 信息并发送给应用 ([#184](https://github.com/growingio/growingio-sdk-android-autotracker/pull/184))
- 添加 doDeepLinkByUrl 接口提供使用；
- APM事件和属性标识符重命名 ([#185](https://github.com/growingio/growingio-sdk-android-autotracker/pull/185))


:::note 

 标签:**[v3.4.6](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.6)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-02-23** 

:::

## RELEASE-3.4.5

### Features

- page attributes ([#186](https://github.com/growingio/growingio-sdk-android-autotracker/pull/186))


:::note 

 标签:**[v3.4.5](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.5)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-12-15** 

:::

## RELEASE-3.4.4

### Features

- APM模块 ([#177](https://github.com/growingio/growingio-sdk-android-autotracker/pull/177))

### Bug Fixes

- circle计算xpath异常 ([#179](https://github.com/growingio/growingio-sdk-android-autotracker/pull/179))


:::note 

 标签:**[v3.4.4](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.4)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-11-17** 

:::

## RELEASE-3.4.3

### Features

- 添加广告的激活事件([#173](https://github.com/growingio/growingio-sdk-android-autotracker/pull/173))
- 添加更多元化的事件过滤

### Bug Fixes

- bom version([#175](https://github.com/growingio/growingio-sdk-android-autotracker/pull/175))
- negative array([#176](https://github.com/growingio/growingio-sdk-android-autotracker/pull/176))


:::note 

 标签:**[v3.4.3](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.3)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-11-03** 

:::

## RELEASE-3.4.2

### Features

- 新增埋点事件计时功能相关接口([#172](https://github.com/growingio/growingio-sdk-android-autotracker/pull/172))

### Bug Fixes

- 修复sessionId设置时机，避免可能出现空值([#171](https://github.com/growingio/growingio-sdk-android-autotracker/pull/171))

:::note 

 标签:**[v3.4.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-09-20** 

:::

## RELEASE-3.4.1

### Bug Fixes

* findPage getTitle() 增加非空判断 ([#164](https://github.com/growingio/growingio-sdk-android-autotracker/issues/164))
* 确保获取AndroidId方法只被调用一次  ([#165](https://github.com/growingio/growingio-sdk-android-autotracker/issues/165))

:::note 

 标签:**[v3.4.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-08-02** 

:::

## RELEASE-3.4.0

### Features
- 移除injector和gradle-plugin，已迁移到 [sdk plugin](https://github.com/growingio/growingio-sdk-android-plugin) ([#154](https://github.com/growingio/growingio-sdk-android-autotracker/pull/154))
- gradle-plugin 适配 AGP 8.0 Instrumentation API，兼容 AGP4.2及其更早版本的 Transform API；
- gradle-plugin 兼容 AGP 7.0 及其以上 pluginManagement 的依赖方式；
- gradle-plugin 优化插件对脱糖的处理，并提供了完整的单元测试；
- injector 使用描述文件和 KSP kotlin 注解处理器生成 kotlin 注入代码，快速安全。

### Bug Fixes
- 修复SessionInterval 设置过短，当app启动耗时过长，会导致刷新session重发vst([#154](https://github.com/growingio/growingio-sdk-android-autotracker/pull/154))

:::note 

 标签:**[v3.4.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.4.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-07-07** 

:::

## RELEASE-3.3.6

### Bug Fixes

- 修复原生页面有webview 或 dialog不能圈选的问题 ([#152](https://github.com/growingio/growingio-sdk-android-autotracker/pull/152))
- 其他优化 ([#149](https://github.com/growingio/growingio-sdk-android-autotracker/pull/149))

### Features

- 用户属性支持列表类型 ([#151](https://github.com/growingio/growingio-sdk-android-autotracker/issues/151))



:::note 

 标签:**[v3.3.6](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.6)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-04-28** 

:::

## RELEASE-3.3.5

### Bug Fixes

- Android 5以下机型webview注入崩溃修复 ([#145](https://github.com/growingio/growingio-sdk-android-autotracker/pull/145)) 
- 其他优化

### Features

- 埋点事件属性支持列表类型 ([#146](https://github.com/growingio/growingio-sdk-android-autotracker/pull/146)) 
- 添加sdk模块的混淆规则 ([#148](https://github.com/growingio/growingio-sdk-android-autotracker/pull/148)) 

:::note 

 标签:**[v3.3.5](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.5)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-03-17** 

:::

## RELEASE-3.3.4

### Features

- 添加初始化开关setRequireAppProcessesEnabled，控制是否获取应用多进程id
- 添加初始化接口 addConfiguration，用于设置模块的配置项
- 适配到OAID SDK 1.1.0，添加OaidConfig，方便用户传入Oaid值和设置证书

 

:::note 

 标签:**[v3.3.4](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.4)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-01-21** 

:::

## RELEASE-3.3.3

### Bug Fixes

* 修复sonar提示的缺陷 ([#137](https://github.com/growingio/growingio-sdk-android-autotracker/pull/137))
### Features
- 添加protobuf数据格式，用于存储和上传 ([#133](https://github.com/growingio/growingio-sdk-android-autotracker/pull/133))；
- 给Web端增加设置和清除UserKey的接口 ([#132](https://github.com/growingio/growingio-sdk-android-autotracker/pull/132)) ；
- autotracker 插件适配java11 ([#136](https://github.com/growingio/growingio-sdk-android-autotracker/pull/136)) ;

:::note 

 标签:**[v3.3.3](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.3)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-12-23** 

:::

## RELEASE-3.3.2

### Bug Fixes

* databse or disk is full ([c83e64f](https://github.com/growingio/growingio-sdk-android-autotracker/commit/c83e64f712b94cce2942ac77dcfa756f5dc78ad6))
* inject webview异常修复 ([95eb1df](https://github.com/growingio/growingio-sdk-android-autotracker/commit/95eb1dfa9b221b226aedd4dfb80865cd29950258))
* remove unboxing and check data is not null ([2aebf29](https://github.com/growingio/growingio-sdk-android-autotracker/pull/123/commits/2aebf29d8e7f37efde353686fa87fa2e35af5597))
* 支持对5G网络类型的判断 ([#130](https://github.com/growingio/growingio-sdk-android-autotracker/pull/130))

:::note 

 标签:**[v3.3.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-11-24** 

:::

## RELEASE-3.3.1

### Bug Fixes

* unknow contentprovider ([3de0829](https://github.com/growingio/growingio-sdk-android-autotracker/commit/3de082941cbd30952cb47964a3cac636d9af80c5))
* 修复多线程使用mobile debugger时，偶发异常的问题
* 修复okhttp3请求结束后未close response body


### Features

* saas demo转为cdp demo ([#117](https://github.com/growingio/growingio-sdk-android-autotracker/issues/117)) ([58330cf](https://github.com/growingio/growingio-sdk-android-autotracker/commit/58330cfaa144b1dcd5e9e6353df81c117357adb7))


:::note 

 标签:**[v3.3.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-10-28** 

:::

## RELEASE-3.3.0

Android 无埋点/埋点 SDK 3.3.0
### Bug Fixes

* bridgeWebView无效 ([2c63642](https://github.com/growingio/growingio-sdk-android-autotracker/commit/2c63642f85ab50700a62ba07e50a9b4aa5dbbc69))
* ci中ndk环境升级 ([#107](https://github.com/growingio/growingio-sdk-android-autotracker/issues/107)) ([d5924e6](https://github.com/growingio/growingio-sdk-android-autotracker/commit/d5924e6e80354e7ee856bb5421f6372f678f03bb))
* menuitem的title如果为null导致npe ([5f1e9f0](https://github.com/growingio/growingio-sdk-android-autotracker/commit/5f1e9f0a31c2bbaca0aedd171fbcd3cd793f56f1))
* webview looper检查 ([69e6c1a](https://github.com/growingio/growingio-sdk-android-autotracker/commit/69e6c1ad248488c2a4f21baf24ec5ea8f4f0d26a))
* 增加oaid本地发版配置 ([ded0395](https://github.com/growingio/growingio-sdk-android-autotracker/commit/ded0395950973c2bd1e19344f4834c99197111e0))
* 外部函数对参数校验 ([34d86c2](https://github.com/growingio/growingio-sdk-android-autotracker/commit/34d86c2e275eb09f14e18308fc2ba7c47e363c42))
* 过滤事件及字段of函数传null崩溃 ([a0b02dd](https://github.com/growingio/growingio-sdk-android-autotracker/commit/a0b02dd34891ec92142779560fbac4b9bfd4bd8f))
* 适配中文 ([31e41ff](https://github.com/growingio/growingio-sdk-android-autotracker/commit/31e41ffd2aa288effe362f2d27e2208e79f33b08))
* 配置增加模块注册 ([3ddae53](https://github.com/growingio/growingio-sdk-android-autotracker/commit/3ddae532dc43c461c7ac5da3b26ff2def20e3f05))


### Features

* idmapping ([5a4bac8](https://github.com/growingio/growingio-sdk-android-autotracker/commit/5a4bac88fc33f2ec1396b64583d5984224abae9b))
* 适配oaid1.0.27版本 ([b216efa](https://github.com/growingio/growingio-sdk-android-autotracker/commit/b216efa533c7e2c9e869c47aa652f6725c407cf3))


:::note 

 标签:**[v3.3.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.3.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-10-09** 

:::

## V3.2.2

### Bug Fixes

* memory leak ([4b74679](https://github.com/growingio/growingio-sdk-android-autotracker/commit/4b74679ad3ba86d91e660ed34249d645ca471a0c))
* 业务和配置逻辑分离 ([2c6dc5a](https://github.com/growingio/growingio-sdk-android-autotracker/commit/2c6dc5a33ea0866b8e8a48157896310cbac1e7fe))
* 修复多线程导致前后台判断异常 ([f109d3b](https://github.com/growingio/growingio-sdk-android-autotracker/commit/f109d3b255beac5903cc19786ba30aa3266b19c9))
* 修复子线程初始化问题 ([0b06618](https://github.com/growingio/growingio-sdk-android-autotracker/commit/0b06618740fe64c7d9eb2dd99ac61b0107c6e48c))


:::note 

 标签:**[v3.2.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-09-09** 

:::

## RELEASE-3.2.1

Android 无埋点/埋点 SDK 3.2.1
### Bug Fixes

-  mobile debugger 少发logger_data ([16e613f](https://github.com/growingio/growingio-sdk-android-autotracker/commit/16e613ffd01cc9a1da2895cbc2c7b2b8f4e85753))
- PI-35149 按照协议发送client_info ([3a26c19](https://github.com/growingio/growingio-sdk-android-autotracker/commit/3a26c1914a745f3d1f09f32650334e2beb540de8))
-  resend时vst的timestamp可能为0 ([#87](https://github.com/growingio/growingio-sdk-android-autotracker/issues/87)) ([df534a7](https://github.com/growingio/growingio-sdk-android-autotracker/commit/df534a7c7edf3e0742f01854b98ebc62742e67cf))
- 修复未初始化时，webview注入崩溃的问题 ([#74](https://github.com/growingio/growingio-sdk-android-autotracker/issues/74)) ([0e04e71](https://github.com/growingio/growingio-sdk-android-autotracker/commit/0e04e717473921dc8ecadd4f5683da4be42d76cc))
- 修复延迟初始化可能导致的session错误([24534a7](https://github.com/growingio/growingio-sdk-android-autotracker/pull/92))
- 多进程session保持同步 ([a76182f](https://github.com/growingio/growingio-sdk-android-autotracker/commit/a76182fc81c3e507097ff46fb30b7df33d1f7132))
- 数据采集接口设置无效 ([a1c92b0](https://github.com/growingio/growingio-sdk-android-autotracker/commit/a1c92b043858cedc8674e9bca809378a74463f19))


### Features

- sonarcloud check ([#84](https://github.com/growingio/growingio-sdk-android-autotracker/issues/84)) ([479d10c](https://github.com/growingio/growingio-sdk-android-autotracker/commit/479d10cba39ed4026765b5a0b4b0854ab3ae6e94))
- 区分support包 ([#89](https://github.com/growingio/growingio-sdk-android-autotracker/issues/89)) ([bf4bfd1](https://github.com/growingio/growingio-sdk-android-autotracker/commit/bf4bfd1eeea6a173d2a3f9d347e0a1c2e2aa6aac))
- 增加字段过滤和事件过滤 ([937caee](https://github.com/growingio/growingio-sdk-android-autotracker/commit/937caee1acf6ed0db603704a07fc92d76bd3b4a0))
- 适配更多场景 ([579d12f](https://github.com/growingio/growingio-sdk-android-autotracker/commit/579d12f0f429f1405687c4288d8759ef428e8f7f))


:::note 

 标签:**[v3.2.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-09-01** 

:::

## RELEASE-3.2.0

Android 无埋点/埋点 SDK 3.2.0

更新内容：
1. 通过模块配置实现数据加密
2. 修复多进程访问db, 进程锁的使用导致app崩溃的问题
3. 更新3.2.0测量协议

:::note 

 标签:**[v3.2.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.2.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-06-03** 

:::

## RELEASE-3.1.0

Android   无埋点/埋点 SDK 3.1.0

1. 支持mobile debugger功能
2. 仓库从JCenter迁移到MavenCentral
3. 提高sdk稳定性

:::note 

 标签:**[v3.1.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v3.1.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-04-26** 

:::

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-android-autotracker/releases)
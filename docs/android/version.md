---
title: 版本记录
sidebar_position: 0
---

:::tip SDK下载信息
类型：统计类 <br/>
开发者：北京易数科技有限公司 <br/>
无埋点包名：com.growingio.android.sdk.autotrack <br/>
最新版本：v4.5.2 <br/>
更新时间：2025-11-11 <br/>
功能说明：GrowingIO用户行为数据采集软件开发工具包（CDP）具备自动采集基本的用户行为事件，比如访问和行为数据等。目前支持代码埋点、无埋点、可视化圈选、热图等功能。<br/>
下载地址：[Maven官方仓库](https://repo1.maven.org/maven2/com/growingio/android/) <br/>
个人信息处理规则：[隐私协议](https://accounts.growingio.com/user-privacy) <br/>
使用说明：[SDK集成文档](/docs/android/Introduce) <br/>
合规说明：[SDK合规说明](/knowledge/compliance/androidCompliance) <br/>
:::

## RELEASE-4.5.2
## Features
* 页面事件添加来源页面属性 [#236](https://github.com/growingio/growingio-sdk-android-autotracker/pull/236)


:::note 

 标签:**[v4.5.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.5.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-11-11** 

:::

## RELEASE-4.5.1
## Bug Fixes
* 修复: 设备空间不足时，由于发送visit的标记无法在文件中修改导致循环发送visit事件 [#235](https://github.com/growingio/growingio-sdk-android-autotracker/pull/235)


:::note 

 标签:**[v4.5.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.5.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-10-11** 

:::

## RELEASE-4.5.0
### Features
1. 优化数据库事件的发数逻辑，将已经发送失败的优先级下调为最后发送；
2. 为无埋点添加新的接口：setPageTitle，用于手动设置页面的标题，设置null时取消已经设置的标题；
3. 由于mavenCentral地址的变更，修改sdk的发布插件。


:::note 

 标签:**[v4.5.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.5.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-09-05** 

:::

## RELEASE-4.4.3
### Features
- 支持获取更多设备信息，如：添加新的设备类型：TV 和 FOLD；在折叠屏下，及时刷新分辨率([#230](https://github.com/growingio/growingio-sdk-android-autotracker/pull/230))

### Bug Fixes
- 偶现 TipView crash([#229](https://github.com/growingio/growingio-sdk-android-autotracker/pull/229))

:::note 

 标签:**[v4.4.3](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.4.3)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-05-12** 

:::

## RELEASE-4.4.2
### Features
- 将 apm 的 gmonitor 部分代码移入 Android SDK 中统一管理([#227](https://github.com/growingio/growingio-sdk-android-autotracker/pull/227))

### Bug Fixes
- Demo进入 Flutter页面 debugger 总是打开([#228](https://github.com/growingio/growingio-sdk-android-autotracker/pull/228))
- 添加混淆规则([#228](https://github.com/growingio/growingio-sdk-android-autotracker/pull/228))

:::note 

 标签:**[v4.4.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.4.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-04-01** 

:::

## RELEASE-4.4.1
### Features
- AB测试模块在判断为新设备时添加 newDevice 请求参数 ([#225](https://github.com/growingio/growingio-sdk-android-autotracker/pull/225))
- SDK Release 环境下能打印 Logger.i 的日志。

:::note 

 标签:**[v4.4.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.4.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-02-13** 

:::

## RELEASE-4.4.0
### Features
Growingio Android 无埋点 SDK 支持 Jetpack Compose 框架([#219](https://github.com/growingio/growingio-sdk-android-autotracker/pull/219))：
- 初始化时添加 `ComposeLibraryGioModule` 模块引入功能；
- 需要手动指定 Compose 页面来发送无埋点事件与支持无埋点圈选；
- 支持与 Android 原生 View 体系页面嵌套。

### Bug Fixes
- 修复在圈选过程中打开 Flutter 界面无法进入 Flutter 圈选的问题。

:::note 

 标签:**[v4.4.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.4.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2025-01-08** 

:::

## RELEASE-4.3.2
### Features

- 增加配置项，支持对 webview 注入 js sdk  ([#222](https://github.com/growingio/growingio-sdk-android-autotracker/pull/222))

- 增加配置项，支持 Custom 事件携带上一个 Page 事件的path ([#221](https://github.com/growingio/growingio-sdk-android-autotracker/pull/221))

- abtest返回结果和入组事件添加实验名称 ([#220](https://github.com/growingio/growingio-sdk-android-autotracker/pull/220))

### Bug Fixes

- 偶现调用 ContentProviderClient.release() 空异常  ([#223](https://github.com/growingio/growingio-sdk-android-autotracker/pull/223))

:::note 

 标签:**[v4.3.2](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.3.2)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-10-29** 

:::

## RELEASE-4.3.1
Features：
1. 默认新Saas域名配置由 http 改为 https;
2. 项目上的配置包括kotlin,gradle等升级；[#218](https://github.com/growingio/growingio-sdk-android-autotracker/pull/218)

Bug Fixes：
1. 修复上传 hybrid 页面事件时未携带 orientation 属性的问题。

:::note 

 标签:**[v4.3.1](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.3.1)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-08-09** 

:::

## RELEASE-4.3.0
Features：
1. SDK添加无埋点功能开关，可以直接切换至埋点SDK [#213](https://github.com/growingio/growingio-sdk-android-autotracker/pull/213)
2. 添加全局动态通用属性功能 [#215](https://github.com/growingio/growingio-sdk-android-autotracker/pull/215)
3. 添加配置项用于配置数据缓存时间 [#216](https://github.com/growingio/growingio-sdk-android-autotracker/pull/216)

Bug Fixes：
1. 当在Debug环境下输出的json日志过大时缩减其文本；
2. 网路请求返回 413 时将删除上传时错误的数据。

:::note 

 标签:**[v4.3.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.3.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-05-09** 

:::

## RELEASE-4.2.0
### Features

- 使用CDP(3.0)的无埋点规则，与4.0同步最新的功能模块 ([#209](https://github.com/growingio/growingio-sdk-android-autotracker/pull/209))

- 添加更多未知的设备id ([#210](https://github.com/growingio/growingio-sdk-android-autotracker/pull/210))

- 无埋点SDK添加Page采集配置 ([#211](https://github.com/growingio/growingio-sdk-android-autotracker/pull/211))

- 数据上报时body限制不超过2M ([#212](https://github.com/growingio/growingio-sdk-android-autotracker/pull/212))

:::note 

 标签:**[v4.2.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.2.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-04-03** 

:::

## RELEASE-4.1.0
### Features

- Flutter 模块支持无埋点SDK 4.0逻辑  ([#206](https://github.com/growingio/growingio-sdk-android-autotracker/pull/206))

- 支持识别设备是否为 HarmonyOS ([#207](https://github.com/growingio/growingio-sdk-android-autotracker/pull/207))

### Bug Fixes

- 修复pb格式上报数据多了operatingSystem字段 ([#207](https://github.com/growingio/growingio-sdk-android-autotracker/pull/207))

- 修复fragment tag 随机赋值的问题 ([#208](https://github.com/growingio/growingio-sdk-android-autotracker/pull/208))

:::note 

 标签:**[v4.1.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.1.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-01-25** 

:::

## RELEASE-4.0.0
新版本4.0.0，架构调整和无埋点业务需求([#195](https://github.com/growingio/growingio-sdk-android-autotracker/pull/195))。

### 架构调整
1. 自定义模块接口变化：模块接口由 registerComponents(Context,Registery) => registerComponents(TrackerContext);
2. Provider不再单例，统一由TrackerContext管理，对外隐藏API，方便测试和管理；
3. 添加注解 JsonSerializer，为所有基于BaseEvent的实体类生成JSON的解析类；
4. 添加 shutdown 方法，用于关闭SDK的运行；
5. 默认将以 Pb 协议上报埋点数据，兼容JSON数据转化为PB格式；
6. 添加 downgrade() 方法，调用后SDK将会以旧版本（V3）逻辑上报无埋点数据，包括圈选时上报的数据；
7. 删除 checkstyle，使用 spotless 规范代码;
8. 默认关闭AndroidId、读取剪切板、获取进程号信息，需要用户自己需要时打开;
9. Giokit 可以通过AGP插件配置引入。

### 无埋点业务需求
1. 部分重发逻辑优化和省略；
2. 测量协议更改以及去掉部分属性和事件；
3. APP端的page事件由自动采集改为客户标识采集；
4. 自定义事件将自动关联页面属性上报；
5. 无埋点事件xpath和path将携带完整路径。

:::note 

 标签:**[v4.0.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.0.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-12-26** 

:::

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-android-autotracker/releases)
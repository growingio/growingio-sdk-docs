---
sidebar_position: 1
title: 老SaaS(2.0)API对照表
---

Saas SDK 2.x APIs 调用类为 `Growing`，通过类方法进行调用，比如 `[Growing setUserId:@"123456"];`.

SDK 4.x APIs 调用类为 `GrowingAutotracker`，使用 `[GrowingAutotracker sharedInstance]` 获取单例后，通过实例方法进行调用，比如 `[[GrowingAutotracker sharedInstance] setLoginUserId:@"123456"];`.

### 兼容 APIs

| SaaS 2.x APIs                                                | 4.x APIs                                                     | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| +[Growing sdkVersion]                                        | -                                                            | SDK版本号                                                    |
| +[Growing getDeviceId]                                       | -[GrowingAutotracker getDeviceId]                            | 获取设备id                                                   |
| +[Growing getVisitUserId]                                    | -[GrowingAutotracker getDeviceId]                            | 获取访问用户id                                               |
| +[Growing getSessionId]                                      | -                                                            | 获取session id                                               |
| +[Growing disableDataCollect]<br/>+[Growing enableDataCollect] | -[GrowingAutotracker setDataCollectionEnabled:]              | 开启/关闭采集                                                |
| +[Gowing track:]<br/>+[Growing track:withNumber:]<br/>+[Growing track:withVariable:]<br/>+[Growing track:withNumber:andVariable:] | -[GrownigAutotracker trackCustomEvent:]<br/>-[GrownigAutotracker trackCustomEvent:withAttributes:] | 发送自定义埋点事件<br/>平台已经废弃数值型，num直接丢弃处理   |
| +[Growing setUserId:]<br/>+[Growing clearUserId]             | -[GrowingAutotracker setLoginUserId:]<br/>-[GrowingAutotracker cleanLoginUserId] | 设置/清除登录用户id                                          |
| +[Growing setPeopleVariable:]<br/>+[Growing setPeopleVariableWithKey:andStringValue:]<br/>+[Growing setPeopleVariableWithKey:andNumberValue:] | -[GrowingAutotracker setLoginUserAttributes:]                | 设置登录用户变量                                             |
| +[Growing getUrlScheme]                                      | -                                                            | 获取urlscheme                                                |
| +[Growing getEnableLog]                                      | -                                                            | 获取是否开启日志                                             |
| +[Growing getFlushInterval]                                  | -                                                            | 获取发数间隔                                                 |
| +[Growing getSessionInterval]                                | -                                                            | 获取session间隔                                              |
| +[Growing getDailyDataLimit]                                 | -                                                            | 获取单日流量限制                                             |
| +[Growing autoTrackKitVersion]                               | -                                                            | SDK版本信息                                                  |
| +[Growing globalImpScale]                                    | -                                                            | 获取全局曝光因子                                             |
| UIView<br/>@property (nonatomic, assign) BOOL growingAttributesDonotTrack | UIView<br/>@property (nonatomic, assign) GrowingIgnorePolicy growingViewIgnorePolicy | 设置单个View是否可追踪 设置对应growingViewIgnorePolicy<br/>获取单个View是否可追踪 返回是否是growingViewIgnorePolicy |
| UIView<br/>@property (nonatomic, copy) NSString* growingAttributesValue | UIView<br/>@property (nonatomic, copy) NSString *growingViewCustomContent | 设置单个View的内容 设置对应growingViewCustomContent<br/>获取单个View的内容 返回对应growingViewCustomContent |
| UIView<br/>@property (nonatomic, copy) NSString* growingAttributesUnqiueTag | UIView<br/>@property (nonatomic, copy) NSString *growingUniqueTag | 设置单个View的唯一标识 设置对应growingUniqueTag<br/>获取单个View的唯一标识 返回对应growingUniqueTag |
| -[UIView growingImpTrack:]<br/>-[UIView growingImpTrack:withNumber:]<br/>-[UIView growingImpTrack:withVariable:]<br/>-[UIView growingImpTrack:withNumber:andVariable:]<br/>-[UIView growingStopImpTrackl:] | -[UIView growingTrackImpression:]<br/>-[UIView growingTrackImpression:attribtues:]<br/>-[UIView growingStopTrackImpression] | 半自动开启/关闭采集浏览事件                                  |

### 不兼容 APIs

| SaaS 2.x APIs                                                | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| +[Growing setUrlScheme:]                                     | 设置urlscheme，Adapter 中为空实现<br/>请通过初始化配置urlScheme |
| +[Growing setEnableLog:]                                     | 设置是否开启日志，Adapter 中为空实现<br/>请通过初始化配置debugEnabled |
| +[Growing setFlushInterval:]                                 | 设置发数间隔，Adapter 中为空实现<br/>请通过初始化配置dataUploadInterval |
| +[Growing setSessionInterval:]                               | 设置session间隔，Adapter 中为空实现<br/>请通过初始化配置sessionInterval |
| +[Growing setDailyDataLimit:]                                | 设置单日流量限制，Adapter 中为空实现<br/>请通过初始化配置cellularDataLimit，单位MB |
| +[Growing setTrackerHost:]                                   | 设置采集服务地址，Adapter 中为空实现<br/>请通过初始化配置dataCollectionServerHost |
| +[Growing bridgeForWKWebView:]                               | 设置打通内嵌页，Adapter 中为空实现<br/>若集成无埋点SDK，将自动bridge；集成埋点SDK，则需要额外集成H5混合模块 |
| +[Growing setReadClipBoardEnable:]                           | 是否读取剪切板，Adapter 中为空实现<br/>请通过初始化配置readClipboardEnabled，需要额外集成广告模块 |
| +[Growing setAsaEnabled:]                                    | 是否获取Apple Search Ads归因数据，Adapter 中为空实现<br/>请通过初始化配置ASAEnabled，需要额外集成广告模块 |
| +[Growing registerDeeplinkHandler:]                          | 注册deeplink全局callback，获取回调参数，Adapter 中为空实现<br/>请通过初始化配置deepLinkCallback，需要额外集成广告模块 |
| +[Growing handleUrl:]                                        | url scheme处理方法，Adapter 中返回默认值 NO<br/>自动适配，无需手动调用 |
| +[Growing isDeeplinkUrl:]                                    | 是否是GrowngIO的scheme，Adapter 中返回默认值 NO<br/>已废弃   |
| +[Growing doDeeplinkByUrl:callback:]                         | 手动执行deeplink处理，Adapter 中返回默认值 NO<br/>请使用-[GrowingAdvertising doDeeplinkByUrl:callback:]替代，需要额外集成广告模块 |
| +[Growing setUploadExceptionEnable:]                         | 设置是否上报SDK异常，Adapter 中为空实现<br/>已废弃，如需上报崩溃异常，请额外集成APM模块 |
| +[Growing setAspectMode:]                                    | 设置数据采集模式，Adapter 中为空实现<br/>已废弃              |
| +[Growing getAspectMode]                                     | 获取数据采集模式，Adapter 中返回默认值 GrowingAspectModeDynamicSwizzling<br/>已废弃 |
| +[Growing setBundleId:]                                      | 设置bundleId，Adapter 中为空实现<br/>已废弃                  |
| +[Growing getBundleId]                                       | 获取bundleId，Adapter 中返回空字符串<br/>已废弃              |
| +[Growing setEnableDiagnose:]                                | 是否允许发送性能诊断信息，Adapter 中为空实现<br/>已废弃      |
| +[Growing disablePushTrack:]                                 | 设置是否采集推送，Adapter 中为空实现<br/>已废弃              |
| +[Growing getDisablePushTrack]                               | 获取是否采集推送，Adapter 中返回默认值 NO<br/>已废弃         |
| +[Growing setEnableLocationTrack:]                           | 设置是否采集地理信息，Adapter 中为空实现<br/>已废弃          |
| +[Growing getEnableLocationTrack]                            | 获取是否采集地理信息，Adapter 中返回默认值 NO<br/>已废弃     |
| +[Growing setEncryptStringBlock:]                            | 设置字段加密函数（即元素内容），Adapter 中为空实现OP 已废弃  |
| +[Growing disable]                                           | 全局不发送统计信息，Adapter 中为空实现<br/>已废弃            |
| +[Growing setDataHost:]                                      | 设置数据查看平台地址，Adapter 中为空实现<br/>已废弃          |
| +[Growing setAssetsHost:]                                    | 设置数据后台服务地址，Adapter 中为空实现<br/>已废弃          |
| +[Growing setGtaHost:]                                       | 设置数据后台服务地址，Adapter 中为空实现<br/>已废弃          |
| +[Growing setWsHost:]                                        | 设置数据后台服务地址，Adapter 中为空实现<br/>已废弃          |
| +[Growing setReportHost:]                                    | 设置设备报活服务器地址，Adapter 中为空实现<br/>已废弃        |
| +[Growing setZone:]                                          | 设置zone信息，Adapter 中为空实现<br/>已废弃                  |
| +[Growing setDeviceIDModeToCustomBlock:]                     | 用户自定义deviceId，覆盖匿名id，Adapter 中为空实现<br/>已废弃 |
| +[Growing setEvar]<br/>+[Growing setEvarWithKey:andStringValue:]<br/>+[Growing setEvarWithKey:andNumberValue:] | 设置转换变量，Adapter 中为空实现<br/>已废弃                  |
| +[Growing setVisitor:]                                       | 设置访问用户变量，Adapter 中为空实现<br/>已废弃              |
| +[Growing registerRealtimeReportHandler:]                    | 注册实时发送数据的回调（客户需要数据到自己服务器的场景），Adapter 中为空实现<br/>已废弃 |
| +[Growing setGlobalImpScale]                                 | 设置全局曝光因子，Adapter 中为空实现<br/>请通过初始化配置impressionScale |
| +[Growing setHybridJSSDKUrlPrefix:]                          | 设置数据后台服务地址，Adapter 中为空实现<br/>已废弃          |
| +[Growing enableAllWebViews:]                                | 设置是否采集WKWebView，Adapter 中为空实现<br/>已废弃，请通过UIView分类属性growingViewIgnorePolicy设置单个webView采集；3.6.0 及以上可以通过配置 autoBridgeEnabled |
| +[Growing enableHybridHashTag:]                              | 设置是否启用hashtag，Adapter 中为空实现<br/>已废弃，请通过Web JS SDK配置 |
| +[Growing isTrackingWebView]                                 | 获取是否采集WKWebView，Adapter 中为返回默认值 YES<br/>已废弃；3.6.0 及以上可以通过 isBridgeForWebViewEnabled 获取 |
| +[Growing setImp]                                            | 设置是否启用曝光，Adapter 中为空实现<br/>已废弃              |
| +[Growing setPageVariable:toViewController:]<br/>+[Growing setPageVariableWithKey:andStringValue:toViewContoller:]<br/>+[Growing setPageVariableWithKey:andNumberValue:toViewController:] | 设置页面级变量，Adapter 中为空实现<br/>已废弃；4.x 及以上请参考集成文档使用 autotrackPage |
| +[Growing setAppVariable:]<br/>+[Growing setAppVariableWithKey:andStringValue:]<br/>+[Growing setAppVariableWithKey:andNumberValue:] | 设置应用级变量，Adapter 中为空实现<br/>已废弃                |
| UIView<br/>@property (nonatomic, assign) double growingImpScale | setter 方法，设置单个View的曝光因子，Adapter 中为空实现，已废弃<br/>getter 方法，获取单个View的曝光因子，Adapter 中默认返回全局曝光因子 |
| UIView<br/>@property (nonatomic, assign) BOOL growingAttributesDonotTrackImp | setter 方法，设置单个View是否可追踪imp，Adapter 中为空实现<br/>getter 方法，获取单个View是否可追踪imp，Adapter 中默认返回 NO |
| UIView<br/>@property (nonatomic, assign) BOOL growingAttributesDonotTrackValue | setter 方法，设置单个View是否采集元素内容，Adapter 中为空实现<br/>getter 方法，获取单个View是否采集元素内容，Adapter 中默认返回 NO |
| UIView<br/>@property (nonatomic, strong) NSArray\<NSString *\> *growingSDCycleBanerIds | setter 方法，设置单个View（针对SDCycleBaner组件）设置bannerIds，Adapter 中为空实现<br/>getter 方法，获取单个View（针对SDCycleBaner组件），Adapter 中默认返回空数组 |
| UIView<br/>@property (nonatomic, assign) NSString* growingAttributesInfo | setter 方法，设置单个View的附加属性，Adapter 中为空实现<br/>getter 方法，获取单个View的附加属性，Adapter 中默认返回空字符串 |
| UIViewController<br/>@property (nonatomic, copy) NSString* growingAttributesInfo | setter 方法，设置单个VC的附加属性，Adapter 中为空实现<br/>getter 方法，获取单个VC的附加属性，Adapter 中默认返回空字符串 |
| UIViewController<br/>@property (nonatomic, copy) NSString* growingAttributesPageName | setter 方法，设置单个VC的别名，Adapter 中为空实现；4.x 及以上请参考集成文档使用 autotrackPage 设置别名<br/>getter 方法，获取单个VC的别名，Adapter 中默认返回空字符串 |
| WKWebView<br/>@property (nonatomic, assign) BOOL growingAttributesIsTracked | setter 方法，设置是否采集该WKWebView，Adapter 中为空实现<br/>getter 方法，获取是否采集该WKWebVIew，Adapter 中默认返回 NO |

### 其他

:::warning
其他报错的 API 需要手动移除 
:::

---
sidebar_position: 5
title: 广告模块
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

广告模块包括激活事件和深度链接 (DeepLink)，激活事件是当用户应用第一次打开时有且仅发一次的事件，深度链接是提供客户通过活动网页等形式提供 App 渠道的跳转和下载。 在深度链接技术场景中，可以直接唤起 App 并跳转至指定页面，同时根据条件判断用户跳转路径，当用户已经安装 App 时可以直接唤起 App，当用户未安装 App 时会引导用户下载 App。

:::info

平台版本 >=4.0 支持，产品使用文档可参考 [深度链接](https://docs.growingio.com/op-help/docs/4.0/product-manual/acquisition-analytics/acquisition-tracing/tracking-deeplink)

**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

--------


### 深度链接配置

1. 在顶部导航栏选择 **获客分析 -> 产品配置 -> 深度链接配置**，进入深度链接配置页面

  <ImageLoader path="img/common/product_config_deeplink" />

2. 找到需要配置的 iOS 应用，点击更多信息，查看当前应用的配置

3. 点击 Universal Link 编辑按钮，获取 Team ID 并填入表单中

  <ImageLoader path="img/ios/config_universal_link" />

<details>
  <summary>如何获取 Team ID</summary>

在苹果开发者网站中找到 Team ID 与 Bundle ID

<ImageLoader path="img/ios/config_team_id" />

</details>

4. 点击 **复制 Link** 按钮，在您的 Xcode 项目配置中打开 **Associated Domains** 功能，并将所复制的 Link 添加到 Associated Domains 列表中

   <ImageLoader path="img/ios/associated_domains" />
   <ImageLoader path="img/ios/associated_domains2" />


5. 勾选**我已完成 Xcode 配置，允许 Universal Link 跳转**，点击保存

<Tabs>
  <TabItem value="swiftPM" label="Swift Package Manager集成" default>

### 模块集成

1. 添加 **GrowingModule_Ads** Package

<ImageLoader path="img/ios/add_package_ads" />

2. 在 AppDelegate.swift 中导入 `import GrowingModule_Ads`

### 模块配置

广告模块中提供了相关配置：

| 配置接口               | 参数类型   | 是否必填 | 默认值 | 说明                         |
| :--------------------- | :--------- | :------: | :----- | :--------------------------- |
| `readClipboardEnabled` | `Bool`     |    否    | `true` | 是否允许读取剪切板的应用信息 |
| `deepLinkHost`         | `String`   |    否    | `https://link.growingio.com`  | 深度链接配置地址，SaaS取默认值   |
| `deepLinkCallback`     | `Closures` |    否    | `nil`  | 监听深度链接中的地址参数     |
| `caidFetchBlock`       | `Closures` |    否    | `nil`  | 若需要通过 CAID 进行归因分析时传入，具体见下方 CAID 配置，SDK 版本需 >=4.5.0 |

```swift
let config = AutotrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"

// 是否允许读取剪切板的应用信息
config?.readClipboardEnabled = true
// 深度链接配置地址
config?.deepLinkHost = "Your DeepLinkHost"
// 监听深度链接中的地址参数
config?.deepLinkCallback = { (params: [AnyHashable : Any]?,
                              processTime: TimeInterval,
                              error: Error?) -> Void in
}

Autotracker.start(config!, launchOptions: launchOptions)
```

### 主动触发 DeepLink

可以通过该方法手动发送 DeepLink 事件，该接口常用于应用内部广告获客接收

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `doDeeplink` | `URL`       | 是      | `null`  | 深度链接URL，示例：https://n.datayi.cn/k4wudMXn  |

```swift
let ads = Advertising.sharedInstance()
let callback = { (params: [AnyHashable : Any]?,
                  processTime: TimeInterval,
                  error: Error? ) -> Void in
}
ads.doDeeplink(by: URL(string: "Your DeepLinkUrl")!, callback: callback)
```

### 获取 Apple Search Ads 归因数据分析

如您需要使用 Apple Search Ads 归因数据分析，在 SDK 初始化时打开 ASAEnabled 开关：

```swift
let config = AutotrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"

// 打开 ASAEnabled 开关
config?.ASAEnabled = true

Autotracker.start(config!, launchOptions: launchOptions)
```

在 Target -> Build Phases -> Link Binary With Libraries，添加 **iAd.framework** 和 **AdServices.framework**，并设置 AdServices.framework status 为 **Optional**

<ImageLoader path="img/ios/adservices_framework" />

### CAID 配置

SDK 不采集 CAID，如您需要使用 CAID 进行归因分析，请自行获取后在 SDK 初始化时传入 caidFetchBlock：

```swift
let config = AutotrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"

// 传入 CAID 获取闭包
config?.caidFetchBlock = { (didCompleteBlock: @escaping (String) -> Void) -> Void in
    // 请求 CAID 接口，获取 CAID
    let caid = ...

    // 当获取 CAID 成功后，将得到的 CAID JSON 字符串作为参数，传入 SDK
    didCompleteBlock(caid)
}

Autotracker.start(config!, launchOptions: launchOptions)
```

传入的 CAID 需转为 JSON 字符串格式，示例：

```swift
let caid = """
[
    {"caid":"507b36cb169864220bc22a8c522532fa","version":"20220111"},
    {"caid":"e18a100398425c5026591525e844f7a7","version":"20230330"}
]
"""
```

:::info 注意

- 正常初始化情况下，SDK 会尝试通过该「CAID 获取闭包」获取 CAID，传入 SDK 的 CAID 将作为 ACTIVATE 事件的事件属性上报。
- 延迟初始化情况下，直到 SDK 初始化且同意 SDK 数据采集 (`dataCollectionEnabled` 为 `true`) 后，SDK 才尝试通过该「CAID 获取闭包」获取 CAID。
- 当超时 5 秒未调用 `didCompleteBlock`，则此前生成的 ACTIVATE 事件将使用上次获取到的通过内存缓存的 CAID(如果有)
:::

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

### 模块集成

1. 使用 Cocoapods 安装

```shell
pod 'GrowingAnalytics/Ads'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

2. 在 AppDelegate.m 中导入 `#import "GrowingAdvertising.h"`

### 模块配置

广告模块中提供了相关配置：

| 配置接口               | 参数类型   | 是否必填 | 默认值 | 说明                         |
| :--------------------- | :--------- | :------: | :----- | :--------------------------- |
| `readClipboardEnabled` | `BOOL`     |    否    | `YES`  | 是否允许读取剪切板的应用信息 |
| `deepLinkHost`         | `NSString` |    是    | `nil`  | 深度链接配置地址，示例：https://n.datayi.cn   |
| `deepLinkCallback`     | `Block`    |    否    | `nil`  | 监听深度链接中的地址参数     |
| `CAIDFetchBlock`       | `Block`    |    否    | `nil`  | 若需要通过 CAID 进行归因分析时传入，具体见下方 CAID 配置，SDK 版本需 >=4.5.0 |

```objectivec
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";

// 是否允许读取剪切板的应用信息
configuration.readClipboardEnabled = YES;
// 深度链接配置地址
configuration.deepLinkHost = @"Your DeepLinkHost";
// 监听深度链接中的地址参数
configuration.deepLinkCallback = ^(NSDictionary * _Nullable params, 
                                   NSTimeInterval processTime, 
                                   NSError * _Nullable error) {
};

[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```

### 主动触发 DeepLink

可以通过该方法手动发送 DeepLink 事件，该接口常用于应用内部广告获客接收

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `doDeeplinkByUrl` | `NSURL`       | 是      | `null`  | 深度链接URL，示例：https://n.datayi.cn/k4wudMXn  |

```objectivec
[[GrowingAdvertising sharedInstance] doDeeplinkByUrl:[NSURL URLWithString:@"Your DeepLinkUrl"]
                                            callback:^(NSDictionary * _Nullable params,
                                                       NSTimeInterval processTime,
                                                       NSError * _Nullable error) {
        
}];
```

### 获取 Apple Search Ads 归因数据分析

如您需要使用 Apple Search Ads 归因数据分析，在 SDK 初始化时打开 ASAEnabled 开关：

```objectivec
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";

// 打开 ASAEnabled 开关
configuration.ASAEnabled = YES;

[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```

在 Target -> Build Phases -> Link Binary With Libraries，添加 **iAd.framework** 和 **AdServices.framework**，并设置 AdServices.framework status 为 **Optional**

<ImageLoader path="img/ios/adservices_framework" />

### CAID 配置

SDK 不采集 CAID，如您需要使用 CAID 进行归因分析，请自行获取后在 SDK 初始化时传入 caidFetchBlock：

```objectivec
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";

// 传入 CAID 获取闭包
configuration.CAIDFetchBlock = ^(void (^ _Nonnull didCompleteBlock)(NSString * _Nonnull)) {
    // 请求 CAID 接口，获取 CAID
    NSString *caid = ...

    // 当获取 CAID 成功后，将得到的 CAID JSON 字符串作为参数，传入 SDK
    didCompleteBlock(caid);
};

[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```

传入的 CAID 需转为 JSON 字符串格式，示例：

```objectivec
NSString *caid =  @"["
@"{\"caid\":\"507b36cb169864220bc22a8c522532fa\",\"version\":\"20220111\"},"
@"{\"caid\":\"e18a100398425c5026591525e844f7a7\",\"version\":\"20230330\"}"
@"]";
```

:::info 注意

- 正常初始化情况下，SDK 会尝试通过该「CAID 获取闭包」获取 CAID，传入 SDK 的 CAID 将作为 ACTIVATE 事件的事件属性上报。
- 延迟初始化情况下，直到 SDK 初始化且同意 SDK 数据采集 (`dataCollectionEnabled` 为 `true`) 后，SDK 才尝试通过该「CAID 获取闭包」获取 CAID。
- 当超时 5 秒未调用 `didCompleteBlock`，则此前生成的 ACTIVATE 事件将使用上次获取到的通过内存缓存的 CAID(如果有)
:::

  </TabItem>
</Tabs>


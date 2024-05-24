---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 步骤 1: 集成准备
#### 获取 SDK 初始化参数：Account ID、DataSource ID、URL Scheme、ServerHost
:::info
AccountID：项目 ID，代表一个项目<br/>
DataSourceID：数据源 ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>
ServerHost：采集数据上报的服务器地址，非平台地址<br/>

Account ID、DataSource ID、URL Scheme 需要在 GrowingIO 平台上新建数据源，或从已创建的数据源中获取，如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showappdatasourceid" />

## 步骤 2: SDK 集成

选择您想要的 SDK 类型(无埋点 SDK 或埋点 SDK)，参考以下内容，添加到您的应用

SDK 类型与平台的支持关系：

| 目标平台 |    SDK 类型     | 功能模块支持 |
| :------: | :-------------: | :----------: |
|   iOS    | 无埋点/埋点 SDK |   所有模块   |
|  macOS   |    埋点 SDK     |      -       |
| watchOS  |    埋点 SDK     |      -       |
|   tvOS   | 无埋点/埋点 SDK |      -       |
| visionOS |    埋点 SDK     |      -       |

### 添加无埋点 SDK 到您的应用

1. 使用 Swift Package Manager 或 Cocoapods 添加无埋点 SDK 到您的应用

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

在 Xcode 菜单栏点击 File -> Add Packages... 或选择工程 -> 对应 Project -> Package Dependencies -> 点击 ➕

<ImageLoader path="img/ios/add_package_dependencies" />

搜索 GrowingAnalytics SDK GitHub 地址

```
https://github.com/growingio/growingio-sdk-ios-autotracker.git
```

并设置 Dependency Rule 为 Exact Version，输入要使用的 SDK 版本，Add to Project 选择您所需要的 Project

<ImageLoader path="img/ios/set_dependency_rule" />

:::info
我们建议您使用当前已发布的最新版本，您也可以根据需要选择较低版本 (>= 4.0.0)
:::

点击下方的 Add Package 按钮，选择 GrowingAutotracker，再次点击 Add Package 按钮

<ImageLoader path="img/ios/add_package_autotracker" />

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods">

在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/Autotracker', '~> 4.3.0'
```

打开终端，切换到项目目录
执行 `pod install` 或 `pod update`

  </TabItem>
</Tabs>

2. 在您的 `ApplicationDelegate` 中导入

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
import GrowingAutotracker
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
import GrowingAnalytics
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
#import "GrowingAutotracker.h"
```

  </TabItem>
</Tabs>

3. 将以下初始化代码添加到您的 `ApplicationDelegate` 的 `application(_:didFinishLaunchingWithOptions:)` 方法中。为使 App 合规，请参考[合规步骤](/knowledge/compliance/iosCompliance#合规步骤)

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
let config = AutotrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"
Autotracker.start(config!, launchOptions: launchOptions)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
let config = GrowingAutotrackConfiguration(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"
GrowingAutotracker.start(with: config!, launchOptions: launchOptions ?? [:])
```
  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";
[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```
  </TabItem>
</Tabs>

4. 如果您使用的是 SwiftUI，则必须创建一个 `ApplicationDelegate`，并通过 `UIApplicationDelegateAdaptor` 或 `NSApplicationDelegateAdaptor` 将其附加到 `App` 结构体
```swift
@main
struct Example_SwiftUIApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

### 添加埋点 SDK 到您的应用

:::info
埋点 SDK 只自动采集用户访问事件和 APP 关闭事件，其他事件均需要开发同学调用相应埋点 API 采集埋点事件。
:::

1. 使用 Swift Package Manager 或 Cocoapods 添加无埋点 SDK 到您的应用

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

在 Xcode 菜单栏点击 File -> Add Packages... 或选择工程 -> 对应 Project -> Package Dependencies -> 点击 ➕

<ImageLoader path="img/ios/add_package_dependencies" />

搜索 GrowingAnalytics SDK GitHub 地址

```
https://github.com/growingio/growingio-sdk-ios-autotracker.git
```

并设置 Dependency Rule 为 Exact Version，输入要使用的 SDK 版本，Add to Project 选择您所需要的 Project

<ImageLoader path="img/ios/set_dependency_rule" />

:::info
我们建议您使用当前已发布的最新版本，您也可以根据需要选择较低版本 (>= 4.0.0)
:::

点击下方的 Add Package 按钮，选择 GrowingTracker，再次点击 Add Package 按钮

<ImageLoader path="img/ios/add_package_tracker" />

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods">

在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/Tracker', '~> 4.3.0'
```

打开终端，切换到项目目录
执行 `pod install` 或 `pod update`

  </TabItem>
</Tabs>

2. 在您的 `ApplicationDelegate` 中导入

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
import GrowingTracker
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
import GrowingAnalytics
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
#import "GrowingTracker.h"
```

  </TabItem>
</Tabs>

3. 将以下初始化代码添加到您的 `ApplicationDelegate` 的 `application(_:didFinishLaunchingWithOptions:)` 方法中。为使 App 合规，请参考[合规步骤](/knowledge/compliance/iosCompliance#合规步骤)

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
let config = TrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"
Tracker.start(config!, launchOptions: launchOptions)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
let config = GrowingTrackConfiguration(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"
GrowingTracker.start(with: config!, launchOptions: launchOptions ?? [:])
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
// YourURLScheme eg: growing.123456789
GrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithAccountId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";
[GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];
```
  </TabItem>
</Tabs>

4. 如果您使用的是 SwiftUI，则必须创建一个 `ApplicationDelegate`，并通过 `UIApplicationDelegateAdaptor` 或 `NSApplicationDelegateAdaptor` 将其附加到 `App` 结构体
```swift
@main
struct Example_SwiftUIApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

## 步骤 3: App Extension 集成 (可选)

1. 如您的应用支持 App Extension，您还可添加 SDK 到您的 App Extension Target 上

:::info
在 App Extension 上，SDK 只自动采集用户访问事件，其他事件均需要开发同学调用相应埋点 API 采集埋点事件

请首先在 Containing App 按照步骤 2 进行 SDK 集成，并确保 Containing App 和 Extension 集成同一类 SDK：
* Containing App 集成无埋点 SDK，Extension 也需集成无埋点 SDK
* Containing App 集成埋点 SDK，Extension 也需集成埋点 SDK

SDK 自 4.1.0 起，支持 App Extension 集成
:::

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

添加 SDK 到对应的 Extension Target

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods">

添加 SDK 到 Podfile 中对应的 Extension Target
:::info
如果 Containing App 集成了 SDK 的功能模块，且 Containing App 和 Extension 都通过动态 framework 方式集成 SDK，需要保证 Extension 也集成相同的功能模块，否则在链接时将报错
:::

打开终端，切换到项目目录
执行 `pod install` 或 `pod update`

  </TabItem>
</Tabs>

2. 在您的 Extension 对应的 ViewController，导入 SDK，并在 `viewDidLoad` 方法中，初始化 SDK

## 步骤 4: 添加 URL Scheme （iOS 平台）

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。在 iOS 平台进行集成时，把 URL Scheme 添加到您的项目，以便使用 Mobile Debugger 等功能时唤醒您的应用。  

1. 选择工程 -> Target -> Info -> URL Types -> 点击 ➕ -> 添加您的 URL Scheme
<ImageLoader path="img/ios/iOS_Setting_URLScheme" />

2. 添加 URL Scheme 跳转以及 DeepLink 跳转的代理方法

<Tabs>
  <TabItem value="UIApplicationDelegate" label="UIApplicationDelegate" default>

  ```swift
  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
      return true
  }

  func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
      return true
  }
  ```

  </TabItem>
  <TabItem value="UISceneDelegate" label="UISceneDelegate">

  ```swift
  func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
  }

  func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
  }
  ```

  </TabItem>
  <TabItem value="SwiftUI" label="SwiftUI">

  ```swift
  @main
  struct Example_SwiftUIApp: App {
      @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate

      var body: some Scene {
          WindowGroup {
              ContentView()
                  // 添加下列方法实现
                  .onOpenURL(perform: { url in
                      DeepLink.handle(url)
                  })
                  .onContinueUserActivity(NSUserActivityTypeBrowsingWeb, perform: { userActivity in
                      DeepLink.handle(userActivity.webpageURL)
                  })
          }
      }
  }
  ```

  </TabItem>
</Tabs>

## 步骤 5: 查看集成效果

运行应用，若日志中输出了
```
Thank you very much for using GrowingIO. We will do our best to provide you with the best service. 
GrowingIO version: 4.x.x
```
大功告成，SDK 已经集成成功。

若在初始化中 `debugEnabled` 设置为 true，打开了 Debug ，则可以在日志中看到每个事件的 log 日志输出。

:::info
在 iOS 平台，您还可以使用 [GioKit 辅助插件](/docs/giokit/ios) 进行集成验证。
:::

## App Store 提交应用注意事项
如果您添加了库 `AdSupport.framework`，GrowingIO 则会启用 `IDFA`，所以在向 App Store 提交应用时，需要：

1. 对于问题 Does this app use the Advertising Identifier (IDFA)，选择 YES。

2. 对于选项 Attribute this app installation to a previously served advertisement，打勾。

3. 对于选项 Attribute an action taken within this app to a previously served advertisement，打勾。

:::info
Q: 为什么 GrowingIO SDK 使用 `IDFA`? <br/>
A: GrowingIO 使用 `IDFA` 来做来源管理激活设备的精确匹配，让您更好的衡量广告效果。如果您不希望启用 `IDFA`，可以选择不引入 `AdSupport.framework`
:::

### 关于 IDFA 权限获取
* 对于 iOS 14 之前，您无需主动获取 广告标识`IDFA`的权限

* 对于 iOS 14 之后，您需要使用如下方法来开启您的 广告标识`IDFA` 的权限
  

:::info
2021 年 4 月 27 日，iOS 14.5 正式发布，新版本的 iOS 最主要变化如下：

自 iOS14.5、iPadOS 14.5 和 tvOS 14.5 开始，所有 App 都必须使用 `AppTrackingTransparency` 框架来征得用户的许可，才能对其进行跟踪或访问其设备的广告标识符。

And starting with iOS 14.5, iPadOS 14.5, and tvOS 14.5, you’ll be required to ask users for their permission to track them across apps and websites owned by other companies.
:::

1. Plist 文件中添加 `NSUserTrackingUsageDescription`，具体描述内容请根据您的 App 进行修改

```xml
<key>NSUserTrackingUsageDescription</key>
<string>GrowingIO测试demo 需要使用您的广告标识信息以用于数据追踪分析</string>
```

2. 导入框架 `import AppTrackingTransparency`

3. 调用获取权限代码

```swift
func applicationDidBecomeActive(_ application: UIApplication) {
    // 调用AppTrackingTransparency相关实现请在ApplicationDidBecomeActive之后，适配iOS 15
    // 参考: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022
    if #available(iOS 14, *) {
        // iOS14及以上版本需要先请求权限
        ATTrackingManager.requestTrackingAuthorization { status in
            switch status {
            case .notDetermined:
                // 用户未做选择或未弹窗
                break
            case .restricted:
                // 用户在系统级别开启了限制广告追踪
                break
            case .denied:
                // 用户拒绝向App授权
                break
            case .authorized:
                // 用户同意向App授权
                break
            @unknown default:
                break
            }
        }
    }
}
```

### 关于使用 IDFA 作为访问用户 ID
GrowingIO SDK 使用 访问用户 ID 标识访问用户 ，其值使用 IDFA 、IDFV 或随机字符串 ，三者的优先级为 IDFA > IDFV > 随机字符串 ，例如：如果获取不到 IDFA，SDK 会使用 IDFV 作为访问用户 ID。

访问用户 ID 生成时机是在 SDK 第一次初始化时，生成之后会被存储在 Keychain 中，如果 Keychain 数据一直存在，则访问用户 ID 不会发生改变。

如果需要使用 IDFA 作为访问用户 ID，则需要在请求获取 IDFA 权限之后再初始化 SDK。如果用户不允许广告跟踪，则会按照 IDFV > 随机字符串的逻辑生成访问用户 ID。

```swift
func applicationDidBecomeActive(_ application: UIApplication) {
    // 调用AppTrackingTransparency相关实现请在ApplicationDidBecomeActive之后，适配iOS 15
    // 参考: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022
    if #available(iOS 14, *) {
        ATTrackingManager.requestTrackingAuthorization { status in
            // 初始化 GrowingIO SDK
        }
    } else {
        // 初始化 GrowingIO SDK
    }
}
```
:::warning 注意
使用 IDFA 作为访问用户 ID，同时为使 App 合规，则第一次 SDK 初始化应该在 用户同意隐私协议和获取 IDFA 权限之后。参考[合规步骤](/knowledge/compliance/iosCompliance#合规步骤)
:::
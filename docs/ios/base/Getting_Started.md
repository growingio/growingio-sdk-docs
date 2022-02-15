---
sidebar_position: 1
title: 如何集成
---
--------------

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

iOS SDK 提供了 <font color='red'> 无埋点SDK </font>或<font color='red'> 埋点SDK </font>  两个版本：
* 埋点SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集埋点事件;
* 无埋点SDK 具备 埋点SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

无埋点SDK（包括埋点 SDK）代码托管在 [Github](https://github.com/growingio/growingio-sdk-ios-autotracker-cdp)

欢迎 star,fork 一波。
:::info
**开发环境:** <br/>
Xcode 9.0 及以上  
iOS 8.0 及以上

**根据需要选择集成**<font color='red'> 无埋点SDK </font>或<font color='red'> 埋点SDK </font>
:::

### 集成准备
#### 获取SDK初始化必传参数：Account ID、DataSource ID、URL Scheme、Host
:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>
Host：采集数据上报的服务器地址<br/>

Account ID、DataSource ID、URL Scheme 需要在CDP增长平台上新建数据获取源，或从已知应用中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持<br/>
Host 需要服务端部署，如不清楚请联系您的专属项目经理或技术支持
:::
##### 创建
![新建数据源](./../../../static/img/createapplication.png)
##### 查看
![查看数据源](./../../../static/img/showappdatasourceid.png)

## 无埋点SDK集成
### Cocoapods集成

在您的Podfile文件中添加

```c
pod 'GrowingAnalytics-cdp/Autotracker'
```
打开终端，切换到项目目录
执行 `pod install` 或 `pod update`
### 添加 URL Scheme

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。把 URL Scheme 添加到您的项目，以便使用Mobile Debug等功能时唤醒您的应用。  
:::info
需要在GrowingIO网站上先创建您的App应用，获取 URL Scheme
:::
选择工程 → Target  → Info  → URL Types → 点击 ➕  → 添加您的 URL Scheme 即可
![](./../../../static/img/iOS_Setting_URLScheme.png)


### SDK初始化配置
#### 导入头文件`"GrowingAutotracker.h"`，并将以下代码加在您的`AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中。为使 App 合规，请参考[合规步骤](/docs/compliance/iosCompliance#合规步骤)   
   代码示例:
```c
#import "GrowingAutotracker.h"
```

```c
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```
####  在appDelegate.m文件中实现 URL Scheme 跳转以及DeepLink跳转的代理方法

```c
// URL Scheme跳转
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {

    return NO;
}

// universal Link执行
- (BOOL) application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {
    return YES;
}
```

#### 若使用了iOS 13的 UIScene，请在您指定的SceneDelegate中设置如下

```c
- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {
}

- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
}
```
:::info
上述代理方法空实现即可，SDK会自动加入处理代码
:::
### 查看集成效果
运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: 3.3.0`  
则说明SDK已经集成成功。

若在初始化中 `debugEnabled` 设置为YES，打开了Debug，则可以在日志中看到每个事件的log日志输出。

至此，就完成了无埋点 SDK 的集成。

## 埋点SDK集成

埋点 SDK只自动采集用户访问事件和APP关闭事件，其他事件均需要开发同学调用相应埋点 API 采集埋点事件。

### Cocoapods集成

在您的Podfile文件中添加

```c
pod 'GrowingAnalytics-cdp/Tracker'
```
打开终端，切换到项目目录
执行 `pod install` 或 `pod update`
### 添加 URL Scheme

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。把 URL Scheme 添加到您的项目，以便使用Mobile Debug等功能时唤醒您的应用。  
:::info
您需要在CDP增长平台上先创建您的App应用，获取 URL Scheme
:::
选择工程 -> Target -> Info -> URL Types -> 添加您的 URL Scheme 即可

![](./../../../static/img/iOS_Setting_URLScheme.png)

### SDK初始化配置
#### 导入头文件`"GrowingTracker.h"`，并将以下代码加在您的`AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中。为使 App 合规，请参考[合规步骤](/docs/compliance/iosCompliance#合规步骤) 
代码示例:

```c
#import "GrowingTracker.h"
```

```c
// Config GrowingIO
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
// YourDatasourceId eg: 11223344aabbcc
GrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
[GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];
```

#### 在appDelegate.m文件中实现 URL Scheme 跳转以及DeepLink跳转的代理方法

```c
// URL Scheme跳转
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {

    return NO;
}

// universal Link执行
- (BOOL) application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {
    return YES;
}
```

#### 若使用了iOS 13的 UIScene，请在您指定的SceneDelegate中设置如下

```c
- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {
}

- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
}
```
:::info
上述代理方法空实现即可，SDK会自动加入处理代码
:::
### 查看集成效果
运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: 3.3.0`  
则说明SDK已经集成成功。

若在初始化中 `debugEnabled` 设置为YES，打开了Debug，则可以在日志中看到每个事件的log日志输出。

至此，就完成了埋点 SDK 的集成。

## App Store提交应用注意事项
如果您添加了库`AdSupport.framework`, GrowingIO则会启用 `IDFA`，所以在向 App Store 提交应用时，需要：

1. 对于问题 Does this app use the Advertising Identifier (IDFA)，选择 YES。

2. 对于选项Attribute this app installation to a previously served advertisement，打勾。

3. 对于选项Attribute an action taken within this app to a previously served advertisement，打勾。

:::info
Q: 为什么 GrowingIO SDK 使用 `IDFA`? <br/>
A: GrowingIO 使用 `IDFA` 来做来源管理激活设备的精确匹配，让您更好的衡量广告效果。如果您不希望启用 `IDFA`，可以选择不引入 `AdSupport.framework`
:::

### 关于 IDFA 权限获取
* 对于iOS 14之前，您无需主动获取 广告标识`IDFA`的权限

* 对于iOS 14之后，您需要使用如下方法来开启您的 广告标识`IDFA` 的权限
  
:::info
2021 年 4 月 27 日，iOS 14.5 正式发布，新版本的 iOS 最主要变化如下：

自 iOS14.5、iPadOS 14.5 和 tvOS 14.5 开始，所有 App 都必须使用 `AppTrackingTransparency` 框架来征得用户的许可，才能对其进行跟踪或访问其设备的广告标识符。

And starting with iOS 14.5, iPadOS 14.5, and tvOS 14.5, you’ll be required to ask users for their permission to track them across apps and websites owned by other companies.
:::

1. Plist 文件中添加 `NSUserTrackingUsageDescription`

```c
<key>NSUserTrackingUsageDescription</key>
<string>GrowingIO测试demo 需要使用您的广告标识信息以用于数据追踪分析</string> //描述内容请根据App修改
```

2. 导入框架 `#import <AppTrackingTransparency/AppTrackingTransparency.h>`

3. 调用获取权限代码
```c

- (void)applicationDidBecomeActive:(UIApplication *)application {
  // 调用AppTrackingTransparency相关实现请在ApplicationDidBecomeActive之后，适配iOS 15
  // 参考: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022
  if (@available(iOS 14, *)) {
     // iOS14及以上版本需要先请求权限
     [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
         switch (status) {
             case ATTrackingManagerAuthorizationStatusDenied:
                 //用户拒绝向App授权
                 break;
             case ATTrackingManagerAuthorizationStatusAuthorized:
                 //用户同意向App授权
                 break;
             case ATTrackingManagerAuthorizationStatusNotDetermined:
                 //用户未做选择或未弹窗
                 break;
             case ATTrackingManagerAuthorizationStatusRestricted:
                 //用户在系统级别开启了限制广告追踪
                 break;
             default:
                 break;
         }
     }];
 }
}
```

### 关于使用 IDFA 作为访问用户ID
GrowingIO SDK 使用 访问用户ID 标识访问用户 ，其值使用 IDFA 、IDFV 或 随机字符串 ，三者的优先级为 IDFA > IDFV > 随机字符串 ，例如：如果获取不到 IDFA，SDK 会使用 IDFV 作为访问用户ID。

访问用户ID生成时机是在 SDK 第一次初始化时，生成之后会被存储在 Keychain 中，如果 Keychain 数据一直存在，则访问用户ID不会发生改变。

如果需要使用 IDFA 作为访问用户ID，则需要在请求获取 IDFA 权限之后再初始化SDK。如果用户不允许广告跟踪，则会按照 IDFV > 随机字符串 的逻辑生成访问用户ID。

```c
- (void)applicationDidBecomeActive:(UIApplication *)application {
  // 调用AppTrackingTransparency相关实现请在ApplicationDidBecomeActive之后，适配iOS 15
  // 参考: https://developer.apple.com/forums/thread/690607?answerId=688798022#688798022
  if (@available(iOS 14, *)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
      // 初始化 GrowingIO SDK
    }];
  } else {
    // 初始化 GrowingIO SDK
  }
}
```
:::warning 注意
使用 IDFA 作为访问用户ID，同时为使 App 合规，则第一次SDK初始化应该在 用户同意隐私协议和获取 IDFA 权限之后。参考[合规步骤](/docs/compliance/iosCompliance#合规步骤)
:::
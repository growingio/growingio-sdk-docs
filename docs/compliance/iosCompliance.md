---
sidebar_position: 2
title: iOS SDK 合规说明
---

请使用最新 [GrowingIO iOS SDK](/docs)

根据 [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/)，App 需要通过隐私政策说明应用采集数据

* 需要告知用户您集成了 GrowingIO SDK，并且 GrowingIO SDK 会尝试获取 `IDFA`、`IDFV` 信息用于渠道信息，并且采集用户信息进行行为分析

* GrowingIO SDK 默认启用 `IDFA`，如您不希望启用 `IDFA`，参考：[App Store 提交应用注意事项​​](/docs/ios/base/Getting_Started#app-store提交应用注意事项)

违反规定的 App 将可能面临无法上架的情况。

## 集成步骤
请参考 [iOS SDK](/docs/ios/base/Getting_Started) ​

## 隐私政策
您需要确保 App 有《隐私政策》，并且在用户首次启动 App 时就弹出《隐私政策》取得用户同意。

您需要告知用户 App 集成了 GrowingIO SDK：

如果您没有使用 IDFA，请在隐私政策中增加如下参考条款： “我们使用了GrowingIO SDK，采集您的 `IDFV` 信息，用于统计分析您在 App 内的使用效果。”

如果您使用了 `IDFA`，请在隐私政策中增加如下参考条款： “我们使用了GrowingIO SDK，采集您的 `IDFA` 信息，用于统计分析您在 App 内的使用效果。”

如您的 App 需要通过第三方安全检测，建议在隐私政策授权成功之后，再初始化 GrowingIO SDK

## 合规步骤
### GDPR
[​General Data Protection Regulation 欧盟通用数据保护条例](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)​

GrowingIO SDK 提供 `dataCollectionEnabled` 设置接口，可在用户不同意数据采集时，设置为 `NO` 禁止数据采集；在用户同意数据采集时，设置为 `YES`，开启数据采集。

### IDFA
:::info
2021 年 4 月 27 日，iOS 14.5 正式发布，新版本的 iOS 最主要变化如下：

自 iOS14.5、iPadOS 14.5 和 tvOS 14.5 开始，所有 App 都必须使用 `AppTrackingTransparency` 框架来征得用户的许可，才能对其进行跟踪或访问其设备的广告标识符。

And starting with iOS 14.5, iPadOS 14.5, and tvOS 14.5, you’ll be required to ask users for their permission to track them across apps and websites owned by other companies.
:::
因为在 iOS 14 之后 `IDFA` 需要用户授权，同意应用追踪之后才能获取到 `IDFA`。

如若您需要使用 `IDFA` 作为访问用户 ID，请按照以下步骤初始化 SDK：
```c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // 1. dataCollectionEnabled 设置为 NO
    // 设置为关闭代码
    
    // 2.初始化SDK
    // 初始化代码
  
    ...
    return YES;
}
​
// 某一时刻用户同意了应用追踪，允许获取idfa
- (void)userAcceptIDFAPrivacy {
    ...
    // 3. dataCollectionEnabled 设置为 YES
    // 设置为打开代码
    ...
}
```
:::info
当 `dataCollectionEnabled` 为 `NO`， 禁止数据采集， SDK 不采集数据，数据量将会较之前有所下降
:::
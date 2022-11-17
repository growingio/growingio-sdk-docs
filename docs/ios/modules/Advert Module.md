---
sidebar_position: 5
title: 广告模块
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

广告模块包括激活事件和深度链接，激活事件是当用户应用第一次打开时有且仅发一次的事件，深度链接是提供客户通过活动网页等形式提供 App 渠道的跳转和下载。

--------
:::info
采集 SDK 版本 >=3.4.4

**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

<Tabs>
  <TabItem value="cocoapods" label="Cocoapods集成" default>

```shell
pod 'GrowingAnalytics/Advert'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

### 获取 Apple Search Ads 归因数据分析

如您需要使用 Apple Search Ads 归因数据分析，在 AppDelegate.m 中导入 `#import "GrowingAdvertising.h"`，并在 SDK 初始化时打开 ASAEnabled 开关：

```objectivec
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";

// 打开 ASAEnabled 开关
configuration.ASAEnabled = YES;

[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```

在 Target -> Build Phases -> Link Binary With Libraries，添加 **iAd.framework** 和 **AdServices.framework**，并设置 AdServices.framework status 为 **Optional**

![AdServices Framework](./../../../static/img/ios/adservices_framework.png)

  </TabItem>
  <TabItem value="swiftPM" label="Swift Package Manager集成">

添加 **GrowingModule_Advert** Package

![add Package](./../../../static/img/ios/add_package_advert.png)

### 获取 Apple Search Ads 归因数据分析

如您需要使用 Apple Search Ads 归因数据分析，在 **AppDelegate.swift** 中导入 `import GrowingModule_Advert`，并在 SDK 初始化时打开 ASAEnabled 开关：

```swift
let config = GrowingAutotrackConfiguration(projectId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"

// 打开 ASAEnabled 开关
config?.ASAEnabled = true

GrowingAutotracker.start(with: config!, launchOptions: launchOptions ?? [:])
```

在 Target -> Build Phases -> Link Binary With Libraries，添加 **iAd.framework** 和 **AdServices.framework**，并设置 AdServices.framework status 为 **Optional**

![AdServices Framework](./../../../static/img/ios/adservices_framework.png)

  </TabItem>
</Tabs>

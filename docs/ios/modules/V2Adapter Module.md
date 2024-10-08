---
sidebar_position: 9
title: V2Adapter模块
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

V2Adapter 支持从 SaaS v2.x/CDP v1.x SDK 无缝升级到当前 SDK，兼容 2.x APIs 调用；只需要修改初始化代码和集成 V2Adapter 即可按照最新测量协议发送数据

- 支持 SaaS (v2.x) to New SaaS，CDP (v1.x) to OP (v3.x v4.x) (皆指 SDK 版本)
- 仅支持 Cocoapods 集成
- 不兼容同时集成了运营平台 SDK 无缝升级
- 部分接口归类为 Deprecated，在 Adapter 中为空实现，按照日志提示使用新接口或不处理
- 部分接口归类为 Unavailable，调用将报错，请参考数据采集API文档使用新接口或删除调用

:::info
**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

--------

### 使用方式

<Tabs>
  <TabItem value="cocoapods" label="无埋点集成" default>

1. 集成当前版本[无埋点 SDK](/docs/ios/Introduce#添加无埋点-sdk-到您的应用)
2. 移除老版本 SaaS/CDP SDK 集成，如使用 Cocoapods 集成，删除 Podfile 中对应行；如手动集成，移除对应 framework 文件
3. 移除老版本 SaaS/CDP SDK 初始化代码，如 `[Growing startWithAccountId:...]`
4. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/V2Adapter'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

  </TabItem>
  <TabItem value="swiftPM" label="埋点集成">

1. 集成当前版本[埋点 SDK](/docs/ios/Introduce#添加埋点-sdk-到您的应用)
2. 移除老版本 SaaS/CDP SDK 集成，如使用 Cocoapods 集成，删除 Podfile 中对应行；如手动集成，移除对应 framework 文件
3. 移除老版本 SaaS/CDP SDK 初始化代码，如 `[Growing startWithAccountId:...]`
4. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/V2AdapterTrackOnly'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

  </TabItem>
</Tabs>

### 迁移本地数据

如需使用老版本 SDK 的用户数据 (userId、deviceId)，请在当前 SDK 初始化之前，进行迁移

```objectivec
#import "Growing.h"

[GrowingV2Adapter upgrade];

// 初始化 SDK
...
```

### 页面事件、自定义埋点事件

- 当前 SDK 不再自动发送页面浏览事件，可通过设置配置项 `autotrackAllPages` 为 `true` 开启，或通过 autotrackPage 系列接口主动上报
- 当前 SDK 不再主动将自定义埋点事件关联到页面，若有相关需求，请在 SDK 初始化时设置配置项 `customEventWithPath` 为 `true` 开启
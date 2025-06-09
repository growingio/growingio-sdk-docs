---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 集成 GioKit

GioKit 代码已托管在 [Github](https://github.com/growingio/growingio-sdk-ios-toolskit) 上，欢迎 star, fork 一波。
:::info
**使用环境**
**Xcode 14.3 及以上**<br/>
**iOS 10.0 及以上**<br/>
**请在 [Apple SDK](/docs/ios/Introduce) 基础上使用 GioKit**
:::

<Tabs>
 <TabItem value="swiftPM" label="Swift Package Manager集成" default>

1. 在 Xcode 菜单栏点击 File -> Add Packages... 或选择工程 -> 对应 Project -> Package Dependencies -> 点击 ➕

<ImageLoader path="img/ios/add_package_dependencies" />

2. 搜索 GrowingToolsKit SDK GitHub 地址

```
https://github.com/growingio/growingio-sdk-ios-toolskit.git
```

3. 并设置 Dependency Rule 为 Branch master，Add to Project 选择您所需要的 Project

<ImageLoader path="img/giokit/ios/set_dependency_rule" />

4. 点击下方的 Add Package 按钮，选择 GrowingToolsKit，再次点击 Add Package 按钮

<ImageLoader path="img/giokit/ios/add_package_giokit" />

5. 在 TARGETS -> Build Settings -> Other Linker Flags 中添加 -ObjC


  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

在您的 Podfile 文件中添加

```ruby
pod 'GrowingToolsKit', :configurations => ['Debug']
```
打开终端，切换到项目目录
执行 `pod install` 或 `pod update`

  </TabItem>
</Tabs>

## 初始化

<Tabs>
 <TabItem value="swiftPM" label="Swift Package Manager集成" default>

在您的 `AppDelegate.swift` 导入 GrowingToolsKit

```swift
#if DEBUG
import GrowingToolsKit
#endif
```

并将以下代码加在您的 `AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中

```swift
#if DEBUG
    GrowingToolsKit.start()
#endif
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

在您的 `AppDelegate.m` 导入 GrowingToolsKit

```objectivec
#ifdef DEBUG
#import <GrowingToolsKit/GrowingToolsKit.h>
#endif
```

并将以下代码加在您的 `AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中

```objectivec
#ifdef DEBUG
    [GrowingToolsKit start];
#endif
```

  </TabItem>
</Tabs>

:::caution 注意

为了避免在正式环境下出现不必要的错误，请务必只在 Debug 环境下使用 GioKit 工具。
:::

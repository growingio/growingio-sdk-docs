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
**Xcode 9.0 及以上**<br/>
**iOS 9.0 及以上**<br/>
**请在 [iOS SDK](/docs/ios/Introduce) 基础上使用 GioKit**
:::

### 1. Cocoapods 集成
在 `Podfile` 中添加依赖库
:::info
GrowingIO iOS SDK 版本在 **3.2.1 及以上**, 请添加
```ruby
pod 'GrowingToolsKit', :configurations => ['Debug']
```
::::

:::info
GrowingIO iOS SDK 版本在 **3.2.0 及以下**，请添加：

```ruby
pod 'GrowingToolsKit/SDK30202', :configurations => ['Debug']
```
:::
:::info
GrowingIO iOS SDK 版本是 **2.x**，请添加：

```ruby
pod 'GrowingToolsKit/SDK2nd', :configurations => ['Debug']
```
:::
:::caution 注意
以上根据相应的 GrowingIO iOS SDK 选择对应的依赖，请不要一起使用！！
:::

打开终端，切换到项目目录
执行 `pod install` 或 `pod update`

### 2. 初始化

在您的`AppDelegate.m`导入 GrowingToolsKit

```objective-c
#ifdef DEBUG
#import <GrowingToolsKit/GrowingToolsKit.h>
#endif
```

并将以下代码加在您的`AppDelegate`的`application:didFinishLaunchingWithOptions:`方法中

```objective-c
#ifdef DEBUG
    [GrowingToolsKit start];
#endif
```

:::caution 注意

为了避免在正式环境下出现不必要的错误，请务必只在 Debug 环境下使用 GioKit 工具。
:::

### 3.开启性能监控

如您需要开启性能相关监控，请在 `main.m` 中导入 GrowingToolsKit，并在 main 函数中添加代码：

```objectivec
#ifdef DEBUG
#import <GrowingToolsKit/GrowingToolsKit.h>
#endif

int main(int argc, char * argv[]) {
    // 添加以下代码
#ifdef DEBUG
    [GrowingToolsKit setupMonitors];
#endif
  
    NSString * appDelegateClassName;
    @autoreleasepool {
        // Setup code that might create autoreleased objects goes here.
        appDelegateClassName = NSStringFromClass([AppDelegate class]);
    }
    return UIApplicationMain(argc, argv, nil, appDelegateClassName);
}
```

:::caution 注意

SDK 2.x 默认采集模式与性能监控插件不兼容，需要在 main 函数同时添加代码：

```objectivec
// SDK 2.0 GrowingAspectModeSubClass 与性能监控插件不兼容
[Growing setAspectMode:GrowingAspectModeDynamicSwizzling];
```

:::

---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 集成 GioKit

GioKit 代码已托管在 [Github](https://github.com/growingio/growingio-sdk-ios-toolskit) 上，欢迎 star, fork 一波。

> **开发环境**
>
> Xcode 9.0 及以上
>
> iOS 9.0 及以上

### 1. Cocoapods 集成
- 如果您的 GrowingIO iOS SDK 版本在 3.3.0 及以上，在您的 Podfile 文件中添加：

```ruby
pod 'GrowingToolsKit', :configurations => ['Debug']
```

- 如果您的 GrowingIO iOS SDK 版本在 3.2.2 及以下，在您的 Podfile 文件中添加：

```ruby
pod 'GrowingToolsKit/SDK30202', :configurations => ['Debug']
```

- 如果您的 GrowingIO iOS SDK 版本是 2.x，在您的 Podfile 文件中添加：

```ruby
pod 'GrowingToolsKit/SDK2nd', :configurations => ['Debug']
```



### 2. 初始化

在您的`AppDelegate`导入 GrowingToolsKit

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

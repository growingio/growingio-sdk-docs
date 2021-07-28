---
sidebar_position: 3
title: 数据采集API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

通过 `GrowingAutotracker` 类可以调用 SDK 中所有开放的API，通过这些API可以进行更改配置，设置参数等操作。

## 数据采集API

### 1. 数据采集开关 `dataCollectionEnabled`

打开或关闭数据采集

#### 参数说明

| 参数      | 参数类型 | 说明                                |
| :-------- | :------- | :---------------------------------- |
| `enabled` | `BOOL`   | `YES`打开数据采集，`NO`关闭数据采集 |

#### 示例

```c
[[GrowingAutotracker sharedInstance] setDataCollectionEnabled:YES];
```

### 2. 设置登录用户ID `setLoginUserId`

当用户登录之后调用`setLoginUserId` API，设置登录用户ID

#### 参数说明

| 参数     | 参数类型     | 说明                                                         |
| :------- | :----------- | :----------------------------------------------------------- |
| `userId` | `NSNSString` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |

#### 示例

```c
[[GrowingAutotracker sharedInstance] setLoginUserId:@"112333445"];
```

### 3. 设置登录用户Id以及用户Key  `setLoginUserId:userKey:`

支持设置userId的类型, 存储方式与userId保持一致, userKey默认为null

#### 示例

```c
[[GrowingAutotracker sharedInstance] setLoginUserId:@"123" userKey:@"number"];
```

### 4. 清除登录用户ID  `cleanLoginUserId`

当用户登出之后调用`cleanLoginUserId`，清除已经设置的登录用户ID。

#### 示例

```c
[[GrowingAutotracker sharedInstance] cleanLoginUserId];
```

### 5. 设置用户的地理位置 `setLocation`

设置用户当前的地理位置，基于WGS-84坐标

#### 参数说明

| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | `double` | 地理坐标点纬度 |
| `longitude` | `double` | 地理坐标点经度 |

#### 示例

```c
[[GrowingAutotracker sharedInstance] setLocation:39.9 longitude:116.36];
```

### 6. 清除用户的地理位置 `cleanLocation`

清除用户当前的地理位置

#### 示例

```c
[[GrowingAutotracker sharedInstance] cleanLocation];
```

### 7. 设置自定义事件 `trackCustomEvent`

发送一个自定义事件。在添加所需要发送的事件代码之前，需要在事件管理用户界面配置事件以及事件级变量。

#### 参数说明

| 参数         | 参数类型                               | 说明                       |
| :----------- | :------------------------------------- | :------------------------- |
| `eventName`  | `NSNSString`                           | 事件名，事件标识符         |
| `attributes` | `NSDictionary<NSNSString, NSNSString>` | 事件发生时所伴随的维度信息 |
| `itemKey`    | `NSNSString`                           | 事件发生关联的物品模型Key  |
| `itemId`     | `NSNSString`                           | 事件发生关联的物品模型ID   |

#### 示例

```c
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"resourceItemTest" itemKey:@"testkey" itemId:@"testid" withAttributes:@{@"ok":@"false"}];
```

### 8. 设置登录用户变量 `setLoginUserAttributes`

以登录用户的身份定义用户属性变量，用于用户信息相关分析。

#### 参数说明

| 参数         | 参数类型                               | 说明         |
| :----------- | :------------------------------------- | :----------- |
| `attributes` | `NSDictionary<NSNSString, NSNSString>` | 用户属性信息 |

#### 示例

```c
[[GrowingAutotracker sharedInstance] setLoginUserAttributes:@{@"fff":@"xxx"}];
```

### 9. 获取设备ID `getDeviceId`

获取设备id，又称为匿名用户id，SDK 自动生成用来定义唯一设备。
如果没有初始化SDK 或者关闭采集开关可能返回值为nil，且可能有IO操作。

#### 示例

```c
[[GrowingAutotracker sharedInstance] getDeviceId];
```

### 10. 设置页面别名 `setPageAlias`

给页面设置一个别名。

#### 属性说明

UIViewController分类声明的属性，设置需要在viewDidAppear执行之前

| 参数               | 参数类型   | 说明     |
| :----------------- | :--------- | :------- |
| `growingPageAlias` | `NSString` | 页面别名 |

#### 示例

```c
- (void)viewDidLoad {
  [super viewDidLoad];
  ...
  self.growingPageAlias = @"xxxx";
  ...
}
```

### 11. 设置忽略的页面 `ignorePage`

被设置忽略的页面，不再触发无埋点的page事件。

#### 属性说明

UIViewController分类声明的属性，设置需要在viewDidAppear执行之前

| 属性                      | 属性类型              | 说明                                                         |
| :------------------------ | :-------------------- | :----------------------------------------------------------- |
| `growingPageIgnorePolicy` | `GrowingIgnorePolicy` | 1. `GrowingIgnoreSelf` 只忽略自己<br/> 2. `GrowingIgnoreChildren` 只忽略该页面的子页面<br/> 3. `GrowingIgnoreAll` 忽略所有，包括自己和该页面的子页面 |

#### 示例

```c
- (void)viewDidLoad {
  [super viewDidLoad];
  ...
  self.growingPageIgnorePolicy = GrowingIgnoreChildren;
  ...
}
```

### 12. 设置忽略的View `ignoreView`

被设置忽略的VIew，不再触发点击、曝光等任何事件，被忽略的WebView也不会采集Hybrid的事件。

#### 属性说明

UIView 分类声明的属性，设置需要在viewDidAppear执行之前

| 属性                      | 属性类型              | 说明                                                         |
| :------------------------ | :-------------------- | :----------------------------------------------------------- |
| `growingViewIgnorePolicy` | `GrowingIgnorePolicy` | 1. `GrowingIgnoreSelf` 只忽略自己<br/> 2. `GrowingIgnoreChildren` 只忽略该页面的子页面<br/> 3. `GrowingIgnoreAll` 忽略所有，包括自己和该页面的子页面 |

#### 示例

```c
view.growingViewIgnorePolicy = GrowingIgnoreSelf;
```

### 13.设置采集View的曝光事件 `trackViewImpression`

当被设置的View出现在屏幕内时将触发曝光事件

#### 方法说明

UIView分类方法

| 参数         | 参数类型                           | 说明           |
| :----------- | :--------------------------------- | :------------- |
| `eventName`  | `NSString`                         | 曝光的事件名   |
| `attributes` | `NSDictionary<NSString, NSString>` | 曝光的事件属性 |

#### 示例

```c
[self.view growingTrackImpression:@"xxxx" attributes:@{@"111":@"222"}];
```

### 14.停止采集View的曝光事件 `stopTrackViewImpression`

停止采集View的曝光事件

#### 方法说明

UIView分类方法

#### 示例

```c
[self.view growingStopTrackImpression];
```

### 15.设置View唯一Tag `setUniqueTag`

给View设置唯一的Tag，方便点击等事件确定唯一的View，一般用于动态布局的场景

#### 属性说明

 UIView 分类声明的属性

| 属性               | 属性类型   | 说明          |
| :----------------- | :--------- | :------------ |
| `growingUniqueTag` | `NSString` | 需要设置的Tag |

#### 示例

```c
self.view.growingUniqueTag = @"我是一个特别的view";
```

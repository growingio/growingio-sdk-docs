---
sidebar_position: 3
title: 数据采集API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 1. 初始化是否成功
`isInitializedSuccessfully()`<br/>
返回是否初始化成功

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
let success = Autotracker.isInitializedSuccessfully()

// 埋点
let success = Tracker.isInitializedSuccessfully()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
let success = GrowingAutotracker.isInitializedSuccessfully()

// 埋点
let success = GrowingTracker.isInitializedSuccessfully()
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
BOOL success = [GrowingAutotracker isInitializedSuccessfully];

// 埋点
BOOL success = [GrowingTracker isInitializedSuccessfully];
```

  </TabItem>
</Tabs>


### 2. 数据采集开关 
`setDataCollectionEnabled(_ enabled: Bool)`<br/>
打开或关闭数据采集

#### 参数说明

| 参数      | 参数类型 | 说明                                |
| :-------- | :------- | :---------------------------------- |
| `enabled` | `Bool` | `true` 打开数据采集，`false` 关闭数据采集，默认 `true` |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.setDataCollectionEnabled(true)

// 埋点
Tracker.setDataCollectionEnabled(true)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().setDataCollectionEnabled(true)

// 埋点
GrowingTracker.sharedInstance().setDataCollectionEnabled(true)
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] setDataCollectionEnabled:YES];

// 埋点
[[GrowingTracker sharedInstance] setDataCollectionEnabled:YES];
```

  </TabItem>
</Tabs>


### 3. 设置登录用户 ID 
`setLoginUserId(_ userId: String)`<br/>
`setLoginUserId(_ userId: String, userKey: String?)`<br/>
当用户登录之后调用，设置登录用户ID

:::info
* 如果您的App每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级App版本后初次访问时重新调用setLoginUserId方法

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **同时在初始化 SDK 时设置`idMappingEnabled`为`true`**

:::

#### 参数说明
| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | _String_ | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | _String_ | 适用于ID-MAPPING,可设置 userId 的类型, 默认不传|
#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.setLoginUserId("123456")
Autotracker.setLoginUserId("13111111111", userKey: "phone")

// 埋点
Tracker.setLoginUserId("123456")
Tracker.setLoginUserId("13111111111", userKey: "phone")
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().setLoginUserId("123456")
GrowingAutotracker.sharedInstance().setLoginUserId("13111111111", userKey: "phone")

// 埋点
GrowingTracker.sharedInstance().setLoginUserId("123456")
GrowingTracker.sharedInstance().setLoginUserId("13111111111", userKey: "phone")
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] setLoginUserId:@"123456"];
[[GrowingAutotracker sharedInstance] setLoginUserId:@"13111111111" userKey:@"phone"];

// 埋点
[[GrowingTracker sharedInstance] setLoginUserId:@"123456"];
[[GrowingTracker sharedInstance] setLoginUserId:@"13111111111" userKey:@"phone"];
```

  </TabItem>
</Tabs>


### 4. 清除登录用户 ID 
`cleanLoginUserId()`<br/>
当用户登出之后调用，清除已经设置的登录用户 ID。

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.cleanLoginUserId()

// 埋点
Tracker.cleanLoginUserId()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().cleanLoginUserId()

// 埋点
GrowingTracker.sharedInstance().cleanLoginUserId()
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] cleanLoginUserId];

// 埋点
[[GrowingTracker sharedInstance] cleanLoginUserId];
```

  </TabItem>
</Tabs>


### 5. 设置用户的地理位置 
`setLocation(latitude: Double, longitude: Double)`<br/>
设置用户当前的地理位置，基于 WGS-84 坐标

#### 参数说明

| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | `double` | 地理坐标点纬度 |
| `longitude` | `double` | 地理坐标点经度 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.setLocation(latitude: 39.9, longitude: 116.36)

// 埋点
Tracker.setLocation(latitude: 39.9, longitude: 116.36)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().setLocation(latitude: 39.9, longitude: 116.36)

// 埋点
GrowingTracker.sharedInstance().setLocation(latitude: 39.9, longitude: 116.36)
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] setLocation:39.9 longitude:116.36];

// 埋点
[[GrowingTracker sharedInstance] setLocation:39.9 longitude:116.36];
```

  </TabItem>
</Tabs>


### 6. 清除用户的地理位置
`cleanLocation()`<br/>
清除用户当前的地理位置

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.cleanLocation()

// 埋点
Tracker.cleanLocation()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().cleanLocation()

// 埋点
GrowingTracker.sharedInstance().cleanLocation()
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] cleanLocation];

// 埋点
[[GrowingTracker sharedInstance] cleanLocation];
```

  </TabItem>
</Tabs>


### 7. 设置埋点事件 
`Autotracker.track(_ eventName: String, attributes: [String: Any]?)`<br/>
发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在 CDP 平台事件管理界面创建埋点事件以及关联事件属性；<br/>
如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP 平台版本>= 2.1 ）

#### 参数说明

| 参数         | 参数类型              | 说明                       |
| :----------- | :------------------ | :------------------------- |
| `eventName`  | `String`            | 事件名，事件标识符         |
| `attributes` | `[String: Any]?` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.track("eventName")
Autotracker.track("eventName", attributes: ["property": "value"])

// 埋点
Tracker.track("eventName")
Tracker.track("eventName", attributes: ["property": "value"])
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().trackCustomEvent("eventName")
GrowingAutotracker.sharedInstance().trackCustomEvent("eventName", withAttributes: ["property": "value"])

// 埋点
GrowingTracker.sharedInstance().trackCustomEvent("eventName")
GrowingTracker.sharedInstance().trackCustomEvent("eventName", withAttributes: ["property": "value"])
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"eventName"];
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:@{@"property": @"value"}];

// 埋点
[[GrowingTracker sharedInstance] trackCustomEvent:@"eventName"];
[[GrowingTracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:@{@"property": @"value"}];
```

  </TabItem>
</Tabs>


:::info

详细使用示例:[埋点事件示例](/knowledge/basicknowledge/trackEventUse#埋点事件示例)

:::

### 8. 事件计时器

`trackTimer(_ eventName: String)`<br/>
初始化一个事件计时器，参数为计时事件的事件名称，返回值为该事件计时器唯一标识

`pauseTimer(_ timerId: String)`<br/>
暂停事件计时器，参数为 trackTimer 返回的唯一标识

`resumeTimer(_ timerId: String)`<br/>
恢复事件计时器，参数为 trackTimer 返回的唯一标识

`endTimer(_ timerId: String, attributes: [String: Any]?)`<br/>
停止事件计时器，参数为 trackTimer 返回的唯一标识。调用该接口会自动触发删除定时器。

`removeTimer(_ timerId: String)`<br/>
删除事件计时器，参数为 trackTimer 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

`clearTimers()`<br/>
清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明

| 参数        | 参数类型   | 说明               |
| :---------- | :--------- | :----------------- |
| `eventName` | `String` | 事件名，事件标识符 |
| `attributes` | `[String: Any]?` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |


| 参数      | 参数类型   | 说明                                      |
| :-------- | :--------- | :---------------------------------------- |
| `timerId` | `String` | 计时器唯一标识符，由`trackTimer`返回 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
let timerId = Autotracker.trackTimer("eventName")
if let timerId = timerId {
    Autotracker.pauseTimer(timerId)
    Autotracker.resumeTimer(timerId)
    Autotracker.endTimer(timerId)
    Autotracker.endTimer(timerId, attributes: ["property": "value"])
    Autotracker.removeTimer(timerId)
}
Autotracker.clearTimers()

// 埋点
let timerId = Tracker.trackTimer("eventName")
if let timerId = timerId {
    Tracker.pauseTimer(timerId)
    Tracker.resumeTimer(timerId)
    Tracker.endTimer(timerId)
    Tracker.endTimer(timerId, attributes: ["property": "value"])
    Tracker.removeTimer(timerId)
}
Tracker.clearTimers()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
let timerId = GrowingAutotracker.sharedInstance().trackTimerStart("eventName")
if let timerId = timerId {
    GrowingAutotracker.sharedInstance().trackTimerPause(timerId)
    GrowingAutotracker.sharedInstance().trackTimerResume(timerId)
    GrowingAutotracker.sharedInstance().trackTimerEnd(timerId)
    GrowingAutotracker.sharedInstance().trackTimerEnd(timerId, withAttributes: ["property": "value"])
    GrowingAutotracker.sharedInstance().removeTimer(timerId)
}
GrowingAutotracker.sharedInstance().clearTrackTimer()

// 埋点
let timerId = GrowingTracker.sharedInstance().trackTimerStart("eventName")
if let timerId = timerId {
    GrowingTracker.sharedInstance().trackTimerPause(timerId)
    GrowingTracker.sharedInstance().trackTimerResume(timerId)
    GrowingTracker.sharedInstance().trackTimerEnd(timerId)
    GrowingTracker.sharedInstance().trackTimerEnd(timerId, withAttributes: ["property": "value"])
    GrowingTracker.sharedInstance().removeTimer(timerId)
}
GrowingTracker.sharedInstance().clearTrackTimer()
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
NSString *timerId = [[GrowingAutotracker sharedInstance] trackTimerStart:@"eventName"];
if (timerId) {
    [[GrowingAutotracker sharedInstance] trackTimerPause:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerResume:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerEnd:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerEnd:timerId withAttributes:@{@"property" : @"value"}];
    [[GrowingAutotracker sharedInstance] removeTimer:timerId];
}
[[GrowingAutotracker sharedInstance] clearTrackTimer];

// 埋点
NSString *timerId = [[GrowingTracker sharedInstance] trackTimerStart:@"eventName"];
if (timerId) {
    [[GrowingTracker sharedInstance] trackTimerPause:timerId];
    [[GrowingTracker sharedInstance] trackTimerResume:timerId];
    [[GrowingTracker sharedInstance] trackTimerEnd:timerId];
    [[GrowingTracker sharedInstance] trackTimerEnd:timerId withAttributes:@{@"property" : @"value"}];
    [[GrowingTracker sharedInstance] removeTimer:timerId];
}
[[GrowingTracker sharedInstance] clearTrackTimer];
```

  </TabItem>
</Tabs>


:::caution 注意
endTimer 时发送 CUSTOM 事件上报数据：
* eventName  埋点事件标识符（trackTimer 传入）
* attributes 用户自定义事件属性（endTimer 传入）
* event_duration 事件时长 （SDK 内部根据 timerId 自动计算获取 ）<br/>
event_duration 按照秒上报，小数点精度保证到毫秒<br/>
event_duration 变量及其值会自动添加在 attributes 中<br/>
event_duration 时间统计不会计算后台时间
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性
:::

### 9. 设置登录用户属性 
`setLoginUserAttributes(_ attributes: [String: Any])`<br/>
以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `attributes` | `[String: Any]` | 用户属性信息 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.setLoginUserAttributes(["property": "value"])

// 埋点
Tracker.setLoginUserAttributes(["property": "value"])
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.sharedInstance().setLoginUserAttributes(["property": "value"])

// 埋点
GrowingTracker.sharedInstance().setLoginUserAttributes(["property": "value"])
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[[GrowingAutotracker sharedInstance] setLoginUserAttributes:@{@"property" : @"value"}];

// 埋点
[[GrowingTracker sharedInstance] setLoginUserAttributes:@{@"property" : @"value"}];
```

  </TabItem>
</Tabs>


:::info

详细使用示例:[用户属性事件示例](/knowledge/basicknowledge/trackEventUse#用户属性事件示例)

:::


### 10. 获取设备 ID 
`deviceId()`<br/>
获取设备 id，又称为匿名用户 id，SDK 自动生成用来定义唯一设备。

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
let deviceId = Autotracker.deviceId()

// 埋点
let deviceId = Tracker.deviceId()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
let deviceId = GrowingAutotracker.sharedInstance().getDeviceId()

// 埋点
let deviceId = GrowingTracker.sharedInstance().getDeviceId()
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
NSString *deviceId = [[GrowingAutotracker sharedInstance] getDeviceId];

// 埋点
NSString *deviceId = [[GrowingTracker sharedInstance] getDeviceId];
```

  </TabItem>
</Tabs>


### 11. 追踪页面展示事件
`autotrackPage(_ viewController: UIViewController, alias: String, attributes: [String: Any]?)`<br/>
追踪页面展示事件，需要在 viewDidAppear 执行之前调用

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `viewController` | `UIViewController` | 被追踪页面 |
| `alias` | `String` | 页面别名 |
| `attributes` | `[String: Any]?` | 事件发生时所伴随的维度信息（可选） |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
Autotracker.autotrackPage(self, alias: "viewController")
Autotracker.autotrackPage(self, alias: "viewController", attributes: ["key": "value"])
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
GrowingAutotracker.sharedInstance().autotrackPage(self, alias: "viewController")
GrowingAutotracker.sharedInstance().autotrackPage(self, alias: "viewController", attributes: ["key": "value"])
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
[[GrowingAutotracker sharedInstance] autotrackPage:self alias:@"viewController"];
[[GrowingAutotracker sharedInstance] autotrackPage:self alias:@"viewController" attributes:@[@"key": @"value"]];
```

  </TabItem>
</Tabs>


### 12. 忽略指定元素
`ignorePolicy`<br/>
被设置忽略的元素，不再触发点击、曝光等任何事件，被忽略的 WebView 也不会采集 Hybrid 的事件。

#### 属性说明

UIView 分类声明的属性 (Objective-C 实现)，建议在 view 初始化之后立即调用

| 属性                      | 属性类型              | 说明                                                         |
| :------------------------ | :-------------------- | :----------------------------------------------------------- |
| `ignorePolicy` | `GrowingIgnorePolicy` | 1. `GrowingIgnoreSelf` 只忽略该元素<br/> 2. `GrowingIgnoreChildren` 只忽略该元素的子元素<br/> 3. `GrowingIgnoreAll` 忽略所有，包括该元素和该元素的子元素<br/> 4. `GrowingIgnoreNone` 不忽略 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
view.ignorePolicy = .`self`
view.ignorePolicy = .children
view.ignorePolicy = .all
view.ignorePolicy = .none
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
view.growingViewIgnorePolicy = .`self`
view.growingViewIgnorePolicy = .children
view.growingViewIgnorePolicy = .all
view.growingViewIgnorePolicy = .none
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
view.growingViewIgnorePolicy = GrowingIgnoreSelf;
view.growingViewIgnorePolicy = GrowingIgnoreChildren;
view.growingViewIgnorePolicy = GrowingIgnoreAll;
view.growingViewIgnorePolicy = GrowingIgnoreNone;
```

  </TabItem>
</Tabs>


### 13. 忽略元素类型
`ignore(_ clazz: AnyClass)`<br/>
配置忽略对应可点击元素的追踪

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `clazz` | `AnyClass` | 元素的类型 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
Autotracker.ignore(UIButton.self)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
GrowingAutotracker.sharedInstance().ignoreViewClass(UIButton.self)
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
[[GrowingAutotracker sharedInstance] ignoreViewClass:[UIButton class]];
```

  </TabItem>
</Tabs>


### 14. 忽略元素类型组
`ignore(_ classes: [AnyClass])`<br/>
配置忽略数组内对应可点击元素的追踪

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `classes` | `[AnyClass]` | 元素的类型数组 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
Autotracker.ignore([UIButton.self, UISwitch.self])
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
GrowingAutotracker.sharedInstance().ignoreViewClasses([UIButton.self, UISwitch.self])
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
[[GrowingAutotracker sharedInstance] ignoreViewClasses:@[[UIButton class], [UISwitch class]]];
```

  </TabItem>
</Tabs>


### 15.设置元素唯一 Tag 
`uniqueTag`<br/>
给元素设置唯一的 Tag，方便点击等事件确定唯一的 View，一般用于动态布局的场景

#### 属性说明

 UIView 分类声明的属性 (Objective-C 实现)

| 属性               | 属性类型   | 说明           |
| :----------------- | :--------- | :------------- |
| `uniqueTag` | `String` | 需要设置的 Tag |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
view.uniqueTag = "我是一个特别的view"
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
view.growingUniqueTag = "我是一个特别的view"
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
view.growingUniqueTag = @"我是一个特别的view";
```

  </TabItem>
</Tabs>


### 16.设置元素采集内容
`customContent`<br/>
给元素设置自定义的采集内容，比如图片元素

#### 属性说明

 UIView 分类声明的属性 (Objective-C 实现)

| 属性               | 属性类型   | 说明           |
| :----------------- | :--------- | :------------- |
| `customContent` | `String` | 需要设置的采集内容 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
view.customContent = "content"
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
view.growingViewCustomContent = "content"
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
view.growingViewCustomContent = @"content";
```

  </TabItem>
</Tabs>


### 17. 设置埋点通用属性

`setGeneralProps(_ props: [String: Any])`<br/>
设置埋点通用属性，属性值支持 String、Number、Date、Set、Array

`removeGeneralProps(_ keys: [String])`<br/>
清除指定字段的埋点通用属性

`clearGeneralProps()`<br/>
清除埋点通用属性

`setDynamicGeneralProps(_ closure: (() -> [String: Any])?)`<br/>
设置动态埋点通用属性，属性值支持 String、Number、Date、Set、Array

**<font color="#FC5F3A">注意：</font>SDK 版本 >= 4.3.0 支持**

#### 参数说明

| 参数        | 参数类型   | 说明               |
| :---------- | :--------- | :----------------- |
| `props` | `[String: Any]` | 事件通用属性，相同字段的新值将覆盖旧值 |
| `keys` | `[String]` | 通用属性指定字段 |

#### 示例

<Tabs groupId="integration" queryString>
  <TabItem value="spm" label="Swift Package Manager" default>

```swift
// 无埋点
Autotracker.setGeneralProps(["property": "value"])
Autotracker.removeGeneralProps(["key1", "key2"])
Autotracker.clearGeneralProps()
Autotracker.setDynamicGeneralProps {
    ["key" : "value"]
}
Autotracker.setDynamicGeneralProps(nil)

// 埋点
Tracker.setGeneralProps(["property": "value"])
Tracker.removeGeneralProps(["key1", "key2"])
Tracker.clearGeneralProps()
Tracker.setDynamicGeneralProps {
    ["key" : "value"]
}
Tracker.setDynamicGeneralProps(nil)
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods(Swift)">

```swift
// 无埋点
GrowingAutotracker.setGeneralProps(["property": "value"])
GrowingAutotracker.removeGeneralProps(["key1", "key2"])
GrowingAutotracker.clearGeneralProps()
GrowingAutotracker.setDynamicGeneralProps {
    ["key" : "value"]
}
GrowingAutotracker.setDynamicGeneralProps(nil)

// 埋点
GrowingTracker.setGeneralProps(["property": "value"])
GrowingTracker.removeGeneralProps(["key1", "key2"])
GrowingTracker.clearGeneralProps()
GrowingTracker.setDynamicGeneralProps {
    ["key" : "value"]
}
GrowingTracker.setDynamicGeneralProps(nil)
```

  </TabItem>
  <TabItem value="cocoapods_oc" label="Cocoapods(Objective-C)">

```objectivec
// 无埋点
[GrowingAutotracker setGeneralProps:@{@"property": @"value"}];
[GrowingAutotracker removeGeneralProps:@[@"key1", @"key2"]];
[GrowingAutotracker clearGeneralProps];
[GrowingAutotracker setDynamicGeneralPropsGenerator:^NSDictionary<NSString *,id> * _Nonnull{
    return @{@"key": @"value"};
}];
[GrowingAutotracker setDynamicGeneralPropsGenerator:nil];

// 埋点
[GrowingTracker setGeneralProps:@{@"property": @"value"}];
[GrowingTracker removeGeneralProps:@[@"key1", @"key2"]];
[GrowingTracker clearGeneralProps];
[GrowingTracker setDynamicGeneralPropsGenerator:^NSDictionary<NSString *,id> * _Nonnull{
    return @{@"key": @"value"};
}];
[GrowingTracker setDynamicGeneralPropsGenerator:nil];
```

  </TabItem>
</Tabs>

:::caution 注意
定义的通用属性名需要在平台上进行事件属性的创建并与埋点事件完成关联<br/>
通用属性配置后，对所有后续生成的事件生效，若需要作用于首个访问事件，请在初始化 SDK 之前调用<br/>
该方法可多次调用，相同字段的新值将覆盖旧值<br/>
通用属性存储在内存中，每次应用冷启动需要重新设置
:::
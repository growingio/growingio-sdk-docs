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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
let success = Autotracker.isInitializedSuccessfully()
```

```objectivec
BOOL success = [GrowingAutotracker isInitializedSuccessfully];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
let success = Tracker.isInitializedSuccessfully()
```

```objectivec
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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.setDataCollectionEnabled(true)
```

```objectivec
[[GrowingAutotracker sharedInstance] setDataCollectionEnabled:YES];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.setDataCollectionEnabled(true)
```

```objectivec
[[GrowingTracker sharedInstance] setDataCollectionEnabled:YES];
```

  </TabItem>
</Tabs>


### 3. 设置登录用户 ID 
`setLoginUserId(_ userId: String)`<br/>
`setLoginUserId(_ userId: String, userKey: String?)`<br/>
当用户登录之后调用，设置登录用户 ID 和用户 Key<br/>
如果您的 App 每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级 App 版本后初次访问时重新调用 setLoginUserId 方法
:::info
**设置用户 Key 需在初始化 SDK 时设置 `config?.idMappingEnabled = true`**
:::

#### 参数说明

| 参数     | 参数类型   | 说明                        |
| :------- | :--------- | :----------------------- |
| `userId` | `String` | 长度限制大于 0 且小于等于 1000 |
| `userkey` | `String?` | 长度限制大于 0 且小于等于 1000，默认为 nil |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.setLoginUserId("123456")
Autotracker.setLoginUserId("13111111111", userKey: "phone")
```

```objectivec
[[GrowingAutotracker sharedInstance] setLoginUserId:@"123456"];
[[GrowingAutotracker sharedInstance] setLoginUserId:@"13111111111" userKey:@"phone"];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.setLoginUserId("123456")
Tracker.setLoginUserId("13111111111", userKey: "phone")
```

```objectivec
[[GrowingTracker sharedInstance] setLoginUserId:@"123456"];
[[GrowingTracker sharedInstance] setLoginUserId:@"13111111111" userKey:@"phone"];
```

  </TabItem>
</Tabs>


### 4. 清除登录用户 ID 
`cleanLoginUserId()`<br/>
当用户登出之后调用，清除已经设置的登录用户 ID。

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.cleanLoginUserId()
```

```objectivec
[[GrowingAutotracker sharedInstance] cleanLoginUserId];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.cleanLoginUserId()
```

```objectivec
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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.setLocation(latitude: 39.9, longitude: 116.36)
```

```objectivec
[[GrowingAutotracker sharedInstance] setLocation:39.9 longitude:116.36];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.setLocation(latitude: 39.9, longitude: 116.36)
```

```objectivec
[[GrowingTracker sharedInstance] setLocation:39.9 longitude:116.36];
```

  </TabItem>
</Tabs>


### 6. 清除用户的地理位置
`cleanLocation()`<br/>
清除用户当前的地理位置

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.cleanLocation()
```

```objectivec
[[GrowingAutotracker sharedInstance] cleanLocation];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.cleanLocation()
```

```objectivec
[[GrowingTracker sharedInstance] cleanLocation];
```

  </TabItem>
</Tabs>


### 7. 设置埋点事件 
`Autotracker.track(_ eventName: String, attributes: [String: String]?)`<br/>
发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在 CDP 平台事件管理界面创建埋点事件以及关联事件属性；<br/>
如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP 平台版本>= 2.1 ）

#### 参数说明

| 参数         | 参数类型              | 说明                       |
| :----------- | :------------------ | :------------------------- |
| `eventName`  | `String`            | 事件名，事件标识符         |
| `attributes` | `[String: String]?` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.track("eventName")
Autotracker.track("eventName", attributes: ["property": "value"])

// 事件属性支持List类型，注意：CDP平台暂不支持展示
let attrBuilder = GrowingAttributesBuilder<NSString>()
attrBuilder.setString("value", forKey: "property")
attrBuilder.setArray(["value1", "value2", "value3"], forKey: "property2")
Autotracker.track("eventName", attributes: attrBuilder.build() as! [String: String]?)
```

```objectivec
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"eventName"];
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:@{@"property": @"value"}];

// 事件属性支持List类型，注意：CDP平台暂不支持展示
GrowingAttributesBuilder *builder = GrowingAttributesBuilder.new;
[builder setString:@"value" forKey:@"property"];
[builder setArray:@[@"value1", @"value2", @"value3"] forKey:@"property2"];
[[GrowingAutotracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:builder.build];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.track("eventName")
Tracker.track("eventName", attributes: ["property": "value"])

// 事件属性支持List类型，注意：CDP平台暂不支持展示
let attrBuilder = GrowingAttributesBuilder<NSString>()
attrBuilder.setString("value", forKey: "property")
attrBuilder.setArray(["value1", "value2", "value3"], forKey: "property2")
Tracker.track("eventName", attributes: attrBuilder.build() as! [String: String]?)
```

```objectivec
[[GrowingTracker sharedInstance] trackCustomEvent:@"eventName"];
[[GrowingTracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:@{@"property": @"value"}];

// 事件属性支持List类型，注意：CDP平台暂不支持展示
GrowingAttributesBuilder *builder = GrowingAttributesBuilder.new;
[builder setString:@"value" forKey:@"property"];
[builder setArray:@[@"value1", @"value2", @"value3"] forKey:@"property2"];
[[GrowingTracker sharedInstance] trackCustomEvent:@"eventName" withAttributes:builder.build];
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

`endTimer(_ timerId: String, attributes: [String: String]?)`<br/>
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
| `attributes` | `[String: String]?` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |


| 参数      | 参数类型   | 说明                                      |
| :-------- | :--------- | :---------------------------------------- |
| `timerId` | `String` | 计时器唯一标识符，由`trackTimer`返回 |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
let timerId = Autotracker.trackTimer("eventName")
if let timerId = timerId {
    Autotracker.pauseTimer(timerId)
    Autotracker.resumeTimer(timerId)
    Autotracker.endTimer(timerId)
    Autotracker.endTimer(timerId, attributes: ["property": "value"])
    Autotracker.removeTimer(timerId)
}
Autotracker.clearTimers()
```

```objectivec
NSString *timerId = [[GrowingAutotracker sharedInstance] trackTimerStart:@"eventName"];
if (timerId) {
    [[GrowingAutotracker sharedInstance] trackTimerPause:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerResume:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerEnd:timerId];
    [[GrowingAutotracker sharedInstance] trackTimerEnd:timerId withAttributes:@{@"property" : @"value"}];
    [[GrowingAutotracker sharedInstance] removeTimer:timerId];
}
[[GrowingAutotracker sharedInstance] clearTrackTimer];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
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

```objectivec
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
`setLoginUserAttributes(_ attributes: [String: String])`<br/>
以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `attributes` | `[String: String]` | 用户属性信息 |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.setLoginUserAttributes(["property": "value"])

// 事件属性支持List类型，注意：CDP平台暂不支持展示
let attrBuilder = GrowingAttributesBuilder<NSString>()
attrBuilder.setString("value", forKey: "property")
attrBuilder.setArray(["value1", "value2", "value3"], forKey: "property2")
Autotracker.setLoginUserAttributes(attrBuilder.build() as! [String: String])
```

```objectivec
[[GrowingAutotracker sharedInstance] setLoginUserAttributes:@{@"property" : @"value"}];

// 事件属性支持List类型，注意：CDP平台暂不支持展示
GrowingAttributesBuilder *builder = GrowingAttributesBuilder.new;
[builder setString:@"value" forKey:@"property"];
[builder setArray:@[@"value1", @"value2", @"value3"] forKey:@"property2"];
[[GrowingAutotracker sharedInstance] setLoginUserAttributes:builder.build];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
Tracker.setLoginUserAttributes(["property": "value"])

// 事件属性支持List类型，注意：CDP平台暂不支持展示
let attrBuilder = GrowingAttributesBuilder<NSString>()
attrBuilder.setString("value", forKey: "property")
attrBuilder.setArray(["value1", "value2", "value3"], forKey: "property2")
Tracker.setLoginUserAttributes(attrBuilder.build() as! [String: String])
```

```objectivec
[[GrowingTracker sharedInstance] setLoginUserAttributes:@{@"property" : @"value"}];

// 事件属性支持List类型，注意：CDP平台暂不支持展示
GrowingAttributesBuilder *builder = GrowingAttributesBuilder.new;
[builder setString:@"value" forKey:@"property"];
[builder setArray:@[@"value1", @"value2", @"value3"] forKey:@"property2"];
[[GrowingTracker sharedInstance] setLoginUserAttributes:builder.build];
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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
let deviceId = Autotracker.deviceId()
```

```objectivec
NSString *deviceId = [[GrowingAutotracker sharedInstance] getDeviceId];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
let deviceId = Tracker.deviceId()
```

```objectivec
NSString *deviceId = [[GrowingTracker sharedInstance] getDeviceId];
```

  </TabItem>
</Tabs>


### 11. 追踪页面展示事件
`autotrackPage(_ viewController: UIViewController, alias: String, attributes: [String: String]?)`<br/>
追踪页面展示事件，需要在 viewDidAppear 执行之前调用

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `viewController` | `UIViewController` | 被追踪页面 |
| `alias` | `String` | 页面别名 |
| `attributes` | `[String: String]?` | 事件发生时所伴随的维度信息（可选） |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.autotrackPage(self, alias: "viewController")
Autotracker.autotrackPage(self, alias: "viewController", attributes: ["key": "value"])
```

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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
view.ignorePolicy = .`self`
view.ignorePolicy = .children
view.ignorePolicy = .all
view.ignorePolicy = .none
```

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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.ignore(UIButton.self)
```

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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
Autotracker.ignore([UIButton.self, UISwitch.self])
```

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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
view.uniqueTag = "我是一个特别的view"
```

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

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
view.customContent = "content"
```

```objectivec
view.growingViewCustomContent = @"content";
```

  </TabItem>
</Tabs>

### 17. 全局通用属性
`setGeneralProps(_ props: [String: String])`<br/>
设置全局通用属性

`clearGeneralProps()`<br/>
清空全局通用属性

`removeGeneralProps(_ keys: [String])`<br/>
删除指定通用属性

#### 参数说明

| 参数        | 参数类型   | 说明               |
| :---------- | :--------- | :---------------|
| `props` | `[String: String]` | 设置通用属性信息 |


| 参数      | 参数类型   | 说明          |
| :-------- | :--------- | :--------- |
| `keys` | `[String]` | 删除指定的通用属性 |

#### 示例

<Tabs>
  <TabItem value="无埋点" label="无埋点" default>

```swift
// 设置全局通用属性
Autotracker.setGeneralProps(["gender": "male", "age": "12"])
// 删除指定全局通用属性
Autotracker.removeGeneralProps(["gender"])
// 清空全局通用属性
Autotracker.clearGeneralProps()
```

```objectivec
// 设置全局通用属性
[[GrowingAutotracker sharedInstance] setGeneralProps:@{@"gender" : @"male", @"age": @"12"}];
// 删除指定全局通用属性
[[GrowingAutotracker sharedInstance] removeGeneralProps:@[@"gender"]];
// 清空全局通用属性
[[GrowingAutotracker sharedInstance] clearGeneralProps];
```

  </TabItem>
  <TabItem value="埋点" label="埋点">

```swift
// 设置全局通用属性
Tracker.setGeneralProps(["gender": "male", "age": "12"])
// 删除指定全局通用属性
Tracker.removeGeneralProps(["gender"])
// 清空全局通用属性
Tracker.clearGeneralProps()
```

```objectivec
// 设置全局通用属性
[[GrowingTracker sharedInstance] setGeneralProps:@{@"gender" : @"male", @"age": @"12"}];
// 删除指定全局通用属性
[[GrowingTracker sharedInstance] removeGeneralProps:@[@"gender"]];
// 清空全局通用属性
[[GrowingTracker sharedInstance] clearGeneralProps];
```

  </TabItem>
</Tabs>
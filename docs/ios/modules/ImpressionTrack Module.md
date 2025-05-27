---
sidebar_position: 4
title: 曝光采集模块
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

标记一个 View 并提供自定义事件名和属性，当此 View 对象可见时，发送 CUSTOM 事件

:::info
**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

--------

<Tabs>
  <TabItem value="swiftPM" label="Swift Package Manager集成" default>

### 模块集成

1. 添加 **GrowingModule_ImpressionTrack** Package

<ImageLoader path="img/ios/add_package_imp" />

<br/>
<br/>

### 采集接口

ImpressionTrack 模块中提供了如下接口：

#### 1.开启某元素的曝光采集

`trackImp(_ eventName: String, attributes: [String: Any]?)`<br/>
采集元素曝光，在元素展示前调用即可，SDK 负责监听元素展示并触发事件<br/>
事件类型为自定义事件 (CUSTOM)，请在主线程调用

| 参数      | 参数类型    | 是否可选    | 说明              |
| --------- | ----------- | ----------- | ----------------- |
| `eventName` | `String` |  否 | 自定义事件名称 |
| `attributes` | `[String: Any]?` |  是 | 事件发生时所伴随的维度信息（可选），属性值支持 String、Number、Date、Set、Array |

##### 示例

```swift
view.trackImp("show")
view.trackImp("show", attributes: ["key": "value"])
```

#### 2.停止某元素的曝光采集

`stopTrackImp()`<br/>
停止该元素曝光追踪，请在主线程调用<br/>
通常应用于列表中的重用元素<br/>
例如您只想追踪列表中的第一行元素的展示，但当第四行出现时重用了第一行的元素，此时您可调用此函数避免事件触发

##### 示例

```swift
view.stopTrackImp()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

### 模块集成

1. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/ImpressionTrack'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

<br/>

### 采集接口

ImpressionTrack 模块中提供了如下接口：

#### 1.开启某元素的曝光采集

`growingTrackImpression:`<br/>
`growingTrackImpression:attributes:`<br/>
采集元素曝光，在元素展示前调用即可，SDK 负责监听元素展示并触发事件<br/>
事件类型为自定义事件(CUSTOM)，请在主线程调用

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `eventName` | `NSString` | 自定义事件名称 |
| `attributes` | `NSDictionary<NSString *, id> *` | 事件发生时所伴随的维度信息（可选），属性值支持 NSString、NSNumber、NSDate、NSSet、NSArray |

##### 示例

```objectivec
[view growingTrackImpression:@"show"];
[view growingTrackImpression:@"show" attributes:@[@"key" : @"value"]];
```

#### 2.停止某元素的曝光采集

`growingStopTrackImpression`<br/>
停止该元素曝光追踪，请在主线程调用<br/>
通常应用于列表中的重用元素<br/>
例如您只想追踪列表中的第一行元素的展示，但当第四行出现时重用了第一行的元素，此时您可调用此函数避免事件触发

##### 示例

```objectivec
[view growingStopTrackImpression];
```

  </TabItem>
</Tabs>
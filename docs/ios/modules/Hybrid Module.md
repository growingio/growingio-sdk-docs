---
sidebar_position: 1
title: H5混合模块
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

APP 内嵌 H5 页面如果也需要进行数据采集，H5 页面需要集成 Web JS SDK

若需要 H5 页面 Web JS SDK 采集的数据与 APP 中 GIO SDK 采集的用户等数据打通，请参考 [Hybrid内嵌页打通插件](/docs/webjs/plugins/hybridAdapter)

如果 APP 集成的是无埋点 SDK， 不需要做设置，SDK 会自动注入桥接代码，实现数据打通；

如果 APP 集成的是埋点 SDK，则需要您添加 Hybrid 依赖

:::info
**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

--------

<Tabs>
  <TabItem value="swiftPM" label="Swift Package Manager集成" default>

### 模块集成

1. 添加 **GrowingModule_Hybrid** Package

<ImageLoader path="img/ios/add_package_hybrid" />

2. 一般情况下，Hybrid 将自动注入进行数据采集，如需额外配置，可在目标文件中，导入 `import GrowingModule_Hybrid`，并调用下列配置接口

### 模块配置

Hybrid 模块中提供了配置接口：

#### 1.自动对所有 webView 注入 Hybrid SDK

| 配置接口            | 参数类型 | 默认值 | 说明                                   |
| :------------------ | :------- | :----- | :------------------------------------- |
| `autoBridgeEnabled` | `Bool`   | `true`  | 是否对所有 webView 自动注入 Hybrid SDK |

##### 示例

```swift
let hybrid = Hybrid.sharedInstance()
hybrid.autoBridgeEnabled = false
```


#### 2.单个 webView 启用 Hybrid 注入 (白名单模式)

`enableBridge(_ webView: WKWebView)`<br/>
在 autoBridgeEnabled 为 false 时，对单个 webView 启用 Hybrid 注入，请在主线程调用

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```swift
let hybrid = Hybrid.sharedInstance()
hybrid.enableBridge(webView)
```


#### 3.单个 webView 关闭 Hybrid 注入 (黑名单模式)

`disableBridge(_ webView: WKWebView)`<br/>
在 autoBridgeEnabled 为 true 时，对单个 webView 关闭 Hybrid 注入，请在主线程调用

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```swift
let hybrid = Hybrid.sharedInstance()
hybrid.disableBridge(webView)
```


#### 4.查看 webView 是否可注入

`isBridgeEnabled(_ webView: WKWebView)`<br/>
判断当前配置下，webView 是否可注入

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```swift
let hybrid = Hybrid.sharedInstance()
let isBridgeEnabled = hybrid.isBridgeEnabled(webView)
```


#### 5.重置 Hybrid 注入

`resetBridgeSettings()`<br/>
重置 Hybrid 注入配置，请在主线程调用

##### 示例

```swift
let hybrid = Hybrid.sharedInstance()
hybrid.resetBridgeSettings()
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

### 模块集成

1. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/Hybrid'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

2. 一般情况下，Hybrid 将自动注入进行数据采集，如需额外配置，可在目标文件中，导入 `#import "GrowingHybridModule.h"`，并调用下列配置接口

### 模块配置

Hybrid 模块中提供了配置接口：

#### 1.自动对所有 webView 注入 Hybrid SDK

| 配置接口            | 参数类型 | 默认值 | 说明                                   |
| :------------------ | :------- | :----- | :------------------------------------- |
| `autoBridgeEnabled` | `BOOL`   | `YES`  | 是否对所有 webView 自动注入 Hybrid SDK |

##### 示例

```objectivec
[GrowingHybridModule sharedInstance].autoBridgeEnabled = NO;
```


#### 2.单个 webView 启用 Hybrid 注入 (白名单模式)

`enableBridgeForWebView:`<br/>
在 autoBridgeEnabled 为 NO 时，对单个 webView 启用 Hybrid 注入，请在主线程调用

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```objectivec
[[GrowingHybridModule sharedInstance] enableBridgeForWebView:webView];
```


#### 3.单个 webView 关闭 Hybrid 注入 (黑名单模式)

`disableBridgeForWebView:`<br/>
在 autoBridgeEnabled 为 YES 时，对单个 webView 关闭 Hybrid 注入，请在主线程调用

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```objectivec
[[GrowingHybridModule sharedInstance] disableBridgeForWebView:webView];
```


#### 4.查看 webView 是否可注入

`isBridgeForWebViewEnabled:`<br/>
判断当前配置下，webView 是否可注入

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `webView` | `WKWebView` | 当前 webView 实例 |

##### 示例

```objectivec
BOOL enabled = [[GrowingHybridModule sharedInstance] isBridgeForWebViewEnabled:webView];
```


#### 5.重置 Hybrid 注入

`resetBridgeSettings`<br/>
重置 Hybrid 注入配置，请在主线程调用

##### 示例

```objectivec
[[GrowingHybridModule sharedInstance] resetBridgeSettings];
```

  </TabItem>
</Tabs>

--------

:::tip
**1. H5 页面 Web JS SDK 采集的数据与 APP 中 GIO SDK 采集的用户等数据打通规则：**
- 两者 accountId 一致时，H5 与 APP 打通，此时 H5 页面上采集的数据仅由 APP 中 GIO SDK 发送
- 两者 accountId 不一致时，H5 页面上采集的数据同时由 Web JS SDK 和 APP 中 GIO SDK 发送
- 满足打通设置时，H5 页面调用 setUserID，cleanUserID 会调用 APP 的 setLoginUserID，cleanUserID。

**2. 打通成功效果**
当触发了打通规则，实现打通设置后，H5 内嵌页采集的数据经 APP 中 GIO SDK 发送数据。以下字段变化如下：<br/>
deviceId: 使用原生 App 的d eviceId<br/>
sessionId: 使用原生 App 的 sessionId<br/>
gioId: 使用原生 App 的 gioId <br/>
userId: 使用原生 App 的 userId<br/>
userKey: 使用原生 App 的 userKey<br/>
dataSourceId: 使用原生 App 的 dataSourceId<br/>
platform: 使用原生 App 的 platform<br/>
domain: 使用 H5 页面的域名<br/>

用户行为与采集数据描述：用户点击 APP 内嵌 H5 页面，由 APP 原生页面进入 H5 页面，H5 页面集成的采集 SDK 会把采集的数据转发给 APP 集成的 SDK，再进行上报；H5 页面的行为数据中的以上用户信息字段会用 APP SDK 采集的用户信息，实现 H5 页面用户与 APP 用户信息关联。
:::

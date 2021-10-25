---
sidebar_position: 3
title: 数据采集API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
以下均以集成无埋点SDK时调用示例；

若集成的是埋点SDK,如果埋点SDK有对应的API，请将 `GrowingAutotracker` 替换为 `GrowingTracker`
:::
通过 `GrowingAutotracker` 类可以调用 SDK 中所有开放的API，通过这些API可以进行更改配置，设置参数等操作。

```java
GrowingAutotracker.get().setDataCollectionEnabled(true)
GrowingAutotracker.get().setLoginUserId("userId")
GrowingAutotracker.get().setLoginUserId("zhangshan","username")
GrowingAutotracker.get().cleanLoginUserId()
GrowingAutotracker.get().setLocation(20.11,20.11)
GrowingAutotracker.get().cleanLocation()
GrowingAutotracker.get().trackCustomEvent("registerSuccess")
GrowingAutotracker.get().setLoginUserAttributes(new HashMap<>())
GrowingAutotracker.get().setVisitorAttributes(new HashMap<>())
GrowingAutotracker.get().getDeviceId()
GrowingAutotracker.get().setPageAliasX(new androidx.fragment.app.Fragment(),"TestFragment")
GrowingAutotracker.get().ignorePageX(new androidx.fragment.app.Fragment(),IgnorePolicy.IGNORE_SELF)
GrowingAutotracker.get().setPageAlias(new android.app.Fragment(),"TestFragment")
GrowingAutotracker.get().ignorePage(new android.app.Fragment(),IgnorePolicy.IGNORE_SELF)
GrowingAutotracker.get().ignoreView(view,IgnorePolicy.IGNORE_SELF)
GrowingAutotracker.get().trackViewImpression(view,"buttonShowed")
GrowingAutotracker.get().stopTrackViewImpression(view)
GrowingAutotracker.get().setUniqueTag(button, "homeTabButton")
GrowingAutotracker.get().bridgeWebView(webview)

GrowingAutotracker.get().registerComponent(module)
```

### 1. 数据采集开关 `setDataCollectionEnabled`
打开或关闭数据采集
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `enabled` | `boolean` | `true`打开数据采集，`false`关闭数据采集，默认 `true` |
#### 示例
```java
GrowingAutotracker.get().setDataCollectionEnabled(true)
```

### 2. 设置登录用户ID `setLoginUserId`
当用户登录之后调用`setLoginUserId` API，设置登录用户ID
:::info
支持 ID-MAPPING SDK版本 >=3.3.0
**需在初始化 SDK 时设置`setIdMappingEnabled`为`true`**
:::
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `userId`  | `String` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `String` | 适用于ID-MAPPING,可设置 `userId` 的类型,可选填|
#### 示例
```java
GrowingAutotracker.get().setLoginUserId("张三")
GrowingAutotracker.get().setLoginUserId("111011101101","phone")
```

### 3. 清除登录用户ID  `cleanLoginUserId`
当用户登出之后调用`cleanLoginUserId`，清除已经设置的登录用户ID。
#### 示例
```java
GrowingAutotracker.get().cleanLoginUserId()
```

### 4. 设置用户的地理位置 `setLocation`
设置用户当前的地理位置，基于WGS-84坐标
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `latitude` | `double` | 地理坐标点纬度 |
| `longitude` | `double` | 地理坐标点经度 |
#### 示例
```java
GrowingAutotracker.get().setLocation(39.9, 116.3)
```

### 5. 清除用户的地理位置 `cleanLocation`
清除用户当前的地理位置
#### 示例
```java
GrowingAutotracker.get().cleanLocation()
```

### 6. 设置自定义事件 `trackCustomEvent`
发送一个自定义事件。在添加所需要发送的事件代码之前，需要在事件管理用户界面配置事件以及事件级变量。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `eventName` | `String` | 事件名，事件标识符 |
| `attributes` | `Map<String, String>` | 事件发生时所伴随的维度信息（可选） |
| `itemKey` | `String` | 事件发生关联的物品模型Key（可选，与itemId参数一起传入）|
| `itemId` | `String` | 事件发生关联的物品模型ID（可选，与itemKey参数一起传入）|
#### 示例
<Tabs
  groupId="code-language"
  defaultValue="kotlin"
  values={[
    {label: 'java', value: 'java'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java
GrowingAutotracker.get().trackCustomEvent("registerSuccess");

Map<String, String> map = new HashMap<>();
map.put("name", "June");
map.put("age", "12");
GrowingAutotracker.get().trackCustomEvent("registerSuccess", map);
GrowingAutotracker.get().trackCustomEvent("registerSuccess", map, "key", "id");
```

</TabItem>
<TabItem value="kotlin">

```kotlin
GrowingAutotracker.get().trackCustomEvent("registerSuccess")

val map: MutableMap<String, String> = HashMap()
map["name"] = "June"
map["age"] = "12"
GrowingAutotracker.get().trackCustomEvent("registerSuccess", map)
GrowingAutotracker.get().trackCustomEvent("registerSuccess", map, "key", "id")
```

</TabItem>
</Tabs>

### 7. 设置登录用户变量 `setLoginUserAttributes`
以登录用户的身份定义用户属性变量，用于用户信息相关分析。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `attributes` | `Map<String, String>` | 用户属性信息 |
#### 示例

<Tabs
  groupId="code-language"
  defaultValue="kotlin"
  values={[
    {label: 'java', value: 'java'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java
Map<String, String> map = new HashMap<>();
map.put("gender", "male");
map.put("age", "12");
GrowingAutotracker.get().setLoginUserAttributes(map);
```

</TabItem>
<TabItem value="kotlin">

```kotlin
val map: MutableMap<String, String> = HashMap()
map["gender"] = "male"
map["age"] = "12"
GrowingAutotracker.get().setLoginUserAttributes(map)
```

</TabItem>
</Tabs>

### 8. 获取设备ID `getDeviceId`
获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备。
如果没有初始化SDK 或者关闭采集开关可能返回值为null，且可能有IO操作。
#### 示例
```java
GrowingAutotracker.get().getDeviceId()
```

### 9. 设置页面别名 `setPageAlias`, `setPageAliasX`
给页面设置一个别名，建议设置为汉字、字母、数字和下划线的组合。为查看数据方便，请尽量对 iOS 和安卓的同功能页面取不同的名称。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `page` | `Activity / Fragment` | 需要设置别名的页面对象，必须在`onCreate`生命周期中调用 |
| `alias` | `String` | 页面别名 |
#### 示例
```java
GrowingAutotracker.get().setPageAlias(mActivity, "home")
```

### 10. 设置忽略的页面 `ignorePage`,`ignorePageX`
被设置忽略的页面，不再触发无埋点的page事件。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `page` | `Activity / Fragment` | 需要忽略的页面对象，建议在`onCreate`生命周期中调用 |
| `policy` | `IgnorePolicy` | 1. `IGNORE_SELF` 只忽略自己 <br />2. `IGNORE_CHILD` 只忽略该页面的子页面 <br />3. `IGNORE_ALL` 忽略所有，包括自己和该页面的子页面 |
#### 示例
```java
GrowingAutotracker.get().ignorePage(mActivity, IgnorePolicy.IGNORE_ALL)
```

### 11. 设置忽略的View `ignoreView`
被设置忽略的VIew，不再触发点击、曝光等任何事件，被忽略的WebView也不会采集Hybrid的事件。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `view` | `View` | 需要忽略的View对象 |
| `policy` | `IgnorePolicy` | 1. `IGNORE_SELF` 只忽略自己 <br />2. `IGNORE_CHILD` 只忽略该View的子View <br />3. `IGNORE_ALL` 忽略所有，包括自己和该View的子View |
#### 示例
```java
GrowingAutotracker.get().ignoreView(view, IgnorePolicy.IGNORE_SELF)
```

### 12. 设置采集View的曝光事件 `trackViewImpression`
当被设置的View出现在屏幕内时将触发曝光事件
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `view` | `View` | 需要采集曝光事件的View对象 |
| `impressionEventName` | `String` | 曝光的事件名 |
| `attributes` | `Map<String, String>` | 曝光的事件属性 |
#### 示例

<Tabs
  groupId="code-language"
  defaultValue="kotlin"
  values={[
    {label: 'java', value: 'java'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java
GrowingAutotracker.get().trackViewImpression(view, "buttonShowed");

Map<String, String> map = new HashMap<>();
map.put("color", "red");
map.put("name", "home");
GrowingAutotracker.get().trackViewImpression(view, "buttonShowed", map);
```

</TabItem>
<TabItem value="kotlin">

```kotlin
GrowingAutotracker.get().trackViewImpression(view, "buttonShowed")
val map: MutableMap<String, String> = HashMap()
map["gender"] = "male"
map["age"] = "12"
GrowingAutotracker.get().trackViewImpression(view, "buttonShowed", map)
```

</TabItem>
</Tabs>

### 13. 停止采集View的曝光事件 `stopTrackViewImpression`
停止采集View的曝光事件
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `trackedView` | `View` | 需要停止采集曝光事件的View对象 |
#### 示例
```java
GrowingAutotracker.get().stopTrackViewImpression(trackedView)
```

### 14. 设置View唯一Tag `setUniqueTag`
给View设置唯一的Tag，方便点击等事件确定唯一的View，一般用于动态布局的场景
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `view` | `View` | 需要设置唯一Tag的View对象 |
| `tag` | `String` | 需要设置的Tag |
#### 示例
```java
GrowingAutotracker.get().setUniqueTag(button, "homeTabButton")
```

### 15. Webview埋点 `bridgeWebView`
手动注入js到webview，用来收集webview中的数据，
:::info
如果使用无埋点SDK，会自动注入相关代码，不需要调用该方法
:::
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `view` | `View` | 可选为 `webview`、`ucwebview`和`x5webview` |
#### 示例
```java
GrowingTracker.get().bridgeWebView(webview)
```

### 16. 注册模块组件 `registerComponent`
可通过该方法手动注册SDK需要的可配置模块组件
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `module` | `LibraryGioModule` | 模块 |
#### 示例
```java
GrowingAutotracker.get().registerComponent(module)
```


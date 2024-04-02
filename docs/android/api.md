---
sidebar_position: 3
title: 数据采集API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## API列表
### 无埋点SDK API列表一览
```java
GrowingAutotracker.get().setDataCollectionEnabled(true)
GrowingAutotracker.get().setLoginUserId("userId")
GrowingAutotracker.get().setLoginUserId("userId","userKey")
GrowingAutotracker.get().cleanLoginUserId()
GrowingAutotracker.get().setLocation(20.11,20.11)
GrowingAutotracker.get().cleanLocation()
GrowingAutotracker.get().trackCustomEvent("eventName")
GrowingAutotracker.get().setLoginUserAttributes(new HashMap<>())
GrowingAutotracker.get().getDeviceId()
GrowingAutotracker.get().bridgeWebView(webview)
GrowingAutotracker.get().trackTimerStart("timer")
GrowingAutotracker.get().trackTimerPause("timerId")
GrowingAutotracker.get().trackTimerResume("timerId")
GrowingAutotracker.get().trackTimerEnd("timerId")
GrowingAutotracker.get().removeTimer("timerId")
GrowingAutotracker.get().clearTrackTimer()
GrowingAutotracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback())
GrowingAutotracker.get().registerComponent(module,<config>)
GrowingAutotracker.get().setGeneralProps(new HashMap<>())
GrowingAutotracker.get().removeGeneralProps("key1", "key2")
GrowingAutotracker.get().clearGeneralProps()

GrowingAutotracker.get().autotrackPage(activity, "alias", new HashMap<>())
GrowingAutotracker.get().autotrackPage(androidx.fragment.app.Fragment, "alias", new HashMap<>())
GrowingAutotracker.get().autotrackSystemPage(android.app.Fragment, "alias", new HashMap<>())
GrowingAutotracker.get().autotrackSupportPage(android.support.v4.app.Fragment, "alias", new HashMap<>())
GrowingAutotracker.get().setPageAttributes(activity, new HashMap<>())
GrowingAutotracker.get().setPageAttributes(androidx.fragment.app.Fragment, new HashMap<>())
GrowingAutotracker.get().setPageAttributesSystem(android.app.Fragment, new HashMap<>())
GrowingAutotracker.get().setPageAttributesSupport(android.support.v4.app.Fragment, new HashMap<>())
GrowingAutotracker.get().trackViewImpression(view, "ViewShowed")
GrowingAutotracker.get().stopTrackViewImpression(view)
GrowingAutotracker.get().setUniqueTag(button, "UniqueTagName")
GrowingAutotracker.get().ignoreView(view, IgnorePolicy.IGNORE_SELF)
GrowingAutotracker.get().ignoreViewClick(view, true)
GrowingAutotracker.get().trackEditText(editText, true)
```

### 埋点SDK API列表一览
```java
GrowingTracker.get().setDataCollectionEnabled(true)
GrowingTracker.get().setLoginUserId("userId")
GrowingTracker.get().setLoginUserId("userId", "userKey")
GrowingTracker.get().cleanLoginUserId()
GrowingTracker.get().setLocation(20.11, 20.11)
GrowingTracker.get().cleanLocation()
GrowingTracker.get().trackCustomEvent("eventName")
GrowingTracker.get().setLoginUserAttributes(new HashMap<>())
GrowingTracker.get().getDeviceId()
GrowingTracker.get().bridgeWebView(webview)
GrowingTracker.get().trackTimerStart("timer")
GrowingTracker.get().trackTimerPause("timerId")
GrowingTracker.get().trackTimerResume("timerId")
GrowingTracker.get().trackTimerEnd("timerId")
GrowingTracker.get().removeTimer("timerId")
GrowingTracker.get().clearTrackTimer()
GrowingTracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback())
GrowingTracker.get().registerComponent(module,<config>)
GrowingTracker.get().setGeneralProps(new HashMap<>())
GrowingTracker.get().removeGeneralProps("key1", "key2")
GrowingTracker.get().clearGeneralProps()
```
## 通用 API 详细说明
无埋点SDK和埋点SDK中都可以使用通用API，唯一的区别在于调用的主体不同，比如说在配置SDK模块的接口上：

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().registerComponent(module,<config>)
```
**埋点SDK示例代码：**
```java
GrowingTracker.get().registerComponent(module,<config>)
```

### 1. 数据采集开关
`setDataCollectionEnabled`<br/>
打开或关闭数据采集 
#### 参数说明
| 参数      | 参数类型  | 说明                                                 |
| :-------- | :-------- | :--------------------------------------------------- |
| `enabled` | _boolean_ | `true`打开数据采集，`false`关闭数据采集，默认 `true` |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().setDataCollectionEnabled(true)
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().setDataCollectionEnabled(true)
```



### 2. 设置登录用户ID 
`setLoginUserId`<br/>
当用户登录之后调用，设置登录用户ID
:::info
* 如果您的App每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级App版本后初次访问时重新调用setLoginUserId方法

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **同时在初始化 SDK 时设置`setIdMappingEnabled`为`true`**

:::

#### 参数说明
| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | _String_ | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | _String_ | 适用于ID-MAPPING,可设置 userId 的类型, 默认不传|
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().setLoginUserId("112333445")
GrowingAutotracker.get().setLoginUserId("112333445","phone")
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().setLoginUserId("112333445")
GrowingTracker.get().setLoginUserId("112333445","phone")
```

### 3. 清除登录用户ID
`cleanLoginUserId`<br/>
当用户登出之后调用，清除已经设置的登录用户ID。
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().cleanLoginUserId()
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().cleanLoginUserId()
```


### 4. 设置用户的地理位置 
`setLocation`<br/>
设置用户当前的地理位置，基于WGS-84坐标
#### 参数说明
| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | _double_ | 地理坐标点纬度 |
| `longitude` | _double_ | 地理坐标点经度 |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().setLocation(39.9, 116.3)
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().setLocation(39.9, 116.3)
```


### 5. 清除用户的地理位置 
`cleanLocation`<br/>
清除用户当前的地理位置
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().cleanLocation()
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().cleanLocation()
```


### 6. 设置埋点事件 
`trackCustomEvent`<br/>
发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在分析云平台事件管理界面创建埋点事件以及关联事件属性。
#### 参数说明
| 参数         | 参数类型              | 说明                                                                                 |
| :----------- | :-------------------- | :-------------------------------------------------------------------------------- |
| `eventName`  | _String_              | 事件名，事件标识符                                                                   |
| `attributes` | _Map{'<'}String, String{'>'}_ | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)（可选） |
#### 示例

**无埋点SDK示例代码：**
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
```

</TabItem>
<TabItem value="kotlin">

```kotlin
GrowingAutotracker.get().trackCustomEvent("registerSuccess")

val map: MutableMap<String, String> = HashMap()
map["name"] = "June"
map["age"] = "12"
GrowingAutotracker.get().trackCustomEvent("registerSuccess", map)
```

</TabItem>
</Tabs>

**埋点SDK示例代码：**
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
GrowingTracker.get().trackCustomEvent("registerSuccess");

Map<String, String> map = new HashMap<>();
map.put("name", "June");
map.put("age", "12");
GrowingTracker.get().trackCustomEvent("registerSuccess", map);
```

</TabItem>
<TabItem value="kotlin">

```kotlin
GrowingTracker.get().trackCustomEvent("registerSuccess")

val map: MutableMap<String, String> = HashMap()
map["name"] = "June"
map["age"] = "12"
GrowingTracker.get().trackCustomEvent("registerSuccess", map)
```

</TabItem>
</Tabs>

:::info

详细使用示例:[埋点事件示例](/knowledge/basicknowledge/trackEventUse#埋点事件示例)

:::

### 7. 设置登录用户属性 
`setLoginUserAttributes`<br/>
发送登录用户属性事件，用于用户信息相关分析；
在添加发送用户属性事件代码之前，需在分析云平台用户管理界面创建用户属性。

#### 参数说明
| 参数         | 参数类型              | 说明         |
| :----------- | :-------------------- | :----------- |
| `attributes` | _Map{'<'}String, String{'>'}_ | 用户属性信息 |
#### 示例

**无埋点SDK示例代码：**
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

**埋点SDK示例代码：**
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
GrowingTracker.get().setLoginUserAttributes(map);
```

</TabItem>
<TabItem value="kotlin">

```kotlin
val map: MutableMap<String, String> = HashMap()
map["gender"] = "male"
map["age"] = "12"
GrowingTracker.get().setLoginUserAttributes(map)
```

</TabItem>
</Tabs>

:::info

用户属性详细说明:[用户属性事件说明](/knowledge/basicknowledge/userModel#登录用户)

:::


### 8. 获取设备ID 
`getDeviceId`<br/>
获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备。
如果没有初始化SDK 或者关闭采集开关可能返回值为null，且可能有IO操作。
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().getDeviceId()
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().getDeviceId()
```

### 9. WebView桥接 
`bridgeWebView`<br/>
手动注入js到webview，用来收集webview中的数据，
:::info
如果使用无埋点SDK，会自动注入相关代码，不需要调用该方法
:::
#### 参数说明
| 参数   | 参数类型 | 说明                                       |
| :----- | :------- | :----------------------------------------- |
| `view` | _View_   | 可选为 `webview`、`ucwebview`和`x5webview` |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().bridgeWebView(webview)
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().bridgeWebView(webview)
```

### 10. 事件计时器
`trackTimerStart`<br/>
初始化一个事件计时器，参数为计时事件的事件名称，返回值为该事件计时器唯一标识

`trackTimerPause`<br/>
暂停事件计时器，参数为trackTimerStart返回的唯一标识

`trackTimerResume`<br/>
恢复事件计时器，参数为trackTimerStart返回的唯一标识

`trackTimerEnd`<br/>
停止事件计时器，参数为trackTimerStart返回的唯一标识。调用该接口会自动触发删除定时器。

`removeTimer`<br/>
删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

`clearTrackTimer`<br/>
清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

**<font color="#FC5F3A">注意：</font>SDK版本>=3.4.6支持。**

#### 参数说明
| 参数        | 参数类型 | 说明                 |
| :---------- | :------- | :------------------- |
| `eventName` | _String_ | 事件名称，事件标识符 |
| `attributes` | _Map{'<'}String, String{'>'}_ | 事件发生时所伴随的属性信息 |

#### 返回值说明
| 参数      | 参数类型 | 说明           |
| :-------- | :------- | :------------- |
| `timerId` | _String_ | 计时器唯一标识 |
#### 示例

**无埋点SDK示例代码：**
```java
//初始化一个事件计时器
String timerId = GrowingAutotracker.get().trackTimerStart('eventName');
//暂停事件计时器
GrowingAutotracker.get().trackTimerPause(timerId);
//恢复事件计时器
GrowingAutotracker.get().trackTimerResume(timerId);

//停止事件计时器
GrowingAutotracker.get().trackTimerEnd(timerId);
//停止事件计时器携带事件属性
GrowingAutotracker.get().trackTimerEnd(timerId, new HashMap<>());

//删除事件计时器
GrowingAutotracker.get().removeTimer(timerId);
//清除事件计时器
GrowingAutotracker.get().clearTrackTimer();
```

**埋点SDK示例代码：**
```java
//初始化一个事件计时器
String timerId = GrowingTracker.get().trackTimerStart('eventName')
//暂停事件计时器
GrowingTracker.get().trackTimerPause(timerId);
//恢复事件计时器
GrowingTracker.get().trackTimerResume(timerId);

//停止事件计时器
GrowingTracker.get().trackTimerEnd(timerId);
//停止事件计时器携带事件属性
GrowingTracker.get().trackTimerEnd(timerId, new HashMap<>());

//删除事件计时器
GrowingTracker.get().removeTimer(timerId);
//清除事件计时器
GrowingTracker.get().clearTrackTimer();
```

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：
* eventName  埋点事件标识符（trackTimerStart传入）；
* attributes 用户自定义事件属性（trackTimerEnd传入）；
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）。<br/>
event_duration 按照秒上报，小数点精度保证到毫秒。<br/>
event_duration 变量及其值会自动添加在 attributes 中。<br/>
event_duration 时间统计不会计算后台时间：
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性。
:::


### 11. 主动触发DeepLink
`doDeepLinkByUrl` <br/>
调用该接口需要集成广告模块，具体集成请参考[广告模块](/docs/android/modules/advert%20module)

### 12. 注册模块组件 
`registerComponent`<br/>
可通过该方法手动注册SDK需要的可配置模块组件（推荐在初始化通过 `Configuration` 初始化时注册）。
#### 参数说明
| 参数     | 参数类型           | 说明 |
| :------- | :----------------- | :--- |
| `module` | _LibraryGioModule_ | 模块 |
| `config` | _Configuration_ | 模块的配置类(可选参数) |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().registerComponent(module,<config>)
```
**埋点SDK示例代码：**
```java
GrowingTracker.get().registerComponent(module,<config>)
```

### 13. 全局通用属性
`setGeneralProps`<br/>
设置全局通用属性

`clearGeneralProps`<br/>
清空全局通用属性

`removeGeneralProps`<br/>
删除指定通用属性

#### 参数说明
| 参数        | 参数类型 | 说明                 |
| :---------- | :------- | :------------------- |
| `variables` | _Map{'<'}String, String{'>'}_ | 设置通用属性信息 |
| `keys`      | _String..._ | 删除指定通用属性|

#### 示例

**无埋点SDK示例代码：**
```java
// 设置全局通用属性
Map<String, String> map = new HashMap<>();
map.put("gender", "male");
map.put("age", "12");
GrowingAutotracker.get().setGeneralProps(map);
// 删除指定全局通用属性
GrowingAutotracker.get().removeGeneralProps("gender", "age");
// 清空全局通用属性
GrowingAutotracker.get().clearGeneralProps();
```

**埋点SDK示例代码：**
```java
Map<String, String> map = new HashMap<>();
map.put("gender", "male");
map.put("age", "12");
GrowingTracker.get().setGeneralProps(map);
// 删除指定全局通用属性
GrowingTracker.get().removeGeneralProps("gender", "age");
// 清空全局通用属性
GrowingTracker.get().clearGeneralProps();
```

### 14. 属性工具
AttributesBuilder是SDK提供给用户协助设置属性的工具类，支持传入多种类型属性值(包含列表类型)

`addAttribute`<br/>
添加属性

`removeAttribute`<br/>
删除指定属性

`clear`<br/>
清空属性

`size`<br/>
返回当前设置的属性个数

`build`<br/>
返回设置埋点事件API所需属性参数类型对应的数据结构

#### 示例

**无埋点SDK示例代码：**
```java
AttributesBuilder builder = new AttributesBuilder();
// 设置属性
Map<String, Object> map = new HashMap<>();
map.put("Key", "Value");
builder.addAttribute(map);
builder.addAttribute("String", "1");
builder.addAttribute("List", Arrays.asList("1", "2"));
builder.addAttribute("Set", Set.of("1", "2"));
builder.addAttribute("JSONArray", new JSONArray());
builder.addAttribute("SparseArray", new SparseArray<>());
builder.addAttribute("String[]", new String[]{"1", "2"});
// 删除指定属性
builder.removeAttribute("Key");
// 清除属性
builder.clear();
// 返回当前设置的属性个数
builder.size();
// 发送埋点
GrowingAutotracker.get().trackCustomEvent("registerSuccess", builder.build());
```

**埋点SDK示例代码：**
```java
AttributesBuilder builder = new AttributesBuilder();
// 设置属性
Map<String, Object> map = new HashMap<>();
map.put("Key", "Value");
builder.addAttribute(map);
builder.addAttribute("String", "1");
builder.addAttribute("List", Arrays.asList("1", "2"));
builder.addAttribute("Set", Set.of("1", "2"));
builder.addAttribute("JSONArray", new JSONArray());
builder.addAttribute("SparseArray", new SparseArray<>());
builder.addAttribute("String[]", new String[]{"1", "2"});
// 删除指定属性
builder.removeAttribute("Key");
// 清除属性
builder.clear();
// 返回当前设置的属性个数
builder.size();
// 发送埋点
GrowingTracker.get().trackCustomEvent("registerSuccess", builder.build());
```

## 无埋点 API 详细说明
无埋点 API 是用户集成无埋点SDK后可以调用的接口，主要用于辅助无埋点事件的采集和发送。

### 1. 采集页面事件
`autotrackPage`, `autotrackSystemPage`, `autotrackSupportPage`<br/>
从 4.0 版本开始，无埋点SDK不再自动采集App的内部页面，需要开发者手动调用接口声明才会发送 `Page` 事件。

#### 参数说明
| 参数    | 参数类型                  | 是否必填 | 说明          |
| :------ | :---------------------- | :---:  | :---------------|
| `page`  | _Activity_ / _Fragment_ | 是      | 需要采集的页面对象 |
| `alias` | _String_                | 是      | 采集的页面名称    |
| `attributes` | _Map{'<'}String, String{'>'}_ |  否  | 页面的属性信息，可选|

在Android系统中，可以采集的页面主要为 `Activity`,`Fragment`(包括support，app的和androidx包下)。同时需要开发者为每一个页面指定一个名称，用于分析云平台页面数据处理。<br/>
为了保证页面信息的准确性，推荐在页面的 `onCreate` 中调用采集页面事件接口。

#### 示例

**无埋点SDK示例代码：**
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
@Override
 protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        //  ...
        Map<String, String> map = new HashMap<>();
        map.put("key", "value");
        String alias = "DemoActivity"; // getClass().getSimpleName();
        GrowingAutotracker.get().autotrackPage(this, alias, map);
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // ...
        val map = hashMapOf("key" to "value")
        val alias = "DemoActivity" //this.javaClass.simpleName
        GrowingAutotracker.get().autotrackPage(this, alias, map) 
}
```

</TabItem>
</Tabs>

### 2. 设置页面属性
`setPageAttributes`, `setPageAttributesSupport`, `setPageAttributesX`<br/>
给指定页面设置属性，与 `autotrackPagePage`接口对应，推荐在`onResume`生命周期之前调用。

#### 参数说明
| 参数    | 参数类型              | 说明                      |
| :------ | :-------------------- | :----------------------|
| `page`  | _Activity_ / _Fragment_ | 需要设置属性的页面对象 |
| `attributes` | _Map{'<'}String, String{'>'}_     | 属性信息      |
#### 示例

**无埋点SDK示例代码：**
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
 @Override
 protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ...
        Map<String, String> map = new HashMap<>();
        map.put("key", "value");
        GrowingAutotracker.get().setPageAttributes(this, map);
        ...

}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // ...
        val map = hashMapOf("key" to "value")
        GrowingAutotracker.get().setPageAttributes(this, map) 
}
```

</TabItem>
</Tabs>

### 3. 设置采集View的曝光事件 
`trackViewImpression`<br/>
当被设置的View出现在屏幕内时将触发曝光事件
#### 参数说明
| 参数                  | 参数类型              | 说明                       |
| :-------------------- | :-------------------- | :------------------------- |
| `view`                | _View_               | 需要采集曝光事件的View对象 |
| `impressionEventName` | _String_             | 曝光的事件名               |
| `attributes`          | _Map{'<'}String, String{'>'}_ | 曝光的事件属性             |
#### 示例

**无埋点SDK示例代码：**
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

### 4. 停止采集View的曝光事件 
`stopTrackViewImpression`<br/>
停止采集View的曝光事件
#### 参数说明
| 参数          | 参数类型 | 说明                           |
| :------------ | :------- | :----------------------------- |
| `trackedView` | _View_   | 需要停止采集曝光事件的View对象 |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().stopTrackViewImpression(trackedView)
```

### 5. 设置View唯一Tag 
`setUniqueTag`<br/>
给View设置唯一的Tag，方便点击等事件确定唯一的View，一般用于动态布局的场景
#### 参数说明
| 参数   | 参数类型 | 说明                      |
| :----- | :------- | :------------------------ |
| `view` | _View_   | 需要设置唯一Tag的View对象 |
| `tag`  | _String_ | 需要设置的Tag             |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().setUniqueTag(button, "homeTabButton")
```

### 6. 设置忽略的View 
`ignoreView`<br/>
被设置忽略的View，不再触发点击、曝光等任何事件，被忽略的WebView也不会采集Hybrid的事件。
#### 参数说明
| 参数     | 参数类型       | 说明         |
| :------- | :------------- | :------------------------ |
| `view`   | _View_         | 需要忽略的View对象            |
| `policy` | _IgnorePolicy_ | 1. `IGNORE_SELF` 只忽略自己 <br />2. `IGNORE_CHILD` 只忽略该View的子View <br />3. `IGNORE_ALL` 忽略所有，包括自己和该View的子View |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().ignoreView(view, IgnorePolicy.IGNORE_SELF)
```

### 6. 忽略View点击触发的点击事件
`ignoreViewClick`<br/>
被设置忽略的View，不再触发点击事件。
#### 参数说明
| 参数     | 参数类型       | 说明         |
| :------- | :------------- | :------------------------ |
| `view`   | _View_         | 需要忽略的View对象            |
| `isIgnore` | _boolean_    |   是否不再产生该View的点击事件 |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().ignoreViewClick(view, true)
```

### 7. 设置编辑框文字是否可采集
`trackEditText` <br/>
默认编辑框文字不采集，防止泄露用户的个人信息。设置后会采集编辑框的文字。
#### 参数说明
| 参数     | 参数类型       | 说明         |
| :------- | :------------- | :------------------------ |
| `editText`   | _EditText_  | 需要采集的编辑框对象       |
| `track` | _boolean_    |   是否采集编辑框文字 |
#### 示例

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().trackEditText(editText, true)
```
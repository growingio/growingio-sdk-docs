---
sidebar_position: 2
title: 初始化配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置`Configuration`,配置相关说明如下表：
## 配置表格

| Config                       | 参数类型 | 是否必填 | 默认值 | 说明 | 其它 | 版本 |
| :-------------------------   | :------   | :----:  |:------  |:------| ----- | --------------------------   |
| `accounttId`                  | `String`  | 是      | `null`   | 项目ID，每个应用对应唯一值 | - |  |
| `urlScheme`                  | `String`  | 是      | `null`   | 应用的URLScheme，唯一值 | - |  |
| `setDataSourceId`            | `String`  | 是      | `null`   | 应用的DataSourceId，唯一值 | - |  |
| `setDataCollectionServerHost`| `String`  | 是      | `null`   | 服务端部署后的 ServerHost | - |  |
| `setChannel`                 | `String`  | 否      | `null`   | 应用的分发渠道 | - |  |
| `setDebugEnabled`            | `boolean` | 否      | `false`  | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - |  |
| `setCellularDataLimit`       | `int`     | 否      | `10`     | 每天发送数据的流量限制，单位MB | - |  |
| `setDataUploadInterval`      | `int`     | 否      | `15`     | 数据发送的间隔，单位秒 | - |  |
| `setSessionInterval`         | `int`     | 否      | `30`     | 会话后台留存时长，单位秒 | - |  |
| `setDataCollectionEnabled`   | `boolean` | 否      | `true`   | 是否采集数据 | - |  |
| <font color='red'>~~setOaidEnabled~~</font> | `boolean` | 否      | `false`  | 是否采集Android OAID | - | <font color='red'>< 3.3.0</font> |
| `setExcludeEvent`            | `int`     | 否      | `0`      | 设置事件过滤 | - |  |
| `setIgnoreField`             | `int`     | 否      | `0`      | 设置事件属性过滤 | - |  |
| `setIdMappingEnabled` | `boolean` | 否 | `false` | 是否开启多用户身份上报 | - | <font color='red'>>= 3.3.0</font> |
| `setImpressionScale`         | `float`   | 否      | `0`      | 元素曝光事件中的比例因子,范围 [0-1] | 无埋点独有 |  |
| setPreloadComponent | `LibraryGioModule` | 否 | `null` | 注册自定义/预定义模块(如加密模块、OAID模块) | - | <font color='red'>>= 3.3.0</font> |



### 1. SDK必需参数
**accountId，** **urlScheme，** **setDataSourceId，** **setDataCollectionServerHost**   
这四个参数为 CDP 用户必须要设置的参数，若不清楚具体数值请询问相关服务端对接的开发同事。
### 2. **channel** 
对应应用的分发渠道字段，若设置了值则会在每个事件上报中含有渠道信息。  
比如在初始化中设置了`.setChannel("Docs")`,则会在上报信息中出现 `appChannel` 字段：
```json
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "platform": "Android",
    ║   "appChannel": "Docs",
    ║   "screenHeight": 1920,
    ║   "screenWidth": 1080,
    ║   ...
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```
### 3. **setDebugEnabled** 
默认不开启，开启后会输出 SDK Log 日志。  
建议做法设为 `setDebugEnabled(BuildConfig.DEBUG)` 这样既能保证Debug时能够打印日志，正式发布时也能关闭日志；

### 4. **setCellularDataLimit** 
为每日在4G环境下的流量限制，默认为10M。WIFI环境下则不计流量。

### 5. **setDataUploadInterval** 
上报间隔。GrowingIO SDK 会先将事件存入数据库中，然后以每隔默认时间15秒的情况下向服务器发送事件包（最大50条事件）。

### 6. **setSessionInterval** 
设置会话后台留存时长。指当前会话在应用进入后台后的最大留存时间，默认为30秒。另外，其他情况下也会重新生成一个新的会话，如设置用户ID等核心信息，重新打开数据收集等。

### 7. **setDataCollectionEnabled** 
数据收集。当数据收集关闭时，SDK将不会再获取设备信息，也不会产生事件和上报事件。

### 8. <font color='red'>采集 `OAID` 作为设备信息</font> 
:::danger
`setOaidEnabled` SDK 3.3.0之后已废弃，请通过 [采集 OAID 作为设备信息](/docs/android/base/Configuration#1-%E9%87%87%E9%9B%86oaid%E4%BD%9C%E4%B8%BA%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF) 进行注册 OAID 模块来实现 OAID 的功能
:::
若 `setOaidEnabled(true)`且已经集成了[国内移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120)下的jar包，则会在 Visit 事件中添加 oaid 字段：  
```c
╔═══════════════════════════════════════════════════════════════════════════════════════
║ {
║   "eventType": "VISIT",
║   "oaid": "xxxxxxx-xxxxx-xxxxxx",
║   "deviceId": "c2369951-098c-34ec-831c-858fe348df1d",
║   ...
║ }
╚═══════════════════════════════════════════════════════════════════════════════════════
```
:::info
在 Android 10 版本中，非系统应用无法获取 IMEI。加上以前 Android 版本已经对 MAC 地址， AndroidID 的获取做了限制， 在 Android10 中缺少一种唯一标记设备的标识符。 在海外， Google 推荐使用 Google 的广告 ID 作为广告的唯一识别符，在国内移动安全联盟MSA 联合各大手机制造商推出了 OAID 的概念， 作为唯一广告标识符。 目前腾讯， 头条， 网易广告SDK已经要求使用 OAID， OAID 的准确性和覆盖率均满足广告场景的使用需求，Android SDK 提供采集 OAID 的能力。
:::

### 9. **setExcludeEvent** 
事件过滤。默认情况下，事件不会进行过滤。但若不想采集某些事件可以在此设置。事件类型可以参考 [FilterEventParams](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/EventExcludeFilter.java)
```java
// 初始化无埋点SDK时，调用方法设置过滤事件
GrowingAutotracker.startWithConfiguration(this,
    new CdpAutotrackConfiguration("accountId", "urlScheme")
        ...
       .setExcludeEvent(EventExcludeFilter.EVENT_MASK_TRIGGER))
);
```
```java
// 若想取消过滤，可以调用
ConfigurationProvider.core().setExcludeEvent(EventExcludeFilter.NONE)
```

### 10. **setIgnoreField** 
事件属性过滤。事件属性指上报事件中携带的属性参数。可过滤事件属性可以参考 [FieldIgnoreFilter](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/FieldIgnoreFilter.java)
初始化时可以设置对应的事件过滤
```java
// 初始化无埋点SDK时，调用方法设置过滤字段
GrowingAutotracker.startWithConfiguration(this,
    new CdpAutotrackConfiguration("accountId", "urlScheme")
        ...
       .setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_ALL)
);
```
```java
// 若想取消过滤，可以调用
ConfigurationProvider.core().setIgnoreField(FieldIgnoreFilter.NONE)
```

### 11. **setIdMappingEnabled** 
是否支持多用户身份上报, 默认不支持。
是否支持多用户身份上报, 与 API 接口`setLoginUserId(String userId, String userKey)`对应, 开启时, userKey会在每次上报数据时携带, 关闭时, 接口与`setLoginUserId(String userId)`作用相同


### 12. **setImpressionScale** 
曝光比例。与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为 0 则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。

## 常用可选模块配置

可以用来加载自定义/预定义的模块, 与 API 接口registerComponent功能相同, 用于在 SDK 初始化时需要优先加载的模块注册(如网络模块、OAID模块、加密模块等)
### 1. **内嵌H5页面数据采集配置**
APP 内嵌H5页面如果也需要进行数据采集，H5页面需要集成 Web JS SDK

如果集成的是[**无埋点SDK**](/docs/android/base/Getting%20Started#集成无埋点sdk)， 不需要做设置，SDK 会自动注入桥接代码，实现数据打通。

如果集成的是[**埋点SDK**](/docs/android/base/Getting%20Started#集成埋点sdk)，则项目需要添加 hybrid 模块依赖(和 SDK 依赖同级)
:::info
**使用时注意模块版本需要与采集SDK版本保持一致**
:::
```groovy
...
implementation "com.growingio.android:hybrid:3.3.1"
```

SDK初始化时需要注册 hybrid 模块：
```java
// 在初始化SDK时，可以提前注册hybrid模块
// hybrid模块需要依赖对应 hybrid模块包 hybrid
GrowingAutotracker.startWithConfiguration(this, 
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                ...
                .setPreloadComponent(new HybridLibraryGioModule()));  
```
需要在 WebView 初始化之后调用桥接代码，实现访问用户数据打通:
```java
GrowingTracker.get().bridgeWebView(webview) 
```

### 2. **采集`OAID`作为设备信息**
:::info
采集 SDK 版本 >=3.3.0

**使用时注意模块版本需要与采集SDK版本保持一致**
:::

项目需要添加[国内移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120)下的sdk包，和 OAID模块依赖(和 SDK 依赖同级)：

```groovy
...
implementation "com.growingio.android:oaid:3.3.1"
```
SDK初始化时注册Oaid模块：
```java
// 初始化SDK时，可以提前注册 oaid 模块
GrowingTracker.startWithConfiguration(this,
        new CdpTrackConfiguration("accountId", "urlScheme")
        ...
        .setPreloadComponent(new OaidLibraryGioModule()));
);
```
配置完成后之后会在 `Visit` 事件中添加 `oaid` 字段：

```json
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "eventType": "VISIT",
    ║   "oaid": "xxxxxxx-xxxxx-xxxxxx",
    ║   "deviceId": "c2369951-098c-34ec-831c-858fe348df1d",
    ║   ...
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```

:::info
在 Android 10 版本中，非系统应用无法获取 IMEI。加上以前 Android 版本已经对 MAC 地址， AndroidID 的获取做了限制， 在 Android10 中缺少一种唯一标记设备的标识符。 在海外， Google 推荐使用 Google 的广告 ID 作为广告的唯一识别符，在国内[移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120) 联合各大手机制造商推出了 OAID 的概念， 作为唯一广告标识符。
目前腾讯， 头条， 网易广告SDK已经要求使用 OAID， OAID 的准确性和覆盖率均满足广告场景的使用需求，Android SDK 提供采集 OAID 的能力。
:::

### 3. **SDK数据加密传输**
:::info
采集 SDK 版本 >=3.3.0

**使用时注意模块版本需要与采集SDK版本保持一致**
:::
项目需要添加加密模块依赖(和 SDK 依赖同级)
```groovy
...
implementation "com.growingio.android:encoder:3.3.1"
```

SDK初始化时注册加密模块：
```java
// 初始化无埋点SDK时, 调用方法注册加密模块
// 加密模块需要依赖对应 加密模块包encoder
GrowingAutotracker.startWithConfiguration(this, 
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                ...
                .setPreloadComponent(new EncoderLibraryGioModule()));
```


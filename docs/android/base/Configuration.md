---
sidebar_position: 2
title: 初始化配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置`Configuration`,配置相关说明如下表：
### 配置表格

| Config                       | 参数类型 | 是否必填 | 默认值 | 说明 | 其它 |
| :-------------------------   | :------   | :----:  |:------  |:------| ----- |
| `projectId`                  | `String`  | 是      | `null`   | 项目ID，每个应用对应唯一值 | - |
| `urlScheme`                  | `String`  | 是      | `null`   | 应用的URLScheme，唯一值 | - |
| `setDataSourceId`            | `String`  | 是      | `null`   | 应用的DataSourceId，唯一值 | - |
| `setDataCollectionServerHost`| `String`  | 是      | `null`   | 服务端部署后的 ServerHost | - |
| `setChannel`                 | `String`  | 否      | `null`   | 应用的分发渠道 | - |
| `setDebugEnabled`            | `boolean` | 否      | `false`  | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - |
| `setCellularDataLimit`       | `int`     | 否      | `10`     | 每天发送数据的流量限制，单位MB | - |
| `setDataUploadInterval`      | `int`     | 否      | `15`     | 数据发送的间隔，单位秒 | - |
| `setSessionInterval`         | `int`     | 否      | `30`     | 每次访问会话的最大时长，单位秒 | - |
| `setDataCollectionEnabled`   | `boolean` | 否      | `true`   | 是否采集数据 | - |
| `setOaidEnabled`             | `boolean` | 否      | `false`  | 是否采集Android OAID | - |
| `setExcludeEvent`            | `int`     | 否      | `0`      | 设置事件过滤 | - |
| `setIgnoreField`             | `int`     | 否      | `0`      | 设置事件属性过滤 | - |
| `setImpressionScale`         | `float`   | 否      | `0`      | 元素曝光事件中的比例因子,范围 [0-1] | 无埋点独有 |

### 详细说明
1. **projectId** **urlScheme** **setDataSourceId** **setDataCollectionServerHost**   
这四个参数为 CDP 用户必须要设置的参数，若不清楚具体数值请询问相关服务端对接的开发同事。
2. **channel** 对应应用的分发渠道字段，若设置了值则会在每个事件上报中含有渠道信息。  
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
3. **setDebugEnabled** 默认不开启，开启后会输出如上所示的SDK Log 日志。  
建议做法设为 `setDebugEnabled(BuildConfig.DEBUG)` 这样既能保证Debug时能够打印日志，正式发布时也能关闭日志；

4. **setCellularDataLimit** 为每日在4G环境下的流量限制，默认为10M。WIFI环境下则不计流量。

5. **setDataUploadInterval** 上报间隔  
GrowingIO SDK 会先将事件存入数据库中，然后以每隔默认时间15秒的情况下向服务器发送事件包（最大50条事件）。

6. **setSessionInterval** 设置会话最大时长。  
会话时长即指一个用户在应用上的使用时间，默认以30秒作为一个间隔。其他情况下也会重新生成一个新的会话，如设置用户ID等核心信息，重新打开数据收集等。

7. **setDataCollectionEnabled** 数据收集  
当数据收集关闭时，SDK将不会再获取设备信息，也不会产生事件和上报事件。

8. **setOaidEnabled** 是否采集 `oaid`作为设备信息  
若 `setOaidEnabled(true)`且已经集成了[国内移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120)下的jar包，则会在 `Visit` 事件中添加 `oaid` 字段：

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

9. **setExcludeEvent** 事件过滤  
默认情况下，事件不会进行过滤。但若不想采集某些事件可以在此设置。事件类型可以参考 [FilterEventParams](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/EventExcludeFilter.java)

若想取消过滤，可以调用
```java
ConfigurationProvider.core().setExcludeEvent(EventExcludeFilter.EVENT_MASK_NONE)
```


10. **setIgnoreField** 事件属性过滤  
事件属性指上报事件中携带的属性参数。可过滤事件属性可以参考 [FieldIgnoreFilter](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/FieldIgnoreFilter.java)

若想取消过滤，可以调用
```java
ConfigurationProvider.core().setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_NONE)
```

11. **setImpressionScale** 曝光比例  
与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为0则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。

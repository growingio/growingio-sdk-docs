---
sidebar_position: 2
title: 初始化配置
---
--------------

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置`Configuration`,配置相关说明如下表：

## 配置表格

| Config                                      | 参数类型           | 是否必填 | 默认值  | 说明                                                    | 其它       | 版本                                      |
| :------------------------------------------ | :----------------- | :------: | :------ | :------------------------------------------------------ | ---------- | ----------------------------------------- |
| `accountId`                                 | `String`           |    是    | `null`  | 项目ID，每个应用对应唯一值                              | -          |                                           |
| `urlScheme`                                 | `String`           |    是    | `null`  | 应用的URLScheme，唯一值                                 | -          |                                           |
| `setDataSourceId`                           | `String`           |    是    | `null`  | 应用的DataSourceId，唯一值                              | -          |                                           |
| `setDataCollectionServerHost`               | `String`           |    是    | `null`  | 服务端部署后的 ServerHost                               | -          |                                           |
| `setChannel`                                | `String`           |    否    | `null`  | 应用的分发渠道                                          | -          |                                           |
| `setDebugEnabled`                           | `boolean`          |    否    | `false` | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | -          |                                           |
| `setCellularDataLimit`                      | `int`              |    否    | `10`    | 每天发送数据的流量限制，单位MB                          | -          |                                           |
| `setDataUploadInterval`                     | `int`              |    否    | `15`    | 数据发送的间隔，单位秒                                  | -          |                                           |
| `setSessionInterval`                        | `int`              |    否    | `30`    | 会话后台留存时长，单位秒                                | -          |                                           |
| `setDataCollectionEnabled`                  | `boolean`          |    否    | `true`  | 是否采集数据                                            | -          |                                           |
| <font color='red'>~~setOaidEnabled~~</font> | `boolean`          |    否    | `false` | 是否采集Android OAID                                    | -          | <font color='red'>< 3.3.0</font>          |
| `setExcludeEvent`                           | `int`              |    否    | `0`     | 设置事件过滤                                            | -          |                                           |
| `setIgnoreField`                            | `int`              |    否    | `0`     | 设置事件属性过滤                                        | -          |                                           |
| `setIdMappingEnabled`                       | `boolean`          |    否    | `false` | 是否开启多用户身份上报                                  | -          | <font color='red'>>= 3.3.0</font>         |
| `setImpressionScale`                        | `float`            |    否    | `0`     | 元素曝光事件中的比例因子,范围 [0-1]                     | 无埋点独有 |                                           |
| `setRequireAppProcessesEnabled`             | `boolean`          |    否    | `true`  | SDK 是否能获取应用多进程ID                              | -          | <font color='red'>>= 3.3.4</font>         |
| `setPreloadComponent`                       | `LibraryGioModule` |    否    | `null`  | 注册自定义/预定义模块(如加密模块、OAID模块)             | -          | <font color='red'>>= 3.3.0,<=3.3.3</font> |
| `addPreloadComponent`                       | `LibraryGioModule` |    否    | `null`  | 注册自定义/预定义模块(如加密模块、OAID模块)             | -          | <font color='red'>>= 3.3.4</font>         |
| `addConfiguration`                          | `Configurable`     |    否    | `null`  | 注册自定义/预定义模块的配置文件                         | -          | <font color='red'>>= 3.3.4</font>         |

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

### 8. **setExcludeEvent**

事件过滤。默认情况下，事件不会进行过滤。但若不想采集某些事件可以在此设置。事件类型可以参考 [FilterEventParams](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/EventExcludeFilter.java)

<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点', value: 'autotrack'},
    {label: '埋点', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
// 初始化无埋点SDK时，调用方法设置过滤事件
GrowingAutotracker.startWithConfiguration(this,
    new CdpAutotrackConfiguration("accountId", "urlScheme")
        ...
       .setExcludeEvent(EventExcludeFilter.EVENT_MASK_TRIGGER))
);
```

</TabItem>
<TabItem value="track">

```java
// 初始化无埋点SDK时，调用方法设置过滤事件
GrowingTracker.startWithConfiguration(this,
    new CdpTrackConfiguration("accountId", "urlScheme")
        ...
       .setExcludeEvent(EventExcludeFilter.EVENT_MASK_TRIGGER))
);
```

</TabItem>
</Tabs>

若想取消过滤，可以调用

```java
// 若想取消过滤，可以调用
ConfigurationProvider.core().setExcludeEvent(EventExcludeFilter.NONE)
```

### 9. **setIgnoreField**

事件属性过滤。事件属性指上报事件中携带的属性参数。可过滤事件属性可以参考 [FieldIgnoreFilter](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-tracker-core/src/main/java/com/growingio/android/sdk/track/events/helper/FieldIgnoreFilter.java)
初始化时可以设置对应的事件过滤

<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点', value: 'autotrack'},
    {label: '埋点', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
// 初始化无埋点SDK时，调用方法设置过滤字段
GrowingAutotracker.startWithConfiguration(this,
    new CdpAutotrackConfiguration("accountId", "urlScheme")
        ...
       .setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_ALL)
);
```

</TabItem>
<TabItem value="track">

```java
// 初始化无埋点SDK时，调用方法设置过滤字段
GrowingTracker.startWithConfiguration(this,
    new CdpTrackConfiguration("accountId", "urlScheme")
        ...
       .setIgnoreField(FieldIgnoreFilter.FIELD_IGNORE_ALL)
);
```

</TabItem>
</Tabs>

```java
// 若想取消过滤，可以调用
ConfigurationProvider.core().setIgnoreField(FieldIgnoreFilter.NONE)
```

### 10. **setIdMappingEnabled**

是否支持多用户身份上报, 默认不支持。
是否支持多用户身份上报, 与 API 接口`setLoginUserId(String userId, String userKey)`对应, 开启时, userKey会在每次上报数据时携带, 关闭时, 接口与`setLoginUserId(String userId)`作用相同

### 11. **setImpressionScale**

曝光比例。与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为 0 则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。

### 12 **addPreloadComponent**
注册功能模块，为 Growingio SDK 添加更多的额外功能。
模块列表请参考 [功能模块一览](/docs/android/modules)



---
sidebar_position: 2
title: 初始化配置
---
--------------

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置`Configuration`,配置相关说明如下表：

## 配置表格

| Config                         |   参数类型  | 是否必填 | 默认值  | 说明                                       | 其它       | 版本      |
| :----------------------------- | :--------- | :----:  | :----- | :-----------------------------------------| --------- | ----------|
| `accountId`                    |   `String` |    是   | `null` | 项目ID，每个应用对应唯一值                    | -         |           |
| `urlScheme`                    |   `String` |    是   | `null` | 应用的URLScheme，唯一值                      | -         |           |
| `setDataSourceId`              | `String`   |    是   | `null` | 应用的DataSourceId，唯一值                   | -         |           |
| `setDataCollectionServerHost`  | `String`   |    是    | `null`  | 服务端部署后的 ServerHost                  | -         |           |
| `setChannel`                   | `String`   |    否    | `null`  | 应用的分发渠道                             | -         |           |
| `setDebugEnabled`              | `boolean`  |    否    | `false` | 调试模式，会打印 Log 和错误，在线上环境请关闭  | -         |           |
| `setCellularDataLimit`         | `int`      |    否    | `10`    | 每天发送数据的流量限制，单位MB               | -         |           |
| `setDataUploadInterval`        | `int`      |    否    | `15`    | 数据发送的间隔，单位秒                      | -         |           |
| `setSessionInterval`           | `int`      |    否    | `30`    | 会话后台留存时长，单位秒                    | -         |           |
| `setImeiEnabled`               | `boolean`  |    否    | `false` | 是否采集Imei信息，默认不采集                | -         |  <font color='red'>>= 3.5.0</font>  |
| `setDataCollectionEnabled`     | `boolean`  |    否    | `true`  | 是否采集数据                              | -         |          |
| `setEventFilterInterceptor`    | `EventFilterInterceptor` |  否  | `DefaultEventFilterInterceptor` | 用于事件过滤,替换废弃的事件过滤和属性过滤 | - |  <font color='red'>>= 3.4.3</font>  |
| `setExcludeEvent`              | `int`      |    否    | `0`     | 设置事件过滤，已被废弃                      |  -     |   <font color='red'>3.5.0 删除</font>       |
| `setIgnoreField`               | `int`      |    否    | `0`     | 设置事件属性过滤，已被废弃                   | -          |  <font color='red'>3.5.0 删除</font>        |
| `setIdMappingEnabled`          | `boolean`  |    否    | `false` | 是否开启多用户身份上报                      | -         | <font color='red'>>= 3.3.0</font>   |
| `setImpressionScale`           | `float`    |    否    | `0`     | 元素曝光事件中的比例因子,范围 [0-1]          | 无埋点独有 |           |
| `setRequireAppProcessesEnabled` | `boolean` |    否    | `true`  | SDK 是否能获取应用多进程ID                  | -         | <font color='red'>>= 3.3.4</font>   |
| `addPreloadComponent`          | `LibraryGioModule` |    否    | `null`  | 注册自定义/预定义模块(如加密模块、OAID模块)       | -         | <font color='red'>>= 3.3.4</font>  |
| `addPreloadComponent`          | `LibraryGioModule`,`Configurable` |    否  | `null` | 注册自定义/预定义模块及其配置文件 | - | <font color='red'>>= 3.4.3</font>  |

### 1. SDK必需参数

**accountId，** **urlScheme，** **setDataSourceId，** **setDataCollectionServerHost**
这四个参数为 CDP 用户必须要设置的参数，若不清楚具体数值请询问相关服务端对接的开发同事。

### 2. **setChannel**

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

### 8. **setImeiEnabled**

是否采集Imei信息，默认不采集，且Android 10及以上已不再支持 Imei 的获取。

### 9. **setEventFilterInterceptor**

事件过滤，该接口需要用户提供一个拦截器用于事件拦截的自定义化。

```java
// 声明一个事件过滤器，继承 `DefaultEventFilterInterceptor` 或 `EventFilterInterceptor`
class CustomEventFilterInterceptor implements EventFilterInterceptor {

    // 根据事件类型来过滤事件，返回 false 表示拦截，返回 true 表示不过滤
    // 如下例表示拦截事件类型为 “PAGE” 的事件
    @Override
    public boolean filterEventType(String eventType) {
        if (FilterEventType.PAGE.equals(eventType)) return false;
        return true;
    }

    // 过滤事件基础属性，属性设置 false 表示拦截，设置 true 表示不过滤
    // 如下例表示事件中不再包含屏幕宽高的属性。
    @Override
    public Map<String, Boolean> filterEventField(String type, Map<String, Boolean> fieldArea) {
        fieldArea.put(BaseField.SCREEN_HEIGHT, false);
        fieldArea.put(BaseField.SCREEN_WIDTH, false);
        return fieldArea;
    }

    // 针对无埋点的页面事件的路径进行过滤。
    // 如下例表示若页面事件中的路径包含 “TestActivity” 则过滤。
    @Override
    public boolean filterEventPath(String path) {
        return !path.contains("TestActivity");
    }

    // 针对自定义事件的事件名称进行过滤。
    // 如下例表示若自定义事件中名称为 "test" 则过滤。
    @Override
    public boolean filterEventName(String eventName) {
        return !"test".equals(eventName);
    }
}
```
之后再调用该接口设置拦截器

```java
GrowingTracker.startWithConfiguration(this,
    new CdpTrackConfiguration("accountId", "urlScheme")
        ...
       .setEventFilterInterceptor(new CustomEventFilterInterceptor())
);
```



### 10. **setIdMappingEnabled**

是否支持多用户身份上报, 默认不支持。
是否支持多用户身份上报, 与 API 接口`setLoginUserId(String userId, String userKey)`对应, 开启时, userKey会在每次上报数据时携带, 关闭时, 接口与`setLoginUserId(String userId)`作用相同

### 11. **setImpressionScale**

曝光比例。与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为 0 则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。

### 12 **addPreloadComponent**
注册功能模块，为 Growingio SDK 添加更多的额外功能。

```java
// 初始化SDK时，可以注册对应模块
GrowingAutotracker.startWithConfiguration(this,
        new CdpAutotrackConfiguration("accountId", "urlScheme")
        //...
        .addPreloadComponent(<模块对象>, <模块配置>)
        // 或者
        .addPreloadComponent(<模块对象>)

);
```
模块列表请参考 [功能模块一览](/docs/android/modules)



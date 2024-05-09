---
sidebar_position: 2
title: 初始化配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置 `Configuration`, 配置相关说明如下表：

## 配置表格

### 通用配置

| 配置方法                                     | 参数类型        | 是否必填 | 默认值    | 说明                                       | 版本     |
| :------------------------------------------ | :------------  | :----: | :------- | :---------------------------------------- | ---------|
| **accountId** [#](#1-sdk必需参数)             | _String_      |  **是** |**`null`**| 项目ID，每个应用对应唯一值                   |  |
| **urlScheme** [#](#1-sdk必需参数)             | _String_      |  **是** |**`null`**| 应用的URLScheme，唯一值                    |  |
| **setDataSourceId** [#](#1-sdk必需参数)       | _String_      |  **是** |**`null`**| 应用的DataSourceId，唯一值                 |  |
| setDataCollectionServerHost [#](#1-sdk必需参数) | _String_    |    否   |**`新saas地址`**| 收数地址                             |  |
| setChannel [#](#2-setchannel)                | _String_      |    否   | `null`  | 设置应用的分发渠道                          |  |
| setDebugEnabled [#](#3-setdebugenabled)      | _boolean_     |    否   | `false` | 调试模式，会打印 Log 和错误，在线上环境请关闭   |  |
| setCellularDataLimit [#](#4-setcellulardatalimit) | _int_    |    否   | `10`    | 每天发送数据的流量限制，单位MB                |  |
| setDataUploadInterval [#](#5-setdatauploadinterval) | _int_  |    否   | `15`    | 数据发送的间隔，单位秒                       |  |
| setSessionInterval [#](#6-setsessioninterval)| _int_         |    否   | `30`    | 会话后台留存时长，单位秒                     |  |
| setImeiEnabled [#](#8-setimeienabled)        | _boolean_     |    否   | `false` | 是否采集Imei信息，默认不采集                 |  |
| setDataCollectionEnabled [#](#7-setdatacollectionenabled)| _boolean_ | 否 |`true`| 是否采集数据                               |  |
| setEventFilterInterceptor [#](#8-seteventfilterinterceptor)| _EventFilterInterceptor_ |否|`不拦截`| 用于事件过滤,过滤事件类型和事件属性 |  |
| setIdMappingEnabled [#](#12-setidmappingenabled) | _boolean_ |    否   | `false` | 是否开启多用户身份上报                       |  |
| setRequireAppProcessesEnabled [#](#11-setrequireappprocessesenabled) | _boolean_ | 否 | `false`  | SDK 是否能获取应用多进程ID   | |
| setAndroidIdEnabled [#](#10-setandroididenabled) | _boolean_ |    否   | `false` | SDK 是否能获取 AndroidId                   | |
| addPreloadComponent [#](#13-addpreloadcomponent) | _LibraryGioModule_,<br/>[_Configurable_] |否| `null` | 注册自定义/预定义模块及其配置文件 | |
| setRequestTimeout [#](#14-setrequesttimeout) | _int_,_TimeUnit_ |否| `30s` | 网络数据发送超时设置 | |
| setDataValidityPeriod [#](#15-setdatavalidityperiod) | _int_    |    否    | `7` | 未发送的数据保留在数据库的时间，单位：天数 | 4.3.0 |

### 无埋点功能配置

| 配置方法                                       |   参数类型     | 是否必填 | 默认值  | 说明                               | 版本     |
| :------------------------------------------- | :------------- | :----:  | :------ | :-------------------------------- | ------- |
| setImpressionScale [#](#1-setimpressionscale) |    _float_    |   否    | `0`     | 元素曝光事件中的比例因子,范围 [0-1]    |         |
| setWebViewBridgeEnabled [#](#2-setwebviewbridgeenabled)| _boolean_|  否 | `true`   | 是否全量采集 hybrid 数据            |         |
| enableFragmentTag [#](#3-enablefragmenttag) |    _boolean_    |   否    | `false`     | 是否将Fragment的tag作为无埋点路径的记号 |    |
| setPageRuleXml [#](#4-setpagerulexml)       |    _int_        |   否        | `xml id`     | 用于自动采集无埋点页面 |  4.2.0  |
| setAutotrack [#](#5-setautotrack)           |    _boolean_    |   否        | `true`     | 用于控制是否打开无埋点功能 |  4.3.0  |

## 通用配置说明

### 1. SDK必需参数

**accountId，** **urlScheme，** **setDataSourceId，**
这三个参数为用户必须要设置的参数，若不清楚具体数值请询问相关服务端对接的开发同事。

**setDataCollectionServerHost** 默认域名为 `napi.growingio.com`，若是OP客户，需要设置自己的ServerHost。

### 2. setChannel

对应应用的分发渠道字段，若设置了值则会在每个事件上报中含有渠道信息。
比如在初始化中设置了`.setChannel("Google")`,则会在上报信息中出现 `appChannel` 字段：

```json
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "platform": "Android",
    ║   "appChannel": "Google",
    ║   "screenHeight": 1920,
    ║   "screenWidth": 1080,
    ║   ...
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```

### 3. setDebugEnabled

默认不开启，开启后会输出 SDK Log 日志。
建议做法设为 `setDebugEnabled(BuildConfig.DEBUG)` 这样既能保证Debug时能够打印日志，正式发布时也能关闭日志；

### 4. setCellularDataLimit

为每日在4G环境下的流量限制，默认为10M。WIFI环境下则不计流量。

### 5. setDataUploadInterval

上报间隔。GrowingIO SDK 会先将事件存入数据库中，然后以每隔默认时间15秒的情况下向服务器发送事件包（最大50条事件）。

### 6. setSessionInterval

设置会话后台留存时长。指当前会话在应用进入后台后的最大留存时间，默认为30秒。另外，其他情况下也会重新生成一个新的会话，如设置用户ID等核心信息，重新打开数据收集等。

### 7. setDataCollectionEnabled

数据收集。当数据收集关闭时，SDK将不会再获取设备信息，也不会产生事件和上报事件。

### 8. setEventFilterInterceptor

事件过滤，该接口需要用户提供一个拦截器用于事件拦截的自定义化。**使用事件拦截器时请注意使用，不要过滤掉重要信息，防止数据采集信息丢失或者少采。**

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
GrowingAutotracker.startWithConfiguration(this,
    new AutotrackConfiguration("accountId", "urlScheme")
        ...
       .setEventFilterInterceptor(new CustomEventFilterInterceptor())
);
```

### 9. setImeiEnabled

是否采集Imei信息，默认不采集，且Android 10及以上已不再支持 Imei 的获取。

### 10. setAndroidIdEnabled

是否获取AndroidId信息。默认不获取，**建议打开**，可以帮助更准确的匹配广告信息。

### 11. setRequireAppProcessesEnabled

SDK 是否能获取应用多进程ID。默认不获取，在应用有多进程的场景下**建议打开**。

### 12. setIdMappingEnabled

是否支持多用户身份上报, 默认不支持。
是否支持多用户身份上报, 与 API 接口`setLoginUserId(String userId, String userKey)`对应，需要上报 userkey 时开启； 开启时，userKey会在每次上报数据时携带；关闭时，userKey不上报。

### 13. addPreloadComponent

注册功能模块，为 Growingio SDK 添加更多的额外功能。

```java
// 初始化SDK时，可以注册对应模块
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        //...
        .addPreloadComponent(<模块对象>, <模块配置>)
        // 或者
        .addPreloadComponent(<模块对象>)

);
```

模块列表请参考 [功能模块一览](/docs/android/modules)

### 14. setRequestTimeout

设置请求超时时长，默认30s。

```java
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        // 设置网络请求超时
        .setRequestTimeout(30,TimeUnit.SECONDS)
        // 或者在使用okHttp请求库时，可以详细设置请求超时时间
        .setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)

);
```

> 当使用默认 Okhttp 请求库时，可以使用 `setRequestDetailTimeout(10, 10, 10, TimeUnit.SECONDS)` 接口，其值分别对应 Okhttp 网络库的请求超时设置 `connectTimeout`, `readTimeout`, `writeTimeout`

### 15. setDataValidityPeriod

设置未发送的数据保留在数据库的时间，单位：天数，默认7天。

```java
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        // 设置未发送事件缓存时长
        .setDataValidityPeriod(7)

);
```

## 无埋点配置说明

### 1. setImpressionScale

曝光比例。与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为 0 则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。

### 2. setWebViewBridgeEnabled

是否全量采集 hybrid 数据（默认为 true）

无埋点默认会采集对应 webview 的 hybrid 事件，设置为 false，可以关闭采集 hybrid 数据。<br/>
如果需要设置采集单个 webview 的 hybrid 事件，可以通过运行时 API 接口`bridgeWebView(View webView)`开启采集。

### 3. enableFragmentTag

在使用一些库时会导致Fragment的Tag不可预计，比如在高版本 Navigation 库，Navigation库会对所有的导航 Fragment 赋予一个 UUID 生成的随机TAG。为了保证无埋点路径的准确，取消无埋点路径xcontent中对tag的支持，现在默认取 Fragment 的id为xcontent路径。
若客户需要tag支持，可打开 enableFragmentTag(true)。

### 4. setPageRuleXml

在无埋点SDK中，该方法通过一个 xml 配置文件来自动采集无埋点页面。在页面配置文件中有两种规则，一种是指定页面的完整路径和页面名称，另一种是正则匹配页面路径，页面名称默认取页面的类名，如"com.growingio.demo.MainActicity"文件，取 "MainActivity" 为页面名称。

页面配置xml固定格式如下所示：

```xml
<growingio-setting xmlns:android="http://schemas.android.com/apk/res/android">
    <page-rule>
        <page-list>
            <page
                name="Main"
                path="com.growingio.demo.MainActivity" />
            <page
                name="Dashboard"
                path="com.growingio.demo.ui.dashboard.DashboardFragment" />
        </page-list>

        <page-match>
            <page regex="com.growingio.demo.ui.*Fragment" />
        </page-match>
    </page-rule>
</growingio-setting>
```

* page-list 节点下的page为指定页面配置，name 表示为页面的名称，path表示为类的路径，在java中对应方法为 `getClass().getName()`;
* page-match 节点下的page为正则匹配。regex为正则匹配规则，在java中可以通过为 `String.matches(regex)` 来验证。

> **在无埋点页面的规则中，优先级为 _autotrackPage_接口 > page-list > page-match.**

页面配置文件需要放在Android资源目录 **res->xml** 目录中，如 `growingio_page_setting.xml`, 那么配置化代码将如下所示：

```kotlin
val sConfiguration = AutotrackConfiguration("Your AccountId", "Your URLScheme")
    .setDataCollectionServerHost("Your ServerHost")
    .setDataSourceId("Your DataSourceId")
    .setPageRuleXml(R.xml.growingio_page_setting)
GrowingAutotracker.startWithConfiguration(this, sConfiguration)
```

### 5. setAutotrack
若是不需要无埋点相关功能，客户可以通过在初始化时关闭无埋点来实现。请注意，关闭无埋点功能后，无埋点事件包括页面事件，自动点击事件，Imp曝光事件不再上报以及圈选功能都将一起关闭。

```java
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        // 关闭无埋点功能
        .setAutotrack(false)
);
```
---
sidebar_position: 1
title: 自定义 SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SDK 可以通过集成不同的模块实现功能的自定义，在 GrowingIO 的 SDK 中，已经有多个模块功能已经从代码中分离出来，后续将会独立出更多的模块。

** 已有模块功能一览 **

| 名称     | 说明 | 输入数据 | 输出数据 | 依赖 |
| :------- | :------:   | ---:|  ---:| :---|
<<<<<<< HEAD
| 网络库-okhttp | 使用okhttp请求网络，sdk默认网络模块 | `EventUrl` | `EventResponse` | `com.growingio.android:okhttp3:3.4.0` |
| 网络库-urlconnnection | 使用原生`urlconnnection`请求网络 | `EventUrl` | `EventResponse` | `com.growingio.android:urlconnection:3.4.0` |
| 网络库-volley | 使用volley请求网络 | `EventUrl` | `EventResponse` | `com.growingio.android:volley:3.4.0` |
| 数据加密-encoder | 使用 snappy 加密上报的事件数据,需要集成生效 | `EventEncoder` | `EventEncoder` | `com.growingio.android:encoder:3.4.0` |
| 设备标识符-oaid | 提供采集 OAID 的能力,需要集成生效 | `OaidHelper` | `String` | `com.growingio.android:oaid:3.4.0` |
| 数据异常上报工具-crash | sdk 异常崩溃上报纸 sentry，需要集成生效 | 无 | 无 | `com.growingio.android:crash:3.4.0` |
| 无埋点圈选-circler | 基于无埋点的圈选插件，默认集成在无埋点SDK中 | `Circler` | `WebService` |`com.growingio.android:circler:3.4.0` |
| 数据调试-debugger | 数据调试Mobile Debugger，默认集成在埋点SDK中 | `Debugger` | `WebService` | `com.growingio.android:debugger:3.4.0` |
| 混合开发数据收集-hybrid | 混合开发模式，默认集成在埋点SDK中，需要手动注入（无埋点中自动注入） | 1. `HybridBridge` <br /> 2. `HybridDom` | 1. `Boolean` <br /> 2.`HybridJson` | `com.growingio.android:hybird:3.4.0` |
| 数据库-database | event数据库为sqlite，默认集成在埋点SDK中 | `EventDatabase` | `EventDbResult` | `com.growingio.android:database:3.4.0` |
| 数据传输格式-json | 使用json格式保存和上传事件数据，sdk 默认 | `EventFormatData` | `EventByteArray` | `com.growingio.android:json:3.4.0` |
| 数据传输格式-protobuf | 使用protobuf格式保存和上传事件数据，需要集成生效 | `EventFormatData` | `EventByteArray` | `com.growingio.android:protobuf:3.4.0` |
| 第三方数据SDK适配-Firebase | 适配Firebase Sdk 数据并转发至 SDK | 无 | 无 | `com.growingio.android:analytics-fa:3.4.0` |
| 第三方数据SDK适配-GoogleAnalytics | 适配 GoogleAnalytics 数据并转发至 SDK | 无 | 无 | `com.growingio.android:analytics-ga:3.4.0` |
=======
| 网络库-okhttp | 使用okhttp请求网络，sdk默认网络模块 | `EventUrl` | `EventResponse` | `com.growingio.android:okhttp3:3.3.6` |
| 网络库-urlconnnection | 使用原生`urlconnnection`请求网络 | `EventUrl` | `EventResponse` | `com.growingio.android:urlconnection:3.3.6` |
| 网络库-volley | 使用volley请求网络 | `EventUrl` | `EventResponse` | `com.growingio.android:volley:3.3.6` |
| 数据加密-encoder | 使用 snappy 加密上报的事件数据,需要集成生效 | `EventEncoder` | `EventEncoder` | `com.growingio.android:encoder:3.3.6` |
| 设备标识符-oaid | 提供采集 OAID 的能力,需要集成生效 | `OaidHelper` | `String` | `com.growingio.android:oaid:3.3.6` |
| 数据异常上报工具-crash | sdk 异常崩溃上报纸 sentry，需要集成生效 | 无 | 无 | `com.growingio.android:crash:3.3.6` |
| 无埋点圈选-circler | 基于无埋点的圈选插件，默认集成在无埋点SDK中 | `Circler` | `WebService` |`com.growingio.android:circler:3.3.6` |
| 数据调试-debugger | 数据调试Mobile Debugger，默认集成在埋点SDK中 | `Debugger` | `WebService` | `com.growingio.android:debugger:3.3.6` |
| 混合开发数据收集-hybrid | 混合开发模式，默认集成在埋点SDK中，需要手动注入（无埋点中自动注入） | 1. `HybridBridge` <br /> 2. `HybridDom` | 1. `Boolean` <br /> 2.`HybridJson` | `com.growingio.android:hybird:3.3.6` |
| 数据库-database | event数据库为sqplite，默认集成在埋点SDK中 | `EventDatabase` | `EventDbResult` | `com.growingio.android:database:3.3.6` |
| 数据传输格式-json | 使用json格式保存和上传事件数据，sdk 默认 | `EventFormatData` | `EventByteArray` | `com.growingio.android:json:3.3.6` |
| 数据传输格式-protobuf | 使用protobuf格式保存和上传事件数据，需要集成生效 | `EventFormatData` | `EventByteArray` | `com.growingio.android:protobuf:3.3.6` |
| 第三方数据SDK适配-Firebase | 适配Firebase Sdk 数据并转发至 SDK | 无 | 无 | `com.growingio.android:analytics:3.4.0` |
>>>>>>> a09fb75a79bf5081ec7cb65072e8a8187158ff5b
| 更多开发中... |


** 核心库 **

| 名称     | 说明 | 依赖 |
| :------- | :------:  | :---|
| 埋点 Library | 埋点核心库，包含最基本的埋点逻辑 |  `com.growingio.android:tracker-core:3.4.0` |
| 无埋点 Library | 无埋点核心库，依赖于埋点核心库，包含无埋点的注入逻辑 |  `com.growingio.android:autotracker-core:3.4.0` |
| 模块注解库 | 注解声明，通过注解可以自动生成 SDK 的初始化类来注册所有的模块和聚合模块内的配置类。| `com.growingio.android:annotation:3.4.0` |
| 注解解析器 | 与上面注解配合使用 | `com.growingio.android:compiler:3.4.0` |

具体版本请到 [新功能介绍](/docs) 查阅

## 如何自定义SDK

这里以新建一个项目并集成一个自定义 GrowingIO SDK 作为一个例子来说明，要求是SDK具备无埋点，使用okhttp请求数据，并不需要圈选和debugger调试工具。

### 1. 首先集成无埋点
集成无埋点需要一个 gradle 插件和 `growingio-autotracker-core` 基础库。
在 project 级别的 build.gradle 下添加依赖
```groovy
buildscript {
    //...
    repositories {
        //...
        mavenCentral()
    }
    dependencies {
        //无埋点注入插件
        classpath "com.growingio.android:autotracker-gradle-plugin:3.4.0"
    }
}
```

在 app 的 build.gradle 下添加插件和依赖

```groovy
plugins {
	//...
    id 'com.growingio.android.autotracker'
}

//...

dependencies {
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.4.0'
}

```

### 2. 集成网络请求和数据请求格式json

同样在 app 的 build.gradle 下添加依赖

```groovy
dependencies {
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.4.0'

	//所需的模块
	implementation 'com.growingio.android:okhttp3:3.4.0'
	implementation 'com.growingio.android:json:3.4.0'
}
```

### 3. 添加注解解释器

在 app 的 build.gradle 下添加注解库和注解解释器.

```groovy
dependencies {
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.4.0'

	//所需的模块
	implementation 'com.growingio.android:okhttp3:3.4.0'
	implementation 'com.growingio.android:json:3.4.0'

	//注解解析
	implementation 'com.growingio.android:annotation:3.4.0'
	annotationProcessor 'com.growingio.android:compiler:3.4.0'
}
```

:::tip kapt
若使用kotlin，可以通过 kapt 来依赖注解器

`kapt 'com.growingio.android:compiler:3.4.0'`
:::

### 4. 使用注解自定义SDK的属性
在代码中新建一个类 `GrowingIODemoAppModule`，该类继承自 `AppGioModule`，可以用来指定自动生成代码的名称。

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
@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")
public class GrowingIODemoAppModule extends AppGioModule {

}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")
class GrowingIODemoAppModule : AppGioModule(){
    
}
```
    
</TabItem>
</Tabs>

`GIOAppModule` 注解会根据设置的名称生成两个类作为外部API调用类 `DemoTackerConfiguration` 配置类和 `DemoAutotracker` 调用类。

1. DemoTackerConfiguration 类
该类名称由 `@GIOAppModule#configName` 决定。
该类会获取所有模块下所有配置类信息（若有），并将它们里面的所有方法都汇集到本身。

2. DemoAutotracker 类
该类名称由 `@GIOAppModule#name` 决定。
该类主要用来提供SDK初始化接口，总共提供了两个初始化方法， 一个为 `startWithConfiguration(Application,DemoTackerConfiguration)`,该方法要求传入用户已经配置完成的config对象；另一为 `start(Application)`,该方法需要配合 `@GIOTracker` 注解使用，会在下面介绍，可以直接获取config进行代码配置；两者方法效果一样，都是整个 SDK 初始化的入口。

同时，还可以通过调用 `DemoAutotracker.get()` 来获取整个 SDK 对外的开放接口。

### 5. 利用 `@GIOTracker` 实现注册配置接口

`@GIOTracker` 各参数

| 名称 | 参数 | 作用 | 
| ---- | --- | ---- |
| path| Class<?>| Tracker接口类路径 |
| accountId| String| SDK初始化的项目id |
| urlScheme| String | SDK初始化的urlScheme |

`@GIOTracker` 具备两部分功能：
1. **指定自定义开放接口**  
SDK 默认接口类为 `Tracker.class` （无埋点需要指定为 `Autotracker.class`）,若开发者二次开发时需要更多开放的接口来满足需求，则可以自己添加类如 `Customtracker` 并继承 `Autotracker` 或 `Tracker`,然后将新添加的类配置到 `@GIOTracker`的path中。
最后的结果就是 `DemoAutotracker.get()`返回 `Autotracker` 实例。

2. **简化配置**  
上面有说过，`DemoAutotracker.start(Application)` 方法使用的前提就是 `@GIOTracker` 已经配置 accountId 和 urlScheme 这两个初始化参数。

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
@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")
public class GrowingIODemoAppModule extends AppGioModule {
    @GIOTracker(path = Autotracker.class, projectId = "<your accountId>", urlScheme = "<your urlscheme>")
    public void config(DemoTackerConfiguration config) {
        config.setChannel("demo")
                .setProject("<your accountId>","<your urlscheme>")//若在注解上声明可以省略
                .setDataCollectionEnabled(true)
                .setDebugEnabled(true);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration")
class GrowingIODemoAppModule : AppGioModule() {
    @GIOTracker(
        path = Autotracker::class,
        projectId = "<your accountId>",
        urlScheme = "<your urlscheme>"
    )
    fun config(config: DemoTackerConfiguration) {
        config.setChannel("demo")
            .setProject("<your accountId>", "<your urlscheme>") //若在注解上声明可以省略
            .setDataCollectionEnabled(true)
            .setDebugEnabled(true)
    }
}
```
    
</TabItem>
</Tabs>

### 6.初始化并运行

在上述配置完成后，只要很简单的在 `Application` 中的 `onCreate` 方法中初始化就可以了。

```java
DemoAutotracker.start(this)
```

运行后，有输出 SDK 初始化成功的log信息

```txt
!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!
!!! GrowingIO Tracker version: 3.4.0 !!!
```
和点击后出现 click 事件日志

```txt
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "eventType": "VIEW_CLICK",
    ║   "timestamp": 1626847839398,
    ║   ...
    ║   "sdkVersion": "3.4.0",
    ║   "path": "/MainActivity",
    ║   "pageShowTimestamp": 1626839380613,
    ║   "xpath": "/Page/LinearLayout[0]/FrameLayout[0]/ActionBarOverlayLayout[0]#decor_content_parent/ContentFrameLayout[0]/CoordinatorLayout[0]/FloatingActionButton[0]#fab",
    ║   "index": -1
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```

至此，自定义SDK集成成功。



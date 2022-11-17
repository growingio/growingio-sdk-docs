---
slug: custom android sdk
title: 基于 GrowingIO 现有 SDK 基础上的二次开发 - Android 篇
author: cpacm
author_title: GrowingIO SDK Team
author_url: https://github.com/cpacm
author_image_url: https://avatars.githubusercontent.com/u/7134104?v=4
tags: [sdk, android, custom]
---

为了满足不同客户的使用需求，我们的SDK可以通过集成不同的模块实现功能的自定义。比如说以下场景：

1. 不熟悉Android开发或只想快速集成
> 那么直接参考 [如何集成](/docs/android)，使用我们提供默认的SDK集成即可。

2. 想要集成一些额外的功能，如数据加密
> 可以通过API接口手动注册已有的功能模块。

3. 想要自己调整SDK的功能模块，如去除线上调试功能
> 参考 [自定义SDK](#自定义SDK)，根据需要集成SDK。

4. 不想要某些功能模块，想要接入自己的封装的功能，如网络框架
> 参考 [自定义模块](#自定义模块)，重新定义一个模块来完成自己的功能封装。

5. 在一些第三方跨应用平台上使用
> 一般我们会尽量提供常见的第三方平台的集成方案，若没有则可以参考 [自定义SDK](#自定义SDK) 来封装自己需要的SDK功能。

<!--truncate-->

## 自定义SDK

在 GrowingIO 的 SDK 中，已经有多个模块功能已经从代码中分离出来后续将会独立出更多的模块。具体可以到[模块功能](/docs/android/modules)查看已有的功能模块。

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
        classpath "com.growingio.android:autotracker-gradle-plugin:3.4.2"
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
	implementation 'com.growingio.android:autotracker-core:3.4.2'
}

```

### 2. 集成网络请求和数据请求格式json

同样在 app 的 build.gradle 下添加依赖

```groovy
dependencies {
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.4.2'

	//所需的模块
	implementation 'com.growingio.android:okhttp3:3.4.2'
	implementation 'com.growingio.android:database:3.4.2'
	implementation 'com.growingio.android:json:3.4.2'
}
```

### 3. 添加注解解释器

在 app 的 build.gradle 下添加注解库和注解解释器.

```groovy
dependencies {
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.4.2'

	//所需的模块
	implementation 'com.growingio.android:okhttp3:3.4.2'
	implementation 'com.growingio.android:database:3.4.2'
	implementation 'com.growingio.android:json:3.4.2'

	//注解解析
	implementation 'com.growingio.android:annotation:3.4.2'
	annotationProcessor 'com.growingio.android:compiler:3.4.2'
}
```

:::tip kapt
若使用kotlin，可以通过 kapt 来依赖注解器

`kapt 'com.growingio.android:compiler:3.4.2'`
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

| 名称      | 参数     | 作用                 |
| --------- | -------- | -------------------- |
| path      | Class<?> | Tracker接口类路径    |
| accountId | String   | SDK初始化的项目id    |
| urlScheme | String   | SDK初始化的urlScheme |

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
!!! GrowingIO Tracker version: 3.4.2 !!!
```
和点击后出现 click 事件日志

```txt
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "eventType": "VIEW_CLICK",
    ║   "timestamp": 1626847839398,
    ║   ...
    ║   "sdkVersion": "3.4.2",
    ║   "path": "/MainActivity",
    ║   "pageShowTimestamp": 1626839380613,
    ║   "xpath": "/Page/LinearLayout[0]/FrameLayout[0]/ActionBarOverlayLayout[0]#decor_content_parent/ContentFrameLayout[0]/CoordinatorLayout[0]/FloatingActionButton[0]#fab",
    ║   "index": -1
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```

至此，自定义SDK集成成功。


## 自定义模块
自定义模块可以让您使用自己的代码实现的功能来替换现有的模块功能。

在 GrowingIO SDK 中，模块加载具有唯一性——每一个输入源仅能注册一个模块，且该模块会被后注册的模块覆盖。

![custom module](/img/custom_module.png)

### 如何自定义一个模块

作为一个可扩展的SDK, 要添加或替换一种新的模块支持, 您需要按照以下步骤来执行(以替换网络库为例)

1. 实现一个 ModelLoader
2. 实现一个 DataFetcher , 可以被定义的 ModelLoader 返回
3. 实现一个 ModelLoaderFactory
4. 将您的新 ModelLoader 注册到sdk, 使用 `@GIOLibraryModule`

接下来以自定义一个 okhttp3 的网络请求自定义模块来举个例。

### 添加必要的依赖

在 app/module 的 build.gradle 下添加基础库核心（无埋点和埋点都可），注解库和注解解释器.

```groovy
dependencies {
	//埋点基础库
	implementation 'com.growingio.android:tracker-core:3.4.2'

	//注解解析
	implementation 'com.growingio.android:annotation:3.4.2'
	annotationProcessor 'com.growingio.android:compiler:3.4.2'
}
```

### 编写一个ModelLoader
第一步是实现一个 `ModelLoader` 接口. 在开始之前, 我们需要决定两件事情：
1. 我们要处理什么类型的模型( Model )?
2. 对于那种模型我们应该产出什么类型的数据( Data )?

在这个例子中, 我们希望处理网络请求, 因为替换内置框架, 所以 Model 是已经限制了的类型 `EventUrl`.
而从 `EventUrl` 中产出的 `EventResponse` 数据是模块需要返回给SDK的数据。

在已经知道 `Model` 和 `Data` 类型的情况下，我们就能建立一个 `DataLoader` 类接受正确的参数类型并返回默认值。

```java
public class OkHttpDataLoader implements ModelLoader<EventUrl, EventResponse> {

    private final Call.Factory client;

    public OkHttpDataLoader(Call.Factory client) {
        this.client = client;
    }

    @Override
    public LoadData<EventResponse> buildLoadData(EventUrl eventUrl) {
        return new LoadData<>(new OkHttpDataFetcher(client, eventUrl));
    }

    public static class Factory implements ModelLoaderFactory<EventUrl, EventResponse> {
        private static volatile Call.Factory sInternalClient;
        private final Call.Factory client;

        private static final int DEFAULT_CONNECT_TIMEOUT = 5;
        private static final int DEFAULT_READ_TIMEOUT = 10;

        private static Call.Factory getsInternalClient() {
            if (sInternalClient == null) {
                synchronized (Factory.class) {
                    if (sInternalClient == null) {
                        sInternalClient = new OkHttpClient.Builder()
                                .connectTimeout(DEFAULT_CONNECT_TIMEOUT, TimeUnit.SECONDS)
                                .readTimeout(DEFAULT_READ_TIMEOUT, TimeUnit.SECONDS)
                                .addInterceptor(new SecurityExceptionInterceptor())
                                .build();
                    }
                }
            }
            return sInternalClient;
        }

        public Factory() {
            this(getsInternalClient());
        }

        public Factory(Call.Factory client) {
            this.client = client;
        }

        @Override
        public ModelLoader<EventUrl, EventResponse> build() {
            return new OkHttpDataLoader(client);
        }
    }
}
```

其中 `Factory` 作用：  
1. 提供了一个静态的 `OkHttpClient`，可以避免每次请求都需要重新创建。
2. 模块注册时提供模块的具体实现类，即提供 `ModelLoader`.

### 编写DataFetcher
和 `ModelLoader` 类似, `DataFetcher` 接口是泛型的, 它要求我们指定所期待的返回类型，在网络请求模块里面即为 `EventResponse`
这样子可以立马得到一个模板:
```java
public class OkHttpDataFetcher implements HttpDataFetcher<EventResponse> {
    @Override
    public void loadData(DataCallback<? super EventResponse> callback) {}

    @Override
    public EventResponse executeData() {
        return null;
    }

    @Override
    public void cleanup() {}

    @Override
    public void cancel() {}

    @Override
    public Class<EventResponse> getDataClass() {
        return null;
    }
}
```
虽然这里有很多个方法, 但它们中的大部分都很容易实现

#### getDataClass

`getDataClass` 没什么好讨论的, 我们要返回 `EventResponse`

```java
@Override
public Class<EventResponse> getDataClass() {
  return EventResponse.class;
}
```

#### cancel
对于可以取消的网络连接库或长时间加载, 可以通过 cancel() 方法实现. 这将帮助加速其他队列里的加载, 并节约一些 CPU, 内存或其他资源, 如果没有需要取消的操作, 可以留空。

```java
@Override
public void cancel() {
  // 执行cancel操作, 或条件赋值
  isCancelled = true;
}
```

#### cleanup
如果您正在加载一个 `InputStream` 或打开任何 I/O 类的资源, 您需要要在 `cleanup()` 方法中关闭并清理这些 `InputStream` 或资源, 如果对应模块没有资源需要清理, 可以留空

```java
@Override
public void cleanup() {
    if (stream != null) {
        try {
            stream.close();
        } catch (IOException e) {
            // Ignore
        }
    }
    if (urlConnection != null) {
        urlConnection.disconnect();
    }
    urlConnection = null;
}
```

#### executeData
`executeData` 是模块中所期待您做那些繁重工作的地方, 您可以开启一个网络请求, 从磁盘加载数据, 或做任何您想做的事情. 在当前定制的模块中主要执行网络请求并返回对应数据.
```java
@Override
public EventResponse executeData() {
    long startTime = LogTime.getLogTime();
    try {
        return loadDataWithRedirects(new URL(eventUrl.toUrl()), 0, null, eventUrl.getHeaders());
    } catch (IOException e) {
        if (Log.isLoggable(TAG, Log.DEBUG)) {
            Log.d(TAG, "Failed to load data for url", e);
        }
    } finally {
        if (Log.isLoggable(TAG, Log.VERBOSE)) {
            Log.v(TAG, "Finished http url fetcher fetch in " + LogTime.getElapsedMillis(startTime));
        }
    }
    return new EventResponse(false);
}
```

#### loadData
`loadData` 与 `executeData` 的区别在于提供了一个 `DataCallback` 参数, 您可以安排一个异步任务,或在里面实现线程切换。

```java
@Override
public void loadData(DataCallback<? super EventResponse> callback) {
    long startTime = LogTime.getLogTime();
    try {
        EventResponse result = loadDataWithRedirects(new URL(eventUrl.toUrl()), 0, null, eventUrl.getHeaders());
        callback.onDataReady(result);
    } catch (IOException e) {
        if (Log.isLoggable(TAG, Log.DEBUG)) {
            Log.d(TAG, "Failed to load data for url", e);
        }
        
        callback.onLoadFailed(e);
    } finally {
        if (Log.isLoggable(TAG, Log.VERBOSE)) {
            Log.v(TAG, "Finished http url fetcher fetch in " + LogTime.getElapsedMillis(startTime));
        }
    }
}
```

完整的 `DataFetcher` 可以参考 [Github 上的代码](https://github.com/growingio/growingio-sdk-android-autotracker/blob/master/growingio-network/okhttp3/src/main/java/com/growingio/android/okhttp3/OkHttpDataFetcher.java)

### 添加模块配置
如果模块里面有些配置是需要对外开放接口的，那就需要通过自定义一个配置类开放出去。如 `OkhttpConfig`，继承 `Configurable` 接口:

```java
public class OkhttpConfig implements Configurable {

    private int connectTimeout = 5;
    private int readTimeout = 10;

    public OkhttpConfig setConnectTimeout(int connectTimeout) {
        this.connectTimeout = connectTimeout;
        return this;
    }

    public OkhttpConfig setReadTimeout(int readTimeout) {
        this.readTimeout = readTimeout;
        return this;
    }

    public int getConnectTimeout() {
        return connectTimeout;
    }

    public int getReadTimeout() {
        return readTimeout;
    }
}
```
后续需要将该配置类配置到模块注解中，自动注册完成后生成的 `<Custom>TackerConfiguration` 类中会自动包含 `OkhttpConfig` 中的配置方法以便 SDK 初始化时同时配置。

### 添加模块注解
最后一步是将模块的 `Factory` 与输入输出数据绑定一起，提供给 `TrackerRegistry` 注册。这时候有两种情况：通过注解注册和通过代码调用

#### 在Library模块中
使用 `@GIOLibraryModule` 注解和 `LibraryGioModule` 配合，如下所示：

```java
@GIOLibraryModule(config = OkhttpConfig.class)
public class OkhttpLibraryGioModule extends LibraryGioModule {
    @Override
    public void registerComponents(Context context, TrackerRegistry registry) {
        registry.register(EventUrl.class, EventResponse.class, new OkHttpDataLoader.Factory());
    }
}

```
> `@GIOLibraryModule` 在项目中的 Project Module 中使用，经过 APT 编译后每一个 Project Module 中都会生成一个有着 `@Index` 注解的类，该类会记录其 Module 下的所有`@GIOLibraryModule`信息。

#### 在App主模块中
需要将模块放入到主模块的注解中，如下所示：

```java
@GIOAppModule(name = "DemoAutotracker", configName = "DemoTackerConfiguration",config = OkhttpConfig.class)
public class GrowingIODemoAppModule extends AppGioModule {
    @GIOTracker(path = Autotracker.class, projectId = "<your accountId>", urlScheme = "<your urlscheme>")
    public void config(DemoTackerConfiguration config) {
        config.setChannel("demo")
                .setProject("<your accountId>","<your urlscheme>")//若在注解上声明可以省略
                .setDataCollectionEnabled(true)
                .setDebugEnabled(true);
    }

    @Override
    public void registerComponents(Context context, TrackerRegistry registry) {
        registry.register(EventUrl.class, EventResponse.class, new OkHttpDataLoader.Factory());
    }
}
```

#### 初始化手动添加
初始化手动添加是在 SDK 初始化时添加功能模块，较为推荐

```java
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                ...
                .addPreloadComponent(new OkhttpLibraryGioModule(),new OkhttpConfig()));
```

#### 运行时手动调用
运行时手动注册是在 SDK 初始化完成后通过调用 `registerComponent()` 实现

```java
DemoAutotracker.start(this);
//手动注册模块和配置类
ConfigurationProvider.get().addConfiguration(new OkhttpConfig());
DemoAutotracker.get().registerComponent(new OkhttpLibraryGioModule());
```

## 结束语

至此，GrowingIO 的二次开发教程全部说明完毕，若是还有什么疑问或者不懂的地方，欢迎到 [Github Discussions](https://github.com/growingio/growingio-sdk-android-autotracker/discussions) 提出疑问。



 
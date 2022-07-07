---
sidebar_position: 2
title: 自定义模块
---


自定义模块可以让您使用自己的代码实现的功能来替换现有的模块功能，现有的模块功能可以参考 [模块列表](/docs/android/develop/coutom%20sdk)

在 GrowingIO SDK 中，模块加载具有唯一性——每一个输入源仅能注册一个模块，且该模块会被后注册的模块覆盖。

![custom module](/img/custom_module.png)

## 如何自定义一个模块

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
	//无埋点基础库
	implementation 'com.growingio.android:autotracker-core:3.3.6'

	//注解解析
	implementation 'com.growingio.android:annotation:3.3.6'
	annotationProcessor 'com.growingio.android:compiler:3.3.6'
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

    //推荐使用建造者模式
    public OkhttpConfig setConnectTimeout(int connectTimeout) {
        this.connectTimeout = connectTimeout;
        return this;
    }

	//推荐使用建造者模式
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
最后一步是将模块的 `Factory` 与输入输出数据绑定一起，提供给 `TrackerRegistry` 注册。这时候有两种情况：App主模块和Library子模块

#### Library模块中
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

#### App主模块中
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

#### 手动添加模块
不同于上面两种的自动注册，手动注册是在 SDK 初始化完成后通过调用 `registerComponent()` 实现

```
DemoAutotracker.start(this);
//手动注册模块和配置类
DemoAutotracker.get().registerComponent(new OkhttpLibraryGioModule());
ConfigurationProvider.get().addConfiguration(new OkhttpConfig());
```





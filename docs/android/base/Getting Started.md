---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Android SDK 提供了 `无埋点` 和 `埋点` 两个SDK版本：
* 埋点 SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集自定义事件;
* 无埋点 SDK 具备埋点 SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

## 集成无埋点SDK

无埋点SDK（包括埋点 SDK）代码已托管在 [Github](https://github.com/growingio/growingio-sdk-android-autotracker) 上，欢迎 star,fork 一波。

> **Gradle插件版本**： 3.2.1及以上  
> **Android系统版本**：Android 4.2及以上

### 添加依赖
在 project 级别的build.gradle文件中添加autotracker-gradle-plugin依赖和maven仓库。

```groovy
buildscript {
    repositories {
        // 添加maven仓库
        mavenCentral()
        
    }
    dependencies {
        
        //GrowingIO 无埋点 SDK plugin
        classpath 'com.growingio.android:autotracker-gradle-plugin:3.2.0'
    }
}

allprojects {
    repositories {
        // 添加maven仓库
        mavenCentral()
    }
}
```

在 app及module 级别的 `build.gradle` 文件中添加 `com.growingio.android.autotracker` 插件、`autotracker`依赖。
```groovy
apply plugin: 'com.android.application'
//添加 GrowingIO 插件
apply plugin: 'com.growingio.android.autotracker'

...

dependencies {
    ...
    //GrowingIO 无埋点 SDK
    implementation 'com.growingio.android:autotracker-cdp:3.2.0'
}

```

:::tip 关于版本
最新版本请参考 [Github Release](https://github.com/growingio/growingio-sdk-android-autotracker/releases)
:::

### 添加URL Scheme
URL Scheme 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识。把 URL Scheme 添加到您的项目，以便使用[圈选](/docs/debug),[Mobile Debugger](/docs/debug) 及[深度链接](/docs/debug)等功能时唤醒应用。
将应用的 URLScheme 和应用权限添加到你的 AndroidManifest.xml 中的 LAUNCHER Activity 下。

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.growingio.testdemo">
​
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".YourApplication"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".LauncherActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <!--请添加这里的整个 intent-filter 区块，并确保其中只有一个 data 字段-->
            <intent-filter>
                <data android:scheme="growing.您的URL Scheme" />
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
            </intent-filter>
            <!--请添加这里的整个 intent-filter 区块，并确保其中只有一个 data 字段-->
        </activity>
    </application>
</manifest>
```
### SDK初始化配置
请将 SDK 的初始化代码放入 `Application` 的 `onCreate` 中。

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
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        CdpAutotrackConfiguration sConfiguration = new CdpAutotrackConfiguration("Your ProjectId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG);
        GrowingAutotracker.startWithConfiguration(this,sConfiguration);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        val sConfiguration = CdpAutotrackConfiguration("Your ProjectId", "Your URLScheme")
            .setDataCollectionServerHost("Your ServerHost")
            .setDataSourceId("Your DataSourceId")
            .setDebugEnabled(BuildConfig.DEBUG)
        GrowingAutotracker.startWithConfiguration(this, sConfiguration)
    }
}
```
    
</TabItem>
</Tabs>


:::caution 注意
1. 请确保将代码添加在 `Application` 的 `onCreate` 方法中，添加到其他方法中或者延迟初始化可能会在某种极端情况下导致 `Application` 重建时出现 `GrowingIO SDK` 未初始化的情况，从而导致页面的采集数据丢失。

2. `GrowingAutotracker.startWithConfiguration`第一个参数为 `ApplicationContext` 对象。 
:::

:::tip 关于隐私政策
在很多情况下，应用第一次打开时需要用户同意隐私协议后才能进行数据的收集，这里推荐的做法是应用初始化时先关闭数据收集，之后用户同意后再重新打开。
:::
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
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        CdpAutotrackConfiguration sConfiguration = new CdpAutotrackConfiguration("Your ProjectId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                // 初始化时先关闭数据收集
                .setDataCollectionEnabled(true);
        GrowingAutotracker.startWithConfiguration(this,sConfiguration);
    }
}

// 当用户同意隐私协议后，再打开数据收集
GrowingAutotracker.get().setDataCollectionEnabled(true);
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        val sConfiguration = CdpAutotrackConfiguration("Your ProjectId", "Your URLScheme")
            .setDataCollectionServerHost("Your ServerHost")
            .setDataSourceId("Your DataSourceId")
            // 初始化时先关闭数据收集
            .setDataCollectionEnabled(true)
        GrowingAutotracker.startWithConfiguration(this, sConfiguration)
    }
}

// 当用户同意隐私协议后，再打开数据收集
GrowingAutotracker.get().setDataCollectionEnabled(true)
```
    
</TabItem>
</Tabs>

### 代码混淆
如果你启用了混淆，请在你的 proguard-rules.pro 中加入如下代码：
```xml
-keep class * extends com.growingio.android.sdk.GeneratedGioModule
-keep class * extends com.growingio.android.sdk.LibraryGioModule
```


### 查看集成效果
运行应用，若 `Logcat` 中输出了  
`!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!`  
`!!! GrowingIO Tracker version: 3.2.0 !!!`  
则说明SDK已经集成成功。

若在初始化中打开了Debug `setDebugEnabled(true)` ，则可以在 `Logcat` 中看到每个事件的log日志输出。

至此，无埋点 SDK 就已经完成集成步骤了。


## 集成埋点SDK
埋点 SDK只自动采集用户访问事件和APP关闭事件，其他事件均需要开发同学调用相应埋点 API 采集自定义事件。
埋点相较于无埋点集成步骤会更简单，也不需要添加额外的插件。

### 添加依赖
在 project 级别下的 `build.gradle` 文件中添加仓库
```groovy
repositories {
    mavenCentral()
}
```

在 module 级别的 `build.gradle` 文件中添加tracker依赖。

```groovy
dependencies {

    //GrowingIO 埋点 SDK
    implementation 'com.growingio.android:tracker-cdp:3.2.0'
}
```

### 添加URLScheme
以便唤醒App
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.growingio.testdemo">
​
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:name=".YourApplication">
        <activity android:name=".LauncherActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <!--请添加这里的整个 intent-filter 区块，并确保其中只有一个 data 字段-->
            <intent-filter>
                <data android:scheme="growing.您的URLScheme" />
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
            </intent-filter>
            <!--请添加这里的整个 intent-filter 区块，并确保其中只有一个 data 字段-->
        </activity>
    </application>
</manifest>
```
### SDK初始化配置
请将 SDK 的初始化代码放入 `Application` 的 `onCreate` 中。

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
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("Your ProjectId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG);
        GrowingTracker.startWithConfiguration(this, sConfiguration);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        val sConfiguration: CdpTrackConfiguration =
            CdpTrackConfiguration("Your ProjectId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG)
        GrowingTracker.startWithConfiguration(this, sConfiguration)
    }
}
```
    
</TabItem>
</Tabs>

### 混淆
如果你启用了混淆，请在你的 proguard-rules.pro 中加入如下代码：
```xml
-keep class * extends com.growingio.android.sdk.GeneratedGioModule
-keep class * extends com.growingio.android.sdk.LibraryGioModule
```

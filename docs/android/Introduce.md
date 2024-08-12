---
sidebar_position: 1
title: 如何集成
---
GrowingIO Autotracker Android SDK具备自动采集基本的用户行为事件，比如访问和行为数据等。目前支持代码埋点、无埋点、可视化圈选等功能。

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 准备
目前所有的 GrowingIO Autotracker Android SDK 都已经发布至公开的仓库中，请在集成前添加代码库依赖的仓库地址至您的配置文件中。<br/>
* 集成 GrowingIO Autotracker Android SDK 时需要添加 `mavenCentral()` 仓库地址到您的 gradle 配置文件中。<br/>
* 集成无埋点功能时还需要添加额外的 Gradle 插件，集成插件需要添加 `gradlePluginPortal()`仓库地址到gradle配置文件中，以便正确下载插件依赖。

<Tabs
  groupId="AGP"
  defaultValue="AGP7"
  values={[
    {label: 'AGP7及以上', value: 'AGP7'},
    {label: '低版本Gradle', value: 'LOW'},
  ]}
>

<TabItem value="AGP7">

在 project 中的 `settings.gradle` 文件中添加代码仓库地址。

```groovy
pluginManagement {
    repositories {
        // 添加 gradle plugin 依赖的仓库地址
        gradlePluginPortal()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        // 添加 sdk 依赖的 maven 仓库地址
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
}
```

</TabItem>

<TabItem value="LOW">

在 project 中的 `build.gradle` 文件中添加代码仓库地址。

```groovy
buildscript {
    repositories {
        // 添加 gradle plugin 依赖的仓库地址
        gradlePluginPortal()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
}

allprojects {
    repositories {
        // 添加maven仓库
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
}
```

</TabItem>
</Tabs>

## 安装
完成整个GrowingIO Android SDK 安装需要依赖 **SDK代码** 和 **Gradle插件** 两个步骤。

### 添加SDK代码依赖

在需要用到的应用级别下的 `build.gradle` 文件中添加代码依赖。

<Tabs
  groupId="code-language"
  defaultValue="bom"
  values={[
    {label: 'BoM', value: 'bom'},
    {label: '依赖', value: 'common'},
  ]
}>
<TabItem value="bom">

```groovy
apply plugin: 'com.android.application'

dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.3.1')

  //GrowingIO 无埋点 SDK
  implementation 'com.growingio.android:autotracker'
}
```

</TabItem>

<TabItem value="common">

```groovy
apply plugin: 'com.android.application'

dependencies {
    implementation 'com.growingio.android:autotracker:4.3.1'
}
```

</TabItem>
</Tabs>

:::tip 关于版本
最新版本请参考 [Github Release](https://github.com/growingio/growingio-sdk-android-autotracker/releases)
:::

### 添加Gradle插件

Gradle 插件用于配合SDK中的无埋点功能，能够在不修改代码的情况下，自动帮助应用获取页面浏览，页面点击等埋点事件。若是只需要埋点功能则可以跳过该步骤。

<Tabs
  groupId="AGP"
  defaultValue="AGP7"
  values={[
    {label: 'AGP7及以上', value: 'AGP7'},
    {label: '低版本Gradle', value: 'LOW'},
  ]}
>

<TabItem value="AGP7">

在 project 下的 `build.gradle` 中添加 GrowingIO 插件

```groovy
plugins {
    id 'com.android.application' version '7.2.0' apply false

    ···
    // 添加GrowingIO 无埋点 SDK 插件
    id 'com.growingio.android.autotracker' version '4.3.0' apply false
}
```

在 app 级别的 `build.gradle` 文件中引入 `com.growingio.android.autotracker` 插件

```groovy
plugins {
    id 'com.android.application'

    // 使用 GrowingIO 无埋点 SDK 插件
    id 'com.growingio.android.autotracker'
}

```
</TabItem>

<TabItem value="LOW">

在 project 下的 `build.gradle` 中添加 GrowingIO 插件

```groovy

buildscript {
    repositories {
        // 添加maven仓库
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
    dependencies {
        //GrowingIO 无埋点 SDK plugin
        classpath 'com.growingio.android:autotracker-gradle-plugin:4.3.0'
    }
}

```

在 app 级别的 `build.gradle` 文件中引入 `com.growingio.android.autotracker` 插件

```groovy
apply plugin: 'com.android.application'
//添加 GrowingIO 插件
apply plugin: 'com.growingio.android.autotracker'

```

</TabItem>
</Tabs>

:::tip 关于插件
插件最新发布版本为 [Github Releases](https://github.com/growingio/growingio-sdk-android-plugin/releases)

关于插件的更多使用和配置请参考 [无埋点SDK插件说明](/docs/android/AGP7)
:::


## 配置 URL Scheme

URL Scheme 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识。把 URL Scheme 添加到您的项目，以便使用圈选, [Mobile Debugger](/knowledge/debugverify/mobiledebugger) 及深度链接等功能时唤醒应用。
将应用的 URLScheme 和应用权限添加到您的 AndroidManifest.xml 中的启动 Activity 下。

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

## SDK初始化配置

#### 请将 SDK 的初始化代码放入 `Application` 的 `onCreate` 中。为使 App 合规，请参考[合规步骤](/knowledge/compliance/androidCompliance#合规步骤)

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

        // Config GrowingIO
        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
        // Your URLScheme eg: growing.xxxxxxxxxxx
        // YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
        // YourDatasourceId eg: 11223344aabbcc
        AutotrackConfiguration sConfiguration = new AutotrackConfiguration("Your AccountId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG)
                .setAndroidIdEnabled(true)
                .setRequireAppProcessesEnabled(true)
                .setDataCollectionEnabled(true);
        GrowingAutotracker.startWithConfiguration(this, sConfiguration);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()

        // Config GrowingIO
        // YourAccountId eg:0a1b4118dd954ec3bcc69da5138bdb96
        // Your URLScheme eg:growing.xxxxxxxxxxx
        // YourServerHost eg:http://106.75.81.105:8080
        // YourDatasourceId eg: 11223344aabbcc
        val sConfiguration = AutotrackConfiguration("Your AccountId", "Your URLScheme")
            .setDataCollectionServerHost("Your ServerHost")
            .setDataSourceId("Your DataSourceId")
            .setDebugEnabled(BuildConfig.DEBUG)
            .setAndroidIdEnabled(true)
            .setRequireAppProcessesEnabled(true)
            .setDataCollectionEnabled(true)
        GrowingAutotracker.startWithConfiguration(this, sConfiguration)
    }
}
```

</TabItem>
</Tabs>

### 查看集成效果

运行应用，若 `Logcat` 中输出了

```shell
!!! Thank you very much for using GrowingIO. We will do our best to provide you with the best service. !!!
!!! GrowingIO Tracker version: 4.3.0 !!!
```

则说明SDK已经集成成功。

若在初始化中打开了Debug `setDebugEnabled(true)` ，则可以在 `Logcat` 中看到每个事件的log日志输出。
至此，就完成了无埋点 SDK 的集成。

另外，您可使用 [GioKit 辅助插件](/docs/giokit/android) 进行集成验证。

## 只开启埋点功能

只开启埋点功能的 SDK 只自动采集用户访问事件和APP关闭事件，其他事件均需要开发同学调用相应埋点 API 采集埋点事件。

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

        // Config GrowingIO
        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
        // Your URLScheme eg: growing.xxxxxxxxxxx
        // YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
        // YourDatasourceId eg: 11223344aabbcc
        AutotrackConfiguration sConfiguration = new AutotrackConfiguration("Your AccountId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG)
                .setAndroidIdEnabled(true)
                .setRequireAppProcessesEnabled(true)
                .setDataCollectionEnabled(true)

                // 关闭无埋点功能
                .setAutotrack(false);
        GrowingAutotracker.startWithConfiguration(this, sConfiguration);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        // Config GrowingIO
        // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
        // Your URLScheme eg: growing.xxxxxxxxxxx
        // YourServerHost eg: https://api.growingio.com 需要填写完整的url地址
        // YourDatasourceId eg: 11223344aabbcc
        val sConfiguration = TrackConfiguration("Your AccountId", "Your URLScheme")
                .setDataCollectionServerHost("Your ServerHost")
                .setDataSourceId("Your DataSourceId")
                .setDebugEnabled(BuildConfig.DEBUG)
                .setAndroidIdEnabled(true)
                .setRequireAppProcessesEnabled(true)
                .setDataCollectionEnabled(true)

                // 关闭无埋点功能
                .setAutotrack(false)
        GrowingTracker.startWithConfiguration(this, sConfiguration)
    }
}
```

</TabItem>
</Tabs>

> 只开启埋点功能只需要在SDK初始化关闭无埋点功能即可。

## 混淆

SDK中已经默认集成了混淆规则，R8 在编译项目时会自动应用其规则。

如果混淆后还出现问题，可以在您的 proguard-rules.pro 中加入如下代码：

```xml
-keep class com.growingio.** {
    *;
}
-dontwarn com.growingio.**
```

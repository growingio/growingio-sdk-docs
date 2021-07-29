---
sidebar_position: 3
title: Flutter SDK
---
针对于SDK 3.0 上的flutter插件，当前仅支持埋点sdk。

源码托管在 [growingio/flutter-growingio-sdk-tracker-plugin](https://github.com/growingio/flutter-growingio-sdk-tracker-plugin)

> 请下拉CDP分支，而不是master分支进行测试

----

## 添加依赖

以工程`flutter_app`为例，在`pubspec.yaml`文件中添加依赖

```c
dependencies:
  growingio_sdk_tracker_plugin:
    git:
      ref: CDP
      url: https://github.com/growingio/flutter-growingio-sdk-tracker-plugin.git
```

然后执行 `flutter pub get` 指令

> 注意：部分用户无法访问github.com，从而无法下拉插件库的情况，可以修改域名为hub.fastgit.org，即可解决

## iOS 工程配置

sdk需要初始化操作，否则会`异常退出`

在`AppDelegate`文件中添加初始化sdk代码，例如如下所示：

```c
#import "AppDelegate.h"
#import "GeneratedPluginRegistrant.h"
#import "GrowingTracker.h"
#import "GrowingTrackConfiguration.h"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    GrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"0a1b4118dd954ec3bcc69da5138bdb96"];
    configuration.dataSourceId = @"cdpDataSourceId";
    configuration.debugEnabled = YES;
    
    [GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];
  [GeneratedPluginRegistrant registerWithRegistry:self];
  // Override point for customization after application launch.
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end
```

使用Xcode，选择`Targets->Info->URL Types`配置好相关的`url scheme`

## Android工程配置

- 新建一个`MyApplication`继承自`FlutterApplication`

```java
package com.example.growingio_sdk_tracker_plugin_example;

import com.growingio.android.sdk.track.CdpTrackConfiguration;
import com.growingio.android.sdk.track.GrowingTracker;
import io.flutter.app.FlutterApplication;

public class MyApplication extends FlutterApplication {
    private static CdpTrackConfiguration sConfiguration;
    @Override
    public void onCreate() {
        super.onCreate();


        if (sConfiguration == null) {
            sConfiguration = new CdpTrackConfiguration("bfc5d6a3693a110d", "growing.d80871b41ef40518")
                    .setDataSourceId("cdpDataSourceId")
                    .setDebugEnabled(true);
        }
        GrowingTracker.startWithConfiguration(this, sConfiguration);
    }
}

```

- 并修改` AndroidManifest.xml`文件中`android:name`字段

```java
<application
        android:name="com.example.growingio_sdk_tracker_plugin_example.MyApplication" //修改这里
        ...
```

- 在`app`下的`build.gradle`添加配置参数

```groovy
android {
    compileSdkVersion 29

    lintOptions {
        disable 'InvalidPackage'
    }

    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "com.example.flutter_app"
        minSdkVersion 17   //提示：这里可能版本小于17，修改为17可以避免报错
        targetSdkVersion 29
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    resValue("string", "growingio_project_id", "9926fc6c1189e2fb") //这里是你的工程id
    resValue("string", "growingio_url_scheme", "growing.da7e6c2879469314") //这里是你的url scheme
```

- 在`app`下的`build.gradle`中添加 `GrowingIO Tracker SDK`

```groovy
dependencies {
    implementation 'com.growingio.android:tracker-cdp:latest.release' //可以指定你需要的版本 >3.0.0
}
```

之后，运行你的app，即可进行正常埋点。


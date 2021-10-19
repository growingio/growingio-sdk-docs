---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 集成 GioKit

GioKit 代码后续将逐步开源，敬请期待！
:::info
**Gradle插件版本**： 3.2.1及以上  
**Android系统版本**：Android 5.0 及以上, **<font color='red'>GioKit仅支持 AndroidX</font>**<br/>
**请在 [Android SDK](/docs/android/base/Getting%20Started) 基础上使用 GioKit**
:::
### 添加依赖
在 project 级别的`build.gradle`文件中添加`giokit-plugin`依赖和 maven 仓库。

```groovy
buildscript {
    repositories {
        // 添加maven仓库
        mavenCentral()
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
        
    }
    dependencies {
        // GioKit plugin
        classpath "com.growingio.giokit:giokit-plugin:1.0.0-SNAPSHOT"
    }
}

allprojects {
    repositories {
        // 添加maven仓库
        mavenCentral()
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }
}
```

在 app 级别的`build.gradle`文件中添加`com.growingio.giokit`插件、`giokit`依赖。

:::info
**GrowingIO Android SDK 3.0及以上版本，请添加**
```groovy
apply plugin: 'com.growingio.giokit'
```
:::

:::info
**GrowingIO Android SDK 2.x 版本，请添加**
```groovy
apply plugin: 'com.growingio.giokit.saas'
```
:::

:::caution 注意
以上二者根据相应的 GrowingIO Android SDK 选择对应的插件，请不要一起使用！！
:::
```groovy
...
dependencies {
    ...
    // GioKit
    debugImplementation "com.growingio.giokit:giokit:1.0.0-SNAPSHOT"
    releaseImplementation "com.growingio.giokit:giokit-no-op:1.0.0-SNAPSHOT"
}
```

:::caution 注意

为了避免在正式环境下出现不必要的错误，请务必只在 Debug 环境下使用 GioKit 工具。
:::

### 初始化
请将 GioKit 的初始化代码放入`Application`的`onCreate`中。

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
        GioKit.with(this).build();
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        GioKit.with(this).build()
    }
}
```

</TabItem>
</Tabs>

### 设置手动埋点范围
为了方便统一查看用户的手动埋点信息，我们通过 GioKit Plugin 插件来查找在应用中手动埋点调用的位置。
```groovy
giokitExt {
    debugMode false
    // 统计该域值下所有埋点信息，如 com.growingio 表示统计 com.growingio 包名下的埋点代码
    trackFinder {
        domain = ["com.growingio.giokit.demo"]
        // 若用户自己封装了SDK customEvent 方法，可通过在此设置来查找封装类调用的代码
        // className "com.growingio.giokit.demo.AutotrackerUtils"
        // methodName "trackCustomEvent"
    }
}
```
:::info
默认查找域名为项目的`ApplicationId`
:::
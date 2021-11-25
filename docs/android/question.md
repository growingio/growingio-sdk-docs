---
sidebar_position: 3
title: 常见问题
---

### 关于 SNAPSHOT 版本
拥有该后缀的SDK版本属于测试阶段的SDK快照版本，在完成测试后会将其转为正式版本。
若要使用提前使用该版本，请在 project 级别的 `build.gradle` 下添加以下依赖包仓库
```groovy
//如果你的版本为 xxx-SNAPSHOT 版本，则需要加入该仓库。与 mavenCentral() 同级
maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }
```


### 若minSdkTarget Android5.0及以下使用了 `multidex`
需要在app的build.gradle中添加如下配置将sdk中contentprovider添加到主dex中 具体配置方式可以参考 [multiDexKeepFile 属性](https://developer.android.google.cn/studio/build/multidex?hl=zh_cn#multidexkeepfile-property)
```groovy
android {
    buildTypes {
        release {
            multiDexKeepFile file('multidex-config.txt')
            ...
        }
    }
}
```
并在 `multidex-config.txt` 中增加如下类
```xml
com/growingio/android/sdk/track/middleware/EventsContentProvider.class
com/growingio/android/sdk/track/middleware/EventsInfoTable.class
com/growingio/android/sdk/track/middleware/EventsSQLiteOpenHelper.class
```

### `autotracker-gradle-plugin`默认依赖
`autotracker-gradle-plugin`默认依赖了`com.android.tools.build:gradle:3.3.0`, 如果希望 在 gradle 低版本中使用该依赖插件，请阻断插件中gradle的版本
```groovy
// 在配置插件依赖时, 通过如下方式引入
classpath("com.growingio.android:autotracker-gradle-plugin:3.3.2") {
    transitive false
} 
```
### APP内嵌H5页面需要与APP访问用户数据打通该怎么集成SDK？

详细请参[内嵌h5页面数据采集配置](/docs/android/base/Configuration#1-内嵌h5页面数据采集配置)


### SDK如何支持合规和第三方安全检测，以及GDPR（欧盟《一般数据保护条例》）？

首先，用户未同意隐私条款时，可以在 SDK 初始化配置时，调用 setDataCollectionEnabled 设置为 false，禁止数据采集（不获取 AndroidId，不获取任何设备信息，也不上报任何数据）；<br/>
其次，当用户同意隐私条款时，调用GrowingAutotracker.get().setDataCollectionEnabled(true) 开启数据采集；<br/>
最后，当用户再次进入app时， 如果已同意隐私条款，在 SDK 初始化配置时，调用 dataCollectionEnabled 设置为 true，开启数据采集。

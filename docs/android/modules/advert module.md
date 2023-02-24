---
sidebar_position: 8
title: 广告模块
---

广告模块包括激活事件和深度链接(DeepLink)，激活事件是当用户应用第一次打开时有且仅发一次的事件，深度链接是提供客户通过活动网页等形式提供App渠道的跳转和下载。
在深度链接技术场景中,可以直接唤起 App 并跳转至指定页面，同时根据条件判断用户跳转路径，当用户已经安装 App 时可以直接唤起 App，当用户未安装 App 时会引导用户下载 App.

:::info
具体的深度链接配置可以参考 [获客分析](https://docs.growingio.com/op-help/docs/4.2/product-manual/acquisition-analytics/acquisition-tracing/)
:::


--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| advert  | 需要手动集成 |`Activate` | `AdvertResult` | >=3.4.6 |

### 依赖方式
<Tabs
  groupId="code-language"
  defaultValue="common"
  values={[
    {label: '依赖', value: 'common'},
    {label: 'BoM', value: 'bom'},
  ]
}>

<TabItem value="common">

```groovy
dependencies {
	implementation 'com.growingio.android:advert:3.4.6'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.4.6')

  implementation 'com.growingio.android:advert'
}
```

</TabItem>
</Tabs>

### 模块配置
Advert 广告模块中提供了配置文件可以设置模块的配置：

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明 
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `setReadClipBoardEnable` | `Boolean`       | 否      | `true`  | 是否允许读取剪切板的应用信息  |
| `setDeepLinkHost`  | `String` | 否      | SDK收数服务端地址   | 是否允许该地址向应用发送链接信息  |
| `setDeepLinkCallback`  | `接口回调` | 否      | `null`   | 监听深度链接中的地址参数 |

```java
AdvertConfig config = new AdvertConfig();
config.setDeepLinkHost("Your DeepLinkHost")
        .setReadClipBoardEnable(true)
        .setDeepLinkCallback((params, error, appAwakePassedTime) -> {
            // accept deeplink params
        });
```

### 使用方式

<Tabs groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点', value: 'autotrack'},
    {label: '埋点', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
// 初始化无埋点SDK时, 调用方法注册广告模块
GrowingAutotracker.startWithConfiguration(this,
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule(), config));
```

</TabItem>
<TabItem value="track">

```java
// 初始化埋点SDK时, 调用方法注册广告模块
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule(), config));
```

</TabItem>
</Tabs>

### AndroidManifest 配置
在平台配置完成后，Android端会得到Intent Filter,如下

```xml
 <intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:host="Your DeepLinkHost"
        android:pathPattern="/v8rud.*"
        android:scheme="https" />
</intent-filter>
```

需要将其配置到 AndroidManifest 的入口 Activity 下。

---
sidebar_position: 1
title: 核心模块
---

核心模块是 GrowingIO 中必须包含的模块功能，它们和核心库组成了SDK最基本的功能。

**核心库** 

| 名称           |                                        说明                                         | 依赖                                           |
| :------------- | :---------------------------------------------------------------------------------: | :--------------------------------------------- |
| 埋点 Library   |                          埋点核心库，包含最基本的埋点逻辑                           | `com.growingio.android:tracker-core:4.4.3`     |
| 无埋点 Library |                无埋点核心库，依赖于埋点核心库，包含无埋点的注入逻辑                 | `com.growingio.android:autotracker-core:4.4.3` |
| 模块注解库     | 注解声明，通过注解可以自动生成 SDK 的初始化类来注册所有的模块和聚合模块内的配置类。 | `com.growingio.android:annotation:4.4.3`       |
| 注解解析器     |                                 与上面注解配合使用                                  | `com.growingio.android:compiler:4.4.3`         |

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 数据库模块
使用默认数据库 sqlite，用于存储事件防止数据丢失。

SDK 事件通过 `EventDatabase` 来传递到数据库并进行增删改查的操作。通过 `EventDbResult` 返回数据库操作接口。

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
	implementation 'com.growingio.android:database:4.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.4.3')

  implementation 'com.growingio.android:database'
}
```

</TabItem>
</Tabs>

## 网络请求库
默认使用 `okhttp3` 网络请求框架，用于将事件数据传输到服务器中。
SDK 事件通过 `EventUrl` 指定请求方式、服务器请求地址，再通过网络模块进行发送。 返回 `EventResponse` 通知请求结果。

若是应用使用了其他的网络请求框架，可以选择其他的网络模块，如 `urlconnection`

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
	// 网络模块-okhttp3
	implementation 'com.growingio.android:okhttp3:4.4.3'
	// 可选网络模块-urlconnnection
	implementation 'com.growingio.android:urlconnnection:4.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
	// Import the BoM for the GrowingIO platform
	implementation platform('com.growingio.android:autotracker-bom:4.4.3')

  // 网络模块-okhttp3
	implementation 'com.growingio.android:okhttp3'
	// 可选网络模块-urlconnnection
	implementation 'com.growingio.android:urlconnnection'
}
```

</TabItem>
</Tabs>

## 数据格式库
默认使用 `protobuf` 来做数据传输的格式。通过数据格式转换可以将输入 `EventFormatData` 转为字节数组数据 `EventByteArray` 方便网络数据上传。

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
	implementation 'com.growingio.android:protobuf:4.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.4.3')

  implementation 'com.growingio.android:protobuf'
}
```

</TabItem>
</Tabs>


### protobuf 依赖库

`protobuf java` 有两个版本的依赖库，`protobuf-javalite` 和 `protobuf-java`。而在Android中通常使用`protobuf-javalite`，sdk也选择`protobuf-javalite`作为默认的 protobuf 依赖库。若是项目中选择了`protobuf-java` 作为依赖库可以通过以下方式解决库的冲突。

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
    implementation('com.growingio.android:autotracker:4.4.3') {
        exclude group: "com.google.protobuf", module: "protobuf-javalite"
    }

    // 您的 protobuf 依赖库，如：
    implementation "com.google.protobuf:protobuf-java:4.31.1"
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation(platform('com.growingio.android:autotracker-bom:4.4.3'))
  implementation('com.growingio.android:autotracker') {
      exclude group: "com.google.protobuf", module: "protobuf-javalite"
  }

  // 您的 protobuf 依赖库，如：
  implementation "com.google.protobuf:protobuf-java:4.31.1"
}
```

</TabItem>
</Tabs>

> 更古早的 `protobuf-lite` 早已停止更新，不再支持请尽早升级。


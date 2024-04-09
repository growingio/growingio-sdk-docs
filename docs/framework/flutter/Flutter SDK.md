---
sidebar_position: 1
title: Flutter SDK 插件
---

Flutter SDK 插件虽然提供了 无埋点SDK 和 埋点SDK 两个版本，但是在使用 Flutter 无埋点SDK前需要按照 [Flutter Aspect 集成](/docs/framework/flutter/Flutter%20Aspect) 才能使无埋点功能生效。

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 环境配置
:::info
* Flutter SDK 插件的更新日志，可参阅 [Release Notes](/docs/framework/flutter/index.md#版本记录)
* Flutter SDK 无埋点如何生效，请阅读 [Flutter Aspect 集成](/docs/framework/flutter/Flutter%20Aspect)
:::

## Growingio Flutter SDK 插件集成
### 添加依赖

以工程`flutter_app`为例，在`pubspec.yaml`文件中添加依赖。

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```c
dependencies:
  growingio_autotracker_flutter_plugin: '2.0.1'
```

</TabItem>

<TabItem value="tracker">

```c
dependencies:
  growingio_tracker_flutter_plugin: '2.0.1'
```

</TabItem>

</Tabs>

然后执行 `flutter pub get` 指令安装插件。

<details>
  <summary>点击查看Growingio Flutter 插件和 SDK 版本的依赖关系</summary>

  | Flutter 插件版本 |  Android SDK 版本范围   |  iOS SDK 版本范围  |
  | :-------------- | :----------------- | :------: |
  | >= v1.1.3 | >= v3.5.0 | >= v3.5.0 |
  | = v2.0.0 | >= v4.1.0 | >= v4.1.0 |

</details>

:::info 原生+Flutter
若是纯 Flutter 应用，上述集成就可以使用了。若是项目中同时具有原生代码和Flutter，且原生也需要支持无埋点功能，那么就需要基于[无埋点初始化配置](/docs/android/Introduce#sdk初始化配置)集成原生的SDK。
Flutter和原生共用一套SDK逻辑，不会初始化两次。

> 在Android中， Gradle Plugin 若出现 'no growingio autotracker sdk dependency was found' 的编译错误，可以将插件的配置项 skipDependencyCheck 设置为true。

:::

### Flutter 插件初始化

GrowingIO Flutter SDK 支持在 Flutter 中初始化 SDK，也同时支持在原生代码中初始化。如果需要更多的功能设置，我们更推荐您在原生端实现初始化。

#### 原生端初始化
原生端初始化请参考各端的初始化文档：
* Android: [无埋点初始化配置](/docs/android/Introduce#sdk初始化配置)、[埋点初始化配置](/docs/android/Introduce#sdk初始化配置-1)，另外，在 Android 原生初始化需要额外添加 [Flutter 模块](/docs/android/modules/flutter%20module#使用方式)
* iOS: [无埋点初始化配置](/docs/ios/Introduce#sdk-初始化配置)、[埋点初始化配置](/docs/ios/Introduce#sdk-初始化配置-1)


#### Flutter 初始化
在 Flutter 端进行初始化，请将 SDK 的初始化代码放入 `main.dart` 的 `main` 中，代码示例如下：

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart

void main() async {
  ...
  WidgetsFlutterBinding.ensureInitialized();
  GrowingAutotracker.startWithConfiguration(
    projectId: "Your ProjectId",
    dataCollectionServerHost: "Your collection server host",
    dataSourceId: "Your datasourceid",
    urlScheme: "Yoour Url Scheme",
    debugEnabled: true,
    modules: {
      AdvertLibraryGioModule(config: AdvertConfig()),
    },
    dataCollectionEnabled: true,
    autoTrackAllRoutePage: false,
    idMappingEnabled: true,
    cellularDataLimit: 10,
    dataUploadInterval: 15,
    sessionInterval: 20,
  );
  ...
  runApp(MyApp());
}
```

</TabItem>

<TabItem value="tracker">

```dart
void main() async {
  ...
  WidgetsFlutterBinding.ensureInitialized();
  GrowingTracker.startWithConfiguration(
    projectId: "Your ProjectId",
    dataCollectionServerHost: "Your collection server host",
    dataSourceId: "Your datasourceid",
    urlScheme: "Yoour Url Scheme",
    debugEnabled: true,
    modules: {
      AdvertLibraryGioModule(config: AdvertConfig()),
      ProtobufLibraryModule()
    },
    dataCollectionEnabled: true,
    idMappingEnabled: true,
    cellularDataLimit: 10,
    dataUploadInterval: 15,
    sessionInterval: 20,
  );
  ...
  runApp(MyApp());
}
```

</TabItem>

</Tabs>

## 初始化配置说明

在 Flutter 初始化中会传入各式的参数，参数配置如下表所示：

| 配置项                   | 参数类型  | 是否必填 | 默认值  | 说明  | 版本 |
| :-----------------------| :------: | :------: | :------: | :------ | :------ |
| projectId             | String           |    是    | null  | 项目ID，每个应用对应唯一值 | -     |
| urlScheme             | String           |    是    | null  | Android 应用特有的URLScheme，用于外部应用拉起应用，如圈选   | -          |
| dataSourceId          | String           |    是    | null  | 应用的DataSourceId，唯一值        |  -  | 
| dataCollectionServerHost  | String           |    是    | null  | 服务端部署后的 ServerHost     |  -  |
| autoTrackAllRoutePage  | bool           |    否    | false  | 是否自动开启页面采集，无埋点独有     |  >=4.1.0  |
| channel                   | String           |    否    | null  | 应用的分发渠道     | -          |
| debugEnabled              | bool          |    否    | false | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - |
| cellularDataLimit         | int             |    否    | 10    | 每天发送数据的流量限制，单位MB        | -  |
| dataUploadInterval        | int              |    否    | 15    | 数据发送的间隔，单位秒                | -          |
| sessionInterval           | int              |    否    | 30   | 会话后台留存时长，单位秒  |  - |
| dataCollectionEnabled     | bool          |    否    | true  | 是否采集数据               |  - |
| requestTimeout            | int          |    否    | 30  | 设置数据上报请求的超时时间，单位秒               |  - |
| androidIdEnabled     | bool          |    否    | false  | 是否在 Android 设备上采集 AndroidId           |  - |
| imeiEnabled     | bool          |    否    | false  | 是否在 Android 设备上采集 imei          |  - |
| modules  | `Set<LibraryGioModule>` | 否 | empty | 模块集成，具体请阅读下方的模块说明 | - |

### urlScheme 说明
在使用 GrowingIO SDK 的Mobile Debugger 和圈选功能时，需要外部浏览器通过扫描二维码来拉起应用。
* [Android 端 URLScheme 配置说明](/docs/android/Introduce#添加url-scheme)
* [iOS 端 URLScheme 配置说明](/docs/ios/Introduce#添加-url-scheme)

### 模块配置
GrowingIO SDK 利用模块来实现SDK核心功能以外的额外功能，在 Flutter SDK 插件中，可以通过在 modules 传入模块声明来开启相应的功能。

目前 Flutter SDK 可启用的模块功能包括：

#### 广告功能

```dart
GrowingTracker.startWithConfiguration(
    //....
    modules: {
      AdvertLibraryGioModule(
        config: AdvertConfig(readClipBoardEnable: true, /// 是否打开剪切板
          deepLinkHost: "Your deepLinkHost", /// 深度链接配置地址, SaaS取默认值 “https://link.growingio.com”
          asaEnabled: true, /// 仅iOS端使用
          deepLinkCallback:(Map<String,String> params,int error,int time){
            ///监听深度链接中的地址参数
          },
      )),
    },
    //....
  );

```
广告模块包括激活事件和深度链接，能帮助客户提供广告，活动的引导跳转和下载。

:::info
在 Flutter SDK 启动广告模块同时，原生端（包括Android和iOS端）都需要引入相应的模块代码，请参考：
* [Android 端 引入广告模块](/docs/android/modules/advert%20module)
* [iOS 端 引入广告模块](/docs/ios/modules/Ads%20Module)
:::

#### 加密模块
```dart
GrowingTracker.startWithConfiguration(
    //....
    modules: {
      EncoderLibraryGioModule(),
    },
    //....
  );

```
加密模块用于数据网络上传数据的加密。

#### Json 模块

```dart
GrowingTracker.startWithConfiguration(
    //....
    modules: {
      JsonLibraryModule(),
    },
    //....
  );

```
Json 数据模块将会使用 Json 格式保存和上传事件数据。


#### H5混合模块
```dart
GrowingTracker.startWithConfiguration(
    //....
    modules: {
      HybridLibraryGioModule(),
    },
    //....
  );

```
若使用了原生的WebView,且内嵌 H5 页面如果也需要进行数据采集（H5 页面已经集成 Web JS SDK），则可以开启该 H5混合模块。
:::info
在 Flutter SDK 启动H5混合模块同时，原生端（包括Android和iOS端）都需要引入相应的模块代码，请参考：
* Android 端 默认已引入H5混合模块
* [iOS 端 需引入H5混合模块](/docs/ios/modules/Hybrid%20Module)
:::

## API说明

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setDataCollectionEnabled(true)
GrowingAutotracker.get().setLoginUserId(userId: "cpacm",userKey: "name")
GrowingAutotracker.get().cleanLoginUserId()
GrowingAutotracker.get().setLoginUserAttributes(attributes: {"sex":"female"});
GrowingAutotracker.get().setLocation(latitude: 20.11,longitude: 20.11)
GrowingAutotracker.get().cleanLocation()
GrowingAutotracker.get().getDeviceId()
GrowingAutotracker.get().trackCustomEvent(eventName: "eventName", attributes: {"age":"18"})
String? timerId =await GrowingAutotracker.get().trackTimerStart(eventName: "custom");
GrowingAutotracker.get().trackTimerPause(timerId: timerId!);
GrowingAutotracker.get().trackTimerResume(timerId: timerId);
GrowingAutotracker.get().trackTimerEnd(timerId: timerId,attributes: {});
GrowingAutotracker.get().removeTimer(timerId: timerId);
GrowingAutotracker.get().clearTrackTimer();
GrowingAutotracker.get().setGeneralProps(props:{});
GrowingAutotracker.get().removeGeneralProps(keys:["col1 row1", "key1"]);
GrowingAutotracker.get().clearGeneralProps();

GrowingAutotracker.get().registerComponent(module);
```

</TabItem>

<TabItem value="tracker">

```dart
GrowingTracker.get().setDataCollectionEnabled(true)
GrowingTracker.get().setLoginUserId(userId: "cpacm",userKey: "name")
GrowingTracker.get().cleanLoginUserId()
GrowingTracker.get().setLocation(latitude: 20.11,longitude: 20.11)
GrowingTracker.get().cleanLocation()
GrowingTracker.get().setLoginUserAttributes(attributes: {"sex":"female"})
GrowingTracker.get().getDeviceId()
GrowingTracker.get().trackCustomEvent(eventName: "custom",attributes: {"item":"exp"});
String? timerId =await GrowingTracker.get().trackTimerStart(eventName: "custom");
GrowingTracker.get().trackTimerPause(timerId: timerId!);
GrowingTracker.get().trackTimerResume(timerId: timerId);
GrowingTracker.get().trackTimerEnd(timerId: timerId,attributes: {});
GrowingTracker.get().removeTimer(timerId: timerId);
GrowingTracker.get().clearTrackTimer();
GrowingTracker.get().setGeneralProps(props:{});
GrowingTracker.get().removeGeneralProps(keys:["col1 row1", "key1"]);
GrowingTracker.get().clearGeneralProps();

GrowingTracker.get().registerComponent(module);
```

</TabItem>

</Tabs>

### 1. 数据采集开关
`setDataCollectionEnabled`<br/>
打开或关闭数据采集 
#### 参数说明
| 参数      | 参数类型  | 说明                                                 |
| :-------- | :-------- | :--------------------------------------------------- |
| `enabled` | `boolean` | `true`打开数据采集，`false`关闭数据采集，默认 `true` |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setDataCollectionEnabled(true);
```

</TabItem>

<TabItem value="tracker">

```dart
GrowingTracker.get().setDataCollectionEnabled(true);
```


</TabItem>

</Tabs>

### 2. 设置登录用户ID 
`setLoginUserId`<br/>
当用户登录之后调用，设置登录用户ID
:::info
**支持 ID-MAPPING 需在初始化 SDK 时设置 `idMappingEnabled` 为 `true`**

如果您的App每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级App版本后初次访问时重新调用setLoginUserId方法
:::
#### 参数说明
| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | `String` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `String` | 适用于ID-MAPPING,可设置 `userId` 的类型,可选填                  |
#### 示例

<Tabs 
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setLoginUserId(userId: "cpacm",userKey: "name");
```

</TabItem>

<TabItem value="tracker">

```dart
GrowingTracker.get().setLoginUserId(userId: "cpacm",userKey: "name");
```

</TabItem>
</Tabs>

### 3. 清除登录用户ID
`cleanLoginUserId`<br/>
当用户登出之后调用，清除已经设置的登录用户ID。
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().cleanLoginUserId();
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().cleanLoginUserId();
```

</TabItem>
</Tabs>

### 4. 设置用户的地理位置 
`setLocation`<br/>
设置用户当前的地理位置，基于WGS-84坐标
#### 参数说明
| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | `double` | 地理坐标点纬度 |
| `longitude` | `double` | 地理坐标点经度 |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setLocation(latitude: 20.11,longitude: 20.11);
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().setLocation(latitude: 20.11,longitude: 20.11);
```

</TabItem>
</Tabs>

### 5. 清除用户的地理位置 
`cleanLocation`<br/>
清除用户当前的地理位置
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().cleanLocation();
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().cleanLocation();
```

</TabItem>
</Tabs>

### 6. 设置登录用户属性 
`setLoginUserAttributes`<br/>
发送登录用户属性事件，用于用户信息相关分析；
在添加发送用户属性事件代码之前，需在CDP平台用户管理界面创建用户属性。

#### 参数说明
| 参数         | 参数类型              | 说明         |
| :----------- | :-------------------- | :----------- |
| `attributes` | `Map<String, String>` | 用户属性信息 |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setLoginUserAttributes(attributes: {"sex":"female"});
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().setLoginUserAttributes(attributes: {"sex":"female"});
```

</TabItem>
</Tabs>

### 7. 设置埋点事件 
`trackCustomEvent`<br/>
发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性；<br/>
如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP平台版本>= 2.1 ）
#### 参数说明
| 参数         | 参数类型              | 说明                                                                                             |
| :----------- | :-------------------- | :----------------------------------------------------------------------------------------------- |
| `eventName`  | `String`              | 事件名，事件标识符                                                                               |
| `attributes` | `Map<String, String>` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)（可选） |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().trackCustomEvent(eventName: "custom",attributes: {"item":"exp"});
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().trackCustomEvent(eventName: "custom",attributes: {"item":"exp"});
```

</TabItem>
</Tabs>

### 8. 获取设备ID 
`getDeviceId`<br/>
获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备。
如果没有初始化SDK 或者关闭采集开关可能返回值为null，且可能有IO操作。
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().getDeviceId();
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().getDeviceId();
```
</TabItem>
</Tabs>

### 9. 事件化计时器
`trackTimerStart`<br/>
初始化一个事件计时器，参数为计时事件的事件名称，返回值为该事件计时器唯一标识

`trackTimerPause`<br/>
暂停事件计时器，参数为trackTimerStart返回的唯一标识

`trackTimerResume`<br/>
恢复事件计时器，参数为trackTimerStart返回的唯一标识

`trackTimerEnd`<br/>
停止事件计时器，参数为trackTimerStart返回的唯一标识。调用该接口会自动触发删除定时器。

`removeTimer`<br/>
删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

`clearTrackTimer`<br/>
清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明
| 参数        | 参数类型 | 说明                 |
| :---------- | :------- | :------------------- |
| `eventName` | `String` | 事件名称，事件标识符 |
| `attributes` | `Map<String, String>` | 事件发生时所伴随的属性信息 |

#### 返回值说明
| 参数      | 参数类型 | 说明           |
| :-------- | :------- | :------------- |
| `timerId`    | `String`              | 计时器唯一标识             |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
String? timerId =await GrowingAutotracker.get().trackTimerStart(eventName: "custom");
GrowingAutotracker.get().trackTimerPause(timerId: timerId!);
GrowingAutotracker.get().trackTimerResume(timerId: timerId);
GrowingAutotracker.get().trackTimerEnd(timerId: timerId,attributes: {});
GrowingAutotracker.get().removeTimer(timerId: timerId);
GrowingAutotracker.get().clearTrackTimer();
```

</TabItem>
<TabItem value="tracker">

```dart
String? timerId =await GrowingTracker.get().trackTimerStart(eventName: "custom");
GrowingTracker.get().trackTimerPause(timerId: timerId!);
GrowingTracker.get().trackTimerResume(timerId: timerId);
GrowingTracker.get().trackTimerEnd(timerId: timerId,attributes: {});
GrowingTracker.get().removeTimer(timerId: timerId);
GrowingTracker.get().clearTrackTimer();
```
</TabItem>
</Tabs>

### 10. 通用属性
`setGeneralProps({required Map<String, dynamic> props})`<br/>
为所有的自定义事件（CustomEvent）添加通用属性。

`removeGeneralProps({required List<String> keys})`<br/>
根据Key值移除已经设置的属性，如不存在则不影响。

`clearGeneralProps()`<br/>
清除所有已经设置的通用属性。

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().setGeneralProps(props:{"key1":"name"});
GrowingAutotracker.get().removeGeneralProps(keys:["xxx", "key1"]);
GrowingAutotracker.get().clearGeneralProps();
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().setGeneralProps(props:{"key1":"name"});
GrowingTracker.get().removeGeneralProps(keys:["xxx", "key1"]);
GrowingTracker.get().clearGeneralProps();
```
</TabItem>
</Tabs>


### 11. 注册模块组件 
`registerComponent`<br/>
可通过该方法手动注册SDK需要的可配置模块组件（推荐在初始化通过 `Configuration` 初始化时注册）。
#### 参数说明
| 参数     | 参数类型           | 说明 |
| :------- | :----------------- | :--- |
| `module` | `LibraryGioModule` | 模块 |
| `config` | `Configuration` | 模块的配置类(可选参数) |
#### 示例

<Tabs
  groupId="sdk-type"
  defaultValue="autotracker"
  values={[
    {label: '无埋点', value: 'autotracker'},
    {label: '埋点', value: 'tracker'},
  ]
}>

<TabItem value="autotracker">

```dart
GrowingAutotracker.get().registerComponent(JsonLibraryModule());
```

</TabItem>
<TabItem value="tracker">

```dart
GrowingTracker.get().registerComponent(JsonLibraryModule());
```
</TabItem>
</Tabs>


### 12. 无埋点页面事件
Flutter的 Page事件不再基于 Router，而是用开发者通过 mixin 类 `GrowingPageStateMixin` 或者 `GrowingPageStatelessMixin` 来实现。

1. 在 `StatefulWidget` 中，可以将其 State 声明为 Page页面，如下：

```dart
class _HomeScreenState extends State<HomeScreen> with GrowingPageStateMixin {
  @override
  String get alias => "HomeScreen";

  @override
  Map<String, dynamic>? get attributes => {};
}
```

2. 在 `StatelessWidget` 中，直接将自己声明为 Page 页面，如下：

```dart
class SplashScreen extends StatelessWidget with GrowingPageStatelessMixin {
  @override
  String get alias => "SplashScreen";

  @override
  Map<String, dynamic>? get attributes => {};
}
```

alias 对应页面的名称，attributes为页面属性。

> 另外，可以直接在 Page 下调用 `trackCustomEvent` 方法，发送的自定义事件就会携带事件属性，如不需要则可以调用`GrowingAutotracker.get().trackCustomEvent`.
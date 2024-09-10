---
sidebar_position: 1
title: Flutter SDK 插件
---

Flutter SDK 插件时集成后，即可以使用SDK的埋点功能，若是需要无埋点功能，需要在集成插件后再做额外的页面配置才能使其生效。

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

* Flutter SDK 插件的更新日志，可参阅 [Release Notes](/docs/framework/flutter/index.md#版本记录)
* Flutter SDK 无埋点如何生效，请阅读 [Flutter 无埋点](/docs/framework/flutter/flutter%20autotrack)

:::

## Growingio Flutter SDK 插件集成

### 添加依赖

在 Flutter 项目的`pubspec.yaml`文件中 dependencies 里面添加 `growingio_flutter_plugin` 依赖。


```c
dependencies:
  growingio_flutter_plugin: '^4.2.0'
```


然后执行 `flutter pub get` 指令安装插件。

<details>
  <summary>点击查看 GrowingIO Flutter 插件和 SDK 版本的依赖关系</summary>

| Flutter 插件版本 |  Android SDK 版本范围   |  Apple SDK 版本范围  | HarmonyOS NEXT SDK 版本范围 |
| :-------------- | :----------------- | :------- | :-------------- |
| = v4.0.0 | >= v4.3.0 | >= v4.3.0 | - |
| = v4.1.0 | >= v4.3.0 | >= v4.3.2 | - |
| = v4.2.0 | >= v4.3.0 | >= v4.3.2 | >= v2.0.0 |

</details>

### Flutter 插件初始化

GrowingIO Flutter SDK 需要在 Flutter 端初始化 SDK。

:::info 原生+Flutter
若您的 Flutter 应用是混编应用，在进入 Flutter 页面之前已经在原生进行了原生 SDK 的初始化，您还应当在 Flutter 端再进行一次 Flutter SDK 的初始化，以使得插件桥接生效。<br/>
注意：原生端或 Flutter 端，以先初始化的配置项为主。<br/>
如果是 Android 平台且需要无埋点功能支持，还应当在 Android 配置中添加 [GrowingIO Gradle 插件](/docs/android/AGP7) 才能使原生无埋点生效。 
:::

#### Flutter 初始化

在 Flutter 端进行初始化，推荐将 SDK 的初始化代码放入 `main.dart` 的 `main` 中，代码示例如下：

```dart

void main() async {
  /// 代码中的 <ProjectId>、<DataSourceId>、<UrlScheme>请自行替换为自己项目的对应值。
  var option = AutotrackerConfiguration("<ProjectId>", "<DataSourceId>", "<UrlScheme>");
  option.dataCollectServerHost = "https://napi.growingio.com";
  option.debugEnabled = false;
  option.dataCollectionEnable = true;
  option.androidConfig = AndroidConfiguration(
      channel: "应用宝", androidIdEnabled: true, imeiEnabled: false, requireAppProcessesEnabled: false);
  
  /// 添加相应的模块
  option.addGioComponent(EncoderLibraryGioModule());

  /// 设置完配置后，调用该接口进行初始化
  GrowingAutotracker.startWithConfiguration(option);


  runApp(MyApp());
}
```

#### Flutter On HarmonyOS 配置上下文

如果您的 Flutter 应用需要在 HarmonyOS 平台运行，您还需要在项目中 FlutterAbility 子类的 `configureFlutterEngine(flutterEngine: FlutterEngine)` 方法中配置 HarmonyOS 插件上下文：

首先，定义一个包含上下文的插件类型 `AsGrowingAnalytics`：

```typescript
interface AsGrowingAnalytics extends FlutterPlugin {
  context: Context
}
```

其次，配置 HarmonyOS 插件上下文，注意配置代码需要在 `GeneratedPluginRegistrant.registerWith(flutterEngine)` 之后：

```typescript
configureFlutterEngine(flutterEngine: FlutterEngine) {
  super.configureFlutterEngine(flutterEngine)
  GeneratedPluginRegistrant.registerWith(flutterEngine)

  // 配置 HarmonyOS 插件上下文
  let plugins = flutterEngine.getPlugins()
  if (plugins && plugins.has('FlutterGrowingAutotrackerPlugin')) {
    let analytics = plugins.get('FlutterGrowingAutotrackerPlugin') as AsGrowingAnalytics
    analytics.context = this.context
  }
}
```

## 初始化配置说明

在 Flutter 初始化中会传入各式的参数，`AutotrackerConfiguration` 参数配置如下表所示：

| 配置项                   | 参数类型  | 是否必填 | 默认值  | 说明  | 版本 |
| :-----------------------| :------: | :------: | :------: | :------ | :------ |
| projectId             | String           |    是    | null  | 项目ID，每个应用对应唯一值 | -     |
| dataSourceId          | String           |    是    | null  | 应用的DataSourceId，唯一值        |  -  |
| urlScheme             | String           |    是    | null  | 应用特有的URLScheme，用于外部应用拉起应用，如圈选   | -          |
| dataCollectionServerHost  | String       |    否    | null  | 服务端部署后的 ServerHost     |  -  |
| debugEnabled              | bool         |    否    | false | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - |
| cellularDataLimit         | int          |    否    | 10    | 每天发送数据的流量限制，单位MB        | -  |
| dataUploadInterval        | int          |    否    | 15    | 数据发送的间隔，单位秒                | -          |
| sessionInterval           | int          |    否    | 30   | 会话后台留存时长，单位秒  |  - |
| dataCollectionEnabled     | bool         |    否    | true  | 是否采集数据               |  - |
| requestTimeout            | int          |    否    | 30  | 设置数据上报请求的超时时间，单位秒               |  - |
| dataValidityPeriod        | int          |    否    | 7  | 设置为上报数据在数据库的缓存时间，单位天               |  - |
| idMappingEnabled          | bool         |    否    | false  | 是否开启多用户身份上报               |  - |
| autotrackAllRoutePage     | bool         |    否    | true  | 设置是否发送 Route 页面上的Page事件              |  - |
| autotrackEnabled          | bool         |    否    | true  | 设置原生端是否打开无埋点功能               |  - |
| autotrackAllNativePage    | bool         |    否    | false  | 设置原生端是否自动发送Page事件            |  - |
| modules  | `Set<LibraryGioModule>`       |    否    | empty | 模块集成，具体请阅读下方的模块说明 | - |
| androidConfig  | `AndroidConfiguration`  |    否    | null | 用于配置Android设备上特有的一些属性 | - |
| iosConfig      | `IosConfiguration`      |    否    | null | 用于配置iOS设备上特有的一些属性 | - |

`AndroidConfiguration` 参数特有配置如下表所示
| 配置项                   | 参数类型  | 是否必填 | 默认值  | 说明  | 版本 |
| :-----------------------| :------: | :------: | :------: | :------ | :------ |
| channel                   | String       |    否    | null  | Android 应用的分发渠道     | -          |
| androidIdEnabled          | bool         |    否    | false  | 是否允许在 Android 设备上采集 AndroidId           |  - |
| imeiEnabled               | bool         |    否    | false  | 是否允许在 Android 设备上采集 imei          |  - |
| requireAppProcessesEnabled   | bool      |    否    | false  | 是否允许在 Android 设备上获取应用进程名称          |  - |

`IosConfiguration` 目前暂无特有配置。

### urlScheme 配置说明

在使用 GrowingIO SDK 的 Mobile Debugger 和圈选功能时，用于外部浏览器通过扫描二维码来拉起应用。

* [Android 端 URLScheme 配置说明](/docs/android/Introduce#添加url-scheme)
* [iOS 端 URLScheme 配置说明](/docs/ios/Introduce#步骤-4-添加-url-scheme-ios-平台)

### 模块配置

GrowingIO SDK 利用模块来实现SDK核心功能以外的额外功能，在 Flutter SDK 插件中，可以通过在 modules 传入模块声明来开启相应的功能。

目前 Flutter SDK 可启用的模块功能包括：

#### 广告功能

```dart
  option.addGioComponent(AdsLibraryGioModule(
      config: AdsConfig(
          readClipBoardEnable: true,
          asaEnabled: true,
          deepLinkHost: "https://ads-uat.growingio.cn",
          deepLinkCallback: (Map params, int error, int time) {
            print("deeplink params: $params");
          })));

```

广告模块包括激活事件和深度链接，能帮助客户提供广告，活动的引导跳转和下载。

:::info
什么是广告模块，请参考原生端说明：

* [Android 已默认引入广告模块](/docs/android/modules/advert%20module)
* [iOS 端 需引入广告模块](/docs/ios/modules/Ads%20Module)


:::

#### 加密模块

```dart
option.addGioComponent(EncoderLibraryGioModule());
```

加密模块用于数据网络上传数据的加密。

#### Json 模块

```dart
option.addGioComponent(JsonLibraryModule());
```

Json 数据模块将会使用 Json 格式保存和上传事件数据。

## API说明


```dart
GrowingAutotracker.getContext().setDataCollectionEnabled(true)
GrowingAutotracker.getContext().setLoginUserId(userId: "cpacm",userKey: "name")
GrowingAutotracker.getContext().cleanLoginUserId()
GrowingAutotracker.getContext().setLoginUserAttributes(attributes: {"sex":"female"});
GrowingAutotracker.getContext().setLocation(latitude: 20.11,longitude: 20.11)
GrowingAutotracker.getContext().cleanLocation()
GrowingAutotracker.getContext().getDeviceId()
GrowingAutotracker.getContext().trackCustomEvent(eventName: "eventName", attributes: {"age":"18"})
String? timerId =await GrowingAutotracker.getContext().trackTimerStart(eventName: "custom");
GrowingAutotracker.getContext().trackTimerPause(timerId: timerId!);
GrowingAutotracker.getContext().trackTimerResume(timerId: timerId);
GrowingAutotracker.getContext().trackTimerEnd(timerId: timerId,attributes: {});
GrowingAutotracker.getContext().removeTimer(timerId: timerId);
GrowingAutotracker.getContext().clearTrackTimer();
GrowingAutotracker.getContext().setGeneralProps(props:{});
GrowingAutotracker.getContext().removeGeneralProps(keys:["col1 row1", "key1"]);
GrowingAutotracker.getContext().clearGeneralProps();

GrowingAutotracker.getContext().registerComponent(module);
```

### 1. 数据采集开关

`setDataCollectionEnabled`<br/>
打开或关闭数据采集

#### 参数说明

| 参数      | 参数类型  | 说明                                                 |
| :-------- | :-------- | :--------------------------------------------------- |
| `enabled` | `boolean` | `true`打开数据采集，`false`关闭数据采集，默认 `true` |

#### 示例

```dart
GrowingAutotracker.getContext().setDataCollectionEnabled(true);
```


### 2. 设置登录用户ID

`setLoginUserId`<br/>
当用户登录之后调用，设置登录用户ID
:::info
* 如果您的App每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级App版本后初次访问时重新调用setLoginUserId方法

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **同时在初始化 SDK 时设置`idMappingEnabled`为`true`**

:::

#### 参数说明

| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | `String` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `String` | 适用于ID-MAPPING,可设置 `userId` 的类型,可选填                  |

#### 示例

```dart
GrowingAutotracker.getContext().setLoginUserId(userId: "cpacm",userKey: "name");
```

### 3. 清除登录用户ID

`cleanLoginUserId`<br/>
当用户登出之后调用，清除已经设置的登录用户ID。

#### 示例

```dart
GrowingAutotracker.getContext().cleanLoginUserId();
```

### 4. 设置用户的地理位置

`setLocation`<br/>
设置用户当前的地理位置，基于WGS-84坐标

#### 参数说明

| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | `double` | 地理坐标点纬度 |
| `longitude` | `double` | 地理坐标点经度 |

#### 示例

```dart
GrowingAutotracker.getContext().setLocation(latitude: 20.11,longitude: 20.11);
```

### 5. 清除用户的地理位置

`cleanLocation`<br/>
清除用户当前的地理位置

#### 示例

```dart
GrowingAutotracker.getContext().cleanLocation();
```

### 6. 设置登录用户属性

`setLoginUserAttributes`<br/>
发送登录用户属性事件，用于用户信息相关分析；
在添加发送用户属性事件代码之前，需在CDP平台用户管理界面创建用户属性。

#### 参数说明

| 参数         | 参数类型              | 说明         |
| :----------- | :-------------------- | :----------- |
| `attributes` | `Map<String, String>` | 用户属性信息 |

#### 示例


```dart
GrowingAutotracker.getContext().setLoginUserAttributes(attributes: {"sex":"female"});
```

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

```dart
GrowingAutotracker.getContext().trackCustomEvent(eventName: "custom",attributes: {"item":"exp"});
```

### 8. 获取设备ID

`getDeviceId`<br/>
获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备。
如果没有初始化SDK 或者关闭采集开关可能返回值为null，且可能有IO操作。

#### 示例

```dart
GrowingAutotracker.getContext().getDeviceId();
```


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

```dart
String? timerId =await GrowingAutotracker.getContext().trackTimerStart(eventName: "custom");
GrowingAutotracker.getContext().trackTimerPause(timerId: timerId!);
GrowingAutotracker.getContext().trackTimerResume(timerId: timerId);
GrowingAutotracker.getContext().trackTimerEnd(timerId: timerId,attributes: {});
GrowingAutotracker.getContext().removeTimer(timerId: timerId);
GrowingAutotracker.getContext().clearTrackTimer();
```


### 10. 通用属性

`setGeneralProps({required Map<String, dynamic> props})`<br/>
为所有的自定义事件（CustomEvent）添加通用属性。

`removeGeneralProps({required List<String> keys})`<br/>
根据Key值移除已经设置的属性，如不存在则不影响。

`clearGeneralProps()`<br/>
清除所有已经设置的通用属性。


```dart
GrowingAutotracker.getContext().setGeneralProps(props:{"key1":"name"});
GrowingAutotracker.getContext().removeGeneralProps(keys:["xxx", "key1"]);
GrowingAutotracker.getContext().clearGeneralProps();
```

### 11. 注册模块组件

`registerComponent`<br/>
可通过该方法手动注册SDK需要的可配置模块组件（推荐在初始化通过 `Configuration` 初始化时注册）。

#### 参数说明

| 参数     | 参数类型           | 说明 |
| :------- | :----------------- | :--- |
| `module` | `LibraryGioModule` | 模块 |
| `config` | `Configuration` | 模块的配置类(可选参数) |

#### 示例

```dart
GrowingAutotracker.getContext().registerComponent(JsonLibraryModule());
```

### 12. 无埋点页面事件

在配置了 Flutter 无埋点既可以通过路由监听器和替换Route类自动实现，也可以通过 mixin 类 `GrowingPageStateMixin` 或者 `GrowingPageStatelessMixin` 来使用代码实现。

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

> 另外，可以直接在 Page 下调用 `trackCustomEvent` 方法，发送的自定义事件就会携带事件属性，如不需要则可以调用`GrowingAutotracker.getContext().trackCustomEvent`.


### 13. 无埋点点击事件

如是想要自动获取无埋点点击事件，需要为整个 App 添加事件监听器，如下所示：

```dart
import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

void main() async {
  runApp(const GrowingWidget(child:const MyApp()));
}
```

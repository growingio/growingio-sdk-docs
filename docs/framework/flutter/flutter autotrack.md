---
sidebar_position: 2
title: Flutter 无埋点
---

新版本 Flutter 无埋点的功能不再通过修改 Flutter 源代码的方式进行，而是通过继承对应的功能来实现相应的功能。在无埋点中需要能够自动识别 Page 页面发送页面事件和获取点击事件发送点击事件，基于上述规则，GrowingIO Flutter Plugin 针对无埋点功能实现了 [基于 Route 的页面事件](#基于-route-的页面事件) 和 [基于页面的点击事件](#基于页面的无埋点点击事件)



## 基于 Route 的页面事件

为了能够识别 Flutter 中页面的进入与退出，我们需要对 Flutter 系统的 `navigator` 进行监听。一般是在 `MaterialApp` 下的`navigatorObservers`添加。

```dart

import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

MaterialApp(
  title: 'Flutter Project',

  // 添加 Growingio 路由监听器 GrowingNavigatorObserver
  navigatorObservers: [GrowingNavigatorObserver()],

  builder: (context, child) {}
)
```

## 基于页面的无埋点点击事件

为了能够全局获取到点击事件的产生，需要为整个 App 添加事件监听器，如下所示：

```dart
import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

void main() async {
  runApp(const GrowingWidget(child:const MyApp()));
}
```

请注意以下几个问题：
1. 当前 GrowingIO Flutter SDK 只监听 onTap 事件，未对滑动的动作进行监听，所以比如像 `Slider`,`ProgressBar`之类控件的滑动埋点事件无法自动生成，请客户手动进行埋点；
2. 为了保证点击事件捕获的准确性，只会在已经声明为页面（即可发送页面事件）的界面做无埋点点击事件捕获，非页面的点击无法生成无埋点点击事件。



## 关于 Flutter Route 无埋点页面的说明

为了获取Route中的页面信息，GrowingIO Flutter SDK扩展了Route的实现，方便SDK计算页面的属性和路径，所以需要在集成时对Route做额外处理，下面列举了几种比较常见且推荐的Route实现方式。

### 示例一：Route
对应方法为 `Navigator.push(context, route)`。
该示例常见做法是为每一个界面 Widget 创建一个 Route 对象，跳转时直接传入 Route 值即可。 

```dart
class AppNavigator {
  static Route page1 = MaterialPageRoute(builder: (context) => Page1Screen(), settings: const RouteSettings(name: "page1"));
}
```

在SDK中需要将 `MaterialPageRoute` 替换为 `GrowingMaterialPageRoute`，来帮助 GrowingIO Flutter SDK获取到页面信息，如下所示

```dart
import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

class AppNavigator {
  static Route page1 = GrowingMaterialPageRoute(builder: (context) => Page1Screen(), settings: const RouteSettings(name: "page1"));
  static Route page2 = GrowingMaterialPageRoute(builder: (context) => Page2Screen(), settings: const RouteSettings(name: "page2"));
  // ...
}
``` 

同样可做替换的还有 `CupertinoPageRoute` => `GrowingCupertinoPageRoute`.

最后路由跳转方法调用依旧保持不变。
```dart
Navigator.of(context).push(AppNavigator.page1);
```

> 注意，在声明 Route 的时候，请传入 `RouteSettings` 以方便我们定义页面的名称并作为页面事件的 `alias`。

### 示例二：Route Name
对应方法为 `Navigator.pushNamed(context, '/page');`
该示例通常会为每一个路由定义一个路径名称，然后跳转时直接调用名称即可。

同样的可以使用 `GrowingMaterialPageRoute` 替换原来的 `MaterialPageRoute` 或者 `GrowingCupertinoPageRoute` 替换原来的 `CupertinoPageRoute`。

举例说明
```dart
import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

class AppNavigator {
  static const String home = '/home';
  static const String page = '/home/page';
  static const String category = '/category';

  static Route onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case category:
        return GrowingMaterialPageRoute(
            builder: (context) => CategoryScreen(),
            settings: const RouteSettings(name: "category"));
      case page:
        return GrowingMaterialPageRoute(
            builder: (context) => PageScreen(), settings: const RouteSettings(name: "page"));
      default:
        return GrowingMaterialPageRoute(
            builder: (context) => HomeScreen(), settings: const RouteSettings(name: "home"));
    }
  }
}
```

RouteName的注册以及调用保持不变。

```dart
/// 在 materialApp 中注册
MaterialApp(
  title: 'Flutter',
  navigatorObservers: [GrowingioNavigatorObserver()],

  /// 注册 Route Name 声明
  onGenerateRoute: AppNavigator.onGenerateRoute,

  builder: (context, child) {}
)


/// 调用
Navigator.pushNamed(context, AppNavigator.home);
```

> 注意，在声明 Route 的时候，请传入 `RouteSettings` 以方便我们定义页面的名称并作为页面事件的 `alias`。

### 示例三：自定义Route
若客户在应用中已经自定义了 Route 并扩展了其功能，无法直接替换，这时候可以使用 `GrowingPageRouteMixin` 类进行扩展。

比如我们自定义一个 `CustomRoute` 类来增加 Route 的功能，其实现如下所示：
```dart
import 'package:growingio_flutter_plugin/growingio_flutter_plugin.dart';

class CustomRoute extends PageRouteBuilder with GrowingPageRouteMixin {
  MaterialPageRoute? route;
  CustomRoute({required this.page, settings})
      : super(
          settings: settings,
          pageBuilder: (_, __, ___) => page,
          transitionsBuilder: (_, animation, __, child) => FadeTransition(
            opacity: animation,
            child: child,
          ),
        );

  final Widget page;
}

```

> 请注意，目前 `GrowingPageRouteMixin` 只能对继承了 `PageRoute`类的自定义类进行扩展。

### 示例四：面对Dialog,BottomSheet等弹出框
在 GrowingIO Flutter SDK 中也将Dialog和BottomSheet视为一个页面，通常我们打开一个弹出框会使用 `showDialog` 或 `showModalBottomSheet` 之类的快速方法。
为了更好识别这些页面我们需要传入一个 `GrowingWidgetBuilder` 作为控件的最外层将该 Dialog或者 BottomSheet 视为一个页面。

```dart
/// 比如显示一个 BottomSheet。
showModalBottomSheet<void>(
  context: context,
  builder: (context) {
    return GrowingWidgetBuilder(
        route: "bottomsheet",
        child: <Your Widget>
      );
  },
);
```

> 目前 GrowingIO Flutter SDK 不支持 DropDown，MenuAnchor下的弹窗，这部分的无埋点事件需要客户自行调用SDK `GrowingAutotracker.getContext().trackCustomEvent(eventName: "eventName");` 接口来进行手动埋点。

### 示例五: 非 Route 页面

若是客户希望将一个 Widget 标记为页面，则可以通过 mixin 类 `GrowingPageStateMixin` 或者 `GrowingPageStatelessMixin` 来手动扩展实现。

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

> 若一个 Widget 既是 Route 界面又同时扩展了 `GrowingPageStateMixin` 或者 `GrowingPageStatelessMixin` ，该界面的 **alias** 将优先取扩展下返回的 alias 值。
> 同样的，如果想要对一个页面添加页面属性，也可以通过该扩展实现。




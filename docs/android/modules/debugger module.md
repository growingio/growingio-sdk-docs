---
sidebar_position: 7
title: Debugger 模块
---

GrowingIO SDK 支持的 Mobile Debugger 工具，可对应用中集成的SDK事件发送进行调试和校验。

在唤起Debugger的APP后，该APP采集的行为数据以及当前页面截图就会出现在网页上，测试同学可以根据数据看数据的采集以及发送情况，对数据进行测试。

:::info
当你集成SDK时，Debugger模块会默认集成到SDK中。

若不想要在生产环境中集成 Debugger 模块，可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20android%20sdk)，自定义SDK模块。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| debugger  | 自动集成 | `Debugger` | `WebService` | - |

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
	implementation 'com.growingio.android:debugger:4.4.3'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.4.3')

  implementation 'com.growingio.android:debugger'
}
```

</TabItem>
</Tabs>

### 使用方式

登录 GrowingIO CDP 管理平台（一般来说，cdp都会配有数据管理），在平台管理--->客户数据平台--->数据校验--->Mobile Debugger 进入Mobile Debugger启动页。
具体操作参考 [Mobile Debugger](/knowledge/debugverify/mobiledebugger) 即可。

### 在埋点中使用 MobileDebugger

由于浏览器有时候在应用进程已经运行的情况下打开App，会从 `onNewIntent` 方法重新进入Activity，所以埋点 SDK 需要在启动的Activity中额外添加 ‘GrowingTracker.get().onActivityNewIntent(this,intent)’,如下所示：

```kotlin
override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    GrowingTracker.get().onActivityNewIntent(this, intent)
}
```

> 无埋点SDK中会在插件中处理这个逻辑，所以无须做此处理。

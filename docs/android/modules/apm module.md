---
sidebar_position: 9
title: 性能监控模块
---

APM (Application Performance Management) 即应用性能管理，属于IT运维管理（ITOM)范畴。主要是针对企业关键业务的IT应用性能和用户体验的监测、优化，提高企业IT应用的可靠性和质量，保证用户得到良好的服务，降低IT总拥有成本(TCO)。

应用性能分析为企业提供针对应用服务的品质、性能以及自定义埋点的 APM 服务。基于埋点事件定义及海量数据的聚合分析，GIO可帮助客户发现多类异常问题，并及时报警，做分配处理，同时平台提供了丰富的归因能力，包括且不限于异常分析、事件分析、自定义上报、日志查询等，结合灵活的报表能力可了解各类指标的趋势变化。


GrowingIO 性能监控模块目前提供了 App 崩溃分析，应用启动时间，页面启动时间分析的功能。


--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| apm  | 需要手动集成 | `EventApm` | `Void` | >=4.0.0 |



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
	implementation 'com.growingio.android:apm:4.5.0'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.5.0')

  implementation 'com.growingio.android:apm'
}
```

</TabItem>
</Tabs>

### APM性能相关配置说明

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明 
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `setActivityLifecycleTracing` | `Boolean`       | 否      | `true`  | 是否监测 `Activity` 界面的启动时长  |
| `setFragmentXLifecycleTracing`  | `Boolean` | 否      | `true`   | 是否监测 `androidx.fragment.app.Fragment` 界面的启动时长 |
| `setFragmentSupportLifecycleTracing`  | `Boolean` | 否      | `false`   | 是否监测 `android.support.v4.app.Fragment` 界面的启动时长 |
| `setFragmentSystemLifecycleTracing`  | `Boolean` | 否      | `false`   | 是否监测 `android.app.Fragment` 界面的启动时长 |
| `setUncaughtException`            | `Boolean` | 否      | `true`   | 是否捕获 Java 异常       |
| `setPrintUncaughtException`            | `Boolean` | 否      | `false`   | 是否在log中打印捕获的 Java 异常       |


```java
ApmConfig config = new ApmConfig();
config.setActivityLifecycleTracing(true)
        .setFragmentXLifecycleTracing(true)
        .setFragmentSupportLifecycleTracing(false)
        .setFragmentSystemLifecycleTracing(false)
        .setUncaughtException(true)
        .setPrintUncaughtException(false);
```

### 使用方式

```java
// 初始化SDK时，将 APM 模块与配置注册到SDK中 
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        // ...
        .addPreloadComponent(new ApmLibraryGioModule(), config)

);
```


### 示例
配置完成后会通过 Custom 事件发送数据，比如

```json

    {
      "dataSourceId": "939c0b26233d3ed1",
      "eventType": "CUSTOM",
      // ...
      "attributes": {
        "page_load_duration": "60",
        "warm_reboot_time": "60",
        "page_name": "MainActivity",
        "warm_reboot": "true"
      },
      "eventName": "apm_app_launch"
    }
```
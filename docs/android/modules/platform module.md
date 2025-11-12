---
sidebar_position: 14
title: 系统信息模块
---

GrowingIO SDK 默认系统为Android，通过系统信息模块可以进一步区分当前系统（目前仅支持Harmony）。

在新的更新版本（4.4.3）中添加了新的设备类型(deviceType)识别：TV 和 FOLD，并且在 FOLD 类型设备下分辨率会及时刷新。

:::info
客户可以使用自定义模块的方式扩展SDK的系统信息识别方式，作用于系统和系统版本。

可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20android%20sdk)
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| platform  | 需要手动集成 |`PlatformHelper` | `PlatformInfo` | 4.1.0 |

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
	implementation 'com.growingio.android:platform:4.5.2'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.5.2')

  implementation 'com.growingio.android:platform'
}
```

</TabItem>
</Tabs>

### 模块配置
在系统信息模块中提供了配置可以控制模块所需要的功能。


| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明 
| :-------------------------   | :------         | :----:  |:------  |:------| 
| setHarmonyPlatformEnabled | _Boolean_       | 否      | `true`  | 是否区分当前系统为Harmony  |
| setDeviceTypeCheckEnabled  | _Boolean_ | 否      |  `true`  | 是否添加新的设备类型识别：TV 和 FOLD    |

```java
PlatformConfig config = new PlatformConfig();
config.setHarmonyPlatformEnabled(true)
    .setDeviceTypeCheckEnabled(true)
);
```

### 使用方式

```java
// 初始化SDK时, 调用方法注册系统信息模块
GrowingAutotracker.startWithConfiguration(this,
                new AutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new PlatformLibraryGioModule(), config));
```


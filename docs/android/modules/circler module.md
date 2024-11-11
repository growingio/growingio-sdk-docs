---
sidebar_position: 6
title: 圈选模块
---

圈选，是利用GrowingIO进行无埋点数据分析之前的数据定义过程。您需要根据业务需求，将需要分析的关键事件通过可视化地方式在您的产品界面中定义出来，这个过程，就是圈选。

圈选的教程请参考 [产品教程-无埋点事件](https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition)

:::info
只有在无埋点SDK功能打开时有效。

若不想要在生产环境中集成圈选模块，可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20android%20sdk)，自定义SDK模块。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| circler  | 自动集成 | `Circler` | `WebService` | - |

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
	implementation 'com.growingio.android:circler:4.3.2'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.3.2')

  implementation 'com.growingio.android:circler'
}
```

</TabItem>
</Tabs>

### 使用方式

需要在 ”数据管理 > 无埋点事件” 中点击 “新建无埋点事件 > App应用” 进入App唤醒页面。
后续操作参考 [APP端数据定义](https://docs.growingio.com/op-help/docs/4.0/product-manual/user-behavior-analytics/data-management/data-management/auto-track/app-data-definition) 即可。

---
slug: /android/upgrade
title: 升级指南
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍

由于我们长期大量地为各种客户开发适配定制化开发的产品和SDK，这导致我们维护起来变得异常艰难。在我们决定重做无埋点并升级至4.0版本时，梳理了大量的需求和问题，将一些功能点作为标品功能。并且抛弃了一些过于随意语义化的api和配置项名称，与其他端进行了统一。

本文将介绍如何从不同的版本安全无损地升级至 Android SDK 4.0。

相关功能与协议均遵循新版本定义，如埋点事件不再主动关联上报page相关字段(path、ptm等字段)，参考[埋点事件测量协议](/knowledge/measurement#埋点事件custom)

## 关于 CDP

在4.0新版本，CDP私有部署将会和SaaS一起合并至SDK中，原有的集成逻辑会做相应的更改，如：

* 引入SDK `implementation 'com.growingio.android:autotracker-cdp:4.4.1'` 变更为 `implementation 'com.growingio.android:autotracker:4.4.1'`；
* 初始化配置由 `CdpAutotrackConfiguration` 变更为 `AutotrackConfiguration`。

## 关于老SaaS(2.0版本)
为了能够快速的将集成我们老SaaS(2.0版本)的项目迁移到新SaaS(4.0版本)中，可以集成我们的 `autotracker-saas` 库，该库兼容了大部分2.0版本SaaS的API接口，并且能够无缝调用4.0SDK的所有接口，可以作为过渡的手段。

详情API比对可以参考[2.0 API 对照](/docs/android/upgrade/Api2)文档。

### 如何集成
请参考[如何集成](/docs/android/Introduce)的文档进行集成，在集成SDK的步骤中引入 `autotracker-saas`。

<Tabs
  groupId="code-language"
  defaultValue="bom"
  values={[
    {label: 'BoM', value: 'bom'},
    {label: '依赖', value: 'common'},
  ]
}>
<TabItem value="bom">

```groovy
apply plugin: 'com.android.application'

dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.4.1')

  //GrowingIO 无埋点 SDK 适配版
  implementation 'com.growingio.android:autotracker-saas'
}
```

</TabItem>

<TabItem value="common">

```groovy
apply plugin: 'com.android.application'

dependencies {
    implementation 'com.growingio.android:autotracker-saas:4.4.1'
}
```

</TabItem>
</Tabs>


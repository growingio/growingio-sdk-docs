---
sidebar_position: 1
title: Saas升级指南
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 平台版本确认

首先请先确认您使用的平台版本，Web SDK 4.0 <font size="4" color="#FC5F3A"><b>仅支持 4.2.x 及以上</b></font>版本的分析云。

如果您使用的平台版本是 **19-25的通用大版本** ，请[参考文档](https://docs.growingio.com/v3/developer-manual/sdkintegrated/web-js-sdk/)使用 **2.x 版本SDK**，或联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，但版本号低于4.2.x** ，请[参考文档]使用 **3.8 版本SDK**，或联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号高于等于4.2.x** ，您可以继续参考下文进行升级操作。

## SDK版本确认

如何确认您使用的SDK版本？

在您的站点（或浏览器控制台）通过调用 <font size="4"><b>`window.vds`</b></font> 查看。

## SDK升级

请选择您当前使用的SDK版本查看升级步骤。

<Tabs
  groupId="1"
  defaultValue="2.x版本"
  values={[
    {label: '2.x版本', value: '2.x版本'},
    {label: '3.8.x版本', value: '3.8.x版本'},
  ]
}>
<TabItem value="2.x版本">

下面将正式介绍SDK从2.x版本升级到4.0版本的步骤。

### 1、修改集成代码

如果您使用标准CDN集成方式（即直接复制原2.0文档的集成代码方式）进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 2、检查初始化配置项

移除已废弃的配置项：`imp`、`manualImp`、`impAttrSeparator`。未使用则忽略。如果您想禁用半自动采集浏览事件，请**按需集成SDK**，**不要注册**半自动采集浏览插件即可。

其他配置项请[参考文档](/docs/webjs/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 3、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

* 移除**`send`**方法调用。4.0版本已不再需要它，SDK在初始化完成后且`dataCollect`开启状态下自动上报数据。
* 移除**`setConfig`、`config`**方法调用。SDK仅支持`init`方法进行初始化和初始化配置。如需在运行过程中动态修改配置，请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 移除**`page.set`**方法调用。4.0版本已不再支持它，如需使用页面级变量，请将变量加入页面参数query中，作为页面参数的一部分上报，平台会自动解析处理。未使用则忽略。
* 移除**`evar.set`**方法调用。如需使用转化变量，请将转化变量放在埋点事件属性（track）中进行上报。未使用则忽略。
* 移除**`visitor.set`**方法调用。如需使用访问用户变量，请将访问用户变量放在用户属性（setUserAttributes）中进行上报。未使用则忽略。
* 重命名替换**`people.set`**为**`setUserAttributes`**，调用方式不变。未使用则忽略。
* 修改**`getVisitUserId`**为**`getDeviceId`**，调用方式变更，请[参考文档](/docs/webjs/commonlyApi#2获取访问用户idgetdeviceid)修改使用方式。未使用则忽略。

### 4、检查半自动采集浏览事件（曝光事件）

请[参考文档](/docs/webjs/plugins/impressionTracking)检查半自动采集浏览事件的定义方式是否符合新版本要求。<br/>**不再支持自定义分隔符，仅支持JSON格式数据或单字段定义的方式**。

### 5、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#参数限制)，如有超出限制或超出限制的可能，请调整业务逻辑。

</TabItem>
<TabItem value="3.8.x版本">

下面将正式介绍SDK从3.8版本升级到4.0版本的步骤。

### 1、修改集成代码

如果您使用标准CDN集成或NPM集成方式进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 2、检查初始化配置项

* 移除已废弃的配置项：`autotrack`、`compress`。如果您想禁用无埋点事件和数据加密，请**按需集成SDK**，**不要注册**对应插件即可。未使用则忽略。
* 重命名替换**`enableIdMapping`**为**`idMapping`**。未使用则忽略。

其他配置项请[参考文档](/docs/webjs/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 3、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#其他)，如有超出限制或超出限制的可能，请调整业务逻辑。
</TabItem>
</Tabs>

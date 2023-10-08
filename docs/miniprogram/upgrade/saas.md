---
sidebar_position: 1
title: Saas升级指南
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 平台版本确认

首先请先确认您使用的平台版本，小程序SDK 4.0 <font size="4" color="#FC5F3A"><b>仅支持 4.2.0 及以上</b></font>版本的分析云。

如果您使用的平台版本是 **GrowingIO官网** ，即使用 **3.0-3.7.x 版本SDK**，或联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，但版本号低于4.2.0** ，即使用 **3.8 版本SDK**，或联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号大于等于4.2.0** ，您可以继续参考下文进行升级操作。

如果您使用的平台版本不在上述范围内，请咨询我们的技术支持。

## SDK版本确认

如何确认您使用的SDK版本？

在SDK文件中全局搜索`sdkVer="`或`sdkVersion="`，查看双引号后面的版本号。

## SDK升级

请选择您当前使用的SDK版本查看升级步骤。

<Tabs
  groupId="1"
  defaultValue="3.0-3.7.x版本"
  values={[
    {label: '3.0-3.7.x版本', value: '3.0-3.7.x版本'},
    {label: '3.8.x版本', value: '3.8.x版本'},
  ]
}>
<TabItem value="3.0-3.7.x版本">

下面将正式介绍SDK从3.0-3.7.x版本升级到4.0版本的步骤。

### 1、确认开发方式

在4.0版本中，我们放弃了对**`Wepy`、`mpvue`、`Chameleon`**框架的支持，因为他们已经过时或被开发者放弃。如果您使用了以上框架，请尝试迁移小程序的框架。

### 2、修改集成代码

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

如果您使用框架（uniapp、taro）开发小程序，可参考使用下载SDK至本地项目集成或使用最新支持的npm集成方式。[参考文档](/docs/miniprogram/integration/wechat)

**<font color="#FC5F3A">注意：</font>**

&nbsp;&nbsp;1）如果您是**阿里(支付宝)小程序**，请[参考文档](/docs/miniprogram/integration/alipay)进行重新集成。恢复对`App({})`、`Page({})`和`Component({})`的原生写法。示例：

```js
App($global.trackApp({ ... }))
// 修改回原始写法 ↓↓↓
App({ ... });
​
$global.GioPage({ ... });
// 修改回原始写法 ↓↓↓
Page({ ... });
​
$global.GioComponent({ ... });
// 修改回原始写法 ↓↓↓
Component({ ... });
```

&nbsp;&nbsp;2）新建`gioConfig`文件并使用`setConfig`初始化的方式不再被支持，请[参考文档](/docs/miniprogram/integration/wechat)重新集成。

### 3、检查初始化配置项

以下步骤仅列出需要改动的点，没有列出的初始化配置项即为自动兼容无需更改。

* 1）移除配置项**`getLocation`**。微信小程序已经调整获取位置信息的权限，因此被废弃。如需上报位置信息，请参考`setLocation`方法。[参考文档](/docs/miniprogram/commonlyApi#8地理位置setlocation)
* 2）移除配置项**`usePlugin`**。SDK会自动识别插件内容，因此被废弃。
* 3）移除配置项**`comAsPage`**。SDK会自动识别Component写的页面，因此被废弃。
* 4）移除配置项**`autotrack`**。无埋点相关逻辑已改造拆分为插件，不集成插件即关闭无埋点功能。
* 5）移除配置项**`enableEventStore`**。为了老版本SDK适配弹窗逻辑加的配置，新版已改造该模块，因此被废弃。
* 6）使用**`uniapp`**开发的小程序，初始化配置项对应的传参有变化，请参考集成文档初始化部分修改实例传参。(移除配置项**`vue`**，改为`uniVue`)
* 7）使用**`taro`**开发的小程序，初始化配置项对应的传参有变化，请参考集成文档初始化部分修改实例传参。(例如taro3vue开发时需同时传参两个实例)

其他配置项请[参考文档](/docs/miniprogram/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 4、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

* 1）移除**`setConfig`、`config`**方法调用。SDK仅支持`init`方法进行初始化和初始化配置。如需在运行过程中动态修改配置，请使用 `setOption` [参考文档](/docs/miniprogram/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 2）移除**`getLocation`**方法调用。请使用`setLocation`方法。[参考文档](/docs/miniprogram/commonlyApi#8地理位置setlocation)未使用则忽略。
* 3）移除**`collectImp`**方法调用。加载半自动埋点浏览插件后，SDK会在页面加载完成时自动完成监听注册的操作，无需再手动注册。
* 4）移除**`setEvar`**方法调用。如需使用转化变量，请将转化变量放在埋点事件属性（track）中进行上报。未使用则忽略。
* 5）移除**`setPage`**方法调用。如需使用页面级变量，请将变量加入页面参数query中，作为页面参数的一部分上报，平台会自动解析处理。如需使用页面访问变量，请使用`setPageAttributes`[参考文档](/docs/miniprogram/commonlyApi#12设置页面属性setpageattributes)。未使用则忽略。

> 请注意两者的区别:<br/>
> \* 以往的`setPage`对应的是当前页面所有事件的事件属性；对应现在的改动则是将变量放入页面参数query中的方式，效果一致。<br/>
> \* `setPageAttributes`对应的只有页面访问事件的属性，并不会对页面中其他事件生效。
> \* 如果您需要对页面中的所有埋点事件添加属性，请使用`setGeneralProps`[参考文档](/docs/miniprogram/commonlyApi#10设置埋点通用属性setgeneralprops)。

* 6）移除**`setVisitor`**方法调用。如需使用访问用户变量，请将访问用户变量放在用户属性（setUserAttributes）中进行上报。未使用则忽略。
* 7）重命名替换**`setUser`**为**`setUserAttributes`**，调用方式不变。未使用则忽略。

其他api调用请[参考文档](/docs/miniprogram/commonlyApi)使用，如果您不确定是否需要调用api，请咨询我们的技术支持。

### 5、检查半自动采集浏览事件（曝光事件）

请[参考文档](/docs/miniprogram/plugins/impressionTracking)检查半自动采集浏览事件的定义方式是否符合新版本要求。**支持JSON格式数据或单字段定义的方式**。未使用则忽略。

### 6、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/miniprogram/commonlyApi#object参数限制)，如有超出限制或超出限制的可能，请调整业务逻辑。

</TabItem>
<TabItem value="3.8.x版本">

下面将正式介绍SDK从3.8版本升级到4.0版本的步骤。

### 1、确认开发方式

在4.0版本中，我们放弃了对**`Wepy`、`mpvue`、`Chameleon`、`Remax`**框架的支持，因为他们已经过时或被开发者放弃。如果您使用了以上框架，请尝试迁移小程序的框架。

### 2、修改集成代码

如果您使用标准CDN集成或NPM集成方式进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 3、检查初始化配置项

* 移除已废弃的配置项：`autotrack`、`compress`。如果您想禁用无埋点事件和数据加密，请**按需集成SDK**，**不要注册**对应插件即可。未使用则忽略。

其他配置项请[参考文档](/docs/miniprogram/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 4、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/miniprogram/commonlyApi#object参数限制)，如有超出限制或超出限制的可能，请调整业务逻辑。
</TabItem>
</Tabs>

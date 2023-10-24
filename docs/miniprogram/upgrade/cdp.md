---
sidebar_position: 2
title: CDP升级指南
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 平台版本确认

首先请先确认您使用的平台版本，小程序SDK 4.0 <font size="4" color="#FC5F3A"><b>仅支持 4.2.0 及以上</b></font>版本的分析云。

如果您使用的OP平台版本是 **13.6版本** ，即使用 **0.6.x-1.2 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的OP平台版本是 **2.0-2.11.x 或 4.0-4.2.0以下（不含）** ，即使用 **3.0-3.8.x 版本SDK**，或联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号高于等于4.2.0** ，您可以继续参考下文进行升级操作。

如果您使用的平台版本不在上述范围内，请咨询我们的技术支持。

## SDK版本确认

如何确认您使用的SDK版本？

在SDK文件中全局搜索**`sdkVer="`或`sdkVersion="`**，查看双引号后面的版本号。

## SDK升级

请选择您当前使用的SDK版本查看升级步骤。

<Tabs
  groupId="1"
  defaultValue="0.6.x-3.3.x版本"
  values={[
    {label: '0.6.x-3.3.x版本', value: '0.6.x-3.3.x版本'},
    {label: '3.8.x版本', value: '3.8.x版本'},
  ]
}>
<TabItem value="0.6.x-3.3.x版本">

下面将正式介绍SDK从0.6.x-3.3.x版本升级到4.0版本的步骤。

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

1. 移除已废弃配置项**`getLocation`**。微信小程序已经调整获取位置信息的权限，因此被废弃。如需上报位置信息，请参考`setLocation`方法。[参考文档](/docs/miniprogram/commonlyApi#8地理位置setlocation)
2. 移除已废弃配置项**`usePlugin`**。SDK会自动识别插件内容，因此被废弃。
3. 移除已废弃配置项**`comAsPage`**。SDK会自动识别Component写的页面，因此被废弃。
4. 移除已废弃配置项**`autotrack`**。无埋点相关逻辑已改造拆分为插件，不集成插件即关闭无埋点功能。
5. 移除已废弃配置项**`compress`**。无埋点相关逻辑已改造拆分为插件，不集成插件即关闭无埋点功能。
6. 移除已废弃配置项：`scheme`、`host`。添加**`serverUrl`**，并在serverUrl中填写完整的协议头+地址（例：`https://api.growingio.com`）。
7. 使用**`uniapp`**开发的小程序，初始化配置项对应的传参有变化，请参考集成文档初始化部分修改实例传参。(移除配置项**`vue`**，改为`uniVue`)
8. 使用**`taro`**开发的小程序，初始化配置项对应的传参有变化，请参考集成文档初始化部分修改实例传参。(例如taro3vue开发时需同时传参两个实例)

其他配置项请[参考文档](/docs/miniprogram/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 4、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

1. 移除**`setConfig`、`config`**方法调用。SDK仅支持**`init`**方法进行初始化和初始化配置。如需在运行过程中动态修改配置，请使用 `setOption` [参考文档](/docs/miniprogram/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
2. 移除**`setTrackerScheme`、`setTrackerHost`、`enableDebug`、`setDataCollect`、`setAutoTrack`** 方法调用。请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
3. 移除**`getLocation`**方法调用。请使用`setLocation`方法。[参考文档](/docs/miniprogram/commonlyApi#8地理位置setlocation)未使用则忽略。
4. 修改**`track`**方法调用，移除**item**传参，即该方法不再支持物品模型上报，仅支持事件属性上报。未使用则忽略。示例：

```js
// 不再支持该写法
gdp('track', eventId, eventLevelVariables, item);
// 仅支持该写法
gdp('track', eventId, eventLevelVariables);
```

其他api调用请[参考文档](/docs/miniprogram/commonlyApi)使用，如果您不确定是否需要调用api，请咨询我们的技术支持。

### 5、检查半自动采集浏览事件（曝光事件）

请[参考文档](/docs/miniprogram/plugins/impressionTracking)检查半自动采集浏览事件的定义方式是否符合新版本要求。**支持JSON格式数据或单字段定义的方式**。未使用则忽略。

### 6、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#其他)，如有超出限制或超出限制的可能，请调整业务逻辑。

</TabItem>
<TabItem value="3.8.x版本">

下面将正式介绍SDK从3.8.x版本升级到4.0版本的步骤。

### 1、确认开发方式

在4.0版本中，我们放弃了对**`Wepy`、`Chameleon`、`Remax`**框架的支持，因为他们已经过时或被开发者放弃。如果您使用了以上框架，请尝试迁移小程序的框架。

### 2、修改集成代码

如果您使用标准CDN集成或NPM集成方式进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 3、检查初始化配置项

1. 移除已废弃配置项：**`autotrack`、`compress`**。如果您想禁用无埋点事件和数据加密，请**按需集成SDK**，**不要注册**对应插件即可。未使用则忽略。
2. 移除已废弃配置项：`scheme`、`host`。添加**`serverUrl`**，并在serverUrl中填写完整的协议头+地址（例：`https://api.growingio.com`）。
3. 重命名替换**`enableIdMapping`**为**`idMapping`**。未使用则忽略。

其他配置项请[参考文档](/docs/webjs/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 4、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

1. 修改**`track`**方法调用，移除**item**传参，即该方法不再支持物品模型上报，仅支持事件属性上报。未使用则忽略。示例：

```js
// 不再支持该写法
gdp('track', eventId, eventLevelVariables, item);
// 仅支持该写法
gdp('track', eventId, eventLevelVariables);
```

其他api调用请[参考文档](/docs/miniprogram/commonlyApi)使用，如果您不确定是否需要调用api，请咨询我们的技术支持。

### 5、检查半自动采集浏览事件（曝光事件）

请[参考文档](/docs/miniprogram/plugins/impressionTracking)检查半自动采集浏览事件的定义方式是否符合新版本要求。**支持JSON格式数据或单字段定义的方式**。未使用则忽略。

### 6、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#其他)，如有超出限制或超出限制的可能，请调整业务逻辑。
</TabItem>
</Tabs>

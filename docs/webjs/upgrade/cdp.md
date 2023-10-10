---
sidebar_position: 2
title: CDP升级指南
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 平台版本确认

首先请先确认您使用的平台版本，Web SDK 4.0 <font size="4" color="#FC5F3A"><b>仅支持 4.2.0 及以上</b></font>版本的分析云。

如果您使用的平台版本是 **13.6版本** ，即使用 **0.6.x-1.2 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **2.0-2.11.x 或 4.0-4.2.0以下（不含）** ，即使用 **3.0-3.8.x 版本SDK**，请联系我们购买升级新产品后再进行升级操作。

如果您使用的平台版本是 **4.0平台，且版本号高于等于4.2.0** ，您可以继续参考下文进行升级操作。

如果您使用的平台版本不在上述范围内，请咨询我们的技术支持。

## SDK版本确认

如何确认您使用的SDK版本？

在您的站点（或浏览器控制台）通过调用 <font size="4"><b>`window.vds`</b></font> 查看。

## SDK升级

请选择您当前使用的SDK版本查看升级步骤。

<Tabs
  groupId="1"
  defaultValue="0.6.x-1.2.x版本"
  values={[
    {label: '0.6.x-1.2.x版本', value: '0.6.x-1.2.x版本'},
    {label: '3.0.x-3.8.x版本', value: '3.0.x-3.8.x版本'},
  ]
}>
<TabItem value="0.6.x-1.2.x版本">

下面将正式介绍SDK从0.6.x-1.2.x版本升级到4.0版本的步骤。

### 1、修改集成代码

如果您使用标准CDN集成方式进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 2、检查初始化配置项

* 移除已废弃的配置项：`autotrack`、`compress`。如果您想禁用无埋点事件和数据加密，请**按需集成SDK**，**不要注册**对应插件即可。未使用则忽略。
* 重命名替换**`appVer`**为**`version`**。未使用则忽略。

其他配置项请[参考文档](/docs/webjs/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 3、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

* 移除**`send`**方法调用。4.0版本已不再需要它，SDK在初始化完成后且`dataCollect`开启状态下自动上报数据。
* 移除**`setConfig`、`config`**方法调用。SDK仅支持`init`方法进行初始化和初始化配置。如需在运行过程中动态修改配置，请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 移除**`setTrackerScheme`、`setTrackerHost`、`enableDebug`、`setDataCollect`、`setAutoTrack`** 方法调用。请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 修改**`getVisitUserId`**为**`getDeviceId`，调用变更**，请[参考文档](/docs/webjs/commonlyApi#3获取访问用户idgetdeviceid)修改使用方式。未使用则忽略。
* 修改**`track`**方法调用，移除**item**传参，即该方法不再支持物品模型上报，仅支持事件属性上报。未使用则忽略。

##### 示例

```js
// 不再支持该写法
gdp('track', eventId, eventLevelVariables, item);
// 仅支持该写法
gdp('track', eventId, eventLevelVariables);
```

### 4、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#参数限制)，如有超出限制或超出限制的可能，请调整业务逻辑。

</TabItem>
<TabItem value="3.0.x-3.8.x版本">

下面将正式介绍SDK从3.0.x-3.8.x版本升级到4.0版本的步骤。

### 1、修改集成代码

如果您使用标准CDN集成或NPM集成方式进行集成，请参考[集成文档](/docs/webjs/integrate)重新集成SDK。

如果您是下载SDK至本地项目集成，请[前往下载地址](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)下载4.0版本SDK并加载至项目中。

### 2、检查初始化配置项

* 移除已废弃的配置项：`autotrack`、`compress`。如果您想禁用无埋点事件和数据加密，请**按需集成SDK**，**不要注册**对应插件即可。未使用则忽略。
* 重命名替换**`enableIdMapping`**为**`idMapping`**。未使用则忽略。

其他配置项请[参考文档](/docs/webjs/initSettings)按需配置功能，如果您不确定是否需要对应配置项，请咨询我们的技术支持。

### 3、检查api调用

以下步骤仅列出需要改动的点，没有列出的api或内容即为自动兼容无需更改。

* 移除**`send`**方法调用。4.0版本已不再需要它，SDK在初始化完成后且`dataCollect`开启状态下自动上报数据。
* 移除**`setConfig`、`config`**方法调用。SDK仅支持`init`方法进行初始化和初始化配置。如需在运行过程中动态修改配置，请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 移除**`setTrackerScheme`、`setTrackerHost`、`enableDebug`、`setDataCollect`、`setAutoTrack`** 方法调用。请使用 `setOption` [参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)。未使用则忽略。
* 修改**`getVisitUserId`**为**`getDeviceId`，调用变更**，请[参考文档](/docs/webjs/commonlyApi#3获取访问用户idgetdeviceid)修改使用方式。未使用则忽略。
* 修改**`track`**方法调用，移除**item**传参，即该方法不再支持物品模型上报，仅支持事件属性上报。未使用则忽略。

##### 示例

```js
// 不再支持该写法
gdp('track', eventId, eventLevelVariables, item);
// 仅支持该写法
gdp('track', eventId, eventLevelVariables);
```

### 4、检查埋点事件和用户属性事件

检查埋点事件（track）、用户属性事件（setUserAttributes）、半自动采集浏览事件（曝光事件）的属性键值对，key和value是否符合限制条件[参考文档](/docs/webjs/commonlyApi#参数限制)，如有超出限制或超出限制的可能，请调整业务逻辑。
</TabItem>
</Tabs>

## App内嵌页高低版本兼容

当您的安卓、iOS App集成的是3.x版本SDK需要升级时，可能会因为用户不能及时升级App而出现的高低版本兼容使用问题，我们在这里给出H5内嵌页的参考集成代码，以帮助您平稳地完成版本切换。

以下示例代码会自动帮助您判断App(安卓/iOS) SDK的版本，如果是3.x的环境，自动加载3.8的 Web SDK，如果是4.x的环境，则自动加载4.0的 Web SDK。从而保证不会出现版本错位而导致数据混乱的问题。

##### 示例

```html
<script>
 !(function (e, s, t, n) {
    var i;
    (e[t] =
        e[t] ||
        function () {
            (e[t].q = e[t].q || []), e[t].q.push(arguments);
        }),
    (n = n || 'vds'),
    (e._gio_local_vds = n),
    (e[n] = e[n] || {}),
    (e[n].namespace = t);
    var c = '3';
    try {
        c = JSON.parse(e.GrowingWebViewJavascriptBridge.getConfiguration())
            .nativeSdkVersion.split('.')
            .shift();
    } catch (e) {}
    i =
        '4' === c ?
        'https://assets.giocdn.com/sdk/webjs/gdp-full.js' :
        'https://assets.giocdn.com/sdk/webjs/cdp/gdp-full.js';
    var o = s.createElement('script'),
        d = s.getElementsByTagName('script')[0];
    (o.async = !0),
    (o.crossorigin = !0),
    (o.src = i),
    d.parentNode.insertBefore(o, d);
})(window, document, 'gdp', 'vds');
</script>
```

**<font color="#FC5F3A">注意：</font>这里给出的是3.x版本与4.0版本的兼容代码，如果您使用的是其他版本的App(安卓、iOS) SDK，请咨询我们的技术支持。**

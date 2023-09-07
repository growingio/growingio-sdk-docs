---
sidebar_position: 6
title: 3.3与3.8对比
---

本文将介绍 3.3 版本与 3.8 版本的差异，方便您充分了解差异并放心的升级。文中将仅列出差异之处，共同之处将不再赘述。

## 架构调整

我们将各个主模块进行了独立拆分，方法调用都是单向的，这大大降低了代码的耦合度，减少了出现缺陷的风险。

功能上，我们对各个模块进行了重新设计和完全的代码重写，以插件的形式进行拆分，进一步捋清了代码逻辑。抛弃了大量原有的冗余和过时逻辑，这对于减小 SDK 占用大小有很大的意义。下面是与旧版本的对比示例（均以原生开发微信小程序为例）：

> 旧版本 SDK(含`埋点`+`无埋点`+`加密`功能)大小约 `58 KB`。
>
> 新版本 SDK(含`埋点`+`无埋点`+`加密`功能)大小约为 `48 KB`，较旧版本节约 `10 KB`。

## 关于版本号

由于我们只是在架构层面进行调整，功能上和使用上几乎与 3.3 版本无异，所以我们并没有直接进入 4.0。

如果您目前使用的是 3.3 的测量协议版本，可以完全不用担心兼容问题，具体升级方式请见[3.3 升级到 3.8](/docs/3.x/miniprogram/3.8/upgrade)。

## 关于 3.3 旧版本

3.3 版本我们也会继续维护，但仅限于重大问题的修复。

## 差异点

### 初始化

**移除项：** `enableEventStore`、`usePlugin`、`vue`、`getLocation(含autoGet和type)`、`comAsPage` 配置项，`setConfig` 方法。

> 初始化配置项 `enableEventStore` 字段废弃；3.3.2 版本起为解决没有使用运营 SDK 却导致存储超限问题而提供的配置项，重构后已改造此模块，因此废弃。未使用无影响，已使用直接移除即可。
>
> 初始化配置项 `usePlugin` 字段废弃；未使用无影响，已使用直接移除即可。
>
> 初始化配置项 `vue` 字段废弃；使用其他实例字段代替。
>
> 初始化配置项 `getLocation` 字段废弃；未使用无影响，已使用请参考 `setLocation` 方法；用于弥补移除了自动获取位置的功能。[参考文档](/docs/3.x/miniprogram/3.8/commonlyApi#8地理位置setlocation)
>
> 初始化配置项 `comAsPage` 字段 3.8.11 起废弃；未使用无影响，已使用直接移除即可。
>
> 初始化方法 `setConfig` 废弃，仅支持通过 `init` 方法进行初始化；因为它容易歧义误导使用。

**新增项：** `uploadInterval`、`wepy`、`uniVue`、`taroVue`、`remax` 配置项。

> 新增 `uploadInterval` 配置项字段；用于自定义发数间隔。
>
> 新增 `wepy`、`uniVue`、`taroVue`、`remax` 配置项字段；用于准确传入不同框架的实例。

### 初始化配置项

> 在 3.3 版本中，`followShare`是默认关闭的，但是在 3.8 版本中我们修改`followShare`为默认开启。

### 数据采集 API

**移除项：** `setPlatformProfile`, `getLocation` 方法。

> `setPlatformProfile`为老旧方法，已被`setUserAttributes`代替，按文档正确使用`setUserAttributes`即可。
>
> 自 2022 年 4 月 18 日起，微信官方修改了相关权限，获取位置信息将需要开通对应功能权限，为避免没有使用位置信息的小程序上线审核被驳回，我们废弃了`getLocation`方法。

**新增项：** `getOption`、`setOption`、`setLocation` 方法。

> 新增 `getOption` 方法；用于获取当前 SDK 配置项状态。[参考文档](/docs/3.x/miniprogram/3.8/commonlyApi#12获取sdk当前配置getoption)
>
> 新增 `setOption` 方法；用于统一动态设置 SDK 配置项。[参考文档](/docs/3.x/miniprogram/3.8/commonlyApi#动态修改配置接口setoption)
>
> 新增 `setLocation` 方法；用于弥补移除了自动获取位置的功能。[参考文档](/docs/3.x/miniprogram/3.8/commonlyApi#8地理位置setlocation)

## 功能点新增、优化、问题修复

1、新增快手小程序的适配。

2、新增半自动采集浏览功能。详情[参考文档](/docs/3.x/miniprogram/3.8/plugins/impressionTracking)

3、新增`uni-app vue3`、`taro3 vue3`、`remax`的支持。

4、新增淘宝小程序云函数和云应用转发方式的适配。

5、调用 `setUserId` 的 API，设置或切换有效的登录用户 ID 时，自动补发 VISIT 事件。

6、带有 `autoplay` 属性且值为 `true` 的原生组件（例如：swiper、video）产生的 change 事件会被自动忽略，如果您想采集它，请[参考文档](/docs/3.x/miniprogram/3.8/commonlyApi#1采集标记)。

7、在<3.8 的旧版本中，可能您的 **`gdp`** 方法是需要您通过手动挂载在例如`globalData`、`vue`、`global`此类全局对象后再取出。在 3.8.0 的版本开始，您可以直接在页面中从 **`global（阿里(支付宝)小程序和淘宝小程序是 $global）`**对象中取出，从而免去了繁杂的存取值流程。例：

```js
const { gdp } = global;
Page({ ... });
```

8、在<3.8 的旧版本中，打通数据的内嵌页 SDK 数据采集开关是不受小程序 SDK 控制的（即小程序 SDK 关闭数据采集时，内嵌页仍然会采集数据并发送，但没有 VISIT 事件关联）。从 3.8.0 的版本开始，`getGioInfo`接口将额外增加`giodatacollect`字段用于同步给内嵌页 SDK 是否采集数据。

9、在<3.8 的旧版本中，使用 taro 或者 uni-app 框架开发的小程序在某些特定场景下可能会丢失自定义采集标记，我们在 3.8 版本中我们修复了它。

10、在<3.8 的旧版本中，您只能通过下载 SDK 文件至本地项目的方式来集成 SDK。从 3.8.0 的版本开始，您还可以通过 npm 的方式来集成 SDK。

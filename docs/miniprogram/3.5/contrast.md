---
sidebar_position: 6
title: 3.0与3.5对比
---

本文将介绍3.0.0版本与3.5.0版本的差异，方便您充分了解差异并放心的升级。文中将仅列出差异之处，共同之处将不再赘述。

## 架构调整

我们将各个主模块进行了独立拆分，方法调用都是单向的，这大大降低了代码的耦合度，减少了出现缺陷的风险。

功能上，我们对各个模块进行了重新设计和完全的代码重写，以插件的形式进行拆分，进一步捋清了代码逻辑。抛弃了大量原有的冗余和过时逻辑，这对于减小SDK占用大小有很大的意义。下面是与旧版本的对比示例（均以原生开发微信小程序为例）：

>旧版本SDK(含`埋点`+`无埋点`+`加密`功能)大小约 `58 KB`。
>
>新版本SDK(含`埋点`+`无埋点`+`加密`功能)大小约为 `48 KB`，较旧版本节约 `10 KB`。

## 关于版本号

由于我们只是在架构层面进行调整，功能上和使用上几乎与3.0版本无异，所以我们并没有直接进入4.0，而是选择了一个3到4的中间值3.5来进行区分。

如果您目前使用的是3.0的测量协议版本，可以完全不用担心兼容问题，具体升级方式请见[3.0升级到3.5](/docs/miniprogram/3.5/upgrade)。

## 关于3.0旧版本

3.0版本我们也会继续维护，但仅限于简单问题的修复。

## 差异点

### 初始化

**移除项：** `enableEventStore`、`usePlugin`、`vue` 配置项，`setConfig` 方法。

> 初始化配置项 `enableEventStore` 字段废弃；3.3.2版本起为解决没有使用运营SDK却导致存储超限问题而提供的配置项，重构后已改造此模块，因此废弃。未使用无影响，已使用直接移除即可。
>
> 初始化配置项 `usePlugin` 字段废弃；未使用无影响，已使用直接移除即可。
>
> 初始化配置项 `vue` 字段废弃；使用其他实例字段代替。
>
> 初始化方法 `setConfig` 废弃，仅支持通过 `init` 方法进行初始化；因为它容易歧义误导使用。

**新增项：** `wepy`、`uniVue`、`taroVue`、`remax` 配置项。

> 新增 `wepy`、`uniVue`、`taroVue`、`remax` 配置项字段；用于准确传入不同框架的实例。

### 数据采集API

**移除项：** `setPlatformProfile` 方法。

> `setPlatformProfile`为老旧方法，已被`setUserAttributes`代替，正常使用`setUserAttributes`即可。

**新增项：** `getOption`、`setOption`

> 新增 `getOption` 方法；用于获取当前SDK配置项状态。[参考文档](/docs/miniprogram/3.5/commonlyApi#8获取sdk当前配置getoption)
>
> 新增 `setOption` 方法；用于统一动态设置SDK配置项。[参考文档](/docs/miniprogram/3.5/commonlyApi#动态配置接口setoption)

## 功能点新增、优化

1、新增半自动采集浏览功能。详情[参考文档](/docs/miniprogram/3.5/internally#半自动埋点曝光)

2、新增`uni-app vue3`、`taro3 vue3`、`remax`的支持。

3、带有 `autoplay` 属性且值为 `true` 的原生组件（例如：swiper、video）产生的change事件会被自动忽略，如果您想采集它，请[参考文档](/docs/miniprogram/3.5/commonlyApi#1采集标记)。

4、在<3.5.0的旧版本中，可能您的 **`gdp`** 方法是需要您通过手动挂载在例如`globalData`、`vue`、`global`此类全局对象后再取出。在3.5.0的版本开始，您可以直接在页面中从 **`global（支付宝和淘宝小程序是 $global）`**对象中取出，从而免去了繁杂的存取值流程。例：

```js
const { gdp } = global;
Page({ ... });
```

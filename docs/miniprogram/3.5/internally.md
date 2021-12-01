---
sidebar_position: 5
title: 内置插件
---

## 无埋点插件

自动采集 `tap`、`longtap`、`change`、`submit`、 事件的插件。

**点击事件(tap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的点击事件**触发时上报。

**长按事件(longtap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的长按事件**触发时上报。

**TabBar点击事件(onTabItemTap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中原生底部**TabBar点击事件**触发时上报。(快应用不支持)

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当小程序中**绑定的变更事件**触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当小程序中**绑定的表单提交事件**触发时上报。(快应用不支持)

## 埋点插件

提供埋点(手动上报数据接口)事件的插件。

**自定义埋点事件：** 对应 `CUSTOM` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#4自定义埋点)

**登录用户属性事件：** 对应 `LOGIN_USER_ATTRIBUTES` 事件。[调用方法](/docs/miniprogram/3.5/commonlyApi#5登录用户属性事件)

## 半自动曝光插件

用户标记一个元素并提供自定义埋点事件，SDK负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的自定义埋点事件。因此您同样需要[参考自定义埋点](/docs/miniprogram/3.5/commonlyApi#4自定义埋点)在平台上进行事件类型和变量的预定义。

**支持范围：微信小程序、支付宝(天猫)小程序(基础库>=2.7.0)、百度小程序、字节跳动小程序、QQ小程序。快应用不支持。**

使用方法：

1、在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

2、在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs`、`data-gio-imp-items` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则[参考文档](/docs/miniprogram/3.5/commonlyApi#4自定义埋点track)。

```js
Page({
  data: {
    impAttrs: JSON.stringify({ type: 'hjh', name: 'yue' }),
    impItems: { key: 'order_id', id: '12345' }
  }
})
```
```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs="{{ impAttr }}"
  data-gio-imp-items="{{ impItems }}"
>
  监听的元素
</view>
```
对应产生的`CUSTOM`事件相当于： ↓↓↓
```js
gio('track', 'imp_picture_var', { type: 'hjh', name: 'yue' }, { key: 'order_id', id: '12345' });
```

**请注意：**

1、如果您使用的是单个字段的数据定义形式，新版SDK依然兼容，但所有定义的参数都会被归入`track`方法的`properties`对象参数中，并不能定义`items`对象中的参数。如果您期望定义`items`中的参数，请修改数据定义形式。例：
```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_cat_var"
  data-gio-track-name="my_cat_picture"
  data-gio-track-time="20210601"
>
  监听的元素
</view>
```
对应产生的`CUSTOM`事件相当于： ↓↓↓
```js
gio('track', 'imp_cat_var', { name: 'my_cat_picture', time: '20210601' });
```
2、`data-gio-imp-attrs` 和 `data-gio-imp-items` 允许接受一个Object或者合法的Object字符串，我们会尝试进行格式化。

3、<3.5.0版本的半自动曝光事件需要在onShow中手动注册；3.5.0起无需手动注册，同时collectImp事件api废弃。

## 加密插件

使用插件并在初始化时开启 **`compress`** 配置时，上报请求的数据进行加密。

## mpvue适配插件

适配mpvue框架专用的插件。

## wepy适配插件

适配wepy框架专用的插件。兼容wepy1.x和wepy2.x。

## uni-app适配插件

适配uni-app框架专用的插件。

**仅支持uni-app&nbsp;Vue2开发的小程序，Vue3暂不支持。**

## Taro适配插件

适配Taro框架专用的插件。兼容Taro2.x和Taro3.x。

**仅支持Taro2、Taro3 React、Taro3&nbsp;Vue2开发的小程序，Taro3&nbsp;Vue3开的小程序暂不支持。**

## 天猫小程序插件

因为天猫小程序上报数据仅能单事件上报的特殊性，使用天猫小程序插件会使得小程序上报时每次发送一个事件数据。
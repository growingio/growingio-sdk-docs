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

## 半自动曝光事件

用户标记一个元素并提供自定义埋点事件，SDK负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的自定义埋点事件。因此您同样需要[参考自定义埋点](/docs/miniprogram/3.5/commonlyApi#4自定义埋点)在平台上进行事件类型和变量的预定义。

**支持范围：微信小程序、支付宝(天猫)小程序(基础库>=2.7.0)、百度小程序、字节跳动小程序、QQ小程序。快应用不支持。**

使用方法：

1、在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

2、在节点上添加 `data-gio-imp-eventId`、`data-gio-imp-props`、`data-gio-imp-item` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则[参考文档](/docs/miniprogram/3.5/commonlyApi#4自定义埋点track)。

```html
<view
  class="growing_collect_imp"
  data-gio-imp-eventId="imp_picture_var"
  data-gio-imp-props="{ type: 'hjh' }"
  data-gio-imp-item="{ key: 'order_id', id: '12345' }"
>
  监听的元素
</view>
```
**请注意：**

**1、不兼容<3.5.0版本的半自动曝光事件，请注意修改。**

**2、<3.5.0版本的半自动曝光事件需要在onShow中手动注册；3.5.0起无需手动注册，同时collectImp事件api废弃。**

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

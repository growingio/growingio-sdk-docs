---
sidebar_position: 0
title: 版本记录
---

SDK历史版本下载地址：<https://github.com/growingio/growingio-sdk-miniprogram-autotracker/releases>

### V3.8.8 - 2022/09/21

* 🐞 修复加密上报失败重试时事件乱码的问题。
* 🌟 优化曝光监听逻辑，减少性能影响。
* 🌟 优化无埋点处理逻辑，减少性能影响。
* 🎉 新增事件时长统计功能。[参考文档](/docs/miniprogram/3.8/commonlyApi#事件时长统计)

### V3.8.7 - 2022/09/14

* 🐞 修复`onShareTimeline`返回取值错误的问题。
* 🎉 新增微信小程序、QQ小程序`onAddToFavorites`预置埋点事件支持。

### V3.8.6 - 2022/09/06

* 🐞 修复esid总是为1不累加的问题。
* 🐞 修复部分工具类方法极端取值时运行错误的问题。
* 🐞 修复运营弹窗条件复杂时运行报错的问题。

### V3.8.5 - 2022/08/09

* 🐞 修复运营弹窗埋点存储过多导致存储可能超限和校验次数过多影响性能的问题。
* 🐞 修复从开启至关闭`enableIdMapping`后仍然会上报`userKey`的问题。
* 🎉 新增半自动浏览事件单次发送功能。

### V3.8.4 - 2022/08/05

* 🐞 修复开启`forceLogin`且未调用`identify`时关闭小程序会上报匿名用户数据的问题。

### V3.8.3 - 2022/08/01

* 🐞 修复`onShareAppMessage`异步返回自定义参数时SDK取值错误导致分享链接错误的问题。

### V3.8.2 - 2022/07/20

* 🎉 新增设置埋点通用属性`setGeneralProps`和清除`clearGeneralProps`接口。

### V3.8.1 - 2022/07/15

* 🐞 修复在appOnLaunch中的埋点session取值可能与visit事件不一致导致平台统计丢失的问题。

### V3.8.0 - 2022/06/29

* 🌟 优化数据上报逻辑，减少丢数概率。
* 🎉 新增快手小程序的适配。
* 🎉 3.8.0正式版。

### V3.8.0-rc.10 - 2022/6/14

* 🐞 修复分享带参数的页面时，页面参数丢失的问题
* 🎉 新增`uploadInterval`初始化配置项，允许自行设置数据上报的延时间隔。

### V3.8.0-rc.9 - 2022/5/29

* 🐞 修复taro2 page 事件丢失问题。
* 🐞 修复 visit 事件丢失进入小程序时的utm参数问题。
* 🐞 修复`setUserAttributes`在AppOnShow中异步调用时path和query可能取值错误的问题。
* 🎉 新增数据采集补充标记，允许自定义设置SDK上报时的页面title。

### V3.8.0-rc.8 - 2022/5/24

* 🐞 修复获取系统信息异步返回过慢导致事件被卡住的问题。
* 🐞 修复淘宝小程序小部件中 visit 事件丢失的问题。
* 🐞 修复开启comAsPage时，Component页面中 page 事件只触发一次的问题。

### V3.8.0-rc.7 - 2022/5/16

* 🐞 修复`setUserId`和`setUserAttributes`异步调用且先于`identify`调用时，可能出现deviceId取值错误的问题。
* 🐞 修复集成多框架集成插件且首次进入小程序为分包页面时，可能出现deviceId取值错误的问题。
* 🎉 新增获取deviceId(匿名用户Id)的接口。

### V3.8.0-rc.6 - 2022/5/6

* 🐞 修复taro3 vue3中部分无埋点事件xpath取值错误的问题。
* 🐞 修复补发visit时丢失path字段的问题。

### V3.8.0-rc.5 - 2022/4/29

* 🐞 修复上报字段在平台中无法区分os的问题(deviceType->operatingSystem)
* 🌟 移除getLocation相关逻辑，同时废弃getLocation的初始化配置项和api调用。
* 🎉 新增setLocation api，以替代getLocation的功能。

### V3.8.0-rc.4 - 2022/4/25

* 🐞 修复百度、字节、QQ小程序上报页面title无取值的问题。
* 🐞 修复uni-app vue3中监听`@click="$emit(xxx)"`形式的方法调用不会触发无埋点点击事件的问题。
* 🐞 修复微信小程序getGioInfo获取到的platform错误导致H5打通失败的问题。

### V3.8.0-rc.3 - 2022/4/20

* 🐞 修复阿里(支付宝)小程序/淘宝小程序`platform`字段取值错误的问题。
* 🐞 修复uni-app vue3和taro3 vue3中setup定义的方法不会触发无埋点点击事件的问题。
* 🐞 修复快应用集成时报错的问题。

### V3.8.0-rc.2 - 2022/4/14

* 🐞 修复部分外置插件的生命周期不能正常执行的问题。
* 🐞 修复`setUserId`方法中`userKey`的设值逻辑。
* 🐞 修复微信小程序中首次进入的页面referralPage字段取值错误的问题。
* 🐞 修复淘宝小程序中小部件某些情况下加载报错和上报数据失效的问题。
* 🐞 修复开启`subpackage`配置项的小程序独立使用时报错的问题。
* 🐞 修复多框架集成插件中多个分包时实例取值错误的问题。

### V3.8.0-rc.1 - 2022/3/30

* 🎉 发布3.8.0第一个rc版本。

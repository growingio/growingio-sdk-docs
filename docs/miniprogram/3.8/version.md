---
sidebar_position: 0
title: 版本记录
---

### V3.8.0-rc.7- 2022/5/16

* 修复`setUserId`和`setUserAttributes`异步调用且先于`identify`调用时，可能出现deviceId取值错误的问题。
* 修复集成多框架集成插件且首次进入小程序为分包页面时，可能出现deviceId取值错误的问题。
* 新增获取deviceId(匿名用户Id)的接口。

### V3.8.0-rc.6 - 2022/5/6

* 修复taro3 vue3中部分无埋点事件xpath取值错误的问题。
* 修复补发visit时丢失path字段的问题。

### V3.8.0-rc.5 - 2022/4/29

* 修复上报字段在平台中无法区分os的问题(deviceType->operatingSystem)
* 移除getLocation相关逻辑，同时废弃getLocation的初始化配置项和api调用。
* 新增setLocation api，以替代getLocation的功能。

### V3.8.0-rc.4 - 2022/4/25

* 修复百度、字节、QQ小程序上报页面title无取值的问题。
* 修复uni-app vue3中监听`@click="$emit(xxx)"`形式的方法调用不会触发无埋点点击事件的问题。
* 修复微信小程序getGioInfo获取到的platform错误导致H5打通失败的问题。

### V3.8.0-rc.3 - 2022/4/20

* 修复支付宝/淘宝小程序`platform`字段取值错误的问题。
* 修复uni-app vue3和taro3 vue3中setup定义的方法不会触发无埋点点击事件的问题。
* 修复快应用集成时报错的问题。

### V3.8.0-rc.2 - 2022/4/14

* 修复部分外置插件的生命周期不能正常执行的问题。
* 修复`setUserId`方法中`userKey`的设值逻辑。
* 修复微信小程序中首次进入的页面referralPage字段取值错误的问题。
* 修复淘宝小程序中小部件某些情况下加载报错和上报数据失效的问题。
* 修复开启`subpackage`配置项的小程序独立使用时报错的问题。
* 修复多框架集成插件中多个分包时实例取值错误的问题。

### V3.8.0-rc.1 - 2022/3/30

* 发布3.8.0第一个rc版本。

---
sidebar_position: 1
title: Mobile Debugger
---

GrowingIO 的移动端的SDK支持 Mobile Debugger 工具，可进行调试和校验。

## 启动 Mobile Debugger

此功能可以在网页端查看移动端 SDK 上报数据的日志信息。

### 1.进入Mobile Debugger启动页
登录 GrowingIO CDP 管理平台（一般来说，cdp都会配有数据管理），在平台管理--->客户数据平台--->数据校验--->**Mobile Debugger** 进入Mobile Debugger启动页。
<ImageLoader path="img/debugverify/EnterMobileDebugger" />

### 2.扫码唤起App
* 选择项目中需要进行调试和校验的应用，并保证手机中已经安装该APP，且该APP已经集成GrowingIO SDK和设置过 URL Scheme。
* 使用手机浏览器扫描页面中的二维码唤起 APP。
:::info 提示
Android 设备，可以使用手机中浏览器扫码唤起APP。<br/>
iOS 设备，可使用相机或自带的扫码应用扫码唤起APP。<br/>
需要注意**微信或其他应用中扫码无法唤起APP**。<br/>
小米设备，由于小米系统原因无法使用 Mobile Debugger。
:::

## 使用 Mobile Debugger 测试数据

在唤起APP后，该APP采集的行为数据、日志信息以及当前页面截图就会出现在网页上，测试同学可以根据页面中展示的数据查看APP中数据的采集以及发送情况，对数据进行测试和校验。

### 通过“事件流”页签查看请求数据
如下图，可以查看上报事件属性的请求数据

![Mobile Debugger](https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZPOkRVBIr9mSewTl5%2F%E4%BA%8B%E4%BB%B6%E6%B5%81%E9%A1%B5%E9%9D%A2.png?alt=media&token=8dce6e01-5f54-48d0-8e62-b500c6c5004d)

1. 图片中序号1：可查看当前连接的用户及设备等基本信息
2. 图片中序号2：筛选器中展示的是系统中已定义的事件标识符列表，如果筛选后无数据，说明本次连接未上报数据

### 通过“SDK运行日志”查看SDK运行中的信息/警告/错误三种日志
如下图，可以点击日志发生的时间查看相应的日志

![连接成功后进入SDK运行日志](https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZRF90xKX8ecHudHtf%2FSDK%E6%97%A5%E5%BF%97.png?alt=media&token=e0069156-124e-464b-bf0d-6c88ab8cdd5c)

1. 图片中序号1：可点击暂停按钮，停止同步SDK产生的日志，便于查看当前遇到的问题；再次点击继续按钮，则同步所有产生的SDK日志，并展示最新的一条日志数据
2. 图片中序号2：点击清屏按钮，清除当前所有产生的日志

校验的关注点请参考[校验时需关注字段和说明](/knowledge/debugverify#校验时需关注字段和说明)。

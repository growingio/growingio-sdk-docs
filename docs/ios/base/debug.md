---
sidebar_position: 4
title: SDK调试
---
在移动端的SDK中，有两个调试工具可以集成在SDK中帮忙更好的使用SDK。

## Mobile Debugger

此功能可以在网页端方便查看移动端 SDK 上传的数据信息和日志信息

### 启动 Mobile Debugger
1. 进入Mobile Debugger启动页
登录GrowingIO CDP 管理平台（一般来说，cdp都会配有数据管理来说），在数据中心-数据校验  选择Mobile Debugger进入Mobile Debugger启动页。
![Mobile Debugger](https://gblobscdn.gitbook.com/assets%2F-M2rhnIRdtpnYwQL2kvm%2F-MCQxZygmIf2zKvx7MYW%2F-MCQxpJAte21AqYXnc8f%2Fimage.png?alt=media&token=05d6c0b4-90ae-4fcb-ac11-0dcee536ce2f)

2. 扫码唤起App
* 选择项目中需要进行测试的应用，并保证手机中已经安装该APP，且该APP已经集成SDK和设置过 URLScheme。
* 使用手机浏览器扫描入口的二维码唤起Debug的APP，需要注意微信中扫码无法唤起APP。

### 使用 Mobile Debugger 测试数据

在唤起Debug的APP后，该APP采集的行为数据、日志信息以及当前页面截图就会出现在网页上，测试同学可以根据数据看数据的采集以及发送情况，对数据进行测试。

![Mobile Debugger](https://gblobscdn.gitbook.com/assets%2F-M2rhnIRdtpnYwQL2kvm%2F-M9vHSLOJxYuYk7jDsP-%2F-M9vHgfLLe6eKF2hpSav%2Fimage.png?alt=media&token=d911bb7e-0f47-49c1-bb0a-06662fcf17d6)

具体的字段信息可以参考 [测量协议](/docs/Measurement%20Protocol)


## 圈选

圈选，是利用GrowingIO进行无埋点数据分析之前的数据定义过程。您需要根据业务需求，将需要分析的关键事件通过可视化地方式在您的产品界面中定义出来，这个过程，就是圈选。

例如： 你关心首页banner的浏览/点击情况，那你就需要对首页banner这个元素进行圈选。

圈选的进入方式与 Mobile Debugger 一样，都是从平台进去，通过扫码打开App进入圈选功能。

具体的使用方式可以参考 [App端数据定义2.0（圈选）](https://docs.growingio.com/v3/product-manual/data-center/data-management/auto/app)
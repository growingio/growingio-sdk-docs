---
sidebar_position: 5
title: 小程序 常见问题
---

### 1.小程序预定SDK 义埋点事件onError 和 onShareAppMessage，是所有类型小程序都会采集吗，还是只有微信小程序？
**A:** 都有的，onError是采集小程序错误，onShareAppMessage是设置分享给朋友，在开启onShareAppMessage的基础上再设置onShareTimeline分享到朋友圈；onShareTimeline仅安卓微信支持

### 3. 小程序sdk包能压缩吗？目前客户反馈小程序集成SDK后影响发版
**A:**只能采用分包，把SDK的引入和初始化放在主包里；目前没有测试过，不确定是否有问题

### 4. 小程序SDK 其他事件发送，不发送 Page事件，怎么排查？
**A:**Page 事件不发送原因可能：<br/>
1.客户重写了Page，建议将重写了的 page 放在SDK初始化之前引入<br/>
2.微信小程序的直播控件页面暂时无法实现发送 page 事件<br/>
3.小程序SDK集成时机要正确

### 5.dataCollect 设置 false 之后，发现事件数据不上报，为什么？
**A：**SDK关闭数据采集 dataCollect 设置 false 时，所有事件都不采集。只有开启了数据采集 dataCollect 为 ture 时，事件数据才会采集上报

### 6.集成SDK后，为什么接收不到数据？
**A：**
* host 配置错误
* 没有在微信小程序后台添加请求服务器域名
* host是否可以正常访问

### 7.用户信息保护，以及 GDPR 该怎么设置？
**A：**参考[小程序SDK合规说明](/docs/compliance/minpCompliance)


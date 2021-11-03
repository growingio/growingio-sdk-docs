---
sidebar_position: 3
title: 常见问题
---

### Cocoapods问题

#### pod install/update更新慢解决办法
1. 执行以下命令
```c
pod repo remove master
pod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git
pod repo update
```
2. 科学上网

### 如何禁用GrowingIO iOS SDK 调用获取 IDFA 相关代码？
使用场景：三方监测机构扫描APP或APP上架发现 GIO SDK 有调用有获取IDFA 相关代码，且APP中又没有使   用IDFA时（此时IDFA不会被作为访问用户ID）

参考 [自定义SDK](/docs/ios/develop/custom_sdk#配置项) 在pod文件中添加 
```c
pod 'GrowingAnalytics/DISABLE_IDFA'
```

### 集成SDK后，为什么接收不到数据？
* dataCollectionServerHost、accountId 、dataSoueceId 配置错误
* 服务端网络环境是否可访问

### SDK如何支持合规，以及GDPR（欧盟《一般数据保护条例》）？

首先，用户未同意隐私条款时，可以在 SDK 初始化配置时，调用 dataCollectionEnabled 设置为 NO，禁止数据采集;<br/>
其次，当用户同意隐私条款时，调用 [[GrowingAutotracker sharedInstance] setDataCollectionEnabled:YES] 开启数据采集；<br/>
最后，当用户再次进入app时， 如果用户已同意隐私条款，在 SDK 初始化配置时，调用 dataCollectionEnabled 设置为 YES，开启数据采集。<br/>
**若App 需通过第三方安全检测，建议在隐私政策授权成功之后，再初始化 GrowingIO SDK**。


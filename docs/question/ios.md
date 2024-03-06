---
sidebar_position: 3
title: Apple 常见问题
---

### 1. 如何禁用GrowingIO Apple SDK 调用获取 IDFA 相关代码？
**A：**使用场景：三方监测机构扫描 APP 或 APP 上架发现 GIO SDK 有调用有获取 IDFA 相关代码（如儿童类应用），且 APP 中又没有使用 IDFA 时（此时 IDFA 不会被作为访问用户 ID）。<br/>
只添加依赖库就可以实现，原理是: 依赖库中定义有宏，SDK 会根据宏判断，是否执行获取代码
```ruby
pod 'GrowingAnalytics/DISABLE_IDFA'
```

### 2. pod install 提示 could not find compatible versions，该怎么处理？
如图: <br/>
<ImageLoader path="img/question/noversions" />

**A：** 按照提示执行命令，或切换网络环境，大部分是网络环境问题无法下砸依赖。

### 3：App 一开始禁止了 `IDFA` 权限，后续允许了 `IDFA` 权限，数据会有什么变化？

A：对于`IDFA`，App生命周期内，`IDFA` 只会获取一次，就算后续 IDFA 权限打开了，也不会再获取，可以在下一次 App 启动后生效。对于 设备标识，仅且在 App 第一次启动时生成，后续不再改变，优先级为 `IDFA`> `IDFV` > 随机字符串，如果 `IDFA` 无法获取，则会使用`IDFV` 且不再变动，会存入`Keychain`，卸载也无法修改。如果要设备标识 和 `IDFA` 绑定，则需要在用户同意 `IDFA`权限之后进行第一次SDK初始化操作。

### 4.延迟初始化之后，发现丢掉了部分事件，为什么？
**A：**对于SDK初始化之前，或者开启数据采集之前发生的事件，一概丢弃。

### 5. pod install/update更新慢，该怎么解决
**A：**
1. 执行以下命令
```c
pod repo remove master
pod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git
pod repo update
```
2. 科学上网



### 6.集成SDK后，为什么接收不到数据？
**A：**
* dataCollectionServerHost、accountId 、dataSourceId 配置错误
* 服务端网络环境是否可访问

### 7. SDK如何支持合规，以及GDPR（欧盟《一般数据保护条例》）？
**A：**参考[Apple SDK合规说明](/knowledge/compliance/iosCompliance)


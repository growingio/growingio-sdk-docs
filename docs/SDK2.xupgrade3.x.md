---
sidebar_position: 11
title: 客户端SDK2.x升级3.x说明
---

## 移动端
### 1. 如客户需要 2.x 兼容 3.x 版本
优势：此版本对3.x接口进行了封装，可以兼容 2.x API调用；客户只需要修改集成依赖和初始化代码即可按照3.x 的测量协议发送数据。<br/>
劣势：增加版本维护成本。

**Android：**安卓只用该版本升级之后只支持无埋点SDK，埋点SDK暂不兼容。[2.x android cdp升级 3.x cdp兼容性sdk]](https://github.com/growingio/growingio-sdk-android-autotracker-upgrade)<br/>
[升级指南](https://github.com/growingio/growingio-sdk-android-autotracker-cdp/wiki/%E6%97%A0%E5%9F%8B%E7%82%B9-SDK%E9%9B%86%E6%88%90#1-%E6%B7%BB%E5%8A%A0%E4%BE%9D%E8%B5%96)
调整添加这部分依赖
    
```java
//如果你之前集成的是3.0.0版本之前的SDK，请还需要集成upgrade，方便最小程度的迁移
implementation 'com.growingio.android.sdk.upgrade:autotracker-upgrade-2to3-cdp:1.0.0'
```

**iOS：** [2.x ios cdp升级 3.x cdp兼容性sdk](https://github.com/growingio/growingio-sdk-ios-autotracker-upgrade)<br/>
[升级指南](https://github.com/growingio/growingio-sdk-ios-autotracker-upgrade/wiki/Autotracker-upgrade-2to3-cdp-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)

### 2. 直接使用3.x 版本SDK
优势：可以使用3.x 版本的所有功能<br/>
劣势：需要修改项目中调用GIO的代码<br/>
参考该文档中的 [Android SDK](/docs/android/base/Getting%20Started) 和 [iOS SDK](/docs/ios/base/Getting_Started)

## 小程序和Web 
小程序、Web 端 SDK的 2.x 和 3.x 接口没有发生变化，可以直接升级 3.x

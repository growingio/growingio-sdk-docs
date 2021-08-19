---
sidebar_position: 3
title: 常见问题
---

## Cocoapods问题

### pod install/update更新慢解决办法
1. 执行以下命令
```c
pod repo remove master
pod repo add master https://gitee.com/mirrors/CocoaPods-Specs.git
pod repo update
```
2. 科学上网

## 关于如何禁用idfa

参考 [自定义SDK](/docs/ios/develop/custom_sdk#配置项) 在pod文件中添加 
```c
pod 'GrowingAnalytics/DISABLE_IDFA'
```
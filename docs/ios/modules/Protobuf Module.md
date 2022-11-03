---
sidebar_position: 2
title: Protobuf 模块
---

GrowingIO SDK protobuf 数据模块使用 [Google Protobuf](https://developers.google.cn/protocol-buffers) 格式保存和上传事件数据。

:::info
采集 SDK 版本 >=3.3.3

**仅支持 Cocoapods 集成**

**使用时注意模块版本需要与采集 SDK 版本保持一致**

使用 Protobuf 格式保存和上传事件数据，集成即生效；默认为 JSON 格式，2 种格式互不兼容，迁移将导致 APP 本地数据库内未上传的事件数据丢失，后续产生的新数据不受影响
:::

在您的 Podfile 文件中添加

```c
pod 'GrowingAnalytics/Protobuf'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

项目中无需其他额外设置


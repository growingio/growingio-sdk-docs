---
sidebar_position: 2
title: 初始化配置
---

在初始化过程中，SDK 会接收一个由用户传入的默认配置 `Config`，配置相关说明如下表：

### 配置表格

| 配置项                        | 参数类型 | 默认值 | 说明                                                         |
| ----------------------------- | -------- | ------ | ------------------------------------------------------------ |
| accountId                     | string   | -      | 项目 ID (AccountID)，每个应用对应唯一值                      |
| dataSourceId                  | string   | -      | 应用的 DataSourceId，唯一值                                  |
| urlScheme                     | string   | -      | 自定义 URL Scheme                                            |
| dataCollectionServerHost      | string   | -      | 服务端部署后的 ServerHost，默认值为 https://napi.growingio.com |
| debugEnabled                  | boolean  | false  | 调试模式，开启后会输出 SDK 日志，在线上环境请关闭            |
| sessionInterval               | number   | 30     | 设置会话后台留存时长，指当前会话在应用进入后台后的最大留存时间，默认为 30 秒。另外，其他情况下也会重新生成一个新的会话，如设置用户 ID 等核心信息，重新打开数据收集等 |
| dataUploadInterval            | number   | 15     | 数据发送的间隔，默认为 15 秒。SDK 会先将事件存入数据库中，然后以每隔默认时间 15 秒向服务器发送事件包 |
| dataCollectionEnabled         | boolean  | true   | 数据收集，当数据收集关闭时，SDK 将不会再产生事件和上报事件   |
| idMappingEnabled              | boolean  | false  | 是否开启多用户身份上报                                       |
| requestOptions.connectTimeout | number   | 30     | 事件请求尝试建立连接的最大等待时间，默认为 30 秒             |
| requestOptions.transferTimeout| number   | 30     | 事件请求允许传输数据的最大等待时间，默认为 30 秒           |
| dataValidityPeriod            | number   | 7      | 本地未上报的事件数据有效时长，默认为 7 天                    |
| encryptEnabled                | boolean  | true   | 事件请求是否开启加密传输，加密上报时，不会明文显示           |
| compressEnabled               | boolean  | true   | 事件请求是否开启压缩传输 (snappy)                            |
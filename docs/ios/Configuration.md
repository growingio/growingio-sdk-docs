---
sidebar_position: 2
title: 初始化配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK 会接收一个由用户传入的默认配置 `Configuration`，配置相关说明如下表：

### 配置表格

| Config                       | 参数类型 | 是否必填 | 默认值 | 说明 | 其它 |
| :-------------------------   | :------   | :----:  |:------  |:------| :---: |
| `accountId`                  | `String`  | 是      | `nil`   | 项目 ID(AccountID)，每个应用对应唯一值 | - |
| `dataSourceId`            | `String`  | 是      | `nil`   | 应用的 DataSourceId，唯一值 | - |
| `dataCollectionServerHost`| `String`  | 是      | `nil`   | 服务端部署后的  ServerHost | - |
| `debugEnabled`            | `Bool` | 否      | `false`  | 调试模式，会打印 SDK log，抛出错误异常，在线上环境请关闭 | - |
| `cellularDataLimit`       | `UInt`     | 否      | `10`     | 每天发送数据的流量限制，单位 MB | - |
| `dataUploadInterval`      | `TimeInterval`     | 否      | `15`     | 数据发送的间隔，单位秒 | - |
| `sessionInterval`         | `TimeInterval`     | 否      | `30`     | 会话后台留存时长，单位秒 | - |
| `dataCollectionEnabled`   | `Bool` | 否      | `true`   | 是否采集数据 | - |
| `excludeEvent`            | `UInt`     | 否      | `0`      | 设置事件过滤 | - |
| `ignoreField`             | `UInt`     | 否      | `0`      | 设置事件属性过滤 | - |
| `impressionScale`         | `Float`   | 否      | `0`      | 元素曝光事件中的比例因子,范围 [0-1] | <font color='red'>无埋点独有</font> |
| `idMappingEnabled` | `Bool` | 否 | `false` | 是否开启多用户身份上报 | - |
| `urlScheme` | `String` | 否 | `nil` | 自定义 URL Scheme | - |
| `encryptEnabled` | `Bool` | 否 | `false` | 是否开启网络传输加密 | - |
| `useProtobuf` | `Bool` | 否 | `true` | 是否采用 Protobuf 格式保存和上传事件数据 | - |
| `autotrackEnabled` | `Bool` | 否 | `true` | 是否开启无埋点采集 | <font color='red'>无埋点独有</font> |
| `autotrackAllPages` | `Bool` | 否 | `false` | 是否开启页面自动采集 | <font color='red'>无埋点独有</font> |

### 详细说明

#### 1. **accountId**， **setDataSourceId**， **setDataCollectionServerHost**

这些为必传参数，若不清楚具体数值请询问相关服务端对接的开发同事。

**setDataCollectionServerHost** 默认域名为 `napi.growingio.com`，若是OP客户，需要设置自己的ServerHost。

#### 2. **debugEnabled**

默认不开启，开启后会输出 SDK Log 日志。

#### 3. **cellularDataLimit**

为每日在 4G/5G 环境下的流量限制，默认为 10M。WIFI 环境下则不计流量。

#### 4. **dataUploadInterval**

上报间隔，GrowingIO SDK 会先将事件存入数据库中，然后以每隔默认时间 15 秒的情况下向服务器发送事件包（最大 500 条事件）。

#### 5. **sessionInterval**

设置会话后台留存时长，指当前会话在应用进入后台后的最大留存时间，默认为 30 秒。另外，其他情况下也会重新生成一个新的会话，如设置用户 ID 等核心信息，重新打开数据收集等。

#### 6. **dataCollectionEnabled**

数据收集，当数据收集关闭时，SDK 将不会再获取设备信息，也不会产生事件和上报事件。

#### 7. **excludeEvent**

事件过滤，默认情况下，事件不会进行过滤。但若不想采集某些事件可以在此设置。事件类型可以参考 [GrowingEventFilter](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Public/GrowingEventFilter.h)

#### 8. **ignoreField**

事件属性过滤，事件属性指上报事件中携带的属性参数。可过滤事件属性可以参考 [GrowingFieldsIgnore](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Public/GrowingFieldsIgnore.h)

#### 9. **impressionScale**

> 无埋点 SDK 独有

曝光比例，与曝光事件结合使用。曝光比例是指当一个曝光的 View 出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为 0 则表示只要出现即产生曝光事件，若设为 1 则表示要整个 View 都出现在屏幕中。

#### 10. **idMappingEnabled**

是否支持多用户身份上报, 默认不支持。
是否支持多用户身份上报, 与 API 接口`setLoginUserId:userKey:`对应，需要上报 userkey 时开启； 开启时，userKey会在每次上报数据时携带；关闭时，userKey不上报。

#### 11. **urlScheme**

自定义 URL Scheme，如存在多环境配置，可基于不同环境进行自定义，需同时在工程中添加该 [URL Scheme](/docs/ios/Introduce#步骤-4-添加-url-scheme-ios-平台)

#### 12. **encryptEnabled**

设置为 true 时，网络传输内容将会加密，不会明文显示。

#### 13. **useProtobuf**

是否使用 [Google Protobuf](https://developers.google.cn/protocol-buffers) 格式保存和上传事件数据，默认为 true，为 false 则采用 JSON 格式

#### 14. **autotrackEnabled**

当集成无埋点 SDK 时，设置为 false 将关闭无埋点功能和自动采集

#### 15. **autotrackAllPages**

当集成无埋点 SDK 时，设置为 true 将开启页面自动采集，alias 默认为 ViewController 的类名；通过调用 `autotrackPage` 接口所配置的 alias 将覆盖默认值
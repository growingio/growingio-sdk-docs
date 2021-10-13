---
sidebar_position: 2
title: 初始化配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在初始化过程中，SDK会接收一个由用户传入的默认配置`Configuration`,配置相关说明如下表：
### 配置表格

| Config                       | 参数类型 | 是否必填 | 默认值 | 说明 | 其它 | 版本 |
| :-------------------------   | :------   | :----:  |:------  |:------| :---: | :------------------------:   |
| `projectId`                  | `NSString`  | 是      | `null`   | 项目ID，每个应用对应唯一值 | - | - |
| `dataSourceId`            | `NSString`  | 是      | `null`   | 应用的DataSourceId，唯一值 | - | - |
| `dataCollectionServerHost`| `NSString`  | 是      | `https://api.growingio.com`   | 服务端部署后的 ServerHost | - | - |
| `debugEnabled`            | `BOOL` | 否      | `NO`  | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - | - |
| `cellularDataLimit`       | `NSUInteger`     | 否      | `10`     | 每天发送数据的流量限制，单位MB | - | - |
| `dataUploadInterval`      | `NSTimeInterval`     | 否      | `15`     | 数据发送的间隔，单位秒 | - | - |
| `sessionInterval`         | `NSTimeInterval`     | 否      | `30`     | 会话后台留存时长，单位秒 | - | - |
| `dataCollectionEnabled`   | `BOOL` | 否      | `YES`   | 是否采集数据 | - | - |
| `excludeEvent`            | `int`     | 否      | `0`      | 设置事件过滤 | - | >=3.2.1 |
| `ignoreField`             | `int`     | 否      | `0`      | 设置事件属性过滤 | - | >=3.2.1 |
| `impressionScale`         | `float`   | 否      | `0`      | 元素曝光事件中的比例因子,范围 [0-1] | 无埋点独有 | - |
| `idMappingEnabled` | `BOOL` | 否 | `NO` | 是否开启多用户身份上报 |  | >=3.3.0 |

### 详细说明

1. **projectId** **urlScheme** **setDataSourceId** **setDataCollectionServerHost**   
这四个参数为 CDP 用户必须要设置的参数，若不清楚具体数值请询问相关服务端对接的开发同事。
2. **debugEnabled** 默认不开启，开启后会输出如上所示的SDK Log 日志。  
3. **cellularDataLimit** 为每日在4G环境下的流量限制，默认为10M。WIFI环境下则不计流量。
4. **dataUploadInterval** 上报间隔  
GrowingIO SDK 会先将事件存入数据库中，然后以每隔默认时间15秒的情况下向服务器发送事件包（最大50条事件）。
5. **sessionInterval** 设置会话后台留存时长  
指当前会话在应用进入后台后的最大留存时间，默认为30秒。另外，其他情况下也会重新生成一个新的会话，如设置用户ID等核心信息，重新打开数据收集等。
6. **dataCollectionEnabled** 数据收集  
当数据收集关闭时，SDK将不会再获取设备信息，也不会产生事件和上报事件。
7. **excludeEvent** 事件过滤  
默认情况下，事件不会进行过滤。但若不想采集某些事件可以在此设置。事件类型可以参考 [GrowingEventFilter](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Event/GrowingEventFilter.h)
8. **ignoreField** 事件属性过滤  
事件属性指上报事件中携带的属性参数。可过滤事件属性可以参考 [GrowingFieldsIgnore](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Event/GrowingFieldsIgnore.h)
9. **impressionScale** 曝光比例  
与曝光事件结合使用。曝光比例是指当一个曝光的View出现在屏幕时可见的部分占据自身尺寸的比例，比如说若设为0则表示只要出现即产生曝光事件，若设为1则表示要整个View都出现在屏幕中。
10. **idMappingEnabled** 多用户身份上报  
  是否支持多用户身份上报，默认不支持。与 API 接口`setLoginUserId:userKey:`对应，开启时，userKey 会在每次上报数据时携带；关闭时，接口与`setLoginUserId`作用相同


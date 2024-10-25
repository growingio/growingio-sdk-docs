---
sidebar_position: 4
title: Go SDK
---

### 版本记录
|    版本    | 说明 |  日期  |
|:-------:| :----:  |  :-------:  |
| V1.0.0 | 支持埋点事件、用户属性事件、维度表上报 | 2024-10-23 |

### 简介
GrowingIO 提供在 Server 端部署的 Go SDK，从而可以方便地进行事件上报等操作。
源码托管在 [growingio/growingio-sdk-go](https://github.com/growingio/growingio-sdk-go)

## 集成准备
### 获取SDK初始化必传参数：AccountID、DataSourceID、ServerHost
:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
ServerHost：采集数据上报的服务器地址，非平台地址<br/>

AccountID、DataSourceID 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持
:::
##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showServerDataSourceID" />

### 下载 & 安装

下载 SDK:
```go
go get github.com/growingio/growingio-sdk-go
```
或者更新本地 SDK：
```go
go get -u github.com/growingio/growingio-sdk-go
```
> 支持 go >=1.21

## 使用说明
### 初始化参数

<table>
  <tr><th>模块</th><th>参数</th><th>必选</th><th>类型</th><th>默认值</th><th>说明</th><th>yaml对应字段</th></tr>
  <tr><td rowspan="3">SdkConfig</td><td>AccountId</td><td>true</td><td>string</td><td>-</td><td>项目ID</td><td>account_id</td></tr>
  <tr><td>DataSourcesId</td><td>true</td><td>string</td><td>-</td><td>数据源ID</td><td>data_source_id</td></tr>
  <tr><td>LogLevel</td><td>false</td><td>见LogLevel定义</td><td>ErrorLogLevel</td><td>日志打印级别</td><td>log_level</td></tr>
  <tr><td rowspan="2">HttpConfig</td><td>ServerHost</td><td>true</td><td>string</td><td>-</td><td>数据收集服务域名,对应 ServerHost ，请参考运维手册或联系技术支持获取</td><td>server_host</td></tr>
  <tr><td>RequestTimeout</td><td>false</td><td>int</td><td>5</td><td>数据请求超时时间，单位秒</td><td>timeout</td></tr>
  <tr><td rowspan="5">BatchConfig</td><td>Enable</td><td>false</td><td>bool</td><td>false</td><td>是否通过异步队列批量上报，默认为同步单个上报</td><td>enable</td></tr>
  <tr><td>MaxSize</td><td>false</td><td>int</td><td>500</td><td>当队列数据达到设置的最大值时，打包上传事件信息</td><td>max_size</td></tr>
  <tr><td>FlushAfter</td><td>false</td><td>int</td><td>10</td><td>队列发送时间间隔，单位秒</td><td>flush_after</td></tr>
  <tr><td>RoutineCount</td><td>false</td><td>int</td><td>16</td><td>异步协程数量</td><td>routine_count</td></tr>
  <tr><td>MaxCacheSize</td><td>false</td><td>int</td><td>10240</td><td>异步队列可缓存的最大事件数量</td><td>max_cache_size</td></tr>
</table>

**代码示例**

```go
import sdk "github.com/growingio/growingio-sdk-go"

// 方式1：使用初始化配置项进行初始化
func initAnalytics() {
    config := &sdk.Config{
        SdkConfig: sdk.SdkConfig{
            AccountId:    "Your AccountId",
            DataSourceId: "Your DataSourceId",
            LogLevel:     sdk.DebugLogLevel,
        },
        HttpConfig: sdk.HttpConfig{
            ServerHost:     "Your Server Host",
            RequestTimeout: 5,
        },
        BatchConfig: sdk.BatchConfig{
            Enable:       true,
            MaxSize:      100,
            FlushAfter:   5,
            RoutineCount: 16,
            MaxCacheSize: 10240,
        },
    }
    sdk.InitAnalytics(config)
}

// 方式2：使用配置文件进行初始化
func initAnalyticsByConfigFile() {
    sdk.InitAnalyticsByConfigFile("example/yml/config.yml")
}
```

**yaml示例**

```yaml
sdk:
  account_id: Your AccountId
  data_source_id: Your DataSourceId
  log_level: debug #debug/info/warn/error
http:
  server_host: Your Server Host
  timeout: 10
batch:
  enable: true
  max_size: 100
  flush_after: 5
  routine_count: 8
  max_cache_size: 10240
```

### 数据格式

Go SDK 使用 protobuf 数据格式进行上报，并采用 golang/snappy 进行数据压缩

## API接口使用

### 埋点事件

发送一个埋点事件。在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性

#### 参数说明

| 参数           | 是否必选  | 类型   | 说明  |
| :------------- | :----: | :-----: | ------ |
| EventName     | true  | string | 埋点事件标识符  |
| EventTime     | false | int64   | 事件发生时间(毫秒)；<br/>需要开启“自定义event_time上报”功能方可生效，请联系技术支持确认 |
| AnonymousId   | false | string | 访问用户ID，与登录用户ID，不能同时为空 |
| LoginUserKey | false | string | 登录用户KEY (选填，需有规划并在平台配置后再上报)，传此参数时，同时需传登录用户ID |
| LoginUserId  | false | string | 登录用户ID，与访问用户ID，不能同时为空 |
| Attributes     | false | map[string]interface{}   | 事件发生时,所伴随的维度信息；<br/> value 支持 string\|bool\|int\|float64 等等基础数据类型，以及 map[string]string 和数组，数组中元素支持 string\|bool\|int\|float64 等等基础数据类型|

#### 代码示例

```go
func trackCustomEvent() {
    builder := sdk.NewCustomEvent("launch")
    builder.AnonymousId = "70C4B9C6-7B9B-675A-5E6B-4D823F5696E3"
    builder.Attributes = map[string]interface{}{
        "name":   "david",
        "age":    100,
        "hobby": []string{
            "football",
            "pingpong",
        },
    }
    sdk.TrackCustomEvent(builder)
}

func trackCustomEventByChaining() {
    sdk.TrackCustomEvent(
        sdk.NewCustomEvent("userInfo").WithLoginUserId("david").WithAttributes(map[string]interface{}{
            "name":   "david",
            "age":    100,
            "hobby": []string{
                "football",
                "pingpong",
            },
    }))
}
```

:::info

详细使用示例:[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

:::

### 登录用户属性事件

以登录用户的身份定义登录用户属性，比如年龄、性别、会员等级等，用于用户信息相关分析<br/>
在添加登录用户属性代码之前，需要在CDP平台用户管理界面中创建用户属性

#### 参数说明

| 参数           | 必选  | 类型   | 说明                        |
| :------------- | :---- | :----- | --------------------------- |
| LoginUserId  | true  | string | 登录用户ID，与访问用户ID，不能同时为空 |
| LoginUserKey | false | string | 登录用户KEY (选填，需有规划并在平台配置后再上报)，传此参数时，同时需传登录用户ID |
| EventTime     | false | int64   | 当前时间戳(毫秒)  |
| AnonymousId   | false | string | 访问用户ID，与登录用户ID，不能同时为空 |
| Attributes     | false | map[string]interface{}   | 用户属性维度信息；<br/> value 支持 string\|bool\|int\|float64 等等基础数据类型，以及 map[string]string 和数组，数组中元素支持 string\|bool\|int\|float64 等等基础数据类型 |

#### 代码示例

```go
func trackUser() {
    builder := sdk.NewUser("mike")
    builder.EventTime = time.Now().UnixMilli()
    builder.Attributes = map[string]interface{}{
        "key1": "value1",
    }
    sdk.TrackUser(builder)
}

func trackUserByChaining() {
    sdk.TrackUser(
        sdk.NewUser("jack").WithEventTime(time.Now().UnixMilli()).WithAttributes(map[string]interface{}{
            "key2": "value2",
        }))
}
```

:::info

详细使用示例:[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

:::

### 维度表(CDP平台版本>=2.1)

上传一个维度表记录。在添加所需要上传维度表记录代码之前，需要在维度表管理界面中创建对应维度表及其属性

#### 参数说明

| 参数       | 必选  | 类型   | 说明             |
| :--------- | :---- | :----- | ---------------- |
| ItemId   | true  | string | 维度表模型ID(记录ID) |
| ItemKey    | true  | string | 维度表标识符      |
| Attributes | false | map[string]interface{}   | 维度表属性及值 |

#### 代码示例

```go
func submitItem() {
    builder := sdk.NewItem("num99", "banana")
    builder.Attributes = map[string]interface{}{
        "key1": "value1",
    }
    sdk.SubmitItem(builder)
}

func submitItemByChaining() {
    sdk.SubmitItem(
        sdk.NewItem("num100", "apple").WithAttributes(map[string]interface{}{
            "key2": "value2",
        }))
}
```

## 集成代码示例一览

```go
package main

import (
    "sync"
    "time"

    sdk "github.com/growingio/growingio-sdk-go"
)

func main() {
    // 通过创建Config对象初始化
    initAnalytics()

    // 通过本地配置文件生成Config对象初始化
    // initAnalyticsByConfigFile()

    // 埋点事件
    trackCustomEvent()
    trackCustomEventByChaining()

    // 用户登录属性事件
    trackUser()
    trackUserByChaining()

    // 维度表
    submitItem()
    submitItemByChaining()

    // example调试时，运行完会直接退出，增加延时，等待sdk中的异步实现（发送埋点数据）执行完成
    waitGoroutineInSdk()
}

func initAnalytics() {
    config := &sdk.Config{
        SdkConfig: sdk.SdkConfig{
            AccountId:    "123456",
            DataSourceId: "654321",
            LogLevel:     sdk.DebugLogLevel,
        },
        HttpConfig: sdk.HttpConfig{
            ServerHost:     "https://www.example.com/",
            RequestTimeout: 5,
        },
        BatchConfig: sdk.BatchConfig{
            Enable:     true,
            MaxSize:    100,
            FlushAfter: 5,
        },
    }
    sdk.InitAnalytics(config)
}

func initAnalyticsByConfigFile() {
    sdk.InitAnalyticsByConfigFile("example/yml/config.yml")
}

func trackCustomEvent() {
    builder := sdk.NewCustomEvent("launch")
    builder.AnonymousId = "70C4B9C6-7B9B-675A-5E6B-4D823F5696E3"
    builder.Attributes = map[string]interface{}{
        "name":   "david",
        "age":    100,
        "hobby": []string{
            "football",
            "pingpong",
        },
    }
    sdk.TrackCustomEvent(builder)
}

func trackCustomEventByChaining() {
    sdk.TrackCustomEvent(
        sdk.NewCustomEvent("userInfo").WithLoginUserId("david").WithAttributes(map[string]interface{}{
            "name":   "david",
            "age":    100,
            "hobby": []string{
                "football",
                "pingpong",
            },
    }))
}

func trackUser() {
    builder := sdk.NewUser("mike")
    builder.EventTime = time.Now().UnixMilli()
    builder.Attributes = map[string]interface{}{
        "key1": "value1",
    }
    sdk.TrackUser(builder)
}

func trackUserByChaining() {
    sdk.TrackUser(
        sdk.NewUser("jack").WithEventTime(time.Now().UnixMilli()).WithAttributes(map[string]interface{}{
            "key2": "value2",
        }))
}

func submitItem() {
    builder := sdk.NewItem("num99", "banana")
    builder.Attributes = map[string]interface{}{
        "key1": "value1",
    }
    sdk.SubmitItem(builder)
}

func submitItemByChaining() {
    sdk.SubmitItem(
        sdk.NewItem("num100", "apple").WithAttributes(map[string]interface{}{
            "key2": "value2",
        }))
}

func waitGoroutineInSdk() {
    var wg sync.WaitGroup
    wg.Add(1)
    go func() {
        defer wg.Done()
        time.Sleep(20 * time.Second)
    }()
    wg.Wait()
}
```

---
title: 版本记录
sidebar_position: 0
---

## [2.0.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/2.0.0) (2024-09-14)

从 2.0.0 开始，本 SDK 基于将于 2024 年第四季度发布的 HarmonyOS NEXT(5.0.0, API 12) 商业稳定版本进行开发，废弃 1.x 版本对 OpenHarmony 和 HarmonyOS(4.x, API 10-11) 的兼容 (对应 API 版本可以通过集成 Android SDK 进行采集)：

* 从集成体验上，部分对外接口改为同步接口，避免 async-await 污染
* 从编译上，发布的 HAR 升级为字节码格式，有效提升应用模块的编译构建效率
* 从性能上，SDK 初始化耗时从 100+ms 降低至不到 10ms
* 从稳定性上，修复了更多业务场景下的已知问题

另外，发布 GrowingToolsKit 插件 1.0.0，旨在帮助用户提高集成 GrowingIO SDK 效率，在使用 SDK 的开发过程中，便于排查问题，为用户提供最好的埋点服务。

以下是具体改动：

### Refactor (BREAKING CHANGE) 破坏性更改

* 发布的 HAR 升级为字节码格式，需要在工程级 build-profile.json5 中配置 useNormalizedOHMUrl 为 true
* `compatibleSdkVersion` 从 4.0.0(10) 改为 5.0.0(12)
* SDK 初始化接口从异步调用方式改为同步，需要更换集成方式 (在数据库创建或连接成功之前产生的事件将先在内存中缓存)
* 事件计时器相关外部接口从异步调用方式改为同步，需要更换集成方式 (内部接口更换已废弃的 API `systemDatetime.getRealTime` 为 `systemDatetime.getUptime`)
* 事件数据库开启加密，与 1.x 版本的事件数据库不兼容，集成 2.0.0 之后 1.x 版本未发送的事件将丢弃
:::info
当用非加密方式打开一个已有的加密数据库时，会返回错误码14800011，表示数据库损坏。此时用加密方式可以正常打开该数据库。<br/>
*https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-data-relationalstore-V5#storeconfig*
:::

* 使用推荐的 [rcp](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/remote-communication-kit-guide-V5)(Remote Communication Kit 远场通信服务) 替换 `@ohos.net.http` 进行事件网络请求
* 初始化配置项 `requestOptions.readTimeout` 重命名为 `requestOptions.transferTimeout`，以符合 `rcp.Configuration.transfer` 对应的配置项名称

### Features 功能

* feat: 添加 APP_CLOSED 事件，在应用进入后台时触发，多实例情况下，各个实例都会发送

### Bug Fixes 修复

* fix: 使用 `applicationStateChange` 监听应用前后台变化，兼容子窗口存在的场景
* fix: 修复多实例下 EventSender 不会同时发送各实例产生的事件数据 (1.x 版本主实例在发送事件请求过程中，子实例不会发送事件)
* fix: 修复采集开关关闭时的逻辑，在 Flutter/Hybrid 混合场景下，也能正确判断是否转发事件
* fix: `dataCollectionEnabled` 仅控制是否进行采集，不再控制是否发送数据，与 iOS/Android SDK 保持一致
* fix: 修复多实例下，事件的 `eventSequenceId` 字段未进行区分，现在各个实例单独计数
* fix: 修复多实例下，错误使用 `trackerId` 作为本地存储 key 的一部分，现在使用 `accountId` + `dataSourceId` 以兼容更多用户场景

### 其他

* fix: SDK 项目名从 library 改为 GrowingAnalytics
* docs: 更新、优化所有文档描述
* feat: 添加 GioKit 插件，包括 SDK 信息、事件库、网络记录等功能，支持多实例下展示
* WIP feat: CDP 添加对内嵌 Flutter 的支持，还需要在 Flutter SDK 3.x 上同步进行适配

## 附：HarmonyOS NEXT SDK 2.0.0 升级说明

> * 最低适配 HarmonyOS NEXT(5.0.0, API 12) 商业稳定版本，compatibleSdkVersion: 5.0.0(12)
> * 2.0.0 与 1.x 版本的事件数据库不兼容，集成 2.0.0 之后 1.x 版本未发送的事件将丢弃
> * 该说明适用于从 1.x 版本升级，全新集成 2.0.0 按照集成文档上的步骤集成即可

### 通过 ohpm 中心仓更新

```c
ohpm update @growingio/analytics
```

### 配置标准化 OHMUrl

在工程级 build-profile.json5 中配置 useNormalizedOHMUrl 为 true
```typescript
{
  "app": {
    "products": [
      {
        "buildOption": {
          "strictMode": {
            "useNormalizedOHMUrl": true
          }
        }
      }
    ]
  }
}
```

### 初始化

调整 SDK 初始化代码从异步改为同步：
```typescript
startAnalytics() {
  let config = new GrowingConfig().CDP(
    'Your AccountId',
    'Your DataSourceId',
    'Your UrlScheme',
    'Your DataCollectionServerHost'
  )
  GrowingAnalytics.start(this.context, config)
}
```

### 集成 GioKit(推荐)

```c
ohpm install @growingio/tools
```
并在 SDK 初始化时，添加 Giokit plugin:
```typescript
import { GrowingToolsKit } from '@growingio/tools'

let config = new GrowingConfig().CDP(
  'Your AccountId',
  'Your DataSourceId',
  'Your UrlScheme',
  'Your DataCollectionServerHost'
)
config.plugins = [new GrowingToolsKit()]
GrowingAnalytics.start(this.context, config)
```

> 注意：请仅在 DEBUG 环境下使用 GrowingToolsKit，RELEASE 环境下 GrowingToolsKit 将不会显示

### 初始化配置

若您的应用中使用了初始化配置项 `requestOptions.readTimeout`，请将其替换为 `requestOptions.transferTimeout`

### 事件计时器

若您的应用中使用了事件计时器相关接口，将调用方式从异步修改为同步：
```typescript
let timerId = GrowingAnalytics.trackTimerStart('eventName')
GrowingAnalytics.trackTimerPause(timerId)
GrowingAnalytics.trackTimerResume(timerId)
GrowingAnalytics.trackTimerEnd(timerId)
GrowingAnalytics.trackTimerEnd(timerId, {
  'property': 'value',
  'property2': 100
})
GrowingAnalytics.removeTimer(timerId)
GrowingAnalytics.clearTrackTimer()
```

## [1.1.0](https://github.com/growingio/growingio-sdk-harmonyos/tree/1.1.0) (2024-06-21)

### Features

* 适配 HarmonyOS NEXT
* 支持从 OpenHarmony API 10 到 API 12
* 支持 New SaaS/SaaS/CDP 平台集成
* 支持多实例采集
* 支持通用属性
* 支持 hybrid 打通
* 支持事件数据加密压缩上报
* 新增初始化配置项，如：网络请求超时时长、数据有效时长、加密、压缩等等

### Bug Fixes

* 优化 SDK 初始化方式，见 README
* 其他稳定性优化
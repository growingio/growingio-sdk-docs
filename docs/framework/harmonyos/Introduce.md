---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK 集成

<Tabs>
  <TabItem value="remote" label="通过 ohpm 中心仓集成" default>

```c
ohpm install @growingio/analytics
```

  </TabItem>
  <TabItem value="local" label="通过本地 har 集成">

  <DownloadCard />

请点击下载 har 文件，再执行以下命令：
```c
ohpm install <您所下载的 har 文件路径>
```

  </TabItem>
</Tabs>

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

### 配置权限

在 module.json5 中配置所需权限：
```typescript
"requestPermissions": [
  {
    "name": "ohos.permission.INTERNET"
  },
  {
    "name": "ohos.permission.GET_NETWORK_INFO"
  }
]
```

### 配置混淆规则

自 SDK 2.5.0 版本起，请在应用模块的混淆规则配置文件 obfuscation-rules.txt 中配置以下保留项：
```typescript
-keep ./../oh_modules/.ohpm/oh_modules/@ohos/protobufjs
-keep ./../oh_modules/.ohpm/oh_modules/snappyjs
-keep ./../oh_modules/.ohpm/oh_modules/long
```

:::warning
请务必验证以上相对路径的正确与否
:::

### 初始化

在 AbilityStage 的 onCreate 方法中初始化 SDK (Stage 模型)：
```typescript
import AbilityStage from '@ohos.app.ability.AbilityStage'
import type Want from '@ohos.app.ability.Want'
import { GrowingAnalytics, GrowingConfig } from '@growingio/analytics'

// Entry类型的module对应配置的srcEntry
export default class MyAbilityStage extends AbilityStage {
  onCreate(): void {
    // 初始化 SDK
    this.setupAnalytics()
    
    // 确保终端已授权个人隐私信息合规收集和处理后，开启 SDK 数据统计分析
    this.startAnalytics()
  }

  onAcceptWant(want: Want): string {
    return 'MyAbilityStage'
  }

  setupAnalytics() {
    let config = new GrowingConfig().NewSaaS(
      'Your AccountId',
      'Your DataSourceId',
      'Your UrlScheme',
      'Your DataCollectionServerHost<Optional>'
    )
    GrowingAnalytics.configure(config)
  }  
  
  startAnalytics() {
    GrowingAnalytics.startAnalytics(this.context)
  }
}
```

> 其中 accountId/dataSourceId/urlScheme 为必填项，dataCollectionServerHost 为可选项，若不清楚请联系您的专属项目经理或技术支持

### 延迟数据统计分析

若您的应用需要延迟 SDK 数据统计分析，请使用 deferStart 接口，需确保传入的是 UIAbilityContext：

```typescript
// 确保终端已授权个人隐私信息合规收集和处理后，开启 SDK 数据统计分析
GrowingAnalytics.deferStart(getContext(this) as common.UIAbilityContext)
```

其他初始化配置项见[表格](/docs/framework/harmonyos/Configuration)，在 start 方法调用前通过`config.<配置项> = 对应值`进行配置

### 添加 URL Scheme

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。把 URL Scheme 添加到您的项目，以便使用 Mobile Debugger 等功能时唤醒您的应用。

1. 在 module.json5 中 EntryAbility 对应的 skills 添加 URL Scheme：

```typescript
{
  "module": {
    "abilities": [
      {
        "name": "EntryAbility",
        "skills": [
          
          // -- 添加 URL Scheme --
          {
            "actions": [
              "ohos.want.action.viewData"
            ],
            "uris": [
              {
                "scheme":"Your URL Scheme", // 替换为您的应用的 URL Scheme
                "host": "growingio/webservice"
              }
            ]
          }
          // -- 添加 URL Scheme --
          
        ]
      },
    ],
  }
}
```

2. 在 EntryAbility.ets 添加 URL Scheme 跳转处理方法

```typescript
onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  let uri = want?.uri
  if (uri) {
    GrowingAnalytics.handleOpenURL(uri)
  }
}

onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  let uri = want?.uri
  if (uri) {
    GrowingAnalytics.handleOpenURL(uri)
  }
}
```

### 智能手表集成

SDK 自 2.10.0 起支持 HarmonyOS 智能手表（`wearable`）设备类型，集成方式与手机一致。暂不支持轻量级智能穿戴设备（`liteWearable`，如运动手环）。

结合手表屏幕小、续航有限的特点，建议：

* **不开启无埋点**：保持 `autotrackEnabled` 为 `false`（默认值），并且**不要调用** `GrowingAnalytics.onWindowStageCreate`。不调用该方法时，SDK 不会注册任何 UI 监听；手动埋点、会话、事件上报等功能不受影响。
* **适当放宽上报间隔**：如将 `dataUploadInterval` 设为 60 秒，以减少网络唤醒。手表上应用退到后台时，SDK 会立即上报一次，保证事件及时送达。
* **不集成 GioKit**：GioKit 调试工具为悬浮窗形态，不适用于手表屏幕。

:::info
关闭无埋点后，SDK 不会产生页面浏览事件和点击事件，请使用[埋点 API](/docs/framework/harmonyos/api) 采集所需的业务事件。
:::

### 查看集成效果

运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: x.x.x`  
则说明 SDK 已经集成成功。

若在初始化中 `debugEnabled` 设置为 true，打开了 Debug ，则可以在日志中看到每个事件的 log 日志输出。

至此，就完成了 HarmonyOS SDK 的集成。

另外，您可使用 [GioKit 辅助插件](/docs/giokit/harmonyos) 进行集成验证。
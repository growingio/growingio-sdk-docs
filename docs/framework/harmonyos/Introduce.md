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

首先请联系您的专属项目经理或技术支持，获取最新 SDK har 静态共享包下载地址并下载，再执行以下命令：
```c
ohpm install <您所下载的 har 文件路径>
```

  </TabItem>
</Tabs>

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

### 初始化

在 AbilityStage 的 onCreate 方法中初始化 SDK (Stage 模型)：
```typescript
import AbilityStage from '@ohos.app.ability.AbilityStage'
import type Want from '@ohos.app.ability.Want'
import { GrowingAnalytics, GrowingConfig } from '@growingio/analytics'

// Entry类型的module对应配置的srcEntry
export default class MyAbilityStage extends AbilityStage {
  onCreate(): void {
    // 应用的HAP在首次加载的时，为该Module初始化操作
    this.startAnalytics()
  }
  onAcceptWant(want: Want): string {
    // 仅specified模式下触发
    return 'MyAbilityStage'
  }

  startAnalytics() {
    let config = new GrowingConfig().NewSaaS(
      'Your AccountId',
      'Your DataSourceId',
      'Your UrlScheme',
      'Your DataCollectionServerHost<Optional>'
    )
    GrowingAnalytics.start(this.context, config)
  }
}
```

> 其中 accountId/dataSourceId/urlScheme 为必填项，dataCollectionServerHost 为可选项，若不清楚请联系您的专属项目经理或技术支持

### 延迟初始化

若您的应用需要延迟初始化 SDK，请使用 deferStart 进行初始化，需确保传入的是 UIAbilityContext：

```typescript
GrowingAnalytics.deferStart(getContext(this) as common.UIAbilityContext, config)
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

### 查看集成效果

运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: x.x.x`  
则说明 SDK 已经集成成功。

若在初始化中 `debugEnabled` 设置为 true，打开了 Debug ，则可以在日志中看到每个事件的 log 日志输出。

至此，就完成了 HarmonyOS SDK 的集成。

另外，您可使用 [GioKit 辅助插件](/docs/giokit/harmonyos) 进行集成验证。
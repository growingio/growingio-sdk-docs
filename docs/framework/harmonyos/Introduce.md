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

  async startAnalytics() {
    let config = new GrowingConfig().CDP(
      'Your AccountId',
      'Your DataSourceId',
      'Your UrlScheme',
      'Your DataCollectionServerHost'
    )
    await GrowingAnalytics.start(this.context, config)
  }
}
```

> 注意：如若需要，可在用户同意隐私协议之后，再进行初始化 SDK
> 其中 accountId/dataSourceId/urlScheme/dataCollectionServerHost 为必填项，若不清楚请联系您的专属项目经理或技术支持

其他初始化配置项见[表格](/docs/framework/harmonyos/Configuration)，在 start 方法调用前通过`config.<配置项> = 对应值`进行配置

### 查看集成效果

运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: x.x.x`  
则说明 SDK 已经集成成功。

若在初始化中 `debugEnabled` 设置为 true，打开了 Debug ，则可以在日志中看到每个事件的 log 日志输出。

至此，就完成了 HarmonyOS SDK 的集成。
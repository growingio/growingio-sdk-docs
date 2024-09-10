---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 集成 GioKit

<Tabs>
  <TabItem value="remote" label="通过 ohpm 中心仓集成" default>

```c
ohpm install @growingio/tools
```

  </TabItem>
  <TabItem value="local" label="通过本地 har 集成">

首先请联系您的专属项目经理或技术支持，获取最新 SDK har 静态共享包下载地址并下载，再执行以下命令：
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

### 初始化
在初始化 GrowingIO HarmonyOS NEXT SDK 时添加 GrowingToolsKit：

```typescript
let config = new GrowingConfig().NewSaaS(
  'Your AccountId',
  'Your DataSourceId',
  'Your UrlScheme',
  'Your DataCollectionServerHost<Optional>'
)
config.plugins = [new GrowingToolsKit()]
GrowingAnalytics.start(this.context, config)
```

:::info
请仅在 DEBUG 环境下使用 GrowingToolsKit，RELEASE 环境下 GrowingToolsKit 将不会显示
:::

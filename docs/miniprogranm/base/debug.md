---
title: SDK调试
sidebar_position: 4
---

您在集成小程序SDK后可通过调试模式来查看SDK是否集成成功

```js
gdp('init', 'your projectId', 'your dataSourceId', 'your AppId' {
  host: 'your apiServerHost',
  version: '1.0.0',
  debug: true  // 打开debug调试能力
});
```

在小程序开发者工具中便可以在调试器中看到所有上报事件的日志输出，类似如图：

![logger](/img/miniprogram-debug-logger.png)


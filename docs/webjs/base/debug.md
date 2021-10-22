---
title: SDK调试
sidebar_position: 5
---

在Web中调试SDK，若你使用未压缩的包可以直接通过debugger的形式来调试，若只是想看数据可以直接在初始化时将`debug`配置项设置为true即可，如下：

```js
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost', 
  version: '1.0.0',
  debug: true  // 打开debug调试能力
});
```

打开debug模式便可以再控制台中看到所有上报事件的日志输出，类似如图

![logger](/img/web-debug-logger.png)


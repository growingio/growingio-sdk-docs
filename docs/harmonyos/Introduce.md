---
sidebar_position: 1
title: 如何集成
---

### 集成准备
#### 获取 SDK 初始化必传参数：Account ID、DataSource ID、URL Scheme、Host
:::info
AccountID：项目 ID，代表一个项目<br/>
DataSourceID：数据源 ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>
Host：采集数据上报的服务器地址，非平台地址<br/>

Account ID、DataSource ID、URL Scheme 需要在 CDP 增长平台上新建数据源，或从已创建的数据源中获取，如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showappdatasourceid" />

### SDK 集成

#### 通过 ohpm 集成
```c
ohpm install @growingio/analytics
```

#### 通过本地 har 集成
首先将下载的 GrowingAnalytics.har 放入项目根目录，再执行以下命令：
```c
ohpm install ./GrowingAnalytics.har
```

#### 初始化
在 Ability 的 onCreate 方法中初始化 SDK (Stage 模型)：
```typescript
import { GrowingAnalytics, GrowingConfig } from '@growingio/analytics'

async startAnalytics() {
  let config = new GrowingConfig(
    'Your AccountId',
    'Your DataSourceId',
    'Your UrlScheme',
    'Your DataCollectionServerHost<Optional>'
  )
  await GrowingAnalytics.start(this.context, config)
}

onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  this.startAnalytics()
}
```
> 其中 accountId/dataSourceId/urlScheme 为必填项，dataCollectionServerHost 为可选项，若不清楚请联系您的专属项目经理或技术支持

其他初始化配置项见[表格](/docs/harmonyos/Configuration)，在 start 方法调用前通过`config.<配置项> = 对应值`进行配置

### 查看集成效果

运行应用，若日志中输出了  
`Thank you very much for using GrowingIO. We will do our best to provide you with the best service. GrowingIO version: x.x.x`  
则说明 SDK 已经集成成功。

若在初始化中 `debugEnabled` 设置为 true，打开了 Debug ，则可以在日志中看到每个事件的 log 日志输出。

至此，就完成了 HarmonyOS SDK 的集成。
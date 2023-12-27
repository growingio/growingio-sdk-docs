---
slug: /ios/modules
title: 模块列表
---

在 GrowingIO 的 SDK 中，可以通过集成不同的模块实现功能的自定义。

## 已有模块功能


| 名称                      |                             说明                             | 文档                                                         |
| :------------------------ | :----------------------------------------------------------: | :----------------------------------------------------------- |
| 混合开发数据收集 - Hybrid | 混合开发模式，默认集成在无埋点 SDK 中；埋点 SDK 需要集成生效 | [H5混合模块](/docs/ios/modules/Hybrid%20Module)    |
| 无埋点圈选 - WebCircle      |         基于无埋点的圈选插件，默认集成在无埋点 SDK 中          | [圈选模块](/docs/ios/modules/WebCircle%20Module)       |
| 数据调试 - MobileDebugger       |         数据调试 Mobile Debugger，默认集成在无埋点/埋点 SDK 中         | [Debugger 模块](/docs/ios/modules/MobileDebugger%20Module) |
| 曝光采集 - ImpressionTrack   |         曝光采集，需要集成生效         | [曝光采集模块](/docs/ios/modules/ImpressionTrack%20Module) |
| 广告 - Ads             |           添加激活事件和 DeepLink 功能，需要集成生效           | [广告模块](/docs/ios/modules/Ads%20Module)        |
| 性能监控 - APM            |          用于监控应用的性能和错误分析，需要集成生效          | [性能监控模块](/docs/ios/modules/APM%20Module)     |
| A/B 测试 - ABTesting            |          A/B测试，需要集成生效          | [A/B测试模块](/docs/ios/modules/ABTesting%20Module)     |
| 数据转发            |          提供各个第三方的数据转发服务，需要集成生效          | [数据转发模块](/docs/ios/modules/OthersAdapter%20Module)     |
| 旧版 SDK 升级 - V2Adapter            |          支持通过修改集成即可从旧版 SDK 无缝升级至最新版本          | [V2Adapter模块](/docs/ios/modules/V2Adapter%20Module)     |
| 更多开发中...           |                                                              |                                                              |


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

---
slug: /ios/modules
title: 模块列表
---

在 GrowingIO 的 SDK 中，可以通过集成不同的模块实现功能的自定义。

## 已有模块功能


| 名称                      |                             说明                             | 文档                                                         |
| :------------------------ | :----------------------------------------------------------: | :----------------------------------------------------------- |
| 混合开发数据收集 - Hybrid | 混合开发模式，默认集成在无埋点 SDK 中；埋点 SDK 需要集成生效 | [H5混合模块](/docs/ios/modules/Hybrid%20Module)    |
| 数据传输格式 - Protobuf   |       使用 protobuf 格式保存和上传事件数据，需要集成生效       | [Protobuf 模块](/docs/ios/modules/Protobuf%20Module) |
| 无埋点圈选 - WebCircle      |         基于无埋点的圈选插件，默认集成在无埋点 SDK 中          | [圈选模块](/docs/ios/modules/WebCircle%20Module)       |
| 数据调试 - MobileDebugger       |         数据调试 Mobile Debugger，默认集成在无埋点/埋点 SDK 中         | [Debugger 模块](/docs/ios/modules/MobileDebugger%20Module) |
| 广告 - Ads             |           添加激活事件和 DeepLink 功能，需要集成生效           | [广告模块](/docs/ios/modules/Advert%20Module)        |
| 性能监控 - APM            |          用于监控应用的性能和错误分析，需要集成生效          | [性能监控模块](/docs/ios/modules/APM%20Module)     |
| 数据转发            |          提供各个第三方的数据转发服务，需要集成生效          | [数据转发模块](/docs/ios/modules/OthersAdapter%20Module)     |
| 更多开发中...           |                                                              |                                                              |


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

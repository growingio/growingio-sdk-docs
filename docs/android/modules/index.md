---
slug: /android/modules
title: 模块列表
---

SDK 可以通过集成不同的模块实现功能的自定义，在 GrowingIO 的 SDK 中，已经有多个模块功能已经从代码中分离出来，后续将会独立出更多的模块。

## 已有模块功能


| 名称     | 说明 |  文档 |
| :------- | :------:  | :---|
| 数据库-database | 数据库为sqlite，默认集成在埋点SDK中 | [数据库模块](/docs/android/modules/core%20module#数据库模块) |
| 网络库-okhttp | 使用okhttp请求网络，sdk默认网络模块  | [网络请求库](/docs/android/modules/core%20module#网络请求库) |
| 网络库-urlconnnection | 使用`urlconnnection`请求网络  | [网络请求库](/docs/android/modules/core%20module#网络请求库) |
| 网络库-volley | 使用volley请求网络  | [网络请求库](/docs/android/modules/core%20module#网络请求库) |
| 数据加密-encoder | 使用 snappy 加密上报的事件数据,需要集成生效  | [数据加密](/docs/android/modules/encoder%20module) |
| 设备标识符-oaid | 提供采集 OAID 的能力,需要集成生效  | [OAID](/docs/android/modules/oaid%20module) |
| 混合开发数据收集-hybrid | 混合开发模式，默认集成在埋点SDK中，需要手动注入（无埋点中自动注入） | [H5混合模块](/docs/android/modules/hybrid%20module) |
| 数据传输格式-protobuf | 使用protobuf格式保存和上传事件数据，sdk 默认  | [Protobuf 模块](/docs/android/modules/core%20module) |
| 数据传输格式-json | 使用json格式保存和上传事件数据，需要集成生效  | [JSON格式模块](/docs/android/modules/json%20module#数据格式库) |
| 无埋点圈选-circler | 基于无埋点的圈选插件，默认集成在无埋点SDK中  | [圈选模块](/docs/android/modules/circler%20module) |
| 数据调试-debugger | 数据调试Mobile Debugger，默认集成在无埋点/埋点SDK中 | [Debugger 模块](/docs/android/modules/debugger%20module) |
| 广告-ads | 添加激活事件和DeepLink功能，需要集成生效 | [广告模块](/docs/android/modules/advert%20module) |
| 性能监控-apm | 用于监控应用的性能和错误分析，需要集成生效  | [性能监控模块](/docs/android/modules/apm%20module) |
| flutter | 当应用需要使用Growingio Flutter SDK，需要在原生SDK中集成生效 | [Flutter模块](/docs/android/modules/flutter%20module) |
| A/B分组实验-abtest | 当应用需要使用A/B分组实验功能时，需要在原生SDK中集成生效 | [A/B分组测试模块](/docs/android/modules/abtest%20module) |
| 更多开发中... |

## 注册模块代码

** 初始化配置时集成模块 **
```java
// 初始化SDK时，可以注册对应模块
GrowingAutotracker.startWithConfiguration(this,
        new AutotrackConfiguration("accountId", "urlScheme")
        //...
        .addPreloadComponent(<模块对象>, <模块配置>)
        // 或者
        .addPreloadComponent(<模块对象>)

);
```

** 运行时注册模块 **

所有的模块都可以在运行中注册替换。

```java
GrowingAutotracker.get().registerComponent(<模块对象>, <模块配置>)
// 或者
GrowingAutotracker.get().registerComponent(<模块对象>)
```


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
---
slug: /giokit/ios
title: 功能介绍
---


import useBaseUrl from '@docusaurus/useBaseUrl';

## SDK 工具

### SDK 自检

点击自检页中间的按钮，可以帮助您检测当前 SDK 集成状态，如：

- 当前 SDK 版本
- SDK 初始化状态
- 项目ID
- ServerHost
- URL Scheme 配置等等

:::caution 注意

若标注红字则说明该项设置可能在正式环境下会有隐患。

:::

<img alt="SDK 自检" src={useBaseUrl('/img/giokit/ios/checkself.gif')}/>

### SDK 信息

收集了 SDK 以及应用的所有基本信息，您可以在这里查看对比所配置内容是否符合预期。如有任何问题，还可截长图发送给技术支持协助排查。

 <img alt="SDK 信息" src={useBaseUrl('/img/giokit/ios/sdkinfo.gif')}/>

### 事件库

以列表形式展示自插件启用后所有的埋点数据及其发送状态，点击单条数据可查看数据详情。数据格式请移步[测量协议](/knowledge/measurement)。数据关注点请参考[校验时需关注字段和说明](/knowledge/debugverify#校验时需关注字段和说明)。

<img alt="埋点数据" src={useBaseUrl('/img/giokit/ios/sdkdata.gif')}/>

### XPath追踪

开启该功能后，拖动圆点到对应控件上，即可显示该控件的 path 路径，便于对照已圈选的指标。支持原生控件及原生 WebView。

<img alt="埋点追踪" src={useBaseUrl('/img/giokit/ios/circler.gif')}/>

### 网络记录

该界面会显示应用**运行期间**产生的所有网络请求，包括请求数量，请求大小和请求错误的个数。同时在详情页内可以查看使用了加密库之后的请求数据。

 <img alt="网络请求" src={useBaseUrl('/img/giokit/ios/sdkhttp.gif')}/>

### 实时事件

点击后打开实时事件监控，App 中触发的所有埋点事件实时展示，点击界面弹出的事件页签可进入事件库列表查看对应事件数据。再次点击关闭监控。

 <img alt="实时事件" src={useBaseUrl('/img/giokit/ios/sdkrealtime.gif')}/>

 ### H5_GioKit (SDK >= 2.1.0)

点击后，将对页面中最后一个 WKWebView 注入 WebJS GioKit 插件，用于在移动端排查 Web JS SDK 运行状态。

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

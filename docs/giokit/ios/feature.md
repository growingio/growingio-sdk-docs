---
sidebar_position: 2
title: 功能介绍
---

import useBaseUrl from '@docusaurus/useBaseUrl';

### SDK 自检

点击自检页中间的按钮，可以帮助你检测当前 SDK 集成状态，如：

- 当前 SDK 版本
- SDK 初始化状态
- Project ID
- ServerHost
- URL Scheme 配置等等

:::caution 注意

若标注红字则说明该项设置可能在正式环境下会有隐患。

:::

<img alt="SDK 自检" src={useBaseUrl('/img/giokit/ios/checkself.png')}/>

### SDK 信息

收集了 SDK 以及应用的所有基本信息，你可以在这里查看对比所配置内容是否符合预期。如有任何问题，还可截长图发送给技术支持协助排查。

 <img alt="SDK 信息" src={useBaseUrl('/img/giokit/ios/sdkinfo.png')}/>

### 埋点数据

以列表形式展示自插件启用后所有的埋点数据及其发送状态，点击单条数据可查看数据详情。数据格式请移步[测量协议](/docs/Measurement%20Protocol)。

<img alt="埋点数据" src={useBaseUrl('/img/giokit/ios/sdkdata.png')}/>

<img alt="埋点数据详情" src={useBaseUrl('/img/giokit/ios/datadetail.png')}/>

### XPath追踪

开启该功能后，拖动圆点到对应控件上，即可显示该控件的 path 路径，便于对照已圈选的指标。支持原生控件及原生 WebView。

<img alt="埋点追踪" src={useBaseUrl('/img/giokit/ios/circler.png')}/>

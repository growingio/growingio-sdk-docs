---
sidebar_position: 4
title: Debugger 模块
---

GrowingIO SDK 支持的 Mobile Debugger 工具，可对应用中集成的SDK事件发送进行调试和校验。

在唤起 Debugger 的 APP 后，该 APP 采集的行为数据以及当前页面截图就会出现在网页上，测试同学可以根据数据看数据的采集以及发送情况，对数据进行测试。

:::info
当你集成无埋点 / 埋点 SDK 时，Debugger 模块会默认集成到 SDK 中。

SDK 延迟初始化时，扫码 Debugger 在冷启动情况下 (先唤起应用再初始化 SDK) 无法正常使用，请使用热启动方式。

若不想要在生产环境中集成 Debugger 模块，可参考 [基于 GrowingIO 现有 SDK 基础上的二次开发](/blog/custom%20ios%20sdk)，自定义 SDK 模块。
:::

### 使用方式

登录 GrowingIO CDP 管理平台（一般来说，CDP 都会配有数据管理），在平台管理--->客户数据平台--->数据校验--->Mobile Debugger 进入 Mobile Debugger 启动页。
具体操作参考 [Mobile Debugger](/docs/debugverify/mobiledebugger) 即可。

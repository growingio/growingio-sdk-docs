---
sidebar_position: 8
title: 3.3升级到3.8
---

本文讲介绍如何从3.3版本的SDK无缝升级到3.8版本。请确认您使用的版本为3.3.0以上，如果您为2.x版本且有升级需要，请先联系您的项目经理或技术支持。

#### 在升级之前，请充分阅读3.8版本的文档内容后再进行升级操作

### 初始化

如果您期望保留CDN集成方式，复制粘贴新的集成代码即可。

如果您想替换为npm集成方式，请移除原集成代码，然后按npm集成方式进行集成即可。

**<font color="#FC5F3A">注意：</font>如果您初始化使用的是`setConfig`的方式，请修改为`init`的初始化方式。`setConfig`已经被废弃。**

### 其他

1、如果您在3.3版本就开启并使用了 无埋点 和 加密 功能，请在升级至 3.8 版本时，注册对应插件，请参考[集成](/docs/3.x/webjs/3.8/integrate)按需引入和[插件介绍](/docs/3.x/webjs/3.8/plugins)。

2、如果您使用了旧版[动态配置接口](/docs/3.x/webjs/3.8/commonlyApi#动态配置接口)的调用方式，建议按新版使用方式进行修改。
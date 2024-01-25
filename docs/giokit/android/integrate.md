---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 集成 GioKit

GioKit 代码已托管在 [Github](https://github.com/growingio/giokit-android) 上，欢迎 star,fork。
:::info
**Gradle插件版本**： 4.2及以上  
**Android系统版本**：Android 5.0 及以上, **<font color='red'>GioKit仅支持 AndroidX</font>**<br/>
**请在 [Android SDK](/docs/android) 基础上使用 GioKit**
:::


请参考 [Giokit 配置](/docs/android/AGP7#giokit-配置)，需要开发者在已经集成无埋点SDK的基础上配置引入。


## 接口调用

1. 新增接口 `GioKit.attach(activity)` 用于当 `autoAttachEnabled` 配置为false时，用于手动将Giokit的操作按钮绑定到界面中。

2. 新增接口 `GioKit.detach(activity)`，与 attach 相对应，将 Giokit 与界面解绑。
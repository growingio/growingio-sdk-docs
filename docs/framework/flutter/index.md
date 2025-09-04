---
slug: /framework/flutter
title: Flutter SDK
---

GrowingIO Flutter Plugin 插件 growingio_flutter_plugin，封装了GrowingIO Android 和 iOS SDK 常用的 API，使用此插件，可以完成代码埋点的统计和上报。


## 版本记录

|    版本    | 说明 |  日期  |
| :-----  | :-----   | :----:  |
| v4.3.3 | - GrowingIO HarmonyOS SDK 升级到 2.4.1；<br/>- HarmonyOS 移除 GioKit 插件自动集成，若需要该插件，请手动集成；<br/>- Android jvm 最低版本要求降为 11； | 2025-09-04 |
| v4.3.2 | - Android SDK 升级为4.4.3 | 2025-05-14 |
| v4.3.0 | - 修复 App 圈选相关问题| 2025-01-10 |
| v4.2.0 | - 适配 HarmonyOS SDK 2.0.0 | 2024-09-10 |
| v4.1.0 | - 增加 Flutter SDK 的兼容性，最低版本到 3.0.0；<br/>- 更改 Flutter 弹窗的页面事件配置；<br/>- 多平台添加鸿蒙版本，鸿蒙版本需要指定 [flutter 分支](https://gitee.com/openharmony-sig/flutter_flutter/tree/dev/)；| 2024-07-26 |
| v4.0.0 | 新版本 与 GrowingIO SDK 4.3.0 同步，添加新的接口和参数<br/>- Flutter 的 Page 可以基于 Router发送，也可以手动结合 mixin 类实现，更加清晰的生命周期逻辑和代码结构；<br/>- 圈选的元素只有在定义为 Page 的页面下才能发送元素； | 2024-05-12 |

:::info
**Dart SDK**： >=2.17.0<br/>
**Flutter 版本**：>=3.0.0<br/>
**JDK**: >=11
:::

## 集成准备
### 获取SDK初始化必传参数：Account ID、DataSource ID、URL Scheme
:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
URL Scheme： 是 GrowingIO SDK 从外部唤醒应用时使用的唯一标识<br/>


Account ID、DataSource ID、URL Scheme 需要在 GrowingIO 平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持<br/>
:::
##### 创建
<ImageLoader path="img/common/createapplication" />

##### 查看
<ImageLoader path="img/common/showappdatasourceid" />


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```


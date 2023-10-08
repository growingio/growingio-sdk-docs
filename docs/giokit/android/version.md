---
title: 版本记录
sidebar_position: 0
---
## V1.4.0
1. 添加Giokit 配置项，能够动态实现对Activity的绑定；
2. 适配 GrowingIO SDK 3.5.0的API变化，删除过期API接口；
3. 最低Java要求 11。

:::note 

 标签:**[V1.4.0](https://github.com/growingio/giokit-android/releases/tag/V1.4.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-06-25** 

:::

## V1.3.0
Giokit V1.3.0 版本正式发布，包含以下功能：

1. 添加通用设置界面，能够清除SDK产生的数据库数据；
2. 添加实时事件，能够在屏幕右下角实时显示产生的SDK事件；
3. 添加错误报告界面，能捕获应用运行期间发生的Java错误，包括ANR错误；
4. 添加启动耗时界面，会统计应用每个界面打开的耗时时间，包括app冷热启动时间，Activity启动时间，Fragment启动时间。

:::note 

 标签:**[V1.3.0](https://github.com/growingio/giokit-android/releases/tag/V1.3.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-11-17** 

:::

## V1.2.0
Giokit V1.2.0 版本正式发布，包含以下功能：
1. 以插件库growingio-plugin-library基础，重写整个插件适配AGP低高版本；
2. 移除 buildSrc 文件，方便代码修改和发布；
3. 更新 track code寻找方式:先记录到build文件夹中再生成新的类；
4. 避免与saas插件配合时，AGP7.1至7.2中 Instrumentation API和Transform API无法共用的问题；
5. 更新版本至v1.2.0

:::note 

 标签:**[V1.2.0](https://github.com/growingio/giokit-android/releases/tag/V1.2.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-06-23** 

:::

## V1.1.0
1. no-op 版本使用Java实现，避免未依赖kotlin时出现打包错误；
2. 修复 release 环境下插件未直接返回的问题。

:::note 

 标签:**[V1.1.0](https://github.com/growingio/giokit-android/releases/tag/V1.1.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2022-03-08** 

:::

## V1.0.0
1. SDK 自检 - SDK 集成检测，包括初始化参数，配置参数等
2. SDK 信息 - 全面的 SDK 集成信息与 App 基本信息，方便截图分享
3. 代码埋点 - APP手动埋点检测(仅Android)，展示埋点事件所在的函数
4. 事件库 - 实时埋点数据浏览，包括数据发送状态，发送数据详情
5. XPath跟踪 - 圈选辅助工具，可以展示元素的XPath路径
6. 网络记录 - 埋点事件请求抓包工具，实时查看埋点数据上传进度

:::note 

 标签:**[V1.0.0](https://github.com/growingio/giokit-android/releases/tag/V1.0.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2021-12-15** 

:::

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/giokit-android/releases)
---
title: 版本记录
sidebar_position: 0
---
## RELEASE-4.1.0
### Features

- Flutter 模块支持无埋点SDK 4.0逻辑  ([#206](https://github.com/growingio/growingio-sdk-android-autotracker/pull/206))

- 支持识别设备是否为 HarmonyOS ([#207](https://github.com/growingio/growingio-sdk-android-autotracker/pull/207))

### Bug Fixes

- 修复pb格式上报数据多了operatingSystem字段 ([#207](https://github.com/growingio/growingio-sdk-android-autotracker/pull/207))

- 修复fragment tag 随机赋值的问题 ([#208](https://github.com/growingio/growingio-sdk-android-autotracker/pull/208))

:::note 

 标签:**[v4.1.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.1.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2024-01-25** 

:::

## RELEASE-4.0.0
新版本4.0.0，架构调整和无埋点业务需求([#195](https://github.com/growingio/growingio-sdk-android-autotracker/pull/195))。

### 架构调整
1. 自定义模块接口变化：模块接口由 registerComponents(Context,Registery) => registerComponents(TrackerContext);
2. Provider不再单例，统一由TrackerContext管理，对外隐藏API，方便测试和管理；
3. 添加注解 JsonSerializer，为所有基于BaseEvent的实体类生成JSON的解析类；
4. 添加 shutdown 方法，用于关闭SDK的运行；
5. 默认将以 Pb 协议上报埋点数据，兼容JSON数据转化为PB格式；
6. 添加 downgrade() 方法，调用后SDK将会以旧版本（V3）逻辑上报无埋点数据，包括圈选时上报的数据；
7. 删除 checkstyle，使用 spotless 规范代码;
8. 默认关闭AndroidId、读取剪切板、获取进程号信息，需要用户自己需要时打开;
9. Giokit 可以通过AGP插件配置引入。

### 无埋点业务需求
1. 部分重发逻辑优化和省略；
2. 测量协议更改以及去掉部分属性和事件；
3. APP端的page事件由自动采集改为客户标识采集；
4. 自定义事件将自动关联页面属性上报；
5. 无埋点事件xpath和path将携带完整路径。

:::note 

 标签:**[v4.0.0](https://github.com/growingio/growingio-sdk-android-autotracker/releases/tag/v4.0.0)** &nbsp;&nbsp;&nbsp;&nbsp;日期: **2023-12-26** 

:::

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-android-autotracker/releases)
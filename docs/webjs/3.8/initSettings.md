---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有WebJS SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段名**        | **参数类型** | **默认值**          | **说明**                                              |
|-------------------|--------------|---------------------|-----------------------------------------------------|
| `autotrack`       | `boolean`    | `true`              | 是否开启无埋点采集，集成无埋点插件后默认开启无埋点采集 |
| `compress`        | `boolean`    | `true`              | 是否数据加密，集成加密插件后默认开启加密               |
| `dataCollect`     | `boolean`    | `true`              | 是否开启数据采集                                      |
| `debug`           | `boolean`    | `false`             | 是否开启调试模式                                      |
| `enableIdMapping` | `boolean`    | `false`             | 是否开启多用户身份上报                                |
| `hashtag`         | `boolean`    | `false`             | 是否开启hash解析                                      |
| `host`            | `string`     | `-`                 | 数据上报的服务端地址(无需携带协议头)**(必填)**          |
| `ignoreFields`    | `string[]`   | `-`                 | 上报忽略字段                                          |
| `scheme`          | `string`     | `location.protocol` | 网络协议                                              |
| `version`         | `string`     | `-`                 | Web应用发版版本号(建议填写)                           |

## 配置项详解

### autotrack

默认情况下，SDK不加载无埋点插件。当在 SDK 中加载了无埋点插件时会自动开启无埋点采集。如果您不需要无埋点采集，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 无埋点插件的SDK，初始化设置 `autotrack: false` 进行关闭。

**方式二：**移除无埋点插件即可。

关闭无埋点后 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 事件将不会再被采集和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/3.8/commonlyApi#1开启关闭无埋点数据采集autotrack)

### compress

默认情况下，SDK不加载加密插件。当在 SDK 中加载了加密插件时自动开启数据加密。如果您不需要数据加密，可以通过以下两种方式进行关闭：

**方式一：**使用 **含** 加密插件的SDK，初始化设置 `compress: false` 进行关闭。

**方式二：**移除加密插件即可。

**<font color="#FC5F3A">注意：</font>开启加密后抓包工具无法抓取上报的明文数据，但debug模式开启时开发者工具中仍能看到未加密的上报数据。**

### dataCollect

默认情况下，SDK开启数据采集。如果您需要初始化时暂时关闭数据采集，可以通过指定 `dataCollect: false` 关闭。 初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/3.8/commonlyApi#2开启关闭数据采集datacollect)

### debug

在开发时设置 `debug: true`，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/3.8/commonlyApi#3开启关闭调试模式debug)

### enableIdMapping

多用户身份上报，是否开启多用户身份上报，默认不开启。开启后，调用设置登录用户ID接口时，设置 userKey，服务端调用用户身份融合API时，可将不同的登录用户ID识别为同一用户。开启多用户身份上报后，需要在设置登录用户ID时设置userKey。[参考文档](/docs/webjs/3.8/commonlyApi#2设置登录用户idsetuserid)

### ignoreFields

默认情况下，SDK会上报网络和设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。支持字段如下：

```text
screenHeight      屏幕高度
screenWidth       屏幕宽度
```

#### 示例

```js
gdp('init', '91eaf9b283361032', 'ae45f95742195faa', 'wx123456', {
  version: '1.0.1',
  debug: true,
  ignoreFields: [
    'screenHeight',
    'screenWidth'
  ],
});
```

### scheme

默认情况下，网络协议为自动获取`location.protocol`，但考虑到在开发的过程中可能需要使用`http`等指定协议的测试服务，因此我们提供了临时修改网络协议的配置。

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/3.8/commonlyApi#4修改请求协议scheme)

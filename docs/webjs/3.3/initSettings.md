---
sidebar_position: 3
title: 初始化配置
---

## 配置一览表

下表中列出了所有WebJS SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

| **字段**       | **参数类型** | **默认值** | **说明**                |
|----------------|--------------|-----------|-----------------------|
| `projectId`    | `string`     | 无         | 项目id                  |
| `dataSourceId` | `string`     | 无         | 数据源id                |
| `host`         | `string`     | 无         | 发数请求host **（必填）** |
| `scheme`          | `string`        | `location.protocol`      | 发数请求协议
| `compress`        | `boolean`      |  `false`             | 是否进行数据压缩加密|
| `dataCollect`     | `boolean`      |  `true`              | 是否进行数据采集|
| `debug`           | `boolean`      |  `false`             | 是否开启debug模式|
| `hashtag`         | `boolean`      |  `false`             | 是否开启hash模式|
| `autotrack`       | `boolean`      |  `true`              | 是否开启无埋点采集 |
| `ignoreFields`    | `string[]`     |  无                  | 要忽略的字段仅支持以下字段<br />`screenWidth,screenHeight`   |
| `version`         | `string`       |  无                  | 应用版本（建议填写）对appVer保持兼容                         |
| `enableIdMapping` | `boolean` |  `false` | 是否开启多用户身份上报(SDK版本<font color='red'>>= 3.3.0</font>)<br />设置userKey  |

## 配置项详解

### scheme

默认情况下，请求协议会根据您的网站协议来自定判断。如果你要指定协议，可以通过以下方法设置。

```js
gdp('init', accountId, datasourceId, { scheme: 'https' });
```

### host

设置上传当前应用埋点数据的接受服务器的域名。默认不配置发数的API，需要在初始化时设置host，否则会初始化失败。

```js
gdp('init', accountId, datasourceId, { host: 'Your ServerHost' });
```

### debug

在初始化时设置debug模式为true，打开浏览器控制台，即可看到实时采集的数据。

```js
gdp('init', accountId, datasourceId, { debug: true });
```

### hashtag

GrowingIO 默认不会把hash识别成页面URL的一部分。对于使用hash进行页面转跳的单页面网站应用来说，可以启用hashtag作为标识页面的一部分。

```js
gdp('init', accountId, datasourceId, { hashtag: true });
```

### autotrack

GrowingIO支持无埋点功能的控制，默认情况下是开启的，如果想关闭可以初始化时配置autotrack: false。

```js
gdp('init', accountId, datasourceId, { autotrack: false });
```

### enableIdMapping

多用户身份上报，是否开启多用户身份上报，默认不开启。开启后，调用设置登录用户ID接口时，设置 userKey，服务端调用用户身份融合API时，可将不同的登录用户ID识别为同一用户。开启多用户身份上报后，需要在设置登录用户ID时设置userKey。[参考文档](/docs/webjs/3.3/api#1设置登录用户id)

```js
gdp('init', accountId, datasourceId, { enableIdMapping: true });
```

### compress

GrowingIO Web SDK 默认发送数据是明文，可以通过这个开关将数据压缩，一方面保证数据不能被直接查看，增强了数据的安全性。另一方面可以节省用户的流量。可以通过下面方式开启数据压缩传输。

```js
gdp('init', accountId, datasourceId, { compress: true });
```

---
title: 初始化配置
sidebar_position: 2
---

Web JS SDK在初始化时，接收最后一个对象参数作为初始化配置项，基本格式如下：

```javascript
// 最后一个参数即为初始化配置项
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: '1.0.0',
  debug: true
});
```

## 配置表格

>  该表格列出了当前sdk内置的配置项，但也可以根据插件来新增自定义配置。

| **字段**          | **参数类型**   | **是否必填** | **默认值**          | **说明**                                                     |
| ----------------- | -------------- | ------------ | ------------------- | ------------------------------------------------------------ |
| `accountId`       | `string`       | 是           | 无                  | 项目id                                                       |
| `dataSourceId`    | `string`       | 是           | 无                  | 数据源id                                                     |
| `host`            | `string`       | 是           | 无                  | 发数请求host                                                 |
| `scheme`          | `https`        |否 | `location.protocol`获取      | 发数请求协议
| `compress`        | `boolean`      | 否           | `false`             | 是否进行数据压缩                                             |
| `dataCollect`     | `boolean`      | 否           | `true`              | 是否进行数据采集                                             |
| `debug`           | `boolean`      | 否           | `false`             | 是否开启debug模式                                            |
| `hashtag`         | `boolean`      | 否           | `false`             | 是否开启hash模式                                             |
| `autotrack`       | `boolean`      | 否           | `true`              | 是否开启无埋点采集<br />`view_click,view_change,form_submit` |
| `enableIdMapping` | `boolean`      | 否           | `false`             | 是否开启id mapping允许<br />设置userKey                      |
| `ignoreFields`    | `string[]`     | 否           | 无                  | 要忽略的字段仅支持以下字段<br />`screenWidth,screenHeight`   |
| `platform`        | `string`       | 否           | `web`               | 应用的平台支持字段<br />`web`<br />`wxwv`<br />`minp`<br />`alip`<br />`baidup`<br />`qq`<br />`bytedance` |
| `version`         | `string`       | 否           | 无                  | 应用版本（建议填写）对appVer保持兼容                         |
| `plugins`         | `GioPlugin[]`  | 否           | 无                  | 自定义要启用的插件详细可见插件篇                             |

## 详细说明

### 设置请求协议

默认情况下，请求协议会根据您的网站协议来自定判断。如果你要指定协议，可以通过以下方法设置。

```js
gdp('init', accountId, datasourceId, { scheme: 'https' });
```

### 设置请求host

设置上传当前应用埋点数据的接受服务器的域名。默认不配置发数的API，需要在初始化时设置host，否则会初始化失败。

```js
gdp('init', accountId, datasourceId, { host: 'api.growingio.com' });
```

### 开启debug模式

在初始化时设置debug模式为true，打开浏览器控制台，即可看到实时采集的数据。

```js
gdp('init', accountId, datasourceId, { debug: true });
```

### 开启hash识别

GrowingIO 默认不会把hash识别成页面URL的一部分。对于使用hash进行页面转跳的单页面网站应用来说，可以启用hashtag作为标识页面的一部分。

```js
gdp('init', accountId, datasourceId, { hashtag: true });
```

### 设置无埋点采集

GrowingIO支持无埋点功能的控制，默认情况下是开启的，如果想关闭可以初始化时配置autotrack: false。

```js
gdp('init', accountId, datasourceId, { autotrack: false });
```

### 设置IdMapping高级功能

GrowingIO提供id mapping的高级功能，默认情况是关闭的，如需开启可如下配置。（若不了解请勿配置）

```js
gdp('init', accountId, datasourceId, { enableIdMapping: true });
```

### 设置应用版本version

如果网站在不停升级版本，同时想了解不同版本的数据情况，可以参考如下代码设置应用版本。在实际使用中应用版本对移动端 app 更有价值。

```js
gdp('init', accountId, datasourceId, { version: 'v1.0.2' });
```

> 对appVer进行了兼容，配置appVer也有效。但不保证后期持续支持！

### 开启数据压缩

GrowingIO Web SDK 默认发送数据是明文，可以通过这个开关将数据压缩，一方面保证数据不能被直接查看，增强了数据的安全性。另一方面可以节省用户的流量。可以通过下面方式开启数据压缩传输。

```js
gdp('init', accountId, datasourceId, { compress: true });
```

### 设置应用平台

这是一个不太好的配置，不建议主动设置除了web和wxwv之外的值。GrowingIO会对设置的值进行限制，如果合规，将下降为web。合规的选项可见上表格。

该设置会体现在测量协议的platform字段上，如果在与小程序打通的情况下，不论初始时设置的为什么值，其都会被设置为对应的小程序平台。

```js
gdp('init', accountId, datasourceId, { platform: 'web' });
```


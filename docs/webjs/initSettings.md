---
sidebar_position: 2
title: 初始化配置
---

## 配置一览表

下表中列出了所有WebJS SDK的配置项，请按需设置。如您不确定是否需要，请咨询我们。

> <b>提示：所有的配置项均为非必填。</b>

| **字段名**       | **参数取值**            | **默认值**           | **说明**                     |
|------------------|-------------------------|----------------------|----------------------------|
| `cookieDomain`   | `string`                | `当前站点的一级域名`    | 自定义cookie存储的域         |
| `dataCollect`    | `boolean`               | `true`               | 是否开启数据采集             |
| `debug`          | `boolean`               | `false`              | 是否开启调试模式             |
| `forceLogin`     | `boolean`               | `false`              | 是否开启强制登录             |
| `idMapping`      | `boolean`               | `false`              | 是否开启多用户身份上报       |
| `hashtag`        | `boolean`               | `false`              | 是否开启hash解析             |
| `host`           | `string`                | `napi.growingio.com` | 数据上报的服务端地址         |
| `ignoreFields`   | `string[]`              | `[]`                 | 上报忽略字段                 |
| `originalSource` | `boolean`               | `true`               | 访问事件是否使用原始进入数据 |
| `platform`       | `取值见表`               | `Web`                | 平台类型                     |
| `scheme`         | `string`                | `location.protocol`  | 网络协议                     |
| `storageType`    | `cookie / localStorage` | `cookie`             | SDK信息的持久化存储的类型    |
| `trackBot`       | `boolean`               | `true`               | 是否采集爬虫环境数据         |
| `version`        | `string`                | `1.0.0`              | 应用版本号                   |

## 配置项详解

### cookieDomain

默认情况下，SDK的用户信息（deviceId、userId、sessionId等）都是存储在您站点的主域名下，子域名都集成SDK时会共享用户信息。但如果您需要进行区分，配置此项并指定为当前的子域名即可区分用户信息进行数据隔离。

例：您有`a.growingio.com`和`b.growingio.com`两个或多个子域名，通常情况下都集成SDK访问时会共享用户信息，即视为同一个用户。如果您希望进行区分和数据隔离，指定`cookieDomain`为各自的完整子域名即可。

```js
gdp('init', accountId, datasourceId, { cookieDomain: 'test.growingio.com' });
```

### dataCollect

默认情况下，数据采集开关默认开启。如果您需要初始化时暂时关闭数据采集（例如隐私协议的场景），可以通过指定 `dataCollect: false` 关闭。
需要开启数据采集时再通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)

初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

```js
gdp('init', accountId, datasourceId, { dataCollect: false });
```

隐私合规相关内容（隐私协议的实现）请[参考文档](/docs/compliance/webCompliance#合规步骤)

### debug

在开发时设置 `debug: true`，打开开发者工具控制台，即可看到实时采集的数据。注意正式上线时关闭它，尤其是开启了数据加密时。

```js
gdp('init', accountId, datasourceId, { debug: true });
```

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)

### forceLogin

默认情况下，SDK 会自动生成访问用户 ID 来标识访问用户。如您是在微信公众号H5中集成且需要使用 openId 或 unionId 标识访问用户，可以通过指定 `forceLogin: true` 来打开强制登录模式。

```js
gdp('init', accountId, dataSourceId, appId, {
  forceLogin: true,
});
```

强制登录模式适用于打开站点就在公众号H5中调用[网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html) 之后获取 openId 或 unionId 的微信公众号H5或内嵌页。 开启此模式并调用 `identity` 上报 openId 或 unionId，会将上报的 Id 作为访问用户 ID，有助于访问用户数据关联性分析。

设置`forceLogin`为`true`后，SDK 会暂停上报数据，待调用网页授权后获取 openId 或 unionId，调用 `identify` 方法后开始数据上报。**调用 `identify` 会替换事件数据的 deviceId 为设定值（一般是 openId 或 unionId），包括调用`identify`之前触发的事件。**

```js
gdp('identify', openId / unionId);
```

**<font color="#FC5F3A">注意：</font>非微信公众号H5的站点慎用，可能会导致你的站点没有数据上报。**

### idMapping

多用户身份上报，是否开启多用户身份上报，默认不开启。开启后，调用设置登录用户ID接口时，设置 userKey，服务端调用用户身份融合API时，可将不同的登录用户ID识别为同一用户。开启多用户身份上报后，需要在设置登录用户ID时设置userKey。[参考文档](/docs/webjs/commonlyApi#4设置登录用户idsetuserid)

```js
gdp('init', accountId, datasourceId, { idMapping: true });
```

### hashtag

GrowingIO 默认不会把hash识别成页面URL的一部分。对于使用hash进行页面转跳的单页面网站应用来说，可以启用hashtag作为标识页面的一部分。

```js
gdp('init', accountId, datasourceId, { hashtag: true });
```

### host

Saas客户忽略此项配置；OP私有云部署客户请填写此项，否则您的服务将无法收获行为数据上报。支持域名和IP地址，无需协议头。

### ignoreFields

默认情况下，SDK会上报设备的相关信息。如果您不需要这些数据，可以通过指定 `ignoreFields: [xxx,xxx]` 来忽略指定字段的上报。
您可以指定一项或多项字段，但均需为数组格式进行设置。支持字段如下：

```text
screenHeight      屏幕高度
screenWidth       屏幕宽度
```

```js
gdp('init', accountId, datasourceId, {
  ignoreFields: ['screenHeight', 'screenWidth'],
});
```

### originalSource

默认情况下，SDK发送访问事件（VISIT）时，会使用用户初始进入站点时的`path`和`query`信息，以保证能正确上报utm参数等进入信息。但是需要注意的点是，当您的站点不是在用户进入的页面发送访问事件时，会导致VISIT事件和PAGE事件上报的path和query不一致，从而平台的页面跳出率数据会异常。

举例：如果您的站点在进入时关闭了数据采集，用户进入P1页面，操作后跳转进入P2页面，然后您打开了采集开关。此时，发送的VISIT事件中的path和query是P1页面的，而PAGE事件的path和query则是P2页面的，这就会导致跳出率异常。

如果您不是上述场景，维持默认值即可；如果您是上述场景，不考虑utm相关信息丢失的问题且想保证跳出率准确，那么可以关闭该配置项。

```js
gdp('init', accountId, datasourceId, {
  originalSource: false,
});
```

### platform

默认情况下，SDK的平台取值为`Web`，当您的站点为微信内嵌页等其他场景时，可指定平台。

| **取值** | **对应端**               | **取值**  | **对应端**         |
|----------|------------------------|-----------|-----------------|
| Web      | PC/H5站点                | baidup    | 百度小程序内嵌页   |
| wxwv     | 微信公众号内嵌页         | qq        | QQ小程序内嵌页     |
| Android  | 安卓内嵌页               | bytedance | 头条小程序内嵌页   |
| iOS      | iOS内嵌页                | kuaishoup | 快手小程序内嵌页   |
| Minp     | 微信小程序内嵌页         | jdp       | 京东小程序内嵌页   |
| alip     | 阿里(支付宝)小程序内嵌页 | xhsp      | 小红书小程序内嵌页 |

### scheme

默认情况下，网络协议为自动获取`location.protocol`，但考虑到在开发的过程中可能需要使用`http`等指定协议的测试服务，因此我们提供了初始化修改数据上报网络协议的配置。注意正式上线时关闭它或指定正确的协议，否则可能会因为跨域等问题导致数据上报失败。

```js
gdp('init', accountId, datasourceId, { scheme: 'http' });
```

您也可以通过调用动态修改配置接口来修改它。[参考文档](/docs/webjs/commonlyApi#动态修改配置接口setoption)

### storageType

默认情况下，SDK使用 Cookie 来持久性地存储访问用户Id、SessionId等信息。但有的站点可能有较高的安全设置禁止使用 Cookie 或当前环境不支持 Cookie 时，可指定存储类型为 `localStorage`。

```js
gdp('init', accountId, datasourceId, { storageType: 'localStorage' });
```

### trackBot

默认情况下，SDK会采集支持JavaScript的爬虫访问数据，包括会话信息和页面访问信息，但是不会收集页面的元素数据。你可以通过浏览器维度分辨出有多少是爬虫带来的数据，有多少是正常用户访问的数据。如果你希望不采集爬虫的数据，可关闭该配置项。

```js
gdp('init', accountId, datasourceId, { trackBot: false });
```

### version

该字段的含义为当前客户站点的版本号，建议填写，可用于分析不同版本之间数据的对比。如不填写，默认值则为1.0.0。

```js
gdp('init', accountId, datasourceId, { version: '2.1.1' });
```
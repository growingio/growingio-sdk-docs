---
sidebar_position: 7
title: 多实例
---
## 简介（gioMultipleInstances）

当您的web页面需要使用两套不同采集逻辑和数据双发时，我们提供了多实例的方案。

## 集成

**<font color="#FC5F3A">注意：</font>SDK版本大于等于 4.1.0 支持。**

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioMultipleInstances.js"></script>
```

#### npm集成引入

```js
import gioMultipleInstances from "gio-webjs-sdk/plugins/gioMultipleInstances"
```

### 2、注册

```js
gdp('registerPlugins', [gioMultipleInstances]);
gdp('init', xxx);
```

### 3、使用

```js
// 初始化主实例
gdp('init', accountId1, datasourceId1, {
  ...主实例配置项,
});

// 初始化子实例
gdp('g1.init', accountId2, datasourceId2, {
  ...子实例配置项,
});

// 主实例调用api
gdp('setUserId', xxx);
gdp('track', xxx, xxx);

// 子实例调用api
gdp('g1.setUserId', xxx);
gdp('g1.track', xxx, xxx);
```

## 注意

1、主实例与子实例共享同一个 `deviceId`。因此，`forceLogin` 配置项**仅主实例设值生效**，当且仅当主实例调用 `identify` 后，所有实例才会开始发数。

2、`cookieDomain`、`debug`、`forceLogin`、`hashtag`、`performance` 和 `storageType` 配置项**仅主实例设值生效**，即子实例的表现与主实例相同。因此您无法为子实例单独设置这些配置项。

3、除了以上3个初始化配置项子实例无法使用以外，其他初始化配置项均可单独为子实例进行配置。

4、主实例与子实例的用户信息（userId、userKey、sessionId）互相隔离。

5、无埋点事件**仅主实例生效**，子实例不会上报。因此您使用Web圈选时，是对主实例进行圈选操作。换言之，子实例仅支持埋点。

6、同时使用 小程序内嵌页打通 或 App内嵌页打通 时，**仅主实例生效**，即能与小程序内嵌页或App内嵌页打通的只有主实例。

7、`getPlugins`、`getDeviceId`、`updateImpression` 这3个api无需（无法）指定实例，因为他们是全局api。其他未列出的api都可以指定实例进行调用。

8、同一别名的实例仅能初始化一次。未集成本插件时，初始化子实例会失败，只能运行一个实例。

9、SDK不区分是否使用了别名来作为辨别主实例的条件，而是**第一个初始化完成**的实例就会被认为是主实例。

#### 示例

```js
gdp('g1.init', accountId, datasourceId, { ...主实例配置项 });
gdp('init', accountId, datasourceId, { ...主实例配置项 });
```

上面示例中，先初始化别名为`g1`的实例，后初始化没有别名的实例，则主实例为`g1`。如果与小程序或App打通，则别名为`g1`的实例生效。

10、如果您按默认方式调用api，则默认调用的实际是`g0`实例。即默认不添加别名时调用api，实际上是在使用`g0`这个别名的实例。

#### 示例

```js
gdp('init', accountId, datasourceId, { ...主实例配置项 });
// 等同于↓↓↓
gdp('g0.init', accountId, datasourceId, { ...主实例配置项 });
```

11、本插件为独立插件，集成全量(full)版本的SDK时，并不包括本插件。因此，你需要使用多实例时，不论是否集成了全量版本的SDK，都要注册本插件以激活多实例的能力。

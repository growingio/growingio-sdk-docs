---
sidebar_position: 7
title: 多实例
---
## 简介（gioMultipleInstances）

当您的web页面需要使用两套不同采集方案逻辑和数据双发时，我们提供了多实例的方案。

## 集成

本插件为非标品功能，即使集成了全量版本（即使用gdp-full.js）也需要单独引入并注册本插件。

**<font color="#FC5F3A">注意：</font>SDK版本大于等于 4.1.2 支持。**

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioMultipleInstances.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

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

### 4、埋点、埋点计时、半自动埋点浏览多发

#### 埋点、埋点计时多发

您可以将埋点事件发送给一个或多个实例。例如以下示例代码说明了如何将某一个埋点事件发送给多个实例。

`&&sendTo` 为SDK预定义判断专用属性值，您在埋点时请注意不要使用同名的字段。并且它在实际上报时不会携带入库。

```js
// 此处示例已初始化了默认的g0、g2和g3两个实例
gdp('init', 'xxx','xxx', { ... });
gdp('g2.init', 'xx2','xx2', { ... });
gdp('g3.init', 'xx3','xx3', { ... });


gdp('track', 'sign_in', {
  userId: '0114523',
  userName: 'ZhangSan',
  city: 'HangZhou',
  &&sendTo: ['g2', 'g3']
});

gdp('trackTimerEnd', 'timerId', {
  userId: '0114523',
  userName: 'ZhangSan',
  city: 'HangZhou',
  &&sendTo: ['g2', 'g3']
});
```

上述示例代码中，我们默认已经正确初始化了3个实例，埋点代码会将该埋点事件发送给 `g0` 并同时分别复制发送给 `g2`和`g3` 两个实例。会发送给`g0`的原因是，`track` 的调用等同于 `g0.track`（参考下文多实例规则）。

因此使用的逻辑是，调用的实例会被发送，同时复制发送给`&&senTo`指定的实例。调用和指定复制的实例名为同一个时，只发送一次。

需要注意的是，复制发送埋点时，只会完全复制事件名和事件属性，通用字段例如session、userId等，还是指定实例自身的值。并且**不会带上**指定实例的埋点通用属性。

#### 半自动埋点浏览多发

您可以将半自动埋点浏览事件发送给一个或多个实例。例如以下示例代码说明了如何将某一个埋点事件发送给多个实例。

通过 `data-gio-imp-sendto` 自定义属性标记指定当前节点的半自动埋点浏览发送的目标实例，实例字符串切用英文逗号分隔。

```js
// 此处示例已初始化了默认的g0、g2和g3两个实例
gdp('init', 'xxx','xxx', { ... });
gdp('g2.init', 'xx2','xx2', { ... });
gdp('g3.init', 'xx3','xx3', { ... });
```

```html
<div
  id="imp_11"
  data-gio-imp-track="imp_cat_var"
  data-gio-track-name="cat_picture"
  data-gio-track-time="20210601"
  data-gio-imp-sendto="g2,g3"
>
  这是一个半自动埋点浏览的节点
</div>
```

上述示例代码中，我们默认已经正确初始化了3个实例，埋点代码会将该埋点事件发送给 `g0` 并同时分别复制发送给 `g2`和`g3` 两个实例。

因此使用的逻辑是，主实例会被发送，同时复制发送给`data-gio-imp-sendto`指定的实例。主实例和指定复制的实例名为同一个时，只发送一次。

需要注意的是，复制发送埋点时，只会完全复制事件名和事件属性，通用字段例如session、userId等，还是指定实例自身的值。并且**不会带上**指定实例的埋点通用属性。

## 多实例规则

### 1、初始化配置项

 `cookieDomain`、`debug`、`forceLogin`、`hashtag`、`originalSource`、`performance` 和 `storageType` 配置项**仅主实例设值生效**，即子实例的表现与主实例相同。因此您无法为子实例单独设置这些配置项

除了以上几个初始化配置项子实例无法使用以外，其他初始化配置项均可单独为子实例进行配置。

使用多实例能力时，建议设置 `storageType` 为localstorage，避免因字段过多过长导致cookie超限。

### 2、设备id（匿名用户Id）

主实例与子实例共享同一个 `deviceId`。因此，`forceLogin` 配置项**仅主实例设值生效**，当且仅当主实例调用 `identify` 后，所有实例才会开始发数。

### 3、用户信息

**（1）** 主实例与子实例的用户信息（userId、userKey、sessionId）互相隔离。

**（2）** 用户属性不支持多实例复制发送，仍然需要单独调用。

### 4、api调用

`getPlugins`、`getDeviceId`、`updateImpression` 这3个api无需（无法）指定实例，因为他们是全局api。其他未列出的api都可以指定实例进行调用。

### 5、SDK插件相关

**（1）** 正常web站点中的无埋点事件**仅主实例**会上报，其他子实例不会上报（无论是否开启无埋点），您使用Web圈选时，请对主实例进行圈选操作。

**（2）** 同时使用小程序内嵌页打通或App内嵌页打通时，**主实例和打通的实例**都会上报无埋点事件。

**（3）** 所有实例在配置项正确的情况下，均可以作为小程序和移动端打通的实例。多个实例配置值一致时，先初始化完成的实例打通。换言之，只有一个实例可以与配置对应的小程序或移动端打通。

**（4）** 与小程序打通时，如果打通的是后初始化完成的子实例，则可能会造成主实例前后事件deviceId不一致的问题（因为实例共享deviceId，与小程序打通后会修改为小程序的deviceId）。可以通过控制初始化顺序（先初始化打通的实例）或 先初始化不打通的主实例开启forceLogin，等后初始化完成的子实例打通后调用 identify 设为小程序的deviceId 即可解决。

打通的实例初始化完成即可通过 `localstorage -> value -> giou` 获取小程序的deviceId。

### 6、其他规则

**（1）** 同一别名的实例仅能初始化一次。未集成本插件时，初始化子实例会失败，只能运行一个实例。

**（2）** 如果您按默认方式调用api，则默认调用的实际是`g0`实例，为了保持调用方式向下兼容。即默认不添加别名时调用api，实际上是在使用`g0`这个别名的实例。即完全兼容原来没有使用多实例时的api调用。

#### 示例

```js
gdp('init', accountId, datasourceId, { ...实例初始化配置项 });
// 等同于↓↓↓
gdp('g0.init', accountId, datasourceId, { ...实例初始化配置项 });
```

**（3）** SDK不区分是否使用了别名来作为辨别主实例的条件，而是**第一个初始化完成**的实例就会被认为是主实例。

#### 示例

```js
gdp('g1.init', accountId, datasourceId, { ...实例初始化配置项 });
gdp('init', accountId, datasourceId, { ...实例初始化配置项 });
```

上面示例中，先初始化别名为`g1`的实例，后初始化没有别名的实例，则主实例为`g1`。

**（4）** 本插件为独立插件，集成全量(full)版本的SDK时，不包含本插件。因此，你需要使用多实例时，不论是否集成了全量版本的SDK，都要注册本插件以激活多实例的能力。

## 注意

在使用埋点、埋点计时、半自动埋点浏览多发之前，您仍然需要在平台中每个实例的项目数据源中配置事件以及事件属性。[埋点使用规范](/knowledge/basicknowledge/trackEventUse)

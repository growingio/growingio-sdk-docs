---
sidebar_position: 6
title: 多实例
---
## 简介（gioMultipleInstances）

当您的小程序需要使用两套不同采集方案逻辑和数据双发时，我们提供了多实例的方案。

## 集成

**<font color="#FC5F3A">注意：</font>SDK版本大于等于 4.1.0 支持。**

### 1、引入

#### 下载集成引入

- 下载插件并复制至项目中：
  **<font size="3">[https://assets.giocdn.com/sdk/minip/4.4.2/plugins/gioMultipleInstances.js](https://assets.giocdn.com/sdk/minip/4.4.2/plugins/gioMultipleInstances.js)</font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

```js
import gioMultipleInstances from './utils/plugins/gioMultipleInstances';
```

#### npm 集成引入

```js
import gioMultipleInstances from 'gio-miniprogram-sdk/plugins/gioMultipleInstances';
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
gdp('track', 'sign_in', {
  userId: '0114523',
  userName: 'ZhangSan',
  city: 'HangZhou',
  &&sendTo: ['g2', 'g5']
});

gdp('trackTimerEnd', 'timerId', {
  userId: '0114523',
  userName: 'ZhangSan',
  city: 'HangZhou',
  &&sendTo: ['g2', 'g5']
});
```

上述示例代码，会将该埋点事件发送给 `g0` 并同时分别复制发送给 `g2`和`g5` 两个实例，前提是他们都已经被正确初始化。不存在或未正确初始化的实例会被自动跳过。会发送给`g0`的原因是，`track` 的调用等同于 `g0.track`（参考下文多实例规则）。

因此使用的逻辑是，调用的实例会被发送，同时复制发送给`&&senTo`指定的实例。调用和指定复制的实例名为同一个时，只发送一次。

需要注意的是，复制发送埋点时，只会完全复制事件名和事件属性，通用字段例如session、userId等，还是指定实例自身的值。并且不会带上指定实例的埋点通用属性。

#### 半自动埋点浏览多发

您可以将半自动埋点浏览事件发送给一个或多个实例。例如以下示例代码说明了如何将某一个埋点事件发送给多个实例。

通过 `data-gio-imp-sendto` 自定义属性标记指定当前节点的半自动埋点浏览发送的目标实例，实例字符串切用英文逗号分隔。

```html
<view
  id="imp_11"
  data-gio-imp-track="imp_cat_var"
  data-gio-track-name="cat_picture"
  data-gio-track-time="20210601"
  data-gio-imp-sendto="g2,g5"
>
  这是一个半自动埋点浏览的节点
</view>
```

上述示例代码，会将该埋点事件发送给 主实例 并同时分别复制发送给 `g2`和`g5` 两个实例，前提是他们都已经被正确初始化。不存在或未正确初始化的实例会被自动跳过。

因此使用的逻辑是，主实例会被发送，同时复制发送给`data-gio-imp-sendto`指定的实例。主实例和指定复制的实例名为同一个时，只发送一次。

需要注意的是，复制发送埋点时，只会完全复制事件名和事件属性，通用字段例如session、userId等，还是指定实例自身的值。并且不会带上指定实例的埋点通用属性。

## 多实例规则

### 1、初始化配置项

 `autotrack`、`debug`、`forceLogin`、`keepAlive`、`originalSource`、`performance`、`pluginMode`、`taro`、`taroVue`、`tbConfig` 和 `uniVue` 配置项**仅主实例设值生效**，即子实例的表现与主实例相同。因此您无法为子实例单独设置这些配置项。

除了以上几个初始化配置项子实例无法使用以外，其他初始化配置项均可单独为子实例进行配置。

### 2、设备id（匿名用户Id）

主实例与子实例共享同一个 `deviceId`。因此，`forceLogin` 配置项**仅主实例设值生效**，当且仅当主实例调用 `identify` 后，所有实例才会开始发数。

### 3、用户信息

主实例与子实例的用户信息（userId、userKey、sessionId）互相隔离。

用户属性不支持多实例复制发送，仍然需要单独调用。

### 4、api调用

`getPlugins`、`getDeviceId`、`updateImpression` 这3个api无需（无法）指定实例，因为他们是全局api。其他未列出的api都可以指定实例进行调用。

### 5、SDK插件相关

集成且开启无埋点功能时，无埋点事件**仅主实例**会上报，其他子实例不会上报（无论是否开启无埋点），您使用小程序圈选时，请对主实例进行圈选操作。

### 6、其他规则

**（1）** 同一别名的实例仅能初始化一次。未集成本插件时，初始化子实例会失败，只能运行一个实例。

**（2）** 如果您按默认方式调用api，则默认调用的实际是`g0`实例。即默认不添加别名时调用api，实际上是在使用`g0`这个别名的实例。即完全兼容原来没有使用多实例时的api调用。

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

## 注意

在使用埋点、埋点计时、半自动埋点浏览多发之前，您仍然需要在平台中每个实例的项目数据源中配置事件以及事件属性。[埋点使用规范](/knowledge/basicknowledge/trackEventUse)

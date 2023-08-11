---
title: 数据采集API
sidebar_position: 4
---

通过`window.gdp`这个全局的方法可以调用到SDK中所有开放的接口，默认包括以下启动接口，动态配合接口和功能接口。您也可以通过插件来扩展更多的接口。

## 核心接口

### 接口列表

```js
// 启动接口
gdp('init', accountId, datasourceId[, options]);
gdp('send');

// 动态配置接口
gdp('setTrackerScheme', 'http');
gdp('setTrackerHost', 'Your ServerHost');
gdp('enableDebug', true);
gdp('setDataCollect', true);
gdp('setAutoTrack', true);

// 功能接口
gdp('setUserId', userId);
gdp('clearUserId');
gdp('getVisitorId');
gdp('track', eventId, variables[, item[, callback]]);
gdp('setUserAttributes', properties, callback);
```

### 启动接口

#### 1、初始化接口

用户初始化SDK，初始化配置等，接口原型如下

```js
gdp('init', accountId, datasourceId[, options]);
```

#### 2、启动接口

正式运行SDK，可以开始发送数据，接口原型如下

```js
gdp('send');
```

### 动态配置接口

#### 1、修改请求协议(scheme)

默认通过`location.protocol`获取，您可以自定义设置

```js
gdp('setTrackerScheme', 'http');
```

#### 2、修改数据上报地址(host)

```js
gdp('setTrackerHost', 'Your ServerHost');
```

#### 3、开启/关闭调试模式(debug)

默认不开启.当设置为 `true` 时， 开启后会输出 SDK Log 日志

```js
gdp('enableDebug', true);
```

#### 4、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 `false` 时，SDK将不会采集和上报事件。

```js
gdp('setDataCollect', true);
```

#### 5、开启/关闭无埋点数据采集(autotrack)

默认开启无埋点数据采集。当设置为 `false`时，将不再采集`VIEW_CLICK、VIEW_CHANGE、FORM_SUBMIT`无埋点事件。

```js
gdp('setAutoTrack', true);
```

### 功能接口

#### 1、设置登录用户id

当用户登录之后调用`setUserId` API，设置登录用户ID
:::info
支持 ID-MAPPING SDK版本 >=3.3.0

**需在初始化 SDK 时设置 `enableIdMapping` 为 `true`**
:::

#### 参数说明

| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `userId`  | `String` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `String` | 可选；适用于ID-MAPPING,可设置 `userId` 的类型|

#### 示例

```js
gdp('setUserId', '112333445');
gdp('setUserId', '112333445', 'phone');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**设置`userKey`时需SDK初始化时设置 `enableIdMapping` 为 `true`，否则不生效。**

#### 2、清除登录用户id

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```js
gdp('clearUserId');
```

#### 3、埋点事件接口

发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性；<br/>
如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP平台版本>= 2.1 ）

#### 参数说明

| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `eventId` | `String` | 事件名，事件标识符 |
| `variables` | `Object` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)（可选）；<br/>限制：Object 类型，value 仅支持字符串、整数、小数；key 长度 <=50，value 长度 <=1000|
| `item` | `Object` | 事件发生关联的物品模型item(可选);若需要传item，则key(必填)：物品模型唯一标识,id(必填)：物品模型id|

**注意：SDK版本3.3.10起， `variables` 中属性值的类型新增支持数组，数组中元素支持数字或字符串类型。数组的数据在上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

#### 示例

```js
// gdp('track', eventId, variables[, item]]);
gdp('track', 'order');
gdp('track', 'order', { type: 'hjh' });
gdp('track', 'order', {}, { key: 'order_id', id: '12345' });
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' });

// SDK版本3.3.10起，增加支持属性值为数组类型
gdp('track', 'order', { types: ['hjh1', 'hjh2'] }, { key: 'order_id', id: '12345' });
```

:::info

详细使用示例:[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

:::

#### 5、设置用户属性

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象；限制：Object 类型，value 支持字符串、整数、小数类型|

**注意：SDK版本3.3.10起， `userAttributes` 中属性值的类型新增支持数组，数组中元素支持数字或字符串类型。数组的数据在上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });

// SDK版本3.3.10起，增加支持属性值为数组类型
gdp('setUserAttributes', { names: ['tony', 'mike', 'lily'] });

```

:::info

详细使用示例:[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

:::

## 事件时长统计

可以统计上报某一事件的持续时长（例如页面浏览时长）。我们提供了事件计时开始、事件计时暂停、事件计时恢复、事件计时停止、事件计时销毁几个方法提供调用。

**<font color="#FC5F3A">注意：</font>**

**1）页面刷新或SDK重新加载时计时器会自动销毁并不做任何处理，因此您可能会因为用户的刷新和关闭网页等操作丢失此事件的上报。**
**2）SDK版本>=3.3.18支持。**

### 1、初始化计时器(trackTimerStart)

#### 参数说明

| 参数        | 参数类型   | 说明                           |
|-------------|------------|:------------------------------|
| `eventName` | `string`   | 必填；计时结束时上报的事件名称。 |
| `callback`  | `function` | 必填；用于获取生成计时器Id的回调函数。   |

#### 示例

```js
gdp('trackTimerStart', 'myEventName', (timerId) => {
  console.log(timerId);
});
```

### 2、暂停事件计时器(trackTimerPause)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('trackTimerPause', 'timerId123');
```

### 3、恢复事件计时器(trackTimerResume)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('trackTimerResume', 'timerId123');
```

### 4、停止事件计时器(trackTimerEnd)

停止事件计时器。注意停止事件计时器时会自动发送事件并删除当前计时器。

#### 参数说明

| 参数         | 参数类型 | 说明                               |
|--------------|----------|:----------------------------------|
| `timerId`    | `string` | 必填；计时器Id。                     |
| `attributes` | `object` | 选填；计时事件结束时上报的事件属性。 |

#### 示例

```js
gdp('trackTimerEnd', 'timerId123');
gdp('trackTimerEnd', 'timerId123', { extraVar1: 1, extraVar2:2 });
```

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

* eventName  埋点事件标识符（trackTimerStart传入）
* attributes 用户自定义事件属性（trackTimerEnd传入）
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
event_duration 按照秒上报，小数点精度保证到毫秒<br/>
event_duration 变量及其值会自动添加在 attributes 中<br/>
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性
:::

### 5、删除事件计时器(removeTimer)

删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('removeTimer', 'timerId123');
```

### 6、清除所有事件计时器(clearTrackTimer)

清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 示例

```js
gdp('clearTrackTimer');
```

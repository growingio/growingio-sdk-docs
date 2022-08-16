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

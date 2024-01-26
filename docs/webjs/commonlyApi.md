---
sidebar_position: 3
title: 数据采集API
---


通过 **`window.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

## 参数限制

### Object参数限制

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

**`key:` String，length <=100；**

**`value:` String | number 时 length <=1000； Array 时 length <=100**

### 上报参数说明

调用 埋点事件(track) 和 登录用户属性(setUserAttributes) 时；

1、如果您的属性值是一个字符串或者数字组成的一维数组，上报时会自动转换为 `Array.join('||')` 的字符串便于服务端进行拆分解析。生成的字符串再经上述的Object参数限制进行过滤处理，字符串总长度大于1000时或数组长度大于100时会被截断。因此您需要控制数组中总体字符串和总体数组的长度。

#### 示例

```js
name: ['cola', 'milk', 'juice']
// 上报时会自动转换为↓↓↓
name: 'cola||milk||juice'
```

2、如果您的属性值是一个 json 格式，则可能会被强制转换为`[object Object]`。因此您需要调整数据格式。

## 回调方法

在本页面中所列出的所有api，均支持传入一个**可选**回调函数，回调函数均在gio逻辑执行完毕后执行。部分api会回传部分参数，以api说明为准。

**<font color="#FC5F3A">注意：</font>回调函数执行时，仅表示SDK已执行对应方法，不保证对应事件触发并上报成功。**

## 动态修改配置接口(setOption)

自`3.8.0`版本开始我们提供了统一的接口，以降低接口使用难度。`4.0`版本继承了这一设定，但<3.8.0版本的写法不再兼容，请注意修改。

```js
gdp('setOption', optionKey, optionValue, callback?: function);
```

### 1、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。

由关闭修改为开启时，视为一次新的访问，自动补发VISIT和当前页面的PAGE事件。

```js
gdp('setOption', 'dataCollect', true | false);
```

### 2、开启/关闭调试模式(debug)

默认不开启调试模式。当设置为 **`true`** 时，开启后会在浏览器控制台输出日志。

```js
gdp('setOption', 'debug', true | false);
```

### 3、修改数据上报请求地址(serverUrl)

默认为`https://napi.growingio.com`。

Saas客户请不要修改此项，会导致您没有数据上报；OP私有部署客户可以在开发过程中设置为指定地址方便与服务端进行调试。

```js
gdp('setOption', 'serverUrl', 'http://api.growingio.com');
```

## 功能接口

### 1、注册插件(registerPlugins)

默认情况下基础SDK仅包含埋点功能，如果您需要额外扩展功能，请参考[初始化集成](/docs/webjs/integrate)和[插件列表](/docs/webjs/plugins)进行插件的注册。

```js
gdp('registerPlugins', [plugin1, plugin2], callback?: (registeredPlugins: any[]) => void);
```

### 2、设置访问用户Id(identify)

访问用户Id，又称为匿名用户Id/设备Id，在公众号H5中调用[网页授权](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)之后，获取 openId 或 unionId，调用 identify 设置访问用户Id。

```js
gdp('identify', openId / unionId / customId: string, callback?: function);
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）若使用此接口需要在初始化时将 forceLogin 设置为 true。 [参考文档](/docs/webjs/initSettings#forcelogin)**<br/>
**2）该方法仅可合法地调用一次，多次调用无效。**

### 3、获取访问用户Id(getDeviceId)

访问用户Id，又称为匿名用户Id/设备Id，SDK 自动生成（UUID）用来唯一标识设备。如果没有初始化SDK时返回值为空。

```js
gdp('getDeviceId', callback: (deviceId: string) => void);
```

### 4、设置登录用户Id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID。

```js
gdp('setUserId', userId: string | number, userKey?: string | number, callback?: function);
```

**<font color="#FC5F3A">注意：</font>设置`userKey`时需SDK初始化时设置 `idMapping` 为 `true`，否则不生效。**

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```js
gdp('clearUserId', callback?: function);
```

### 6、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点事件示例](/knowledge/basicknowledge/trackEventUse#埋点事件示例)

```js
gdp('track', eventName: string, attributes?: Object, callback?: function);
```

#### 示例

```js
gdp('track', 'order');
gdp('track', 'order', {
  type: 'drinks',
  name: ['cola', 'milk', 'juice'], // 仅支持字符串和数字的一维数组，其他类型会被强制转为字符串
  currency: 'RMB',
  price: 3
});
```

### 7、用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

```js
gdp('setUserAttributes', userAttributes, callback?: function);
```

#### 示例

```js
gdp('setUserAttributes', { name: 'Lily', age: 18 });
gdp('setUserAttributes', {
  tags: ['clever', 'brave', 'strong'], // 仅支持字符串和数字的一维数组，其他类型会被强制转为字符串
  age: 18
});
```

**<font color="#FC5F3A">注意：</font><br/>**
**1）所有属性都必须是用户的属性，不能是订单 ID，商品ID 等和用户没有确定的关联关系的属性。**<br/>
**2）同一个字段，必须保持在各个平台意义相同。**<br/>
**3）cs1 和 userId 字段是特殊用来唯一标识你自己站点的注册用户的预置属性，GrowingIO 以此来识别登录用户数据。**

### 8、设置埋点通用属性(setGeneralProps)

有时我们埋点需要大量业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的所有的埋点事件加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的埋点事件进行动态设置通用属性。

设置的通用属性可以是静态固定值，也可以是一个**简单的方法执行结果**的动态值。当属性值为方法时，SDK会自动执行尝试获取返回值，支持返回的数据类型：`String`、`Number`、一元`Array`、`Boolean`。不合法的数据类型会被强制转换为字符串。并且**请勿执行复杂度过高的运算逻辑或异步运算，可能会导致报错或无法获取准确值。**

```js
gdp('setGeneralProps', properties, callback?: function);
```

#### 示例

```js
// 固定值
gdp('setGeneralProps', { 'currency': 'RMB' });

// 变量
let index = 0;
gdp('setGeneralProps', {
  'nick_name_var': 'Mike',
  'index_var': () => index++
});
```

**<font color="#FC5F3A">注意：</font><br/>**
**1）定义的通用属性名依然需要在平台上进行事件属性的创建并与埋点事件完成关联。**<br/>
**2）该方法可多次调用，已有相同属性名的值会被覆盖。**<br/>
**3）属性的使用不会因页面的切换而不再使用，会一直调用直至您手动移除它。但可能会因为用户刷新页面会重新加载SDK导致丢失。**

### 9、清除埋点通用属性(clearGeneralProps)

SDK提供了清除通用属性的方法，调用该方法移除指定字段或所有通用埋点属性。

```js
gdp('clearGeneralProps', propertyNames: string[], callback?: function);
```

#### 示例

```js
gdp('clearGeneralProps', ['nick_name_var', 'index_var']);
// 或传空数组清空所有通用埋点属性
gdp('clearGeneralProps', []);
```

### 10、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的配置信息或状态时，可调用此接口。配置项名称不传时获取的为全量的配置信息。

```js
gdp('getOption', configName: string, callback?: (configValue: object | string | boolean ) => void);
```

#### 示例

```js
gdp('getOption', 'dataCollect', (value: boolean) => {}); // 获取dataCollect当前在SDK中的值
gdp('getOption', 'version', (value: string) => {}); // 获取SDK版本号
gdp('getOption', ''); // 获取所有支持查看的配置项值
```

## 事件时长统计

可以统计上报某一事件的持续时长（例如页面浏览时长）。我们提供了事件计时开始、事件计时暂停、事件计时恢复、事件计时停止、事件计时销毁几个方法提供调用。

**<font color="#FC5F3A">注意：</font>页面刷新或SDK重新加载导致内存信息丢失时计时器会自动销毁并不做任何处理，因此您可能会因为用户的刷新和关闭网页等操作丢失此事件的上报。**

### 1、初始化计时器(trackTimerStart)

```js
gdp('trackTimerStart', eventName, (timerId: string) => { });
```

### 2、暂停事件计时器(trackTimerPause)

```js
gdp('trackTimerPause', timerId, callback?: function);
```

### 3、恢复事件计时器(trackTimerResume)

```js
gdp('trackTimerResume', timerId, callback?: function);
```

### 4、停止事件计时器(trackTimerEnd)

停止事件计时器。注意停止事件计时器时会自动发送事件并删除当前计时器。

```js
gdp('trackTimerEnd', timerId, attributes?: object, callback?: function);
```

#### 示例

```js
gdp('trackTimerEnd', 'timerId123');
gdp('trackTimerEnd', 'timerId123', { extraVar1: 1, extraVar2: 2 });
```

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

* eventName  埋点事件标识符（trackTimerStart传入）
* attributes 用户自定义事件属性（trackTimerEnd传入）
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 按照秒上报，小数点精度保证到毫秒<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 变量及其值会自动添加在 attributes 中<br/>
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性
:::

### 5、删除事件计时器(removeTimer)

删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

```js
gdp('removeTimer', timerId, callback?: function);
```

### 6、清除所有事件计时器(clearTrackTimer)

清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

```js
gdp('clearTrackTimer', timerId, callback?: function);
```

---
sidebar_position: 3
title: 数据采集API
---


通过 **`window.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

## 参数限制

### Object参数限制

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

**`key:` String，length {'<='}100；**

**`value:` String | number 时 length {'<='}1000； Array 时 length {'<='}100**

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

自`3.8.0`版本开始我们提供了统一的接口，以降低接口使用难度。`4.0`版本继承了这一设定，但小于3.8.0版本的写法不再兼容，请注意修改。

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

当用户登录之后调用，设置登录用户ID
:::info

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **同时在初始化 SDK 时设置`idMapping`为`true`**

:::

#### 参数说明

| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | _String_ | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | _String_ | 适用于ID-MAPPING,可设置 userId 的类型, 默认不传|

```js
gdp('setUserId', userId: string | number, userKey?: string | number, callback?: function);
```

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```js
gdp('clearUserId', callback?: function);
```

### 6、用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

```js
gdp('setUserAttributes', userAttributes, callback?: function);
```

### 7、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点使用规范](/knowledge/basicknowledge/trackEventUse)

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

提示：您可以使用多实例的能力将埋点同时上报给其他实例 [参考文档](/docs/webjs/plugins/multipleInstances#4埋点埋点计时半自动埋点浏览多发)

**<font color="#FC5F3A">注意：</font><br/>**
**1）所有属性都必须是用户的属性，不能是订单 ID，商品ID 等和用户没有确定的关联关系的属性。**<br/>
**2）同一个字段，必须保持在各个平台意义相同。**<br/>
**3）cs1 和 userId 字段是特殊用来唯一标识你自己站点的注册用户的预置属性，请不要使用重名字段。**

### 8、设置全局通用属性(setGeneralProps)

有时我们在上报埋点和其他事件时可能需要大量的业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的**所有事件**加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的事件进行动态设置通用属性。

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
**2）该方法可多次调用，已有相同类型和相同属性名的属性会被覆盖。但动态属性值的优先级更高，即同名静态属性值无法覆盖原有的动态属性值。**<br/>
**3）该方法允许在 init 之前调用，以保证对应实例的用户访问事件也能携带通用属性。**<br/>
**4）属性的使用不会因页面的切换而不再使用，会一直调用直至您手动移除它。但可能会因为用户刷新页面会重新加载SDK导致丢失。**<br/>
**5）SDK版本大于等于 4.2.0 支持设为全局属性，低于该版本时仅埋点事件生效。**

### 9、清除全局通用属性(clearGeneralProps)

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

### 10、设置页面变更回调(setPageListener)

当您有需要为页面设置页面属性，或需要根据SDK的页面变更做一些事情（例如发送埋点）时，可以设置页面变更回调。在SDK触发页面变更时会调用该回调。一般建议配合关闭 trackPage 后手动调用 sendPage 来实现某些复杂的场景。**请勿执行复杂度过高的运算逻辑或异步运算，可能会导致报错或无法获取准确值。SDK版本大于等于 4.1.2 支持。**

```js
gdp('setPageListener', callback: (pageProps: { path: string, query: string, title: string } ) => void);
```

#### 示例

```js
gdp('setPageListener', ({ path, query, title }) => {
  // 根据path/query/title做判断只针对某些页面做一些事，例如设置页面属性
  if (path === 'path/aaa') {
    gdp('setPageAttributes', {
      page_type: 'page type',
      page_level: 'page level'
    });
  }

  // 不判断页面，“全局“设置页面属性（即每次发页面浏览事件之前都设一次页面属性）
  gdp('setPageAttributes', {
    page_url: path,
    page_title: title
  });

  // 不要做接口调用或复杂运算等耗时过长的操作，以免耽误页面访问事件的发送或数据解析错误导致丢数和数据错误
  ...

  // 设置完页面属性后手动控制发送页面访问事件
  gdp('sendPage');

  // 发送跟页面地址绑定的埋点要在sendPage后
  gdp('track', 'mytrack', {
    name: 'Mike',
    age: '18'
  });
});
```

**<font color="#FC5F3A">注意：</font>**<br />
**1）调用api设置回调方法时，会立即执行一次回调，以保证当前页面的浏览能正确触发。**<br />
**2）如果您关闭了 trackPage，需要在SDK初始化完成后尽快设置页面变更回调并发送页面访问事件，避免丢失页面访问数据。**<br />
**3）api多次调用会覆盖回调方法，不同页面上的特殊处理可以直接使用if判断props值，建议在SDK初始化完成后立即调用一次即可。否则可能出现同一个页面发送两次页面访问事件的情况。**

### 11、设置页面属性(setPageAttributes)

有时我们需要通过区分于页面参数的页面属性来进行拆分分析，这时就调用该方法设置页面属性。<br />
**仅生效于当前页面的页面浏览事件和无埋点事件。仅在初始化配置项关闭 trackPage时可用。SDK版本大于等于 4.1.2 支持。**

```js
gdp('setPageAttributes', properties: object);
```

#### 示例

```js
gdp('setPageAttributes', {
  page_type: 'page type',
  page_level: 'page level'
});
```

**<font color="#FC5F3A">注意：</font>**<br />
**设置页面属性后，仅在下次手动发送的页面访问事件生效。如需对所有页面访问事件生效，请参考`setPageListener`配合使用。**

### 12、清除页面属性(clearPageAttributes)

SDK提供了清除页面属性的方法，调用该方法移除指定字段或所有页面属性。

```js
gdp('clearPageAttributes', propertyNames?: string[], callback?: function);
```

#### 示例

```js
gdp('clearPageAttributes', ['nick_name_var', 'index_var']);
// 或传空数组清空所有页面属性
gdp('clearPageAttributes', []);
```

**仅清除当前所在页面的页面属性。SDK版本大于等于 4.2.0 支持。**

### 13、手动发送页面访问事件(sendPage)

当您需要手动设置页面属性或手动发送页面访问事件时，可以调用此api触发发送页面访问事件。<br />
**仅在初始化配置项关闭 trackPage时可用。SDK版本大于等于 4.1.2 支持。**

```js
gdp('sendPage');
```

:::caution 注意
手动发页面访问事件是比较“危险”的操作，极其容易导致页面访问时长，页面跳出率等与页面相关的分析数据异常，请充分了解后或咨询我们的技术支持后再进行使用。并且使用时强烈建议配合`setPageListener`使用。
:::

#### 自定义页面标题

一般来说，您修改页面标题需要在页面完成跳转之前完成。例如React/Vue等框架可以在“路由守卫”上进行修改，以免造成SDK识别页面标题错误。但由于一些技术上实现的困难或业务难点导致无法及时完成修改页面标题。我们提供了自定义修改页面标题的能力。在sendPage时指定title字段，即可实现SDK上报title的自定义。当前页面中的其他事件会同步修改使用。

```js
gdp('sendPage', { title: 'MyCustomTitle' });
```

**<font color="#FC5F3A">注意：</font>仅支持页面标题title字段的自定义，其他字段无法修改。并且使用时强烈建议配合`setPageListener`使用。**

### 14、获取SDK当前配置(getOption)

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

停止事件计时器。注意停止事件计时器时会自动发送事件并删除当前计时器。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点使用规范](/knowledge/basicknowledge/trackEventUse)

```js
gdp('trackTimerEnd', timerId, attributes?: object, callback?: function);
```

#### 示例

```js
gdp('trackTimerEnd', 'timerId');
gdp('trackTimerEnd', 'timerId', { extraVar1: 1, extraVar2: 2 });
```

提示：您可以使用多实例的能力将埋点计时同时上报给其他实例 [参考文档](/docs/webjs/plugins/multipleInstances)

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

* eventName  埋点事件标识符（trackTimerStart传入）
* attributes 用户自定义事件属性（trackTimerEnd传入）
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 按照秒上报，小数点精度保证到毫秒<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 变量及其值会自动添加在 attributes 中<br/>
* eventName 对应的埋点事件需要在平台中**绑定**标识符名为 event_duration， 且类型为小数的事件属性
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

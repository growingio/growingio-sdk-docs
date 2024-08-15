---
sidebar_position: 3
title: 数据采集API
---


通过 **`global.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

您可在页面头部进行解构获取gdp方法。**`const { gdp } = global;`**

(阿里(支付宝)小程序和淘宝小程序为 **`const { gdp } = $global;`**)

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

## 动态修改配置接口(setOption)

自`3.8.0`版本开始我们提供了统一的接口，以降低接口使用难度。`4.0`版本继承了这一设定，但**< 3.8.0版本的写法不再兼容**，请注意修改。

```js
gdp('setOption', optionKey: string, optionValue: boolean | string);
```

### 1、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。由关闭修改为开启时，自动补发VISIT和当前页面的PAGE事件。

```js
gdp('setOption', 'dataCollect', true | false);
```

### 2、开启/关闭调试模式(debug)

默认不开启调试模式。当设置为 **`true`** 时，开启后会在开发者工具控制台输出日志。

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
gdp('registerPlugins', pluginItems: any[]);
```

### 2、设置访问用户Id(identify)

访问用户Id，又称为匿名用户Id/设备Id，在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户Id。

```js
gdp('identify', openId / unionId / customId: string);
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）若使用此接口需要在初始化时将 forceLogin 设置为 true。 [参考文档](/docs/miniprogram/initSettings#forcelogin)**<br/>
**2）该方法仅可合法地调用一次，多次调用无效。**

### 3、获取访问用户Id(getDeviceId)

访问用户Id，又称为匿名用户Id/设备Id，SDK 用来定义唯一设备。如果没有初始化SDK 或者关闭采集开关可能返回值为空。

```js
const gioDeviceId: string = gdp('getDeviceId');
```

**<font color="#FC5F3A">注意：</font>开启forceLogin的小程序在identify之前获取的是SDK自动生成的值，identify之后获取的是您设置的值。**

### 4、设置登录用户Id(setUserId)

当用户登录之后调用，设置登录用户ID
:::info

* 如果您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次登录小程序访问时调用setUserId方法

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **同时在初始化 SDK 时设置`idMapping`为`true`**

:::

#### 参数说明

| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | _String_ | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | _String_ | 适用于ID-MAPPING,可设置 userId 的类型, 默认不传|

```js
gdp('setUserId', userId: string | number, userKey?: string | number);
```

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```js
gdp('clearUserId');
```

### 6、登录用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

```js
gdp('setUserAttributes', userAttributes);
```

#### 示例

```js
gdp('setUserAttributes', { name: 'Lily', age: 18 });
gdp('setUserAttributes', {
  tags: ['clever', 'brave', 'strong'], // 仅支持字符串和数字的一维数组，其他类型会被强制转为字符串
  age: 18
});
```

:::info

详细使用示例:[用户属性事件示例](/knowledge/basicknowledge/trackEventUse#用户属性事件示例)

:::

#### 微信用户属性设置

Gio平台系统中用户属性默认预定义的微信用户属性如下表：

| 名称         | 标识符            | 名称             | 标识符                |
|------------|-------------------|----------------|-----------------------|
| 微信 openid  | $wechat_openId    | 微信用户所在国家 | $wechat_country       |
| 微信 unionid | $wechat_unionId   | 微信用户所在省份 | $wechat_province      |
| 微信昵称     | $wechat_nickName  | 微信用户所在城市 | $wechat_city          |
| 微信头像     | $wechat_avatarUrl | 微信语言         | $wechat_language      |
| 微信用户性别 | $wechat_gender    | 关注公众号       | $wechat_subscribeList |

当小程序获取到微信用户信息后，以上属性标识符**无需**在 GrowingIO 平台用户属性中添加，调用 `setUserAttributes` 上报微信用户信息即可。注意自行添加 `$wechat_` 的前缀。例：

```js
wx.getUserInfo({
  success: (res) => {
    const user = res.userInfo;
    gdp('setUserAttributes', {
      $wechat_openId: user.openid,
      $wechat_unionId: user.unionid,
      $wechat_nickName: user.nickname
    });
  }
})
```

#### 阿里(支付宝)小程序用户属性设置

Gio平台系统中用户属性默认预定义的阿里(支付宝)小程序用户属性如下表：

| 名称               | 标识符           | 名称           | 标识符                     |
|------------------|------------------|--------------|----------------------------|
| 支付宝用户 ID      | $alipay_userId   | 支付宝学生认证 | $alipay_isStudentCertified |
| 支付宝头像         | $alipay_avatar   | 支付宝用户类型 | $alipay_userType           |
| 支付宝用户所在省份 | $alipay_province | 支付宝用户状态 | $alipay_userStatus         |
| 支付宝用户所在城市 | $alipay_city     | 支付宝实名认证 | $alipay_isCertified        |
| 支付宝用户昵称     | $alipay_nickName | 支付宝用户性别 | $alipay_gender             |

当小程序获取到阿里(支付宝)小程序用户信息后，以上属性标识符**无需**在Gio平台用户属性中添加，调用 `setUserAttributes` 上报微信用户信息即可。注意自行添加 `$alipay_` 的前缀。例：

```js
my.getAuthUserInfo({
  success: (userInfo) => {
    gdp('setUserAttributes', {
      $alipay_userId: userInfo.userId,
      $alipay_avatar: userInfo.avatar,
      $alipay_province: userInfo.province,
    });
  }
});
```

**<font color="#FC5F3A">注意：</font>该方法可多次调用，已有相同属性名的值会被覆盖，多次结果在服务端进行合并。**

### 7、地理位置(setLocation)

当用户访问至某一功能需要位置信息时，可以手动调用小程序Api获取地理位置接口，赋值给SDK采集位置信息，提升用户地域分布的分析准确性。同时您需要配置项目的`permission`字段[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)和对应的权限申请[参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)。

```js
gdp('setLocation', latitude: number, longitude: number);
```

#### 示例

```js
wx.getLocation({
  type: 'wgs84',
  success: ({ latitude, longitude }) => {
    gdp('setLocation', latitude, longitude);
  }
});
```

### 8、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点事件示例](/knowledge/basicknowledge/trackEventUse#埋点事件示例)

```js
gdp('track', eventName: string, attributes?: Object);
```

#### 示例

```js
gdp('track', 'order');
gdp('track', 'order', {
  type: 'drinks',
  name: ['cola', 'milk', 'juice'], // 支持字符串和数字的一维数组，其他类型会被强制转为字符串
  currency: 'RMB',
  price: 3
});
```

提示：您可以使用多实例的能力将埋点同时上报给其他实例 [参考文档](/docs/webjs/plugins/multipleInstances#4埋点埋点计时半自动埋点浏览多发)

:::info

数据平台中定义的事件属性的数据类型为日期时，传入字符串格式可以为如下格式

1. 毫秒时间戳
2. yyyy-MM-dd
3. yyyy-MM-dd HH
4. yyyy-MM-dd HH:mm
5. yyyy-MM-dd HH:mm:ss
6. yyyy-MM-dd HH:mm:ss.SSS
7. yyyy/MM/dd
8. dd/MM/yyyy

:::

### 9、设置全局通用属性(setGeneralProps)

有时我们在上报埋点和其他事件时可能需要大量的业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的**所有事件**加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的事件进行动态设置通用属性。

设置的通用属性可以是静态固定值，也可以是一个**简单的方法执行结果**的动态值。当属性值为方法时，SDK会自动执行尝试获取返回值，支持返回的数据类型：`String`、`Number`、一元`Array`、`Boolean`。不合法的数据类型会被强制转换为字符串。并且**请勿执行复杂度过高的运算逻辑或异步运算，可能会导致报错或无法获取准确值。**

```js
gdp('setGeneralProps', properties: object);
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
**1）定义的通用属性名依然需要在平台上进行事件属性的创建并设置为全局属性。**<br/>
**2）该方法可多次调用，已有相同属性名的值会被覆盖。**<br/>
**3）埋点通用属性仅限小程序中共享使用，内嵌页无法共享通用属性。**<br/>
**4）SDK版本大于等于 4.2.0 支持设为全局属性，低于该版本时仅埋点事件生效。**

### 10、清除全局通用属性(clearGeneralProps)

SDK提供了清除通用属性的方法，调用该方法移除指定字段或所有通用埋点属性。

```js
gdp('clearGeneralProps', propertyNames: string[]);
```

#### 示例

```js
gdp('clearGeneralProps', ['nick_name_var', 'index_var']);
// 或传空数组清空所有通用埋点属性
gdp('clearGeneralProps', []);
```

### 11、设置页面属性(setPageAttributes)

有时我们需要通过区分于页面参数的页面属性来进行拆分分析，这时就调用该方法设置页面属性。

```js
gdp('setGeneralProps', properties: object);
```

#### 示例

```js
Page({
  onLoad() {
    gdp('setPageAttributes', {
      page_type: 'page type',
      page_level: 'page level'
    });
  }
});
```

**<font color="#FC5F3A">注意：</font>**<br />
**1）该方法只能在 onLoad中调用，其他生命周期中调用无效。**<br />
**2）SDK版本大于等于 4.2.0 时仅生效于当前页面的页面浏览事件和无埋点事件。低于该该方法仅对页面浏览事件生效，不会对页面中发生的无埋点事件生效。**

### 12、清除页面属性(clearPageAttributes)

SDK提供了清除页面属性的方法，调用该方法移除指定字段或所有页面属性。

```js
gdp('clearPageAttributes', propertyNames?: string[]);
```

#### 示例

```js
gdp('clearPageAttributes', ['nick_name_var', 'index_var']);
// 或传空数组清空所有页面属性
gdp('clearPageAttributes', []);
```

**仅清除当前所在页面的页面属性。SDK版本大于等于 4.2.0 支持。**

### 12、与h5打通用户数据(getGioInfo)

当有H5页面需要获取小程序SDK采集用户数据的需求时(将H5页面采集的数据需要与小程序采集的数据做关联分析)，调用此接口可将获取以下9个字段的数据。

| 字段名 | 字段含义             | 字段名       | 字段含义    | 字段名          | 字段含义       |
|--------|----------------------|--------------|-----------|-----------------|----------------|
| **giou**   | <font color="#4b5563">访问用户Id(deviceId)</font> | **giouserkey**   | <font color="#4b5563">用户Key</font>     | **gioplatform**     | <font color="#4b5563">小程序平台</font>     |
| **gios**   | <font color="#4b5563">sessionId</font>            | **gioprojectid** | <font color="#4b5563">项目Id</font>      | **giodatasourceid** | <font color="#4b5563">数据源Id</font>   |
| **giocs1** | <font color="#4b5563">登录用户Id</font>           | **gioappid**     | <font color="#4b5563">小程序appId</font> | **giodatacollect**  | <font color="#4b5563">小程序采集状态</font> |

```js
const gioInfo:string = gdp('getGioInfo');
```

如果以上字段仍不能满足您分析需求，可在初始化时添加 `extraParams` [参考文档](/docs/miniprogram/initSettings#extraparams)配置字段来额外增加一些信息。

**<font color="#FC5F3A">注意：</font>**<br/>
**1）gdp('getGioInfo') 返回的是一个 search 字符串，需要您在字符串前手动拼接 ? 或 & 符号。如果您将该字符串拼接在了hash参数中，请在webjs sdk中开启hashtag解析。**

**2）gdp('getGioInfo') 获取的数据是一次性的，非动态获取，如果切换用户导致 sessionId 或 userId 等用户信息变动时，需要您销毁当前 webview 重设地址。并且使用不保留当前页面的跳转方式跳出承载 webview 的小程序页面。**

#### 示例

```js
// js
Page({
  data: { url: '' },
  onShow() {
    // 每次onShow时设url的值，保证getGioInfo拿到的是最新值
    this.setData({ url: `https://www.growingIO.com?${gdp('getGioInfo')}` });
  },
  onHide() {
    // 退出webview承载页时要销毁webview，保证下次进入时是一个拿到最新数据的全新页面
    this.setData({ url: '' });
  },
  // 如果页面中有登录，需要在登录之后重设一次url的值
  handleLogin() {
    ...
    // 登录完成后重设一次url的值，保证先销毁webview，getGioInfo拿到的是最新值
    this.setData({ url: '' }, () => {
      this.setData({ url: `https://www.growingIO.com?${gdp('getGioInfo')}` });
    });
  }
})
```

```html
<!-- wxml -->
<view>
  <web-view wx:if="{{url}}" src="{{url}}"></web-view>
</view>
```

**`gdp('getGioInfo')`默认获取到的数据示例：**

```js
// H5 页面原有的 URL为 :
'https://www.growingio.com/?foo=1#hash'
```

```js
// 小程序WebView加载H5时的拼接示例为
`https://www.growingio.com/?foo=1&${gdp('getGioInfo')}#hash`
```

**3）数据打通后，打通H5页面的 dataCollect 数据采集开关由小程序SDK初始化配置项 dataCollect 控制。**

**H5页面集成SDK参考[在小程序内嵌页面中集成](/docs/webjs/integrate#在小程序内嵌页面中集成)**

### 13、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的配置信息或状态时，可调用此接口。配置项名称不传时获取的为全量的配置信息。

```js
gdp('getOption', optionKey: string);
```

#### 示例

```js
gdp('getOption', 'dataCollect'); // 获取dataCollect当前在SDK中的值
gdp('getOption', 'version'); // 获取SDK版本号
gdp('getOption'); // 获取所有支持查看的配置项值(即原来的vdsConfig对象)
```

## 事件时长统计

可以统计上报某一事件的持续时长（例如页面浏览时长）。我们提供了事件计时开始、事件计时暂停、事件计时恢复、事件计时停止、事件计时销毁几个方法提供调用。

**<font color="#FC5F3A">注意：</font>小程序被切后台（即触发onAppHide）时，会自动暂停所有正在计时中的计时器，切前台（即触发onAppShow）时，会自动恢复正在计时中的计时器。切后台前手动调用暂停的计时器不会自动恢复，需要您再次手动恢复计时。**

### 1、初始化计时器(trackTimerStart)

```js
const timerId: string = gdp('trackTimerStart', eventName);
```

### 2、暂停事件计时器(trackTimerPause)

```js
gdp('trackTimerPause', timerId);
```

### 3、恢复事件计时器(trackTimerResume)

```js
gdp('trackTimerResume', timerId);
```

### 4、停止事件计时器(trackTimerEnd)

停止事件计时器。注意停止事件计时器时会自动发送事件并删除当前计时器。

```js
gdp('trackTimerEnd', timerId, attributes?: object);
```

#### 示例

```js
gdp('trackTimerEnd', 'timerId123');
gdp('trackTimerEnd', 'timerId123', { extraVar1: 1, extraVar2: 2 });
```

提示：您可以使用多实例的能力将埋点计时同时上报给其他实例 [参考文档](/docs/webjs/plugins/multipleInstances)

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

* eventName  埋点事件标识符（trackTimerStart传入）
* attributes 用户自定义事件属性（trackTimerEnd传入）
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 按照秒单位上报，小数点精度保证到毫秒<br/>
&nbsp;&nbsp;&nbsp;&nbsp;event_duration 变量及其值会自动添加在 attributes 中<br/>
&nbsp;&nbsp;&nbsp;&nbsp;时间统计不会计算后台时间
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration 且类型为小数的事件属性
:::

### 5、删除事件计时器(removeTimer)

删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

```js
gdp('removeTimer', timerId);
```

### 6、清除所有事件计时器(clearTrackTimer)

清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

```js
gdp('clearTrackTimer', timerId);
```

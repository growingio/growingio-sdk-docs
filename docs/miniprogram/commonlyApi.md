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

## 动态修改配置接口(setOption)

自`3.8.0`版本开始我们提供了统一的接口，以降低接口使用难度。`4.0`版本继承了这一设定，但**<3.8.0版本的写法不再兼容**，请注意修改。

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

### 3、修改上报地址(host)

请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。

```js
gdp('setOption', 'host', 'your serverHost');
```

### 4、修改请求协议(scheme)

默认为**`https`**，您可以在开发过程中设置为 `http` 方便与服务端进行调试。注意上生产环境前修改回 `https`。

```js
gdp('setOption', 'scheme', 'http' | 'https');
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

当用户登录之后调用`setUserId`，设置登录用户ID。若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后即调用此方法。

```js
gdp('setUserId', userId: string | number, userKey?: string | number);
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）设置`userKey`时需初始化时设置 `idMapping` 为 `true`**<br/>
**2）该方法可多次调用，设同一值时不生效，不同值覆盖。**

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```js
gdp('clearUserId');
```

### 6、埋点事件(track)

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

### 7、登录用户属性(setUserAttributes)

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

### 8、地理位置(setLocation)

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

### 9、与h5打通用户数据(getGioInfo)

当有H5页面需要获取小程序SDK采集用户数据的需求时(将H5页面采集的数据需要与小程序采集的数据做关联分析)，调用此接口可将获取以下数据。

| 字段名 | 字段含义             | 字段名       | 字段含义    | 字段名          | 字段含义       |
|--------|----------------------|--------------|-----------|-----------------|----------------|
| giou   | 访问用户Id(deviceId) | giouserkey   | 用户Key     | gioplatform     | 小程序平台     |
| gios   | sessionId            | gioprojectid | 项目Id      | giodatasourceid | dataSourceId   |
| giocs1 | 登录用户Id           | gioappid     | 小程序appId | giodatacollect  | 小程序采集状态 |

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

### 10、设置埋点通用属性(setGeneralProps)

有时我们埋点需要大量业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的所有的埋点事件加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的埋点事件进行动态设置通用属性。

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
**1）定义的通用属性名依然需要在平台上进行事件属性的创建并与埋点事件完成关联。**<br/>
**2）该方法可多次调用，已有相同属性名的值会被覆盖。**<br/>
**3）埋点通用属性仅限小程序中共享使用，内嵌页无法共享通用属性。**

### 11、清除埋点通用属性(clearGeneralProps)

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

### 12、设置页面属性(setPageAttributes)

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
**2）该方法仅对页面浏览事件生效，不会对页面中发生的其他事件生效。如需对页面其他事件添加相同的页面属性，请将属性拼在页面查询参数query中上报（同样需要在页面加载前完成操作）。**

### 13、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的配置信息或状态时，可调用此接口。配置项名称不传时获取的为全量的配置信息。

```js
gdp('getOption', optionKey: string);
```

#### 示例

```js
gdp('getOption', 'dataCollect'); // 返回dataCollect当前在SDK中的值
gdp('getOption'); // 返回所有支持查看的配置项值(即原来的vdsConfig对象)
```

### 14、获取SDK当前版本

在代码或开发者工具中直接调用 `global.gioSDKVersion` 即可获取。

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

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

- eventName  埋点事件标识符（trackTimerStart传入）
- attributes 用户自定义事件属性（trackTimerEnd传入）
- event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
&nbsp;&nbsp;&nbsp;&nbsp;单位秒，小数点精度保证到毫秒<br/>
&nbsp;&nbsp;&nbsp;&nbsp;变量及其值会自动添加在 attributes 中<br/>
&nbsp;&nbsp;&nbsp;&nbsp;时间统计不会计算后台时间
- eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration 且类型为小数的事件属性
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

## 采集标记

### 1、采集补充标记

#### 1）data-title

有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-title` 来补充SDK采集的内容。例：

```html
<button data-title="额外的上报信息">节点</button>
```

#### 2）data-index

有时我们页面中可能存在类似列表类的Dom结构相似或一致使得SDK上报数据出现无法区分的情况。此时，我们可以通过索引标记 `data-index` 来准确描述节点信息。例：

```html
<view>
  <button data-index="1">节点1</button>
  <button data-index="2">节点2</button>
  <button data-index="3">节点3</button>
</view>
```

#### 3）data-src

有时页面中有需要跳转的链接（尤其是navigator组件）时，为了上报完整的用户目标去向。此时，我们可以通过链接标记 `data-src` 来上报点击链接的目标去向。例：

```html
<navigator url="/pages/h5/h5?from=navigate" data-src="/pages/h5/h5?from=navigate" bindtap="onNavigatorTap">
  <view >
     ...
  </view>
</navigator>

<view data-src="/pages/h5/h5?from=navigate" bindtap="onLinkTap">
  模拟一个链接
</view>
```

**<font color="#FC5F3A">注意：</font>**<br/>
**在有上述3种额外采集标记的节点上，必须绑定一个点击事件，SDK才能实现点击的额外数据采集。如果没有，需要您手动绑定一个空的点击事件。**

#### 4）设置页面标题

默认情况下SDK会自动采集页面title，但当SDK可能无法识别或您使用了自定义标题时，可以通过在页面的`onLoad`生命周期中调用`setNavigationBarTitle`方法来设置原生页面标题并同时指定SDK上报事件时的title值。[参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html)

示例：

```js
Page({
  onLoad: {
    wx.setNavigationBarTitle({
      title: 'NewTitle'
    });
  }
});
```

提示：阿里(支付宝)和淘宝小程序中是`setNavigationBar` [参考文档](https://opendocs.alipay.com/mini/api/xwq8e6)

**<font color="#FC5F3A">注意：</font>**

**1）指定title仅支持 String 格式。**

**2）想要设置页面标题并同时生效于SDK时，该方法必须在onLoad中调用；如果您业务中无法调整位置，则在不影响原逻辑的情况下无法生效于SDK。**

**3）部分框架可能会建议该方法调用时机为onReady（例如uni-app）或其他生命周期中，我们实际测试中在onLoad调用并无影响，因此您可放心在onLoad中使用。**

**提示：SDK中事件title取值优先级为 setNavigationBarTitle > 页面config.json配置 > 全局app.json中tabBar配置**

### 2、采集白名单标记

有时我们表单页面中可能需要获取用户选择框、单/多选框的值进行上报以准确分析用户行为。此时，我们可以通过数值采集标记 `data-growing-track` 来获取值。例：

```html
<checkbox-group bindchange='checkboxChange' data-growing-track>
  <label class='checkbox'>
    <checkbox value='GrowingIO' checked='true' /> GrowingIO
  </label>
  <label class='checkbox'>
    <checkbox value='CDP' checked='false' /> GrowingIO CDP
  </label>
</checkbox-group>
```

:::caution 免责声明警告：
请勿尝试在密码框上标记 data-growing-track 采集数据，会明文暴露用户填写的密码信息。GrowingIO不承担由此直接或间接产生的数据风险和法律风险。
:::

**提示：SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件（例如swiper、video）。如果您期望采集它，请添加 `data-growing-track` 标记。**

### 3、采集黑名单标记

有时我们会根据业务中不同的需要使用一些自己开发的组件或第三方组件，可能会触发SDK的 `VIEW_CHANGE` 事件，但我们并不期望它发生。

此时，我们可以通过黑名单标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。**注意标记在事件绑定的节点上，没事件绑定的节点默认不会采集。**例：

```html
<view data-growing-ignore bindtap="onLinkTap">要忽略的节点</view>
```

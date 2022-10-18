---
sidebar_position: 4
title: 数据采集API
---


通过 **`global.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

您可在页面头部进行解构获取gdp方法。<br/>
**`const { gdp } = global;`**(阿里(支付宝)小程序和淘宝小程序为 `const { gdp } = $global;`)

## 动态修改配置接口(setOption)

由于多样的动态修改配置的需求，我们在`3.8.0`版本开始提供了统一的接口，以降低接口使用难度。设值成功返回true，设值失败返回false。

```js
gdp('setOption', optionKey, optionValue);  // return true | false
```

### 1、开启/关闭无埋点数据采集(autotrack)

当加载了无埋点插件时，默认开启无埋点数据采集。当设置为 **`false`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。未加载插件时无论 autotrack 是否开启都不会进行采集。

```js
gdp('setOption', 'autotrack', true | false);

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setAutotrack', true | false);
```

### 2、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。由关闭修改为开启时，自动补发VISIT和当前页面的PAGE事件。

```js
gdp('setOption', 'dataCollect', true | false);

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setDataCollect', true | false);
```

### 3、开启/关闭调试模式(debug)

默认不开启调试模式。当设置为 **`true`** 时，开启后会在开发者工具控制台输出日志。

```js
gdp('setOption', 'debug', true | false);

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('enableDebug', true | false);
```

### 4、修改上报地址(host)

请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。

```js
gdp('setOption', 'host', 'your serverHost');

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setTrackerHost', 'xxxxxxxx');
```

### 5、修改请求协议(scheme)

默认为**`https`**，您可以在开发过程中设置为 `http` 方便与服务端进行调试。注意上生产环境前修改回 `https`。

```js
gdp('setOption', 'scheme', 'http' | 'https');

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setTrackerScheme', 'http' | 'https');
```

## 功能接口

### 1、注册插件(registerPlugins)

默认情况下基础SDK仅包含埋点功能，如果您需要额外扩展功能，请参考[初始化集成](/docs/webjs/3.8/integrate)和[插件列表](/docs/webjs/3.8/plugins)进行插件的注册。

#### 示例

```js
gdp('registerPlugins', [xxxx, xxxxx]);
```

### 2、设置访问用户Id(identify)

访问用户Id，又称为匿名用户Id/设备Id，在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户Id。

#### 示例

```js
gdp('identify', openId);
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）若使用此接口需要在初始化时将 forceLogin 设置为 true。 [参考文档](/docs/miniprogram/3.8/initSettings#forcelogin)**<br/>
**2）使用多项目集成插件集成时，该方法只能在主包中调用，在分包中(即开启subpackage)会自动失效。**<br/>
**3）该方法仅可合法地调用一次，多次调用无效。**

### 3、获取访问用户Id(getDeviceId)

访问用户Id，又称为匿名用户Id/设备Id，SDK 自动生成用来定义唯一设备。如果没有初始化SDK 或者关闭采集开关可能返回值为空。

#### 示例

```js
gdp('getDeviceId');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）SDK版本 >=3.8.0-rc.7 支持。**<br/>
**2）开启forceLogin的小程序无需调用此方法，因为您在identify的时候已经获取了openId做为访问用户Id。如果您一定要使用它，请在identify之后调用。**

### 4、设置登录用户Id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后即调用此方法。

#### 参数说明

| 参数      | 参数类型          | 说明                                                              |
|-----------|-------------------|-----------------------------------------------------------------|
| `userId`  | `string / number` | 必填；字符长度小于等于 1000，长度超限将会被截断。                    |
| `userKey` | `string / number` | 可选；适用于 ID-MAPPING,可设置 `userId` 的类型；长度限制同 `userId` |

#### 示例

```js
gdp('setUserId', '112333445');
gdp('setUserId', '112333445', 'phone');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）SDK版本 >=3.3.0 支持 ID-MAPPING，且需初始化时设置 `enableIdMapping` 为 `true`**<br/>
**2）该方法可多次调用，设同一值时无效。**

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID

#### 示例

```js
gdp('clearUserId');
```

### 6、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

#### 参数说明

| 参数              | 参数类型 | 说明                                                                                                                                  |
|-------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------|
| `eventId`         | `String` | 必填；事件名，事件标识符。                                                                                                               |
| `properties`      | `Object` | 选填；事件属性，当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)[参数限制](/docs/miniprogram/3.8/commonlyApi#object参数限制) |
| `item`            | `Object` | 选填；事件发生关联的物品模型。                                                                                                          |
| `item.id`         | `String` | item 中必填；物品模型 id。                                                                                                              |
| `item.key`        | `String` | item 中必填；物品模型唯一标识。                                                                                                         |
| `item.attributes` | `Object` | item 中选填；物品模型属性。参数限制同`properties`。                                                                                      |

#### 示例

```js
// gdp('track', eventId, properties[, item]);

gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item
```

**<font color="#FC5F3A">注意：</font>**<br/>
**`properties`中的属性值为数组格式上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

### 7、登录用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

#### 参数说明

| 参数             | 参数类型 | 说明                                                                                        |
|------------------|----------|-------------------------------------------------------------------------------------------|
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。[参数限制](/docs/miniprogram/3.8/commonlyApi#object参数限制) |

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });
```

#### 微信用户属性设置

Gio平台系统中用户属性默认预定义的微信用户属性如下表：

|       名称       |        标识符         |
|:--------------:|:---------------------:|
|   微信 openid    |    $wechat_openId     |
|   微信 unionid   |    $wechat_unionId    |
|     微信昵称     |   $wechat_nickName    |
|     微信头像     |   $wechat_avatarUrl   |
|   微信用户性别   |    $wechat_gender     |
| 微信用户所在国家 |    $wechat_country    |
| 微信用户所在省份 |   $wechat_province    |
| 微信用户所在城市 |     $wechat_city      |
|     微信语言     |   $wechat_language    |
|    关注公众号    | $wechat_subscribeList |

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

|        名称        |           标识符           |
|:----------------:|:--------------------------:|
|   支付宝用户 ID    |       $alipay_userId       |
|     支付宝头像     |       $alipay_avatar       |
| 支付宝用户所在省份 |      $alipay_province      |
| 支付宝用户所在城市 |        $alipay_city        |
|   支付宝用户昵称   |      $alipay_nickName      |
|   支付宝学生认证   | $alipay_isStudentCertified |
|   支付宝用户类型   |      $alipay_userType      |
|   支付宝用户状态   |     $alipay_userStatus     |
|   支付宝实名认证   |    $alipay_isCertified     |
|   支付宝用户性别   |       $alipay_gender       |

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

**<font color="#FC5F3A">注意：</font>**<br/>
**1）用户属性中的属性值为数组格式上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**<br/>
**2）该方法可多次调用，已有相同属性名的值会被覆盖，多次结果在服务端进行合并。**

### 8、地理位置(setLocation)

当用户访问至某一功能需要位置信息时，可以手动调用小程序Api获取地理位置接口，赋值给SDK，自动补发VISIT，采集位置信息，提升用户地域分布的分析准确性。同时您需要配置项目的`permission`字段[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)和对应的权限申请[参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)。

***2022年4月18日起，微信官方对`getLocation`进行了权限限制，因此SDK废弃了与getLocation有关的逻辑，并新增`setLocation`来代替此功能。***

#### 参数说明

| 参数        | 参数类型 | 说明                                   |
|-------------|----------|--------------------------------------|
| `latitude`  | `number` | 必填；纬度，范围为 -90~90，负数表示南纬   |
| `longitude` | `number` | 必填；经度，范围为 -180~180，负数表示西经 |

#### 示例

```js
wx.getLocation({
  type: 'wgs84',
  success: ({ latitude, longitude }) => {
    gdp('setLocation', latitude, longitude);
    // 调用后会自动补发带位置信息的VISIT事件
  }
});
```

### 9、与h5打通用户数据(getGioInfo)

当有H5页面需要获取小程序SDK采集用户数据的需求时(将H5页面采集的数据需要与小程序采集的数据做关联分析)，调用此接口可将获取以下数据。

```text
giou              访问用户Id(deviceId)
gios              sessionId
giocs1            登录用户Id
gioid             最近的非空登录用户Id
giouserkey        用户Key
gioprojectid      项目Id
gioappid          小程序appId
gioplatform       小程序平台
giodatasourceid   dataSourceId
giodatacollect    小程序是否采集数据
```

#### 示例

```js
gdp('getGioInfo');
```

如果以上字段仍不能满足您分析需求，可在初始化时添加 `extraParams` [参考文档](/docs/miniprogram/3.8/initSettings#extraparams)配置字段来额外增加一些信息。

**<font color="#FC5F3A">注意：</font>**<br/>
**1）gdp('getGioInfo') 返回的是一个 search 字符串，需要您在字符串前手动拼接 ? 或 & 符号。如果您将该字符串拼接在了hash参数中，请在web sdk（>=3.3.10支持）中开启hashtag解析。**

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
'https://www.growingio.com/?foo=1#锚点'
```

```js
// 小程序WebView加载H5时的拼接示例为
`https://www.growingio.com/?foo=1&${gdp('getGioInfo')}#锚点`
```

**3）3.8.0版本开始，打通数据中会增加`giodatacollect`字段，数据打通后，打通H5页面的 dataCollect 数据采集开关由小程序SDK初始化配置项 dataCollect 控制。此项功能使用需H5 页面集成的 Web JS SDK 版本>=3.3.9。**

**H5页面集成SDK参考[在小程序内嵌页面中集成](/docs/webjs/3.8/integrate#在小程序内嵌页面中集成)**

### 10、设置埋点通用属性(setGeneralProps)

有时我们埋点需要大量业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的所有的埋点事件加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的埋点事件进行动态设置通用属性。

设置的通用属性可以是静态固定值，也可以是一个**简单的方法执行结果**的动态值。当属性值为方法时，SDK会自动执行尝试获取返回值，支持返回的数据类型：`String`、`Number`、一元`Array`、`Boolean`。不合法的数据类型会被强制转换为字符串。并且**请勿执行复杂度过高的运算逻辑或异步运算，可能会导致报错或无法获取准确值。**

#### 示例

```js
gdp('setGeneralProps', { 'currency': 'RMB' });

let index = 0;
gdp('setGeneralProps', {
  'nick_name_var': 'Mike'
  'index_var': () => index++,
});
```

**<font color="#FC5F3A">注意：</font><br/>**
**1）SDK版本>=3.8.2支持。**<br/>
**2）定义的通用属性名依然需要在平台上进行事件属性的创建并与埋点事件完成关联。**<br/>
**3）该方法可多次调用，已有相同属性名的值会被覆盖。**<br/>
**4）埋点通用属性仅限小程序中共享使用，内嵌页无法共享通用属性。**

### 11、清除埋点通用属性(clearGeneralProps)

SDK提供了清除通用属性的方法，调用该方法移除指定字段或所有通用埋点属性。

#### 示例

```js
gdp('clearGeneralProps', ['nick_name_var', 'index_var']);
// 或不传值清空所有通用埋点属性
gdp('clearGeneralProps');
```

**<font color="#FC5F3A">注意：</font>SDK版本>=3.8.2支持。**

### 12、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的配置信息或状态时，可调用此接口。配置项名称不传时获取的为全量的配置信息。

#### 示例

```js
gdp('getOption', 配置项名称);

gdp('getOption', 'dataCollect'); // 返回dataCollect当前在SDK中的值
gdp('getOption'); // 返回所有支持查看的配置项值(即原来的vdsConfig对象)
```

### 13、获取SDK当前版本

在代码或开发者工具中直接调用 `global.gioSDKVersion` 即可获取。

## 采集标记

### 1、采集标记

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

**提示：3.8.0版本开始，SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件（例如swiper、video）。如果您期望采集它，请添加 `data-growing-track` 标记。**

### 2、补充数据标记

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

#### 4）gioPageTitle

默认情况下SDK会自动采集页面title，但当SDK可能无法识别或您需要自定义时，可以通过在页面的`data`对象中设置`gioPageTitle`字段来指定SDK上报事件时的title值。例：

```js
Page({
  data: {
    gioPageTitle: 'New Title',
    ...other data
  }
});
```

**<font color="#FC5F3A">注意：</font>** **指定title仅支持 String 格式。SDK版本>=3.8.0-rc.9支持。**

### 3、忽略采集标记

有时我们会根据业务中不同的需要使用一些自己开发的组件或第三方组件，可能会触发SDK的 `VIEW_CHANGE` 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。**注意标记在事件绑定的节点上，没事件绑定的节点默认不会采集。**例：

```html
<view data-growing-ignore bindtap="onLinkTap">要忽略的节点</view>
```

## 事件时长统计

可以统计上报某一事件的持续时长（例如页面浏览时长）。我们提供了事件计时开始、事件计时暂停、事件计时恢复、事件计时停止、事件计时销毁几个方法提供调用。

**<font color="#FC5F3A">注意：</font>**

**1）小程序被切后台（即触发onAppHide）时，会自动暂停所有正在计时中的计时器，切前台（即触发onAppShow）时，会自动恢复正在计时中的计时器。切后台前手动调用暂停的计时器不会自动恢复，需要您再次手动恢复计时。**

**2）SDK版本>=3.8.8支持。**

### 1、初始化计时器(trackTimerStart)

#### 参数说明

| 参数        | 参数类型   | 说明                           |
|-------------|------------|------------------------------|
| `eventName` | `string`   | 必填；计时结束时上报的事件名称。 |

#### 返回值说明

| 返回值        | 返回值类型   | 说明                           |
|-------------|------------|------------------------------|
|  `timerId / false` | `string / boolean`   | 创建成功返回 timerId，创建失败返回 false |

#### 示例

```js
const timerId = gdp('trackTimerStart', 'myEventName');
```

### 2、暂停事件计时器(trackTimerPause)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 返回值说明

| 返回值        | 返回值类型   | 说明                           |
|-------------|------------|------------------------------|
|  `true / false` | `boolean`   | 操作成功返回 true，操作失败返回 false |

#### 示例

```js
const result = gdp('trackTimerPause', 'timerId123');
```

### 3、恢复事件计时器(trackTimerResume)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 返回值说明

| 返回值        | 返回值类型   | 说明                           |
|-------------|------------|------------------------------|
|  `true / false` | `boolean`   | 操作成功返回 true，操作失败返回 false |

#### 示例

```js
const result = gdp('trackTimerResume', 'timerId123');
```

### 4、停止事件计时器(trackTimerEnd)

停止事件计时器。注意停止事件计时器时会自动发送事件并移除当前计时器。

#### 参数说明

| 参数         | 参数类型 | 说明                               |
|--------------|----------|----------------------------------|
| `timerId`    | `string` | 必填；计时器Id。                     |
| `attributes` | `object` | 选填；计时事件结束时上报的事件属性。 |

#### 返回值说明

| 返回值        | 返回值类型   | 说明                           |
|-------------|------------|------------------------------|
|  `true / false` | `boolean`   | 操作成功返回 true，操作失败返回 false |

#### 示例

```js
const result = gdp('trackTimerEnd', 'timerId123');

const result = gdp('trackTimerEnd', 'timerId123', { extraVar1: 1, extraVar2: 2 });
```

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

- eventName  埋点事件标识符（trackTimerStart传入）
- attributes 用户自定义事件属性（trackTimerEnd传入）
- eventDuration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
&nbsp;&nbsp;&nbsp;&nbsp;单位秒，小数点精度保证到毫秒<br/>
&nbsp;&nbsp;&nbsp;&nbsp;变量及其值会自动添加在 attributes 中<br/>
&nbsp;&nbsp;&nbsp;&nbsp;时间统计不会计算后台时间
- eventName 对应的埋点事件需要在平台中**绑定**标识符为 eventDuration， 且类型为小数的事件属性
:::

### 5、删除事件计时器(removeTimer)

删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 返回值说明

| 返回值        | 返回值类型   | 说明                           |
|-------------|------------|------------------------------|
|  `true / false` | `boolean`   | 操作成功返回 true，操作失败返回 false |

#### 示例

```js
const result = gdp('removeTimer', 'timerId123');
```

### 6、移除所有事件计时器(clearTrackTimer)

清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 示例

```js
gdp('clearTrackTimer');
```

## 其他

### Object参数限制

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

**`key:` String，length <=50；**

**`value:` String | number 时 length <=1000； Array 时 length <=100**

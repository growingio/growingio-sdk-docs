---
sidebar_position: 4
title: 数据采集API
---


通过 **`global.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

您可在页面头部进行解构获取gdp方法。<br/>
**`const { gdp } = global;`**(支付宝和淘宝小程序为 `const { gdp } = $global;`)

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

默认不开启。当设置为 **`true`** 时，开启后会在开发者工具控制台输出日志。

```js
gdp('setOption', 'debug', true | false);

// <3.8.0版本的写法仍兼容，但不建议您再这么使用
// gdp('enableDebug', true | false);
```

### 4、修改上报地址(host)

请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。

```js
gdp('setOption', 'host', 'wxapi.growingio.com');

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

### 1、设置访问用户id(identify)

在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户ID。

#### 示例

```js
gdp('identify', openId);
```

**<font color="#FC5F3A">注意：</font>**<br/>
**若使用此接口需要在初始化时将 forceLogin 设置为 true [参考文档](/docs/miniprogram/3.8/initSettings#forcelogin)**

### 2、设置登录用户id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后即调用此方法。

#### 参数说明

| 参数      | 参数类型          | 说明                                                              |
|-----------|-------------------|-----------------------------------------------------------------|
| `userId`  | `string / number` | 必填；字符长度小于等于 1000，长度超限将会被截断。                    |
| `userKey` | `string / number` | 可选；适用于 ID-MAPPING,可设置 `userId` 的类型；长度限制同 `userId` |

#### 示例

```js
gdp('setUserId', 'userId');
gdp('setUserId', 'userId', 'userKey');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**SDK版本 >=3.3.0 支持 ID-MAPPING，且需初始化时设置 `enableIdMapping` 为 `true`**

### 3、清除登录用户id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID

#### 示例

```js
gdp('clearUserId');
```

### 4、埋点事件(track)

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
**`properties`中的属性值允许为数字、字符串和数组格式（`item.attributes`仅允许为数字或字符串），其他格式数据会被自动过滤；其中数组格式的数据在上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

### 5、登录用户属性(setUserAttributes)

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

#### 支付宝用户属性设置

Gio平台系统中用户属性默认预定义的支付宝用户属性如下表：

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

当小程序获取到支付宝用户信息后，以上属性标识符**无需**在Gio平台用户属性中添加，调用 `setUserAttributes` 上报微信用户信息即可。注意自行添加 `$alipay_` 的前缀。例：

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

### 6、地理位置(getLocation)

当用户访问至某一功能需要位置信息时，可以手动调用获取地理位置接口，自动补发VISIT，采集位置信息，提升用户地域分布的分析准确性。同时您可能需要配置项目的`permission`字段：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)

#### 示例

```js
gdp('getLocation');
// 调用后会自动补发带位置信息的VISIT事件
```

**<font color="#FC5F3A">注意：</font>**<br/>
**手动调用getLocation方法时，需要用户授权。**

### 7、与h5打通用户数据(getGioInfo)

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

**H5页面集成SDK参考[小程序内嵌页使用集成](/docs/webjs/base#小程序内嵌页使用集成)**

### 8、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的完整配置信息时，可调用此接口。

#### 示例

```js
gdp('getOption');
```

### 9、获取SDK当前版本

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

#### 提示

**3.8.0版本开始，SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件（例如swiper、video）。如果您期望采集它，请添加 `data-growing-track` 标记。**

### 2、补充数据标记

1）有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-title` 来补充SDK采集的内容。例：

```html
<button data-title="额外的上报信息">节点</button>
```

2）有时我们页面中可能存在类似列表类的Dom结构相似或一致使得SDK上报数据出现无法区分的情况。此时，我们可以通过索引标记 `data-index` 来准确描述节点信息。例：

```html
<view>
  <button data-index="1">节点1</button>
  <button data-index="2">节点2</button>
  <button data-index="3">节点3</button>
</view>
```

3）有时页面中有需要跳转的链接（尤其是navigator组件）时，为了上报完整的用户目标去向。此时，我们可以通过链接标记 `data-src` 来上报点击链接的目标去向。例：

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

### 3、忽略采集标记

有时我们会根据业务中不同的需要使用一些自己开发的组件或第三方组件，可能会触发SDK的 `VIEW_CHANGE` 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。**注意标记在事件绑定的节点上，没事件绑定的节点默认不会采集。**例：

```html
<view data-growing-ignore bindtap="onLinkTap">要忽略的节点</view>
```

## 半自动埋点浏览事件

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件。因此您同样需要参考[埋点事件](/docs/miniprogram/3.8/commonlyApi#4埋点事件track)在平台上进行事件类型和变量的预定义。

#### 曝光逻辑

只要从**屏幕不可见区域到可见区域**即计为一次曝光并上报。

#### 支持范围

微信小程序、支付宝小程序(基础库>=2.7.0)、百度小程序、字节跳动小程序、QQ小程序、淘宝小程序。

快应用不支持。

#### 使用方法

1、在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

2、在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs`、`data-gio-imp-items` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则参考[埋点事件](/docs/miniprogram/3.8/commonlyApi#4埋点事件track)。

1）传值方式一：使用变量传值

```js
Page({
  data: {
    impAttrs: JSON.stringify({ type: 'hjh', name: 'yue' }),
    impItems: { key: 'order_id', id: '12345' }
  }
})
```

```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs="{{ impAttrs }}"
  data-gio-imp-items="{{ impItems }}"
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</view>
```

2）传值方式二：直接手动编写Object字符串

```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs='{ "type": "hjh", "name": "yue" }'
  data-gio-imp-items='{ "key": "order_id", "id": "12345" }'
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</view>
```

对应产生的`CUSTOM`事件相当于： ↓↓↓

```js
gdp('track', 'imp_picture_var', { type: 'hjh', name: 'yue' }, { key: 'order_id', id: '12345' });
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）此功能需要注册半自动埋点浏览插件使用。参考[半自动埋点浏览插件](plugins#半自动埋点浏览插件gioimpressiontracking)。**

**2）`data-gio-imp-attrs` 和 `data-gio-imp-items` 允许接受一个Object或者JSON.stringify后的Object字符串，SDK会自动尝试进行格式化**。

**3）被标记的节点必须有实际的大小，一个没有内容和样式的节点标记可能不会触发事件。**

<!-- 4）快手小程序在同一个页面中只能监听相同大小节点的第一个，即如果在同一个页面中需要监听多个节点时，要保证节点大小不一致，否则曝光事件会全部匹配到第一个相同大小的节点。 -->

## 其他

### Object参数限制

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

**`key:` String，length <=50；**

**`value:` String | number 时 length <=1000； Array 时 length <=100**

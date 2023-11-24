---
sidebar_position: 4
title: 数据采集API
---

通过gioGlobal.gio这个全局的方法可以调用到SDK中所有开放的接口。

一般您可在页面头部进行取值并命名为gdp方法。const gdp = gioGlobal.gio;

## 动态配置接口

### 开启/关闭无埋点数据采集(autotrack)

默认开启无埋点数据采集。当设置为 **`false`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。

```js
gdp('setAutotrack', true | false);
```

### 开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。

```js
gdp('setDataCollect', true | false);
```

### 开启/关闭调试模式(debug)

默认不开启。当设置为 **`true`** 时， 开启后会在开发者工具控制台输出日志

```js
gdp('enableDebug', true | false);
```

### 修改上报地址(host)

请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。

```js
gdp('setTrackerHost', 'xxxxxxxx');
```

### 修改请求协议(scheme)

默认为**`https`**，您可以在开发过程中自定义设置

```js
gdp('setTrackerScheme', 'http' | 'https');
```

## 功能接口

### 设置访问用户id(identify)

:::info
若使用此接口需要在初始化时将 forceLogin 设置为 true
参考[设置强制登录模式](/docs/miniprogram/3.3/initSettings#forcelogin)
:::
在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户ID。

#### 示例

```js
gdp('identify', openId);
```

### 设置登录用户id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后重新调用setUserId方法。
:::info
支持 ID-MAPPING SDK版本 >=3.3.0
**需在初始化 SDK 时设置`enableIdMapping`为`true`**
:::

#### 参数说明

| 参数      | 参数类型          | 说明                                                                |
| --------- | ----------------- | ------------------------------------------------------------------- |
| `userId`  | `string / number` | 必填。                                                             |
| `userKey` | `string / number` | 选填；适用于 ID-MAPPING,可设置 `userId` 的类型。                       |

#### 示例

```js
gdp('setUserId', '112333445');
gdp('setUserId', '112333445', 'phone');
```

### 清除登录用户id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID

#### 示例

```js
gdp('clearUserId');
```

### 埋点事件(track)

发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性；<br/>
如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP平台版本>= 2.1 ）

```js
gdp('track', eventId, properties, item);
```

#### 参数说明

| 参数              | 参数类型 | 说明                            |
| ----------------- | -------- | ------------------------------- |
| `eventId`         | `String` | 必填；事件名，事件标识符      |
| `properties`      | `Object` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)（可选）                |
| `item`            | `Object` | 选填；事件发生关联的物品模型  |
| `item.id`         | `String` | item 中必填；物品模型 id      |
| `item.key`        | `String` | item 中必填；物品模型唯一标识 |
| `item.attributes` | `Object` | item 中选填；物品模型属性     |

#### 示例

```js
gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item

// SDK版本3.3.5起，增加支持属性值为数组类型
gdp('track', 'order', { types: ['hjh1', 'hjh2'] }, { key: 'order_id', id: '12345' });
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）SDK版本 <3.3.5的版本中，`properties`中的属性值仅允许为数字和字符串格式，其他格式数据会被自动过滤。**

**2）SDK版本3.3.5起， `properties`中的属性值新增允许数组格式(即数字、字符串和数组格式)，其他格式数据会被自动过滤；其中数组格式的数据在上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

:::info

详细使用示例:[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

:::

### 登录用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

#### 参数说明

| 参数             | 参数类型 | 说明                             |
| ---------------- | -------- | -------------------------------- |
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。 |

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });

// SDK版本3.3.5起，增加支持属性值为数组类型
gdp('setUserAttributes',{user_list: ['hjh1','hjh2']});
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）SDK版本 <3.3.5的版本中，`properties`中的属性值仅允许为数字和字符串格式，其他格式数据会被自动过滤。**

**2）SDK版本3.3.5起， `properties`中的属性值新增允许数组格式(即数字、字符串和数组格式)，其他格式数据会被自动过滤；其中数组格式的数据在上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

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

### 获取地理位置(getLocation)

通过手动调用地理位置接口来补发地理位置信息，提升用户地域分布的分析准确性。

**注意：此方法在`3.3.6`起的版本中废弃，如需使用位置相关功能，请使用`setLocation`。**

```js
gdp('getLocation');
// 调用后会自动补发带位置信息的VISIT事件
```

**注意：**<br/>
**1、使用此功能必须保证您的小程序项目有对应的权限，如果您的小程序项目没有获取位置信息的权限导致上线审批被驳回，请使用3.3最新版不带`getLocation`相关内容的SDK`>=3.3.6`。**<br/>
**2、初始化配置项 location.autoGet 打开时，无需调用此接口。**

### 设置地理位置(setLocation)

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

**注意：**<br/>
**此功能需使用`>=3.3.7`版本的SDK。**<br/>

### 获取访问用户Id(getDeviceId)

访问用户Id，又称为匿名用户Id/设备Id，SDK 自动生成用来定义唯一设备。如果没有初始化SDK 或者关闭采集开关可能返回值为空。

#### 示例

```js
gdp('getDeviceId');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）SDK版本 >=3.3.8 支持。**<br/>
**2）开启forceLogin的小程序无需调用此方法，因为您在identify的时候已经获取了openId做为访问用户Id。如果您一定要使用它，请在identify之后调用。**

### 与h5打通用户数据(getGioInfo)

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

```js
gdp('getGioInfo');
```

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

**如果您的H5页面需要获取更多小程序SDK采集的字段数据，请参考[`extraParams`](./initSettings#extraparams)**。

**H5页面集成SDK参考[小程序内嵌页使用集成](/docs/webjs/3.3/integrate#小程序内嵌页使用集成)**

:::tip
1. 内嵌页Web JS SDK采集的数据与小程序SDK采集数据打通，从url的query中获取来自小程序的gioInfo, 打通规则如下：
- 两者 accountId 和 appId 一致且h5地址中含 gioInfo 时，可实现两边的数据打通，
- 两者 accountId 或 appId 不一致或h5地址中不含 gioInfo时，无法实现两边数据打通
在打通后内嵌页中的setUserId，cleanUserID 将无效，只能使用从小程序继承来的登录用户ID。若小程序中改变了userId，但内嵌页并没有更新，则内嵌页的数据将无最新userId。

2. 打通成功效果

当触发了打通规则后，h5内嵌页中发数时以下字段的变化如下：<br/>
deviceId: 使用小程序的deviceId<br/>
sessionId: 使用小程序的sessionId<br/>
gioId: 使用小程序的gioId （web版本>=3.3.11，小程序版本>=3.2.5）<br/>
userId: 使用小程序的userId<br/>
userKey: 使用小程序的userKey<br/>
dataSourceId: 使用小程序的dataSourceId<br/>
platform: 使用小程序的platform<br/>
domain: 使用小程序的appId<br/>
除了以上字段，如果小程序SDK初始化时设置 extraParams ，其中的参数也会在内嵌H5页面数据中进行上报<br/>

用户行为与采集数据描述：用户点击小程序内嵌H5页面，由小程序原生页面进入H5页面，会把采集数据中的以上字段信息带入H5页面；这样 Web JS SDK 就知道 H5页面的用户是小程序的用户，后续发送的采集数据就会使用小程序的用户信息
:::

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

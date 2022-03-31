---
sidebar_position: 4
title: 数据采集API
---

通过gioGlobal.gio这个全局的方法可以调用到SDK中所有开放的接口。

一般您可在页面头部进行取值并命名为gdp方法。const gdp = gioGlobal.gio;

## 动态配置接口

### 开启/关闭无埋点数据采集(autotrack)

默认开启无埋点数据采集。当设置为 **`flase`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。

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
参考[设置强制登录模式](/docs/miniprogram/initSettings#forcelogin)
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
gdp('setUserId', 'userId');
gdp('setUserId', 'userId', 'userKey');
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
| `item.properties` | `Object` | item 中选填；物品模型属性     |

#### 示例

```js
gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item
```

:::info

详细使用示例:[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

:::

### 登录用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数             | 参数类型 | 说明                             |
| ---------------- | -------- | -------------------------------- |
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。 |

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });
```

#### 微信用户属性设置

微信用户属性对分析微信小程序用户行为数据有着非常重要的作用。GrowingIO 平台系统中用户属性默认预定义有微信用户属性如下表：

| 名称 | 标识符 |
| :---: | :---: |
| 微信 openid | $wechat_openId |
| 微信 unionid | $wechat_unionId |
| 微信昵称 | $wechat_nickName |
| 微信头像 | $wechat_avatarUrl |
| 微信用户性别  | $wechat_gender |
|  微信用户所在国家 | $wechat_country |
|  微信用户所在省份 | $wechat_province |
| 微信用户所在城市 | $wechat_city |
|  微信语言 | $wechat_language |
|  关注公众号 | $wechat_subscribeList |

当小程序获取到微信用户信息后，**无需**在 GrowingIO 客户数据平台用户属性中添加以上属性标识符，**直接**调用 `setUserAttributes` 上报微信用户信息即可。例如：

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

支付宝用户属性对分析支付宝小程序用户行为数据有着非常重要的作用。GrowingIO 平台系统中用户属性默认预定义有支付宝用户属性如下表：

| 名称 | 标识符 |
| :---: | :---: |
| 支付宝用户 ID | $alipay_userId |
| 支付宝头像 | $alipay_avatar |
| 支付宝用户所在省份 | $alipay_province |
| 支付宝用户所在城市 | $alipay_city |
| 支付宝用户昵称 | $alipay_nickName |
| 支付宝学生认证 | $alipay_isStudentCertified |
| 支付宝用户类型 | $alipay_userType |
| 支付宝用户状态 | $alipay_userStatus |
| 支付宝实名认证 | $alipay_isCertified |
| 支付宝用户性别 | $alipay_gender |

当小程序获取到支付宝用户信息后，**无需**在 GrowingIO 客户数据平台用户属性中添加以上属性标识符，**直接**调用 `setUserAttributes` 上报支付宝用户信息即可。例如：

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

:::info

详细使用示例:[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

:::

### 地理位置(getLocation)

通过手动调用地理位置接口来补发地理位置信息，提升用户地域分布的分析准确性。

**注意：初始化配置项 location.autoGet 打开时，无需调用此接口。**

```js
gdp('getLocation');
// 调用后会自动补发带位置信息的VISIT事件
```

### 与h5打通用户数据(getGioInfo)

当有H5页面需要获取小程序SDK采集用户数据的需求时(将H5页面采集的数据需要与小程序采集的数据做关联分析)，调用此接口可将获取以下数据。
:::info
默认能获取到的数据说明：<br/>
giou 是访问用户ID<br/>
gios 是 sessionID<br/>
giocs1 是登录用户ID<br/>
gioid  是上一个非空的登录用户ID
giouserkey 是用户KEY<br/>
gioprojectid 是 accountId<br/>
gioappid 是 小程序appid<br/>
gioplatform 是应用平台<br/>
giodatasourceid 是 datasourceId
:::

```js
gdp('getGioInfo');
```

**注意：gdp('getGioInfo')获取的数据是一次性的，非动态获取，如果切换用户导致sessionId或userId等用户信息变动时，需要您销毁当前webview重设地址。并且使用不保留当前页面的跳转方式跳出承载webview的小程序页面。 例：**

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
'https://www.growingio.com/?foo=1'
```

```js
// 小程序WebView加载H5时的拼接示例为
`https://www.growingio.com/?foo=1&${gdp('getGioInfo')}`
```

**如果您需要获取更多的小程序SDK采集的字段数据，请参考[`extraParams`](./initSettings#extraparams)**。

**H5页面集成SDK参考[小程序内嵌页使用集成](/docs/webjs/base/getting_started#小程序内嵌页使用集成)**

## 采集标记

### 额外数据标记

1、有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-title` 来补充SDK采集的内容。例：

```html
<view data-title="额外的上报信息">节点</view>
```

2、有时我们页面中可能存在类似列表类的Dom结构相似或一致使得SDK上报数据出现无法区分的情况。此时，我们可以通过索引标记 `data-index` 来准确描述节点信息。例：

```html
<view>
  <view data-index="1">节点1</view>
  <view data-index="2">节点2</view>
  <view data-index="3">节点3</view>
</view>
```

***Tips：我们建议您多设定额外的数据标记来采集更多的数据，以此获取更全面和更准确的用户行为数据。***

3、有时我们表单页面中可能需要获取用户选择框、单/多选框的值进行上报以准确分析用户行为。此时，我们可以通过数值采集标记 `data-growing-track` 来获取值。例：

```html
<checkbox-group bindchange='checkboxChange' data-growing-track>
  <label class='checkbox'>
    <checkbox value='GrowingIO' checked='true' /> GrowingIO
  </label>
  <label class='checkbox'>
    <checkbox value='Google' checked='false' /> Google Analytics
  </label>
</checkbox-group>
```

:::caution 免责声明警告：
请勿尝试在密码框上标记 data-growing-track 采集数据，会明文暴露用户填写的密码信息。GrowingIO不承担由此直接或间接产生的数据风险和法律风险。
:::

### 忽略采集标记

有时我们会根据业务中不同的需要开发一些组件或使用一些第三方组件，可能会触发SDK的 VIEW_CHANGE 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。例：

```html
<view data-growing-ignore>要忽略的节点</view>
```

## 其他
<!--
### 半自动埋点浏览事件

用户标记一个元素并提供埋点事件，SDK负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件。因此您同样需要[参考埋点事件](/docs/miniprogram/commonlyApi#4埋点事件)在平台上进行事件类型和变量的预定义。

**支持范围：微信小程序。支付宝小程序不支持。**

使用方法：

1、在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

2、设置参数

#### 方式一：(整体定义)

在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs` 属性，并分别对应 `track` 方法中的 `eventId` 和 `properties` 参数进行设置，参数规则[参考文档](/docs/miniprogram/commonlyApi#4埋点事件track)。

```js
Page({
  data: {
    impAttrs: JSON.stringify({ type: 'fruit', name: 'apple', color: 'red' }),
  }
})
```
```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_goods_var"
  data-gio-imp-attrs="{{ impAttr }}"
>
  监听的元素
</view>
```
对应产生的`CUSTOM`事件相当于： ↓↓↓
```js
gdp('track', 'imp_goods_var', { type: 'fruit', name: 'apple', color: 'red' });
```
**请注意：`data-gio-imp-attrs` 允许接受一个Object或者合法的Object字符串，我们会尝试进行对象格式化。**

#### 方式二：(单个字段定义)

在节点上添加 `data-gio-imp-track` 属性，添加 `data-gio-imp-${key} = ${value}` 的自定义参数。

```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_people_var"
  data-gio-imp-name="lucy"
  data-gio-imp-age="10"
  data-gio-imp-sex="girl"
>
  监听的元素
</view>
```
对应产生的`CUSTOM`事件相当于： ↓↓↓
```js
gdp('track', 'imp_people_var', { name: 'lucy', age: '10', sex: 'girl' });
```

3、设置完参数后，在当前页面的 `onShow` 中，添加 `gdp('collectImp', this);` 进行注册。 -->

### navigator组件

如果您的小程序使用了navigator组件，需要您手动绑定一个空的点击事件，SDK才能实现跳转点击的采集。例：

```html
<navigator>
  <view bindtap="nameForThisClick">
     ...
  </view>
</navigator>
```

---
sidebar_position: 4
title: 数据采集API
---
通过gioGlobal.gdp这个全局的方法可以调用到SDK中所有开放的接口。

一般您可在页面头部进行解构获取gdp方法。const { gdp } = gioGlobal;

## 动态配置接口

### 1、开启/关闭无埋点数据采集(autotrack)
默认开启无埋点数据采集。当设置为 **`flase`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。
```js
gdp('setAutotrack', true | false);
```

### 2、开启/关闭数据采集(dataCollect)
默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。
```js
gdp('setDataCollect', true | false);
```

### 3、开启/关闭调试模式(debug)
默认不开启。当设置为 **`true`** 时， 开启后会在开发者工具控制台输出日志
```js
gdp('enableDebug', true | false);
```

### 4、修改上报地址(host)
请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。
```js
gdp('setTrackerHost', 'xxxxxxxx');
```

### 5、修改请求协议(scheme)
默认为**`https`**，您可以在开发过程中自定义设置
```js
gdp('setTrackerScheme', 'http' | 'https');
```

## 功能接口

### 1、设置访问用户id(identify)
:::info
若使用此接口需要在初始化时将 forceLogin 设置为 true
参考[设置强制登录模式](/docs/miniprogram/3.0/initSettings#forcelogin)
:::
在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户ID。

#### 示例：
```js
gdp('identify', openId);
```

### 2、设置登录用户id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后重新调用setLoginUserId方法。
:::info
支持 ID-MAPPING SDK版本 >=3.3.0
**需在初始化 SDK 时设置`enableIdMapping`为`true`**
:::
#### 参数说明
| 参数      | 参数类型          | 说明                                                                |
| --------- | ----------------- | ------------------------------------------------------------------- |
| `userId`  | `string / number` | 必填。                                                             |
| `userKey` | `string / number` | 选填；适用于 ID-MAPPING,可设置 `userId` 的类型。                       |

#### 示例：
```js
gdp('setUserId', 'userId');
gdp('setUserId', 'userId', 'userKey');
```

### 3、清除登录用户id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID

#### 示例：
```js
gdp('clearUserId');
```

### 4、自定义埋点(track)
发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中`事件管理用户界面`配置事件以及事件属性。

```js
gdp('track', eventId, properties, item);
```
#### 参数说明
| 参数              | 参数类型 | 说明                            |
| ----------------- | -------- | ------------------------------- |
| `eventId`         | `String` | 必填；事件名，事件标识符。      |
| `properties`      | `Object` | 选填；事件属性。                |
| `item`            | `Object` | 选填；事件发生关联的物品模型。  |
| `item.id`         | `string` | item 中必填；物品模型 id。      |
| `item.key`        | `string` | item 中必填；物品模型唯一标识。 |
| `item.properties` | `Object` | item 中选填；物品模型属性。     |

#### 示例：
```js
gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item
```

### 5、登录用户属性(setUserAttributes)
以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数             | 参数类型 | 说明                             |
| ---------------- | -------- | -------------------------------- |
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。 |

#### 示例：
```js
gdp('setUserAttributes', { name: 'hjh' });
```

### 6、地理位置(getLocation)

通过手动调用地理位置接口来补发地理位置信息，提升用户地域分布的分析准确性。

** 注意：初始化配置项 location.autoGet 打开时，无需调用此接口。**
```js
gdp('getLocation');
// 调用后会自动补发带位置信息的VISIT事件
```

### 7、与h5打通用户数据(getGioInfo)

当存在与H5页面打通用户数据的需求时(将H5视为小程序的页面)，调用此接口用户获取打通数据。
```js
gdp('getGioInfo');
```
** 注意：与H5打通数据时用户信息是一次性的，如果切换用户导致sessionId或userId等用户信息变动时，需要您手动重设H5地址来同步信息。例：**
```js
// js
Page({
  data: { url: `https://www.growingIO.com?${gdp('getGioInfo')}` }
  onShow() {
    // 每次onShow时重设一次url的值，保证getGioInfo拿到的是最新值
    this.setData({ url: this.data.url });
  },
  handleLogin() {
    ...
    // 登录完成后重设一次url的值，保证getGioInfo拿到的是最新值
    this.setData({ url: this.data.url });
  }
})
```
```html
<!-- wxml -->
<view>
  <web-view src="{{url}}"></web-view>
</view>
```

### 8、手动注册半自动曝光事件(collectImp)
```js
Page({
  onShow: {
    gio('collectImp', this);
  }
});
```

## 采集标记

### 1、额外数据标记

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

### 2、忽略采集标记

有时我们会根据业务中不同的需要开发一些组件或使用一些第三方组件，可能会触发SDK的 VIEW_CHANGE 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。例：

```html
<view data-growing-ignore>要忽略的节点</view>
```

## 其他

### 半自动曝光事件

用户标记一个元素并提供自定义埋点事件，SDK负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的自定义埋点事件。因此您同样需要[参考自定义埋点](/docs/miniprogram/3.0/commonlyApi#4自定义埋点)在平台上进行事件类型和变量的预定义。

**支持范围：微信小程序。支付宝小程序不支持。**

使用方法：

1、在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

2、设置参数

#### 方式一：(整体定义)

在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs` 属性，并分别对应 `track` 方法中的 `eventId` 和 `properties` 参数进行设置，参数规则[参考文档](/docs/miniprogram/3.0/commonlyApi#4自定义埋点track)。

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
gio('track', 'imp_goods_var', { type: 'fruit', name: 'apple', color: 'red' });
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
gio('track', 'imp_people_var', { name: 'lucy', age: '10', sex: 'girl' });
```

3、设置完参数后，在当前页面的 `onShow` 中，添加 `gio('collectImp', this);` 进行注册。

### navigator组件

如果您的小程序使用了navigator组件，需要您手动绑定一个空的点击事件，SDK才能实现跳转点击的采集。例：
```html
<navigator>
  <view bindtap="nameForThisClick">
     ...
  </view>
</navigator>
```
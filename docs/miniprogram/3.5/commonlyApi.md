---
sidebar_position: 4
title: 数据采集API
---


通过 **`global.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

您可在页面头部进行解构获取gdp方法。**`const { gdp } = global;`**

## 初始化

在<3.5.0的旧版本中我们提供了两种初始化方式：`init` 和 `setConfig`，这引起了很多用户的误解，现在我们将只保留 `init` 的初始化方式，以此来降低您的理解成本。

### 1、初始化SDK(init)

[参考集成文档](/docs/miniprogram/3.5/integration/wx)

### 2、初始化SDK(setConfig)
***此方法废弃，请参考 init 初始化***

## 动态配置接口(setOption)

由于多样的动态修改配置的需求，我们在`3.5.0`版本开始提供了统一的接口，以降低您的使用难度。设值成功返回true，设值失败返回false。

```js
gdp('setOption', optionKey, optionValue);  // return true | false
```

### 1、开启/关闭无埋点数据采集(autotrack)
默认开启无埋点数据采集。当设置为 **`flase`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。
```js
gdp('setOption', 'autotrack', true | false);

// <3.5.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setAutotrack', true | false);
```

### 2、开启/关闭数据采集(dataCollect)
默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。
```js
gdp('setOption', 'dataCollect', true | false);

// <3.5.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setDataCollect', true | false);
```

### 3、开启/关闭调试模式(debug)
默认不开启。当设置为 **`true`** 时， 开启后会在开发者工具控制台输出日志
```js
gdp('setOption', 'debug', true | false);

// <3.5.0版本的写法仍兼容，但不建议您再这么使用
// gdp('enableDebug', true | false);
```

### 4、修改上报地址(host)
请设置准确的host地址，支持 **`IP`** 或 **`域名`** 格式，**无需携带协议头**。
```js
gdp('setOption', 'host', 'wxapi.growingio.com');

// <3.5.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setTrackerHost', 'xxxxxxxx');
```

### 5、修改请求协议(scheme)
默认为**`https`**，您可以在开发过程中自定义设置
```js
gdp('setOption', 'scheme', 'http' | 'https');

// <3.5.0版本的写法仍兼容，但不建议您再这么使用
// gdp('setTrackerScheme', 'http' | 'https');
```

## 功能接口

### 1、设置访问用户id(identify)
:::info
若使用此接口需要在初始化时将 forceLogin 设置为 true
参考[设置强制登录模式](/docs/miniprogram/3.5/initSettings#forcelogin)
:::
在微信小程序调用[登录开放接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) `wx.login` 之后，获取 openId，调用 identify 设置访问用户ID。

#### 示例：
```js
gdp('identify', openId);
```

### 2、设置登录用户id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后即调用此方法。
:::info
支持 ID-MAPPING SDK版本 >=3.3.0
**需在初始化 SDK 时设置`enableIdMapping`为`true`**
:::
#### 参数说明
| 参数      | 参数类型 | 说明                                                                |
| --------- | -------- | ------------------------------------------------------------------- |
| `userId`  | `string / number` | 必填；字符长度小于等于 1000，长度超限将会被截断。                 |
| `userKey` | `string / number` | 可选；适用于 ID-MAPPING,可设置 `userId` 的类型；长度限制同 `userId` |

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
#### 参数说明
| 参数              | 参数类型 | 说明                                                                                   |
| ----------------- | -------- | ----------------------------------------------------------------------------------- |
| `eventId`         | `String` | 必填；事件名，事件标识符。                                                               |
| `properties`      | `Object` | 选填；事件属性。[参数限制](/docs/miniprogram/3.5/commonlyApi#object参数限制)              |
| `item`            | `Object` | 选填；事件发生关联的物品模型。                                                           |
| `item.id`         | `string` | item 中必填；物品模型 id。                                                             |
| `item.key`        | `string` | item 中必填；物品模型唯一标识。                                                          |
| `item.properties` | `Object` | item 中选填；物品模型属性。参数限制同`properties`。                                       |

#### 示例：
```js
// gdp('track', eventId, properties[, item]);

gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item
```

### 5、登录用户属性(setUserAttributes)
以登录用户的身份定义登录用户属性，用于用户信息相关分析。

#### 参数说明

| 参数             | 参数类型 | 说明                                                                              |
| ---------------- | -------- | --------------------------------------------------------------------------------- |
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。[参数限制](/docs/miniprogram/3.5/commonlyApi#object参数限制) |

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

### 8、获取SDK当前配置(getOption)
**版本信息：>=3.5.0**

当调试时需要获取SDK当前的完整配置信息时，可调用此接口。
```js
gdp('getOption');
```

### 9、手动注册半自动曝光事件(collectImp)
***此方法废弃，3.5.0版本起为自动注册无需手动注册***

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

***tips：3.5.0版本开始，SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件。如果您期望采集它，请添加 `data-growing-track` 标记。***

## 其他

### Object参数限制
**版本信息：>=3.5.0**

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

** `key:` string | number，length <=50；**

** `value:` string | number，length <=1000；**

### navigator组件

如果您的小程序使用了navigator组件，需要您手动绑定一个空的点击事件，SDK才能实现跳转点击的采集。例：
```html
<navigator>
  <view bindtap="nameForThisClick">
     ...
  </view>
</navigator>
```

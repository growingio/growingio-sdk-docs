---
title: 数据采集API
sidebar_position: 3
---

通过`gioGlobal.gdp`这个全局的方法可以调用到SDK中所有开放的接口。

一般您可在页面头部进行解构获取gdp方法。`const { gdp } = gioGlobal;`

## 动态配置接口

### 1、修改请求协议(scheme)
默认为`https`，您可以在开发过程中自定义设置
```js
gdp('setTrackerScheme', 'http');
```

### 2、开启/关闭调试模式(debug)
默认不开启。当设置为 `true` 时， 开启后会输出 SDK Log 日志
```js
gdp('enableDebug', true);
```

### 3、开启/关闭数据采集(dataCollect)
默认开启数据采集。当设置为 `false` 时，SDK将不会采集和上报事件。
```js
gdp('setDataCollect', true);
```

### 4、开启/关闭无埋点数据采集(autotrack)
默认开启无埋点数据采集。当设置为 `flase` 时，将不再采集view_click,view_change,form_submit无埋点事件。
```js
gdp('setAutotrack', true);
```

## 功能接口

### 1、设置访问用户id
:::info
若使用此接口需要在初始化是将 forceLogin 设置为 true
参考[设置强制登录模式](/docs/miniprogranm/base/configuration#设置强制登录模式forcelogin)
:::
在微信小程序调用[登录开放接口 `wx.login`](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)之后，获取 openId，调用 identify 设置访问用户ID。

```js
gdp('identify', openId);
```

### 2、设置登录用户id

当用户登录之后调用`setUserId` API，设置登录用户ID

若您的小程序每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在监测到用户为登录用户后重新调用setLoginUserId方法。
:::info
支持 ID-MAPPING SDK版本 >=3.3.0
**需在初始化 SDK 时设置`enableIdMapping`为`true`**
:::
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `userId`  | `String` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `String` | 可选；适用于ID-MAPPING,可设置 `userId` 的类型|
#### 示例
```js
gdp('setUserId', 'userId');
gdp('setUserId', 'userId', 'userKey');
```

### 3、清除登录用户id

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID

```js
gdp('clearUserId');
```

### 4、埋点事件接口
发送一个自定义事件。在添加所需要发送的事件代码之前，需要在事件管理用户界面配置事件以及事件级变量。
#### 参数说明
| 参数     | 参数类型 | 说明 |
| :-------  | :------   | :---|
| `eventId` | `String` | 事件名，事件标识符 |
| `variables` | `Object` | 事件发生时所伴随的维度信息（可选）；限制：Object 类型，value 仅支持字符串、整数、小数；key 长度 <=50，value 长度 <=1000|
| `item` | `Object` | 事件发生关联的物品模型item(可选);若需要传item，则key(必填)：物品模型唯一标识,id(必填)：物品模型id|
#### 示例

```js
// gdp('track', eventId, variables[, item]);
gdp('track', 'order');
gdp('track', 'order', { type: 'hjh' });
gdp('track', 'order', {}, { key: 'order_id', id: '12345' });
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' });
```

### 5、设置用户属性
以登录用户的身份定义用户属性变量，用于用户信息相关分析。

#### 参数说明

| 参数         | 参数类型                           | 说明         |
| :----------- | :--------------------------------- | :----------- |
| `userAttributes` | `Object` | 包含用户变量的 Object 对象；限制：Object 类型，value 仅支持字符串、整数、小数|

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });
```

<!-- #### 6、地理位置接口

通过手动调用地理位置接口来补发地理位置信息，提升用户地域分布的分析准确性。

注意：初始化配置项 location.autoGet 打开时，无需调用此接口。
```js
gdp('getLocation');
``` -->

## 采集标记

### 额外数据标记

1、有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-title` 来补充SDK采集的内容。例：

```html
<view data-title="额外的上报信息">节点</view>
```

2、有时我们页面中可能存在类似列表Dom结构一致使得SDK上报数据出现无法区分的情况。此时，我们可以通过索引标记 `data-index` 来准确描述节点信息。例：

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
<checkbox-group bindchange='checkboxChange' data-growing-track="true">
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

#### 忽略采集标记

有时我们会根据业务中不同的需要开发一些组件或使用一些第三方组件，可能会触发SDK的 VIEW_CHANGE 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。例：

```html
<view data-growing-ignore="true">要忽略的节点</view>
```

## 其他

### navigator组件

如果您的小程序使用了navigator组件，需要您手动绑定一个空的点击事件，SDK才能实现跳转点击的采集。例：
```html
<navigator>
  <view bindtap="nameForThisClick">
     ...
  </view>
</navigator>
```
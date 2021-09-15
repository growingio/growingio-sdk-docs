---
title: 数据采集API
sidebar_position: 3
---

通过`gioGlobal.gdp`这个全局的方法可以调用到SDK中所有开放的接口。

一般您可在页面头部进行解构获取gdp方法。`const { gdp } = gioGlobal;`

### 动态配置接口

#### 1、修改请求协议(scheme)
```js
gdp('setTrackerScheme', 'http');
```

#### 2、开启/关闭调试模式(debug)
```js
gdp('enableDebug', true);
```

#### 3、开启/关闭数据采集(dataCollect)
```js
gdp('setDataCollect', true);
```

#### 4、开启/关闭无埋点数据采集(autotrack)
```js
gdp('setAutotrack', true);
```

### 功能接口

#### 1、设置访问用户id

在用户登录后，获取 openId，调用 identify 设置访问用户id。

```js
gdp('identify', openId);
```

#### 2、设置登录用户id

在用户登录后，可以调用setUserId，上报登录用户id。

```js
gdp('setUserId', userId);
```

#### 3、清除登录用户id

清除设置的userId

```js
gdp('clearUserId');
```

#### 4、埋点事件接口

发送埋点事件

```js
gdp('track', eventId, variables[, item]);
```

- eventId： 事件名
- variables：事件变量
- item(可选)：物品模型
  - key(必填)：物品模型唯一标识
  - id(必填)：物品模型id

#### 5、设置用户属性

设置用户属性，会直接上报LOGIN_USER_ATTRIBUTES事件。

```js
gdp('setUserAttributes', properties);
```

- properties：用户属性变量（object）

<!-- #### 6、地理位置接口

通过手动调用地理位置接口来补发地理位置信息，提升用户地域分布的分析准确性。

注意：初始化配置项 location.autoGet 打开时，无需调用此接口。
```js
gdp('getLocation');
``` -->

### 采集标记

#### 额外数据标记

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

### 其他

#### navigator组件

如果您的小程序使用了navigator组件，需要您手动绑定一个空的点击事件，SDK才能实现跳转点击的采集。例：
```html
<navigator>
  <view bindtap="nameForThisClick">
     ...
  </view>
</navigator>
```
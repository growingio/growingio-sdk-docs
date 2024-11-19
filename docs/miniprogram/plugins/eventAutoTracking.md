---
sidebar_position: 1
title: 无埋点
---

## 简介（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change` 事件的插件。

**点击事件(tap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的点击事件**触发时上报。

**长按事件(longtap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的长按事件**触发时上报。（阿里(支付宝)小程序、淘宝小程序不支持）

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当小程序中**绑定的变更事件**触发时上报。

## 集成

### 1、引入

#### 下载集成引入

- 下载插件并复制至项目中：
  **<font size="3">[https://assets.giocdn.com/sdk/minip/4.3.1/plugins/gioEventAutoTracking.js](https://assets.giocdn.com/sdk/minip/4.3.1/plugins/gioEventAutoTracking.js)</font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

```js
import gioEventAutoTracking from './utils/plugins/gioEventAutoTracking';
```

#### npm 集成引入

```js
import gioEventAutoTracking from 'gio-miniprogram-sdk/plugins/gioEventAutoTracking';
```

### 2、注册

```js
gdp('registerPlugins', [gioEventAutoTracking]);
gdp('init', xxxx);
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

提示：阿里(支付宝)和淘宝小程序中是`setNavigationBar` [参考文档](https://opendocs.alipay.com/mini/api/xwq8e6?pathHash=8eaec8e2)

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

## 注意

1、默认情况下，加载该插件后自动开启无埋点功能。

2、使用 vue2/3 语言模式开发点击事件需要传参时，可能会无法触发 CLICK 事件，此时您需要再额外在最后一个参数中传入`$event`，以保证原生事件能传入方法中，才能触发点击事件（函数定义时可忽略$event 的参数接受定义，只定义自身业务所需参数即可）。例：

```html
<button @click="myClick(param1, param2, ..., $event)"></button>
```

3、使用 vue3 语言模式开发使用 &lt;script setup&gt; 语法无法触发点击事件时，请在最后将用于直接触发点击事件的方法，调用`defineExpose`进行导出。例：

```html
<template>
  <button @tap="onBtnClick">触发完整属性点击</button>
</template>

<script setup>
  const onBtnClick = (e) => console.log('触发click', e);
  defineExpose({ onBtnClick });
</script>
```

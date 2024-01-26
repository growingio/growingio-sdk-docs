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
  **<font size="3">[https://assets.giocdn.com/sdk/minip/4.0.1/plugins/gioEventAutoTracking.js](https://assets.giocdn.com/sdk/minip/4.0.1/plugins/gioEventAutoTracking.js)</font>**<br/>
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

## 注意

1、默认情况下，加载该插件后自动开启无埋点功能。

2、使用 vue2/3 语言模式开发点击事件需要传参时，可能会无法触发 CLICK 事件，此时您需要再额外在最后一个参数中传入`$event`，以保证原生事件能传入方法中，才能触发点击事件（函数定义时可忽略$event 的参数接受定义，只定义自身业务所需参数即可）。例：

```html
<button @click="myClick(param1, param2, ..., $event)"></button>
```

3、使用 vue3 语言模式开发使用 &lt;script setup&gt; 语法时，请在最后将用于直接触发点击事件的方法，调用`defineExpose`进行导出。例：

```html
<template>
  <button @tap="onBtnClick">触发完整属性点击</button>
</template>

<script setup>
  const onBtnClick = (e) => console.log('触发click', e);
  defineExpose({ onBtnClick });
</script>
```

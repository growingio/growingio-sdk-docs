---
sidebar_position: 1
title: 无埋点
---

## 简介（gioEventAutoTracking）

自动采集 `tap`、`longtap`、`change`、`submit` 事件的插件。

**点击事件(tap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的点击事件**触发时上报。

**长按事件(longtap)：** 对应 `VIEW_CLICK` 事件。自动上报，当小程序中**绑定的长按事件**触发时上报。（阿里(支付宝)小程序/淘宝小程序不支持）

**变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当小程序中**绑定的变更事件**触发时上报。

**表单提交事件(submit)：** 对应 `FORM_SUBMIT` 事件。自动上报，当小程序中**绑定的表单提交事件**触发时上报。(快应用不支持)

## 集成

### 1、引入

#### 下载集成引入

- 下载插件包并复制至项目中：
**<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.9/plugins.zip></font>**<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioEventAutoTracking from "./utils/plugins/gioEventAutoTracking"
```

#### npm集成引入

```js
import gioEventAutoTracking from "gio-webjs-sdk-cdp/plugins/gioEventAutoTracking"
```

### 2、注册

```js
gdp('registerPlugins', [gioEventAutoTracking]);
gdp('init', xxxx);
```

## 注意

1、默认情况下，加载该插件后自动开启无埋点功能。

2、初始化配置项 `autotrack` 依然有效并能控制该功能是否启用，请留意`autotrack`是否在开启状态。

3、使用vue2/3语言模式开发时，点击事件需要传参时，可能会无法触发CLICK事件，此时您需要再额外在最后一个参数中传入`$event`，以保证原生事件能传入方法中，才能触发点击事件（函数定义时可忽略$event的参数接受定义，只定义自身业务所需参数即可）。例：

```html
<button @click="myClick(param1, param2, ..., $event)"></button>
```

---
sidebar_position: 1
title: 无埋点
---

## 简介（gioEventAutoTracking）

自动采集 `click`、`change`事件的插件。

**点击事件(click)：** 对应 `VIEW_CLICK` 事件。自动上报，当页面中有点击事件触发时上报。

**表单变更事件(change)：** 对应 `VIEW_CHANGE` 事件。自动上报，当页面中有元素变更事件触发时上报。

## 集成

本插件为标品功能，全量集成SDK时（即使用gdp-full.js）时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioEventAutoTracking.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

#### npm集成引入

```js
import gioEventAutoTracking from "gio-webjs-sdk/plugins/gioEventAutoTracking"
```

### 2、注册

```js
gdp('registerPlugins', [gioEventAutoTracking]);
gdp('init', xxxx);
```

## 采集标记

以下几种采集标记，多用于无埋点采集，如不了解相关逻辑，可以参考[小百科](/docs/webjs/encyclopedia)文档详细了解相关逻辑。

### 1、采集补充标记

#### 1）data-growing-title

有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-growing-title` 来补充SDK采集的内容。例：

```html
<div data-growing-title="额外的上报信息">节点</div>
```

#### 2）data-growing-index

有时我们页面中可能存在类似列表类的Dom结构相似或一致使得SDK上报数据时因xpath一致出现无法区分的情况。此时，我们可以通过索引标记 `data-growing-index` 来准确描述节点信息。例：

```html
<div>
  <div data-growing-index="1">节点1</div>
  <div data-growing-index="2">节点2</div>
  <div data-growing-index="3">节点3</div>
</div>
```

**<font color="#FC5F3A">注意：</font>** index字段取值需从 **1** 开始。

#### 3）data-growing-container

有时我们会将一个拥有复杂子节点的节点视为一个整体（例如包裹了图标和文字的按钮组件），由于子节点自身会产生原生事件，但是我们期望其事件的触发是一个整体（例如点击了包裹了图标和文字的按钮组件中的图标，期望是整个按钮的点击事件触发）。又或者我们期望在一个容器范围内统计所有节点的点击事件，这时候就需要使用`data-growing-container`进行标记，我们会同时为触发节点和打了标记的节点上报数据。例：

```html
<div data-growing-container class="btn" onclick="onBtnClick()">
  <i class="icon icon-click">
  <span>
    这是按钮的文本
  </span>
</div>
```

在上面的示例中，如果点击了图标触发了按钮事件，会同时发送i节点和div节点的两个点击事件。圈选时您可以圈选至div节点即可。

### 2、采集白名单标记

有时我们表单页面中可能需要获取用户填写或选择的值进行上报以准确分析用户行为。此时，我们可以通过数值采集标记 `data-growing-track` 来获取值。例：

```html
<div class="flex mb-4">
  <label>文本框：</label>
  <input
    id="name"
    name="name"
    placeholder="输入内容，发送带文本内容的change事件"
    type="text"
    data-growing-track
  />
</div>
```

:::caution 免责声明警告：
SDK会自动忽略 `type="password"` 类型的input框的内容采集；如果类型为`text`的input中可能包含敏感信息，请不要添加该标记，可能会明文暴露这些信息。GrowingIO不承担由此直接或间接产生的数据风险和法律风险。
:::

**提示：SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件（例如video）。如果您期望采集它，请添加 `data-growing-track` 标记。**

### 3、采集黑名单标记

有时我们会根据业务中不同的需要使用一些自己开发的组件或第三方组件，可能会触发SDK的 `VIEW_CHANGE` 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。**注意标记在事件绑定的节点上，没事件绑定的节点默认不会采集。** 例：

```html
<div data-growing-ignore onclick="onLinkTap()">要忽略的节点</div>
```

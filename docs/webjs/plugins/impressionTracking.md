---
sidebar_position: 5
title: 半自动埋点浏览
---

## 简介（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件。因此您同样需要参考[埋点事件](/docs/webjs/commonlyApi#6埋点事件track)在平台上进行事件类型和变量的预定义。

### 曝光逻辑

**always：**只要从**屏幕不可见区域到可见区域**即可计为一次曝光并上报。(默认值)

**once：**从**屏幕不可见区域到可见区域**曝光只上报一次。

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>InternetExplorer | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
|---------|---------|----------|--------|--------|--------|--------|
| <font color="#FC5F3A">No</font> | Edge >= 16 | >= 55  | >= 58  | >= 12.1  | >= 45  | >= 10 |

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/plugins/gioImpressionTracking.js"></script>
```

**提示：** 上述地址中的SDK插件默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的SDK插件；或者如果您希望不受 CDN（内容分发网络）影响，请下载至本地集成，并修改引用为您本地项目的相对地址。

WebJS SDK 插件下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

#### npm集成引入

```js
import gioImpressionTracking from "gio-webjs-sdk/plugins/gioImpressionTracking"
```

### 2、注册

```js
gdp('registerPlugins', [gioImpressionTracking]);
gdp('init', xxxx);
```

## 使用方法

### 传值方式一：使用Object对象或JSON字符串赋值（推荐）

在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则参考[埋点事件](/docs/webjs/commonlyApi#6埋点事件track)。传值时赋值一个Object对象或一个JSON字符串。

```js
var impAttrs = JSON.stringify({ type: 'hjh', name: 'yue' });
// or
var impAttrs = { type: 'hjh', name: 'yue' };
```

```jsx
<div
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs={impAttrs}
  // or
  data-gio-imp-attrs={`{ "type": "hjh", "name": "yue" }`}
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</div>
```

对应产生的`CUSTOM`事件相当于： ↓↓↓

```js
gdp('track', 'imp_picture_var', { type: 'hjh', name: 'yue' });
```

### 传值方式二：单个字段定义

在节点上添加 `data-gio-imp-track`、`data-gio-track-xxxxx` 属性。分别对`properties`属性进行单个定义传值。

```html
<div
  data-gio-imp-track="imp_cat_var"
  data-gio-track-name="cat_picture"
  data-gio-track-time="20210601"
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</div>
```

对应产生的`CUSTOM`事件相当于： ↓↓↓

```js
gdp('track', 'imp_cat_var', { name: 'cat_picture', time: '20210601' });
```

### 修改曝光类型

如果您的曝光事件只需要统计一次或触发过于频繁导致曝光事件量过大，可以在节点上添加 **`data-gio-imp-type="once"`** 并设置唯一的`节点id`，来使得曝光逻辑变为单次上报。

```html
<div
  id="imp_1"
  data-gio-imp-type="once"
  data-gio-imp-track="imp_picture_var"
  ...
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</div>
```

### 添加复制发送实例

您可以将本次曝光事件同时发送给其他数据源和地址 [参考文档](/docs/webjs/plugins/multipleInstances#4埋点埋点计时半自动埋点浏览多发)

## 手动更新半自动埋点监听

当您需要添加半自动埋点的节点是动态渲染时（例如根据接口数据渲染不同的内容），SDK 可能会因为无法感知节点渲染时机而失去对标记节点的监听。此时，您需要调用 `updateImpression` 手动更新 SDK 的监听来保证您的动态渲染节点能够被监听到。

#### 示例

```js
  const data = {
    impData: [],
  };

  // 这里通过一个Promise来模拟调用接口
  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Lily', age: 18 });
    }, 3000);
  });

  getData.then((result) => {
    // 设值触发节点渲染
    data.impData = result;
    // 赋值后调用
    gdp('updateImpression');
  });
```

## 设置曝光比例

曝光比例是指当一个需要曝光的元素出现在屏幕可见范围的部分占据自身尺寸的比例。值为 0 表示只要出现（哪怕只有一条边）即产生曝光事件，若设为 1 则表示需要整个元素完整地出现在屏幕可见范围才产生曝光事件。

设置曝光比例需要您在SDK初始化时配置完成。[参考文档](/docs/webjs/initSettings#impressionscale)

**<font color="#FC5F3A">注意：</font>SDK、插件版本 >= 4.2.3 支持。**


## 注意

1、`data-gio-imp-attrs` 允许接受一个Object或者JSON.stringify后的Object字符串，SDK会自动尝试进行格式化，格式化失败时默认返回空对象。

2、被标记的节点必须有实际的大小，一个没有内容和样式的节点标记可能不会触发事件。

3、请勿在同一页面中大量标记半自动埋点浏览事件（如商品列表），可能会严重影响页面性能导致卡顿。

4、支持节点自动监听，即动态生成的节点，只要补充标记合法，就会自动触发监听，也可以触发曝光。

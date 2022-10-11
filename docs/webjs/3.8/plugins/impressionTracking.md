---
sidebar_position: 2
title: 半自动埋点浏览
---

### 简介

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件。因此您同样需要参考[埋点事件](/docs/webjs/3.8/commonlyApi#4埋点事件track)在平台上进行事件类型和变量的预定义。

#### 曝光逻辑

只要从**屏幕不可见区域到可见区域**即计为一次曝光并上报。

### 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>InternetExplorer | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
|---------|---------|----------|--------|--------|--------|
| <font color="#FC5F3A">No</font> | Edge >= 16 | >= 55  | >= 58  | >= 12.1  | >= 45  |

### 集成

全量集成SDK时无需再次集成插件。

#### 1、引入

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioImpressionTracking.js"></script>
```

npm集成引入：

```js
import gioImpressionTracking from "gio-webjs-sdk-cdp/plugins/gioImpressionTracking.js"
```

#### 2、注册

```js
gdp('registerPlugins', [gioImpressionTracking]);
gdp('init', xxxx);
```

### 使用方法

#### 传值方式一

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

**<font color="#FC5F3A">注意：</font>该传值方式所有单个字段都会归入`properties`对象中，不支持`items`属性上报。**

#### 传值方式二

在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs`、`data-gio-imp-items` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则参考[埋点事件](/docs/webjs/3.8/commonlyApi#4埋点事件track)。

```html
<div
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs='{ "type": "hjh", "name": "yue" }'
  data-gio-imp-items='{ "key": "order_id", "id": "12345" }'
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</div>
```

对应产生的`CUSTOM`事件相当于： ↓↓↓

```js
gdp('track', 'imp_picture_var', { type: 'hjh', name: 'yue' }, { key: 'order_id', id: '12345' });
```

### 注意

1、`data-gio-imp-attrs` 和 `data-gio-imp-items` 允许接受一个Object或者JSON.stringify后的Object字符串，SDK会自动尝试进行格式化。

2、被标记的节点必须有实际的大小，一个没有内容和样式的节点标记可能不会触发事件。

3、请勿在同一页面中大量标记半自动埋点浏览事件（如商品列表），可能会严重影响页面性能导致卡顿。

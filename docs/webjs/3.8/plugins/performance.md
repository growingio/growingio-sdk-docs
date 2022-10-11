---
sidebar_position: 8
title: 性能监控
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 简介

提供页面首屏加载监控、错误监控和网络请求监控的全方位性能监控采集插件。

### 采集范围

#### 1、首屏加载监控

含以下指标监控：

- 白屏时长（FP）；从浏览器开始页面加载到用户能看到页面内容这段时间的白屏时间
- Dom解析时长（DomParse）；从请求响应结束至Dom可交互的耗时
- 可交互加载时长（DomReady）；执行完所有同步脚本的耗时
- 页面完整加载时长（PageLoad）；从浏览器开始页面请求到页面渲染完成的时间

其他指标（TTFB、FCP、LCP、CLS等）正在努力开发中，敬请期待。

#### 2、错误监控

含以下错误类型监控：

- JS执行错误
- 资源加载错误
- Promise执行错误
- 网络请求错误

#### 3、网络请求监控

含以下内容监控：

- 请求地址
- 请求时长
- 请求错误码

### 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src//archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>InternetExplorer | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- |
| 11 | All | >= 35 | >= 25 | >= 11 | >= 15 |

### 集成

此插件为独立插件，即使您集成了全量版本SDK，需要此功能时，依然需要注册此插件。

#### 1、引入

CDN集成引入：

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioPerformance.js"></script>
```

npm集成引入：

```js
import gioPerformance from "gio-webjs-sdk-cdp/plugins/gioPerformance.js"
```

#### 2、注册

```js
gdp('registerPlugins', [gioPerformance]);
gdp('init', xxxx);
```

### 配置

集成性能采集插件时，默认开启 `首屏加载监控`、`错误监控` 和 `请求监控` 。如您不需要其中某项监控内容，在注册插件时可添加配置项选择指定内容关闭。

#### 关闭首屏加载监控

```js
gdp('registerPlugins', [
  {
    ...gioPerformance,
    options: { monitor: false }
  }
]);
```

#### 关闭错误监控

```js
gdp('registerPlugins', [
  {
    ...gioPerformance,
    options: { exception: false }
  }
]);
```

#### 关闭请求监控

```js
gdp('registerPlugins', [
  {
    ...gioPerformance,
    options: { network: false }
  }
]);
```

#### 设置请求监控排除名单

在实际的请求监控当中，可能会需要排除某些域名或接口的请求监控，这时只需要在`network`配置项中添加`exclude`字段，`exclude`值可以是一个域名字符串、一个正则表达式，或者是一个域名字符串和正则表达式组成的数组。

注意，一旦您配置了此项，则认为您开启请求监控。

```js
gdp('registerPlugins', [
  {
    ...gioPerformance,
    options: {
      network: {
        exclude: 'myhost.com'
        // 或 exclude: /myhost.com/gi
        // 或 exclude: ['myhost.com', /myhost.com/gi]
      }
    }
  }
]);
```

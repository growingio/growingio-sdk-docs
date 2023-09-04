---
sidebar_position: 7
title: 性能监控
---

## 简介

提供页面 首屏加载监控 和 错误监控 的性能监控采集插件。

## 采集范围

### 首屏加载监控

含以下指标监控：

- 页面完整加载时长（PageLoad）；从开始页面加载到页面渲染完成的耗时
- 可交互时长（domReady）；从开始页面加载到执行完所有同步脚本和dom内容加载的耗时
- 首次内容绘制/白屏时长（FCP）；从开始页面加载到页面内容的任何部分在屏幕上完成渲染的时间
- 最大内容绘制（LCP）；从开始页面加载的时间点到可视区域内可见的最大图像或文本块完成渲染的时间
- 第一字节时间（TTFB）；从开始页面加载到接收到服务端返回的第一个字节的时间（包含Redirect、Cache、DNS、TCP、Request的时长总和）

### 错误监控

含以下错误类型监控：

- JS执行错误
- 资源加载错误
- Promise执行错误
- 网络请求错误

<!-- ### 3、网络请求监控

含以下内容监控：

- 请求地址
- 请求时长
- 请求错误码 -->

## 浏览器兼容性

### 首屏加载监控

- 页面完整加载时长（PageLoad）：同采集SDK
- 可交互时长（domReady）：同采集SDK
- 首次内容绘制/白屏时长（FCP）：Chrome >=51, Edge >= 15, Firefox >= 54, Safari >=14.1
- 最大内容绘制（LCP）：Chrome >=51, Edge >= 15
- 第一字节时间（TTFB）：Chrome >=51, Edge >= 15, Firefox >= 54, Safari >=8, Internet Explorer 11

### 错误监控

同采集SDK。[参考文档](/docs/webjs)

## 使用

:::caution
如想试用性能分析功能，请与您的客户成功经理或销售人员取得联系。
:::

<!-- ### 关闭请求监控
## 集成

此插件为独立插件，即使您集成了全量版本SDK，需要此功能时，依然需要单独集成或注册此插件。

### CDN集成引入

```html
<script type="text/javascript">
  !(function (e, n, t, i, r) {
    (e[r] =
      e[r] ||
      function () {
        (e[r].q = e[r].q || []).push(arguments);
      }),
      (e[r].ef =
        e[r].ef ||
        function () {
          c = arguments[0];
          (c.eventTime = +Date.now()), (e[r].e = e[r].e || []).push(c);
        }),
      e.addEventListener('error', e[r].ef, !0),
      e.addEventListener('unhandledrejection', e[r].ef, !0),
      (t = n.createElement('script'));
    s = n.getElementsByTagName('script')[0];
    (t.async = !0),
      (t.src = i),
      s.parentNode.insertBefore(t, s),
      e[r]('registerPlugins', [e.gioPerformance]);
  })(
    window,
    document,
    'script',
    'https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioPerformance.js',
    'gdp'
  );
</script>
```

提示：性能监控的集成代码应尽可能放在 `head` 标签内的最前面，且必须同时集成数据采集SDK。

### npm集成引入

### 1、引入

```js
import gioPerformance from "gio-webjs-sdk-cdp/plugins/gioPerformance"
```

### 2、注册

#### 普通工程化Web站点

```js
gdp('registerPlugins', [gioPerformance]);
gdp('init', xxxx);
```

#### Vue2

```js
// main.js
import Vue from 'vue';
import gdp from 'gio-webjs-sdk-cdp';
import gioPerformance from 'gio-webjs-sdk-cdp/plugins/gioPerformance';

import App from './App.vue';

// 注册Gio插件并初始化SDK
gdp('registerPlugins', [gioPerformance]);
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
// 注册vue插件
Vue.use(gioPerformance.GioVue);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
```

#### Vue3

```js
// main.js
import { createApp } from 'vue';
import gdp from 'gio-webjs-sdk-cdp';
import gioPerformance from 'gio-webjs-sdk-cdp/plugins/gioPerformance';

import App from './App.vue';

// 注册Gio插件并初始化SDK
gdp('registerPlugins', [gioPerformance]);
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});

const app = createApp(App);
// 注册vue插件
app.use(gioPerformance.GioVue);

app.mount('#app');
```

#### React(>=16)

React Error Boundaries [官方参考文档](https://zh-hans.reactjs.org/docs/error-boundaries.html)

```js
// ErrorBoundary.js
import React from 'react';
import gioPerformance from 'gio-webjs-sdk-cdp/plugins/gioPerformance';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示报错后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 在componentDidCatch中调用gioPerformance提供的gioReactErrorReport方法上报错误
    gioPerformance.gioReactErrorReport(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义报错后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import gdp from 'gio-webjs-sdk-cdp';
import gioPerformance from 'gio-webjs-sdk-cdp/plugins/gioPerformance';

import App from './App';
import ErrorBoundary from './ErrorBoundary';

// 注册Gio插件并初始化SDK
gdp('registerPlugins', [gioPerformance]);
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

## 配置

集成性能采集插件时，默认开启 `首屏加载监控` 和 `错误监控` 。如您不需要其中某项监控内容，在初始化配置项选择指定内容关闭。

### 关闭首屏加载监控

```js
gdp('init', 'your accountId', 'your dataSourceId', {
    ...other settings
    performance: { monitor: false }
  }
);
```

### 关闭错误监控

```js
gdp('init', 'your accountId', 'your dataSourceId', {
    ...other settings
    performance: { exception: false }
  }
);
```

```js
gdp('init', 'your accountId', 'your dataSourceId', {
    ...other settings
    performance: { network: false }
  }
);
```

### 设置请求监控排除名单

在实际的请求监控当中，可能会需要排除某些域名或接口的请求监控，这时只需要在`network`配置项中添加`exclude`字段，`exclude`值可以是一个域名字符串、一个正则表达式，或者是一个域名字符串和正则表达式组成的数组。

注意，一旦您配置了此项，则认为您开启请求监控。

```js
gdp('init', 'your accountId', 'your dataSourceId', {
    ...other settings
    performance: {
      network: {
        exclude: 'myhost.com'
        // 或 exclude: /myhost.com/gi
        // 或 exclude: ['myhost.com', /myhost.com/gi]
      }
    }
  }
);
```

## 注意

1、如果您对请求监控设置了排除名单，使用纯字符串校验时应尽可能使用长且准确的字符，过短的字符串可能会使得其他请求被误过滤。

2、请求监控强制过滤了Gio上报的请求。 -->

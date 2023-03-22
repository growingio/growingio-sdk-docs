---
sidebar_position: 5
title: 性能监控
---

## 简介

提供小程序 小程序启动/页面加载监控 和 错误监控 的性能监控采集插件。

## 采集范围

### 1、小程序启动/页面加载监控

含以下指标监控：

- 小程序冷启动耗时（首次加载小程序）；小程序从开始加载至 AppOnLaunch 结束的耗时
- 小程序热启动耗时（后台拉起小程序）；小程序从 AppOnShow 开始至 PageOnShow 结束的耗时
- 页面完整加载时长（PageLoad）；页面从 AppOnLaunch 开始或跳转开始到渲染完成 PageOnReady 结束的耗时
- 页面首次内容绘制/白屏时长（FCP）；页面从 AppOnLaunch 开始或跳转开始(navigationStart)到开始渲染页面内容时的耗时
- 页面最大内容绘制（LCP）；页面从 AppOnLaunch 开始或跳转开始(navigationStart)到开始渲染页面最大内容时的耗时

### 2、错误监控

含以下错误类型监控：

- JS 执行错误
- Promise 执行错误
- 页面跳转异常错误
- 网络请求错误

<!-- ### 3、网络请求监控

含以下内容监控：

- 请求地址
- 请求时长
- 请求错误码 -->

## 小程序兼容性

当前仅支持 `微信小程序`。

## 使用

:::caution
如想试用性能分析功能，请与您的客户成功经理或销售人员取得联系。
:::

<!--
## 集成

### 1、引入

#### 下载集成引入

- 下载插件包并复制至项目中：
**<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.14/plugins.zip></font>**<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioPerformance from "./utils/plugins/gioPerformance"
```

#### npm集成引入

```js
import gioPerformance from "gio-webjs-sdk-cdp/plugins/gioPerformance"
```

### 2、注册

```js
gdp('registerPlugins', [gioPerformance]);
gdp('init', xxxx);
```

## 配置

集成性能采集插件时，默认开启 `小程序启动/页面加载监控` 和 `错误监控`。如您不需要其中某项监控内容，在初始化配置项选择指定内容关闭。

### 关闭小程序启动/页面加载监控

```js
gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
    ...other settings
    performance: { monitor: false }
  }
);
```

### 关闭错误监控

```js
gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
    ...other settings
    performance: { exception: false }
  }
);
```

 ### 关闭请求监控

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

1、页面加载监控并非每次进入页面都会发送，而是首次进入页面或页面销毁后的重新加载页面才会产生对应的页面性能数据。

2、页面 FCP 和 LCP 的指标是根据微信提供的能力获取，可能会存在无值或时长比页面加载时长略大的情况。

3、如果您对请求监控设置了排除名单，使用纯字符串校验时应尽可能使用长且准确的字符，过短的字符串可能会使得其他请求被误过滤。

4、请求监控强制过滤了Gio上报的请求。 -->

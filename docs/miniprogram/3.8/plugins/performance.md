---
sidebar_position: 5
title: 性能监控
---

### 简介

提供小程序启动/页面加载监控、错误监控和网络请求监控的全方位性能监控采集插件。

### 采集范围

#### 1、启动/页面加载监控

含以下指标监控：

- 小程序启动耗时（冷启动耗时）；小程序从开始加载至AppOnLaunch的耗时
- 页面完整加载时长（PageLoad）；页面从AppOnLaunch开始或跳转开始到渲染完成PageOnReady的耗时

#### 2、错误监控

含以下错误类型监控：

- JS执行错误
- Promise执行错误
- 页面跳转异常错误
- 网络请求错误

#### 3、网络请求监控

含以下内容监控：

- 请求地址
- 请求时长
- 请求错误码

### 小程序兼容性

仅支持 `微信小程序` 和 `字节小程序`。

### 集成

#### 1、引入

**下载集成引入**

- 下载插件包并复制至项目中：
**<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.9/plugins.zip></font>**<br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioPerformance from "./utils/plugins/gioPerformance"
```

**npm集成引入**

```js
import gioPerformance from "gio-webjs-sdk-cdp/plugins/gioPerformance"
```

#### 2、注册

```js
gdp('registerPlugins', [gioPerformance]);
gdp('init', xxxx);
```

### 配置

集成性能采集插件时，默认开启 `启动/页面加载监控`、`错误监控` 和 `请求监控` 。如您不需要其中某项监控内容，在注册插件时可添加配置项选择指定内容关闭。

#### 关闭启动/页面加载监控

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

### 注意

1、如果您对请求监控设置了排除名单，使用纯字符串校验时应尽可能使用长且准确的字符，过短的字符串可能会使得其他请求被误过滤。

2、请求监控强制过滤了Gio上报的请求。

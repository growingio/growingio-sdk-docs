---
title: 集成
sidebar_position: 1
---

### 集成准备

#### 获取SDK初始化必传参数：AccountID、DataSourceID、Host

:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
Host：采集数据上报的服务器地址，非平台地址<br/>

AccountID、DataSourceID 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建

<ImageLoader path="version-3.x/img/common/createapplication" />

##### 查看

<ImageLoader path="version-3.x/img/common/showwebdatasourceid" />

### Web使用集成

请将以下的页面代码放置到需要分析的页面中的`<head> 和 </head>`标签之间，即可完成最新 Web JS SDK 页面代码的添加。

```html
<script type='text/javascript'>
  (function(window, document, script, src, namespace) {
    window[namespace] = window[namespace] || function() {
      (window[namespace].q = window[namespace].q || []).push(arguments)
    };
    script = document.createElement('script');
    tag = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = src;
    tag.parentNode.insertBefore(script, tag);
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/cdp/gio.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
</script>
```

**请注意：我们不建议您在`init`和`send`方法之间做设置用户信息的操作，可能会漏发用户访问上报导致访问数据不准确。**

### APP内嵌H5页面使用集成

集成方式和web使用集成一致；Web JS SDK会自动判断桥的情况进行数据的转发。

### 小程序内嵌页使用集成

小程序内嵌页集成方式和 Web 页面使用集成添加的跟踪代码一致；
若需要与小程序数据进行用户打通时，需要在SDK初始化时在`init`方法中传入主体小程序的 `accountId`，`AppId` ，SDK会自动处理小程序数据。

```js
  gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
```

### 其他

默认情况下，WebJS SDK不支持在本地协议中集成，若您期望在`127.0.0.1`、`localhost`、`file`中调试使用SDK，或者在`Electron`项目中集成，请在初始化 `init` 语句前添加以下代码：

```js
window._gr_ignore_local_rule = true;
```

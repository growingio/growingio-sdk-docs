---
sidebar_position: 1
title: 如何集成
---

Web JS SDK3.0 将H5内嵌页，Hybrid SDK，Web JS SDK集成与一体，具备以下特性：
* 埋点能力，开发同学调用API主动采集自定义事件
* 无埋点能力，自动采集用户行为事件，可通过开关控制
* 小程序打通，方便于小程序打通访问用户
* 原生打通，方便于原生App打通访问用户
* Web可视化圈选支持
* Hybrid可视化圈选支持

Web JS SDK 代码尚未开源，后续会开源

## Web JS SDK集成

### Web使用集成
请将以下的页面代码放置到需要分析的页面中的`<head> 和 </head>`标签之间，即可完成最新 Web JS SDK 页面代码的添加。
:::info
请注意使用具体的项目ID替换代码中的 your accountId、your DataSourceId 确保JS资源地址正确。

JS资源地址：https://assets.giocdn.com/sdk/cdp/gio.js
:::

```html
<script type='text/javascript'>
  (function(window, document, script, src, namespace) {
    window[namespace] = window[namespace] || function() {
      (window[namespace].q = window[namespace].q || []).push(arguments)
    };
    script = document.createElement('script');
    let tag = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = src;
    tag.parentNode.insertBefore(script, tag);
  })(window, document, 'script', 'JS 资源地址', 'gdp');

  // Config GrowingIO
  // 参数需要从CDP网站上，创建新应用，或从已知应用中获取, 如不清楚请联系您的专属项目经理
  // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
  // YourServerHost eg: api.growingio.com 仅需填写对应host
  // YourDatasourceId eg: 11223344aabbcc
  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
</script>
```

### APP 内嵌H5页面使用集

集成方式和web使用集成一致；Web JS SDK会自动判断桥的情况进行数据的转发，详见[Hybrid打通插件](/docs/webjs/plugins#6-hybrid打通插件)。

### 小程序内嵌页使用集成
小程序内嵌页集成方式和 Web 页面使用集成添加的跟踪代码一致；
如果有和小程序数据进行用户打通的需求，这时就需要在SDK初始化时填写您小程序的 accountId，AppId 来作为打通的判断，详见[小程序内嵌页打通插件](/docs/webjs/plugins#7-小程序内嵌页打通插件)。
```html
<script type='text/javascript'>
  (function(window, document, script, src, namespace) {
    window[namespace] = window[namespace] || function() {
      (window[namespace].q = window[namespace].q || []).push(arguments)
    };
    script = document.createElement('script');
    let tag = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = src;
    tag.parentNode.insertBefore(script, tag);
  })(window, document, 'script', 'JS 资源地址', 'gdp');
  // Config GrowingIO
  // 参数需要从CDP网站上，创建新应用，或从已知应用中获取, 如不清楚请联系您的专属项目经理
  // YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
  // YourServerHost eg: api.growingio.com 仅需填写对应host
  // YourDatasourceId eg: 11223344aabbcc
  // YourAppId 小程序的APPID eg: wx678908r0r8rfgnvf

  gdp('init', 'your accountId', 'your dataSourceId', 'your AppId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
</script>
```


### 常见的初始化失败情况

1. 初始化时需设置 host、accountId、datasourceId，否则初始化失败。
2. 不支持file协议（3.2.0版本起支持）、localhost、127.0.0.1




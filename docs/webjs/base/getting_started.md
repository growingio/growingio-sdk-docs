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

Web JS SDK代码已托管在[Github](https://github.com/growingio/growingio-sdk-web-autotracker)

## Web JS SDK集成
请将以下的页面代码放置到需要分析的页面中的`<head> 和 </head>`标签之间，即可完成最新 Web JS SDK 页面代码的添加。

> 请注意使用具体的项目ID替换代码中的 your projectId、your DataSourceId 确保JS资源地址正确。
>
> JS文件地址：https://assets.giocdn.com/sdk/cdp/gio.js

### Web使用集成

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
  // YourProjectId eg: 0a1b4118dd954ec3bcc69da5138bdb96
  // YourServerHost eg: api.growingio.com 仅需填写对应host
  // YourDatasourceId eg: 11223344aabbcc
  gdp('init', 'your projectId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
</script>
```

### Hybrid使用集成

集成方式和web使用集成一致，会自动判断桥的情况进行数据的转发，详见[Hybrid打通插件](/docs/webjs/plugins#6、hybrid打通插件)。

### 小程序内嵌页使用集成

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

  gdp('init', 'your projectId', 'your dataSourceId', 'your AppId', {
    host: 'your apiServerHost',
    version: '1.0.0'
  });
  gdp('send');
</script>
```

在小程序内嵌页集成中，可能需要和小程序数据进行用户的打通，这时就需要填写您小程序的AppId来作为打通的判断，详见[小程序内嵌页打通插件](/docs/webjs/plugins#7、小程序内嵌页打通插件)。

### 常见的初始化失败情况

1. 初始化时需设置 host、projectId、datasourceId，否则初始化失败。
2. 不支持file协议（3.2.0版本起支持）、localhost、127.0.0.1




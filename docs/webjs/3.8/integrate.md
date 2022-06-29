---
title: 集成
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 准备工作

1、在 GrowingIO 平台中新建数据源并获取**`accountId`和`dataSourceId`**。

2、在下列选项中选择对应的集成方式，并根据示例进行集成。

### 在Web站点 / App内嵌页中集成

<Tabs
  groupId="1"
  defaultValue="CDN"
  values={[
    {label: 'CDN 集成', value: 'CDN'},
    {label: 'npm 集成', value: 'npm'},
  ]
}>
  <TabItem value="CDN">

**从 CDN（内容分发网络）加载 Gio WebJS SDK，及时获取最新的更新。**

复制以下脚本，并将其粘贴到 `<head>` 标签的底部，并修改`init`方法中对应字段：

```html
<!-- GrowingIO Analytics WebJS SDK version 3.8 -->
<!-- Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com -->
<script type="text/javascript">
  !(function (e, n, t, c, i) {
    (e[i] =
      e[i] ||
      function () {
        (e[i].q = e[i].q || []).push(arguments);
      }),
      (t = n.createElement('script'));
    let s = n.getElementsByTagName('script')[0];
    (t.async = 1), (t.src = c), s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/web/cdp/latest/gio-cdp.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

如果您希望不受CDN（内容分发网络）影响或期望使用指定版本SDK，请下载SDK至本地，并修改上述代码中的SDK CDN地址为您本地的相对地址。

WebJS SDK下载：<https://assets.giocdn.com/sdk/minip/cdp/3.8.0/plugins.zip><br/>
**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

  </TabItem>
  <TabItem value="npm">

**如果您使用 npm 以及 webpack 或 Vite、Rollup 一类的打包工具，请选择此选项来添加和使用 Gio WebJS SDK。**

**默认仅包含埋点和基础功能，精简可自定义插拔插件。**

首先运行以下命令来安装最新的SDK：

```bash
npm i gio-webjs-sdk-cdp --save
```

然后，在代码中来初始化并开始使用SDK。

```js
import gdp from 'gio-webjs-sdk-cdp';

/**
 * GrowingIO Analytics WebJS SDK version 3.8
 * Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});

```

**<font color="#FC5F3A">注意：</font>**初始化代码应尽可能书写在整个js代码执行的最前面。

  </TabItem>
</Tabs>

### 在微信公众号H5/小程序内嵌页中集成

复制以下脚本，并将其粘贴到 `<head>` 标签的底部，并修改`init`方法中对应字段：

```html
<!-- GrowingIO Analytics WebJS SDK version 3.8 -->
<!-- Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com -->
<script type='text/javascript'>
  !(function (e, n, t, c, i) {
    ...... // 此处省略部分集成代码，注意补全
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/web/cdp/latest/gio-cdp.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', 'your appId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

在微信公众号H5/小程序内嵌页中集成 WebJS SDK与Web站点集成基本一致，只是在初始化时添加了`appId`的初始化配置。

**若填写的`accountId`和`appId`与主体小程序的一致，则视为与小程序打通信息，SDK会自动处理。**

打通时，WebJS SDK会自动继承由主体小程序`getGioInfo`中的用户信息字段。可支持的字段详情见[小程序与h5打通数据](/docs/miniprogram/3.8/commonlyApi#8与h5打通用户数据getgioinfo)。

### 扩展插件

如果您想在原有SDK功能（默认仅有埋点功能）上添加额外的功能，可使用插件并按需进行扩展。

插件文件说明参考文档[插件](/docs/webjs/3.8/plugins)。

<Tabs
  groupId="1"
  defaultValue="CDN"
  values={[
    {label: 'CDN 集成', value: 'CDN'},
    {label: 'npm 集成', value: 'npm'},
  ]
}>
  <TabItem value="CDN">

#### 1、引入插件

在[插件列表](/docs/webjs/3.8/plugins)中选择插件并在 `<head>` 标签中粘贴引用代码，注意放在SDK初始化的`<script>`前。

#### 2、调用`registerPlugins`方法注册插件

在init语句前调用`registerPlugins`方法按数组形式传值。

##### 示例代码

```html
<!--  GrowingIO Analytics WebJS SDK 3.8 Plugins -->
<script src="https://assets.giocdn.com/sdk/web/cdp/latest/plugins/gioEventAutoTracking.js"></script>
<script src="https://assets.giocdn.com/sdk/web/cdp/latest/plugins/gioImpressionTracking.js"></script>
<!-- GrowingIO Analytics WebJS SDK version 3.8 -->
<script type='text/javascript'>
  !(function (e, n, t, c, i) {
    ...... // 此处省略部分集成代码，注意补全
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/web/cdp/latest/gio-cdp.js', 'gdp');

  // 在init语句前调用`registerPlugins`方法按数组形式传值。
  gdp('registerPlugins', [gioEventAutoTracking, gioImpressionTracking]);
  gdp('init', xxxxx);
</script>
```

  </TabItem>
  <TabItem value="npm">

#### 1、引入插件

在[插件列表](/docs/webjs/3.8/plugins)中选择插件并从npm包中`plugins`目录引入。

#### 2、调用`registerPlugins`方法注册插件

在init语句前调用`registerPlugins`方法按数组形式传值。

##### 示例代码

```js
import gioEventAutoTracking from 'gio-webjs-sdk-cdp/plugins/gioEventAutoTracking';
import gioImpressionTracking from 'gio-webjs-sdk-cdp/plugins/gioImpressionTracking';

gdp('registerPlugins', [gioEventAutoTracking, gioImpressionTracking]);
gdp('init', xxxx);

```

  </TabItem>
</Tabs>

---
title: 集成
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 准备工作

1、在 GrowingIO 平台中新建数据源并获取**`accountId`和`dataSourceId`**。

2、在下列选项中选择对应的集成方式，并根据示例进行集成。

### 开始集成

我们为您提供了 CDN 和 npm 两种不同的集成方式，请根据实际业务场景和需要选择集成方式。<br/>
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

<Tabs
  groupId="2"
  defaultValue="全量引入"
  values={[
    {label: '全量引入', value: '全量引入'},
    {label: '按需引入', value: '按需引入'},
  ]
}>
  <TabItem value="全量引入">

全量引入集成，SDK将包含所有插件，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：冗余内容多，SDK较大，约 68KB ，可能会拖慢加载速度。

#### 开始集成

复制以下脚本，并将其粘贴到 `<head></head>` 标签的底部，并修改`init`方法中对应字段：

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
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/webjs/cdp/gdp-full.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

**<font color="##20d5ef">提示：</font>**<br/>
SDK默认使用`es6`版本进行打包，若您的站点需要支持**IE11**等不兼容es6的浏览器，请修改为`gdp-full-es5.js`即可引用es5版本的SDK。

  </TabItem>
  <TabItem value="按需引入">

按需引入集成，基础SDK只包含埋点功能，其他功能需要注册插件。如需其他功能，请参考[插件文档](/docs/webjs/3.8/plugins)。

- 优点：无冗余内容，SDK较小，约 34KB ，加载速度快。
- 缺点：复杂度略高，理解成本略高，集成稍复杂。

#### 开始集成

**1、集成基础SDK**

复制以下脚本，并将其粘贴到 `<head></head>` 标签的底部，并修改`init`方法中对应字段：

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
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/webjs/cdp/gdp.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

**<font color="##20d5ef">提示：</font>基础SDK仅包含埋点功能，如果已满足您的需求，则集成步骤结束；如需扩展其他功能，请继续以下集成插件的步骤。**

**2、集成插件**

1）引入插件

在[插件列表](/docs/webjs/3.8/plugins)中选择插件并在跟踪代码前粘贴引用代码。

2）调用`registerPlugins`方法注册插件

在init语句前调用`registerPlugins`方法按数组形式传值。

##### 示例代码

```html
<!-- GrowingIO Analytics WebJS SDK Plugins -->
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioEventAutoTracking.js"></script>
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioWebCircle.js"></script>
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioImpressionTracking.js"></script>
<!-- GrowingIO Analytics WebJS SDK version 3.8 -->
<!-- Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com -->
<script type='text/javascript'>
  !(function (e, n, t, c, i) {
    ...... // 此处省略部分集成代码，注意按步骤1补全
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/webjs/cdp/gdp.js', 'gdp');

  // 在init语句前调用`registerPlugins`方法按数组形式传值。
  gdp('registerPlugins', [gioEventAutoTracking, gioWebCircle, gioImpressionTracking]);
  gdp('init', xxxxx);
</script>
```

  </TabItem>
</Tabs>

#### 其他

如果您希望不受CDN（内容分发网络）影响，请下载SDK至本地集成，并修改上述集成代码中的SDK CDN地址为您本地的相对地址。

WebJS SDK 下载：<https://github.com/growingio/growingio-sdk-webjs-autotracker/releases>

**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

  </TabItem>
  <TabItem value="npm">

**如果您使用 npm 以及 webpack 或 Vite、Rollup 一类的打包工具，请选择此选项来添加和使用 Gio WebJS SDK。**

<Tabs
  groupId="3"
  defaultValue="全量引入"
  values={[
    {label: '全量引入', value: '全量引入'},
    {label: '按需引入', value: '按需引入'},
  ]
}>
  <TabItem value="全量引入">

全量引入集成，SDK将包含所有插件，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：SDK较大，约 68KB ，会增加打包产物的大小。

**1、运行命令安装最新的SDK**

```bash
npm i gio-webjs-sdk-cdp --save
```

**2、在代码中初始化并开始使用SDK**

```js
import gdp from 'gio-webjs-sdk-cdp/gdp-full';

/**
 * GrowingIO Analytics WebJS SDK version 3.8
 * Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
```

  </TabItem>
    <TabItem value="按需引入">

按需引入集成，基础SDK只包含埋点功能，其他功能需要注册插件。如需其他功能，请参考插件说明文档[插件](/docs/webjs/3.8/plugins)。

- 优点：SDK较小，约 34KB ，加载速度快，有效控制打包产物大小。
- 缺点：复杂度略高，理解成本略高，集成稍复杂。

**1、运行命令安装最新的SDK**

```bash
npm i gio-webjs-sdk-cdp --save
```

**2、在代码中初始化并开始使用SDK**

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

**<font color="##20d5ef">提示：</font>基础SDK仅包含埋点功能，如果已满足您的需求，则集成步骤结束；如需扩展其他功能，请继续以下集成插件的步骤。**

**3、集成插件**

1）引入插件

在[插件列表](/docs/webjs/3.8/plugins)中选择插件并在文件头部前粘贴引用代码。

2）调用`registerPlugins`方法注册插件

在init语句前调用`registerPlugins`方法按数组形式传值。

##### 示例代码

```js
import gdp from 'gio-webjs-sdk-cdp';
import gioEventAutoTracking from 'gio-webjs-sdk-cdp/plugins/gioEventAutoTracking';
import gioWebCircle from 'gio-webjs-sdk-cdp/plugins/gioWebCircle';
import gioImpressionTracking from 'gio-webjs-sdk-cdp/plugins/gioImpressionTracking';

/**
 * GrowingIO Analytics WebJS SDK version 3.8
 * Copyright 2015-2022 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('registerPlugins', [gioEventAutoTracking, gioWebCircle, gioImpressionTracking]);
gdp('init', 'your accountId', 'your dataSourceId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
```

  </TabItem>
</Tabs>

**<font color="#FC5F3A">注意：</font>**<br/>
**1）**使用 npm 集成的初始化代码应尽可能书写在所有js代码执行的最前面。<br/>
**2）**使用 npm 集成的SDK默认使用 **es6** 语法，如果您有兼容IE11等只支持es5语法浏览器的需求，请选择es5版本的SDK集成（'gdp-es5 或 gdp-full-es5'）或者在您的打包工具中直接进行相应的语法转换配置。
  </TabItem>
</Tabs>

### 在APP内嵌H5页面中集成

在APP内嵌H5页面中集成与Web站点集成基本一致，Web JS SDK会自动判断桥的情况进行数据的转发。

### 在微信公众号H5/小程序内嵌页中集成

在微信公众号H5/小程序内嵌页中集成与Web站点集成基本一致，参考CDN/npm的集成方式进行集成。

若需要与小程序数据进行用户打通时，在`init`方法中传入主体小程序的`accountId`和`appId`字段，SDK会自动处理小程序数据。

```js
gdp('init', 'your accountId', 'your dataSourceId', 'your appId', {
  host: 'your apiServerHost',
  version: 'your website version'
});
```

**<font color="#FC5F3A">注意：</font>**<br/>
**1）**如需与小程序打通用户信息，**请确保您的SDK为全量集成或已按需注册了`小程序内嵌页打通插件（gioEmbeddedAdapter）`**。<br/>
**2）**打通时，WebJS SDK会自动继承由主体小程序`getGioInfo`中的用户信息字段。可支持的字段详情见[小程序与h5打通数据](/docs/miniprogram/3.8/commonlyApi#8与h5打通用户数据getgioinfo)。

### 其他

默认情况下，WebJS SDK不支持在本地协议中集成，若您期望在`127.0.0.1`、`localhost`、`file`中调试使用SDK，或者在`Electron`项目中集成，请在初始化 `init` 语句前添加以下代码：

```js
window._gr_ignore_local_rule = true;
```

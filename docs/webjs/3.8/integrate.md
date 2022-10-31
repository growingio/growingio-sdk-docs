---
title: 集成
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 准备工作

1、在 GrowingIO 平台中新建数据源并获取**`accountId`和`dataSourceId`**。

2、在下列选项中选择对应的集成方式，并根据示例进行集成。

## 开始集成（Web站点/H5）

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
    {label: '按需引入', value: '按需引入'},
    {label: '全量引入', value: '全量引入'},
  ]
}>
  <TabItem value="按需引入">

按需引入集成，基础SDK只包含埋点功能，其他功能需要集成插件，小巧功能简单。

- 优点：无冗余内容，SDK较小，约 38-40KB ，加载速度快。
- 缺点：理解成本略高，集成稍复杂。

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
    s = n.getElementsByTagName('script')[0];
    (t.async = 1), (t.src = c), s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/webjs/cdp/gdp.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

  </TabItem>
  <TabItem value="全量引入">

全量引入集成，SDK将包含 **除性能监控之外** 的其他所有插件，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：SDK较大，约 75-80KB ，可能会拖慢加载速度。

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
    s = n.getElementsByTagName('script')[0];
    (t.async = 1), (t.src = c), s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://assets.giocdn.com/sdk/webjs/cdp/gdp-full.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    host: 'your apiServerHost',
    version: 'your website version'
  });
</script>
```

  </TabItem>
</Tabs>

#### 其他

**1）**`init`初始化方法其他配置项请见[参考文档](/docs/webjs/3.8/initSettings)。

**2）**SDK默认使用`es6`版本进行打包，若您的站点需要支持 **IE11** 等不兼容es6的旧版浏览器，请修改为`gdp-es5.js`或`gdp-full-es5.js`即可引用es5版本的SDK。

**3）**SDK默认使用`umd`格式进行打包，若您的站点需要使用`es`格式的SDK，请修改为`gdp.es.js`或`gdp-full.es.js`即可引用es格式的SDK。

**4）**如果您希望不受CDN（内容分发网络）影响，请下载SDK至本地集成，并修改上述集成代码中的SDK CDN地址为您本地的相对地址。

WebJS SDK 下载：<https://github.com/growingio/growingio-sdk-webjs-autotracker/releases>

**<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

  </TabItem>
  <TabItem value="npm">

**如果您使用 npm 以及 webpack 或 Vite、Rollup 一类的打包工具，请选择此选项来添加和使用 Gio WebJS SDK。**

<Tabs
  groupId="3"
  defaultValue="全量引入"
  values={[
    {label: '按需引入', value: '按需引入'},
    {label: '全量引入', value: '全量引入'},
  ]
}>
  <TabItem value="按需引入">

按需引入集成，基础SDK只包含埋点功能，其他功能需要注册插件，小巧功能简单。

- 优点：SDK较小，约 38-40KB ，加载速度快，有效控制打包产物大小。
- 缺点：理解成本略高，集成稍复杂。

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

  </TabItem>
  <TabItem value="全量引入">

全量引入集成，SDK将包含 **除性能监控之外** 的其他所有插件，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：SDK较大，约 75-80KB ，会增加打包产物的大小，可能会拖慢加载速度。

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
</Tabs>

#### 其他

**1）**`init`初始化方法其他配置项请见[参考文档](/docs/webjs/3.8/initSettings)。

**2）**初始化代码应尽可能书写在入口文件的所有js代码执行的最前面（例如：app.js、index.js）。

**3）**SDK默认使用 **es6** 语法，如果您有兼容IE11等只支持es5语法浏览器的需求，请选择es5版本的SDK集成（'gdp-es5 或 gdp-full-es5'）或者在您的打包工具中直接进行相应的语法转换配置。

**4）**SDK默认使用`umd`格式进行打包，若您的站点需要使用`es`格式的SDK，请修改为`gdp.es.js`或`gdp-full.es.js`即可引用es格式的SDK。
  </TabItem>
</Tabs>

## 插件扩展

全量集成SDK时，我们已经将 **除性能监控之外** 的其他所有插件内置打包，如您需要使用性能监控请集成并注册插件。

按需集成SDK时，SDK仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[插件](/docs/webjs/3.8/plugins)。

## 在APP内嵌页面中集成

全量集成SDK时，参考Web站点集成即可，无需做额外操作，已内置App内嵌页打通功能。

按需集成SDK时，需在Web站点集成的基础之上，注册添加App内嵌页打通插件。[参考文档](/docs/webjs/3.8/plugins/hybridAdapter)

## 在小程序内嵌页面中集成

全量集成SDK时，需在Web站点集成的基础之上，修改初始化配置即可，无需再次集成插件，已内置小程序内嵌页打通功能。[参考文档](/docs/webjs/3.8/plugins/embeddedAdapter)

按需集成SDK时，需在Web站点集成的基础之上，注册添加小程序内嵌页打通插件并修改初始化配置。[参考文档](/docs/webjs/3.8/plugins/embeddedAdapter)

## 在微信公众号H5中集成

与Web站点集成方法一致。

## 其他

默认情况下，WebJS SDK不支持在本地协议中集成，若您期望在`127.0.0.1`、`localhost`、`file`中调试使用SDK，或者在`Electron`项目中集成，请在初始化 `init` 语句前添加以下代码：

```js
window._gr_ignore_local_rule = true;
```

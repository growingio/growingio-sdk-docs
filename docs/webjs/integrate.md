---
title: 如何集成
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

当用户加载页面的时候，会异步加载 WebJS SDK，不会影响到用户的加载速度，所以一般建议把这段代码加入到 `<head></head>` 中的最下面，这样能最大限度的保证数据采集的完整性。如果有限制只能加入到 `<body></body>` 的最下面，也是可以的，但这样潜在可能会丢失掉那些一加载页面就立刻关闭的数据。

## 准备工作

1、在 GrowingIO 平台中新建数据源并获取**`accountId`和`dataSourceId`**。

2、在下列选项中选择对应的集成方式，并根据示例进行集成。

## Web 站点 / H5 中集成

<!-- ### 使用工具集成（推荐） -->

<!-- 使用 WebJS GioKit 的快速初始化功能，可视化填写必要字段并选择需要的功能，即可一键为您自动生成合适您业务需求的初始化代码。省去不必要的理解成本和开发时间。

[使用 GioKit 参考文档](/docs/giokit/web) -->

### 手动集成

我们为您提供了 CDN 和 npm 两种不同的集成方式，请根据实际业务场景和需要选择集成方式。<br/>

<Tabs
groupId="1"
defaultValue="CDN"
values={[
{label: 'CDN 集成', value: 'CDN'},
{label: 'npm 集成', value: 'npm'},
]}
>
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

按需引入集成，基础 SDK <font size="4" color="#FC5F3A"><b>只包含埋点功能</b></font>，其他功能需要集成插件，小巧功能简单。

- 优点：无冗余内容，SDK 较小，约 38-40KB ，加载速度快。
- 缺点：理解成本略高，集成稍复杂。

复制以下脚本，并将其粘贴到 `<head></head>` 标签的底部，并修改`init`方法中对应字段：

```html
<!-- GrowingIO Analytics WebJS SDK version 4 -->
<!-- Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com -->
<script type="text/javascript">
  !(function (e, n, t, s, c) {
    var o;
    e[s] =
      e[s] ||
      function () {
        (e[s].q = e[s].q || []).push(arguments);
      };
    (c = c || 'vds'),
      (e._gio_local_vds = c),
      (e[c] = null !== (o = e[c]) && void 0 !== o ? o : {}),
      (e[c].namespace = s);
    var d = n.createElement('script');
    var i = n.getElementsByTagName('script')[0];
    (d.async = !0), (d.src = t), i.parentNode.insertBefore(d, i);
  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    version: 'your website version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url',
    ...other settings
  });
</script>
```

  </TabItem>
  <TabItem value="全量引入">

全量引入集成，SDK 将<font size="4" color="#FC5F3A"><b>包含 除了多实例和性能监控之外 的其他所有功能</b></font>，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：SDK 较大，约 75-80KB ，可能会拖慢加载速度。

复制以下脚本，并将其粘贴到 `<head></head>` 标签的底部，并修改`init`方法中对应字段：

```html
<!-- GrowingIO Analytics WebJS SDK version 4 -->
<!-- Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com -->
<script type="text/javascript">
  !(function (e, n, t, s, c) {
    var o;
    e[s] =
      e[s] ||
      function () {
        (e[s].q = e[s].q || []).push(arguments);
      };
    (c = c || 'vds'),
      (e._gio_local_vds = c),
      (e[c] = null !== (o = e[c]) && void 0 !== o ? o : {}),
      (e[c].namespace = s);
    var d = n.createElement('script');
    var i = n.getElementsByTagName('script')[0];
    (d.async = !0), (d.src = t), i.parentNode.insertBefore(d, i);
  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp-full.js', 'gdp');

  gdp('init', 'your accountId', 'your dataSourceId', {
    version: 'your website version',
    // OP私有部署客户请填写serverUrl，Saas客户请忽略
    serverUrl: 'your server url',
    ...other settings
  });
</script>
```

  </TabItem>
</Tabs>

#### 其他注意事项

**1）** `init`初始化方法其他配置项请见[参考文档](/docs/webjs/initSettings)。

**2）** SDK默认使用`es5`语法版本进行打包，直接支持 **IE11** 等不兼容 es6 的旧版浏览器。

**3）** SDK默认使用`umd`格式进行打包，若您的站点需要使用`esm`格式的 SDK；或者如果您希望不受 CDN（内容分发网络）影响，请下载 SDK 至本地集成，并修改上述集成代码中的 SDK CDN 地址为您本地的相对地址。

WebJS SDK 下载：[https://github.com/growingio/growingio-sdk-webjs-autotracker/releases](https://github.com/growingio/growingio-sdk-webjs-autotracker/releases)

注意github上的SDK产物为了方便模块化开发，默认是`esm`格式，如需引用`umd`格式的SDK，请到包内名为umd的文件内查找引用。

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

按需引入集成，基础 SDK <font size="4" color="#FC5F3A"><b>只包含埋点功能</b></font>，其他功能需要注册插件，小巧功能简单。

- 优点：SDK 较小，约 38-40KB ，加载速度快，有效控制打包产物大小。
- 缺点：理解成本略高，集成稍复杂。

**1、运行命令安装最新的 SDK**

```bash
npm i gio-webjs-sdk --save
```

**2、在入口文件（例如：app.js、index.js）代码中引用并开始初始化使用 SDK**

```js
import gdp from 'gio-webjs-sdk';

/**
 * GrowingIO Analytics WebJS SDK version 4
 * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('init', 'your accountId', 'your dataSourceId', {
  version: 'your website version',
  // OP私有部署客户请填写serverUrl，Saas客户请忽略
  serverUrl: 'your server url',
  ...other settings
});
```

  </TabItem>
  <TabItem value="全量引入">

全量引入集成，SDK 将<font size="4" color="#FC5F3A"><b>包含 除了多实例和性能监控之外 的其他所有功能</b></font>，功能全覆盖，简单快速集成。

- 优点：复杂度低，理解成本低，快速集成。
- 缺点：SDK 较大，约 75-80KB ，会增加打包产物的大小，可能会拖慢加载速度。

**1、运行命令安装最新的 SDK**

```bash
npm i gio-webjs-sdk --save
```

**2、在入口文件（例如：app.js、index.js）代码中引用并开始初始化使用 SDK**

```js
import gdp from 'gio-webjs-sdk/gdp-full';

/**
 * GrowingIO Analytics WebJS SDK version 4
 * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('init', 'your accountId', 'your dataSourceId', {
  version: 'your website version',
  // OP私有部署客户请填写serverUrl，Saas客户请忽略
  serverUrl: 'your server url',
  ...other settings
});
```

  </TabItem>
</Tabs>

#### 其他注意事项

**1）** `init`初始化方法其他配置项请见[参考文档](/docs/webjs/initSettings)。

**2）** SDK **默认使用 esm** 格式进行打包，若您的站点需要使用 umd 格式的 SDK，请修改为`gio-webjs-sdk/gdp.umd.js`（`gio-webjs-sdk/gdp-full.umd.js`）即可引用 umd 格式的 SDK。

**3）** 如果您使用了 TypeScript 开发，且遇到了类似 `找不到模块"gio-webjs-sdk"或其相应的类型声明` 的错误提示时，在您全局的 d.ts 文件中添加 `declare module 'gio-webjs-sdk';` 模块定义即可。
</TabItem>
</Tabs>

## 插件扩展

全量集成 SDK 时，我们已经将 **除性能监控之外** 的其他所有插件内置打包，如您需要使用性能监控请集成并注册插件。

按需集成 SDK 时，SDK 仅内置埋点功能，如您需要扩展其他功能时，需要集成并注册对应插件方可激活对应功能使用。

各个插件的介绍和集成方式请见[功能插件](/docs/webjs/plugins)。

## 在微信公众号H5中集成

在微信公众号H5中集成时，基本与Web站点一致。但由于其微信生态的特殊性，因此需要您在初始化时额外传入 `appId` 字段。

```js
/**
 * GrowingIO Analytics WebJS SDK version 4
 * Copyright 2015-2023 GrowingIO, Inc. More info available at http://www.growingio.com
 */
gdp('init', 'your accountId', 'your dataSourceId', 'your appId', {
  version: 'your website version',
  // OP私有部署客户请填写serverUrl，Saas客户请忽略
  serverUrl: 'your server url',
  ...other settings
});
```

另外，如果您有访问用户Id需替换成 `openId/unionId` 的需求，请在初始化配置项中添加 **`forceLogin: true`**的配置项，具体使用方法，请[参考文档](/docs/webjs/initSettings#forcelogin)。

## 在 APP 内嵌页面中集成

全量集成 SDK 时，参考 Web 站点集成即可，无需做额外操作，已内置 App 内嵌页打通功能。

按需集成 SDK 时，需在 Web 站点集成的基础之上，注册添加 App 内嵌页打通插件。[参考文档](/docs/webjs/plugins/hybridAdapter)

## 在小程序内嵌页面中集成

如果期望内嵌页作为一个独立站点运行和上报数据，直接按Web/H5的方式集成即可，无需其他步骤。

如果期望内嵌页作为小程序的一部分运行和上报数据，请参考以下内容：

全量集成 SDK 时，需在 Web 站点集成的基础之上，修改初始化配置即可，无需再次集成插件，已内置小程序内嵌页打通功能。[参考文档](/docs/webjs/plugins/embeddedAdapter)

按需集成 SDK 时，需在 Web 站点集成的基础之上，注册添加小程序内嵌页打通插件并修改初始化配置。[参考文档](/docs/webjs/plugins/embeddedAdapter)

## 在Electron应用中集成和本地调试

默认情况下，WebJS SDK 不支持在本地协议中集成，若您期望在`127.0.0.1`、`localhost`、`file`中调试使用 SDK，或者在`Electron`项目中集成，请在初始化 `init` 语句前添加以下代码：

```js
window._gr_ignore_local_rule = true;
gdp('init', xxx, xxx);
```

## 数据校验

### 使用 GioKit 校验事件（推荐）

使用 WebJS GioKit 的事件调试和实时监控功能，清晰展示触发时机和上报的事件，通过查看事件内容快速检验和排查埋点问题。

独立模块避免在大量的控制台 Log 中大海捞针式地查找事件，节约时间提高效率。

自动适配移动端，摆脱 H5 页面无法使用浏览器控制台的问题。

[使用 GioKit 参考文档](/docs/giokit/web)

### 使用 debug 在 Log 中校验

可以在初始化代码时，配置`debug: true`打开 SDK 日志，在浏览器控制台中查看 Log 日志进行校验。

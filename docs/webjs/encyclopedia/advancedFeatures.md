---
sidebar_position: 3
title: 高级功能
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 采集黑名单

除了输入框内容以外，SDK 默认会采集页面所有内容。有些时候，你会有些敏感信息比如电话号码，不希望被采集到，也缺乏分析上的意义。这个时候，你可以通过设置在 DOM 节点上设置 **`data-growing-ignore`** 属性，标记为忽略采集，之后所有该节点及节点内的所有子节点，无论是浏览事件还是点击事件，都不会被采集。

如果对于特定的 DOM 节点，希望采集事件但是忽略内容，有一个黑科技的方式，设置 `data-growing-title` 属性为 " "（一个空格），这样会采集到事件，但是内容就会是一个空格。

**注意 data-growing-title 属性跟 data-growing-ignore 是完全不同的，不会向内部节点继承。**

## 采集白名单

SDK 默认不采集输入框输入内容，而只记录修改次数。你可以通过设置 **`data-growing-track`** 来强制采集输入框输入内容，比如在注册页面采集「公司名称输入框」，方便在用户细查里面查看。

温馨提示，SDK会自动忽略带有 autoplay 属性且值为 true 组件的 change 事件（例如video）。如果您期望采集它，请添加 data-growing-track 标记。

**注意，即使在密码输入框里设置了 data-growing-track，仍然不会采集输入的密码内容。**

## 自定义命名空间

默认情况下，SDK的调用方法名为 `gdp`，如果与您当前业务中的自定义方法名存在命名冲突，可以通过修改初始化代码的方式自定义SDK的方法命名。

**<font color="#FC5F3A">注意：</font>此功能仅4.0版本SDK支持。**

<Tabs
groupId="1"
defaultValue="CDN"
values={[
{label: 'CDN 集成', value: 'CDN'},
{label: 'npm 集成', value: 'npm'},
]}
>
<TabItem value="CDN">

CDN集成时，修改初始化代码传参中的第4个参数 **`'gdp'`** 为自定义方法名即可。

```js
  // !(function (e, n, t, s, c) {
  //   var o;
  //   ......
  //   var i = n.getElementsByTagName('script')[0];
  //   (d.async = !0), (d.src = t), i.parentNode.insertBefore(d, i);
  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp.js', 'gdp');
  // 此处示例将 gdp 修改为 abc ↓↓↓
  })(window, document, 'https://assets.giocdn.com/sdk/webjs/gdp.js', 'abc');
```

后续使用即可通过 `window.abc` 调用我们的方法。

```js
window.abc('init', xxxxx, xxxxx);

window.abc('track', xxxxx, xxxxx);
```

</TabItem>
<TabItem value="npm">

npm集成时，利用 es6 require 的模块化引入赋值即可。

```js
import gdp from 'gio-webjs-sdk';
// 此处示例将 gdp 修改为 abc ↓↓↓
const abc = require('gio-webjs-sdk').default;


import gdp from 'gio-webjs-sdk/gdp-full';
// 此处示例将 gdp 修改为 abc ↓↓↓
const abc = require('gio-webjs-sdk/gdp-full').default;
```

后续即可通过 `abc` 调用我们的方法。

```js
abc('init', xxxxx, xxxxx);

abc('track', xxxxx, xxxxx);
```

</TabItem>
</Tabs>

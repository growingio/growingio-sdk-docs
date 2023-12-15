---
sidebar_position: 2
title: 半自动埋点浏览
---

## 简介（gioImpressionTracking）

用户标记一个元素并提供埋点事件，SDK 负责监控指定元素，当此元素出现在屏幕可视区域中时发送用户配置的埋点事件。因此您同样需要参考[埋点事件](/docs/miniprogram/3.8/commonlyApi#6埋点事件track)在平台上进行事件类型和变量的预定义。

### 曝光逻辑

**always：**只要从**屏幕不可见区域到可见区域**即可计为一次曝光并上报。(默认值)

**once：**从**屏幕不可见区域到可见区域**曝光只上报一次。

## 兼容性

微信小程序、阿里(支付宝)小程序(基础库>=2.7.0)、百度小程序、抖音小程序、QQ 小程序、淘宝小程序、快手小程序、京东小程序。

快应用不支持。

## 集成

### 1、引入

#### 下载集成引入

- 下载插件包并复制至项目中：
  **<font size="3"><https://assets.giocdn.com/sdk/minip/cdp/3.8.19/plugins/gioImpressionTracking.js></font>**<br/>
  **<font size="2">(如果您点击链接在浏览器中直接打开了文件并不是下载文件，请尝试右键点击链接，选择 `链接存储为...` 即可正常触发下载)</font>**

- 引入插件

```js
import gioImpressionTracking from './utils/plugins/gioImpressionTracking';
```

#### npm 集成引入

```js
import gioImpressionTracking from 'gio-webjs-sdk-cdp/plugins/gioImpressionTracking';
```

### 2、注册

```js
gdp('registerPlugins', [gioImpressionTracking]);
gdp('init', xxxx);
```

## 使用方法

**1、**在需要标记的元素上添加 **`growing_collect_imp`** 样式名。

**2、**在节点上添加 `data-gio-imp-track`、`data-gio-imp-attrs`、`data-gio-imp-items` 属性，并分别对应 `track` 方法中的三个参数进行设置，参数规则参考[埋点事件](/docs/miniprogram/3.8/commonlyApi#6埋点事件track)。

### 传值方式一：使用 Object 对象或 JSON 字符串赋值

```js
Page({
  data: {
    impAttrs: JSON.stringify({ type: 'hjh', name: 'yue' }),
    impItems: { key: 'order_id', id: '12345' },
  },
});
```

```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs="{{ impAttrs }}"
  data-gio-imp-items="{{ impItems }}"
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</view>
```

### 传值方式二：直接手动编写 Object 字符串

提示：部分框架如 uniapp 编译时可能会将单引号编译成双引号导致编译失败

```html
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs='{ "type": "hjh", "name": "yue" }'
  data-gio-imp-items='{ "key": "order_id", "id": "12345" }'
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</view>
```

对应产生的`CUSTOM`事件相当于： ↓↓↓

```js
gdp(
  'track',
  'imp_picture_var',
  { type: 'hjh', name: 'yue' },
  { key: 'order_id', id: '12345' }
);
```

**3、**如果您的曝光事件只需要统计一次或触发过于频繁导致曝光事件量过大，可以在节点上添加`data-gio-imp-type="once"`并设置唯一的`节点id`，来使得曝光逻辑变为单次上报。

```html
<view
  class="growing_collect_imp"
  id="imp_1"
  data-gio-imp-type="once"
  data-gio-imp-track="imp_picture_var"
  ...
>
  监听的元素，必须有内容或额外样式来让节点有实际大小
</view>
```

## 手动更新半自动埋点监听

当您需要添加半自动埋点的节点是动态渲染时（例如根据接口数据渲染不同的内容），SDK 可能会因为无法感知节点渲染时机而失去对标记节点的监听。此时，您需要调用 `updateImpression` 手动更新 SDK 的监听来保证您的动态渲染节点能够被监听到。

#### 示例

```js
const { gdp } = global;
Page({
  data: {
    impData: [],
  },
  onShow() {
    // 这里通过一个Promise来模拟调用接口
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Lily', age: 18 });
      }, 3000);
    });
    getData.then((result) => {
      this.setData({ impData: result }, () => {
        // 在setData回调中调用 updateImpression 即可
        gdp('updateImpression');
      });
    });
  },
});
```

**<font color="#FC5F3A">注意：</font>**如果您是在自定义组件中为自定义组件更新曝光监听，请传入 **`this`** 对象。

#### 示例

```js
const { gdp } = global;
Component({
  lifetimes: {
    attached: function(){
      gdp('updateImpression', this);
    }
  }
});
```

## 在自定义组件中使用曝光事件

由于SDK以前默认是只取页面上的曝光节点并自动发送事件，在自定义组件中可能无法触发。如果您需要在自定义组件中使用曝光事件，请将SDK升级至**3.8.17及以上版本**，同时升级曝光插件。

并且在页面引用自定义组件时，为自定义组件添加 **`growing_collect_imp_component`** 样式名。

#### 示例

```html
<!-- Page -->
<view>
  <my-component class="growing_collect_imp_component"></my-component>
</view>

<!-- Component -->
<view
  class="growing_collect_imp"
  data-gio-imp-track="imp_picture_var"
  data-gio-imp-attrs='{ "type": "hjh", "name": "yue" }'
  data-gio-imp-items='{ "key": "order_id", "id": "12345" }'
>
  自定义组件内的元素
</view>
```

## 注意

1、`data-gio-imp-attrs` 和 `data-gio-imp-items` 允许接受一个 Object 或者 JSON.stringify 后的 Object 字符串，SDK 会自动尝试进行格式化，格式化失败时默认返回空对象。

2、被标记的节点必须有实际的大小，一个没有内容和样式的节点标记可能不会触发事件。

3、请勿在同一页面中大量标记半自动埋点浏览事件（如商品列表），可能会严重影响页面性能导致卡顿。

4、`data-gio-imp-type`配置项 SDK 版本>=3.8.5 支持。

5、`updateImpression`方法 SDK 版本>=3.8.12 支持。

6、`.growing_collect_imp_component`样式名，即自定义组件的曝光 SDK 版本>=3.8.17 支持。

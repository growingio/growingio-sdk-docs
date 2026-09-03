---
sidebar_position: 2
title: 无埋点
---

## 简介（gioEventAutoTracking）

`gioEventAutoTracking` 用于自动采集页面中已绑定的交互事件。

- 点击类事件 `click`、`tap`、`longpress`、`longtap`、`getuserinfo`、`getphonenumber`、`contact` 上报为 `VIEW_CLICK`。
- 变更类事件 `blur`、`change`、`confirm` 在受支持的平台上报为 `VIEW_CHANGE`。
- 只有绑定了上述事件的节点会被采集。

点击事件适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

变更事件适用平台：Web、Android App、iOS App、微信小程序。

HarmonyOS App 不支持变更事件采集。这是鸿蒙框架能力限制，SDK 无法对 `change`、`blur`、`confirm` 等变更事件完成无埋点采集。

运行要求：无埋点 SDK 需使用 HBuilderX / uni-app x `5.08` 或更高版本打开和编译。SDK 发布包只包含 `uni_modules/gio-uniappx-autotracker`，不包含根目录 demo 与 `uni-link-x` / `uts-openSchema` 示例依赖；业务工程接入时以 SDK 包内 `package.json` 声明的版本范围为准。配置 Vite 插件或修改模板后，必须重新编译目标端；已经生成的构建产物不会自动补入无埋点桥接代码。

## 集成

### 1. 配置插件

在业务工程根目录的 `vite.config.js` 中加入无埋点插件，并放在 `uni()` 前：

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { gioUniappxAutoTrack } from './uni_modules/gio-uniappx-autotracker/build/vite-plugin.mjs'

export default defineConfig({
  plugins: [
    gioUniappxAutoTrack(),
    uni(),
  ],
})
```

手工复制 SDK 目录时，还需要在 SDK 目录安装依赖：

```bash
cd uni_modules/gio-uniappx-autotracker
npm install --omit=dev
```

### 2. 注册插件

初始化 SDK 成功后、使用无埋点前注册插件：

```js
gdp('registerPlugins', [
  {
    name: 'gioEventAutoTracking'
  }
] as Array<UTSJSONObject>)
```

插件没有配置项。未注册时，不会产生无埋点事件。

## 采集标记

标记必须写在绑定受支持的静态事件名的节点上。对于仅用于补充采集信息的节点，如果没有业务点击逻辑，也需要绑定一个空的点击方法。

### 标记生效矩阵

| 标记 | `VIEW_CLICK` | `VIEW_CHANGE` |
| --- | --- | --- |
| `id` | 写入 xpath，格式为 `id#事件名` | 写入 xpath，格式为 `id#事件名` |
| `data-title` | 写入 `textValue` | 仅 `swiper` 写入 `textValue`；其他组件不因该标记产生值 |
| `data-index` | 写入 `index` | 不读取、不上报、不参与去重 |
| `data-src` | 写入 `hyperlink` | 不生效 |
| `data-growing-track` | 不改变点击事件字段 | 允许采集组件实际值；同时允许 autoplay 触发的 change 继续上报 |
| `data-growing-ignore` | 忽略事件 | 忽略事件 |

`id`、`data-title`、`data-index`、`data-src` 支持静态值或 `:data-*` 绑定。`data-growing-track`、`data-growing-ignore` 是布尔标记：推荐使用裸属性、`true`、`false`、`1`、`0` 或动态布尔绑定；为兼容既有模板，除 `false` 和 `0` 外的非空静态字符串仍会按 true 处理。

### 1. 采集补充标记

#### data-title

`data-title` 用于补充节点文案，作为点击事件的 `textValue`。`swiper` 没有 `detail.value`，因此它的变更事件也会使用 `data-title` 作为 `VIEW_CHANGE.textValue`；其他组件未开启值采集时不会因此产生 `textValue`。

```vue
<button data-title="提交订单" @click="submitOrder">
  提交
</button>
```

#### data-index

`data-index` 用于区分列表中结构相同的点击节点，方便在分析时识别用户点击的是哪一项。它只写入 `VIEW_CLICK`；值必须是大于 `0`、小于 `2147483647` 的整数。

```vue
<view v-for="(item, index) in products" :key="item.id">
  <button :data-index="index + 1" :data-title="item.name" @click="openProduct(item)">
    {{ item.name }}
  </button>
</view>
```

#### data-src

`data-src` 用于记录点击后的目标地址，尤其适合 `navigator`、链接卡片和自定义跳转入口。最多保留前 320 个字符。

```vue
<navigator
  url="/pages/order/detail?id=1001"
  data-src="/pages/order/detail?id=1001"
  data-title="订单详情"
  @tap="openOrder"
>
  查看订单
</navigator>
```

#### id

`id` 用于稳定标识节点。为重要交互入口设置唯一 `id`，SDK 会在点击和变更事件中生成 `id#事件名` 形式的 xpath。

```vue
<button id="order-submit" data-title="提交订单" @click="submitOrder">
  提交订单
</button>
```

### 2. 数值采集标记

默认情况下，变更事件只记录组件发生了变化。为需要分析具体输入或选择结果的组件添加 `data-growing-track`，即可上报当前值。

```vue
<switch data-title="接收通知" data-growing-track @change="onNoticeChange" />
```

多选组件也可以使用：

```vue
<checkbox-group data-title="感兴趣的功能" data-growing-track @change="onFeatureChange">
  <label>
    <checkbox value="analytics" /> 数据分析
  </label>
  <label>
    <checkbox value="abtest" /> A/B 测试
  </label>
</checkbox-group>
```

注意：

- `input`、`textarea`、`switch`、`slider`、`radio-group`、`picker`、`checkbox-group` 和 `picker-view` 支持采集当前值或选择结果。
- `picker` 和 `picker-view` 会优先上报当前选项文案。
- `type="password"` 的输入框即使标记了 `data-growing-track`，也不会上报输入内容。
- 自动播放触发的变更事件默认忽略；如确实需要采集，可显式添加 `data-growing-track`。
- 裸属性、`"true"`、`"1"` 表示开启；`"false"`、`"0"` 表示关闭。动态控制时使用 `:data-growing-track="enabled"`；不要依赖其他字符串的兼容性语义。

`swiper` 没有可采集的组件值。为它设置 `data-title` 后，手势切换会把该文案写入 `VIEW_CHANGE.textValue`。`data-growing-track` 只能让 autoplay 的 change 不再被默认忽略，不会为 swiper 生成额外的组件值：

```vue
<swiper data-title="首页轮播" @change="onSwiperChange" />
```

### 3. 采集忽略标记

对不希望采集的节点添加 `data-growing-ignore`。标记必须写在实际绑定事件的节点上。

```vue
<view data-growing-ignore @tap="openInternalTool">
  内部调试入口
</view>
```

动态控制是否采集时，可以绑定布尔值：

```vue
<button :data-growing-ignore="isInternalUser" @click="openCampaign">
  活动入口
</button>
```

裸属性、`"true"`、`"1"` 表示忽略；`"false"`、`"0"` 表示不忽略。动态控制时使用 `:data-growing-ignore="isInternalUser"`；不要依赖其他字符串的兼容性语义。

## 常见组件

### uni-link

`uni-link` 支持自动采集点击。未设置 `data-src` 时，会使用 `href` 作为目标地址；需要自定义目标地址时可显式设置 `data-src`。

```vue
<uni-link
  href="https://example.com/help"
  data-title="帮助中心"
>
  查看帮助
</uni-link>
```

### tabBar

| 平台 | tabBar 点击采集 |
| --- | --- |
| Web、微信小程序、Harmony VDOM | 支持，通过页面 `onTabItemTap` 上报 `VIEW_CLICK` |
| Android App、iOS App、Harmony Vapor | 不支持，框架没有等价 hook |

HarmonyOS App 支持模板点击事件（如 `click`、`tap`），但不支持 `change`、`blur`、`confirm` 等变更事件采集；这是鸿蒙框架限制，无法通过 SDK 配置或模板标记绕过。Harmony VDOM 与 Vapor 的差异仍仅影响上表中的 tabBar 点击采集，不影响普通页面的点击事件采集。

## 注意事项

1. 先完成 Vite 配置，再注册 `gioEventAutoTracking`；两项缺一不可。
2. 标记只对绑定受支持的静态事件名的节点生效；`v-on:[eventName]` 不会自动插桩。
3. 短时间内同一元素重复触发的同类事件会自动去重；时间戳为 `0` 或无效值时不参与去重。
4. 当前只支持 `data-growing-track`，不支持 `data-growingtrack` 小写写法。

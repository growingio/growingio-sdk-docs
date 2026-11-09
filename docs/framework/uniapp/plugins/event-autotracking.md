---
sidebar_position: 2
title: 无埋点采集
---

无埋点采集由内置插件 `gioEventAutoTracking` 提供，基于 Vite 构建期模板插桩实现：编译阶段扫描业务模板中的事件监听，插入 SDK 采集代码，运行阶段无需页面代码配合。

## 接入步骤

### 步骤 1：注册插件

插件注册必须在首次 `gdp('init', ...)` 之前，在 `main.ts` 中完成：

```ts
gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
gdp('init', 'account-id', 'data-source-id', { uniVue: app })
```

### 步骤 2：配置 Vite 插件

无埋点的模板插桩发生在应用代码编译之前，Vite 插件必须配置在业务工程根目录的 `vite.config.ts` 中，且必须排在 `uni()` 之前。构建机器要求 Node ≥ `20.19`。

现有工程如果没有声明 `"type": "module"`，Vite 5 会按 CommonJS 加载配置，不能直接静态导入仅支持 ESM 的 npm 入口，使用异步配置即可兼容两种模块类型：

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// 异步 import 在 CommonJS 工程中得到的是模块命名空间，需兼容 default 导出
const uniPlugin = (uni as unknown as { default?: typeof uni }).default ?? uni

export default defineConfig(async () => {
  // npm 接入；uni_modules 接入改为
  // const { gioUniappAutoTrack } = await import('./uni_modules/gio-uniapp-autotracker/vite.js')
  const { gioUniappAutoTrack } = await import('gio-uniapp-autotracker/vite')

  return {
    // 顺序必须是：无埋点插件在前，uni() 在后
    plugins: [gioUniappAutoTrack(), uniPlugin()],
  }
})
```

已经使用 ESM 配置（声明了 `"type": "module"`）的工程可以继续静态导入：

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { gioUniappAutoTrack } from 'gio-uniapp-autotracker/vite'

export default defineConfig({
  // ESM 静态导入直接得到插件函数，无需兼容 default 导出
  plugins: [gioUniappAutoTrack(), uni()],
})
```

非标准目录（例如把 uni_modules 模块放到了其他路径）可通过 `runtimeImport` 覆盖探针入口，该入口必须与主 SDK 来自同一份安装：

```ts
gioUniappAutoTrack({ runtimeImport: '@/custom-path/gio-uniapp-autotracker/autotrack.js' })
```

说明：

- 编译插件包含自己的解析器，不要求业务工程额外安装 Vue / Babel 编译依赖。
- 两种安装渠道的 Vite 导入路径：npm 为 `gio-uniapp-autotracker/vite`，uni_modules 为 `./uni_modules/gio-uniapp-autotracker/vite.js`（相对于项目根目录的 `vite.config.ts`）。
- 不配置 Vite 插件时，插件注册不会报错，基础采集和 `gdp()` API 不受影响，但模板不会被插桩，无埋点事件不生效。

## 采集范围

无埋点处理白名单内置组件的静态 `@click`、`@tap` 与 `@change` 监听：

- 普通模板 `xpath` 在运行时按小程序口径生成 `id#eventName`。
- `uni-link` 组件使用 `#openURL` 标识，tabBar 点击使用 `#onTabItemTap`。
- 点击、变更事件上报为 `VIEW_CLICK` / `VIEW_CHANGE` 等模板事件，携带元素路径与元素内容。

### 事件类型

| 事件类型 | 上报事件 | 说明 |
| --- | --- | --- |
| 点击类 `@click`、`@tap` | `VIEW_CLICK` | 白名单内置组件的静态点击监听 |
| 变更类 `@change`（含输入框 `@blur`、`@confirm`） | `VIEW_CHANGE` | 变更事件默认不采集组件值，需 `data-growing-track` 开启 |

### 输入框完成事件

input / textarea 的输入完成采集按 `blur → confirm → change` 优先级只选择一个已声明的完成事件插桩：

- 优先使用 `@blur`，未声明时使用 `@confirm`，仅声明 `@change` 时保留兼容插桩路径。
- 传统 App 不转发输入框的原生 `change`；仅绑定 `@change` 时不会补发事件，业务应改用 `@blur` / `@confirm`。
- 原业务 handler 全部保留，业务行为不受插桩影响。

## 元素标识与维度

无埋点事件通过以下字段标识触发元素及其业务维度：

| 维度 | 上报字段 | 来源标记 | 说明 |
| --- | --- | --- | --- |
| 元素路径 | `xpath` | `id` 属性 | 同名 handler 且无 `id` 时使用相同标识，无法区分；重要交互入口应补充稳定的 `id`，运行时生成 `id#事件名` 形式的 xpath |
| 元素文案 | `textValue` | `data-title` | 补充节点文案，便于圈选与分析时识别元素 |
| 列表序号 | `index` | `data-index` | 区分列表中结构相同、xpath 一致的节点，取值为规范正整数（大于 0 且小于 2147483647） |
| 目标地址 | `hyperlink` | `data-src` | 记录点击后的目标地址，动态链接由业务显式提供 |

各维度的详细说明：

### 元素路径（xpath）

`xpath` 是元素定位的核心维度，按节点嵌套层级生成。设置 `id` 后，xpath 会包含 `id#事件名` 标识，例如 `id="order-submit"`、`@click` 对应 `order-submit#click`。

- 同名 handler 且无 `id` 的元素共享相同标识，圈选时会互相影响，这类元素必须补充 `id`。
- `id` 应保持稳定、唯一，避免使用随机值或随业务状态变化的值。

### 元素文案（textValue）

通过 `data-title` 补充元素文案：

```vue
<button data-title="提交订单" @click="submitOrder">提交</button>
```

列表场景可与 `data-index` 配合使用，让每一项都携带业务名称：

```vue
<view v-for="(item, index) in products" :key="item.id">
  <button :data-index="index + 1" :data-title="item.name" @click="openProduct(item)">
    {{ item.name }}
  </button>
</view>
```

### 列表序号（index）

`data-index` 用于区分列表中结构相同、xpath 一致的节点：

- 只作用于 `VIEW_CLICK` 事件。
- 取值必须为规范正整数：大于 `0` 且小于 `2147483647`，建议从 `1` 开始。
- 推荐与 `data-title` 同时使用，序号定位元素位置，文案标识元素内容。

### 目标地址（hyperlink）

`data-src` 记录点击目标地址，适合 `navigator`、链接卡片和自定义跳转入口：

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

## 隐私与忽略规则

无埋点采集通过三层机制控制隐私边界：**忽略标记**（决定事件是否采集）、**敏感标记**（决定事件是否整条丢弃）、**值采集授权**（决定变更事件是否上报组件值）。优先级为：敏感标记 > 密码保护 > 值采集授权。

### 1. 采集忽略标记（data-growing-ignore）

`data-growing-ignore` 忽略该元素的自动采集，编译器保留原监听，不再报告采集边界告警。

```vue
<!-- 静态忽略：内部调试入口不产生任何无埋点事件 -->
<view data-growing-ignore @tap="openInternalTool">
  内部调试入口
</view>

<!-- 动态忽略：仅对内部用户关闭采集 -->
<button :data-growing-ignore="isInternalUser" @click="openCampaign">
  活动入口
</button>
```

取值规则：

- 裸属性、`"true"`、`"1"` 表示忽略；`"false"`、`"0"` 表示不忽略。
- 动态控制时使用 `:data-growing-ignore="...布尔表达式"`；不要依赖其他字符串的兼容性语义。
- `false` / `0` 取值、动态 ignore 或可能被 `v-bind` 覆盖的标记仍会保留编译诊断，便于发现误配。
- 标记必须写在实际绑定事件的节点上。

### 2. 敏感标记（data-growing-sensitive）

`data-growing-sensitive` 是显式敏感标记，匹配的元素整条事件忽略采集，且该优先级高于 `data-growing-track`：

```vue
<!-- 点击事件不采集，也不产生构建告警 -->
<button data-growing-sensitive @click="openPrivacyPolicy">
  查看隐私政策
</button>
```

### 3. 值采集授权（data-growing-track）

默认情况下，变更事件只记录组件发生了变化，不读取组件值。为非敏感组件添加 `data-growing-track` 后才允许上报当前值：

```vue
<input data-growing-track @blur="onPhoneBlur" placeholder="联系电话" />

<switch data-title="接收通知" data-growing-track @change="onNoticeChange" />
```

注意：

- `data-growing-track` 不能覆盖密码保护或敏感规则：密码框即使标记也不会上报 `textValue`。
- 标记 `data-growing-track` 同时允许 autoplay 触发的 `change` 继续上报。
- 裸属性、`"true"`、`"1"` 表示开启；`"false"`、`"0"` 表示关闭；动态控制使用 `:data-growing-track="enabled"`。

### 4. 内置隐私保护

以下保护由 SDK 内置，无需也无法通过标记关闭：

| 场景 | 行为 |
| --- | --- |
| 密码框（`password`、安全密码及动态 `:password`） | 保留 `VIEW_CHANGE` 事件，但始终不读取、不上报 `textValue` |
| `file` 输入框 | 拒绝整条采集 |
| 无法确认类型的动态 `:type` 输入框 | 拒绝整条采集 |
| autoplay 触发的变更事件 | 默认忽略，显式 `data-growing-track` 后才采集 |

```vue
<!-- 密码框：事件照常上报，输入内容永不上报 -->
<input password @blur="onPwdBlur" />

<!-- 文件选择：整条事件不采集 -->
<input type="file" @change="onFileChange" />
```

## 插桩边界

业务行为不变是插桩的前提。插桩只在原事件监听外层包裹采集代码，不改变业务 handler 的执行时机、参数与返回值；无法保证这一前提的场景保持源码原样、不插桩并产生构建告警。

### 不插桩场景

| 场景 | 示例 | 不插桩原因 |
| --- | --- | --- |
| 动态事件绑定 | `@[eventName]="onTap"`、`v-on:[eventName]` | 编译期无法确定事件名，运行时事件名回退会引入行为差异 |
| 自定义组件 | `<my-button @click="onTap" />` | 组件内部如何触发事件不受 SDK 控制 |
| 歧义 listener 表达式 | handler 含多条副作用语句、复杂嵌套调用 | 外层包裹可能改变求值顺序 |
| 直接函数引用 | `@tap="submit"` | 表达式即回调本身，无法在不改写的情况下插桩 |
| `.nvue` 页面 | `.nvue` 文件内的模板 | 不在模板插桩范围内 |

### 可安全插桩场景

以下场景会正常插桩，事件名回退原生事件名：

- 显式调用：`@tap="save($event)"`。
- 带简单首参数的同步函数：如 `@tap="open(item.id)"`。
- 两侧均为显式调用的简单条件表达式：如 `@tap="isLogin ? save($event) : goLogin($event)"`。

### 无法插桩时的替代方案

需要精确采集上述交互时，可在业务原有 handler 中调用 `gdp('track', ...)` 上报代码埋点。

**注意：** 代码埋点上报的事件为普通埋点事件，**不能被圈选**，只能通过事件名（event）在分析中使用；圈选能力仅适用于无埋点自动采集的 `VIEW_CLICK` / `VIEW_CHANGE` 模板事件。因此替代方案无法还原元素的圈选体验，仅适合补充采集无法插桩的交互行为。事件命名请使用业务化名称，**不要使用 `VIEW_CLICK` / `VIEW_CHANGE` 等无埋点事件类型名**，避免与分析模型中的系统事件混淆：

```ts
// 动态事件绑定场景：在业务 handler 中手动上报
const onTap = (e: CustomEvent) => {
  gdp('track', 'dynamic_entry_click', {
    entry_id: currentId,
    entry_text: '动态按钮',
  })
  // 原业务逻辑保持不变
  doSomething()
}
```

不要为了消除告警随意改写业务模板（例如把函数引用改成显式调用），改写应由业务自行评估后完成。

## 事件修饰与动态绑定

### 事件修饰符

事件修饰符随 handler 一并插桩，语义与原生 Vue 一致：

```vue
<!-- stop / prevent 等修饰符保留，采集代码在修饰逻辑之外执行 -->
<button @click.stop="onTap">提交</button>
```

### 动态绑定

动态绑定（getter、计算属性等）由原模板求值，SDK 不在事件时重新求值 getter 或其他绑定，确保事件触发时刻的数据与业务实际使用的数据一致：

```vue
<!-- expr 的求值、传参均由原模板完成，SDK 只读取最终结果 -->
<view @tap="handlers[currentType]">动态入口</view>
```

### picker 数据源的例外

唯一例外是 picker 的 `:range` / `:range-key` 与 picker-view 列的 `v-for` 数据源：

- 数据源写成普通成员路径（如 `cities`、`state.cities`）时，只在通过隐私与 track 授权检查后于事件时读取一次，用于取选中项文案。
- 含调用、计算键或可选访问的 range、读取失败或超出范围预算时，使用下标回退，即上报选中项下标而非文案。

```vue
<!-- 支持：普通成员路径，事件时读取一次取选中项文案 -->
<picker :range="cities" @change="onCityChange" data-growing-track />

<!-- 回退：含调用的 range，读取失败时上报选中项下标 -->
<picker :range="getCities()" @change="onCityChange" data-growing-track />
```

## 版本与升级

- schema v2 与旧编译探针互不兼容，升级时必须整体重新构建应用。
- 升级 SDK、Vite 配置或 uni-app 模板后，需重新编译 HarmonyOS 目标，并完成一次真实编译、交互与上报验证。

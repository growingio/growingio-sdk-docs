---
sidebar_position: 2
title: 无埋点采集
---

HarmonyOS App 的无埋点采集由内置插件 `gioEventAutoTracking` 提供。模板交互通过 Vite 在编译期插桩，原生 TabBar 点击通过页面生命周期采集。

## 接入步骤

### 步骤 1：注册插件

插件注册必须在首次 `gdp('init', ...)` 之前，在 `main.ts` 中完成：

```ts
gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
gdp('init', 'account-id', 'data-source-id', { uniVue: app })
```

### 步骤 2：配置 Vite 插件

在业务工程根目录的 `vite.config.ts` 中配置无埋点插件，并将它放在 uni-app 插件之前。构建环境要求 Node.js `20.19.0` 或以上版本。

Vite 5 在 CommonJS 工程中加载配置时，需要用 `import()` 加载 ESM 格式的 SDK 插件。以下异步配置也适用于 ESM 工程。

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// 兼容 @dcloudio/vite-plugin-uni 的 CommonJS 默认导出
const uniPlugin = (uni as unknown as { default?: typeof uni }).default ?? uni

export default defineConfig(async () => {
  // HBuilderX 工程通过 uni_modules 接入时，改为
  // const { gioUniappAutoTrack } = await import('./uni_modules/gio-uniapp-autotracker/vite.js')
  // CLI 工程通过 uni_modules 接入时，改为
  // const { gioUniappAutoTrack } = await import('./src/uni_modules/gio-uniapp-autotracker/vite.js')
  const { gioUniappAutoTrack } = await import('gio-uniapp-sdk/vite')

  return {
    plugins: [gioUniappAutoTrack(), uniPlugin()],
  }
})
```

声明了 `"type": "module"` 的工程也可以静态导入 SDK 插件。

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { gioUniappAutoTrack } from 'gio-uniapp-sdk/vite'
// HBuilderX 工程通过 uni_modules 接入时，改为
// import { gioUniappAutoTrack } from './uni_modules/gio-uniapp-autotracker/vite.js'
// CLI 工程通过 uni_modules 接入时，改为
// import { gioUniappAutoTrack } from './src/uni_modules/gio-uniapp-autotracker/vite.js'

const uniPlugin = (uni as unknown as { default?: typeof uni }).default ?? uni

export default defineConfig({
  plugins: [gioUniappAutoTrack(), uniPlugin()],
})
```

从其他目录加载 SDK 时，可用 `runtimeImport` 指定探针入口。探针与主 SDK 必须来自同一份安装。

```ts
gioUniappAutoTrack({ runtimeImport: '@/custom-path/gio-uniapp-autotracker/autotrack.js' })
```

编译插件已包含解析器。只注册运行时插件时，基础采集、`gdp()` API 和原生 TabBar 采集可用。模板交互需要完成 Vite 插桩才会产生无埋点事件。

## 采集范围

| 事件类型 | 上报事件 | 说明 |
| --- | --- | --- |
| 点击类 `@click`、`@tap` | `VIEW_CLICK` | 白名单内置组件的静态点击监听 |
| 变更类 `@change` | `VIEW_CHANGE` | 支持 `input`、`textarea`、`switch`、`slider`、`radio-group`、`checkbox-group`、`picker`、`picker-view` 和 `swiper`。`input` 和 `textarea` 也支持 `@blur`、`@confirm` |
| 原生 TabBar 点击 | `VIEW_CLICK` | 页面 `onTabItemTap` 触发时采集。`xpath` 固定为 `#onTabItemTap`，`index` 从 `1` 开始。宿主提供的标签文案和页面路径分别写入 `textValue` 和 `hyperlink` |

### 输入框完成事件

`input` 和 `textarea` 按 `blur → confirm → change` 的顺序选择第一个已声明的完成事件。选中的监听仍须满足插桩条件。

鸿蒙 App 的输入框使用 `@blur` 或 `@confirm` 采集输入完成事件。仅声明 `@change` 时保留兼容插桩，宿主未触发该事件时不会产生采集记录。原有监听均保留。

## 元素标识与维度

| 维度 | 上报字段 | 来源标记 | 说明 |
| --- | --- | --- | --- |
| 元素路径 | `xpath` | `id` 和监听表达式 | 使用 `id#探针事件名` 标识模板交互 |
| 元素文案 | `textValue` | `data-title` | 用于点击文案。`swiper` 变更事件缺少可上报的下标时也可使用该文案 |
| 列表序号 | `index` | `data-index` | 区分列表中结构相同、xpath 一致的节点，取值为规范正整数（大于 0 且小于 2147483647） |
| 目标地址 | `hyperlink` | `data-src` 或 `uni-link` 的静态 `href` | 记录点击后的目标地址，动态链接由业务显式提供 |

### 元素路径（xpath）

模板事件的 `xpath` 由事件节点的 `id` 和探针事件名组成。SDK 优先取 `currentTarget`，该节点缺失时取 `target`。能够提取业务函数名时使用函数路径，无法提取时回退到原生事件名。

- `id="order-submit"` 配合 `@click="submitOrder($event)"` 生成 `order-submit#submitOrder`。
- `id="order-submit"` 配合 `@click="handlers[action]($event)"` 生成 `order-submit#click`。
- 事件节点缺少 `id` 时得到 `#探针事件名`。需要区分使用同一函数的元素时，为各元素设置稳定、唯一的 `id`。
- `uni-link` 未声明 `click`、`tap` 或动态监听时，插件会补充使用 `openURL` 的点击探针。显式监听按普通模板规则生成标识。

### 元素文案（textValue）

通过 `data-title` 补充点击事件的元素文案。

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

用 `data-src` 记录 `navigator` 等入口的点击目标地址。`uni-link` 可使用静态 `href` 作为默认值，动态地址请绑定 `:data-src`。

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

忽略标记和敏感标记均会丢弃整条事件。通过这两项检查后，SDK 再应用密码保护和变更值采集规则。

### 1. 采集忽略标记（data-growing-ignore）

`data-growing-ignore` 让运行时丢弃对应的无埋点事件。业务监听照常执行。编译器能静态确认忽略且绑定不会覆盖该值时，会省略采集边界告警，仍会报告缺少监听表达式等诊断。

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
- 若要忽略某个监听器对应的所有事件，请在绑定该监听器的节点上添加标记。SDK 也检查原生事件目标 `target`，因此点击带标记的子节点也能抑制冒泡触发的采集。

### 2. 敏感标记（data-growing-sensitive）

`data-growing-sensitive` 会丢弃整条无埋点事件，优先于 `data-growing-track`。取值规则与忽略标记一致。

```vue
<!-- 丢弃无埋点事件，保留业务点击 -->
<button data-growing-sensitive @click="openPrivacyPolicy">
  查看隐私政策
</button>
```

### 3. 值采集授权（data-growing-track）

变更事件默认只记录变化，`swiper` 仍可使用 `data-title` 提供的文案。为非敏感组件启用 `data-growing-track` 后，SDK 可读取并上报当前值。以下开关的值会以 `"true"` 或 `"false"` 写入 `textValue`。

```vue
<switch id="notice-switch" data-growing-track @change="onNoticeChange" />
```

注意：

- `data-growing-track` 不能覆盖密码保护或敏感规则：密码框即使标记也不会上报 `textValue`。
- 裸属性、`"true"`、`"1"` 表示开启；`"false"`、`"0"` 表示关闭；动态控制使用 `:data-growing-track="enabled"`。

### 4. 内置隐私保护

以下保护由 SDK 内置，无需也无法通过标记关闭：

| 场景 | 行为 |
| --- | --- |
| 密码框（`password`、安全密码及动态 `:password`） | 保留 `VIEW_CHANGE` 事件，但始终不读取、不上报 `textValue` |
| `file` 输入框 | 拒绝整条采集 |
| 无法确认类型的动态 `:type` 输入框 | 拒绝整条采集 |
| `swiper` 的 autoplay 变更事件 | 默认忽略。原生事件 `target.dataset` 含已启用的 `data-growing-track` 标记时才允许采集 |

```vue
<!-- 密码框：事件照常上报，输入内容永不上报 -->
<input password @blur="onPwdBlur" />

<!-- 文件选择：整条事件不采集 -->
<input type="file" @change="onFileChange" />
```

## 插桩边界

插桩保留业务监听器的执行时机、参数和返回值。编译器无法安全改写的监听器保持原样，并会产生相应诊断。

### 不插桩场景

| 场景 | 示例 | 不插桩原因 |
| --- | --- | --- |
| 动态事件绑定 | `@[eventName]="onTap"`、`v-on:[eventName]` | 编译期无法确定事件名，运行时事件名回退会引入行为差异 |
| 自定义组件 | `<my-button @click="onTap" />` | 组件内部如何触发事件不受 SDK 控制 |
| 歧义 listener 表达式 | handler 含多条副作用语句、复杂嵌套调用 | 外层包裹可能改变求值顺序 |
| 无法缓存的函数引用 | `v-once` 内的 `@tap="submit"`，`v-for` 内的 `@tap="item.submit"`，引用插槽变量的监听 | Vue 在渲染时解析引用，插件保留其原有行为 |
| 无法静态分析的 Options API 组件配置 | `export default defineComponent(...)`、展开 `methods` | 无法安全注册探针方法 |
| `.nvue` 页面 | `.nvue` 文件内的模板 | 不在模板插桩范围内 |

### 可安全插桩场景

鸿蒙构建支持以下写法，事件命名遵循上文的 `xpath` 规则。

- 可缓存的直接函数引用，例如 `@tap="submit"`。
- 显式调用：`@tap="save($event)"`。
- 带简单参数的调用，例如 `@tap="open(item.id)"`。
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

事件修饰符保持 Vue 原有语义。采集探针位于监听器内。以 `.self` 为例，只有事件满足修饰符条件，监听器和探针才会执行。

```vue
<button @click.stop="onTap($event)">提交</button>
```

### 动态绑定

动态 `data-*` 元数据由原模板求值。SDK 从原生事件的 `dataset` 读取这些值。可缓存的计算成员监听遵循 Vue 原有的引用求值规则。以下示例使用原生事件名 `tap`，因为编译时无法确定被调用的业务函数名。

```vue
<view @tap="handlers[currentType]">动态入口</view>
```

### 选择器文案

`picker` 的 `:range`、`:range-key` 和 `picker-view` 列的 `v-for` 数据源可用于解析选中项文案。

- 数据源写成普通成员路径（如 `cities`、`state.cities`）时，只在通过隐私与 track 授权检查后于事件时读取一次，用于取选中项文案。
- 含调用、计算键或可选访问的 range、读取失败或超出范围预算时，使用下标回退，即上报选中项下标而非文案。

```vue
<!-- 支持：普通成员路径，事件时读取一次取选中项文案 -->
<picker :range="cities" @change="onCityChange" data-growing-track />

<!-- 回退：含调用的 range，读取失败时上报选中项下标 -->
<picker :range="getCities()" @change="onCityChange" data-growing-track />
```

## 版本与升级

升级 SDK、Vite 配置或 uni-app 模板后，重新构建 HarmonyOS App，并验证实际交互和上报。

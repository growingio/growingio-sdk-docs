---
sidebar_position: 3
title: 初始化配置
---

本页说明 HarmonyOS App 的初始化方式、配置项和会话行为。

## 配置一览表

> <b>提示：`uniVue` 为必填项，其余配置项均为非必填。</b>

| **字段名** | **参数取值** | **默认值** | **说明** |
| --- | --- | --- | --- |
| `uniVue` | `GioUniVueApp` | `-` | `createSSRApp(App)` 返回的 Vue 应用实例，SDK 通过它安装生命周期 mixin |
| `serverUrl` | `string \| null` | `https://napi.growingio.com` | 数据上报的服务端地址 |
| `appVersion` | `string \| null` | `由宿主读取` | 应用版本号 |
| `appChannel` | `string \| null` | `null` | 应用渠道标识 |
| `sessionExpires` | `number` | `0.5` | App 回到前台时判断会话是否过期的后台停留时长（分钟） |
| `dataCollect` | `boolean` | `true` | 是否开启数据采集 |
| `idMapping` | `boolean` | `false` | 是否开启多用户身份上报 |
| `forceLogin` | `boolean` | `false` | 是否开启强制登录 |
| `debug` | `boolean` | `false` | 是否开启调试模式 |

**<font color="#FC5F3A">注意：</font>除 `uniVue` 外，其余配置项缺省、类型错误或超出取值范围时，SDK 会回退到默认值，不会阻断初始化。**

## 在应用入口初始化

在 `main.ts` 中创建 App 后调用 `gdp('init', accountId, dataSourceId, options)`。`uniVue` 参数必须传入 `createSSRApp(App)` 返回的 Vue 应用实例，SDK 会通过它安装全局生命周期 mixin，自动接管 App / Page 生命周期，业务的 `App.vue` 和页面不需要引入生命周期桥接代码。

下例使用 npm 导入。通过 `uni_modules` 集成时，请使用[模块导入路径](./integration.md)。如果应用需等待用户同意后采集，请在初始化时设置 [`dataCollect: false`](#datacollect)。

启用无埋点采集时，请注册 `gioEventAutoTracking` 并配置对应的 Vite 插件。[无埋点采集插件](./plugins/event-autotracking.md)

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-sdk'

export function createApp() {
  const app = createSSRApp(App)

  // 启用无埋点采集时注册
  gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
  gdp('init', 'YOUR_ACCOUNT_ID', 'YOUR_DATA_SOURCE_ID', {
    uniVue: app,
    serverUrl: 'https://napi.growingio.com',
    dataCollect: true,
  })

  return { app }
}
```

- `accountId`、`dataSourceId`、`uniVue` 为必填项。首次调用缺少有效必填项时返回 `false`。
- `gdp('init', ...)` 返回 `true` 后，SDK 异步恢复运行状态。请以控制台的“Gio uni-app SDK 初始化完成”日志确认运行时就绪。
- 初始化进行中或运行时已就绪时，重复调用会返回 `false` 并输出告警。异步恢复失败时，可修正问题后再次调用 `init`。

## 配置项详解

### serverUrl

SaaS 客户可使用默认地址。私有部署客户请填写自己的采集服务地址，支持域名和 IP 地址。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  serverUrl: 'https://collector.example.com',
})
```

请填写 HTTP 或 HTTPS 服务的基础地址，可按需指定端口。省略协议时默认使用 HTTPS。带有凭据、业务路径、查询参数或片段的地址无效。空值、非法值和宿主无法解析的值会回退到默认地址 `https://napi.growingio.com`。

### appVersion

`appVersion` 表示业务应用版本号，会写入事件的 `appVersion` 字段，可用于分析不同版本之间数据的对比。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  appVersion: '1.0.0',
})
```

生效行为：显式传入非空字符串时（去掉首尾空白），该值优先使用。例如配置 `appVersion: '1.0.0'` 后，即使安装包版本为 `0.1.0`，新事件也会上报 `1.0.0`。未传、空白或非法值时，依次读取 `uni.getAppBaseInfo().appVersion`、`uni.getSystemInfoSync().appVersion`；均不可用时省略该字段，不影响采集。

### appChannel

`appChannel` 标记应用渠道，写入事件的 `appChannel` 字段。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  appChannel: 'appgallery',
})
```

生效行为：默认值为 `null`。设置为非空字符串后写入事件；`null` 或缺省时事件不携带该字段。

### sessionExpires

`sessionExpires` 指定后台停留时间的阈值，单位为分钟。App 从后台回到前台时，后台停留时间超过该阈值才会因超时建立新会话。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  sessionExpires: 30,
})
```

支持大于 0 且不超过 360 的有限数值，可使用小数。缺省或配置无效时，默认使用 `0.5` 分钟（30 秒）。

**<font color="#FC5F3A">注意：</font>该配置项不支持通过动态修改配置接口在运行时修改，过期策略由初始化配置决定。**

### dataCollect

默认开启数据采集。如果需要等待用户同意后采集行为事件，请在初始化时设置 `dataCollect: false`。首次开启前，SDK 不生成新的行为事件，历史离线队列留在本地。初始化仍会读取设备、系统和应用基础信息。SDK 会读取本地设备 ID，在需要生成新 ID 时尝试保存到本地。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  dataCollect: false,
})
```

获得同意后，调用 `setOptions` 开启采集。

```ts
gdp('setOptions', { dataCollect: true })
```

开启后，SDK 按生命周期建立新会话并生成 `VISIT`，有当前页时生成 `PAGE`。已缓存的历史事件可恢复发送。

采集开启后再动态关闭时，SDK 停止生成新的行为事件。已入队或正在发送的事件仍可能上报，详见[运行时采集开关](./apis.md#1开启关闭数据采集datacollect)。

关于数据安全和隐私条款，参见[数据安全和信息保护说明](/knowledge/compliance)。

### idMapping

多用户身份上报，默认不开启。需要上报 userKey 时开启，开启后调用设置登录用户 ID 接口时设置 userKey，服务端调用用户身份融合 API 时，可将不同的登录用户 ID 识别为同一用户。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  idMapping: true,
})

gdp('setUserId', 'user-1001', 'account') // account 为平台已配置的身份类型
```

默认值为 `false`，SDK 忽略 `setUserId` 中的 `userKey`。设置为 `true` 并传入有效的身份类型后，SDK 保存 `userKey`，并在后续事件中携带该字段。

**<font color="#FC5F3A">注意：</font>**

**1、请在平台数据中心预先配置 `userKey` 对应的身份类型。**

**2、`idMapping` 不能通过动态修改配置接口在运行时开启。**

### forceLogin

SDK 默认生成访问用户 ID。如果鸿蒙应用需要使用业务侧分配的稳定访问标识，请在初始化时设置 `forceLogin: true`。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  forceLogin: true,
})
```

开启后，SDK 暂停发送事件。获取到稳定标识后，调用 `identify` 分配设备 ID 并恢复发送。

```ts
gdp('identify', 'stable-visitor-id')
```

- `identify` 成功执行后，SDK 更新设备 ID 和本次运行中等待上报的事件。冷启动恢复的历史事件保留原设备 ID。
- 等待 `identify` 期间，本次运行新入队的事件仅保存在内存，进程结束后无法恢复。
- 队列仍受[离线队列的容量和有效期](#离线与发送策略)约束。请在拿到稳定标识后及时调用 `identify`。

### debug

在开发时设置 `debug: true`，打开控制台即可看到实时采集的数据。注意正式上线时关闭它。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  debug: true,
})
```

生效行为：默认值为 `false`。设置为 `true` 时，控制台输出 `[GrowingIO Debug]:` 前缀的操作标签与即将派发的协议事件数组；不会输出队列内部元数据，也不会改变隐私、重试或采集行为。

## 会话模型

- App 冷启动首次进入前台（`App.onShow`）时建立新会话。SDK 会在采集开启时生成 `VISIT`。
- App 从后台回到前台时，SDK 比较后台停留时长与 `sessionExpires`。严格超过阈值时建立新会话，等于或低于阈值时沿用原会话。
- 从登录用户 A 切换到 B，或退出 A 后登录 B，都会在 App 首次进入前台后触发会话切换。首次登录、退出登录和重新登录同一账号沿用当前会话。
- 恢复采集时，SDK 按应用生命周期建立新会话。有当前页时，生成 `PAGE`。
- 页面 `onShow` 触发页面采集。前台持续停留、切页和调用 `track` 均沿用当前会话。

## 离线与发送策略

- SDK 自动调度发送，每批最多 50 条事件，且请求体最多 512 KiB。无法装入单批的事件会被拒绝。
- App 队列最多保留 10,000 条事件，序列化大小上限为 4 MiB。接纳新事件会超出任一上限时，SDK 从最早入队的事件开始淘汰，直到可接纳新事件。事件从产生时起最多保留 7 天。
- 离线事件异步写入宿主存储，实际能保存的数据量也受宿主存储容量限制。冷启动仅能恢复已写入且未过期的事件。开启 `forceLogin` 时，本次运行新入队的事件在 `identify` 成功前仅保存在内存。
- 发送失败时，SDK 会按策略退避重试。HTTP 413 会丢弃对应批次。HTTP 400 或 422 会触发拆批重试，定位到单条事件后，累计被拒 3 次时丢弃该条事件。其他网络或 HTTP 失败的事件在仍有效且未被淘汰时会继续重试。

## 验证初始化

调试阶段设置 `debug: true`。在控制台确认“Gio uni-app SDK 初始化完成”后，可进入页面、切换页面或调用自定义事件 API，通过调试日志和网络请求验证事件是否上报。

```ts
gdp('track', 'integration_test', { source: 'manual' })
```

## 初始化检查

- `gdp('init', ...)` 在 `createSSRApp(App)` 后、`return { app }` 前调用。
- `accountId`、`dataSourceId`、`options.uniVue` 已传入且不为空。
- 使用插件时，请在首次 `init` 前调用 `gdp('registerPlugins', ...)`。
- 私有化环境已显式配置正确的 `serverUrl`；未配置时 SDK 使用默认采集地址。
- 开启 `forceLogin` 后，必须调用 `gdp('identify', ...)` 才能释放暂停的上报队列。
- 使用的 HBuilderX 已重新编译 HarmonyOS 目标，并完成一次真实上报验证。

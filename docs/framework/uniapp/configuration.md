---
sidebar_position: 3
title: 初始化配置
---

本文档说明应用入口初始化方式、全部初始化配置项、会话模型及初始化验证。

## 配置一览表

下表中列出了 uni-app SDK 的所有初始化配置项，请按需设置。如您不确定是否需要，请咨询我们。

> <b>提示：`uniVue` 为必填项，其余配置项均为非必填。</b>

| **字段名** | **参数取值** | **默认值** | **说明** |
| --- | --- | --- | --- |
| `uniVue` | `GioUniVueApp` | `-` | `createSSRApp(App)` 返回的 Vue 应用实例，SDK 通过它安装生命周期 mixin |
| `serverUrl` | `string` | `https://napi.growingio.com` | 数据上报的服务端地址 |
| `appVersion` | `string` | `由宿主读取` | 应用版本号 |
| `appChannel` | `string` | `null` | 应用渠道标识 |
| `sessionExpires` | `number` | `0.5` | 会话过期时长（分钟） |
| `dataCollect` | `boolean` | `true` | 是否开启数据采集 |
| `idMapping` | `boolean` | `false` | 是否开启多用户身份上报 |
| `forceLogin` | `boolean` | `false` | 是否开启强制登录 |
| `debug` | `boolean` | `false` | 是否开启调试模式 |

**<font color="#FC5F3A">注意：</font>除 `uniVue` 外，其余配置项缺省、类型错误或超出取值范围时，SDK 会回退到默认值，不会阻断初始化。**

## 在应用入口初始化

在 `main.ts` 中创建 App 后调用 `gdp('init', accountId, dataSourceId, options)`。`uniVue` 参数必须传入 `createSSRApp(App)` 返回的 Vue 应用实例，SDK 会通过它安装全局生命周期 mixin，自动接管 App / Page 生命周期，业务的 `App.vue` 和页面不需要引入生命周期桥接代码。

```ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import gdp from 'gio-uniapp-autotracker'

export function createApp() {
  const app = createSSRApp(App)

  gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
  gdp('init', 'YOUR_ACCOUNT_ID', 'YOUR_DATA_SOURCE_ID', {
    uniVue: app,
    serverUrl: 'https://napi.growingio.com',
    dataCollect: true,
  })

  return { app }
}
```

**<font color="#FC5F3A">注意：</font>**

**1、`accountId`、`dataSourceId`、`uniVue` 为必填字段，任一缺失或非法时初始化返回 `false`，SDK 不采集事件。**

**2、`gdp('init', ...)` 只允许成功调用一次。重复初始化会输出 `[GrowingIO]：SDK重复初始化...` 告警并返回 `false`，不会刷新配置、重置队列或重装生命周期。**

## 配置项详解

### serverUrl

Saas 客户忽略此项配置；OP 私有部署客户请填写此项，否则您的服务将无法收到行为数据上报。支持域名和 IP 地址。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  serverUrl: 'https://napi.growingio.com',
  ...其他配置项,
})
```

生效行为：默认值为 `https://napi.growingio.com`。仅接受“协议 + 主机 + 端口”形式，不接受凭据、路径、查询参数或片段；传空、非法或宿主无法解析的值时回退默认地址。

**<font color="#FC5F3A">注意：</font>需要填写携带协议头的完整服务地址。**

### appVersion

`appVersion` 表示业务应用版本号，会写入事件的 `appVersion` 字段，可用于分析不同版本之间数据的对比。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  appVersion: '1.0.0',
  ...其他配置项,
})
```

生效行为：显式传入非空字符串时（去掉首尾空白），该值优先使用。例如配置 `appVersion: '1.0.0'` 后，即使安装包版本为 `0.1.0`，新事件也会上报 `1.0.0`。未传、空白或非法值时，依次读取 `uni.getAppBaseInfo().appVersion`、`uni.getSystemInfoSync().appVersion`；均不可用时省略该字段，不影响采集。

### appChannel

`appChannel` 标记应用渠道，写入事件的 `appChannel` 字段。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  appChannel: 'app-store',
  ...其他配置项,
})
```

生效行为：默认值为 `null`。设置为非空字符串后写入事件；`null` 或缺省时事件不携带该字段。

### sessionExpires

`sessionExpires` 控制会话过期时长，单位为分钟。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  sessionExpires: 30,
  ...其他配置项,
})
```

**取值范围：大于 0 的任意小数，最大 `360`；默认 `0.5`（即 30 秒）。**

生效行为：`-1`、`NaN`、`Infinity`、负数或超限等非法值使用默认值。会话模型详见[会话模型](#会话模型)。

**<font color="#FC5F3A">注意：</font>该配置项不支持通过动态修改配置接口在运行时修改，过期策略由初始化配置决定。**

### dataCollect

默认情况下，数据采集开关默认开启。如果您需要初始化时暂时关闭数据采集（例如隐私协议的场景），可以通过指定 `dataCollect: false` 关闭。

初始化关闭数据采集后，至您打开数据采集之前都不会采集数据和上报。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  dataCollect: false,
  ...其他配置项,
})
```

需要开启数据采集时再通过调用动态修改配置接口来修改它。[参考文档](./apis.md#1开启关闭数据采集datacollect)

```ts
gdp('setOptions', { dataCollect: true })
```

生效行为：默认值为 `true`。设置为 `false` 时，SDK 仍会完成初始化并接管生命周期，但事件不会进入上报队列；关闭期间 SDK 也不会读取业务传入的事件属性。恢复为 `true` 时，SDK 会按生命周期建立新会话，有当前页时补发 `PAGE`。

隐私合规相关内容（隐私协议的实现）请[参考文档](/knowledge/compliance/compliance)。

### idMapping

多用户身份上报，默认不开启。需要上报 userKey 时开启，开启后调用设置登录用户 ID 接口时设置 userKey，服务端调用用户身份融合 API 时，可将不同的登录用户 ID 识别为同一用户。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  idMapping: true,
  ...其他配置项,
})

gdp('setUserId', 'user-1001', 'phone-hash-or-union-key')
```

生效行为：默认值为 `false`。设置为 `false` 时，`gdp('setUserId', userId, userKey)` 中的 `userKey` 被忽略。设置为 `true` 时，SDK 接收并持久化 `userKey`，事件中携带 `userKey` 字段。

**<font color="#FC5F3A">注意：</font>**

**1、`userKey` 类型需提前在平台数据中心规划并添加，误设会影响数据质量。**

**2、`idMapping` 不能通过动态修改配置接口在运行时开启。**

### forceLogin

默认情况下，SDK 会自动生成访问用户 ID 来标识访问用户。如您希望使用业务侧获取的稳定标识（如账号体系 ID、第三方登录返回的 openId / unionId）作为访问用户 ID，可以通过指定 `forceLogin: true` 来打开强制登录模式。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  forceLogin: true,
  ...其他配置项,
})
```

强制登录模式适用于应用启动后需要先完成异步流程、获取到稳定标识后才开始上报的场景，例如启动时调用第三方登录获取 openId 或 unionId 的应用，或先进入登录页、登录成功后才有可用设备身份的应用。开启此模式并调用 `identify` 上报获取到的标识，会将上报的 ID 作为访问用户 ID，有助于访问用户数据关联性分析。

设置 `forceLogin` 为 `true` 后，SDK 会暂停上报数据，待业务获取到标识后，调用 `identify` 方法后开始数据上报。**调用 `identify` 会替换事件数据的 deviceId 为设定值（一般是 openId、unionId 或其他业务标识），包括调用 `identify` 之前触发的事件。**

```ts
gdp('identify', 'openId-or-unionId')
```

生效行为：默认值为 `false`。设置为 `true` 时，事件先进入积压队列，不立刻发送；调用 `identify` 成功后，SDK 将标识写为设备 ID（包括积压事件的 `deviceId`），关闭 `forceLogin` 并补发积压事件。等待队列不设置长度上限，也不会因队列长度静默淘汰事件；业务应及时调用 `identify`，避免长时间积压占用内存。

**<font color="#FC5F3A">注意：</font>仅在确有稳定标识可用时使用此模式，开启后未调用 `identify` 会导致数据一直积压、没有数据上报。**

### debug

在开发时设置 `debug: true`，打开控制台即可看到实时采集的数据。注意正式上线时关闭它。

```ts
gdp('init', 'account-id', 'data-source-id', {
  uniVue: app,
  debug: true,
  ...其他配置项,
})
```

生效行为：默认值为 `false`。设置为 `true` 时，控制台输出 `[GrowingIO Debug]:` 前缀的操作标签与即将派发的协议事件数组；不会输出队列内部元数据，也不会改变隐私、重试或采集行为。

## 会话模型

- `deviceId` 首次生成后长期持久化；`sessionId` 在初始化时创建。
- 当会话过期（`sessionExpires`）后再次触发事件时，SDK 续期并切换新 session，同时补发 `VISIT`。
- 当 `forceLogin: true` 时，事件继续采集但暂不发送，直到 `identify()` 成功。
- `identify()` 成功后会把新的标识持久化为 `deviceId`，并补发之前积压的事件。
- 当 `setUserId()` 把登录用户从 A 切到 B 时，也会切换新 session，并在后续事件前补发新的 `VISIT`。
- 页面 `onShow` 是首屏和后续前台页面采集的主要触发点；自定义 `track` 也会重新检查 session，避免漏掉新的访问边界。
- `sessionExpires` 不支持运行时修改，过期策略由初始化配置决定。

## 离线与发送策略

- 事件按 SDK 内部策略自动上报，不提供手动 `flush()` 入口。
- App 运行期不设积压条数与总字节上限；单条事件不超过 512KiB，超限事件不入队。
- 离线事件持久化到宿主存储，冷启动后恢复；实际容量受宿主存储约束。
- 联网后每批最多发送 50 条、512KiB；除 413 外的发送失败会保留事件直到发送成功。
- 缓存按原事件时间保留 7 天，过期数据不再恢复。

## 验证初始化

调试阶段设置 `debug: true`，初始化成功后控制台会出现 SDK 初始化日志。随后进入页面、切换页面或调用自定义事件 API，可在控制台和网络请求中验证事件是否生成并上报：

```ts
gdp('track', 'integration_test', { source: 'manual' })
```

## 初始化检查

- `gdp('init', ...)` 在 `createSSRApp(App)` 后、`return { app }` 前调用。
- `accountId`、`dataSourceId`、`options.uniVue` 已传入且不为空。
- `gdp('registerPlugins', ...)` 必须在首次 `init` 之前调用；初始化后再注册会返回 `false`。
- 私有化环境已显式配置正确的 `serverUrl`；未配置时 SDK 使用默认采集地址。
- 开启 `forceLogin` 后，必须调用 `gdp('identify', ...)` 才能释放暂停的上报队列。
- 使用的 HBuilderX 已重新编译 HarmonyOS 目标，并完成一次真实上报验证。

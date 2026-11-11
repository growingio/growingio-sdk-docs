---
sidebar_position: 4
title: 数据采集 API
---

SDK 对外统一使用 `gdp(command, ...)` 命令式入口。`main.ts` 导入 SDK 根入口后，uni-app 页面可直接使用全局 `gdp`，也可以从 npm 包默认导入。

```ts
import gdp from 'gio-uniapp-sdk'
```

通过 `uni_modules` 集成时，请使用[模块导入路径](./integration.md)。

## 参数限制

### Object 参数限制

此限制适用于 `track` 和 `setUserAttributes` 的 `attributes` 对象。

- 属性名最多保留 100 个 Unicode 码点。
- 属性值支持字符串、布尔值、有限数字、有效的 `Date`、`null`、`undefined` 和由这些值组成的一维数组。SDK 将支持的值转成字符串，最多保留 1000 个 Unicode 码点。

### 上报参数说明

调用 埋点事件(`track`) 和 登录用户属性(`setUserAttributes`) 时：

1、一维数组的每一项先转换为字符串，再用 `||` 拼接。数组超过 100 项或含有不支持的值时，SDK 丢弃整个属性。

#### 示例

```ts
gdp('track', 'order', {
  name: ['cola', 'milk', 'juice'],
  // 上报时会自动转换为↓↓↓
  // name: 'cola||milk||juice'
})
```

2、如果属性值是嵌套对象或函数，SDK 无法解析，会直接丢弃该属性。因此需要提前把数据调整为简单类型。

3、有限数字和布尔值转为字符串，有效的 `Date` 转为 ISO 8601 字符串。非有限数值（如 `NaN`、`Infinity`）和无效日期会被丢弃。

4、`null` / `undefined` 会转为空字符串上报。

5、归一化后出现重名属性时，保留首个属性值，后续冲突项被丢弃。

## 回调方法

SDK 通过返回值表示是否接受调用。`true` 表示已接受，`false` 表示已拒绝。`getGioInfo` 返回 `string | null`。

**<font color="#FC5F3A">注意：</font>返回 true 时，仅表示SDK已接受对应调用，不保证对应事件触发并上报成功。**

除 `registerPlugins` 和 `init` 外，请在 `gdp('init', ...)` 返回 `true` 后调用 API。异步初始化期间，SDK 可暂存部分调用，`getGioInfo` 要等运行时就绪后才可能返回查询串。

通用失败条件：

| 条件 | 返回值 | 行为 |
| --- | --- | --- |
| SDK 未初始化 | `false`（`getGioInfo` 为 `null`） | 不执行对应 API。 |
| 命令名不存在 | `false` | 不执行对应 API。 |
| 参数未通过该命令的校验 | `false` | 各命令的校验条件见下文。 |

TS 类型说明：

- 根入口会自动声明全局 `gdp`，无需额外的 `.d.ts` 文件；默认导入和全局调用具有同一组严格的命令重载。
- 未知命令、错误参数个数、嵌套属性或非布尔 `dataCollect` 均会在编译期报错。
- 可从根入口按需导入 `GdpCommand`、`GioGdpInitOptions`、`GioUniVueApp`、`GioAttributes`、`GioPlugin`、`GioPluginRuntime` 等类型。

## 初始化接口(init)

### 1、初始化SDK(init)

校验配置并启动 SDK 初始化，启用基础自动采集。

```ts
gdp('init', 'YOUR_ACCOUNT_ID', 'YOUR_DATA_SOURCE_ID', {
  uniVue: app,
  serverUrl: 'https://napi.growingio.com',
  dataCollect: true,
})
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `accountId` | `string` | 是 | 账户 ID。 |
| `dataSourceId` | `string` | 是 | 数据源 ID。 |
| `options` | `GioGdpInitOptions` | 是 | 初始化配置对象，详见[初始化配置](./configuration.md)。 |

生效行为：

- 返回 `true` 表示配置已通过同步校验，SDK 已安装生命周期接入，并开始异步恢复运行状态。控制台输出“Gio uni-app SDK 初始化完成”时，运行时已就绪。
- 首次调用返回 `false` 时，初始化尚未启动。修正配置或宿主环境后可以重试。
- 初始化进行中或运行时已就绪时，重复调用会输出告警并返回 `false`。如果异步恢复失败，可以在修正问题后重新调用 `init`，SDK 会复用已安装的生命周期和插件。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| `accountId` / `dataSourceId` 不是有效的非空字符串 | `false` |
| `options` 不是对象 | `false` |
| `options.uniVue` 不是可安装 mixin 的 Vue 应用 | `false` |
| 宿主 `uni` 缺失必需 API（存储、网络、系统信息等） | `false` |
| SDK 正在初始化或运行时已就绪 | `false` |

## 功能接口

### 1、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点使用规范](/knowledge/basicknowledge/trackEventUse)

```ts
gdp('track', 'purchase_completed', {
  sku: 'sku-1001',
  price: 99,
  from_recommend: true,
})
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventName` | `string` | 是 | 事件名。以英文字母或下划线开头，只能包含英文字母、数字和下划线，长度不超过 100 个字符。 |
| `attributes` | `GioAttributes` | 否 | 事件属性。按通用属性归一规则处理。 |

生效行为：

- 返回 `true`：SDK 接受事件，事件类型为 `CUSTOM`；`true` 表示本地接纳或暂存，不代表服务端接收成功。
- 返回 `false`：事件不入队。
- 自定义事件沿用当前 App 会话。首个会话建立前，SDK 可暂存事件。
- `dataCollect: false` 时返回 `false`，且 SDK 不读取属性值。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 数据采集已关闭 | `false` |
| `eventName` 不是字符串或格式不合法 | `false` |

SDK 会丢弃无效属性。JavaScript 调用如果传入非对象的 `attributes`，SDK 会按未提供属性处理。事件仍可被接纳。

### 2、设置登录用户Id(setUserId)

当用户登录之后调用，设置登录用户ID。

:::info

- 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置 userKey，误设会影响数据质量。**同时在初始化 SDK 时设置 `idMapping` 为 `true`**。
- 传空字符串表示退出登录，等同调用 `clearUserId`。

:::

#### 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | `string` | 是 | 登录用户 ID，最多 1000 个 Unicode 码点。传空字符串时退出登录。 |
| `userKey` | `string \| null` | 否 | 平台配置的登录用户身份类型，最多 1000 个 Unicode 码点，默认不传。 |

```ts
gdp('setUserId', 'user-1001')
gdp('setUserId', 'user-1001', 'account') // account 为平台已配置的身份类型
```

生效行为：

- 返回 `true` 表示 SDK 已接受身份更新。执行时更新内存中的 `userId`，`idMapping: true` 时也更新 `userKey`，并尝试异步写入宿主存储。
- 首次登录和退出沿用当前会话。应用首次进入前台后，如果登录用户从 A 切换到 B，SDK 会建立新会话，采集开启时生成新的 `VISIT`。退出 A 再登录 B 也会触发该规则。
- 传入空字符串时，SDK 清除当前登录字段（等同 `clearUserId`），保留设备身份与内部最近登录身份。
- 请通过 SDK API 修改身份，避免直接写入 SDK 的存储键。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `userId` 不是字符串或超过长度限制 | `false` |
| `userKey` 不是字符串且不为 `null` / `undefined`，或字符串超过长度限制 | `false` |

### 3、设置访问用户Id(identify)

访问用户Id，又称为匿名用户Id/设备Id。在 uni-app 中，该方法用于 `forceLogin` 模式下为本次等待上传的事件分配设备身份，并释放暂停的上报队列。

:::info

- 初始化时需设置 [`forceLogin: true`](./configuration.md#forcelogin)。
- 每次应用运行期间仅可成功分配一次设备 ID。

:::

#### 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | `string \| number` | 是 | 标识值。接受有效的非空字符串或有限正数，字符串最多 1000 个 Unicode 码点。 |

```ts
gdp('identify', 'assignment-id-or-openid')
```

生效行为：

- 返回 `true` 表示 SDK 已接受分配请求。执行成功后更新设备 ID 和本次运行中等待上报的事件，并恢复发送。冷启动恢复的历史事件保留原设备 ID。
- 分配失败时，设备 ID 与队列保持原状，可修正问题后重试。
- 初始化恢复期间，调用可能先暂存，待运行时就绪后执行。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `forceLogin` 不是 `true`（本次运行期未开启等待） | `false` |
| 本次运行期已成功调用过 `identify` | `false` |
| `deviceId` 不是 `string` 或 `number` | `false` |
| `deviceId` 为 `number` 时不是有限正数 | `false` |
| `deviceId` 为 `string` 时为空白，或为 `-`、`null`、`undefined` 等字面量字符串 | `false` |
| `deviceId` 超过 1000 个 Unicode 码点或包含非法 Unicode 代理项 | `false` |
| 更换设备 ID 后，事件或队列超过容量限制 | `false` |

### 4、获取身份查询串(getGioInfo)

获取用于 App 和 H5 身份打通的查询串。请将查询串传给受信任的 H5 页面。在 H5 端初始化 WebJS SDK 前注册 `gioEmbeddedAdapter`，初始化时使用与 App 一致的 `accountId`，并将 `appId` 设置为鸿蒙应用的包名。[WebJS 插件集成说明](/docs/webjs/plugins/embeddedAdapter)

```ts
function buildH5Url(h5Url: string): string | null {
  const gioInfo = gdp('getGioInfo')
  if (gioInfo === null) return null

  const hashIndex = h5Url.indexOf('#')
  const baseUrl = hashIndex < 0 ? h5Url : h5Url.slice(0, hashIndex)
  const fragment = hashIndex < 0 ? '' : h5Url.slice(hashIndex)
  const queryIndex = baseUrl.indexOf('?')
  let separator = '?'
  if (queryIndex >= 0) {
    separator = queryIndex === baseUrl.length - 1 || baseUrl.endsWith('&') ? '' : '&'
  }

  return `${baseUrl}${separator}${gioInfo}${fragment}`
}

const webViewUrl = buildH5Url('https://h5.example.com/?source=app#/home')
```

生效行为：

- SDK 尚未就绪或应用包名不可用时返回 `null`。采集开启时，如果会话尚未建立或仍在等待 `identify`，也返回 `null`。
- 采集开启且身份就绪时，返回包含当前身份和会话的查询串。
- `dataCollect: false` 时，查询串只包含应用、账户、数据源及关闭采集的标记。
- H5 SDK 初始化时读取 URL 中的采集状态。App 后续调整采集开关时，已打开的 H5 页面需要同步处理自己的采集开关。

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```ts
gdp('clearUserId')
```

生效行为：

- 返回 `true` 表示 SDK 已接受清除请求。执行时清除当前 `userId` 和 `userKey`，保留设备身份。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |

### 6、用户属性(setUserAttributes)

用于记录当前登录用户的属性。请先调用 `setUserId` 设置登录用户 ID，再提交属性。SDK 也可接受未设置登录用户 ID 时的调用，此时事件不携带 `userId`。

```ts
gdp('setUserId', 'user-1001')
gdp('setUserAttributes', {
  vip: true,
  level: 'gold',
})
```

:::info

详细使用示例：[用户属性事件示例](/knowledge/basicknowledge/trackEventUse#用户属性事件示例)

:::

#### 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `attributes` | `GioAttributes` | 是 | 用户属性。按 [Object 参数限制](#object-参数限制) 处理。 |

生效行为：

- 返回 `true` 表示 SDK 已接受调用，可生成或暂存 `LOGIN_USER_ATTRIBUTES` 事件。
- 返回 `false`：用户属性事件不入队。
- 属性归一后为空对象时事件不入队。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 数据采集已关闭 | `false` |
| 已建立首个 App 会话，且 `attributes` 不是对象或属性归一后为空 | `false` |

## 动态修改配置接口(setOptions)

### 1、开启/关闭数据采集(dataCollect)

默认开启数据采集。动态设置为 `false` 后，SDK 停止生成新的行为事件，之前已入队或正在发送的事件仍可能上报。恢复采集时，SDK 按应用生命周期建立新的会话。

关闭采集时调用以下命令。

```ts
gdp('setOptions', { dataCollect: false })
```

恢复采集时调用以下命令。

```ts
gdp('setOptions', { dataCollect: true })
```

可配置项：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dataCollect` | `boolean` | 是 | 动态开启或关闭数据采集。 |

生效行为：

- 返回 `true`：配置被接受。
- 参数对象必须且只能包含 `dataCollect` 一个布尔字段。
- `dataCollect` 从 `false` 恢复为 `true` 时，SDK 按生命周期建立新会话并生成 `VISIT`，有当前页时生成 `PAGE`。
- 传入值与当前值相同时返回 `true`，不重复更新状态。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 参数不是对象 | `false` |
| `dataCollect` 缺失或不是 `boolean` | `false` |
| 参数包含 `dataCollect` 以外的字段 | `false` |

### 2、设置地理位置(setLocation)

设置后续事件使用的地理位置，写入事件的 `latitude` / `longitude` 字段。

```ts
gdp('setLocation', 31.2304, 121.4737)
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `latitude` | `number` | 是 | 纬度，范围 `-90` 到 `90`。 |
| `longitude` | `number` | 是 | 经度，范围 `-180` 到 `180`。 |

生效行为：

- 返回 `true`：SDK 将经纬度写入后续事件上下文；合法零值保留。
- SDK 不主动申请定位权限，不发起定位；位置完全由业务传入。
- 位置只保存在运行期内存中，不做持久化；应用重启后需要业务重新设置。
- 设置失败时不覆盖上一次已设置的位置。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `latitude` 或 `longitude` 不是有限数字 | `false` |
| `latitude` 不在 `-90` 到 `90` 范围内 | `false` |
| `longitude` 不在 `-180` 到 `180` 范围内 | `false` |

### 3、清除地理位置(clearLocation)

清除已设置的地理位置。

```ts
gdp('clearLocation')
```

生效行为：

- 返回 `true`：后续事件不再携带 `latitude` / `longitude` 字段；不修改宿主定位或持久记录。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |

## 插件接口

### 1、注册插件(registerPlugins)

注册插件用于扩展 SDK 功能。默认情况下基础 SDK 仅包含埋点与自动采集能力，如需额外扩展功能请参考[功能插件](./plugins/index.md)。**插件必须在首次 `gdp('init', ...)` 之前注册。**

```ts
gdp('registerPlugins', [{ name: 'gioEventAutoTracking' }])
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `plugins` | `readonly GioPluginRegistration[]` | 是 | 插件数组。 |
| `plugins[].name` | `string` | 是 | 插件名。当前可用插件见[功能插件](./plugins/index.md)。 |
| `plugins[].install` | `(growingio: GioPluginRuntime) => void` | 客户插件必填 | 客户插件安装函数。内置插件只需按其文档传入名称和所需配置。 |

生效行为：

- 返回 `true`：全部插件校验通过并暂存，等待首次通过同步校验的 `init` 调用。
- 返回 `false`：整批注册失败。
- 首次 `init` 通过同步校验并安装生命周期后，SDK 按注册顺序调用客户插件的 `install`。此时运行时可能仍在异步恢复。单个客户插件的 `install` 抛错时，SDK 会输出告警并继续安装其余客户插件。
- 客户插件在 `install(growingio)` 中收到内部实例 `GioPluginRuntime`；页面代码仍只能调用 `gdp()`。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 已接受首次 `init` 调用 | `false` |
| `plugins` 不是数组 | `false` |
| 存在非法插件项（缺 `name` 或客户插件缺 `install`） | `false` |
| 插件名重复 | `false` |

## 自动采集事件

| 事件 | 触发时机 | 说明 |
| --- | --- | --- |
| `VISIT` | App 冷启动进入前台、后台超时后回到前台、切换登录用户或恢复采集 | 携带会话和身份信息，页面路由及查询参数见 `PAGE` |
| `PAGE` | 页面 `onShow` | 携带页面路由 `path`，有对应数据时包含 `query`、`title` 和上一页 `referralPage` |
| `APP_CLOSED` | 应用进入后台（`onHide`）时尽力上报 | 携带 `appState: 'BACKGROUND'`，有当前页面信息时复用其 `path` 和 `query`。进程被系统直接终止时事件可能无法送达 |

自动事件与 `track` 自定义事件共用统一的请求体结构，业务属性归一化后映射到事件的 `attributes` 字段。

## 返回值与排查

返回值检查：

```ts
const ok = gdp('track', 'pay_success', { order_id: 'order-1001' })

if (ok !== true) {
  console.warn('GrowingIO track 调用未被 SDK 接受')
}
```

常见返回 `false` 的情况：

- SDK 尚未初始化或初始化失败。
- 初始化参数缺少必填项。
- API 参数类型不符合要求。
- 事件名不符合校验规则。
- `setOptions` 参数包含 `dataCollect` 以外的字段。
- `registerPlugins` 在初始化之后调用或存在重复插件名。

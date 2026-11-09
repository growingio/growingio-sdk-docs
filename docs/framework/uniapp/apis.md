---
sidebar_position: 4
title: 数据采集 API
---

SDK 对外统一使用 `gdp(command, ...)` 命令式入口。`main.ts` 导入 SDK 根入口后，uni-app 页面可直接使用由 SDK 声明的全局 `gdp`，也可以默认导入：

```ts
import gdp from 'gio-uniapp-autotracker'
```

## 参数限制

### Object 参数限制

文档中指定参数值为 **Object 类型**（`track` 的 `attributes`、`setUserAttributes` 的 `attributes`）时，请注意以下限制：**(非指定类型的属性值会被丢弃；String / boolean 超长会被截断；数组超过 100 项时整条属性被丢弃)**

**`key:` String，length ≤ 100（按 Unicode 码点截断）；**

**`value:` String / boolean 时 length ≤ 1000（超长截断）；Array 时 length ≤ 100（超限丢弃该属性）；**

### 上报参数说明

调用 埋点事件(`track`) 和 登录用户属性(`setUserAttributes`) 时：

1、如果属性值是由字符串组成的一维数组，上报时会自动转换为 `Array.join('||')` 的字符串，便于服务端进行拆分解析。拼接后的字符串总长度大于 1000 时会被截断；数组长度大于 100 时该属性会被丢弃。因此需要控制数组中总体元素数量和总体字符串长度。

#### 示例

```ts
gdp('track', 'order', {
  name: ['cola', 'milk', 'juice'],
  // 上报时会自动转换为↓↓↓
  // name: 'cola||milk||juice'
})
```

2、如果属性值是嵌套对象或函数，SDK 无法解析，会直接丢弃该属性。因此需要提前把数据调整为简单类型。

3、`number` 中的 `NaN`、`Infinity` 等非有限数值，以及无效的 `Date`，都会被丢弃，不会上报。

4、`null` / `undefined` 会转为空字符串上报。

5、归一化后出现重名属性时，保留首个属性值，后续冲突项被丢弃。

## 回调方法

除少数与返回值、参数相关的接口外，SDK 的 API 不提供回调，统一通过**返回值**确认执行结果：返回 `true` 表示 SDK 接受本次调用，返回 `false` 表示 SDK 拒绝本次调用；`getGioInfo` 返回 `string | null`。

**<font color="#FC5F3A">注意：</font>返回 true 时，仅表示SDK已接受对应调用，不保证对应事件触发并上报成功。**

调用时机：除 `registerPlugins` 和 `init` 外，所有 API 都必须在 `gdp('init', ...)` 返回 `true` 后调用。

通用失败条件：

| 条件 | 返回值 | 行为 |
| --- | --- | --- |
| SDK 未初始化 | `false`（`getGioInfo` 为 `null`） | 不执行对应 API。 |
| 命令名不存在 | `false` | 不执行对应 API。 |
| 参数类型不符合 API 要求 | `false` | 不执行对应 API。 |

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

- 返回 `true`：初始化成功，基础自动采集已启用，`registerPlugins` 暂存的插件已安装。
- 返回 `false`：初始化失败，SDK 不采集事件。
- `init` 只允许成功调用一次；重复调用输出告警并返回 `false`，保留首次实例与配置。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| `accountId` / `dataSourceId` 不是字符串 | `false` |
| `options` 不是对象 | `false` |
| `options.uniVue` 不是可安装 mixin 的 Vue 应用 | `false` |
| 宿主 `uni` 缺失必需 API（存储、网络、系统信息等） | `false` |
| SDK 已初始化 | `false` |

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
| `eventName` | `string` | 是 | 事件名。以字母或下划线开头，只能包含字母、数字和下划线，长度不超过 100 个字符。 |
| `attributes` | `GioAttributes` | 否 | 事件属性。按通用属性归一规则处理。 |

生效行为：

- 返回 `true`：SDK 接受事件，事件类型为 `CUSTOM`；`true` 表示本地接纳或暂存，不代表服务端接收成功。
- 返回 `false`：事件不入队。
- 事件发送前会重新检查 session，必要时先补发当前 session 的 `VISIT`。
- `dataCollect: false` 时，API 仍可返回 `true`，但事件不会进入上报队列，且 SDK 不会读取属性值。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `eventName` 不是字符串或格式不合法 | `false` |

属性值不符合校验规则（如 `NaN`、无效 `Date`、嵌套对象、超过 100 项的数组）时，SDK 丢弃该属性但事件仍被接纳，返回 `true`。

### 2、设置登录用户Id(setUserId)

当用户登录之后调用，设置登录用户ID。

:::info

- 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置 userKey，误设会影响数据质量。**同时在初始化 SDK 时设置 `idMapping` 为 `true`**。
- 传空字符串表示退出登录，等同调用 `clearUserId`。

:::

#### 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | `string` | 是 | 登录用户 ID。长度需大于 0 且不超过 1000，超过长度限制时调用会被拒绝。 |
| `userKey` | `string \| null` | 否 | 适用于ID-MAPPING，可设置 userId 的类型，默认不传。 |

```ts
gdp('setUserId', 'user-1001')
gdp('setUserId', 'user-1001', 'union-key-1001')
```

生效行为：

- 返回 `true`：SDK 更新并持久化 `userId`；`idMapping: true` 时同时保存 `userKey`。
- 新 `userId` 与当前登录身份不同时，SDK 切换新 session，并在后续事件前补发新的 `VISIT`。
- 传入空字符串时，SDK 清除当前登录字段（等同 `clearUserId`），保留设备身份与内部最近登录身份。
- 通过本 API 修改身份时，持久化存储与运行期内存缓存会同步更新。不要绕过 SDK 直接修改身份存储 key。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `userId` 不是字符串或超过长度限制 | `false` |
| `userKey` 不是字符串且不为 `null` / `undefined` | `false` |

### 3、设置访问用户Id(identify)

访问用户Id，又称为匿名用户Id/设备Id。在 uni-app 中，该方法用于 `forceLogin` 模式下为本次等待上传的事件分配设备身份，并释放暂停的上报队列。

:::info

**1）若使用此接口需要在初始化时将 `forceLogin` 设置为 `true`。[参考文档](./configuration.md#forcelogin)**
**2）该方法仅可合法地调用一次，多次调用无效。**

:::

#### 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `deviceId` | `string \| number` | 是 | 标识值。不能为空或非法值，最长保留 1000 个字符。 |

```ts
gdp('identify', 'assignment-id-or-openid')
```

生效行为：

- 返回 `true`：SDK 将该标识写为设备 ID（包括积压事件的 `deviceId`），关闭 `forceLogin`，并补发积压事件。
- 返回 `false`：不修改设备 ID，不释放队列。
- 每个运行期只允许成功调用一次；初始化失败恢复期间调用会被暂存，待状态就绪后补执行。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `forceLogin` 不是 `true`（本次运行期未开启等待） | `false` |
| 本次运行期已成功调用过 `identify` | `false` |
| `deviceId` 不是 `string` 或 `number` | `false` |
| `deviceId` 为 `number` 时不是有限正数 | `false` |
| `deviceId` 为 `string` 时为空白，或为 `-`、`null`、`undefined` 等字面量字符串 | `false` |
| `deviceId` 超过 1000 个字符 | `false` |

### 4、获取身份查询串(getGioInfo)

获取当前身份查询串，用于拼入受信任的 H5 URL，实现 App 与 H5 页面的身份打通。

```ts
const gioInfo = gdp('getGioInfo')
if (gioInfo !== null) {
  h5Url = `${h5Url}?${gioInfo}`
}
```

生效行为：

- 返回 `string | null`：已初始化且身份就绪时返回查询串。
- 开启 `dataCollect` 且正在等待 `identify` 分配设备身份时，不提供身份快照，返回 `null`。
- `dataCollect: false` 时仍会返回身份查询串，但其中采集状态标记为关闭。

### 5、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

```ts
gdp('clearUserId')
```

生效行为：

- 返回 `true`：SDK 清除已保存的 `userId` 和 `userKey`；设备身份不会被清除。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |

### 6、用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。

```ts
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

- 返回 `true`：SDK 生成事件类型 `LOGIN_USER_ATTRIBUTES` 的用户属性事件。
- 返回 `false`：用户属性事件不入队。
- 属性归一后为空对象时事件不入队。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `attributes` 不是对象 | `false` |
| 属性归一后为空 | `false` |

## 动态修改配置接口(setOptions)

### 1、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK 将不会采集和上报事件；由关闭修改为开启时，视为一次新的访问，自动补发 `VISIT`，有当前页时补发 `PAGE`。

```ts
gdp('setOptions', { dataCollect: true | false })
```

可配置项：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dataCollect` | `boolean` | 是 | 动态开启或关闭数据采集。 |

生效行为：

- 返回 `true`：配置被接受。
- 参数对象必须且只能包含 `dataCollect` 一个布尔字段。
- `dataCollect` 从 `false` 恢复为 `true` 时，SDK 按生命周期建立新会话，有当前页时补发 `PAGE`。
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
| `plugins[].install` | `(growingio: GioPluginRuntime) => void` | 否 | 客户插件安装函数，仅在显式注册的客户插件上提供。 |

生效行为：

- 返回 `true`：全部插件校验通过并暂存，等待首次初始化成功后安装。
- 返回 `false`：整批注册失败。
- 首次有效初始化后，SDK 按注册顺序安装插件；单个客户插件 `install` 抛错不会阻止其他插件安装，仅输出告警。
- 客户插件在 `install(growingio)` 中收到内部实例 `GioPluginRuntime`；页面代码仍只能调用 `gdp()`。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 已初始化 | `false` |
| `plugins` 不是数组 | `false` |
| 存在非法插件项（缺 `name` 或客户插件缺 `install`） | `false` |
| 插件名重复 | `false` |

## 自动采集事件

| 事件 | 触发时机 | 说明 |
| --- | --- | --- |
| `VISIT` | 应用首次创建 session、session 过期重建、用户身份切换或恢复采集 | 携带当前页面上下文或基础身份信息 |
| `PAGE` | 页面 `onShow` | 携带页面路由 `path`、`query`、`title` 和上一页 `referralPage` |
| `APP_CLOSED` | 应用进入后台（`onHide`）时尽力上报 | 携带 `appState: 'BACKGROUND'`，复用当前页面的 `path` 和 `query`；进程被系统直接终止时事件可能无法送达 |

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

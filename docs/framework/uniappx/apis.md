---
sidebar_position: 4
title: 数据采集 API
---

SDK 对外统一使用 `gdp(command, ...)` 命令式入口：

```js
import { gdp } from '@/uni_modules/gio-uniappx-autotracker/gdp.uts'
```

## 通用约定

调用时机：除 `init` 外，所有 API 都必须在 `gdp('init', options)` 返回 `true` 后调用。

返回值：除回调参数外，公开 API 返回 `boolean`。`true` 表示 SDK 接受本次调用；`false` 表示 SDK 拒绝本次调用。

通用失败条件：

| 条件 | 返回值 | 行为 |
| --- | --- | --- |
| SDK 未初始化 | `false` | 不执行对应 API。 |
| 命令名不存在 | `false` | 打印错误日志。 |
| 参数类型不符合 API 要求 | `false` | 打印错误日志。 |
| 所在平台能力不可用 | `false` | 打印告警或错误日志。 |

属性归一规则：

| 输入 | 处理方式 |
| --- | --- |
| 属性名 | 截断到 100 个字符。 |
| `string` / `number` / `boolean` | 转为字符串后保留，最长 1000 个字符。 |
| 数组 | 最多取前 100 项，忽略 `null` 项，各项转字符串后用 `||` 拼接，最终最长 1000 个字符。 |
| `null` | 忽略该属性。 |
| 对象 / 函数 | 忽略该属性。 |
| `&&sendTo` | 忽略该属性。 |

## init

初始化 SDK，并启用基础自动采集。

```js
gdp('init', {
  app: app,
  projectId: 'YOUR_PROJECT_ID',
  dataSourceId: 'YOUR_DATA_SOURCE_ID',
  appId: 'YOUR_APP_ID',
  serverUrl: 'https://napi.growingio.com',
  dataCollect: true
})
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `options` | `UTSJSONObject` | 是 | 初始化配置对象，详见 [初始化配置](./configuration.md)。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：初始化成功，基础自动采集已启用。
- 返回 `false`：初始化失败，SDK 不采集事件。
- `init` 只允许成功调用一次；重复调用返回 `false`。
- `app` 会在 JS 层用于安装生命周期，传入 native 层前会被置为 `null`。

失败条件：

| 条件 | 返回值 | 行为 |
| --- | --- | --- |
| `options` 不是对象 | `false` | 打印初始化参数错误。 |
| `options.app` 为空 | `false` | 不安装生命周期。 |
| `projectId` / `dataSourceId` / `appId` 归一化后为空 | `false` | 初始化失败。 |
| SDK 已初始化 | `false` | 不刷新配置，不重装生命周期。 |

## track

发送自定义事件。

```js
gdp('track', 'buy_click', {
  product_id: 'sku-1001',
  price: 99,
  from_recommend: true
} as UTSJSONObject)
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `eventName` | `string` | 是 | 事件名。只能包含数字、字母和下划线，不能以数字开头，长度不超过 100 个字符。 |
| `properties` | `UTSJSONObject \| null` | 否 | 事件属性。按通用属性归一规则处理。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：SDK 接受事件，事件类型为 `CUSTOM`。
- 返回 `false`：事件不入队。
- 事件发送前会尝试补发当前 session 的 `VISIT`。
- `dataCollect: false` 时，API 仍可返回 `true`，但事件不会进入上报队列。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `eventName` 不是字符串 | `false` |
| `eventName` 格式不合法 | `false` |
| `properties` 不是对象且不为 `null` | `false` |

## setUserId

设置登录用户 ID。

```js
gdp('setUserId', 'user-1001')
```

设置登录用户 ID 和用户映射 Key：

:::warning 前置条件

当 `setUserId` 传入第二个参数 `userKey` 时，必须在首次 `gdp('init', ...)` 中设置 `idMapping: true`。`idMapping` 不能通过 `setOptions` 在运行时开启；未开启时 SDK 会忽略 `userKey` 并打印告警。

:::

```js
gdp('setUserId', 'user-1001', 'union-key-1001')
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `userId` | `string` | 是 | 登录用户 ID。不能为空，不能是 `-`、`null`、`undefined`。最长保留 1000 个字符。 |
| `userKey` | `string \| null` | 否 | 用户映射 Key。传入时必须在初始化配置 `idMapping: true`，最长保留 1000 个字符。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：SDK 保存 `userId`。
- `idMapping: true` 时，SDK 保存 `userKey`。
- `idMapping: false` 时，SDK 忽略非空 `userKey` 并打印告警。
- 新 `userId` 与当前登录身份不同时，SDK 更新用户身份，并在需要时续期 session。

身份可见性：Web 在每次构建事件时重新读取存储中的 `userId` 和 `userKey`，可感知同域、相同项目及兼容存储配置下其他标签页或 SDK 实例的身份更新；App（Android、iOS、HarmonyOS）和微信小程序使用运行期内存缓存，通过本 API 修改时会同步更新存储和缓存。不要绕过 SDK 直接修改身份存储 key。完整规则见[身份存储与跨端一致性](./configuration.md#身份存储与跨端一致性)。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `userId` 不是字符串 | `false` |
| `userId` 为空、空白字符串、`-`、`null`、`undefined` | `false` |
| `userKey` 不是字符串且不为 `null` | `false` |

## clearUserId

清除登录用户身份。

```js
gdp('clearUserId')
```

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：SDK 清除已保存的 `userId` 和 `userKey`。
- 设备 ID 不会被清除。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |

## identify

在 `forceLogin` 模式下设置设备或登录前分配标识，并释放暂停的上报队列。

```js
gdp('identify', 'openid-or-unionid')
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `assignmentId` | `string \| number` | 是 | 标识值。不能为空，不能是 `0`、`-`、`null`、`undefined`。最长保留 1000 个字符。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效条件：初始化配置为 `forceLogin: true`。

生效行为：

- 返回 `true`：SDK 将 `assignmentId` 写为设备 ID，设置 `forceLogin` 为 `false`，释放暂停的上报队列，并触发 flush。
- 返回 `false`：不修改设备 ID，不释放队列。
- 等待队列不设置长度上限，也不会因队列长度静默淘汰事件；业务应及时调用 `identify`，避免长时间积压占用内存。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `forceLogin` 不是 `true` | `false` |
| 已经成功调用过 `identify` 后再次调用 | `false` |
| `assignmentId` 为空、`0`、`-`、`null`、`undefined` | `false` |
| `assignmentId` 不是 `string` 或 `number` | `false` |

## setUserAttributes

上报登录用户属性事件。

```js
gdp('setUserAttributes', {
  level: 'gold',
  age: 28
} as UTSJSONObject)
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `attributes` | `UTSJSONObject` | 是 | 用户属性。按通用属性归一规则处理。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：SDK 生成事件类型 `LOGIN_USER_ATTRIBUTES`，事件名为 `setUserAttributes`。
- 返回 `false`：用户属性事件不入队。
- 事件发送前会尝试补发当前 session 的 `VISIT`。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `attributes` 不是对象且不为 `null` | `false` |
| `attributes` 为 `null` | `false` |
| 属性归一后为空对象 | `false` |

## setOptions

运行时修改 SDK 配置。

```js
gdp('setOptions', {
  dataCollect: false
} as UTSJSONObject)
```

可配置项：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `dataCollect` | `boolean` | 是 | 动态开启或关闭数据采集。 |

不可配置项：`setOptions` 不支持修改 `projectId`、`dataSourceId`、`serverUrl`、`debug`、`forceLogin`、`useUnified`、`idMapping` 等初始化配置。

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：配置被接受。
- `dataCollect` 从 `false` 改为 `true` 时，SDK 会续期 session。
- 传入值与当前 `dataCollect` 相同时，返回 `true`，不重复更新状态。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 参数不是对象 | `false` |
| `dataCollect` 缺失或不是 `boolean` | `false` |

## setLocation

设置地理位置。

```js
gdp('setLocation', 31.2304, 121.4737)
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `latitude` | `number` | 是 | 纬度，范围 `-90` 到 `90`。 |
| `longitude` | `number` | 是 | 经度，范围 `-180` 到 `180`。 |

适用平台：

| 平台 | 状态 | 行为 |
| --- | --- | --- |
| Android App | 可用 | 记录业务传入的经纬度。 |
| iOS App | 可用 | 记录业务传入的经纬度。 |
| HarmonyOS App | 可用 | 记录业务传入的经纬度。 |
| 微信小程序 | 可用 | 记录业务传入的经纬度。 |
| Web | 不可用 | 返回 `false` 并打印告警。 |

生效行为：

- 返回 `true`：SDK 将经纬度写入后续事件上下文。
- SDK 不主动申请定位权限。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 平台能力不可用 | `false` |
| `latitude` 或 `longitude` 不是数字 | `false` |
| `latitude` 不在 `-90` 到 `90` 范围内 | `false` |
| `longitude` 不在 `-180` 到 `180` 范围内 | `false` |

## clearLocation

清除已设置的地理位置。

```js
gdp('clearLocation')
```

适用平台：

| 平台 | 状态 | 行为 |
| --- | --- | --- |
| Android App | 可用 | 清除已设置的经纬度。 |
| iOS App | 可用 | 清除已设置的经纬度。 |
| HarmonyOS App | 可用 | 清除已设置的经纬度。 |
| 微信小程序 | 可用 | 清除已设置的经纬度。 |
| Web | 不可用 | 返回 `false` 并打印告警。 |

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| 平台能力不可用 | `false` |

## registerPlugins

注册功能插件。

```js
gdp('registerPlugins', [
  {
    name: 'gioABTest',
    options: {
      abServerUrl: 'https://ab.growingio.com'
    } as UTSJSONObject
  }
] as Array<UTSJSONObject>)
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `plugins` | `Array<UTSJSONObject>` | 是 | 插件数组。 |
| `plugins[].name` | `string` | 是 | 插件名。当前可用插件见 [功能插件](./plugins/index.md)。 |
| `plugins[].options` | `UTSJSONObject \| null` | 否 | 插件配置。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效行为：

- 返回 `true`：至少一个可用插件注册成功。
- 返回 `false`：没有任何可用插件注册成功。
- 无 `name` 或 `name` 为空的插件项会被忽略。
- 未识别的插件名会被忽略。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `plugins` 不是数组 | `false` |

## getABTest

获取 ABTest 指定实验层变量结果。

```js
gdp('getABTest', 'layer-1001', (result : any) => {
  const raw = result as UTSJSONObject
  const variables = raw.getJSON('variables')
  console.log('variables', variables)
})
```

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `layerId` | `string \| number` | 是 | 实验层 ID。 |
| `callback` | `(result : any) => void` | 否 | 结果回调。 |

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

生效条件：已通过 `gdp('registerPlugins', [{ name: 'gioABTest' }])` 注册 `gioABTest`。

生效行为：

- 返回 `true`：SDK 接受本次获取请求，结果通过 `callback` 返回。
- 返回 `false`：SDK 不发起 ABTest 获取流程。
- `callback` 不是函数时，SDK 仍可执行请求，但不会回调业务。
- 插件未注册时，如果传入了 `callback`，SDK 会以空对象回调。

失败条件：

| 条件 | 返回值 |
| --- | --- |
| SDK 未初始化 | `false` |
| `gioABTest` 未注册 | `false` |
| `layerId` 为空或数字值小于等于 `0` | `true`，回调空对象 |

结果字段和插件配置见 [ABTest](./plugins/abtest.md)。

## 返回值与排查

返回值检查：

```js
const ok = gdp('track', 'pay_success', {
  order_id: 'order-1001'
} as UTSJSONObject)

if (ok != true) {
  console.warn('GrowingIO track 调用未被 SDK 接受')
}
```

常见返回 `false` 的情况：

- SDK 尚未初始化。
- 初始化参数缺少必填项。
- API 参数类型不符合要求。
- API 参数值不符合校验规则。
- 所在平台能力不可用。
- 插件未注册但调用插件 API。

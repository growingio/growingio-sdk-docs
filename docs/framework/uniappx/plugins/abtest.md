---
sidebar_position: 3
title: ABTest
---

`gioABTest` 获取指定实验层的变量结果。SDK 会缓存结果并在实验策略发生变化时自动上报 `$exp_hit`，业务只需要在初始化完成后注册插件并通过 `getABTest` 读取变量。

适用平台：Web、Android App、iOS App、HarmonyOS App、微信小程序。

## 注册插件

```js
gdp('registerPlugins', [
  {
    name: 'gioABTest',
    options: {
      abServerUrl: 'https://ab.growingio.com',
      requestInterval: 5,
      requestTimeout: 1000
    } as UTSJSONObject
  }
] as Array<UTSJSONObject>)
```

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `abServerUrl` | `string \| null` | `https://ab.growingio.com` | ABTest 服务地址。SDK 会拼接实验层变量接口路径。 |
| `requestInterval` | `number \| null` | `5` | 同一实验层的请求间隔，单位为分钟；允许范围为 `0` 到 `1440`。 |
| `requestTimeout` | `number \| null` | `1000` | 单次请求超时，单位为毫秒；允许范围为 `100` 到 `5000`。 |

没有传入或超出范围的配置会回退到默认值。

## 获取实验结果

```js
gdp('getABTest', 'layer-1001', (result : any) => {
  const raw = result as UTSJSONObject
  const variables = raw.getJSON('variables')
  const buttonColor = variables != null
    ? variables.getString('buttonColor', 'blue')
    : 'blue'
  console.log('buttonColor', buttonColor)
})
```

`layerId` 可以是非空字符串或大于 `0` 的数字。调用前必须先注册 `gioABTest`；未注册或 SDK 尚未初始化时，`gdp('getABTest', ...)` 返回 `false`。无效实验层 ID 会回调空对象，但命令本身已被 SDK 接受。

回调结果包含：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `layerId` | `string` | 实验层 ID。 |
| `strategyId` | `string` | 策略 ID。 |
| `experimentId` | `string` | 实验 ID。 |
| `layerName` | `string \| null` | 实验层名称。 |
| `experimentName` | `string \| null` | 实验名称。 |
| `strategyName` | `string \| null` | 策略名称。 |
| `variables` | `UTSJSONObject \| null` | 实验变量。 |

## 缓存与失败行为

SDK 按项目、设备和实验层缓存结果，缓存会在下一日零点失效；同一实验层在请求间隔内直接回调缓存。服务端成功返回且实验策略或变量相对缓存发生变化时，SDK 自动采集一次 `$exp_hit`。

- HTTP `4xx`/`5xx`、请求超时、网络重试耗尽时，优先回调上一次缓存结果；首次请求没有缓存时为空对象。
- 服务端返回业务失败码时回调空对象。
- 网络错误最多额外重试两次；超时不会写入请求间隔标记，下一次调用仍可发起请求。

业务应始终给变量提供默认值，避免实验结果为空或网络暂时不可用时影响页面功能。

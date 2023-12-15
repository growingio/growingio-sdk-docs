---
sidebar_position: 3
title: 数据采集API
---

### 初始化是否成功

`static isInitializedSuccessfully(): boolean`

返回是否初始化成功

```typescript
let success = GrowingAnalytics.isInitializedSuccessfully()
```

### 数据采集开关

`static setDataCollectionEnabled(enabled: boolean)`

打开或关闭数据采集

```typescript
GrowingAnalytics.setDataCollectionEnabled(true)
```

### 设置登录用户 ID

`static setLoginUserId(userId: string, userKey: string = '')`

当用户登录之后调用，设置登录用户 ID 和用户 Key
如果您的 App 每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级 App 版本后初次访问时重新调用 setLoginUserId 方法

> **设置用户 Key 需在初始化 SDK 时设置 `config.idMappingEnabled = true`**

#### 参数说明

| 参数      | 参数类型 | 说明                                      |
| --------- | -------- | ----------------------------------------- |
| `userId`  | `string` | 长度限制大于 0 且小于等于 1000            |
| `userkey` | `string` | 长度限制大于 0 且小于等于 1000，默认为 '' |

#### 示例

```typescript
GrowingAnalytics.setLoginUserId('user')
GrowingAnalytics.setLoginUserId('user', 'harmony')
```

### 清除登录用户 ID

`static cleanLoginUserId()`

当用户登出之后调用，清除已经设置的登录用户ID

```typescript
GrowingAnalytics.cleanLoginUserId()
```

### 设置用户的地理位置

`static setLocation(latitude: number, longitude: number)`

设置用户当前的地理位置，基于WGS-84坐标

#### 参数说明

| 参数        | 参数类型 | 说明           |
| ----------- | -------- | -------------- |
| `latitude`  | `number` | 地理坐标点纬度 |
| `longitude` | `number` | 地理坐标点经度 |

#### 示例

```typescript
const latitude: number = 30.0
const longitude: number = 120.0
GrowingAnalytics.setLocation(latitude, longitude)
```

### 清除用户的地理位置

`static cleanLocation()`

清除用户当前的地理位置

```typescript
GrowingAnalytics.cleanLocation()
```

### 设置埋点事件

`static track(eventName: string, attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] } = {})`

发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在分析云平台事件管理界面创建埋点事件以及关联事件属性

#### 参数说明

| 参数         | 参数类型                                                                                                | 说明                                                    |
| ------------ |-----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| `eventName`  | `string`                                                                                            | 事件名，事件标识符                                             |
| `attributes` | <code>{ [key: string]: string &#124; number &#124; boolean &#124; string[] &#124; number[] &#124; boolean[] }</code> | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |

#### 示例

```typescript
GrowingAnalytics.track('buyProduct1')

GrowingAnalytics.track('buyProduct2', {
  'name': 'apple',
  'money': 1000,
  'num': 100,
  'from': ['sichuan', 'guizhou', 'hunan']
})
```

> 详细使用示例：[埋点事件示例](https://growingio.github.io/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse#埋点事件示例)

### 事件计时器

`static async trackTimerStart(eventName: string): Promise<string>`

初始化一个事件计时器，参数为计时事件的事件名称，返回值为该事件计时器唯一标识

`static async trackTimerPause(timerId: string)`

暂停事件计时器，参数为 trackTimer 返回的唯一标识

`static async trackTimerResume(timerId: string)`

恢复事件计时器，参数为 trackTimer 返回的唯一标识

`static async trackTimerEnd(timerId: string, attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] } = {})`

停止事件计时器，参数为 trackTimer 返回的唯一标识。调用该接口会自动触发删除定时器。

`static removeTimer(timerId: string)`

删除事件计时器，参数为 trackTimer 返回的唯一标识。
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

`static clearTrackTimer()`

清除所有已经注册的事件计时器。
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明

| 参数         | 参数类型                                                                                                | 说明                                                    |
| ------------ |-----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| `eventName`  | `string`                                                                                            | 事件名，事件标识符                                             |
| `attributes` | <code>{ [key: string]: string &#124; number &#124; boolean &#124; string[] &#124; number[] &#124; boolean[] }</code> | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |
| `timerId`    | `string`                                                                                            | 计时器唯一标识符，由`trackTimerStart`返回                         |

#### 示例

```typescript
let timerId = await GrowingAnalytics.trackTimerStart('eventName')
GrowingAnalytics.trackTimerPause(timerId)
GrowingAnalytics.trackTimerResume(timerId)
GrowingAnalytics.trackTimerEnd(timerId)
GrowingAnalytics.trackTimerEnd(timerId, {
  'property': 'value',
  'property2': 100
})
GrowingAnalytics.removeTimer(timerId)
GrowingAnalytics.clearTrackTimer()
```

> 注意：
>
> endTimer 时发送 CUSTOM 事件上报数据：
>
> - eventName 埋点事件标识符（trackTimerStart 传入）
> - attributes 用户自定义事件属性（trackTimerEnd 传入）
> - event_duration 事件时长 （SDK 内部根据 timerId 自动计算获取 ）
    >   event_duration 按照秒上报，小数点精度保证到毫秒
    >   event_duration 变量及其值会自动添加在 attributes 中
    >   event_duration 时间统计不会计算后台时间
> - eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性

### 设置登录用户属性

`static setLoginUserAttributes(attributes: { [key: string]: string | number | boolean | string[] | number[] | boolean[] })`

以登录用户的身份定义登录用户属性，用于用户信息相关分析

#### 参数说明

| 参数         | 参数类型                                                                                                | 说明         |
| ------------ |-----------------------------------------------------------------------------------------------------| ------------ |
| `attributes` | <code>{ [key: string]: string &#124; number &#124; boolean &#124; string[] &#124; number[] &#124; boolean[] }</code> | 用户属性信息 |

#### 示例

```typescript
GrowingAnalytics.setLoginUserAttributes({
  'name': 'ben',
  'age': 30
})
```

> 详细使用示例：[用户属性事件示例](https://growingio.github.io/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse#用户属性事件示例)

### 获取设备 ID

`static getDeviceId(): string`

获取设备 id，又称为匿名用户 id，SDK 自动生成用来定义唯一设备

```typescript
let deviceId = GrowingAnalytics.getDeviceId()
```

### 埋点事件通用属性

`static setGeneralProps(props: { [key: string]: string | number | boolean | string[] | number[] | boolean[] })`

为所有自定义埋点事件设置通用属性，多次调用，相同字段的新值将覆盖旧值；需在分析云平台事件管理界面关联事件属性

`static removeGeneralProps(keys: string[])`

移除指定字段的埋点事件通用属性

`static clearGeneralProps()`

移除所有埋点事件通用属性

#### 参数说明

| 参数    | 参数类型                                                                                                | 说明                                                |
| ------- |-----------------------------------------------------------------------------------------------------|---------------------------------------------------|
| `props` | <code>{ [key: string]: string &#124; number &#124; boolean &#124; string[] &#124; number[] &#124; boolean[] }</code> | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID) |

#### 示例

```typescript
GrowingAnalytics.setGeneralProps({
  'prop1': 10,
  'prop2': 'name',
  'prop3': [1, 2, 3],
  'prop4': ['a', 'b', 'c'],
  'name': 'banana'
})
GrowingAnalytics.removeGeneralProps(['prop1', 'prop2', 'prop3'])
GrowingAnalytics.clearGeneralProps()
```

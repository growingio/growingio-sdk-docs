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

`static setLoginUserId(userId: string, userKey?: string)`

当用户登录之后调用，设置登录用户 ID 和用户 Key

:::info
* 如果您的App每次用户升级版本时无需重新登录的话，为防止用户本地缓存被清除导致的无法被识别为登录用户，建议在用户每次升级App版本后初次访问时重新调用setLoginUserId方法

* 当需要标记用户ID类型时，请先进行规划，并在平台的数据中心，添加新的用户身份类型，再设置userkey，误设会影响数据质量。 **设置用户 Key 需在初始化 SDK 时设置 `config.idMappingEnabled = true`**
:::

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

`static track(eventName: string, attributes: GrowingAttrType = {})`

发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在分析云平台事件管理界面创建埋点事件以及关联事件属性

:::info
`GrowingAttrType` 为 SDK 限定的事件属性类型，实际为：
```
{ [key: string]: string | number | boolean | string[] | number[] | boolean[] }
```
:::

#### 参数说明

| 参数         | 参数类型          | 说明                                                         |
| ------------ | ----------------- | ------------------------------------------------------------ |
| `eventName`  | `string`          | 事件名，事件标识符                                           |
| `attributes` | `GrowingAttrType` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |

#### 示例

```typescript
GrowingAnalytics.track('buyProduct1')

GrowingAnalytics.track('buyProduct2', {
  'name': 'apple',
  'money': 1000,
  'num': 100,
  'from': ['sichuan', 'guizhou', 'hunan']
})

let attributes: GrowingAttrType = {}
attributes['a'] = 'b'
GrowingAnalytics.track('buyProduct3', attributes)
```

> 详细使用示例：[埋点事件示例](https://growingio.github.io/growingio-sdk-docs/knowledge/basicknowledge/trackEventUse#埋点事件示例)

### 事件计时器

`static async trackTimerStart(eventName: string): Promise<string>`

初始化一个事件计时器，参数为计时事件的事件名称，返回值为该事件计时器唯一标识

`static async trackTimerPause(timerId: string)`

暂停事件计时器，参数为 trackTimer 返回的唯一标识

`static async trackTimerResume(timerId: string)`

恢复事件计时器，参数为 trackTimer 返回的唯一标识

`static async trackTimerEnd(timerId: string, attributes: GrowingAttrType = {})`

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
| `attributes` | `GrowingAttrType` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID)（可选） |
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

`static setLoginUserAttributes(attributes: GrowingAttrType)`

以登录用户的身份定义登录用户属性，用于用户信息相关分析

#### 参数说明

| 参数         | 参数类型          | 说明         |
| ------------ | ----------------- | ------------ |
| `attributes` | `GrowingAttrType` | 用户属性信息 |

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

### 事件通用属性

`static setGeneralProps(props: GrowingAttrType)`

为所有自定义埋点事件设置通用属性，多次调用，相同字段的新值将覆盖旧值

`static removeGeneralProps(keys: string[])`

移除指定字段的埋点事件通用属性

`static clearGeneralProps()`

移除所有埋点事件通用属性

`static setDynamicGeneralProps(generator: () => GrowingAttrType)`

设置动态通用属性

#### 参数说明

| 参数    | 参数类型          | 说明                                                         |
| ------- | ----------------- | ------------------------------------------------------------ |
| `props` | `GrowingAttrType` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型 ID(记录 ID) |

#### 示例

```typescript
// 设置通用属性
GrowingAnalytics.setGeneralProps({
  'prop1': 10,
  'prop2': 'name',
  'prop3': [1, 2, 3],
  'prop4': ['a', 'b', 'c'],
  'name': 'banana'
})
// 清除指定字段的通用属性
GrowingAnalytics.removeGeneralProps(['prop1', 'prop2', 'prop3'])
// 清除通用属性
GrowingAnalytics.clearGeneralProps()
// 设置动态通用属性
GrowingAnalytics.setDynamicGeneralProps(() => {
  return {'dynamicProp' : Util.formatDate(new Date()) }
})
// 清除动态通用属性
GrowingAnalytics.setDynamicGeneralProps(() => ({}))
```

### Hybrid 打通

```typescript
static createHybridProxy(controller: webview.WebviewController): {
object: object;
name: string;
methodList: Array<string>;
controller: WebviewController;
} | undefined
```

在 webView 控件中注入 hybrid 实现打通 (javaScriptAccess 和 domStorageAccess 需同时设置为 true)：
```typescript
let url = 'https://www.example.com'
Web({ src: url, controller: this.controller})
  .javaScriptAccess(true)
  .domStorageAccess(true)
  .javaScriptProxy(GrowingAnalytics.createHybridProxy(this.controller))
```

对应的 H5 页面需要集成 Web JS SDK 以及 App 内嵌页打通插件才能生效

### 多实例采集

#### 初始化多实例

```typescript
let config = new GrowingConfig().NewSaaS(
'SubTracker AccountId',
'SubTracker DataSourceId',
'SubTracker UrlScheme',
'SubTracker DataCollectionServerHost<Optional>'
)
GrowingAnalytics.startSubTracker(trackerId, config)
```

初始化配置中，`accountId/dataSourceId/dataCollectionServerHost` 都可与主实例不同，具体如下表格：

| 配置项                        | 子实例是否能单独配置 |
| ----------------------------- | -------------------- |
| accountId                     | 是                   |
| dataSourceId                  | 是                   |
| urlScheme                     | 是                   |
| dataCollectionServerHost      | 是                   |
| debugEnabled                  | 否，以主实例为准     |
| sessionInterval               | 是                   |
| dataUploadInterval            | 是                   |
| dataCollectionEnabled         | 是                   |
| idMappingEnabled              | 是                   |
| requestOptions.connectTimeout | 是                   |
| requestOptions.readTimeout    | 是                   |
| dataValidityPeriod            | 否，以主实例为准     |
| encryptEnabled                | 是                   |
| compressEnabled               | 是                   |

**注意：初始化子实例前必须先初始化主实例**

#### 兼容 APIs

子实例可单独调用以下接口，其逻辑与其他实例相互隔离
```typescript
export interface GrowingAnalyticsInterface {
  isInitializedSuccessfully(): boolean
  setDataCollectionEnabled(enabled: boolean): void
  setLoginUserId(userId: string, userKey?: string): void
  cleanLoginUserId(): void
  
  setLoginUserAttributes(attributes: AttributesType): void
  track(eventName: string, attributes: AttributesType, sendTo?: string[]): void
  trackTimerStart(eventName: string): Promise<string>
  trackTimerPause(timerId: string): void
  trackTimerResume(timerId: string): void
  trackTimerEnd(timerId: string, attributes: AttributesType, sendTo?: string[]): void
  removeTimer(timerId: string): void
  clearTrackTimer(): void
}
```

假设子实例的 `trackerId` 为 `subTrackerId_01`，调用方式如下：
```typescript
// 获取子实例，需要先初始化该子实例，否则下述接口将无法生效
let subTracker = GrowingAnalytics.tracker('subTrackerId_01')

// 返回是否初始化成功
let success = subTracker.isInitializedSuccessfully()
if (!success) {
  return
}

// 数据采集开关
subTracker.setDataCollectionEnabled(true)

// 登录用户ID
subTracker.setLoginUserId('user')
subTracker.setLoginUserId('user', 'harmony')
subTracker.cleanLoginUserId()

// 设置埋点事件
subTracker.track('buyProduct1')
subTracker.track('buyProduct2', {
  'name': 'apple',
  'money': 1000,
  'num': 100,
  'from': ['sichuan', 'guizhou', 'hunan']
})

// 事件计时器
let timerId = await subTracker.trackTimerStart('eventName')
subTracker.trackTimerPause(timerId)
subTracker.trackTimerResume(timerId)
subTracker.trackTimerEnd(timerId)
let timerId2 = await subTracker.trackTimerStart('eventName2')
subTracker.trackTimerEnd(timerId2, {
  'property': 'value',
  'property2': 100
})
subTracker.removeTimer(timerId)
subTracker.clearTrackTimer()

// 设置登录用户属性
subTracker.setLoginUserAttributes({
  'name': 'ben',
  'age': 30
})

// Hybrid 打通
subTracker.createHybridProxy(this.controller)
```

#### SendTo

可使用 sendTo 功能将主实例或子实例的自定义事件转发到其他子实例：
```typescript
// 主实例track转发
GrowingAnalytics.track('buyProduct1', {}, ['subTrackerId_01', 'subTrackerId_02'])
GrowingAnalytics.track('buyProduct2', {
  'name': 'apple',
  'money': 1000,
  'num': 100,
  'from': ['sichuan', 'guizhou', 'hunan']
}, ['subTrackerId_01', 'subTrackerId_02'])

// 主实例事件计时器转发
let timerId = await GrowingAnalytics.trackTimerStart('eventName')
GrowingAnalytics.trackTimerEnd(timerId, {}, ['subTrackerId_01', 'subTrackerId_02'])
let timerId2 = await GrowingAnalytics.trackTimerStart('eventName2')
GrowingAnalytics.trackTimerEnd(timerId2, {
  'property': 'value',
  'property2': 100
}, ['subTrackerId_01', 'subTrackerId_02'])

// 子实例track转发
let subTracker = GrowingAnalytics.tracker('subTrackerId_01')
subTracker.track('buyProduct1', {}, ['subTrackerId_02'])
subTracker.track('buyProduct2', {
  'name': 'apple',
  'money': 1000,
  'num': 100,
  'from': ['sichuan', 'guizhou', 'hunan']
}, ['subTrackerId_02'])

// 子实例事件计时器转发
let timerId = await subTracker.trackTimerStart('eventName')
subTracker.trackTimerEnd(timerId, {}, ['subTrackerId_02'])
let timerId2 = await subTracker.trackTimerStart('eventName2')
subTracker.trackTimerEnd(timerId2, {
  'property': 'value',
  'property2': 100
}, ['subTrackerId_02'])
```
> 当前仅 track 和 trackTimerEnd 接口支持 sendTo 转发
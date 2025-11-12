---
sidebar_position: 2
title: 无埋点
---

SDK 自 2.3.0 起，正式支持无埋点上报和圈选

## 如何集成

### 开启无埋点监听

若您的应用需要使用无埋点功能，在主窗口对应的 Ability 的 onWindowStageCreate 方法中开启无埋点监听: 

```typescript
onWindowStageCreate(windowStage: window.WindowStage) {
  try {
    windowStage.loadContent('pages/Index',  (err: BusinessError) => {
      const errCode: number = err.code
      if (errCode) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`)
        return;
      }
      console.info('Succeeded in loading the content.')
      // 在 windowStage.loadContent 完成时，开启无埋点监听
      GrowingAnalytics.onWindowStageCreate(this, windowStage)
    });
  } catch (exception) {
    console.error(`Failed to load the content. Cause code: ${exception.code}, message: ${exception.message}`)
  }
}
```

> 注意：
> 该监听在未初始化 SDK 之前不会获取任何设备信息，以及产生事件数据

### 开启无埋点采集

在 SDK 初始化时，设置配置项 `autotrackEnabled` 为 `true` (2.1.0 版本默认为 `true`，2.2.0 版本起，默认为 `false`，后续版本可能会有所改动) 来开启采集无埋点数据: 

```typescript
startAnalytics() {
  let config = new GrowingConfig().NewSaaS(
    'Your AccountId',
    'Your DataSourceId',
    'Your UrlScheme',
    'Your DataCollectionServerHost<Optional>'
  )
  config.autotrackEnabled = true
  GrowingAnalytics.start(this.context, config)
}
```

### 开启页面浏览事件自动埋点

在 SDK 初始化时，设置配置项 `autotrackAllPages` 为 `true` (默认为 `false`) 来开启页面浏览事件自动埋点，适配组件导航 (Navigation) 和页面路由 (@ohos.router): 

```typescript
startAnalytics() {
  let config = new GrowingConfig().NewSaaS(
    'Your AccountId',
    'Your DataSourceId',
    'Your UrlScheme',
    'Your DataCollectionServerHost<Optional>'
  )
  config.autotrackAllPages = true
  GrowingAnalytics.start(this.context, config)
}
```

## 设置页面别名

您也可以通过手动设置页面别名，设置后：

* 页面路径为对应的别名
* 无论是否开启页面浏览事件自动埋点，该页面的页面浏览事件都将生成

### 基于组件导航 (Navigation)

```typescript
let destination = new NavPathInfo(name, {
  "growing_alias": "homePage"
} as Record<string, Object>)
this.pageStack.pushDestination(destination)
```

### 基于页面路由 (@ohos.router)

```typescript
router.pushUrl({
  url: path,
  params: {
    "growing_alias": "homePage"
  }
})
```

## 设置页面标题

### 基于组件导航 (Navigation)

```typescript
let destination = new NavPathInfo(name, {
  "growing_title": "home"
} as Record<string, Object>)
this.pageStack.pushDestination(destination)
```

### 基于页面路由 (@ohos.router)

```typescript
router.pushUrl({
  url: path,
  params: {
    "growing_title": "home"
  }
})
```

## 设置页面属性

通过手动设置页面属性为该页面添加事件发生时所伴随的属性信息

### 基于组件导航 (Navigation)

```typescript
let destination = new NavPathInfo(name, {
  "growing_attributes": {
    "key1": "value1",
    "key2": 100
  } as Record<string, Object>
} as Record<string, Object>)
this.pageStack.pushDestination(destination)
```

### 基于页面路由 (@ohos.router)

```typescript
router.pushUrl({
  url: path,
  params: {
    "growing_attributes": {
      "key1": "value1",
      "key2": 100
    }
  }
})
```

## 最佳实践

### 设置组件标识

为了确保点击事件中组件路径的准确性，在必要时，可以对自定义组件添加组件唯一标识符。这是由于自定义组件在其有渲染内容时，其类型为`__Common__`

> 相关文档:  <br/>
> 获取节点的类型: <br/>
> *https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#getnodetype12*
> 
> 组件标识:  <br/>
> *https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-component-id*



另外，当无法圈选某个可以触发点击事件的组件时，请对该组件添加组件唯一标识符，且添加 GrowingAutotrackElementID 标记，使得 SDK 认定该组件可以圈选：

```typescript
Button('Not focusable').id('uniqueID-xxx-' + GrowingAutotrackElementID)
```

### 设置页面别名

如果您的应用中有 NavDestination 页面名称相同，或 Router 目标命名路由页面名称相同的情况，请通过设置页面别名来避免数据分析异常
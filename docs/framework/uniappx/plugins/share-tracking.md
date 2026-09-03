---
sidebar_position: 4
title: 分享采集
---

`gioShareTracking` 用于微信小程序分享、朋友圈和收藏采集。

适用平台：微信小程序。

不适用平台：Web、Android App、iOS App、HarmonyOS App。

## 注册插件

```js
gdp('registerPlugins', [
  {
    name: 'gioShareTracking'
  }
] as Array<UTSJSONObject>)
```

插件启用后，SDK 会采集以下系统事件：

| 微信生命周期 | 事件名 |
| --- | --- |
| `onShareAppMessage` | `$mp_on_share` |
| `onShareTimeline` | `$mp_share_timeline` |
| `onAddToFavorites` | `$mp_add_favorites` |

事件属性包括分享标题、分享路径、分享查询参数、分享来源和目标等字段。SDK 会优先使用业务页面返回的分享信息，取不到时使用当前页面信息。

## 自动包装

插件安装后，SDK 会自动包装业务页面已经声明的分享相关 hook：

```js
export default {
  onShareAppMessage(options : any | null) : any | null {
    return {
      title: '分享标题',
      path: '/pages/index/index?from=share'
    } as UTSJSONObject
  }
}
```

SDK 不会给未声明分享能力的页面强行补 hook，避免让页面意外出现转发入口。

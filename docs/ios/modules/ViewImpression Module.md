---
sidebar_position: 4
title: 曝光采集模块
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

为视图标记一个事件名和属性，元素进入可视区域并满足曝光条件（可见面积比例、停留时长）时，自动发送对应的自定义事件（CUSTOM）。

:::info
- **使用时注意模块版本需要与采集 SDK 版本保持一致**，自 4.14.0 起提供
- 曝光事件携带页面路径，依赖无埋点能力，仅支持无埋点 SDK；关闭无埋点（`autotrackEnabled = NO`）时曝光同样不采集
- 不支持 App Extension
:::

:::caution
自 4.14.0 起，本模块替代旧版曝光模块 ImpressionTrack，两者互斥：同时集成时由 ViewImpression 接管，ImpressionTrack 自动禁用并输出错误日志。仍在使用 ImpressionTrack 的请参考 [从 ImpressionTrack 迁移](#从-impressiontrack-迁移)。
:::

--------

<Tabs>
  <TabItem value="swiftPM" label="Swift Package Manager集成" default>

### 模块集成

1. 添加 **GrowingModule_ViewImpression** Package

<br/>

### 采集接口

ViewImpression 模块中提供了如下 `UIView` 接口：

#### 1.开启某元素的曝光采集

`trackViewImpression(_ eventName: String)`<br/>
`trackViewImpression(_ eventName: String, attributes: [String: Any]?)`<br/>
标记曝光元素，在元素上屏前调用即可，SDK 负责检测元素可见性并触发事件<br/>
事件类型为自定义事件 (CUSTOM)

| 参数      | 参数类型    | 是否可选    | 说明              |
| --------- | ----------- | ----------- | ----------------- |
| `eventName` | `String` |  否 | 自定义事件名称 |
| `attributes` | `[String: Any]?` |  是 | 事件发生时所伴随的属性信息（可选），属性值支持 String、Number、Date、Set、Array；<br/>当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID) |

##### 示例

列表场景直接在 `cellForRowAt` 中标记复用的 cell 或其子视图即可：

```swift
func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "GoodsCell", for: indexPath) as! GoodsCell
    let goods = goodsList[indexPath.row]
    cell.bind(goods)

    cell.trackViewImpression("goods_impression",
                             attributes: ["goods_id": goods.goodsId, "position": indexPath.row])
    return cell
}
```

#### 2.停止某元素的曝光采集

`stopTrackViewImpression()`<br/>
移除该视图上的全部曝光标记

##### 示例

```swift
view.stopTrackViewImpression()
```

### 曝光配置

在 SDK 初始化配置中设置，SDK 启动之后再修改不会生效：

```swift
import GrowingAutotracker
import GrowingModule_ViewImpression

let config = AutotrackConfig(accountId: "YourAccountId")
// 元素可见面积达到 50% 且连续可见 1 秒后才算一次曝光
config?.viewImpressionConfig = ImpressionConfig(impressionScale: 0.5, stayDuration: 1.0)
// 曝光采集开关，默认 true
config?.viewImpressionEnabled = true
// 曝光检测节流间隔，单位秒，默认 0.5
config?.viewImpressionCheckInterval = 0.5
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

### 模块集成

1. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/ViewImpression'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

<br/>

### 采集接口

ViewImpression 模块中提供了如下 `UIView` 接口：

#### 1.开启某元素的曝光采集

`growingTrackViewImpression:`<br/>
`growingTrackViewImpression:attributes:`<br/>
标记曝光元素，在元素上屏前调用即可，SDK 负责检测元素可见性并触发事件<br/>
事件类型为自定义事件 (CUSTOM)

| 参数      | 参数类型    | 说明              |
| --------- | ----------- | ----------------- |
| `eventName` | `NSString` | 自定义事件名称 |
| `attributes` | `NSDictionary<NSString *, id> *` | 事件发生时所伴随的属性信息（可选），属性值支持 NSString、NSNumber、NSDate、NSSet、NSArray；<br/>当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID) |

##### 示例

列表场景直接在 `cellForRowAtIndexPath:` 中标记复用的 cell 或其子视图即可：

```objectivec
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    GoodsCell *cell = [tableView dequeueReusableCellWithIdentifier:@"GoodsCell" forIndexPath:indexPath];
    Goods *goods = self.goodsList[indexPath.row];
    [cell bindGoods:goods];

    [cell growingTrackViewImpression:@"goods_impression"
                          attributes:@{@"goods_id": goods.goodsId, @"position": @(indexPath.row)}];
    return cell;
}
```

#### 2.停止某元素的曝光采集

`growingStopTrackViewImpression`<br/>
移除该视图上的全部曝光标记

##### 示例

```objectivec
[view growingStopTrackViewImpression];
```

### 曝光配置

在 SDK 初始化配置中设置，SDK 启动之后再修改不会生效：

```objectivec
#import "GrowingViewImpression.h"

GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithAccountId:@"accountId"];
// 元素可见面积达到 50% 且连续可见 1 秒后才算一次曝光
configuration.viewImpressionConfig = [GrowingImpressionConfig configWithImpressionScale:0.5f stayDuration:1.0];
// 曝光采集开关，默认 YES
configuration.viewImpressionEnabled = YES;
// 曝光检测节流间隔，单位秒，默认 0.5
configuration.viewImpressionCheckInterval = 0.5;
```

  </TabItem>
</Tabs>

## 配置说明

| 配置项 | 参数类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `viewImpressionConfig` | `GrowingImpressionConfig` | `impressionScale = 0`，`stayDuration = 0` | 曝光条件的全局默认值 |
| `viewImpressionEnabled` | `BOOL` | `YES` | 曝光采集开关。无埋点关闭时无论如何都不采集，此开关仅用于在无埋点开启的前提下单独关闭曝光 |
| `viewImpressionCheckInterval` | `NSTimeInterval` | `0.5` | 曝光检测节流间隔，单位秒；置为 0 表示每次 runloop 休眠前都检测 |

`GrowingImpressionConfig`（Swift 中为 `ImpressionConfig`）：

| 属性 | 说明 | 默认值 |
| :--- | :--- | :--- |
| `impressionScale` | 可见面积占元素自身面积的比例阈值，有效范围 0~1，超出范围将被截断 | `0`，露出即算曝光 |
| `stayDuration` | 连续可见需要满足的最小时长，单位秒，负值按 0 处理 | `0`，无需停留 |

## 曝光规则

**可见性判定**：从元素自身出发逐级向上，遇到会裁剪的祖先（`clipsToBounds` 为 YES，或 `UIScrollView`）就与它的 bounds 求交，最后与所在 window 求交，用剩下的面积比对阈值。因此滚出了滚动容器、但屏幕坐标仍落在屏内的元素，会被判定为不可见。

**重复曝光**：默认支持重复曝光，元素满足条件发送一次事件后，离开可视区再次进入会再发送一次。以下情况不会重复发送：

- 元素一直停留在可视区内，无论停留多久
- App 退到后台再回到前台，期间元素没有离开过可视区
- 重复标记，但事件名、属性、配置三者都没有变化。因此列表刷新时对可见元素原样重标是安全的，cell 复用后绑定新数据重新标记也不会残留上一行的内容

**忽略规则**：标记遵循无埋点的忽略规则，视图被 `ignoreViewClasses` 命中，或自身/任一祖先设置了 `GrowingIgnoreAll`、`GrowingIgnoreSelf`、`GrowingIgnoreChildren` 时，标记会被忽略并输出警告日志。

**线程**：所有接口内部都会切到主线程执行，在子线程调用是安全的。

## 从 ImpressionTrack 迁移

替换集成（CocoaPods 中 `GrowingAnalytics/ImpressionTrack` 改为 `GrowingAnalytics/ViewImpression`，SwiftPM 中 `GrowingModule_ImpressionTrack` 改为 `GrowingModule_ViewImpression`），并替换方法名，三者语义一一对应：

| ImpressionTrack | ViewImpression |
| :--- | :--- |
| `growingTrackImpression:` / `trackImp(_:)` | `growingTrackViewImpression:` / `trackViewImpression(_:)` |
| `growingTrackImpression:attributes:` / `trackImp(_:attributes:)` | `growingTrackViewImpression:attributes:` / `trackViewImpression(_:attributes:)` |
| `growingStopTrackImpression` / `stopTrackImp()` | `growingStopTrackViewImpression` / `stopTrackViewImpression()` |

需要留意以下行为差异：

| 差异 | 影响 |
| :--- | :--- |
| 可见性判定更严格 | 按祖先逐级裁剪后与所在 window 求交，不再使用未裁剪的屏幕坐标。原先被误判为可见的元素不再曝光，**迁移后曝光量会下降** |
| 检测节流默认 0.5 秒 | ImpressionTrack 默认每次 runloop 休眠前都检测，极快速滑过的元素可能不再触发 |
| 前后台切换不再重发 | 元素未离开可视区时，App 退到后台再回到前台不会重新曝光，ImpressionTrack 会重发 |
| 标记时不判可见性 | 标记只判忽略规则，可见性交给每轮检测，先标记后上屏同样会曝光 |
| 配置不互通 | 不读取 `impressionScale` 初始化配置，需改用 `viewImpressionConfig` |
| 不做方法交换 | 不再交换 `UIView` 的任何系统方法 |

## 限制

- 不做遮挡检测，被上层视图完全盖住的元素仍按可见处理
- 元素或其祖先设置了 `transform` 时，面积占比的判定不准确

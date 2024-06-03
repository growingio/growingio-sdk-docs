---
title: 版本记录
sidebar_position: 0
---

# [4.3.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.3.0...4.3.1) (2024-05-31)


### Bug Fixes

* visionOS 平台使用 Cocoapods 集成支持，以及稳定性优化 ([#317](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/317)) ([9ab87ec](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9ab87ec8fc3710e2d7574afd84aa8ccd214a1116))


# [4.3.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.2.0...4.3.0) (2024-05-07)


### Bug Fixes

* 优化事件发送逻辑 ([#304](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/304)) ([d54bef0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d54bef0b7a7646973f2730fe84efc9ac41353367))
* 添加 privacy manifest (watchOS/tvOS/visionOS 平台) ([#303](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/303)) ([3ce88fc](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/3ce88fc237eb13a4ec90432dba27899d2a836115))
* **autotrack:** 当配置 autotrackAllPages 为 true 时，忽略 GioKit 页面 ([#302](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/302)) ([59e5cdd](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/59e5cdd29b1decaf0ce229a72066f06ee053f1d6))
* **perf:** 优化函数 growingHelper_beautifulJsonString 造成的性能损失 ([#312](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/312)) ([f8150cb](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f8150cb4955f0b015c6bb5f17e4d81a1170f66f2))
* 修复 UICollectionView/UITableView 点击监听 bug ([#316](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/316)) ([0ec1ab0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0ec1ab088dfcaf4e8ade23a096d1934c432cad46))
* **v2Adapter:** 兼容更多老 SaaS 的属性值的类型 ([#307](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/307)) ([f2f032b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f2f032bdd1569454378abac615a65b61815b496a))


### Features

* 新增动态通用属性接口 ([#308](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/308)) ([bec7290](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/bec729034d12467fa97fa101e5bb3e32cb133021))
* 新增配置项 dataValidityPeriod ([#310](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/310)) ([a52fefa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a52fefa7a7bf7a3590c49c501f193449aa94f631))
* 新增 watchOS/tvOS/visionOS/SwiftUI 支持 ([#300](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/300)) ([0ef1b26](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0ef1b260915febb12b080edac0f5b13e08b1e592))

# [4.2.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.1.0...4.2.0) (2024-03-14)


### Features

* **autotrack:** 新增配置项 autotrackAllPages ([#301](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/301)) ([5cb409b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5cb409b7fbabf6256a91670a1bd5db4843f8b1ac))


# [4.1.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.0.0...4.1.0) (2024-01-25)


### Features

* 新增 App Extension 支持 ([#296](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/296)) ([4a9d038](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4a9d038323b68393dd62f9edffd39955a3d85e45))
* 更新 Flutter 模块逻辑 ([#295](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/295)) ([a52bc94](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a52bc94c31048920ce701edfc13f177e4aa1f14b))

# [4.0.0](https://github.com/growingio/growingio-sdk-ios-autotracker/tree/4.0.0) (2023-12-25)

### Features

* 新增 AB 实验模块 ([#281](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/281)) ([2d3950f](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2d3950f0844fde3af1dc26862392bb825c299bef))
* 新增通用属性相关接口 ([#286](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/286)) ([e60f1fa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e60f1faaf9e50920c5cf5524d4e900fc54d90b3f))
* 无埋点重构 ([#268](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/268))

---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-ios-autotracker/releases)
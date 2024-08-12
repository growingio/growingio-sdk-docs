---
title: 版本记录
sidebar_position: 0
---
## [4.3.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.3.1...4.3.2) (2024-07-26)


### Bug Fixes

* 同步 v3.8.3 上的修改内容 ([#324](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/324)) ([c82c206](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/c82c206a840685e230dd355baa667daa17c904ca))





# [3.8.4](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.8.3...3.8.4) (2024-07-24)


### Bug Fixes

* Mobile Debugger 意外崩溃 ([4fe4558](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4fe4558965a2f2f95d0f48d82501d49b1ac3cd0f))

# [3.8.3](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.8.2...3.8.3) (2024-07-18)


### Bug Fixes

* ANLSPI-20159 remove NSLog on release mode ([b0c2c6a](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/b0c2c6a24c811a8ffe1c5d31d89ddd17aa7c1b32))
* ANLSPI-20126 do not send autotrack event when session state is not active ([1ae98f0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/1ae98f066d979c724aba9598f038e4781dac38d9))

# [4.3.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.3.0...4.3.1) (2024-05-31)


### Bug Fixes

* visionOS support via Cocoapods ([#317](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/317)) ([9ab87ec](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/9ab87ec8fc3710e2d7574afd84aa8ccd214a1116))


# [3.8.2](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.8.1...3.8.2) (2024-05-23)


### Bug Fixes

* ANLSPI-18506 crash when dismiss action sheet triggered by popover dimming view (https://github.com/growingio/growingio-sdk-ios-autotracker/commit/cd7f2e0ff253108b3ff08fef169e662c229356bb)

# [4.3.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.2.0...4.3.0) (2024-05-07)


### Bug Fixes

* add limit of events data length when query from db ([#304](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/304)) ([d54bef0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/d54bef0b7a7646973f2730fe84efc9ac41353367))
* add privacy manifest for watchOS/tvOS/visionOS platform ([#303](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/303)) ([3ce88fc](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/3ce88fc237eb13a4ec90432dba27899d2a836115))
* **autotrack:** ignore pages in GioKit by moving autotrackAllPages logic to viewDidLoad ([#302](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/302)) ([59e5cdd](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/59e5cdd29b1decaf0ce229a72066f06ee053f1d6))
* **perf:** func growingHelper_beautifulJsonString waste a lot of cpu time ([#312](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/312)) ([f8150cb](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f8150cb4955f0b015c6bb5f17e4d81a1170f66f2))
* UICollectionView/UITableView swizzle bug ([#316](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/316)) ([0ec1ab0](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0ec1ab088dfcaf4e8ade23a096d1934c432cad46))
* **v2Adapter:** 兼容更多老 SaaS 的属性值的类型 ([#307](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/307)) ([f2f032b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/f2f032bdd1569454378abac615a65b61815b496a))


### Features

* add set dynamic generalProps generator ([#308](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/308)) ([bec7290](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/bec729034d12467fa97fa101e5bb3e32cb133021))
* data validity period ([#310](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/310)) ([a52fefa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a52fefa7a7bf7a3590c49c501f193449aa94f631))
* watchOS/tvOS/visionOS/SwiftUI support ([#300](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/300)) ([0ef1b26](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/0ef1b260915febb12b080edac0f5b13e08b1e592))





# [3.8.1](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/3.8.0...3.8.1) (2024-05-07)


### Bug Fixes

* UICollectionView/UITableView swizzle bug ([#315](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/315))

# [4.2.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.1.0...4.2.0) (2024-03-14)


### Features

* **autotrack:** autotrack-page white list ([#301](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/301)) ([5cb409b](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/5cb409b7fbabf6256a91670a1bd5db4843f8b1ac))





# [4.1.0](https://github.com/growingio/growingio-sdk-ios-autotracker/compare/4.0.0...4.1.0) (2024-01-25)


### Features

* app extension support ([#296](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/296)) ([4a9d038](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/4a9d038323b68393dd62f9edffd39955a3d85e45))
* flutter module to v4 logic ([#295](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/295)) ([a52bc94](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/a52bc94c31048920ce701edfc13f177e4aa1f14b))





# [4.0.0](https://github.com/growingio/growingio-sdk-ios-autotracker/tree/4.0.0) (2023-12-25)

### Features

* add abtesting module ([#281](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/281)) ([2d3950f](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2d3950f0844fde3af1dc26862392bb825c299bef))
* request timeout config (merge [#293](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/293)) ([2e599ec](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/2e599ec62dfa099733c5fb97f0a4f4e262d9eb40))
* add generalProps APIs ([#286](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/286)) ([e60f1fa](https://github.com/growingio/growingio-sdk-ios-autotracker/commit/e60f1faaf9e50920c5cf5524d4e900fc54d90b3f))

### Refactor (BREAKING CHANGE)

* Enhancing Autotrack Core in SDK 4.x ([#268](https://github.com/growingio/growingio-sdk-ios-autotracker/issues/268))





---
## 更多发布细节请参考 [SDK Releases in Github](https://github.com/growingio/growingio-sdk-ios-autotracker/releases)